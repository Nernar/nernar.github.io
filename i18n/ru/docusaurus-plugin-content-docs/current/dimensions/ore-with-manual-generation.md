# Руда с ручной генерацией

Обычно генерация руды сводится к паре методов, однако она ограничена формой и способом генерации. Воспользуемся встроенным генератором, рассмотрим варианты создания собственных генераторов и сгенерируем несколько форм.

## Встроенный генератор

Любая генерация сводится к поиску пригодной поверхности, проверкой условий и самого размещения блоков.

### Фильтры

Встроенный генератор предоставляет возможность выбрать блоки, на которых может производиться генерация. По умолчанию,любая руда генерируется в камне, либо независимо от того, есть ли какие-либо блоки на месте размещения.

## Способы рандомизации

Обычно сводятся к нескольким вариантам, по возрастанию степени сложности:

1. Псевдослучайная генерация, не привязанная к сиду
2. Псевдослучайная генерация по сиду
3. Использование различных карт шумов

## Зависимость от сида

Способ рандомизации генерации в примере со встроенным генератором сводится лишь к псевдослучайной генерации без сида. Она подходит для большинства случаев, однако не является предпочтительной с точки зрения внутреигровой механики. Использование сидов позволит получить идентичные результаты генерации, при условии, что последовательность останется той же. По этой причине, большая часть контента в игре остается на том же месте при повторной генерации с тем же сидом.

:::tip Псевдослучайная генерация

Заинтересовала тема создания последовательности таких чисел? Рассмотрите [статью](TODO) для получения подробностей, это неотъемлемая часть всего программирования в целом.

:::

## Карты шумов

```mdx-code-block
import NotImplemented from "@site/src/components/NotImplemented"

<NotImplemented />
```

## Дополнительные условия

Независимо от способа генерации, кастомизация условий для генерации остается на ваших плечах. Важно знать, что генератор не должен создавать чрезмерные нагрузки и использовать максимально эффективные для этого способы.