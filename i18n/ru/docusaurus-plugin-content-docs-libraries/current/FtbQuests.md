# Ftb Quests

Ftb Quests — это мод-библиотека для создания своих квестов. Последняя актуальная версия библиотеки доступна к загрузке в [браузере модов](https://icmods.mineprogramming.org/mod?id=885).

## UiMainBuilder

Этот класс отвечает за интерфейс в целом.

```js
new UiMainBuilder(clinet_name: string);
```

Возвращает класс вкладки:

```js
<UiMainBuilder>.getTab(isLeft: boolean, tab: string): StandartTabElement;
```

Возвращает класс квеста:

```js
<UiMainBuilder>.getQuest(isLeft: boolean, tab: string, quest: string): Quest;
```

Выполняет квест без анимации:

```js
<UiMainBuilder>.giveQuest(isLeft: boolean, tab: string, quest: string, player: number = Player.get(), value: boolean = true, is: boolean = true): boolean;
```

Выполняет квест с анимацией:

```js
<UiMainBuilder>.give(isLeft: boolean, tab: string, quest: string, player: number = Player.get(), value: boolean = true, is: boolean = true): void;
```

Проверяет выполнен ли квест:

```js
<UiMainBuilder>.canQuest(isLeft: boolean, tab: string, quest: string, player: number = Player.get()): boolean;
```

Привязывает открытие окна к определенному предмету:

```js
<UiMainBuilder>.registerItem(id: number | string): UiMainBuilder;
```

Заставляет сохранять статусы квестов:

```js
<UiMainBuilder>.registerSave(): UiMainBuilder;
```

Добавляет вкладку:

```js
<UiMainBuilder>.addRenderLeft(element: StandartTabElement);
<UiMainBuilder>.addRenderRight(element: StandartTabElement);
```

## Quest

Этот класс отвечает за квест и его функционал.

```js
new Quest({
    id: string,
    x: number,
    y: number,
    size?: number,
    item?: ItemInstance,
    texture?: string,
    texturePost?: string,
    lines?: string[]
});
```

Вернет id квеста:

```js
<Quest>.getId(): string;
```

```js
<Quest>.getX(): number;
```

```js
<Quest>.getY(): number;
```

Установит диалог для квеста:

```js
<Quest>.setDialog(dialog: UiDialogBase): Quest;
```

## Создание интерфейсов

### StandartTabElement

Этот класс отвечает за вкладки и за их функционал.

Создаст экземпляр класса:

```js
new StandartTabElement(id: string);
```

Вернет список id квестов:

```js
<StandartTabElement>.getAllQuest(): string[];
```

Добавит квест во вкладку:

```js
<StandartTabElement>.addQuest(quest: Quest): StandartTabElement;
```

Вернет квест по id:

```js
<StandartTabElement>.getQuest(id: string): Quest; 
```

Скопирует квесты одной вкладки в другую:

```js
<StandartTabElement>.copyQuests(tab: StandartTabElement): StandartTabElement;
```

Вернет id вкладки:

```js
<StandartTabElement>.getId(): string;
```

Вернет отображаемое ия вкладки:

```js
<StandartTabElement>.getDisplayName(): string;
```

Установит отображаемое имя вкладки:

```js
<StandartTabElement>.setDisplayName(name: string): StandartTabElement;
```

Вернет иконку вкладки:

```js
<StandartTabElement>.getItem(): ItemInstance;
```

Установит иконку вкладки:

```js
<StandartTabElement>.setItem(item: ItemInstance): StandartTabElement;
```

### GroupTabElement

```js
const groupTab = new GroupTabElement(id);
groupTab.addTab(tab: StandartTabElement): GroupTabElement;
```

### TabCloseElement

Этот класс создает вкладку, при нажатии на которую происходит выход из интерфейса.

```js
new TabCloseElement(id);
```

### UiDialogBase

```js
const dialog = new UiDialogBase(message: string, x: number = 0, y: number = 0);
dialog.setCanExit(status: boolean);
dialog.openCenter();
```

### UiDialog

+ наследуется от [UiDialogBase](#uidialogbase)

```js
interface Item {
    item: ItemInstance;
    dialog?: UiDialogBase;
}
```

```js
const dialog = new UiDialog(message: string, description: string = "", x: number = 0, y: number = 0);
dialog.setCanExit(status: boolean);
dialog.setInput(items: Item[]);
dialog.setResult(status: Item[]);
dialog.setInventoryCheck(inventontory_check: boolean);
dialog.openCenter();
```

## Выдача квестов

### GiveItems

Этот класс отвечает за выдачу предметов за квест.

```js
GiveItems.registerGive(main: UiMainBuilder, isLeft: boolean, tab: string, quest: string, items: ItemInstance[]);
```

### DestroyBlocks

Этот класс отвечает за отслеживание разрушения блоков.

```js
DestroyBlocks.registerDestroyBlocks(ui: UiMainBuilder, blocks: string[], isLeft: boolean, tab: string, quest: string, title?: string, description?: string);
```

### RecipeCheck

Этот класс отвечает за отслеживание крафтов.

```js
RecipeCheck.registerRecipeCheck(ui: UiMainBuilder, items: number[], isLeft: boolean, tab: string, quest: string, title?: string, description?: string);
```
