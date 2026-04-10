# Updatables

These are objects built around an update function. Updates are called every tick (1/20 of a second), which can interact with the world in any way and perform long-term operations. An integral part of the engine, on which most of the life cycle is based.

## Tick — the basis of updates

What is a tick? Besides the fact that a tick is a unit of time measurement (there are 20 ticks in one second), its event triggers game updates, on which everything is built, from the operation of a furnace to the intelligence of entities. Updates stop as soon as an exit from the world is requested, along with the tick respectively.

Let's start with practice and look at a small implementation of a stopwatch using the tick callback:

```js
let ticking = 0;

Callback.addCallback("LocalTick", function() {
    // it is enough to increment the counter by one
    ticking++;
    if (ticking % 20 == 0) {
        // every minute (60*20) reset the timer
        if (ticking == 1200) {
            ticking = 0;
        }
        // changing a second will cause it to be displayed
        Game.tipMessage(ticking / 20);
    }
});

Callback.addCallback("LocalLevelLoaded", function() {
    // reset the previous timer, we don't need it
    ticking = 0;
});
```

By adding a counter, the tick event will increase it approximately every 50 milliseconds (1/20 of a second). Checking the remainder of dividing the counter by one second, you should update the stopwatch banner on the screen, first making sure the timer has been reset (to limit the stopwatch from 0 to 59 seconds). Study the comments a few more times if something remains unclear.

World loading events are called before the first tick event, for both client and server. It is the tick that is the beginning of the work of mechanisms, animations and the very "life" of the player. This happens before displaying the game screen, still at the preparation stage, you've probably noticed how hostile entities could kill the player at this moment.

We briefly reviewed important client events with server counterparts `tick` and `LevelLoaded` — they should already be used to interact with the world, and not the player's interface. Here it is quite enough to use the client tick, in the upcoming articles we will definitely connect it with the server one.

Despite the extensive capabilities of the tick, it is not omnipotent. Frequent updates reduce performance and cause a considerable part of the load, exactly for these reasons a technology like updatables was created. It provides additional optimizations aimed at reducing the impact of updates on gameplay.

## Prototyping

While the tick event in a callback remains an ordinary function, updatable objects only contain an update function, providing space to place data and other methods. Any updatable object consists of an `update` method, functions dependent on it, and probably a few more for external modification of data.

Let's rewrite a small example with a stopwatch for an updatable object:

```js
const StopwatchActionbar = {
    next: function() {
        if (this.ticking === undefined) {
            this.ticking = 0;
        }
        this.ticking++;
        // every minute (60*20) reset the timer
        if (this.ticking == 1200) {
            this.ticking = 0;
        }
    },
    update: function() {
        this.next();
        if (this.ticking % 20 == 0) {
            // changing a second will cause it to be displayed
            Game.tipMessage(this.ticking / 20);
        }
    },
    reset: function() {
        delete this.ticking;
    }
};
```

This is how the basis for a functional handler will look. But for now it's just an object, it will need to be added to the list of updatable objects. For this there are several methods, we need a client updatable object:

```js
Callback.addCallback("LocalLevelLoaded", function() {
    Updatable.addLocalUpdatable(StopwatchActionbar);
    // reset the previous timer, we don't need it
    StopwatchActionbar.reset();
});
```

Transition to another world automatically removes updatable objects, we only need to perform a reset if necessary. But actually, this part of the article is called prototyping for a reason, since in addition to objects, classes are usually implemented for even simpler and more convenient interaction with an object instance.

There is nothing complicated here, it's enough to slightly modify the existing object:

```js
const StopwatchActionbar = function() {
    this.ticking = 0;
    this.next = function() {
        this.ticking++;
        // every minute (60*20) reset the timer
        if (this.ticking == 1200) {
            this.ticking = 0;
        }
    };
    this.update = function() {
        this.next();
        if (this.ticking % 20 == 0) {
            // changing a second will cause it to be displayed
            Game.tipMessage(this.ticking / 20);
        }
    };
};
```

In this case, the number of methods is reduced due to the fact that we simply don't need a reset method — a new instance stores new data. The callback of entering the world will look like this:

```js
Callback.addCallback("LocalLevelLoaded", function() {
    Updatable.addLocalUpdatable(new StopwatchActionbar());
});
```

Using classes will allow you to unify individual objects, creating advanced prototypes and changing data of updatable objects independently of each other. In general, extracting anything into classes is very often a sign of good practice in programming, including object-oriented (OOP).

### Changing the cycle

One of the main differences between updatable objects and a tick is that their events, and objects in general, can be excluded from the update handler. This is especially useful if you need to implement an animation, say, for performing a ritual. Thus, updatable objects are applicable for executing temporary cycles and simply handling events around game mechanics with limited conditions of existence.

As an example, let's complete the stopwatch upon reaching one minute:

```js
const StopwatchActionbar = function() {
    this.ticking = 0;
    this.next = function() {
        this.ticking++;
        // in a minute (60*20) complete the cycle
        if (this.ticking == 1200) {
            // highlight-next-line
            this.remove = true;
        }
    };
    this.update = function() {
        this.next();
        if (this.ticking % 20 == 0) {
            // changing a second will cause it to be displayed
            Game.tipMessage(this.ticking / 20);
        }
    };
};
```

Now instead of a stopwatch, the class represents a timer, don't forget to rename `StopwatchActionbar` to `TimerActionbar`. This will help make your prototypes more intuitive.

