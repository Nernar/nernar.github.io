# Начало

Dungeon Utility - это мод-библиотека, для создания структур и работы со структурами.
Библитоека позволяет создавать структуры и устанавливать их в мире с более хорошей производительностью, чем аналоги в виде Structures и предшеественников мода

[TypeScript декларации](https://github.com/Reider745/Dungeon-Utility/tree/main/declarations) - требуются для подсказок в [toolchain](https://github.com/zheka2304/innercore-mod-toolchain)

Данная документация содержит только основные методы, без дополнительных усложнений, для простоты понимания, документация расчитана на тех кто уже [JavaScript](https://learn.javascript.ru/)

[Старая документация DungeonUtility](https://github.com/Reider745/libs/blob/main/mod_documentation_api/DungeonUtility.md)

**Какие возможности включает данная мод-библиотека?**

+ Загрузка структур от всех существующих на inner core библиотек
+ Полный контроль над установкой структуры
+ Возможность создавать лут в сундуки
+ Создание качественной генерации структур

## Примущества и недостатки DungeonUtility

+ Плюсы
  + Проработанное api
  + Хорошая производительность
  + Поддержка серверного ядра [ZoteCoreLoader](https://github.com/Reider745/ZoteCoreLoader)
  + Поддержка разных форматов структур
  + Открытый [исходный код](https://github.com/Reider745/Dungeon-Utility)
  + Поддержка BlockState, extra, CompoundTag
  
+ Минусы
  + Поддержка только inner core 1.16
  + Необходимость делать зависимость от мода

## Сохранение структур

Сохранение структур происходит в несколько этапов:

1. Вызов команды du (включает возможность использовать ванильный деревянный топор для выбора точек!).
2. Выбирите две крайние точки структуры.
3. Выбирите центр структуры, нажав на шифте (желательно).
4. Вызовите команду struct.

### Команда struct

Сохраняет структуру в файл(в папку output, которая находится в папке мода)

```
/struct save name:string saveAir:bool specialSeparator:bool type:string compression:bool
```

+ Параметры команды:
  + name - имя структуры, без пробелов!
  + saveAir - сохранять вместе со структурой блоки воздуха, true или false (указывать не обязательно, по умолчанию false).
  + specialSeparator - красивое оформление JSON, true или false (указывать не обязательно, по умолчанию false).
  + type - тип формата, в который будет сохранена структура (указывать не обязательно, по умолчанию DungeonUtility).
  + compression - сжимать ли структуру с помощью алгоритма Хаффмана, true или false (указывать не обязательно, по умолчанию false).

Вывводит список загруженных структур

```
/struct list
```

Устанавливает структуру, на место где стоит игрок

```
/struct set name:string pool:string
```

+ Параметры команды:
  + name - имя структуры, без пробелов!
  + pool - в котором находится структура, без пробелов!
  
Переводит струтктуру формата DungeonUtility_V2 в текстовый формат(что-бы можно было понять как сохранилось структура), берет структуру из папки output

```
/struct du2 name:string
```

# Моды которые используют DungeonUtility

+ [Desolation](https://icmods.mineprogramming.org/mod?id=784)
+ [Schematic](https://icmods.mineprogramming.org/mod?id=786)
+ [AppliedEnergistics 2](https://icmods.mineprogramming.org/mod?id=906)
+ [Example Structure](https://icmods.mineprogramming.org/mod?id=992)
+ [Galacticraft 4 PE](https://icmods.mineprogramming.org/mod?id=8556)
+ [Ancient wonders](https://icmods.mineprogramming.org/mod?id=682)
+ [Aether 2 BE](https://icmods.mineprogramming.org/mod?id=195)
