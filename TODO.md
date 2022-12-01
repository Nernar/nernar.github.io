# Запланированный контент

## С чего начать?

Просто набросайте примерное содержание статьи, определиться к какой группе она относится никогда не поздно.

## Использование API в примерах

Порядок первого упоминания в документации, все что не использовано носит лишь ориентировочный характер. Этот список служит для определения охвата отдельных отраслей движка.

### Базис и подготовка

- [ ] getCoreAPILevel
- [x] getMCPEVersion
- [ ] Translation _(упомянуто в предметах, но должно быть и здесь)_
- [ ] Commands
- [ ] Game _(GameAPI, упомянуто в событиях, но должно быть и здесь)_

### События

Потоки и взаимодействие с ними:

- [ ] runOnMainThread
- [ ] runOnClientThread
- [x] Threading

Прочее:

- [ ] Network _(упомянуто в блоках, но должно быть и здесь)_
- [ ] NetworkConnectedClientList
- [ ] SyncedNetworkData
- [x] Callback
- [x] Updatable

### Предметы

- [x] IDRegistry
- [x] ItemID
- [x] Item _(ItemRegistry)_
- [ ] Recipes
- [ ] ToolAPI
- [x] Armor _(ArmorRegistry)_
- [ ] CustomEnchant
- [ ] TagRegistry

### Блоки

- [x] BlockID
- [x] Block _(BlockRegistry)_
- [ ] ItemModel
- [x] BlockRenderer
- [x] ICRender
- [ ] LiquidRegistry
- [ ] NBT

### Хранилище

Клиентское и серверное:

- [x] Config
- [x] Saver _(SaverAPI)_

Прочее:

- [ ] Resources
- [ ] FileTools

### Окружение

- [ ] World _(WorldAPI)_
- [ ] BlockSource
- [ ] BlockState
- [ ] GameObject
- [ ] GameObjectRegistry
- [ ] Render _(RenderAPI)_
- [ ] Animation _(AnimationBase, AnimationItem)_
- [x] Particles _(ParticleAnimator)_
- [ ] WorldRenderer

### Измерения

- [x] GenerationUtils _(WorldGenerationUtils)_
- [ ] Dimensions
- [ ] CustomBiome

### Контейнеры и интерфейсы

- [x] TileEntity
- [ ] ItemContainer
- [ ] UI

### Существа

- [ ] NetworkEntity
- [ ] NetworkEntityType
- [ ] PlayerActor
- [ ] AttachableRender
- [ ] ActorRenderer
- [ ] Entity _(EntityAPI)_
- [ ] AddonEntityRegistry

### Публикация

Отладка и поиск ошибок:

- [ ] Debug
- [ ] Logger
- [ ] LowLevelUtils _(MCSystem)_
- [ ] alert _(print)_

Создание интеграций с другими проектами:

- [ ] ModAPI

### Устарело (вероятно)

- [ ] ~~MobRegistry~~
- [ ] ~~MobSpawnRegistry _(EntitySpawnRegistry)_~~
- [ ] ~~Texture~~
- [ ] ~~EntityModel~~
- [ ] ~~EntityModelWatcher~~
- [ ] ~~EntityAIClass~~
- [ ] ~~EntityAIWatcher~~
- [ ] ~~EntityAI~~
- [ ] ~~Player _(PlayerAPI)_~~
- [ ] ~~IDData~~
- [ ] ~~Native~~

## Прогресс переработки старой документации

Репозиторий не базируется на ней, но направления некоторых статей могут быть схожи.

- Построение модов
  - [x] Структура модов
  - [x] ~~Стандартный шаблон модов~~
  - [x] Ресурсы _(разделено по категориям)_
  - [ ] Компиляция в байткод
  - [x] Базовые методы и переменные исполняемых файлов
  - [x] Библиотеки
- [x] ~~Глобальные методы и переменные CoreEngine~~
- События в игре. Модуль Callback
  - [x] Модуль Callback
  - [x] ~~Список коллбеков~~
  - [x] ~~Список названий ванильных экранов~~
- Блоки и предметы
  - [x] Создание блоков и предметов
  - [x] Стандарт Именования Inner Core _(разделено по категориям)_
  - [ ] Продвинутое создание блоков и предметов
  - [ ] ToolAPI
  - [x] Рендер блоков
  - [ ] Визуальная составляющая ICRender
  - [x] Форма блоков
  - [ ] Класс RenderMesh
  - [ ] Дополнительные данные предмета
  - [ ] Случайные обновления блоков
  - [x] TileEntity
  - [ ] Рецепты
  - [ ] Жидкости и работа с ними
  - [x] Броня
- [ ] Модуль World
- Генерация
  - [x] ~~Модуль GenerationUtils~~
  - [x] Основы генерации
- [ ] Модуль Game
- Сущности
  - [ ] Модуль Entity
  - [x] ~~Список ванильных рендеров~~
  - [ ] Создание мобов
  - [ ] Пример создания моба
  - [ ] Кастомные мобы
- [ ] Модуль Player _(устарело)_
- GUI
  - [ ] Модуль UI
  - [ ] Введение в GUI
    - [ ] Стандартный интерфейс
    - [ ] Однооконный интерфейс
    - [ ] Многооконный интерфейс
  - [ ] Контейнеры
  - [ ] Динамичный интерфейс
- [ ] Модуль ModAPI
- [x] Модуль Updatable
- [ ] Модуль GameObject
- [ ] Анимации
- Отладка _(достаточно одной статьи для описания принципов)_
  - [ ] Модуль Logger
  - [ ] Модуль Debug
- [x] Модуль Particles
- [ ] Модуль FileTools
- [x] Модуль SaverScope
- [x] ~~Модуль Translation~~
- [ ] Многопоточность
