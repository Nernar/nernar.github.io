# Callbacks

From the phrase call + back, it is with their help that we will register event handlers. As the name implies, we will receive a call, and then we can cancel further action. However, not all actions can be canceled, and those that can be can be canceled either by another mod or by the engine. But let's focus on handling callbacks.

## Handler registration

For an event, it is done using the [Callback.addCallback](/api/namespace/Callback#addCallback) method:

<Tabs groupId="scripting-language">
<TabItem value="js" label="JavaScript">

```js
Callback.addCallback("EventName", function(/* its arguments */) {
    // action that will be called as a result of the event
}, 0 /* priority */);
```

</TabItem>
<TabItem value="ts" label="TypeScript">

```ts
Callback.addCallback("EventName", (/* its arguments */) => {
    // action that will be called as a result of the event
}, 0 /* priority */);
```

</TabItem>
</Tabs>

Specifying arguments for an event is optional, the same number of arguments comes for all actions resulting from events. If an event supports action cancellation, you can use [Game.prevent](/api/namespace/Game#prevent), and also check if it has already been canceled using [Game.isActionPrevented](/api/namespace/Game#isActionPrevented).

Priority determines the execution order of events. The higher it is, the earlier your handler will be called compared to others. Do not specify too large numbers, limit yourself, say, to values from 0 to 9. If priority is not specified, the default (0) will be used.

:::danger Do not add a callback inside an event

Otherwise, the new callback action will be duplicated with each event call.

:::

You can experiment with one of the existing examples in [Callback](/api/namespace/Callback#addCallback), a full list of current in-game events is provided there.

### Calling your own events

This is done using the [Callback.invokeCallback](/api/namespace/Callback#invokeCallback) method. The general syntax is quite simple:

```js
Callback.invokeCallback("EventName", /* arguments that will be passed to the event */); 
```

The total number of arguments to pass cannot exceed 10. Under no circumstances should you call in-game events in this way! Extract the necessary part of the code into a separate function or your own event if necessary.

## Getting to know the world of events

As a simple example, you can output `Hello, World!` by registering a handler for a new event and then calling it. Let's supplement the code above:

<Tabs groupId="scripting-language">
<TabItem value="js" label="JavaScript">

```js
Callback.addCallback("MyMod:HelloWorld", function(who) {
    alert("Hello, " + who + "!");
});
Callback.invokeCallback("MyMod:HelloWorld", "World");
```

</TabItem>
<TabItem value="ts" label="TypeScript">

```ts
Callback.addCallback("MyMod:HelloWorld", who => alert(`Hello, ${who}!`));
Callback.invokeCallback("MyMod:HelloWorld", "World");
```

</TabItem>
</Tabs>

Replace *World*, say, with your own name.

## Guarantees and requirements

1. Before an action resulting from an event is processed, all events registered for this action must be completed.

    This means you should not create a heavy load during an event. Otherwise, if even a couple of mods create a load, the user will begin to notice freezes and will refuse to play with your mod.

    Exceptions in this case are opening an interface or operations that the user themselves sees, understanding that everything works exactly as planned.

2. All actions registered for an event are executed sequentially.

    And in the order of adding events using [Callback.addCallback](/api/namespace/Callback#addCallback), including priorities.

3. Limit yourself to one function per event.

    You will need to use multiple checks to detect an event. Modders constantly forget that another dozen mods might be installed alongside theirs.

    Allocate a separate file exclusively for events. Put all necessary conditions into one function. Trust experience, this will improve performance.

4. Tick and some types of timers are not asynchronous with the game.

    First of all, to ensure more stable work, but this can play a cruel joke on you. For example, placing a large number of blocks in one tick will mean their gradual rendering in the world, and not instant placement as one might expect.

    Depending on the power of the device, this can lead to both lags and crashes. The way out of this situation would be subdividing work in the tick or switching to other types of events, of course, if this is possible.

    However, it is guaranteed that the time in the game and the tick time will be almost identical at any given time.

5. Do simpler checks before creating a load.

    For example, in the case of interacting with a block, first check that this is exactly the block you need from the passed event arguments, and only then access additional methods.

:::note And remember

The performance of the game depends entirely on you. We, in turn, do our best to direct you to use the right tools and, as developers, ensure the stable operation of the modified client.

:::
