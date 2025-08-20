# Фрагменты элементов
Фрагменты позволяют компоновать наши теги в некоторое единое представление, которое можно представить как отдельный компонент или передать их в качестве списка элементов.
## Синтаксис
Фрагменты записываются в следующей форме:
```tsx
<>
    ...теги
</>
```
По сути фрагменты - это структура похожая на теги, но в которой ничего не записано. Зато она позволяет хранить нам эти же самые теги последовательно.

Фрагменты позволяют создавать более сложные компоненты, что очень полезно и часто широко применимо. Например можно сделать компонент, который таким образом будет создавать инвентарь со слотами; слот, при удерживании которого мы будем видеть окно с информацией, или те же самые рамки с текстом внутри.

У фрагментов большой потенциал, и в статье про [практику](./practice) мы будем часто применять их.

warning::: Фрагменты работают только с полем elements окна
Они не предназначены для drawing и других полей окна.
:::

## Пишем сложные компоненты
Напишем компонент, который позволит рисовать картинку с подписью под ней.
```tsx
const SubscribedPicture = (properties: {x: number, y: number, picture: string }, children) => {
    const bitmap = UI.TextureSource.get(properties.picture);

    return (
        <>
            <image name={properties.picture} x={properties.x} y={properties.y}>
                { properties.picture }
            </image>
            <text name={"text_" + properties.picture} x={properties.x} y={properties.y + bitmap.getHeight() + 10}>
                { children }
            </text>
        </>
    )
}
```
Добавим эти картинки в наше окно:
```tsx
const window = new UI.Window();
window.setContent(
    <>
        <SubscribedPicture picture="cat_1" x="0" y="0">Cat 1</SubscribedPicture>
        <SubscribedPicture picture="cat_2" x="0" y="50">Cat 2</SubscribedPicture>
    </>
)
```