# Модели блоков

Если в двух словах попытаться описать предназначение [ICRender](/api/ICRender), окажется что формы или же модели блоков прекрасно подойдут под него. Эта технология позволит связать новосозданные модели с определенным блоком, разместить нужную модель по координатам, динамично обновлять рендеры, физические и визуальные формы блоков, а возможно и вовсе, заменять модели обычных предметов. Начнем с рассмотрения моделей [BlockRenderer](/api/BlockRenderer) и закончим несколькими формами для самых разных целей.

:::note Чем отличаются простые формы от моделей

Как уже было сказано в прошлых статьях, игра предоставляет некоторое количество встроенных форм и позволяет задавать собственную форму, используя параллелепипед. Модели же, в отличии от простых форм, состоят из множества коробок (параллелепипедов), которые позже преобразовываются в вершины, полигоны и ребра. Фактически, форма может быть какой угодно и единственным ограничением остается ваша фантазия.

:::

## Модель — основа рендера

Начнем с того, что из себя представляет так называемый полноблочный блок. Обычно это текстура 16x16 и коробка размером 1x1x1. Обычно все формы подразделяются на столько же отрезков, сколько пикселей задействовано в текстуре. В нашем случае блок занимает 16/16 доступных ему пикселей по каждую сторону трехмерного пространства. Половинкой здесь будет 8/16, четвертью 4/16 и так далее. Представляйте блоки именно в пикселях, можете начать с базовой зарисовки модели даже на листочке в клеточку.

Простая полноблочная модель создается примерно так:

```js
const STONE_BLOCK_MODEL = BlockRenderer.createTexturedBlock(
    [["stone", 0]]
);
```

Эта модель также будет эквивалентна созданию коробки на весь блок:

```js
const STONE_BLOCK_MODEL = BlockRenderer.createTexturedBox(
    0/16, 0/16, 0/16, 16/16, 16/16, 16/16,
    [["stone", 0]]
);
```

Но мы же пытаемся создать модель, разве нет? Зачем нам использовать уже созданный самой игрой блок, для этого можно ограничиться и простыми формами. Что ж, обычно каждая модель по умолчанию именно пустая:

```js
const STONE_BLOCK_MODEL = BlockRenderer.createModel();
STONE_BLOCK_MODEL.addBox(0/16, 0/16, 0/16, 16/16, 16/16, 16/16, "stone", 0);
```

А уже дальше с ней можно проводить различные манипуляции, прежде чем привязать к чему-бы то ни было.

:::info Мне нужно все моделировать самому?

