# Анимирование

Все мы видели, как игровые интерфейсы умеют не просто открываться, а делать это с некоторыми эффектами. Например инвентарь движется снизу вверх при открытии, а при закрытии сверху вниз. Появление достижений из Java издания игры и изучений из [Ancient Wonders](https://github.com/Reider745/AncientWonders/blob/main/core/dev/core/ScrutinyAPI_v2.js#L444C1-L537C2) и [Infinite Forest](https://github.com/ArtemKot4/libraries/blob/main/dev/Notification/AchievementNotification.ts) тоже имеет свою анимацию. В данной главе мы рассмотрим подходы реализации похожего поведения, а так же некоторые особенности, которые вам придётся учитывать.

## Использование потоков
В одной из прошлых статей мы [разбирали потоки](https://nernar.github.io/ru/docs/events/threading), если вы её не видели, обязательно прочитайте. Есть несколько подходов для создания анимации, такие как использование Updatable, android.animation.ValueAnimator и Threading. Мы будем рассматривать только Threading, ведь это позволит нам более удобно управлять анимацией.

### Начинаем писать нашу анимацию
Хорошо, мы определились с инструментами, давайте определимся с интерфейсом, на основе которого мы будем разбираться в анимировании.
```js
const animator = {
    //константы
    MAX_HEIGHT: 270, //максимальное число, на которое будут опускаться элементы
    TEXT_X: 1000 - (48 * 3) + (45 + 5) + 2,
    TEXT_Y: 210,
    ICON_X: (1000 - 48 * 3) + 2.5,
    ICON_Y: 192.5,
    //технические
    inited: false, //переменная для определения, запущена ли анимация в данный момент.
    queue: [] //очередь, анимация будет повторяться пока она не будет пустой
};
animator.window = new UI.Window({
    drawing: [{
        type: "background",
        color: android.graphics.Color.TRANSPARENT
    }],
    elements: {
        balanceIcon: {
            x: this.ICON_X,
            y: this.ICON_Y,
            type: "image",
            width: 40,
            height: 40,
            bitmap: "manager.balance_icon"
        },
        balanceText: {
            type: "text",
            x: this.TEXT_X,
            y: this.TEXT_Y,
            text: "?",
            font: {
                size: 15,
                color: android.graphics.Color.LTGRAY
            }
        }
    }
});
animator.window.setDynamic(true); //задаём возможность менять данные интерфейса явно. 
animator.window.setTouchable(false); //делаем интерфейс не кликабельным. Это значит, что функции клика не будут работать.
animator.window.setAsGameOverlay(true); //задаём интерфейс как игровой оверлей. Это значит, что интерфейс не будет мешать игровым звукам. 
```
Мы реализуем анимацию траты денег, где деньги будут спускаться вниз и плавно пропадать.
### Подход
Если мы попробуем просто менять контент через:
```js
<UI.Window>.content.elements[название элемента][название] = значение;
```

это будет медленно и анимация не будет достаточно плавной. Сегодня мы рассмотрим использование другого подхода. 
### Новый способ изменять данные элементов!
Давайте перейдём сразу к примеру.
```js
const elements = animator.window.getElements();
const balanceIcon = elements.get("balanceIcon");
balanceIcon.setPosition(animator.ICON_X + 10, animator.ICON_Y + 10);
```
Что делает этот код? Он получает список элементов интерфейса при помощи getElements и получает элемент нашей иконки и меняет позицию.

Ключевые методы работы:
```js
const elements = animator.window.getElements();
const balanceIcon = elements.get("balanceIcon"); //получаем наш элемент balanceIcon в нужном представлении, который мы регистрировали в animator.window.content.elements.balanceIcon

//методы для получения данных вне зависимости от того, открыто ли окно:
balanceIcon.setBinding(название ключа, значение) //это позволяет менять другие параметры помимо позиции по имени ключа, никогда не меняйте позицию при помощи него
balanceIcon.getBinding(название ключа) //возвращает значение по названию ключа
balanceIcon.setPosition(x, y) //позволяет очень быстро менять позиции элементов, это нам сегодня и понадобится

//методы, работающие строго при открытом окне:
const alpha = animator.window.layout.getAlpha(); //получаем прозрачность окна
animator.window.layout.setAlpha(число от 0 до 1); //ставим прозрачность окну
```
Способы определить, была ли анимация уже запущена:
```js
//Первый способ
Threading.getThread(название потока, мы будем использовать "thread.example.money") != null

//Второй способ
animator.inited == true //используем нашу переменную inited, этот способ будет использоваться в нашем примере
```
### Пишем вспомогательные функции
Для начала напишем вспомогательные методы. Первый будет менять значение прозрачности окна, второй возвращать его, третий будет сбрасывать значения до начальных, а четвёртый менять позицию наших интерфейсов:
```js
animator.setAlpha = function(alpha) {
    if(this.window.isOpened()) { //если наше окно открыто
        this.window.layout.setAlpha(alpha); //ставим переданную прозрачность
    }
}

animator.clearValues = function() {
    this.setAlpha(1); //убираем прозрачность, чтобы окно было полностью видно
    this.setHeight(0); //сбрасываем позиции
    this.window.content.elements.balanceText.text = "-5000"; //ставим число списанных денег с нашего импровизированного счёта
}

animator.setHeight = function(height) {
    const elements = this.window.getElements();
    const balanceText = elements.get("balanceText");
    const balanceIcon = elements.get("balanceIcon");

    balanceText.setPosition(this.TEXT_X + height, this.TEXT_Y);
    balanceIcon.setPosition(this.ICON_X + height, this.ICON_Y);
}

animation.getAlpha = function() {
    if(this.window.isOpened()) { //проверяем, открыто ли окно
        return this.window.layout.getAlpha(); //возвращаем значение прозрачности окна
    }
    return 0; //возвращаем 0, если окно закрыто
}
```
:::danger Запускайте потоки только тогда, когда это нужно

Никогда не забывайте проверять, работает ли в данный момент поток, иначе анимация будет ускоряться, а нагрузка на процессор увеличиваться. Самое лучшее что вы можете сделать, это реализовать систему, которая будет добавлять значения в очередь когда анимация работает, и работать с ними когда она завершается.

:::

Приступим к написанию функции запуска нашей анимации для пользователя
```js
animator.init = function(number) {
    if(this.inited == true) {
        this.queue.push(number);
        return;
    }
    this.inited = true;
    if(!this.window.isOpened()) {
        this.window.open();
    }
    this.clearValues();
    this.start(); //эта функция будет запускать поток, её напишем следующей
}
```

:::tip Использование try-catch — хороший подход!

Хотя в данном руководстве мы не будем его применять, если вы не уверены в надёжности своего кода, это может стать хорошим решением.

:::

### Приступаем к написанию анимации
```js
animator.start = function() {
    let height = 0;
    Threading.initThread("thread.example.money", () => {
        while(true) { //цикл будет выполняться до тех пор, пока анимация естественным образом не завершится
            java.lang.Thread.sleep(3); //усыпляет анимацию на 3 миллисекунды. От этого значения напрямую зависит скорость анимации, чем меньше значение, тем быстрее работает поток.
            const alpha = this.getAlpha(); //безопасно получаем значение прозрачности окна
            if((height >= this.MAX_HEIGHT && alpha <= 0) || !this.window.isOpened()) { //проверяем, пора ли завершать анимацию
                this.inited = false; //сбрасываем значение inited, позволяя нашей анимации быть вновь запущенной
                if(this.queue.length > 0) { //пытаемся узнать, есть ли в очереди числа
                    return this.init(this.queue.shift()); //запускаем анимацию с новыми значениями, если наша очередь не пуста. Это значит, что если мы вызвали функцию init например 3 раза, анимация будет показана 3 раза последовательно
                }
                this.window.close(); //закрываем окно
                return;
            }
            if(height >= (this.MAX_HEIGHT / 2) && alpha > 0) { //проверяем, пролетела ли анимация полпути
                this.setAlpha(alpha - 0.05); //обновляем значение прозрачности
            }
            if(height < this.MAX_HEIGHT) { //проверяем, что анимация ещё не пролетела нужный путь
                this.setHeight(height++); //обновляем и одновременно ставим позиции нашим элементам
            } 
        }
    });
}
```
На этом всё. Теперь при вызове animator.init(число) у нас появится слева анимация, которая пролетит вниз.
```js
Callback.addCallback("ItemUse", () => {
    animator.init(10);
});
```
Если вы хотите увидеть реализацию более сложных анимаций, напоминающих эту, кликайте [сюда](https://github.com/ArtemKot4/FFManager/blob/main/code/BalanceOverlay.ts)

:::tip Не отчаивайтесь!

Если у вас не получается написать анимацию с первого раза, ничего страшного! У многих мододелов не сразу получалось, в том числе и у [меня](https://github.com/ArtemKot4). Главное не сдавайтесь, и у вас точно получится!

:::
## Готовые решения
Хотя написание собственных анимаций позволяет вам лучше понять работу потоков, никто не заставляет вас делать это с нуля. Вы можете воспользоваться [моей библиотекой](https://github.com/ArtemKot4/libraries/tree/main/release/Notification) для создания любых анимаций, или [ScrutinyAPI](https://github.com/Reider745/libs/tree/main/ScrutinyAPI) для создания анимаций подобных изучениям из Ancient Wonders и квестов. 

Не бойтесь экспериментировать!
#### Ещё примеры анимаций: 
1. [обучение](https://github.com/ArtemKot4/FFManager/blob/main/code/HelperWindow.ts)
2. [изучения](https://github.com/ArtemKot4/libraries/blob/main/dev/Notification/AchievementNotification.ts)
3. [плавное возникновение](https://github.com/ArtemKot4/libraries/blob/main/dev/Notification/TransparentNotification.ts)
4. [смещение эффектов](https://github.com/ArtemKot4/libraries/blob/main/dev/EffectBar/EffectHud.ts#L301-L312)
5. [Появление и исчезновение эффектов](https://github.com/ArtemKot4/libraries/blob/main/dev/EffectBar/EffectHud.ts#L319-L366)