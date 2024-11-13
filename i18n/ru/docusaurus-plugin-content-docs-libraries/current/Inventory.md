# Inventory

Inventory — библиотека, позволяющая работать с инвентарем игрока. Последнюю версию библиотеки можно загрузить в [официальном репозитории](https://github.com/SDesya74/Libraries/blob/master/Inventory/Inventory.js).

## Использование

Для начала работы импортируйте библиотеку:

```js
IMPORT("Inventory");
```

### Предмет в инвентаре

Есть ли у игрока в инвентаре предмет с id и data:

```js
Inventory.haveItem(id, data);
```

Отдает слот инвентаря если есть предмет тем же с id и data:

```js
Inventory.getItemSlot(id, data);
```

Наносит damage количество урона предмету в руке, сохраняя extra:

```js
Inventory.damageItem(damage);
```

Забирает 1 единицу предмета из инвентаря:

```js
Inventory.retrieveItem(id, data);
```