Фактически, можно набросать модель в любом воксельном редакторе, вроде [Goxel](https://goxel.xyz/), или трехмерном, вроде [Blender](https://www.blender.org/). Некоторые предпочитают использовать [Blockbench](https://www.blockbench.net/), хотя он куда больше заточен под рендер существ.

Специально для этой цели авторы проекта реализовали внутреигровые инструменты моделирования, они позволяют разобраться в тонкостях еще быстрее не отходя от игрового процесса; не только моделировать, но и конвертировать модели разных форматов, устанавливая дополнения для расширения функционала. Попробуйте [Средства для моддинга](TODO) сами и поделитесь своими впечатлениями, чтобы сделать проект еще лучше!

:::

## Привязка модели к рендеру

Рендер состоит из моделей, самих моделей может быть сколько угодно. Рендер же нужен для соединения их вместе и описания условий отображения. Да, существуют внешние факторы из-за которых формы могут быть изменены, и да, мы рассмотрим их в следующей статье. Но прежде применим новосозданную форму к блоку:

```js
const STONE_BLOCK_MODEL = BlockRenderer.createModel();
STONE_BLOCK_MODEL.addBox(0/16, 0/16, 0/16, 16/16, 16/16, 16/16, "stone", 0);
const STONE_BLOCK_RENDER = new ICRender.Model(STONE_BLOCK_MODEL);
BlockRenderer.setStaticICRender(1, 0, STONE_BLOCK_RENDER);
```

Последняя функция фактически означает: установить рендер камня навсегда для идентификатора 1 с метой 0 (блок камня, исключая диорит и прочие виды этого блока). Безусловный рендер будет установлен для всех блоков камня в мире. Конструктор `new ICRender.Model(model)` может быть заменен на эквивалент `new ICRender.Model()` с добавлением `render.addEntry(model)`.

Но допустим, мы создали блок и хотим установить рендер на него. Реализация практически не будет отличаться:

```js
const WOODEN_TANK_MODEL = BlockRenderer.createTexturedBlock(
    [["wood", 1], ["glass", 0]]
);
const WOODEN_TANK_RENDER = new ICRender.Model(WOODEN_TANK_MODEL);
BlockRenderer.setStaticICRender(BlockID.wooden_tank, -1, WOODEN_TANK_RENDER);
```

Где `-1` означает установку рендера на каждую вариацию блока. Ну и как можно заметить, развертки блоков ничем не отличаются от их моделей. Соответственно, жидкостное хранилище получит текстуру бревна снизу и стекла со всех остальных сторон. Прочитайте [Сколько сторон у куба](../first-block.md#сколько-сторон-у-куба) для получения подробностей.

## Физические и рендеры обводки

Практически не отличаются от визуальных, за исключением того что не имеют текстур и имеют собственные конструкторы моделей. Физические модели представляют собой коллизию, опору соприкосновения существ с поверхностью блока. Обводка появляется при наведении игроком курсора на блок или его удерживанием на сенсорном экране. Если предназначение этих рендеров все еще остается непонятным, сейчас мы разберем их поподробнее.

```js
const WOODEN_TANK_COLLISION = new ICRender.CollisionShape();
const WOODEN_TANK_COLLISION_ENTRY = WOODEN_TANK_COLLISION.addEntry();
WOODEN_TANK_COLLISION_ENTRY.addBox(2/16, 0/16, 2/16, 14/16, 16/16, 14/16);
```

Так будет выглядеть простая стандартная форма. Физическая форма создает описание как для самой себя, так и для обводки. Несомненно, мы можем создать точно такой же рендер и для обводки, но тогда они будут идентичны. Вместо этого, лучше установим получившийся рендер блоку:

```js
BlockRenderer.setCustomCollisionShape(BlockID.wooden_tank, -1, WOODEN_TANK_COLLISION);
BlockRenderer.setCustomRaycastShape(BlockID.wooden_tank, -1, WOODEN_TANK_COLLISION);
```

Или эквивалентной двум этим функцией:

```js
BlockRenderer.setCustomCollisionAndRaycastShape(BlockID.wooden_tank, -1, WOODEN_TANK_COLLISION);
```

Обычно физические и модели обводки сильно упрощены по сравнению с визуальными; оно и понятно, в большинстве случаев сложных моделей до каждого пикселя просто не требуется и позволяет сэкономить вычислительные ресурсы.

## Маппинг и обновления

Любой рендер блока может быть отрисован на координатах, если блок на этих координатах позволяет изменять свою модель. Но обычно обновления рендера (маппинг) требуются лишь для новых блоков, так что в большинстве случаев это правило не создаст никаких проблем.

Для начала включим маппинг для необходимого блока, к примеру, для `wooden_tank`:

```js
BlockRenderer.enableCoordMapping(BlockID.wooden_tank, -1, WOODEN_TANK_RENDER);
```

Последний аргумент включения которого требует стандартную модель, она будет установлена для каждой вариации. Учтите, что после включения маппинга, так называемые статичные рендеры, больше не смогут быть использованы для задействованных вариаций. Для отключения воспользуйтесь методом `BlockRenderer.disableCustomRender(id, data)`.

Но опять же, зачем нам лишь стандартная модель, добавим еще несколько для обозначения заполненности жидкостного хранилища:

```js
const WOODEN_TANK_RENDERERS = new Array(7).map(function(nope, index) {
    const model = BlockRenderer.createModel();
    model.addBox(1/16, 1/16, 1/16, 15/16, 1/16 + (index + 1) / 8, 15/16, "flowing_lava", 0);
    const render = new ICRender.Model(WOODEN_TANK_MODEL);
    render.addEntry(model);
    return render;
});
```

Мы взяли за основу модель, уже созданную ранее и добавили ей "новый слой" с моделью из одной коробки лавы. Теперь 7 вариаций могут быть задействованы для заполнения хранилища лавой, по 2 пикселя на каждое ведро. Собственно, реализуем несложную логику для этого действия:

```js
let placedTanksByDimension = {};

Callback.addCallback("ItemUse", function(coords, item, block, remote, player) {
    if (block.id == BlockID.wooden_tank && (
        item.id == VanillaItemID.bucket || item.id == VanillaItemID.lava_bucket
    )) {
        const dimension = Entity.getDimension(player);
        if (!placedTanksByDimension.hasOwnProperty(dimension)) {
            placedTanksByDimension[dimension] = {};
        }
        const location = coords.x + "," + coords.y + "," + coords.z;
        if (placedTanksByDimension[dimension].hasOwnProperty(location)) {
            if (item.id == VanillaItemID.bucket) {
                if (placedTanksByDimension[dimension][location] <= 0) {
                    return;
                }
            } else if (placedTanksByDimension[dimension][location] >= 7) {
                return;
            }
        } else if (item.id == VanillaItemID.bucket) {
            return;
        }
        const actor = new PlayerActor(player);
        if (!actor.isValid()) {
            return;
        }
        actor.setInventorySlot(actor.getSelectedSlot(), item.id, item.count - 1, item.data, item.extra);
        if (item.id == VanillaItemID.bucket) {
            placedTanksByDimension[dimension][location]--;
            actor.addItemToInventory(VanillaItemID.lava_bucket, 1, 0);
        } else {
            if (!placedTanksByDimension[dimension].hasOwnProperty(location)) {
                placedTanksByDimension[dimension][location] = 0;
            }
            placedTanksByDimension[dimension][location]++;
            actor.addItemToInventory(VanillaItemID.bucket, 1, 0);
        }
        Network.getConnectedPlayers().filter(function(uid) {
            return Entity.getDimension(uid) == dimension;
        }).forEach(function(uid) {
            const client = Network.getClientForPlayer(uid);
            if (client) {
                client.send("abstractModName.tankFill", {
                    coords: coords,
                    level: placedTanksByDimension[dimension][location]
                });
            }
        });
    }
});

Network.addClientPacket("abstractModName.tankFill", function(packetData) {
    if (packetData.coords && packetData.hasOwnProperty("level")) {
        BlockRenderer.mapAtCoords(
            packetData.coords.x, packetData.coords.y, packetData.coords.z,
            WOODEN_TANK_RENDERERS[packetData.level]
        );
    }
});
```

А также добавим отправку пакета с хранилищами при изменении измерения, это охватит, в том числе, и первое подключение клиента:

```js
Callback.addCallback("PlayerChangedDimension", function(player, currentId, lastId) {
    if (placedTanksByDimension.hasOwnProperty(currentId)) {
        const client = Network.getClientForPlayer(player);
        if (client) {
            client.send("abstractModName.tanksInDimension", placedTanksByDimension[currentId]);
        }
    }
});

Network.addClientPacket("abstractModName.tanksInDimension", function(packetData) {
    for (const location in packetData) {
        const vector = location.split(",");
        BlockRenderer.mapAtCoords(
            vector[0], vector[1], vector[2],
            packetData[location]
        );
    }
});
```

Чтобы не усложнять статью, мы не использовали сохранения или тайлы. Они будут рассмотрены неоднократно, а здесь им точно не место. Просто учтите, что данные хранилищ будут сброшены после выхода из мира.

Лишь визуальные формы требуют включенного маппинга, для любых других это не требуется. То есть, без проблем можно заменять физическую и форму обводки:

```js
Callback.addCallback("ItemUseLocal", function(coords, item, block, player) {
    if (block.id == BlockID.wooden_tank) {
        const dimension = new PlayerActor(player).getDimension();
        BlockRenderer.mapCollisionModelAtCoords(dimension, coords.x, coords.y, coords.z, WOODEN_TANK_COLLISION);
        BlockRenderer.mapRaycastModelAtCoords(dimension, coords.x, coords.y, coords.z, WOODEN_TANK_COLLISION);
    }
});
```

Это будет эквивалентно вызову одной функции:

```js
Callback.addCallback("ItemUseLocal", function(coords, item, block, player) {
    if (block.id == BlockID.wooden_tank) {
        const dimension = new PlayerActor(player).getDimension();
        // highlight-next-line
        BlockRenderer.mapCollisionAndRaycastModelAtCoords(dimension, coords.x, coords.y, coords.z, WOODEN_TANK_COLLISION);
    }
});
```

Не стоит забывать что любой маппинг — клиентский:

+ Любые установленные рендеры очищаются при переходе между измерениями (для визуального маппинга) или отключением от мира
+ Разрушение блока не приведет к уничтожению маппинга, любой снова поставленный на это место блок, подверженный маппингу, получит рендер разрушенного блока
+ Изменения маппинга происходят для каждого клиента отдельно, а это опять же означает, что изменение маппинга в серверных событиях бесполезно

Нужно очистить какой-бы то ни было маппинг вручную для возвращения стандартной модели? Рассмотрите методы:

```js
BlockRenderer.unmapAtCoords(x, y, z);
BlockRenderer.unmapCollisionModelAtCoords(dimension, x, y, z);
BlockRenderer.unmapRaycastModelAtCoords(dimension, x, y, z);
BlockRenderer.unmapCollisionAndRaycastModelAtCoords(dimension, x, y, z);
```

Основными практическими предназначениями маппинга остаются уникальные варианты размещения, которые невозможно создать с помощью условий или вариаций, и анимации.

:::warn Не используйте маппинг для создания поворотов

Лучше создайте несколько вариаций на такой случай, маппинг остается сугубо клиентским, а вариации работают чуть стабильнее. Большинство простых состояний, вроде активации печки, также создаются вариациями. Это не прихоть автора, так работает большинство блоков в игре.

:::
