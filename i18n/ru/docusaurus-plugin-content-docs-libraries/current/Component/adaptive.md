# Адаптивность
Компоненты хоть и позволяют удобно оформлять элементы, но это не единственный способ применения.
Они умеют самостоятельно вычислять свои позиции на основе предыдущих, принадлежащих к их типу, а так же ширины и высоты элемента, но только во время сборки списка элементов.

Помните, что в html у нас есть `margin-top, margin-bottom, margin-left, margin-right`? В компонентах есть то же самое, но сдвигает оно на юниты.

Давайте рассмотрим пример:
```tsx
const Adaptive = (properties, children) => (
    <image marginBottom="10" marginRight="10" width="50" height="50" name={children}>aboba</image>
);

const elements = (
    <>
        <Adaptive>A</Adaptive>
        <Adaptive>B</Adaptive>
    </>
)
```
Как выглядит объект elements?:
```js
{
    A: {
        type: "image",
        width: 50,
        height: 50,
        x: 0,
        y: 0,
        ...
    },
    B: {
        type: "image",
        width: 50,
        height: 50,
        x: 50 + 10,
        y: 50 + 10,
        ...
    }
}
```
Как мы видим, marginBottom опустил элемент на 10 юнитов, в то время marginRight сдвинул элемент на 10 юнитов вправо.

Что нам делать, если нам нужно, чтобы какие-то элементы могли разные отсчёты?

На помощь нам приходят <u>идентификаторы элементов</u>. Они позволяют разделять элементы на категории, позиции которых вычисляются обособленно. Давайте рассмотрим пример:
```tsx
const Test = (properties, children) => (
    <image marginBottom="10" marginRight="10" width="50" height="50" name={children} id={properties.id}>test</image>
);

const elementSet = (
    <>
        <Test>a</Test>
        <Test>b</Test>
        <Test id="aboba">o</Test>
        <Test>b_</Test>
        <Test id="aboba">a_</Test>
    </>
);
```
Итоговый объект:
```js
{
    a: {
        type: "image", marginBottom: 10, marginRight: 10,width: 70,height: 70, clicker: {}, bitmap: "test", x: 0, y: 0
    },
    b: {
        type: "image", marginBottom: 10, marginRight: 10, width: 70, height: 70, clicker: {}, bitmap: "test", x: 80, y: 80
    },
    o: {
        type: "image", marginBottom: 10, marginRight: 10, width: 70, height: 70, id: "aboba", clicker: {}, bitmap: "test", x: 0, y: 0
    },
    b_: {
        type: "image", marginBottom: 10, marginRight: 10, width: 70, height: 70, clicker: {}, bitmap: "test", x: 160, y: 160
    },
    a_: {
        type: "image", marginBottom: 10, marginRight: 10, width: 70, height: 70, id: "aboba", clicker: {}, bitmap: "test", x: 80, y: 80
    }
}
```

## Атрибуты сдвигов
| Вправо | Влево | Вверх | Вниз |
| :----: | :---: | :---: | :--: |
| marginRight | marginLeft | marginTop | marginBottom
| Увеличивает `x` на `n` | Уменьшает `x` на `n` | Уменьшает `y` на `n` | Увеличивает `x` на `n` | 

## Перестройка списка элементов
Как я и говорил ранее, элементы строятся лишь в момент создания объекта хранения.
Поэтому после того, как вы измените `x` или `y` у уже поставленного контента, остальные элементы не подвинутся.

У этой проблемы есть одно решение. Создать новый объект и заменить предыдущий на обновлённый, который учитывает все параметры прошлого, в том числе и изменённые параметры.

Давайте попробуем:
```tsx
const Text = (properties, children) => (
    <text marginBottom="10" name={children}>Пример</text>
)
const window = new UI.Window({
    content: (
        <> 
            <Text>1</Text>
        </>
    )
});

//Давайте добавим новый элемент:
window.content.elements.text2 = <Text>2</Text>;

//Перестроим:
window.content.elements = UI.JSX.rebuildElementSet(window.content.elements);
```
После этого позиции адаптируются.