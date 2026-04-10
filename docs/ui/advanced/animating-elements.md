# Animating elements

Animation allows you to make game interfaces more lively and dynamic: be it the smooth appearance and disappearance of windows, the movement of individual elements, or changing their properties over time. In this article, we will look at basic approaches to creating animations, working with elements outside the main thread, and some pitfalls.

## Animation tools

To implement animations, you can use built-in Android tools (for example, `android.animation.ValueAnimator`), update events (`Updatable`), or create separate background threads (`Threading`). In this guide, we will focus on using threads, as this method provides the most control over the interface elements update process and is often used in practice (additionally, read the article about threads if you haven't already).

## Updating elements

To achieve smooth animation, you need to quickly and repeatedly change element parameters (position, size, transparency), avoiding a complete redraw of the entire window.

### Direct access to elements

Historically, element parameters were changed through direct access to the interface description object followed by calling the update function, for example:

```js
window.content.elements.element_name.x = new_value;
```

In a thread for animations, this method does not work fast enough and can lead to noticeable flickering or frame drops.

Instead, it is recommended to use `UI.Element` interface methods that allow you to manipulate the drawn element directly with native tools.

### UI.Element interface methods

First, you need to get the element object itself from the window:

```js
const elements = window.getElements();
const element = elements.get("element_identifier");
```

After that, we can apply special methods to change its state that do not require redrawing:

```js
// Changing the position of an element (works fast, ideal for movement animation)
element.setPosition(x, y);

// Setting a value for a specific element property
element.setBinding("key_name", value);

// Getting the current value of a property
const value = element.getBinding("key_name");
```

To work with the window itself, for example, to change its transparency, the `layout` object is used:

```js
// Setting window transparency (a number from 0.0 to 1.0)
window.layout.setAlpha(0.5);

// Getting the current transparency
const alpha = window.layout.getAlpha();
```

:::warning Exceptions in `setBinding`

Not all element values can be changed through `setBinding`. If some property does not respond to changes in this way, use the classic option of changing the key in the window object, but try not to do this every animation frame.

:::

## Funds spending animation

As practice, let's implement a money deduction animation: the text with the amount and the icon will appear, smoothly go down, and gradually disappear.

### Interface preparation

Let's define an object that will store the animation state, settings, and the interface itself:

```js
const animator = {
    // Constants for positioning
    MAX_HEIGHT: 270, // The path that elements will travel along the Y axis
    TEXT_X: 812, TEXT_Y: 210,
    ICON_X: 858, ICON_Y: 192,
    
    // State variables
    isRunning: false,
    queue: []
};

animator.window = new UI.Window({
    drawing: [{
        type: "background",
        color: android.graphics.Color.TRANSPARENT
    }],
    elements: {
        balanceIcon: {
            type: "image",
            x: animator.ICON_X, y: animator.ICON_Y,
            width: 40, height: 40,
            bitmap: "default_icon"
        },
        balanceText: {
            type: "text",
            x: animator.TEXT_X, y: animator.TEXT_Y,
            text: "",
            font: { size: 15, color: android.graphics.Color.LTGRAY }
        }
    }
});

// Setting up window properties
animator.window.setDynamic(true);
animator.window.setTouchable(false); // Skipping clicks through the window
animator.window.setAsGameOverlay(true); // Displaying as a game overlay
```

### Helper methods

Let's add methods to the `animator` object to encapsulate working with transparency and positions. Pay attention to the checks whether the window is open — this will protect against errors if the animation starts at an unexpected moment or the player suddenly exits to the menu.

```js
animator.setAlpha = function(alpha) {
    if (this.window.isOpened()) {
        this.window.layout.setAlpha(alpha);
    }
};

animator.getAlpha = function() {
    if (this.window.isOpened()) {
        return this.window.layout.getAlpha();
    }
    return 0;
};

animator.setHeightOffset = function(offset) {
    const elements = this.window.getElements();
    const balanceText = elements.get("balanceText");
    const balanceIcon = elements.get("balanceIcon");

    if (balanceText && balanceIcon) {
        balanceText.setPosition(this.TEXT_X, this.TEXT_Y + offset);
        balanceIcon.setPosition(this.ICON_X, this.ICON_Y + offset);
    }
};

animator.reset = function() {
    this.setAlpha(1);
    this.setHeightOffset(0);
};
```

### Animation thread logic

When writing a thread for animation, a delay (`Thread.sleep()`) is always required. For acceptable smoothness (about 60 frames per second), a delay of 16 milliseconds is enough. Smaller values (for example, 2-3 ms) can overload the device's processor and lead to unstable game performance.

```js
animator.update = function() {
    let offset = 0;
    while (true) {
        java.lang.Thread.sleep(16);
        
        const alpha = this.getAlpha();
        
        // If the animation is completed or the window was closed from outside
        if ((offset >= this.MAX_HEIGHT && alpha <= 0) || !this.window.isOpened()) {
            this.isRunning = false;
            
            // Checking the queue for new animations
            if (this.queue.length > 0) {
                this.play(this.queue.shift());
                return; // Terminating the current thread, play() will start a new one
            }
            
            this.window.close();
            return;
        }
        
        // Starting to smoothly decrease transparency when halfway through
        if (offset >= (this.MAX_HEIGHT / 2) && alpha > 0) {
            this.setAlpha(Math.max(0, alpha - 0.05));
        }
        
        // Lowering the elements down (by 5 units per frame)
        if (offset < this.MAX_HEIGHT) {
            offset += 5;
            this.setHeightOffset(offset);
        }
    }
};
```

### Starting the animation

Now let's write a public method to initialize the animation. We will save values in a queue so that with several quick calls they are played sequentially, rather than overlapping each other or breaking the thread.

```js
animator.play = function(amount) {
    if (this.isRunning) {
        this.queue.push(amount);
        return;
    }
    
    this.isRunning = true;
    this.window.content.elements.balanceText.text = "-" + amount;
    
    if (!this.window.isOpened()) {
        this.window.open();
    }
    // It is important to call reset after opening the window, otherwise elements may not be initialized
    this.reset();

    Threading.initThread("mod_animatorThread", function() {
        animator.update();
    });
};
```

Let's test our code: our animation will appear with any click in the world. If you click several times in a row, they will be played one after another.

```js
Callback.addCallback("ItemUseLocal", function() {
    animator.play(10);
});
```

## Recommendations and common mistakes

1. **Do not animate the position of the window itself**. Changing the coordinates of the entire window via `window.getLocation().set(...)` in a thread often leads to severe background flickering and slow rendering. Move the elements inside the window instead.
2. **Control threads**. Make sure that multiple threads do not start simultaneously for the same animation. In our example, this is solved by checking the `isRunning` variable and using a queue.
3. **Ensure safe termination**. The player can close the world or menu at any time while the thread is still running. Regularly checking `window.isOpened()` ensures that the code does not try to access non-existent elements, which would otherwise crash the game.
4. **Combine approaches if necessary**. There are situations when element positions are suddenly reset (for example, when resizing stretched frames). In such a case, you can combine the old and new approaches or forcefully refresh the layout via `window.forceRefresh()`.

Creating high-quality animations often requires experimenting with timings, delays, and value change steps. But the result is worth it: the interface becomes much more responsive and pleasant for the user.

## Ready-made animation examples

Although writing your own animations allows you to better understand how threads work, no one forces you to do them from scratch. You can use the [Notification library](https://github.com/ArtemKot4/libraries/tree/main/release/Notification) for easier animation creation, or [ScrutinyAPI](https://github.com/Reider745/libs/tree/main/ScrutinyAPI) for creating animations similar to researches and quests.
