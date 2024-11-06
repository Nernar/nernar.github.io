# Обработка существ

Существо представляет из себя мягкое физическое тело, которое "живет" и перемещается по миру. Помимо физической части, существа (или же мобы, энтити) облададают визуальной, она не определяет физическую форму, а лишь позволяет отображать существо в игре. Нередко с существом можно взаимодействовать, к примеру для получения ресурсов или обмена одних на другие. Познакомимся же с возможностями их обработки.

## Разница подходов

Когда мы говорим о существе, важно понимать кто на самом деле отвечает за его перемещения, форму и прочие свойства. До этого неоднократно была затронута тема клиента и сервера, базовые принципы не изменятся и останутся на протяжении всей документации и этапов нашего моддинга. Следуя этим принципам — сервер отвечает за обработку расположения существа в мире и его физическую форму, а клиент лишь отрисовывает модель вашего существа.

Движок предоставляет методы как для обработки визуальной части существ, так и тонкой настройки их поведения. Каждое из описанное сегодня свойств — будет серверное, а значит для клиента они не будут иметь практически никакого смысла. Создавайте проекты на основе механик существ, ведь их так мало!

## Местоположение и поворот

<div className="resource-atlas-align-box">

![moving-and-rotation.gif](/images/entities/moving-and-rotation.gif)

</div>

Ключевым определением существа в мире являются его координаты, а также визуальное направление взгляда. Интеллект позволяет управлять этими свойствами, а разработчик может как угодно изменять их в любой момент существования измерения и существа в целом.

Начнем с изменения местоположения, для этого используется функция с соответствующим названием:

```js
Entity.setPosition(entityUid, x, y, z);
```

