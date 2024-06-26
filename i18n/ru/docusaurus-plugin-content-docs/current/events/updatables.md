# Обновляемые объекты

Представляют из себя объекты, построенные вокруг функции обновления. Обновления вызываются каждый тик (1/20 секунды), которые как угодно могут взаимодействовать с миром и выполнять долгосрочные операции. Неотъемлемая часть движка, на которой основана большая часть жизненного цикла.

## Тик — основа обновлений

Что такое тик? Помимо того, что тик является величной замера времени (в одной секунде 20 тиков), его событие вызывает игровые обновления, на которых построено все, начиная от работы печки и заканчивая интеллектом существ. Обновления останавливаются как только будет запрошен выход из мира, вместе с тиком соответственно.

Давайте начнем с практики и рассмотрим небольшую реализацию секундомера, используя калбек тика:

```js
let ticking = 0;

Callback.addCallback("LocalTick", function() {
    // достаточно увеличить счетчик на единицу
    ticking++;
    if (ticking % 20 == 0) {
        // каждую минуту (60*20) сбрасываем таймер
        if (ticking == 1200) {
            ticking = 0;
        }
        // изменение секунды вызовет ее отображение
        Game.tipMessage(ticking / 20);
    }
});

Callback.addCallback("LocalLevelLoaded", function() {
    // сбросим прошлый таймер, нам он не нужен
    ticking = 0;
});
```

Добавляя счетчик, событие тика будет увеличивать его примерно каждые 50 миллисекунд (1/20 секунды). Проверяя остаток от деления счетчика на одну секунду, следует обновить плашку с секундомером на экране, перед этим убедившись в сбросе таймера (для ограничения секундомера от 0 до 59 секунд). Изучите комментарии еще несколько раз, если что-то остается непонятным.

События загрузки мира вызываются перед первым событием тика, как для клиента, так и для сервера. Именно тик является началом работы механизмов, анимаций и самой "жизни" игрока. Это проиходит до отображения игрового экрана, еще на этапе подготовки, вероятно вы замечали как враждебные существа могли убивать игрока на этом моменте.

Мы поверхностно рассмотрели немаловажные клиенсткие события с серверными аналогами `tick` и `LevelLoaded` — они уже должны использоваться для взаимодействия с миром, а не интерфейсом игрока. Здесь вполне достаточно использования клиентского тика, в ближайших статьях мы обязательно его свяжем с серверным.

Несмотря на обширные возможности тика, он не всесилен. Частые обновления понижают производительность и вызывают немалую часть нагрузки, именно по этим причинам была создана такая технология как обновляемые объекты. Она предоставляет дополнительные оптимизации, направленные на снижение влияния обновлений на игровой процесс.

## Прототипирование

Если событие тика в калбеке остается обычной функцией, обновляемые объекты лишь содержат функцию обновления, предоставляя пространство для размещения данных и других методов. Любой обновляемый объект состоит из метода `update`, функций, зависимых от него, и вероятно, еще нескольких для внешнего изменения данных.

Перепишем небольшой пример с секундомером для обновляемого объекта:

```js
const StopwatchActionbar = {
    next: function() {
        if (this.ticking === undefined) {
            this.ticking = 0;
        }
        this.ticking++;
        // каждую минуту (60*20) сбрасываем таймер
        if (this.ticking == 1200) {
            this.ticking = 0;
        }
    },
    update: function() {
        this.next();
        if (this.ticking % 20 == 0) {
            // изменение секунды вызовет ее отображение
            Game.tipMessage(this.ticking / 20);
        }
    },
    reset: function() {
        delete this.ticking;
    }
};
```

Так будет выглядеть основа для функционального обработчика. Но пока это лишь объект, его необходимо будет добавить в список обновляемых объектов. Для этого существует несколько методов, нам нужен клиентский обновляемый объект:

```js
Callback.addCallback("LocalLevelLoaded", function() {
    Updatable.addLocalUpdatable(StopwatchActionbar);
    // сбросим прошлый таймер, нам он не нужен
    StopwatchActionbar.reset();
});
```

Переход в другой мир автоматически удаляет обновляемые объекты, нам лишь следует произвести сброс если это необходимо. Но на самом деле, эта часть статьи не просто так называется прототипированием, так как помимо объектов, обычно реализуют классы для еще более простого и удобного взаимодействия с экземпляром объекта.

Здесь нет ничего сложного, достаточно немного изменить существующий объект:

```js
const StopwatchActionbar = function() {
    this.ticking = 0;
    this.next = function() {
        this.ticking++;
        // каждую минуту (60*20) сбрасываем таймер
        if (this.ticking == 1200) {
            this.ticking = 0;
        }
    };
    this.update = function() {
        this.next();
        if (this.ticking % 20 == 0) {
            // изменение секунды вызовет ее отображение
            Game.tipMessage(this.ticking / 20);
        }
    };
};
```

