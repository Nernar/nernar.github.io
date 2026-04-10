# Where, what and who

This principle is how most of the events we are going to learn about work. Let's start with what is generally understood as an event? In addition to the obvious in-game events, events can depend on other mods, be called randomly or with a certain periodicity, and even come from the server side. We will consider each of these types, but not immediately, and not even in this chapter, but only when they are really needed.

## What are the events

In-game events are processed by both the server (the world host, the player themselves in a single-player game) and clients (players connected to the server, the server usually also creates a client for itself). To begin with, let's briefly look at the different types of events and only then create each of them. If some part of the terminology remains unclear, just know that we will definitely touch on them in the future.

### Construction and destruction

These are the main events for blocks and tiles. With their help we can replace drops falling from blocks, destroy tools as a result, develop skills, track block updates and more.

### World interactions

This includes the use of items as well as interaction with blocks, tiles and entities. This includes using a fishing rod, eating something, throwing snowballs, opening containers, an arrow hitting a block or an entity, and so on.

### Entity and player

Entities bring their own events, starting from their addition to the world, taking damage, picking up items, experience changes in the case of the player and their subsequent despawn or death.

### Dimensions and world

Including moving between dimensions, explosions, using redstone, generating new chunks, dropping items from a dispenser and other events concerning the world and its environment.

### Interface

Changing windows with opening and closing, opening containers, moving items between slots, selecting slots themselves, crafting, changing item icons and similar.

### Server and internal

For detecting new players joining, reading and writing saves, device keystrokes, exiting and selecting a world, commands, loading events, player and server ticks, and much more.

### Custom

This can include both events that you implement yourself, and events that implement integrations with other mods, as well as regular and native libraries.

## Event principles

Events are called as a result of any actions of the game or mods.

1. Where: usually the coordinates of the place where the event occurred.
2. What: subjects of interaction, like the block that was touched and the item that was used.
3. Who: objects that act and on whom; the latter applies, for example, to entity attacks.

:::note And the order of their work

Events can occur regardless of whether any mods are loaded or not. And it doesn't matter if an event handler is registered, the event will be called.

:::
