# Dungeon Utility

Dungeon Utility — это мод-библиотека, для создания структур и работы с ними. Библиотека позволяет создавать структуры и устанавливать их в мире с лучшей производительностью, чем аналоги в виде Structures и других предшественников. Последняя актуальная версия библиотеки доступна к загрузке в [браузере модов](https://icmods.mineprogramming.org/mod?id=783).

:::note Что предлагает данная мод-библиотека?

- Загрузка структур из большинства форматов библиотек
- Полный контроль над установкой структуры
- Возможность создания лута для сундуков
- Тонкая настройка генерации структур в измерениях

:::

- [Декларации TypeScript](https://github.com/Reider745/Dungeon-Utility/tree/main/declarations) — требуются для подсказок в различных средах
- [Старая документация DungeonUtility](https://github.com/Reider745/libs/blob/main/mod_documentation_api/DungeonUtility.md)
- [История версий библиотеки](https://github.com/Reider745/Dungeon-Utility/releases)

## Преимущества и недостатки

:::tip Плюсы и возможности

- *Проработанное API*: удобный интерфейс для разработчиков
- *Хорошая производительность*: эффективная работа даже при больших нагрузках
- *Поддержка серверного ядра*: совместимость с серверным ядром [ZoteCore](https://github.com/Reider745/ZoteCoreLoader)
- *Разнообразие форматов структур*: гибкость в использовании различных форматов структур
- *Открытый исходный код*: доступный для изучения и модификации [репозиторий](https://github.com/Reider745/Dungeon-Utility)
- *Поддержка BlockState, setExtraBlock, CompoundTag*: широкий функционал для работы со свойствами блоков

:::

:::danger Минусы и ограничения

- *Поддерживается только Minecraft 1.16*: на легаси паке запустить библиотеку не получится
- *Необходимость зависимости от мода*: помимо вашего мода придется установить еще и библиотеку

:::

## Сохранение структур

Сохранение структур происходит в несколько этапов:

1. Вызовите команду `/du` в чате
2. Используйте деревянный топор для выбора границ структуры
3. Опционально, определите центр структуры, нажав на желаемый блок присев (позволит структурам не пересекаться друг с другом при генерации)
4. Вызовите команду `/struct` в чате для сохранения

<details>
<summary>Доступные команды для работы со структурами.</summary>
<div>

```txt
/struct save <name: string> [saveAir: bool = false] [specialSeparator: bool = false] [type: string = "DungeonUtility"] [compression: bool = false]
```

Сохраняет структуру в файл, а конкретно в папку *output/* внутри папки мода.

- Параметры команды:
  - *name*: имя структуры (не должно содержать пробелы)
  - *saveAir*: сохранять ли вместе со структурой блоки воздуха
  - *specialSeparator*: использовать ли форматирование в JSON (табуляция и прочее)
  - *type*: тип формата, в который будет сохранена структура
  - *compression*: сжимать ли структуру с помощью алгоритма Хаффмана

```txt
/struct list
```

Отображает список загруженных структур.

```txt
/struct set <name: string> <pool: string>
```

Устанавливает структуру на место, где стоит игрок.

- Параметры команды:
  - *name*: имя структуры (не должно содержать пробелы)
  - *pool*: пул, в котором находится структура (не должно содержать пробелы)
  
```txt
/struct du2 name:string
```

Переводит структуру из формата DungeonUtility_V2 в текстовый (используйте для отладки содержимого, позволяет просматривать состояния блоков и прочее), берет структуру из папки *output/*.

</div>
</details>

## Моды, использующие DungeonUtility

- [Desolation](https://icmods.mineprogramming.org/mod?id=784)
- [Schematic](https://icmods.mineprogramming.org/mod?id=786)
- [AppliedEnergistics 2](https://icmods.mineprogramming.org/mod?id=906)
- [Example Structure](https://icmods.mineprogramming.org/mod?id=992)
- [Galacticraft 4 PE](https://icmods.mineprogramming.org/mod?id=8556)
- [Infinite Forest](https://icmods.mineprogramming.org/mod?id=159)
- [Ancient wonders](https://icmods.mineprogramming.org/mod?id=682)
- [Aether 2 BE](https://icmods.mineprogramming.org/mod?id=195)