In addition to removing an object from the list of updatables, the update event can be suspended. Then, other events will have to continue its work. A regular stick can serve for this, because we all love using it, right? Let's use the client callback for item usage:

```js
Callback.addCallback("ItemUseLocal", function(coords, item) {
    if (item.id == VanillaItemID.stick) {
        // get all client updatable objects
        const updatables = Updatable.getAllLocal();
        for (let i = 0; i < updatables.size(); i++) {
            const timer = updatables.get(i);
            // if our object is indeed a stopwatch
            if (timer instanceof StopwatchActionbar) {
                // switch the state, by default this
                // property does not exist, but it will be created this way
                // highlight-next-line
                timer.noupdate = !timer.noupdate;
            }
        }
    }
})
```

Properties `remove` and `noupdate` can be applied both inside the prototype and externally. The latter guarantees the safety of objects until exiting the world.

## What about the server

In addition to client updatable objects, server ones are usually implemented, used for most operations. The principle of their implementation in objects and class instances is no different from client ones, except that they are no longer used for working with the interface and animations.

Let's complicate the example in all directions — let updatable objects be created for each player of a multiplayer game, they will have quite real conditions, and changing the state of players will affect their objects. Let's implement random entity spawns around players, limiting them underground and only during the daytime. For this we will need three server events in callbacks:

```js
Callback.addCallback("ServerPlayerLoaded", function(playerUid) {
    // player joined the world, the same event starts the tick
});

Callback.addCallback("PlayerChangedDimension", function(playerUid, currentId, lastId) {
    // we will summon entities only in the overworld, in other dimensions
    // the player is actually underground without time of day
});

Callback.addCallback("ServerPlayerLeft", function(playerUid) {
    // player left the world, here we should get rid of the updatable object
});
```

We will need these events more than once in the following lessons, but for now let's move on to prototyping. Besides the update function, it's better to separately highlight checks, moving between dimensions, and the randomization of summoning itself:

```js
const SurprizeBehindPlayer = function(playerUid) {
    this.age = 0;
    this.target = playerUid;
    this.surprize = function() {
        ...
    };
    this.update = function() {
        // only in case the action is already delayed
        if (this.age > 0) {
            this.age--;
            if (this.age == 0) {
                this.surprize();
            }
        }
        if (this.age <= 0) {
            // delay the next attempt for a few
            // minutes (from 1 to 5, or from 1200 to 6000 ticks)
            this.age = Math.round(1200 + Math.random() * 4800);
        }
    };
    this.transfer = function(dimension) {
        if (dimension == 0) {
            this.region = BlockSource.getDefaultForDimension(dimension);
            // reset delayed actions, if any
            this.age = 0;
            delete this.noupdate;
        } else {
            this.noupdate = true;
        }
    };
    this.destroy = function() {
        // clear and destroy the updatable object
        this.remove = true;
        delete this.region;
    };
};
```

The main part of the prototype is implemented, it remains to add a climax and bind objects to events. Ready for a surprise? Then, let's implement its appearance:

```js
const SurprizeBehindPlayer = function(playerUid) {
    ...
    this.surprize = function() {
        // the surprise should appear only in the daytime
        if (this.region != null && World.getWorldTime() % 24000 < 12000) {
            const position = Entity.getPosition(playerUid);
            // if there are no blocks above the player, it means they are on the surface
            if (this.region.canSeeSky(position.x, position.y, position.z)) {
                // five attempts for the surprise to appear, there might be no blocks around
                for (let i = 0; i < 5; i++) {
                    // randomize distance and angle of rotation from the player
                    const distance = 8 + Math.random() * 16;
                    const angle = Math.random() * Math.PI * 2;
                    // find a surface within a radius of 8 to 24 blocks
                    const x = position.x + Math.sin(angle) * distance;
                    const y = Math.min(256, position.y + 16);
                    const z = position.z + Math.cos(angle) * distance;
                    // check where the solid block for spawning is
                    const surface = GenerationUtils.findSurface(x, y, z);
                    // the surface can be too low or missing
                    if (surface.y > 0 && surface.y > position.y - 16) {
                        // finally we can summon a surprise above the found surface block
                        this.region.spawnEntity(surface.x, surface.y + 2, surface.z, "creeper");
                        break;
                    }
                }
            }
        }
    };
};
```

A good option would be to implement a helper method to search for only one updatable object, this will be useful in several events, so the simplification here is really appropriate:

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

And as a final touch, let's add functionality to the previously considered events:

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

The updatable object is guaranteed to be added in this lifecycle for every player, the dimension change event is called immediately after the loading complete event. Too complicated? This documentation has a goal to dilute simple examples with complex ones, this will make you think and review old articles later. Do not worry if something remains unclear, every topic will be touched upon repeatedly in the future.

## Delayed actions

Updatable objects can help with actions that must occur after an allocated period of time, or determine conditions for its execution and complete the cycle. An analogy would be `setTimeout`, which usually serves in browsers to postpone calling a function for a predefined period. Thanks to constant updates, this functionality can be significantly expanded.

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

This helper function will allow postponing an action for the required number of ticks, for example, to summon an entity in 3 seconds (60 ticks). There are a ton of uses for such timers, using threads is unacceptable for the game (you can learn about this in following articles), but a small check will result in minimal costs. Speaking of checks, why not add a condition for the subsequent existence of this timer:

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

The additional argument remains optional, and if used, waiting will continue only if the condition is met. Modify, improve and simply use similar implementations in your code. I'm sure, sooner or later this function can be truly useful to you.
