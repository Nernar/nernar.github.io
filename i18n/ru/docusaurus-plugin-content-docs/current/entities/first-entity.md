# Первое существо

Понятие создания существ несколько отличается от всего остального, для этого не подойдет скрипт, куда удобнее использовать пакеты поведения и ресурсов. Эта статья описывает множество новых понятий, не описанных ранее, однако мы познакомимся с большинством из них. Начнем с основы нового моба, а уже позже перейдем к описанию его поведения и созданию визуальной части.

## Определение существа

Любое существо начинается с создания серверного описания, определяющего общие атрибуты (изменяемые величины, задаваемые по умолчанию), группы атрибутов и события. Прежде всего, [создайте пакет поведения (англ.)](https://learn.microsoft.com/en-us/minecraft/creator/documents/behaviorpack?view=minecraft-bedrock-stable) если вы еще этого не сделали. Информация в пакетах в большинстве случаев определяется JSON-файлами, можете сравнивать их с объектами в нашем основном языке.

Определитесь как будет называться существо, придумав ему идентификатор. Этот идентификатор будет использоваться для призыва существа, команд с ним и для многих других целей. Как и любой другой уникальный идентификатор в пакетах, он должен начинаться с названия вашего проекта. Теперь создайте папку `entities`, в ней должны находиться описания любых мобов, которых вы создаете или планируете создать.

Учитывая, что мы создаем существо Хранителя (Keeper) в моде My Mod, конструкция будет выглядеть так:

```js title="entities/keeper.json"
{
    "format_version": "1.10.0",
    "minecraft:entity": {
        "description": {
            "identifier": "mymod:keeper"
        }
    }
}
```

Создали файл с этим содержимым? Тогда, давайте дополним! Следующим и последним шагом задания основного объекта описания, будет определение возможности размещения существа в мире. За это отвечают несколько параметров, дополните ваш объект `description` ими:

```js title="entities/keeper.json"
{
    "format_version": "1.10.0",
    "minecraft:entity": {
        "description": {
            ...
            // нужно ли добавлять яйцо для призыва существа
            "is_spawnable": true,
            // может ли существо быть призвано командой или
            // любым модом, используя регионы
            "is_summonable": true
        }
    }
}
```

Не забудьте отделить прошлое свойство запятой, простой пропуск одного из знаков синтаксиса приведет к тому что объект станет нечитаем. Впринципе, существо уже создано, нам остается лишь добавить элементы его описания и добавить визуальную часть для отображения в мире.

Перейдем к созданию свойств существа, без них не обходится ни один моб. Начнем с определения здоровья, размеров и категорий, к которым относится существо:

```js title="entities/keeper.json"
{
    ...
    "minecraft:entity": {
        ...
        "components": {
            // относя существо к категории (семье), впоследствии
            // другие мобы смогут определить какое существо находится
            // перед ним, используя семейные группы вместо идентификаторов
            "minecraft:type_family": {
                // собственно сами семьи, по которым определяется
                // существо; к примеру, на семью жителей (villager)
                // нападают зомби, а свойство моба (mob) необходимо
                // применять ко всем существам, кроме, например, стрел
                "family": [ "keeper", "villager", "mob" ]
            },
            // практически любой объект лишь с парой свойств является
            // атрибутом существа, которые вы можете изменить напрямую
            // из движка, используя Entity.get/setAttribute
            "minecraft:health": {
                // количество жизней определяется в половинках сердец
                "value": 20, // значение с которым моб появится
                "max": 20 // максимально возможное соответственно
            },
            // в границах этой формы появляется физика, хитбокс,
            // внутри которого существу можно наносить урон и
            // взаимодействовать с ним
            "minecraft:collision_box": {
                "width": 0.6, // ширина + долгота
                "height": 1.9 // высота
            },
            // существо не исчезнет после выгрузки чанка, обычно
            // "непостоянными" существами являются монстры
            "minecraft:persistent": {}
        }
    }
}
```

Отлично, главные свойства есть, но наше существо остается без физики. Оно просто висит в воздухе, неподвластное физике. Добавим еще несколько свойств, используя этот же объект:

```js title="entities/keeper.json"
{
    ...
    "minecraft:entity": {
        ...
        "components": {
            ...
            // если у существа нет физики, ускорение неизменно,
            // а значит, что оно двигается линейно и равноускоренно;
            // рассмотрите как летит огненный шар, у него нет физики
            "minecraft:physics": {},
            // как и у игрока (который, кстати, тоже является существом),
            // у остальных мобов есть собственное количество кислорода
            // и возможности остановки его подачи (что начнет уменьшать
            // здоровье из-за удушья)
            "minecraft:breathable": {
                // время в секундах, прежде чем существо начнет задыхаться,
                // находясь в жидкостях (под водой или лавой)
                "total_supply": 15,
                // время в секундах, прежде чем существо начнет задыхаться,
                // находясь в блоках (к примеру, если упадет гравий)
                "suffocate_time": 0
            },
            // по умолчанию существо нельзя отталкивать, оно не имеет
            // коллизии соприкосновения с объектами
            "minecraft:pushable": {
                // могут ли другие существа отталкивать моба
                "is_pushable": true,
                // может ли поршень отталкивать моба
                "is_pushable_by_piston": true
            }
        }
    }
}
```

И немаловажно добавить получение урона; фактически, ни одна жидкость не может наносить урон, пока свойство не будет задано в объекте описания. Это получение урона от нахождения в лаве:

```js title="entities/keeper.json"
{
    ...
    "minecraft:entity": {
        ...
        "components": {
            ...
            "minecraft:hurt_on_condition": {
                "damage_conditions": [
                    {
                        "filters": {
                            // здесь находится несколько простых условий
                            // как для самого моба, так и его окружения
                            "test": "in_lava",
                            // от кого должно быть получено свойство
                            "subject": "self",
                            // если условие выполняется, тогда фильтр сработал
                            "value": true
                        },
                        // причина урона, к примеру удушение или падение
                        "cause": "lava",
                        // количество урона за тик (1/20 секунды)
                        "damage_per_tick": 4
                    }
                ]
            }
        }
    }
}
```

Прежде чем добавить поведение, давайте создадим существо и со стороны клиента. Это поможет определиться с тем, что должно делать существо и как игрок может взаимодействовать с ним.

## Визуальная составляющая

Серверная часть создается в пакетах поведения, в то время как клиентская (или же визуальная), использует [пакеты ресурсов (англ.)](https://learn.microsoft.com/en-us/minecraft/creator/documents/resourcepack?view=minecraft-bedrock-stable). Также создайте новый пакет, если это необходимо, а мы начнем с объекта описания будущего моба. Поместите его в папку *entity*, используя формат *\*.entity.json*:

```js title="entity/keeper.entity.json"
{
    "format_version": "1.10.0",
    "minecraft:client_entity": {
        "description": {
            // тот же идентификатор, что и в серверном
            "identifier": "mymod:keeper",
            // материалы определяют правила отображения
            // текстур, прозрачность и режимы смешивания
            "materials": {
                "default": "entity_alphatest"
            },
            // несколько текстур обычно нужно описывать
            // для нескольких вариаций, обойдемся одной
            "textures": {
                "default": "textures/entity/keeper"
            },
            // воспользуемся стандартной моделью поборника,
            // она практически идентична с жителем, но еще
            // и имеет руки вне скрещенного вида
            "geometry": {
                "default": "geometry.vindicator.v1.8"
            },
            // описывать яйцо для призыва необязательно,
            // либо можно указать путь до созданной текстуры
            "spawn_egg": {
                "base_color": "#3a3a3a", // основной цвет
                "overlay_color": "#b89535" // цвета пятнышек
            }
        }
    }
}
```

Но пока большинство данных лишь описывают будущие свойства моба, определимся что нужно для отображения любого существа в игровом мире. Принципы применимы для каждого моба без исключения.

1. Текстура или несколько слоев текстур (к примеру для жителей, их профессия определяет какая текстура будет наложена на основной слой).
2. Форма (модель, или же геометрия), а также ее контроллеры для создания анимаций, условий отображения частей модели и прочего.
3. Объект описания для связки формы, текстур (используя материалы), форм и их контроллеров.

Здесь нет ничего сложного, разберемся с каждым пунктом подробнее.

### Текстура и материалы

Большую роль в визуалиации всего существа берет на себя текстура. Для существ они размещаются в папке __textures/entities__ вашего пакета ресурсов, обычно используя идентификатор моба. К примеру, загрузите готовую текстуру Хранителя, разместив ее по пути *textures/entities/keeper.png*:

<div className="resource-atlas-align-box">

![keeper.png](/images/entities/keeper.png)

</div>

В большинстве случаев одной текстуры будет достаточно, ее можно создать используя различные редакторы моделей или самые обычные редакторы изображений (лишь убедитесь, что у вас есть возможность создавать изображения с прозрачными пикселями и сохранять их в формате *.png*).

### Геометрия и контроллеры

Давайте воспользуемся уже созданными моделями, но усложним их логику, добавив дополнительные контроллеры. Контроллеры описывают поведение обычной статичной модели, добавляя условия отрисовки костей, а также связывая ее с материалами и текстурами. Фактически, контроллер связывает переданные в клиентском описании свойства с самим мобом.

Начнем с контроллера модели (рендера), нам нужно скрывать скрещенные руки если у существа появляется цель и показывать пару обычных:

```js title="render_controllers/keeper.render_controllers.json"
{
    "format_version": "1.10.0",
    "render_controllers": {
        "controller.render.mymod.keeper": {
            // здесь используются названия свойств в объекте
            // описания клиентской сущности
            "geometry": "Geometry.default",
            "part_visibility": [
                // руки (и предмет в них) должны отображаться
                // только если у существа есть цель для атаки
                { "rightArm": "query.has_target" },
                { "leftArm": "query.has_target" },
                { "rightItem": "query.has_target" },
                // если же цели нет, можно отобразить обычные
                // скрещенные руки как у жителей
                { "arms": "!query.has_target" }
            ],
            "materials": [
                { "*": "Material.default" }
            ],
            "textures": [
                "Texture.default"
            ]
        }
    }
}
```

Допустим, что существо способно искать кровать и спать в ночное время суток (опять же, как жители). Для этого удобно воспользоваться состояниями, используя для этого контроллеры анимаций. Они позволяют, следуя текущему состоянию, создать переход между ними, определив возможные анимации и условия следующего перехода.

```js title="animation_controllers/keeper.animation_controllers.json"
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.mymod.keeper": {
            // состояние контроллера анимации по умолчанию
            "initial_state": "default",
            "states": {
                // стандартное состояние позволяет мобу перемещаться,
                // совершать атаки и просто стоять на месте
                "default": {
                    "animations": [
                        "keeper",
                        "keeper_attack",
                        "keeper_walk"
                    ],
                    "transitions": [
                        { "get_in_bed": "query.is_sleeping" }
                    ]
                },
                // переход в состояние сна, мобу в этот момент попросту
                // не нужны другие анимации здесь
                "get_in_bed": {
                    "animations": [
                        "get_in_bed"
                    ],
                    "transitions": [
                        { "default": "!query.is_sleeping" }
                    ]
                }
            }
        }
    }
}
```

### Клиентское существо

Используя рассмотренные только что контроллеры, свяжем их с мобом, добавив ему анимации и сами контроллеры. Для этого дополним уже созданный ранее объект описания, добавив контроллеры и анимации для них.

```js title="entity/keeper.entity.json"
{
    "format_version": "1.10.0",
    "minecraft:client_entity": {
        "description": {
            ...
            // любые названия свойств в списке анимаций используются контроллерами
            "animations": {
                // анимации, используемые новосозданным нами контроллером
                "keeper": "animation.vindicator.base",
                "keeper_attack": "animation.vindicator.attack",
                "keeper_walk": "animation.vindicator.walk",
                "get_in_bed": "animation.villager.get_in_bed",
                "controller_keeper": "controller.animation.mymod.keeper",
                // моб смотрит на цель, когда это необходимо (к примеру, когда
                // смотрит на игрока или существо, которое сейчас атакует)
                "look_at_target_default": "animation.humanoid.look_at_target.default",
                "look_at_target_gliding": "animation.humanoid.look_at_target.gliding",
                "look_at_target_swimming": "animation.humanoid.look_at_target.swimming",
                "controller_look_at_target": "controller.animation.humanoid.look_at_target",
                // житель приподнимает руки, когда вы показываете ему предмет,
                // который может быть использован для торговли с ним
                "raise_arms": "animation.villager.raise_arms",
                "controller_raise_arms": "controller.animation.villager_v2.raise_arms",
                // титеву лука необходимо натянуть, а в игре еще и много других
                // предметов, которые существо может использовать
                "bow_and_arrow": "animation.humanoid.bow_and_arrow",
                "controller_bow_and_arrow": "controller.animation.humanoid.bow_and_arrow",
                "use_item_progress": "animation.humanoid.use_item_progress",
                "controller_use_item_progress": "controller.animation.humanoid.use_item_progress"
            },
            "scripts": {
                // масштаб существа определяется для некоторых из них, это
                // стандартное значение для жителей и разбойников
                "scale": "0.9375",
                // контроллеры анимаций, перечисленные в прошлом свойстве
                "animate": [
                    "controller_keeper",
                    "controller_look_at_target",
                    "controller_raise_arms",
                    "controller_bow_and_arrow",
                    "controller_use_item_progress"
                ]
            },
            // контроллеры рендера для связки моделей и их состояний
            "render_controllers": [
                "controller.render.mymod.keeper"
            ],
            // прикрепляемые рендеры используются для отображения брони,
            // а также создания других рендеров модами
            "enable_attachables": true
        }
    }
}
```

## Поведение

На этом моменте существо уже фактически создано, для нас остается самое интересное — определение его логики, как существо взаимодействует с игроком и миром. Создадим логику, добавив мобу возможность атаковать существ и просто случайно перемещаться по миру.

1. Учитывая, что существо перемещается по земле, нужно определить логику его движения:

    ```js title="entities/keeper.json"
    {
        ...
        "minecraft:entity": {
            ...
            "components": {
                ...
                "minecraft:movement": {
                    // атрибут скорости передвижения существа
                    "value": 0.45
                },
                // существо может перемещаться по земле
                "minecraft:movement.basic": {},
                // существо может линейно прыгать (равноускоренно)
                "minecraft:jump.static": {},
                // существо может забираться по лестнице
                "minecraft:can_climb": {}
            }
        }
    }
    ```

2. Далее установим основные определения для поиска пути к цели:

    ```js title="entities/keeper.json"
    {
        ...
        "minecraft:entity": {
            ...
            "components": {
                ...
                // настроим логику для поиска путей, устанавливая
                // или получая цель, существо ищет ближайший путь
                "minecraft:navigation.walk": {
                    "avoid_portals": true, // избегать порталы
                    "avoid_water": true, // избегать воды
                    "can_open_doors": true, // может открывать двери
                    "can_pass_doors": true, // может проходить через двери
                    "can_path_over_water": true // может строить пути над водой
                },
                // существо может открывать дверь, это свойство требуется
                // помимо основной логики для поиска путей
                "minecraft:annotation.open_door": {},
                // предпочтения в блоках будут оценивать различные пути,
                // находя наиболее дешевый для существа
                "minecraft:preferred_path": {
                    // блоки, на которые существо может спрыгнуть при поиске
                    // пути (пути не будут генерироваться с большим порогом)
                    "max_fall_blocks": 2,
                    "default_block_cost": 3, // стоимость перемещения по блоку
                    "jump_cost": 5, // стоимость прыжка на блок
                    // стоимость перемещения по определенным блокам
                    "preferred_path_blocks": [
                        {
                            "cost": 0,
                            "blocks": [
                                "grass_path",
                                "gravel"
                            ]
                        },
                        {
                            "cost": 1,
                            "blocks": [
                                "cobblestone",
                                "planks",
                                "wooden_slab"
                            ]
                        },
                        {
                            "cost": 50,
                            "blocks": [ "bed" ]
                        }
                    ]
                }
            }
        }
    }
    ```

3. Начнем создавать сам интеллект, прежде всего существо должно плавать и искать убежище (кровать):

    ```js title="entities/keeper.json"
    {
        ...
        "minecraft:entity": {
            ...
            "components": {
                ...
                // позволяет существу плавать на жидкостях, а не тонуть
                "minecraft:behavior.float": {
                     // чем меньше приоритет, тем быстрее выполнится
                     // тот или иной этап интеллекта
                    "priority": 0
                },
                // искать возможное убежище в виде кровати
                "minecraft:hide": {},
                "minecraft:behavior.hide": {
                    "priority": 1,
                    "duration": 30,
                    "poi_type": "bed",
                    "speed_multiplier": 0.75
                }
            },
            // существо не должно открывать дверь, когда есть опасность
            "minecraft:behavior.restrict_open_door": {
                "priority": 4
            }
        }
    }
    ```

4. Определим цели для атаки и существ, которых нужно избегать:

    ```js title="entities/keeper.json"
    {
        ...
        "minecraft:entity": {
            ...
            "components": {
                ...
                // целью становится существо, ударившее моба
                "minecraft:behavior.hurt_by_target": {
                    "priority": 2
                },
                // определим существ, которых нужно избегать
                "minecraft:behavior.avoid_mob_type": {
                    "priority": 2,
                    "entity_types": [
                        {
                            // фильтры определяют условия, в результате которых
                            // цель будет выполнена и событие произойдет
                            "filters": {
                                "test": "is_family",
                                "subject": "other", // найденная цель
                                "value": "zombie"
                            }
                        }
                    ],
                    // максимальное расстояние для поиска новой цели
                    "max_dist": 6,
                    // максимальное расстояние для удаления от существа
                    "max_flee": 12,
                    // невидимость не важна для обнаружения цели
                    "ignore_visibility": true,
                    // удалять ли прошлую цель, если она уже есть
                    "remove_target": false
                },
                // определим цели в приоритете над тем, кто ударил существо
                "minecraft:behavior.nearest_prioritized_attackable_target": {
                    "priority": 3,
                    // существо должно встретиться с целью взглядом
                    "must_see": true,
                    // существо должно суметь построить путь до цели
                    // (к примеру, этого не произойдет если цель за каньоном)
                    "must_reach": true,
                     // время захвата цели, после, она будет сброшена
                    "persist_time": 8,
                    // можно выбирать ближайшую цель, если другая цель уже есть
                    "reselect_targets": true,
                    "entity_types": [
                        {
                            // фильтры включают в себя логическое и, или и не
                            "filters": {
                                "all_of": [
                                    {
                                        "test": "is_family",
                                        "subject": "other",
                                        "value": "zombie"
                                    },
                                    {
                                        "test": "is_family",
                                        "subject": "other",
                                        // операторы позволяют сравнивать значения
                                        "operator": "!=",
                                        "value": "zombie_villager"
                                    },
                                    {
                                        "any_of": [
                                            {
                                                "test": "is_missing_health",
                                                "subject": "self", // само существо
                                                "value": true
                                            },
                                            {
                                                "test": "has_target",
                                                "subject": "other",
                                                "value": true
                                            }
                                        ]
                                    }
                                ]
                            },
                            // максимальное расстояние для поиска цели
                            "max_dist": 10
                        }
                    ]
                }
            }
        }
    }
    ```

5. Теперь можно определить и атаку, а также еще несколько целей, регенерацию и направление взгляда на игрока (давайте не будем ограничивать себя парой простых шагов интеллекта):

    ```js title="entities/keeper.json"
    {
        ...
        "minecraft:entity": {
            ...
            "components": {
                ...
                // определения для вооружения и брони
                "minecraft:equipment": {
                    "table": "loot_tables/entities/skeleton_gear.json"
                },
                // выпускаемые существом снаряды, определение вооружения
                // в этом не играет никакой роли (как например, у гаста)
                "minecraft:shooter": {
                    "type": "Arrow",
                    "def": "minecraft:arrow"
                },
                // воспользуемся атакой с дистанции (удаленной)
                "minecraft:behavior.ranged_attack": {
                    "priority": 5,
                    // минимальное расстояние, с которого существо выстрелит
                    "attack_radius": 2,
                    // со случайным интервалом от трех до пяти секунд
                    "attack_interval_min": 3,
                    "attack_interval_max": 5
                },
                // добавим регенерацию с помощью зелья
                "minecraft:behavior.drink_potion": {
                    "priority": 6,
                    "potions": [
                        {
                            "id": 21, // обычное зелье регенерации
                            "chance": 1, // наибольшая вероятность, т.е. всегда
                            "filters": [
                                {
                                    // если нет цели и здоровье не полное
                                    "all_of": [
                                        {
                                            "test": "has_target",
                                            "subject": "self",
                                            "operator": "!=",
                                            "value": true
                                        },
                                        {
                                            "test": "is_missing_health",
                                            "subject": "self",
                                            "value": true
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                // определять как цель существо, оттолкнувшее нашего моба
                "minecraft:behavior.target_when_pushed": {
                    "priority": 10,
                    "percent_chance": 5 // процентный шанс на определение цели
                },
                // просто посмотреть на игрока, почему бы и нет
                "minecraft:behavior.look_at_player": {
                    "priority": 12,
                    "probability": 0.01 // вероятность на это за один тик
                }
            }
        }
    }
    ```

6. Добавим еще и случайные перемещения, иначе получается, что существо способно лишь вступать в атаку и смотреть на игрока, не делая ничего кроме этого:

    ```js title="entities/keeper.json"
    {
        ...
        "minecraft:entity": {
            ...
            "components": {
                ...
                // существо может спать на кровати
                "minecraft:behavior.sleep": {
                    "priority": 7,
                    "cooldown_time": 0,
                    "timeout_cooldown": 8
                },
                // сохраним за существом точку призыва
                "minecraft:home": {},
                // вокруг которой оно будет гулять, не отходя далеко
                "minecraft:behavior.move_towards_home_restriction": {
                    "priority": 13
                },
                // а также вернем существо домой, если оно ушло
                // от него в результате атаки другого моба
                "minecraft:behavior.go_home": {
                    "priority": 14,
                    "goal_radius": 10,
                    "interval": 360 // максимальное время в тиках
                },
                // случайное перемещение в другую точку
                "minecraft:behavior.random_stroll": {
                    "priority": 13,
                    "speed_multiplier": 0.4, // понизим скорость
                    "interval": 150,
                    // и ограничим зону для перемещения
                    "xz_dist": 5,
                    "y_dist": 3
                }
            }
        }
    }
    ```

## Торговля

Давайте добавим ключевую особенность нашего Хранителя, определив для него возможность торговли с игроком. Используя пакеты поведения, это можно сделать буквально парой ресурсов. Прежде дополним этапы поведения, а после определим товары для продажи.

```js title="entities/keeper.json"
{
    ...
    "minecraft:entity": {
        ...
        "components": {
            ...
            // определения для возможности торговли
            "minecraft:trade_table": {
                // имя в интерфейсе, определите его в переводах
                "display_name": "entity.mymod.keeper",
                "table": "trading/keeper_trades.json",
                "new_screen": true
            },
            // возможность предлагать товары прямо в руках, для
            // этого мы определяли контроллер raise_arms
            "minecraft:behavior.trade_interest": {
                "priority": 8,
                // время между сменой предметов
                "carried_item_switch_time": 2,
                "cooldown": 2, // перезарядка после убирания
                // сколько существо будет предлагать товары
                // таким образом (время подряд)
                "interest_time": 45,
                // время после убирания предмета, которое существо
                // продолжит держать в руке
                "remove_item_time": 1,
                "within_radius": 6 // дальность предложения
            },
            // поведение торговли с игроком, она куда менее важна
            // чем, к примеру, атака, определение цели или сон
            "minecraft:behavior.trade_with_player": {
                "priority": 9
            },
            // существо будет смотреть на игрока во время торговли
            "minecraft:behavior.look_at_trading_player": {
                "priority": 11
            }
        }
    }
}
```

Теперь определим список товаров, для этого разместим еще один ресурс в пакете поведения.

```js title="trading/keeper_trades.json"
{
    "tiers": [
        {
            "trades": [
                {
                    // количество сделок перед ее закрытием
                    "max_uses": 2,
                    // что нужно для покупки товара
                    "wants": [
                        {
                            "item": "minecraft:experience_bottle",
                            "quantity": 48 // количество
                        },
                        {
                            "item": "minecraft:netherite_pickaxe"
                        }
                    ],
                    // какой товар будет предложен
                    "gives": [
                        {
                            "item": "minecraft:netherite_pickaxe",
                            // функции определяют дополнительные свойства предмета
                            "functions": [
                                {
                                    "function": "enchant_with_levels",
                                    "treasure": false,
                                    // уровни зачарования формируются как на столе
                                    // зачарований (где максимально возможный 30)
                                    "levels": {
                                        "min": 30,
                                        "max": 45
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "max_uses": 8,
                    "wants": [
                        {
                            "item": "minecraft:emerald",
                            "quantity": 64
                        },
                        {
                            "item": "minecraft:emerald",
                            // количество может определяться пределом
                            "quantity": {
                                "min": 16,
                                "max": 64
                            }
                        }
                    ],
                    "gives": [
                        {
                            "item": "minecraft:netherite_ingot"
                        }
                    ]
                }
            ]
        },
        {
            "trades": [
                {
                    "max_uses": 1,
                    "wants": [
                        {
                            "item": "minecraft:netherite_ingot",
                            "quantity": {
                                "min": 2,
                                "max": 3
                            }
                        },
                        {
                            "item": "minecraft:compass"
                        }
                    ],
                    "gives": [
                        {
                            // случайный выбор чего-то одного из списка
                            "choice": [
                                {
                                    "item": "minecraft:map",
                                    "functions": [
                                        {
                                            // функции не ограничиваются лишь чарами
                                            "function": "exploration_map",
                                            "destination": "mineshaft"
                                        }
                                    ]
                                },
                                {
                                    "item": "minecraft:map",
                                    "functions": [
                                        {
                                            "function": "exploration_map",
                                            "destination": "pillageroutpost"
                                        }
                                    ]
                                },
                                {
                                    "item": "minecraft:map",
                                    "functions": [
                                        {
                                            "function": "exploration_map",
                                            "destination": "stronghold"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "trades": [
                {
                    "max_uses": 12,
                    "wants": [
                        {
                            "item": "minecraft:netherite_ingot",
                            "quantity": {
                                "min": 12,
                                "max": 16
                            }
                        },
                        {
                            "item": "minecraft:dragon_breath"
                        }
                    ],
                    "gives": [
                        {
                            "item": "minecraft:end_portal_frame",
                            "functions": [
                                {
                                    // случайно добавим размещенное око, либо его не будет
                                    "function": "random_block_state",
                                    "block_state": "end_portal_eye_bit",
                                    "values": {
                                        "min": 0,
                                        "max": 1
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
```

## Подведем итоги

![first-entity.png](/images/entities/first-entity.png)

Поздравляю, Хранитель создан и готов к работе! Нам фактически даже не пришлось задействовать сам движок, существо описано лишь с помощью внутреигрового контента. Обязательно опробуйте возможности пакетов ресурсов и поведения, они еще неоднократно могут помочь вам в будущем. Готовая же структура файлов теперь должна выглядеть вот так, перепроверьте если что-то вдруг отсутствует:

```txt
My Mod
├─ behavior_packs
│  └─ mymod
│     ├─ entities
│     │  └─ keeper.json
│     └─ trading
│        └─ keeper_trades.json
└─ resource_packs
   └─ mymod
      ├─ entity
      │  └─ keeper.entity.json
      ├─ textures
      │  └─ entities
      │     └─ keeper.png
      ├─ render_controllers
      │  └─ keeper.render_controllers.json
      └─ animation_controllers
         └─ keeper.animation_controllers.json
```

Но так как эта документация все же базируется на технологиях Inner Core, последующие шаги как для описания существ, так и в целом использования пакетов ресурсов и поведения будут описаны в [официальной документации](https://learn.microsoft.com/en-us/minecraft/creator/documents/introductiontoaddentity?view=minecraft-bedrock-stable) и [сводке API (может не открываться без VPN)](https://bedrock.dev/docs/stable/Entities). Майнкрафт не ограничивается лишь нашим движком, здесь еще немало интересных технологий для контента; помните и о том, что помимо мобов у нас есть неограниченные возможности лаунчера.

:::note Не забывайте о внутреигровых данных

Они хранятся с помощью именнованных двоичных тегов, мы уже использовали их в [прошлой статье](actoring-entities#прочие-свойства). Взаимодействие с ними не отличается от обычных, а NBT хранится таким же образом. Это касается любых существ, в том числе новосозданных, снарядов вроде стрел и прочих, прочих, прочих!

:::