В таком случае, количество методов сокращается за счет того, что метод сброса нам попросту не нужен — новый экземляр хранит новые данные. Калбек входа в мир будет выглядеть так:

```js
Callback.addCallback("LocalLevelLoaded", function() {
    Updatable.addLocalUpdatable(new StopwatchActionbar());
});
```

Использование классов позволит унифицировать отдельные объекты, создавая продвинутые прототипы и изменяя данные обновляемых объектов независимо друг от друга. Вообще, выделять что-либо в классы очень часто является признаком хорошего тона в программировании, в том числе в объекто-ориентированном (ООП).

### Изменение цикла

Одно из основных отличий обновляемых объектов от тика — их события, и объекты в целом, могут быть исключены из обработчика обновлений. Это особенно полезно, если нужно реализовать анимацию, скажем, для проведения ритуала. Так, обновляемые объекты применимы для выполнения временных циклов и просто обработки событий вокруг игровых механик с ограниченным условием существования.

Для примера, завершим секундомер по достижении одной минуты:

```js
const StopwatchActionbar = function() {
    this.ticking = 0;
    this.next = function() {
        this.ticking++;
        // через минуту (60*20) завершаем цикл
        if (this.ticking == 1200) {
            // highlight-next-line
            this.remove = true;
        }
    };
    this.update = function() {
        this.next();
        if (this.ticking % 20 == 0) {
            // изменение секунды вызовет ее отображение
            Game.tipMessage(this.ticking / 20);
        }
    };
};
```

Теперь вместо секундомера класс представляет собой таймер, не забудьте переименовать `StopwatchActionbar` в `TimerActionbar`. Это поможет сделать ваши прототипы интуитивнее.

Помимо удаления объекта из списка обновляемых, событие обновления может быть приостановлено. Тогда, продолжить его работу должны будут другие события. Для этого может послужить обычная палка, ведь все мы любим ее использовать, правда? Используем клиентский калбек использования предмета:

```js
Callback.addCallback("ItemUseLocal", function(coords, item) {
    if (item.id == VanillaItemID.stick) {
        // получаем все клиентские обновляемые объекты
        const updatables = Updatable.getAllLocal();
        for (let i = 0; i < updatables.size(); i++) {
            const timer = updatables.get(i);
            // если наш объект действительно секундомер
            if (timer instanceof StopwatchActionbar) {
                // переключаем состояние, по умолчанию этого
                // свойства нет, но так оно будет создано
                // highlight-next-line
                timer.noupdate = !timer.noupdate;
            }
        }
    }
})
```

Свойства `remove` и `noupdate` могут быть применены как внутри прототипа, так и извне. Последнее гарантирует сохранность объектов до выхода из мира.

## А что на сервере

Помимо клиентских обновляемых объектов, обычно реализуют серверные, использующиеся для большинства операций. Принцип их реализации в объектах и экземплярах классов ничем не отличается от клиентских, разве что они используются уже не для работы с интерфейсом и анимациями.

Усложним пример во всех направлениях — пусть обновляемые объекты создаются для каждого игрока многопользовательской игры, у них будут вполне реальные условия, а изменение состояния игроков повлияет на их объекты. Реализуем случайные появления существ вокруг игроков, ограничив их под землей и только в дневное время. Для этого нам понадобятся три серверных события в калбеках:

```js
Callback.addCallback("ServerPlayerLoaded", function(playerUid) {
    // игрок присоединился к миру, это же событие запускает тик
});

Callback.addCallback("PlayerChangedDimension", function(playerUid, currentId, lastId) {
    // будем призывать существ только в обычном мире, в остальных измерениях
    // игрок фактически находится под землей без времени суток
});

Callback.addCallback("ServerPlayerLeft", function(playerUid) {
    // игрок покинул мир, здесь следует избавиться от обновляемого объекта
});
```

Эти события еще неоднократно понадобятся нам в следующих уроках, ну а сейчас перейдем к прототипированию. Помимо функции обновления, лучше отдельно выделить проверки, переход между измерениями и саму рандомизацию призыва:

```js
const SurprizeBehindPlayer = function(playerUid) {
    this.age = 0;
    this.target = playerUid;
    this.surprize = function() {
        ...
    };
    this.update = function() {
        // лишь в случае если действие уже отложено
        if (this.age > 0) {
            this.age--;
            if (this.age == 0) {
                this.surprize();
            }
        }
        if (this.age <= 0) {
            // откладываем следующую попытку на несколько
            // минут (от 1 до 5, или от 1200 до 6000 тиков)
            this.age = Math.round(1200 + Math.random() * 4800);
        }
    };
    this.transfer = function(dimension) {
        if (dimension == 0) {
            this.region = BlockSource.getDefaultForDimension(dimension);
            // сбросим отложенные действия, если они есть
            this.age = 0;
            delete this.noupdate;
        } else {
            this.noupdate = true;
        }
    };
    this.destroy = function() {
        // очистим и уничтожим обновляемый объект
        this.remove = true;
        delete this.region;
    };
};
```

