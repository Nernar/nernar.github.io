# Extending components

In addition to standard elements and background components, new ones can be created based on a special component. Let's look at the components and events that can be handled using them.

## Background layout

Let's not dwell on theory and immediately move on to the practical part. Suppose we have a small image. There is a task to stretch it across the entire screen without stretching the texture itself. How can this be done?

Surely, those who are familiar with the canvas and drawing on it will want to draw the texture several times in several directions:

```js
const bitmap = UI.TextureSource.get("icon_menu_innercore")
const canvas = new android.graphics.Canvas();
const paint = new android.graphics.Paint();
const source = android.graphics.Bitmap.createBitmap(
    Packages.com.zhekasmirnov.innercore.utils.UIUtils.screenWidth,
    Packages.com.zhekasmirnov.innercore.utils.UIUtils.screenHeight,
    android.graphics.Bitmap.Config.ARGB_8888
);
canvas.setBitmap(source);
const rx = source.getWidth() / bitmap.getWidth();
const ry = source.getHeight() / bitmap.getHeight();
for (let x = 0; x < rx; x++) {
    for (let y = 0; y < ry; y++) {
        canvas.drawBitmap(bitmap, bitmap.getWidth() * x, bitmap.getHeight() * y, paint);
    }
}
UI.TextureSource.put("innercore_background", source);
```

You are brilliant. But this is not a serious approach, the image will be loaded into memory, and instead of an economical small texture, you will get a lagging hat. Maybe it would be worth saving the texture to load it in the usual way? It makes no difference.

This is where extending components comes to the rescue. Let's create a component with its own `bitmap` property, defining the texture, which will be repeated due to the shader, significantly speeding up the processing:

```js
{
    type: "custom",
    bitmap: "icon_menu_innercore",
    onDraw: function(canvas, scale) {
        const bitmap = UI.TextureSource.get(this.bitmap);
        const scaled = android.graphics.Bitmap.createScaledBitmap(
            bitmap,
            bitmap.getWidth() * scale,
            bitmap.getHeight() * scale,
            false
        );
        const paint = new android.graphics.Paint();
        paint.setShader(
            new android.graphics.BitmapShader(
                scaled,
                android.graphics.Shader.TileMode.REPEAT,
                android.graphics.Shader.TileMode.REPEAT
            )
        );
        canvas.drawRect(0, 0, canvas.getWidth(), canvas.getHeight(), paint);
        scaled.recycle();
    }
}
```

I don't think it's worth discussing the impact this approach will have on performance. Direct drawing on this interface sheet is the best option in all senses. In addition to the canvas, the `scale` parameter here determines the scale of a unit relative to a pixel.

