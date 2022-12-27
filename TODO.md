# Запланированный контент

## С чего начать?

Просто набросайте примерное содержание статьи, определиться к какой группе она относится никогда не поздно.

## Использование API в примерах

Порядок первого упоминания в документации, все что не использовано носит лишь ориентировочный характер. Этот список служит для определения охвата отдельных отраслей движка.

### Базис

- [ ] getCoreAPILevel
- [x] getMCPEVersion

### События

Потоки и взаимодействие с ними:

- [ ] runOnMainThread
- [ ] runOnClientThread
- [x] Threading

Прочее:

- [ ] Network _(упомянуто в блоках, но должно быть и здесь)_
- [ ] NetworkEntity
- [ ] NetworkEntityType
- [ ] NetworkConnectedClientList
- [ ] SyncedNetworkData
- [x] Callback
- [x] Updatable
- [x] Game
- [ ] Commands

### Предметы

- [x] IDRegistry
- [x] ItemID
- [x] Item _(ItemRegistry)_
- [x] Recipes
- [ ] ToolAPI
- [x] Armor _(ArmorRegistry)_
- [ ] CustomEnchant
- [ ] TagRegistry
- [x] Translation

### Блоки

- [x] BlockID
- [x] Block _(BlockRegistry)_
- [ ] ItemModel
- [x] BlockRenderer
- [x] ICRender
- [x] LiquidRegistry
- [ ] NBT

### Окружение

- [ ] World _(WorldAPI)_
- [x] BlockSource
- [x] BlockState
- [ ] GameObject
- [ ] GameObjectRegistry
- [ ] Render _(RenderAPI)_
- [ ] Animation _(AnimationBase, AnimationItem)_
- [x] Particles _(ParticleAnimator)_
- [ ] WorldRenderer

### Существа

- [ ] PlayerActor
- [ ] AttachableRender
- [ ] ActorRenderer
- [x] Entity _(EntityAPI)_

### Измерения

- [x] GenerationUtils _(WorldGenerationUtils)_
- [ ] Dimensions
- [ ] CustomBiome

### Хранилище

Клиентское и серверное:

- [x] Config
- [x] Saver _(SaverAPI)_

Прочее:

- [ ] Resources
- [ ] FileTools

### Контейнеры и интерфейсы

- [x] TileEntity
- [ ] ItemContainer
- [ ] UI

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
- [ ] ~~AddonEntityRegistry~~
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
  - [x] Рецепты
  - [ ] Жидкости и работа с ними
  - [x] Броня
- [ ] Модуль World
- Генерация
  - [x] ~~Модуль GenerationUtils~~
  - [x] Основы генерации
- [x] Модуль Game
- Сущности
  - [x] Модуль Entity
  - [x] ~~Список ванильных рендеров~~
  - [ ] Создание мобов
  - [ ] Пример создания моба
  - [ ] Кастомные мобы
- [ ] Модуль Player _(устарело)_
- GUI
  - [ ] Модуль UI
  - [x] Введение в GUI
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
- [x] Многопоточность

## Общий прогресс статей

- Intro (0%)
- Getting Started
  - Methodology (0%)
  - Supporting IDEs (0%)
  - Going Forward (0%)
- Basics
  - Mod Structure (95%)
  - Mod Lifecycle (100%)
  - Building Script (100%)
  - Evaluate Context (100%)
  - Integrating Libraries (100%)
- Events
  - Where, What and Who (75%)
  - Callbacks (75%)
  - Updatables (100%)
  - Threading (75%)
  - Using Synced Data (0%)
- Items
  - First Item (100%)
  - Food Armor and Throwables (100%)
  - Recipes (100%)
  - Tools (0%)
  - Extra
    - What is Extra (0%)
    - Enchanting (0%)
    - Using Tags (0%)
- Blocks
  - First Block (95%)
  - First Liquid (50%)
  - Renders
    - Vanilla Shapes (100%)
    - Block Renderer (100%)
    - Conditioning (0%)
    - Customizing Item (0%)
  - Block Entities (0%)
- Environment
  - Modifying Region (90%)
  - Game Objects (0%)
  - Animation (0%)
  - Particles (60%)
  - Shaders and Materials (0%)
- Dimensions
  - Ore with Manual Generation (25%)
  - First Dimension (0%)
  - Creating Biomes (0%)
  - Investigating Generators (0%)
- Entities
  - Actoring Entities (65%)
  - First Entity (0%)
  - Renders
    - Rendering Basics (0%)
    - Animating in Runtime (0%)
    - Attaching Renders (0%)
  - Path Navigation (0%)
- UIs
  - Investigating Contents (95%)
  - Window Types (15%)
  - Drawings (100%)
  - Elements (100%)
  - Extending Components (95%)
- Storage
  - Saving Basics (75%)
  - Containers (0%)
  - Tile Entities (10%)
  - File System (0%)
  - Processing Resources (0%)
- Structures: TODO
- Advanced
  - Wrapping Packages (0%)
- Publishing
  - Connecting Integrations (0%)
  - Debugging (0%)
  - Packing to Publish (0%)
  - Uploading and Community (0%)
- Future Steps (0%)