Основная часть прототипа реализована, остается добавить кульминацию и привязать объекты к событиям. Готовы к сюрпризу? Тогда, давайте реализуем его появление:

```js
const SurprizeBehindPlayer = function(playerUid) {
    ...
    this.surprize = function() {
        // сюрприз должен появиться только в дневное время
        if (this.region != null && World.getWorldTime() % 24000 < 12000) {
            const position = Entity.getPosition(playerUid);
            // если над игроком нет блоков, значит он на поверхности
            if (this.region.canSeeSky(position.x, position.y, position.z)) {
                // пять попыток на появление сюрприза, вокруг может не быть блоков
                for (let i = 0; i < 5; i++) {
                    // рандомизируем дистанцию и угол поворота от игрока
                    const distance = 8 + Math.random() * 16;
                    const angle = Math.random() * Math.PI * 2;
                    // найдем поверхность в радиусе от 8 до 24 блоков
                    const x = position.x + Math.sin(angle) * distance;
                    const y = Math.min(256, position.y + 16);
                    const z = position.z + Math.cos(angle) * distance;
                    // проверим где находится цельный блок для спавна
                    const surface = GenerationUtils.findSurface(x, y, z);
                    // поверхность может быть слишком низко или отсутствовать
                    if (surface.y > 0 && surface.y > position.y - 16) {
                        // наконец можно призвать сюрприз над найденным блоком поверхности
                        this.region.spawnEntity(surface.x, surface.y + 2, surface.z, "creeper");
                        break;
                    }
                }
            }
        }
    };
};
```

Неплохим вариантом будет реализовать вспомогательный метод для поиска лишь одного обновляемого объекта, это пригодится в нескольких событиях, так что упрощение здесь действительно к месту:

```js
const getUpdatableWith = function(predicate) {
    const updatables = Updatable.getAll();
    for (let i = 0; i < updatables.size(); i++) {
        const updatable = updatables.get(i);
        if (predicate(updatable)) {
            return updatable;
        }
    }
    return null;
};
```

И финальным штрихом, добавим к ранее расмотренным событиям функционал:

```js
Callback.addCallback("ServerPlayerLoaded", function(playerUid) {
    Updatable.addUpdatable(new SurprizeBehindPlayer(playerUid));
});

Callback.addCallback("PlayerChangedDimension", function(playerUid, currentId, lastId) {
    getUpdatableWith(function(updatable) {
        return updatable instanceof SurprizeBehindPlayer && updatable.target == playerUid
    }).transfer(currentId);
});

Callback.addCallback("ServerPlayerLeft", function(playerUid) {
    getUpdatableWith(function(updatable) {
        return updatable instanceof SurprizeBehindPlayer && updatable.target == playerUid
    }).destroy();
});
```

Обновляемый объект гарантированно будет добавлен в этом жизненном цикле для каждого игрока, событие изменения измерения вызывается сразу же после события завершения загрузки. Слишком сложно? У этой документации есть цель разбавить простые примеры комплексными, это заставит задуматься и пересмотреть старые статьи позже. Не волнуйтесь если что-то остается непонятным, каждая тема неоднократно будет затронута в будущем.

## Отложенные действия

Обновляемые объекты могут помочь с действиями, которые должны произойти через выделенный промежуток времени, либо определить условия его выполнения и завершить цикл. В аналогию можно взять `setTimeout`, который обычно служит в браузерах для откладывания вызова функции на предопределенный промежуток. Благодаря постоянным обновлениям, этот функционал может быть значительно расширен.

```js
const delay = function(action, tick) {
    Updatable.addUpdatable({
        update: function() {
            tick--;
            if (tick <= 0) {
                action();
                this.remove = true;
            }
        }
    });
};
```

Эта вспомогательная функция позволит отложить действие на необходимое количество тиков, к примеру, призвать существо через 3 секунды (60 тиков). Применений у подобных таймеров масса, использование потоков недопустимо для игры (об этом можно узнать в следующих статьях), а вот небольшая проверка приведет к минимальным затратам. Кстати о проверках, почему бы не добавить условие для последующего существования этого таймера:

```js
const delay = function(action, tick, condition) {
    Updatable.addUpdatable({
        update: function() {
            tick--;
            if (tick <= 0) {
                action();
            } else if (!condition || condition(tick)) {
                return;
            }
            this.remove = true;
        }
    });
};
```

Дополнительный аргумент остается необязательным, а в случае его использования, ожидание будет продолжено только если условие выполняется. Изменяйте, улучшайте и просто используйте похожие реализации в своем коде. Уверен, рано или поздно эта функция сможет вам по настоящему пригодиться.