This is the most common component description object. Only the `onDraw(canvas, scale)` method is provided for the background layout, consider the [life cycle](../drawings#life-cycle) for details. Otherwise, basic interaction with the canvas is described in [processing resources](../../storage/processing-resources).

## Elements

Starting with the implementation of your own element, it is important to study the [common properties](../elements#common-properties) for each of them. In addition to properties, each element adheres to a common [life cycle](../elements#life-cycle). Having considered the events, you can also study the description object:

```js
{
    type: "custom",
    // creating a component based on the element description object,
    // here you need to set the necessary brushes and properties
    onSetup: function(component) {
        component.setSize(1000, UI.getScreenHeight());
    },
    // the place where the magic happens, the canvas is at your disposal
    onDraw: function(component, canvas, scale) {
        ...
    },
    // called when an element is attached using a container,
    // usually when opening a window or when adding an element
    // (when the window has already been opened)
    onContainerInit: function(component, container, elementName) {
        ...
    },
    // binding can be changed directly from the component, but
    // usually takes a new value by a change in the container;
    // here you can recalculate values, change sizes, etc.
    onBindingUpdated: function(component, key, value) {
        ...
    },
    // called whenever interaction with the
    // component is stopped, also present in onTouchEvent
    onTouchReleased: function(component) {
        ...
    },
    // every window closing is accompanied by a reset of the components state,
    // usually selection is forgotten here
    onReset: function(component) {
        ...
    },
    // the end of the component's life, here you need
    // to reset or recycle the resources used
    onRelease: function(component) {
        ...
    }
}
```

Don't worry about the number of events, you can gradually replenish the object for each task by adding properties from here. The only thing an element really needs to do is to set its own size like in the `onSetup(component)` method of the given description object.

As an example, it can be anything here, from a solid fill to dynamically drawn components and animations. We will create a dynamic piston "leg". First, you need to define the element itself and the brushes that will be used to draw the piston:

```js
{
    type: "custom",
    // the upper left boundary of the component is located
    // in a quarter of the screen width and in the center of the height
    x: 250, y: UI.getScreenHeight() / 2,
    z: -1, // let the component be in the background
    onSetup: function(component) {
        // one brush is enough to draw the piston line
        this.paint = new android.graphics.Paint();
        this.paint.setStyle(android.graphics.Paint.Style.STROKE);
        // white, opaque color
        this.paint.setARGB(255, 255, 255, 255);
        // half the width and a quarter of the height, counted
        // from the element's location down to the right
        component.setSize(500, UI.getScreenHeight() / 4);
    }
}
```

Now we can move on to the most interesting part, drawing. At first, drawing on the canvas may seem complicated and tedious, but in fact it is a very convenient and useful technology. Let's animate the left part of the leg, drawing a line to the right point:

```js
{
    ...
    onDraw: function(component, canvas, scale) {
        // reset the location of the right part of the leg if it is missing
        if (this.sx === undefined || this.sy === undefined) {
            this.sx = 400 * scale;
            this.sy = UI.getScreenHeight() / 8 * scale;
        }
        // a small brush, the scale can change
        this.paint.setStrokeWidth(6 * scale);
        // the rotation coefficient of the left part of the leg, a small animation
        const multiplier = Math.abs(10 * Math.sin((
            System.currentTimeMillis() % 1000) / 1000
        )) / 2;
        // let's mark the points of the piston leg with squares
        const rectStart = new android.graphics.Rect(
            (100 * multiplier - 8) * scale,
            (100 * multiplier - 8) * scale,
            (100 * multiplier + 8) * scale,
            (100 * multiplier + 8) * scale
        );
        const rectEnd = new android.graphics.Rect(
            this.sx - 8 * scale, this.sy - 8 * scale,
            this.sx + 8 * scale, this.sy + 8 * scale
        );
        // the path by which we will draw the piston leg
        const path = new android.graphics.Path();
        // let's add the line itself to the right part of the leg
        path.moveTo(100 * multiplier * scale, 100 * multiplier * scale);
        path.lineTo(this.sx, this.sy);
        // the path is ready, you can draw it on the canvas
        canvas.drawPath(path, this.paint);
        // let's draw the points of the piston leg with a brush for the rest
        // of the lines, we will get hollow squares around the two points
        canvas.drawRect(rectStart, this.paint);
        canvas.drawRect(rectEnd, this.paint);
        // let the animation not stop
        component.invalidate();
    }
}
```

If you figure it out, the whole code boils down to drawing three primitive shapes — square points of the piston leg stroke and the line itself between them. Sort out this mess with the help of comments, and the final touch will be changing the position of the right point of the leg and its reset after closing the window:

```js
{
    ...
    onTouchEvent: function(component, event) {
        // moving the mouse or finger over the component, let's move
        // the right point of the piston leg to a new place, and request
        // the nearest canvas update (this will be done by the window thread)
        if (event.type.name() == "MOVE") {
            this.sx = event.localX;
            this.sy = event.localY;
            component.invalidate();
            if (component.window) {
                component.window.invalidateElements(false);
            }
        }
    },
    onReset: function(component) {
        delete this.sx;
        delete this.sy;
    }
}
```

:::note What an element is capable of

Element components have many properties, such as an attached window, a container, bindings, and several more useful methods. Consider the [UIElement prototype](/api/interface/UI.IElement) for details.

:::

## Built-in implementations

As stated in the article about [elements](../elements), some of the components have similar implementations to each other. They inherit from other components, having the same properties.

### Close button

As the name implies, it closes the interface. It is absolutely no different from a [regular button](../elements#buttons), except that it does not process events from the description object, since it is already configured for its action.

```js
{
    type: "closeButton",
    ...
}
```

### Inventory slot

Unlike a [regular slot](../elements#slots), as well as a button, it does not process events, but adds and changes some standard properties. Requires opening the interface through a container.

```js
{
    type: "invSlot",
    index: 0,
    ...
}
```

Where `index` is the number of the inventory slot that will be used as the item source. A value from 0 to 35, where 0-8 are the bottom slots visible on the screen; counting for the rest goes from the top left slot.

Among other things, the background image becomes `style:inv_slot` (the `bitmap` property), by default with the same texture as a regular slot.

### Frame counter

It is a [regular text](../elements#text), updated at some interval of time. Changing the font object will not bring any effect.

```js
{
    type: "fps",
    ...
}
```

Add a time interval between measurements, measured in milliseconds, for a more accurate setting for tracking frames per second:

```js
{
    ...
    period: 500
}
```

:::danger Debug element

Do not under any circumstances use it when publishing a project in a mod browser. It is perfectly suitable for developers and during testing, but highly undesirable for an ordinary user.

:::
