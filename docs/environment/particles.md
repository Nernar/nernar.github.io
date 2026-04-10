# Particles and Emitters

Particles are two-dimensional, usually uniformly accelerated, bodies in game space. They are emitted during interactions with blocks, from blocks themselves during their operation, destruction of tools and much, much, much more. Emitters determine "sources"; those places relative to which particles will, for example, move. Emitters allow you to redefine linear accelerations of emitted particles, significantly expanding the scope of their application.

We will start with using a global emitter, consider contexts of using new emitter systems and delve into a little mathematics together with previously studied game objects.

## Global Emitter — and you don't need more

Believe me, in most cases, the global emitter will be quite enough. You will not need to create your own if particles remain purely linear or even static. Most particles in the game appear once and disappear after a short period of time. For example, redstone dust or the environment of nether biomes. The lack of conditions for their existence allows achieving simultaneous display of a large number of particles without lag.

First of all, it is important to understand that particles like other renders remain purely client-side. So our task as modders is to ensure either sending packets for their display or using client events for this purpose. Before considering examples, let's determine the use of a global emitter.

```js
Particles.addParticle(<numeric_particle_identifier>, <x>, <y>, <z>, <x_acceleration>, <y_acceleration>, <z_acceleration>, <particle_variation>);
Particles.addFarParticle(<numeric_particle_identifier>, <x>, <y>, <z>, <x_acceleration>, <y_acceleration>, <z_acceleration>, <particle_variation>);
```

That is, all particle emission boils down to specifying an identifier, starting point and linear acceleration. Variation in some cases determines the size of the particle, in some, for example, whether the particle is inverted. For notes above a jukebox, variation determines its color, these are in-game particles. Some particles have their own acceleration in addition to what we can specify here. For example, fire particles move and change size independently of input acceleration, this is again highly specific to certain types. Try experimenting with them in the game yourself.

We have repeatedly used the first function in past examples. The second one is a complete copy of the first, with the slight exception that a blur shader is additionally applied to the second.

## Acceleration Patterns

Individual particles by themselves are quite insignificant, a player may even find it difficult to notice them. Usually a whole bunch of particles are involved to indicate the operation of something. We will use the World of Magical Art code to define some basic shapes that can be created using particles:

<Tabs lazy>
<TabItem value="explode" label="Explosion">

```js
const effectExplode = function(type, x, y, z, power, count) {
    count ? null : count = 25;
    power ? null : power = 0.3;\n
    for (let i = 0; i < count; i++) {
        Particles.addParticle(type, x + 0.5, y + 0.5, z + 0.5, (Math.random() - 0.5) * power, (Math.random() - 0.5) * power, (Math.random() - 0.5) * power, 0);
    }
};
```

</TabItem>
<TabItem value="round" label="Circle">

```js
const effectRound = function(type, x, y, z, diameter, velX, velY, velZ) {
    velX ? null : velX = 0;
    velY ? null : velY = 0;
    velZ ? null : velZ = 0;\n
    diameter /= 2;\n
    for (let i = 0, j = 2 * (Math.PI * diameter); i < j; i += 0.1) {
        Particles.addParticle(type, x + 0.5 + Math.sin(i) * diameter, y, z + 0.5 + Math.cos(i) * diameter, velX, velY, velZ, 0);
    }
};
```

</TabItem>
<TabItem value="line" label="Line">

```js
const effectLine = function(type, x1, y1, z1, x2, y2, z2, step, velX, velY, velZ) {
    velX ? null : velX = 0;
    velY ? null : velY = 0;
    velZ ? null : velZ = 0;
    step ? null : step = 0.1;\n
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    let zDistance = z2 - z1;
    let distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance + zDistance * zDistance);
    xDistance /= distance;
    yDistance /= distance;
    zDistance /= distance;\n
    for (let i = 0; i < distance; i += step) {
        Particles.addParticle(type, x1 + xDistance * i, y1 + yDistance * i, z1 + zDistance * i, velX, velY, velZ, 0);
    }
};
```

</TabItem>
<TabItem value="spiral" label="Spiral">

```js
const effectSpiral = function(type, x, y, z, diameter, velX, velY, velZ) {
    velX ? null : velX = 0;
    velY ? null : velY = 0;
    velZ ? null : velZ = 0;\n
    diameter /= 2;\n
    for (let i = 0, j = Math.PI * (Math.PI * diameter); i < j; i += 0.1) {
        Particles.addParticle(type, x + 0.5 + Math.sin(i) * diameter, y + 0.1, z + 0.5 + Math.cos(i) * diameter, velX, velY, velZ, 0);
        diameter -= 0.01;
    }
};
```

</TabItem>
<TabItem value="highSpiral" label="High Spiral">

```js
const effectHighSpiral = function(type, x, y, z, diameter, height, velX, velY, velZ) {
    velX ? null : velX = 0;
    velY ? null : velY = 0;
    velZ ? null : velZ = 0;\n
    diameter /= 2;\n
    for (let i = 0, j = height * 2; i < j; i += 0.05) {
        Particles.addParticle(type, x + 0.5 + Math.sin(i) * diameter, y + (i / 2), z + 0.5 + Math.cos(i) * diameter, velX, velY, velZ, 0);
    }
};
```

</TabItem>
<TabItem value="ellipse" label="Ellipse">

```js
const effectEllipse = function(type, x, y, z, xDiameter, zDiameter, step, velX, velY, velZ) {
    velX ? null : velX = 0;
    velY ? null : velY = 0;
    velZ ? null : velZ = 0;\n
    xDiameter /= 2;
    zDiameter /= 2;\n
    for (let i = 0, j = Math.PI * (Math.pow(xDiameter + zDiameter, 2)); i < j; i += 0.05) {
        Particles.addParticle(type, 0, x + 0.5 + Math.sin(i) * xDiameter, y + 0.1, z + 0.5 + Math.cos(i) * zDiameter, velX, velY, velZ, 0);
    }
};
```

</TabItem>
</Tabs>

Most mods interact with particles one way or another, a few more similar examples can be found, for example, in Ancient Wonders. A bit more geometry is used there, allowing you to finely tune the behavior of particles. For now, we will stop only at using the options above.

## Attaching to Objects

```mdx-code-block
import NotImplemented from "@site/src/components/NotImplemented"

<NotImplemented />
```