Если с координатами все понятно (а если нет, рассмотрите [систему координат](../environment/modifying-region.md#система-координат)), то что же такое этот ваш уникальный идентификатор? Фактически, это ячейка в памяти нативного объекта, ну а если говорить более простыми словами, идентификационный номер вашего существа. Он существует лишь пока загружено измерение, а также чанк, в котором находится существо.

Для получения идентификаторов окружающих вас мобов есть несколько способов, одним из которых является [получение списка существ между двух точек](../environment/modifying-region.md#существа). Но а что, если к примеру, нам нужно заниматься обработкой каждого появившегося в поле зрения клиентов существа? Для этого есть несколько полезных событий, вроде *EntityAdded* и *EntityDeath*:

```js
Callback.addCallback("EntityAdded", function(entityUid) {
    if (Entity.getDimension(entityUid) == EDimension.NORMAL) {
        const position = Entity.getPosition(entityUid);
        const surface = GenerationUtils.findSurface(position.x, 32, position.z);
        if (surface.y > 0) {
            Entity.setPosition(entityUid, surface.x, surface.y + 2, surface.z);
        }
    }
});
```

В этом случае существо, появившееся в любой точке обычного мира (в том числе и игрок), переместится в пещеру под собой (либо, если ее нет, останется на той же точке) на высоте до 32 блоков. Воспользуйтесь этим же калбеком для изменения любых других свойств существ, вроде добавления эффектов. Что же касается изменения координат, я нередко замечал этот метод в событиях перемещения существ между мирами.

Идем дальше. Поворот существа отображает направление его движения, что не столь актуально для существ с интеллектом (ибо интеллект сразу повернет голову обратно), но зато весьма эффективно для бросаемых предметов и стрел:

```js
Entity.setLookAngle(entityUid, yaw, pitch);
```

Поворот относительно оси рысканья (или же yaw, сравнимо с осью x) и оси крена (или же pitch, сравнимо с осью y) задаются в радианах, где `Math.PI` означает поворот на 180 градусов, `Math.PI * 2` — полный поворот вокруг своей оси (на 360, конечно же) и так далее. Угол поворота не имеет ограничений и может принимать любые значения, не ограничиваясь лишь полным поворотом вокруг своей оси.

Почему бы не перейти к чему-то более интересному, скажем, реализации раздатчика? Для этого, можно разместить стрелу, направленную в сторону нажатия по блоку (зачем нужен предопределенный поворот, если игрок сам может его определить):

```js
Callback.addCallback("ItemUse", function(coords, item, block, isRemote, playerUid) {
    const region = BlockSource.getDefaultForActor(playerUid);
    if (region) {
        const entityUid = region.spawnEntity(coords.x, coords.y, coords.z, EEntityType.ARROW);
        const nbt = Entity.getCompoundTag(entityUid);
        if (nbt) {
            nbt.putInt64("OwnerNew", playerUid);
        }
        const rotation = Entity.getLookAt(entityUid, coords.relative.x, coords.relative.y, coords.relative.z);
        Entity.setLookAngle(entityUid, rotation.yaw, rotation.pitch);
    }
});
```

Используя относительные координаты (соседний блок к той стороне, на которую мы нажали) получим углы поворота, на который должна быть повернута стрела для достижения цели. Учитывая, что запускаем стрелу именно мы, неплохим вариантом будет изменить [еще и игровые данные](#прочие-свойства), указывая игрока как источника урона этого снаряда. Стрела по умолчанию не имеет ускорения, так что она просто "выпадет" относительно нажатого блока. Рассмотрите [World.getRelativeCoords](/api/modules/World.html#getRelativeCoords) для получения относительных координат.

Помимо простого установки угла обзора, движок предоставляет функционал для наиболее часто используемых формул. К ним относятся и методы, упрощающие предыдущую реализацию вылета стрелы:

```js
Callback.addCallback("ItemUse", function(coords, item, block, isRemote, playerUid) {
    const region = BlockSource.getDefaultForActor(playerUid);
    if (region) {
        const entityUid = region.spawnEntity(coords.x, coords.y, coords.z, EEntityType.ARROW);
        const nbt = Entity.getCompoundTag(entityUid);
        if (nbt) {
            nbt.putInt64("OwnerNew", playerUid);
        }
        Entity.lookAtCoords(entityUid, coords.relative);
    }
})
```

Что эквивалентно прошлой реализации, просто итоговый код становится короче. Ну даже не знаю, можем переместить существо в точку, на которую направлен взгляд игрока после удара:

```js
Callback.addCallback("EntityHurt", function(attackerUid, entityUid, damageValue, damageType) {
    if (Entity.getType(attackerUid) == EEntityType.PLAYER) {
        const rotation = Entity.getLookAngle(entityUid);
        const vector = Entity.getLookVectorByAngle(rotation);
        Entity.addPosition(entityUid, vector.x, vector.y, vector.z);
    }
});
```

Вектор здесь представляет собой отклонения по каждой из координат, перемещая существо буквально на блок дальше в сторону его взгляда (так, монстры будут становиться ближе к игроку, направляя взгляд на него, а пассивные мобы наоборот отдаляться, смотря в случайную сторону). Поэкспериментируйте с этой реализацией, метод добавления координат суммирует прошлые координаты с вектором.

Поворот головы (ведь поворот остального тела осуществляется с небольшим отставанием от головы) определяется даже в случае, если существо не имеет таковой части тела. В этом можно убедиться с помощью пакетов ресурсов, либо включив отладку перемещений интеллекта в скрытых настройках игры.

## Ускорение

<div className="resource-atlas-align-box">

![velocity.gif](/images/entities/velocity.gif)

</div>

Основной частью любого физического мира (конечно же, у нас в игре есть физика) является именно ускорение; используя его, мобы двигаются с заданным вектором в любую сторону света. На этом основаны любые движения существ, начиная от перемещения игрока, стрел, и заканчивая интеллектом.

```js
Entity.setVelocity(entityUid, x, y, z);
```

Используя и работая с векторами, этот метод поможет добиться интересных результатов. А большего и не нужно; чуть физики и математики, либо использование уже готовых формул и кода! Каждому выбирать свой путь, а начать можно с нескольких простых примеров. Скажем, почему бы не ускорить выбрасываемые предметы по высоте?

```js
Callback.addCallback("EntityAdded", function(entityUid) {
    if (Entity.getType(entityUid) == EEntityType.ITEM) {
        const velocity = Entity.getVelocity(entityUid);
        Entity.setVelocity(entityUid, velocity.x, velocity.y + Math.random() * 0.4 - 0.2, velocity.z);
    }
});
```

<!-- TODO: Какова постоянная свободного падения в игре? -->

Чуть ускорившись, дроп (выброшенные предметы) через небольшой промежуток времени направится вниз. Давайте сократим этот же код до пары строчек, также как делали до этого с положением:

```js
Callback.addCallback("EntityAdded", function(entityUid) {
    if (Entity.getType(entityUid) == EEntityType.ITEM) {
        Entity.addVelocity(entityUid, 0, Math.random() * 0.4 - 0.2, 0);
    }
});
```

Во времена ModPE у нас существовала традиция документировать запуск стрел, схожий по своей сути код пропагандировался многими учебниками и группами. Сделаем тоже самое — пусть стрела полетит в направлении взгляда игрока:

```js
const VANILLA_ARROW_SPEED = 0.25;

Callback.addCallback("ItemUseNoTarget", function(item, playerUid) {
    if (item.id == VanillaItemID.arrow) {
        const vector = Entity.getLookVector(playerUid);
        const position = Entity.getPosition(playerUid);
        const entityUid = region.spawnEntity(
            position.x + vector.x * 0.12,
            position.y + vector.y * 0.12,
            position.z + vector.z * 0.12,
            EEntityType.ARROW
        );
        Entity.setVelocity(
            entityUid,
            vector.x * VANILLA_ARROW_SPEED,
            vector.y * VANILLA_ARROW_SPEED + 0.05,
            vector.z * VANILLA_ARROW_SPEED
        );
    }
});
```

Призывая стрелу рядом с хитбоксом игрока (если призвать стрелу в самом игроке, очевидно что она просто попадет в него), мы ускоряем стрелу на небольшую силу и вверх. Может быть запускать стрелы рукой игрока и не практично (летят медленно и не далеко), но принцип вы поняли. Увеличьте ускорение, поменяв его высоту и изменив скорость — и ручные стрелы не будут отличаться от лука.

<!-- TODO: Здесь могла быть ваша реклама, но ShootLib не оптимизирован под мультиплеер. -->

Существуют и объекты без физики. Вы хоть раз замечали изменение ускорения у огненного шара, выпускаемого гастом? А ведь это тоже существо, но оно двигается линейно и без сопротивления:

```js
Callback.addCallback("ItemUseNoTarget", function(item, playerUid) {
    if (item.id == VanillaItemID.fireball) {
        const position = Entity.getPosition(playerUid);
        Entity.moveToAngle(
            region.spawnEntity(
                position.x, position.y, position.z,
                EEntityType.FIREBALL
            ),
            Entity.getLookAngle(playerUid),
            { speed: 0.09 }
        );
    }
});
```

Теперь огненные шары могут быть запущены не только раздатчиком или гастом, но и нами. Использование метода [Entity.moveToAngle](/api/modules/Entity.html#moveToAngle) позволяет упростить код с запуском стрелы выше, задействуя ускорение еще быстрее. Дополнительные примеры использования механики ускорения можно найти в моде Portal Gun, это отличный способ путешествовать по миру. В нем нет сложных формул, что на самом деле лишь помогает еще лучше понять как все работает.

## Инвентарь

<div className="resource-atlas-align-box">

![velocity.gif](/images/entities/inventory.gif)

</div>

Размещение предметов в инвентаре существ позволяет существам взаимодействовать (или атаковать, кто знает) с вами, либо же игрокам друг c другом. Помимо самого инвентаря существуют слоты (ячейки) для основной руки, дополнительной, расположения четырех элементов брони и целая куча других слотов специального назначения. Тогда как часть слотов редактируется напрямую из движка, для остальных необходимо воспользоваться сериализацией и изменением данных. Рассмотрим базовые принципы работы с инвентарем.

```js
Entity.setCarriedItem(entityUid, itemId, itemCount, itemData, itemExtra?);
```

Изменит предмет существа в основной руке в заданном количестве, нанесенными единицами повреждения (или вариацией, если предмет нельзя повредить) и [дополнительными данными](../items/extra/what-is-extra#внесение-и-получение-данных). Этот метод необходим, в первую очередь, существам у которых нет инвентаря и в целом предмета в руке на текущий момент, так как любой существующий предмет будет заменен.

Давайте в качестве примера рассмотрим еще и метод получения предмета, чтобы произвести дроп уже существующего если он есть. Возьмем кадавра, и на взаимодействие с ним положим к нему в руку предмет из руки игрока:

```js
Callback.addCallback("EntityInteract", function(targetUid, entityUid, coords) {
    if (Entity.getType(targetUid) != EEntityType.HUSK) {
        return;
    }
    const targetItem = Entity.getCarriedItem(targetUid);
    const entityItem = Entity.getCarriedItem(entityUid);
    if (targetItem.id == 0 && entityItem.id == 0) {
        return;
    }
    if (targetItem.id != 0) {
        const region = BlockSource.getDefaultForActor(targetUid);
        region.spawnDroppedItem(coords.x, coords.y, coords.z, targetItem.id, targetItem.count, targetItem.data, targetItem.extra);
    }
    Entity.setCarriedItem(targetUid, entityItem.id, entityItem.count, entityItem.data, entityItem.extra);
});
```

Получение предмета всегда возвращает результат, даже если самого предмета в руке нет. Алгоритм весьма прост — нам нужны только кадавры, так что в противном случае событие выполнено не будет; предмет в руке нужно проверить как у игрока (`entityUid`) так и у существа, с которым взаимодействуют (`targetUid`), для того чтобы выбросить предмет существа если игрок ничего не держит. Предмета нет, значит в руке тоже ничего не будет, значения по умолчанию можно представить в виде функции `Entity.setCarriedItem(targetUid, 0, 0, 0, null)`.

Помимо основной руки, обычно есть и вторая... Скажем так, ее предназначение весьма сильно узкоспециализированно; пожалуй, самое лучшее применение для существ в обычной игре это тотем бессмертия. Он полностью восстановит здоровье существа, если то получит достаточное количество урона. Немного изменим только что рассмотренное событие, только с новой функцией:

```js
const INTERACTABLE_ENTITIES = [
    EEntityType.ZOMBIE, EEntityType.SKELETON, EEntityType.PIG_ZOMBIE,
    EEntityType.ENDERMAN, EEntityType.ZOMBIE_VILLAGER, EEntityType.STRAY,
    EEntityType.HUSK, EEntityType.WHITHER_SKELETON, EEntityType.VINDICATOR,
    EEntityType.EVOCATION_ILLAGER, EEntityType.DROWNED, EEntityType.ZOMBIE_VILLAGE_V2
];

Callback.addCallback("EntityInteract", function(targetUid, entityUid, coords) {
    if (INTERACTABLE_ENTITIES.indexOf(Entity.getType(targetUid)) == -1) {
        return;
    }
    const targetItem = Entity.getOffhandItem(targetUid);
    if (targetItem.id != 0) {
        return;
    }
    const entityItem = Entity.getCarriedItem(entityUid);
    if (entityItem.id != VanillaItemID.totem) {
        return;
    }
    Entity.setOffhandItem(targetUid, entityItem.id, entityItem.count, entityItem.data, entityItem.extra);
});
```

Теперь, любому монстру с отображаемой второй рукой (у большинства мобов слот есть, но не отображается визуально), можно дать во вторую руку тотем. Конечно, если предмета еще нет и у игрока есть необходимый тотем. Изменилось только название метода, но аргументы остались идентичны. Это распространяется и на `Entity.get/setDroppedItem`, позволяющий изменять выброшенные предметы, и в будущем, возможно, на другие функции.

```js
Entity.setArmorSlot(entityUid, slotId, itemId, itemCount, itemData, itemExtra?);
```

Принципы изменения брони схожи, но появляется числовой идентификатор изменяемого слота. Это четыре варианта — голова (шлем, `EArmorType.HELMET`), туловище (нагрудник, `EArmorType.CHESTPLATE`), ноги (поножи, `EArmorType.LEGGINGS`) и стопы (ботинки, `EArmorType.BOOTS`). В остальном все остается идентично, лишь необходимо указать слот для изменения и получения ячеек, что мы уже и делали [создавая новую броню](../items/food-armor-and-throwables#создание-брони).

## Обработчик игрока

Основными отличиями игрока от других существ являются голод, уровень насыщения и поглощения, опыт и умение использовать предметы и взаимодействовать с мобами. Конечно, игрок — центр всего мира, и возможностей у него предостаточно, но как же всем этим управлять? А ведь нужно еще и синхронизировать данные между сервером и игроками. Вспоминается [источник блоков](../environment/modifying-region#выбираем-источник)? Рассмотрим обработчик игроков, еще и чтобы дополнить только что рассмотренные методы взаимодействия с инвентарем.

```js
new PlayerActor(playerUid);
```

К примеру, по достижении 50 уровня, предметы выброшенные рядом с ближайшим игроком будут сразу же попадать к нему в инвентарь. Напоминаю, что инвентарь игрока состоит из 9 основных ячеек хотбара и 27 дополнительных. И нет, нам не нужен пылесос собирающий выброшенные неизвестно когда предметы вокруг, ограничимся событием появления существа:

```js
function fetchNearestEntityInBox(entityUid, dx, dy, dz, entityType, blacklist) {
    const region = BlockSource.getDefaultForActor(entityUid);
    if (region) {
        let targetUid = 0, distanceBetween = Number.MAX_VALUE, buffer;
        const position = Entity.getPosition(entityUid);
        for (let fetchedUid in region.fetchEntitiesInAABB(
            position.x - dx, position.y - dy, position.z - dz,
            position.x + dx, position.y + dy, position.z + dz,
            entityType || 256, blacklist || false
        )) {
            if ((buffer = Entity.getDistanceToCoords(fetchedUid, position)) < distanceBetween) {
                targetUid = fetchedUid;
                distanceBetween = buffer;
            }
        }
        return targetUid;
    }
    return 0;
}

Callback.addCallback("EntityAdded", function(entityUid) {
    if (Entity.getType(entityUid) != EEntityType.ITEM) {
        return;
    }
    const playerUid = fetchNearestEntityInBox(entityUid, 6, 2, 6, EEntityType.PLAYER);
    if (playerUid != 0) {
        const actor = new PlayerActor(playerUid);
        if (actor.getLevel() >= 50) {
            const drop = Entity.getDroppedItem(entityUid);
            actor.addItemToInventory(drop.id, drop.count, drop.data, drop.extra, false);
            Entity.remove(entityUid);
        }
    }
});
```

В случае если ближайший игрок имеет 50 уровень или выше, дроп будет втиснут в инвентарь к игроку. А втиснут, поскольку последний аргумент метода *addItemToInventory* означает выбрасывать ли лишние предметы если нет места. Так что у нас появляется шанс просто потерять дроп, если места больше не осталось. Давайте решим эту проблему — добавим метод прохождения по инвентарю, чтобы узнать сколько доступного места для предмета у нас осталось:

```js
function getPickableItemStackInInventory(playerActor, itemId, itemData) {
    const stackSize = Item.getMaxStack(itemId, itemData);
    for (let slot, available = 0, slotId = 0; slotId < 36; slotId++) {
        slot = playerActor.getInventorySlot(slotId);
        if (slot.id == 0 || (slot.id == itemId && (itemData == -1 || slot.data == itemData))) {
            if (slot.count >= stackSize) {
                continue;
            }
            available += stackSize - slot.count;
            if (available >= stackSize) {
                break;
            }
        }
    }
    return Math.min(available, stackSize);
}
```

Если слот пустой, можем автоматически засчитать целый стак места и вернуть результат. Если нашли стопку уже собранного предмета этого типа, отнимаем от целой стопки его количество и прибавляем к количеству доступного места. Как только наберется хотя бы стак свободного места, можем возвращать результат в виде минимально возможной целой стопки.

<details>
<summary>А что если...</summary>
<div>

Как определить доступное количество предметов в инвентаре в целом?

```diff
-function getPickableItemStackInInventory(playerActor, itemId, itemData) {
+function getPickableItemCountInInventory(playerActor, itemId, itemData) {
     const stackSize = Item.getMaxStack(itemId, itemData);
     for (let slot, available = 0, slotId = 0; slotId < 36; slotId++) {
         slot = playerActor.getInventorySlot(slotId);
         if (slot.id == 0 || (slot.id == itemId && (itemData == -1 || slot.data == itemData))) {
             if (slot.count >= stackSize) {
                 continue;
             }
             available += stackSize - slot.count;
-            if (available >= stackSize) {
-                break;
-            }
         }
     }
-    return Math.min(available, stackSize);
+    return available;
 }
```

Как определить количество предметов в инвентаре, а не свободное место?

```diff
-function getPickableItemCountInInventory(playerActor, itemId, itemData) {
+function getItemCountInInventory(playerActor, itemId, itemData) {
-    const stackSize = Item.getMaxStack(itemId, itemData);
     for (let slot, available = 0, slotId = 0; slotId < 36; slotId++) {
         slot = playerActor.getInventorySlot(slotId);
-        if (slot.id == 0 || (slot.id == itemId && (itemData == -1 || slot.data == itemData))) {
+        if (slot.id == itemId && (itemData == -1 || slot.data == itemData)) {
-            if (slot.count >= stackSize) {
-                continue;
-            }
-            available += stackSize - slot.count;
+            available += slot.count;
         }
     }
    return available;
 }
```

Как понять, есть ли предмет в инвентаре?

```diff
-function getItemCountInInventory(playerActor, itemId, itemData) {
+function hasItemInInventory(playerActor, itemId, itemData) {
-    for (let slot, available = 0, slotId = 0; slotId < 36; slotId++) {
+    for (let slot, slotId = 0; slotId < 36; slotId++) {
         slot = playerActor.getInventorySlot(slotId);
         if (slot.id == itemId && (itemData == -1 || slot.data == itemData)) {
-            available += slot.count;
+            return true;
         }
     }
-    return available;
+    return false;
 }
```

</div>
</details>

Давайте дополним существующее событие, забрав максимально возможное количество предметов:

```js
Callback.addCallback("EntityAdded", function(entityUid) {
    if (Entity.getType(entityUid) != EEntityType.ITEM) {
        return;
    }
    const playerUid = fetchNearestEntityInBox(entityUid, 6, 2, 6, EEntityType.PLAYER);
    if (playerUid != 0) {
        const actor = new PlayerActor(playerUid);
        if (actor.getLevel() >= 50) {
            const drop = Entity.getDroppedItem(entityUid);
            const pickableCount = getPickableItemStackInInventory(actor, drop.id, drop.data);
            if (pickableCount > 0) {
                actor.addItemToInventory(drop.id, pickableCount, drop.data, drop.extra);
                drop.count -= pickableCount;
                if (drop.count <= 0) {
                    Entity.remove(entityUid);
                } else {
                    Entity.setDroppedItem(entityUid, drop.id, drop.count, drop.data, drop.extra);
                }
            }
        }
    }
});
```

Лишние предметы останутся на месте, подобранный стак удалится, а предметы из инвентаря никуда не пропадут. Цель достигнута. Ну и напоследок, заберем предмет из инвентаря игрока после взаимодействия с другим существом. Дополним прошлые события в [обработке инвентаря](#инвентарь). Так как предмет в целом забирается весь в каждом из прошлых случаев, просто очистим выбранный слот инвентаря:

```js
Callback.addCallback("EntityInteract", function(targetUid, entityUid, coords) {
    // ...
    const actor = new PlayerActor(entityUid);
    actor.setInventorySlot(actor.getSelectedSlot(), 0, 0, 0, null);
});
```

:::danger Только раз в году

Учтите, что любой обработчик игрока действителен лишь 1 тик. Выполнили действие, получили данные и повторное использование станет невозможным. А некоторые действия, вроде изменения слота инвентаря, **требуют** указания полного количества аргументов, не исключая, к примеру, дополнительные данные.

:::

## Здоровье и способы его потерять

В первую очередь — неправильное питание, недостаточная физическая активность, стрессы... Ни один из этих факторов не касается способов потери здоровья в игре; игрока не волнует ни температура, ни количество предметов в инвентаре. Но тогда откуда же тогда появляется более 25 способов потерять здоровье? Рассмотрим возможность управления этой необходимой возможностью.

Прежде всего, количество здоровья определяется количеством сердец (где 1 сердце = 2 единицам здоровья), то же самое касается и голода игрока. Представляйте здоровье сразу в половинках сердец, так будет намного удобнее:

```js
Entity.setHealth(entityUid, halfHearts);
```

Напрямую изменяет количество здоровья у существа, оно может быть любым натуральным числом от 0 до TODO, но не выше максимального значения. Воспользуйтесь этим методом для восстановления здоровья, его первоначальной установки (во время призыва моба), но не нанесения урона. Для примера, создадим регенерирующий жезл, исцеляющий игрока (и мобов вокруг него) в руке которого он находится:

```js
const WAND_TICKS = {};

Callback.addCallback("ServerPlayerTick", function(playerUid, isDead) {
    if (!isDead) {
        const actor = new PlayerActor(playerUid);
        if (actor.isValid()) {
            if (actor.getInventorySlot(actor.getSelectedSlot()).id == VanillaItemID.netherite_axe) {
                WAND_TICKS[playerUid] |= 0;
                if (++WAND_TICKS[playerUid] >= 120) {
                    useWandOnNearestEntities(playerUid);
                    WAND_TICKS[playerUid] = 0;
                }
                return;
            }
        }
    }
    if (WAND_TICKS.hasOwnProperty(playerUid)) {
        delete WAND_TICKS[playerUid];
    }
});

function useWandOnNearestEntities(entityUid) {
    const region = BlockSource.getDefaultForActor(entityUid);
    if (region) {
        const position = Entity.getPosition(entityUid);
        for (let targetUid in region.fetchEntitiesInAABB(
            position.x - 8, position.y - 8, position.z - 8,
            position.x + 8, position.y + 8, position.z + 8
        )) {
            if (Entity.getDistanceToCoords(targetUid, position) < 8) {
                Entity.setHealth(targetUid, Math.min(Entity.getMaxHealth(targetUid), Entity.getHealth(targetUid) + 2));
            }
        }
        if (Game.getMinecraftVersion() == "1.11.4" && Entity.getType(entityUid) == Native.EntityType.PLAYER) {
            Entity.setHealth(entityUid, Math.min(Entity.getMaxHealth(entityUid), Entity.getHealth(entityUid) + 2));
        }
    }
}

Callback.addCallback("ServerPlayerLeft", function(playerUid) {
    if (WAND_TICKS.hasOwnProperty(playerUid)) {
        delete WAND_TICKS[playerUid];
    }
});

Callback.addCallback("ServerLevelLeft", function() {
    for (let entityUid in WAND_TICKS) {
        delete WAND_TICKS[entityUid];
    }
})
```

Используя серверный тик для каждого игрока, мы проверяем есть ли у него в руке незеритовый топор. Если есть, прибавляем счетчик для этого игрока (или если его нет, создаем) вплоть до 120 тиков (около 6 секунд). Как только игрок меняет предмет, выходит из мира или сервер закрывается — счетчик обнуляется. Когда счетчик достигает 120 тиков, он сбрасывается и мобы вокруг восстанавливают здоровье на одно сердце. До версии [2.2.1b100](/changelog#2.2.1b100) метод `BlockSource.fetchEntitiesInAABB` не учитывал игроков по умолчанию, так что для предыдущей версии игры мы включили дополнительную проверку.

Конструкцию вида `Entity.setHealth(entityUid, Math.min(Entity.getMaxHealth(entityUid), Entity.getHealth(entityUid) + 2))` можно упростить до `Entity.healEntity(entityUid, 2)`, сделайте это самостоятельно в функции `useWandOnNearestEntities` при необходимости. Метод будет идентичен, результат не изменится.

:::danger Упрощение — не всегда улучшение

Мы можем упростить функцию `useWandOnNearestEntities` для сокращения кода поиска мобов вокруг игрока до такого вида:

```js
const position = Entity.getPosition(entityUid);
for (let targetUid in Entity.getAllInRange(position, 8)) {
    Entity.healEntity(targetUid, 2);
}
```

И казалось бы: код стал короче и проще для понимания, нам больше не требуется регион для поиска мобов и все должно работать быстрее. Прежде всего, вспомним про ремарки ко встроенным методам модулей `Entity`, `World` и так далее. Немалая часть старых методов НЕ поддерживают мультиплеер, а в нашем случае метод будет искать существ ближайших к этим координатам во ВСЕХ загруженных измерениях. А если загруженных мобов еще и немалое количество, проверять дистанцию методу придется для КАЖДОГО из них.

Минусов не меньше чем плюсов, но они затмевают большинство из них. Проверяйте методы по документации, используйте декларации и не забывайте о том, что даже небольшая оптимизация нашей работы может заметно снять нагрузку с устройств целевых пользователей и нас самих.

:::

Мы можем воспользоваться этим же методом для снижения здоровья существа (получению урона), но тогда возникает несколько дополнительных сложностей. Прежде всего, мы не можем указать источник урона. Это означает, что если существо умрет (а особенно если это будет игрок), причина его смерти не будет установлена, что влечет за собой неправильную работу оповещений о смерти, получения опыта и так далее. Во вторых, у игроков будут отсутствовать анимации снятия сердец и сами звуки получения урона, что как минимум странно при потери здоровья.

```js
Entity.damageEntity(entityUid, halfHearts, damageSource?, properties?);
```

Первые аргументы идентичны, но добавляется несколько дополнительных: причина или же источник самого урона и несколько настраиваемых параметров. Изменим ранее созданную функцию, поменяв лишь сам метод для использования посоха:

```js
function useWandOnNearestEntities(entityUid) {
    const region = BlockSource.getDefaultForActor(entityUid);
    if (region) {
        const position = Entity.getPosition(entityUid);
        for (let targetUid in region.fetchEntitiesInAABB(
            position.x - 8, position.y - 8, position.z - 8,
            position.x + 8, position.y + 8, position.z + 8
        )) {
            if (targetUid != entityUid && Entity.getDistanceToCoords(targetUid, position) < 8) {
                Entity.damageEntity(targetUid, 2, Entity.DamageSources.MAGIC, {
                    attacker: entityUid,
                    bool1: true
                });
            }
        }
    }
}
```

Исключая самого игрока, который и держит незеритовый топор, мы также проверяем дистанцию до существа, которому хотим нанести урон. Существа вокруг узнают что магический урон (в основном, это лишь определяет сообщение в чате для прирученных существ и игроков) исходит от вас и начнут испытывать агрессию, их броня сможет поглотить часть урона если это возможно. Подробнее о доступных аргументах и типах урона можно узнать в сводке документации, а прямо сейчас почему бы просто не заменить изменение здоровья на голод и только для игроков.

## Прочие свойства

Все описанные ранее методы вызываются на стороне сервера, это довольно важно, поскольку клиентские события и сам клиент не могут обработать существ, изменяя их свойства еще и для всех игроков без взаимодействия с сервером. Что можно отнести к дополнительным настройкам существа? В целом, это индивидуально для каждого из них по отдельности. Но существует и целая сводка общих свойств, атрибутов, инвентаря и списка состояний.

Начните с поиска подходящего метода в сводке документации. Они будут служить прежде всего для изменения состояния здесь и сейчас, если же вашему сознанию не хватает чего-то еще — у нас всегда есть доступ к игровым данным. Просто получите NBT (именованный двоичный тег) необходимого существа, используя:

```js
Entity.getCompoundTag(entityUid);
```

<details>
<summary>Описание некоторых доступных свойств.</summary>
<div>

Давайте возьмем несколько случайных свойств пчелы; они никак не связаны друг с другом, кроме того что каждое свойство привязано к тегу, содержащему их все:

```json
{
    "Age": -23479, // обратный отсчет (в положительную сторону), прежде чем существо станет взрослым
    "Air": 300, // обратный отсчет в тиках, прежде чем существо задохнется (шкала воздуха)
    "Armor": [ // лист из четырех тегов с предметами брони; да, броня на пчеле не отрисовывается
        {
            "Count": 0, // количество, обычно броня идет штучно
            "Damage": 0, // потраченная прочность
            "Name": "", // именованный идентификатор
            "WasPickedUp": 0 // подобрало ли существо предмет (ограничивает деспавн) в момент жизни
        },
        // ... еще 3 таких же пустых слота, в целом, броню можно надеть на любого моба
    ],
    "Attributes": [ // список примененных атрибутов, задающих числовые значения в определенном диапазоне
        // ...
        {
            "Base": 10, // стандартное, неизмененное прочими факторами значение
            "Current": 4, // текущее значение атрибута, существо потеряло 6 единиц здоровья
            "DefaultMax": 10, // стандартное, неизмененное прочими факторами максимальное значение
            "DefaultMin": 0, // стандартное, неизмененное прочими факторами минимальное значение
            "Max": 10, // максимум именно для этого существа, во время спавна возможны бонусы
            "Min": 0, // минимум именно для этого существа, во время спавна возможны бонусы
            "Name": "minecraft:health" // идентификатор одного из встроенных атрибутов
        }
    ],
    "BodyRot": -37.54388427734375, // угол поворота тела, значение с отступом от обычного поворота и только по одной оси отступа
    "FallDistance": 0.011873078532516956, // расстояние между существом и землей по высоте
    "Fire": 0, // обратный отсчет, прежде чем существо перестанет гореть
    "Invulnerable": 0, // существо не воспринимает большинство видов урона, исключая заданные пакетами ресурсов и убийство командой
    "IsBaby": 1, // у существа присутствует обратный счетчик до взросления
    "LeasherID": -1, // существо, которое привязало пчелу на поводок (изменение свойства не создаст новый поводок)
    "LootDropped": 0, // ресурсы после смерти были выброшены, либо же нет
    "Mainhand": [ // предмет в основной руке, свойства не отличаются от брони
        {
            "Count": 0,
            "Damage": 0,
            "Name": "",
            "WasPickedUp": 0
        }
    ],
    "Motion": [ // ускорение по каждой из трех осей на текущий тик
        -0.0014545543817803264,
        -0.011873078532516956,
        -0.0011079658288508654
    ],
    "NaturalSpawn": 0, // если существо может быть деспавнено, определяет может ли деспавн произойти (исключениями являются переименование, подбор существом предметов в любой из слотов, нахождение в вагонетке и так далее)
    "Offhand": [ // предмет во второй руке, свойства также идентичны прошлым
        {
            "Count": 0,
            "Damage": 0,
            "Name": "",
            "WasPickedUp": 0
        }
    ],
    "Persistent": 1, // пчела не должна деспавнится ни в каком из случаев
    "PortalCooldown": 0, // обратный отсчет между переходом в портал и новой возможностью повторить это
    "Pos": [ // координаты существа по каждой из трех осей
        1.3825594186782837,
        4.926809310913086,
        9.350759506225586
    ],
    "Rotation": [ // поворот (взгляда, головы) относительно осей рысканья и крена
        -37.54388427734375,
        0 // пчела кренится только визуально, на самом деле голова всегда повернута на один градус
    ],
    "Tags": [], // теги могут определять как пакет поведения, так и команды в игре, благодаря чему к примеру селекторы команд могут найти существ с нужным тегом
    "TargetID": -1, // существо, на которое пчела нападает если атаковать ее
    "TimeStamp": 34127, // мировой тик времени спавна существа
    "UniqueID": -4294967288, // числовой уникальный идентификатор, использующийся для сериализации
    "definitions": [ // правила, заданные пакетом ресурсов и действующие (либо наоборот) на текущий момент
        "+minecraft:bee",
        "+bee_adult",
        "+track_attacker",
        "-escape_fire",
        "-angry_bee",
        "-take_nearest_target",
        "+shelter_detection",
        "+has_nectar",
        "+default_sound",
        "-return_to_home", // пчеле не нужна точка ее спавна
        "+find_hive" // однако, у нее есть собственный улей
    ],
    "identifier": "minecraft:bee", // именованный идентификатор, определяет тип существа
    // ...
}
```

Даже изменение небольшой части свойств уже может изменить существо до неузнаваемости, а ведь это только малая часть от всех доступных и добавляемых настроек. Здесь расположены и ранее описанный инвентарь, и координаты со здоровьем. Столько пространства для кастомизации, предлагаю каждому самому попробовать поиграться с наполнением тегов отдельных существ.

</div>
</details>

Отличный вариант — скопировать существо со всеми свойствами, а почему бы и нет?

```js
Callback.addCallback("EntityInteract", function(entityUid, playerUid, coords) {
    let nbt = Entity.getCompoundTag(entityUid);
    if (nbt) {
        const region = BlockSource.getDefaultForActor(entityUid);
        if (region) {
            nbt = new NBT.CompoundTag(nbt); // тег копируется со всем содержимым
            const targetUid = region.spawnEntity(coords.x, coords.y, coords.z, Entity.getType(entityUid));
            const replaceableData = Entity.getCompoundTag(targetUid);
            nbt.putInt64("UniqueID", replaceableData.getInt64("UniqueID")); // нам нужен новый идентификатор, тег привязан к оригинальному существу
            nbt.putInt64("TimeStamp", World.getWorldTime()); // время клонирования тоже стоило бы изменить
            Entity.setCompoundTag(targetUid, nbt);
            replaceableData.clear(); // очистим новосозданный игрой тег, он больше не нужен
        }
    }
});
```

Что же такое этот именованный двоичный тег? Данные, сериализируемые миром и игрой в целом. Мы не будем рассматривать их здесь отдельно, для этого существует статья [Именованные двоичные теги](../advanced/named-binary-tag). Все равно не нашли того, что искали? Подберите нужные свойства, используя [NBT.Templates.Entity](TODO).
