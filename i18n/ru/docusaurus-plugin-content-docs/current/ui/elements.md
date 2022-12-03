# Элементы

Осуществляют большинство функций, требуемых от интерфейса. Элемент самолично обрабатывает действия пользователя и на их основе изменяется, переключая свое состояние или сообщая о взаимодействии окну. Также как и любой другой компонент, элемент отрисовывается на холсте (канвасе), но еще и может динамически изменять свое содержимое.

## Жизненный цикл

## Разновидности элементов

### Изображения

<div className="resource-atlas-align-box">

![image.gif](/images/ui/image.gif)

</div>

### Текст

<div className="resource-atlas-align-box">

![text.gif](/images/ui/text.gif#gh-light-mode-only)
![text_when_dark.gif](/images/ui/text_when_dark.gif#gh-dark-mode-only)

</div>

### Кнопки

<div className="resource-atlas-align-box">

![button.gif](/images/ui/button.gif)

</div>

### Слоты

<div className="resource-atlas-align-box">

![slot.gif](/images/ui/slot.gif)

</div>

### Шкалы

<div className="resource-atlas-align-box">

![scale.gif](/images/ui/scale.gif)

</div>

### Переключатели

<div className="resource-atlas-align-box">

![switch.gif](/images/ui/switch.gif)

</div>

### Ползунки

<div className="resource-atlas-align-box">

![scroll.gif](/images/ui/scroll.gif)

</div>

### Растягиваемые фреймы

<div className="resource-atlas-align-box">

![frame.gif](/images/ui/frame.gif)

</div>

:::info Схожие реализации

Фреймы здесь по принципу схожи с [9-patch'ами](TODO), задействованными в Android. Для движка задействована собственная обработка и нельзя просто использовать патчи в качестве входных битмапов. Однако, нет никаких ограничений в использовании пакетов системы, так что вы можете просто обработать изображения на этапе предзагрузки.

:::

## Комбинируем

Большинство элементов друг без друга будут выглядеть странно. К примеру, как можно представить себе обычную кнопку без текста? Что она должна делать?

## Привязка событий
