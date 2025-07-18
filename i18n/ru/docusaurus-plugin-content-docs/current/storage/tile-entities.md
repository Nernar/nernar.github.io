# Тайлы

Один из основных элементов взамодействия с контейнерами это тайлы. Технология [TileEntity](/api/interface/TileEntity) позволяет связать контейнер с блоками, добавив к нему интерфейс и обновляемый функционал. Это несколько отличается от того, что обычно называют блок-энтити, однако их возможности весьма схожи.

## Принципы применения

Тайлы объединяют в себе возможности игровых и обновляемых объектов, добавляя эксклюзивный функционал для блоков.

### Сервер

Занимается логической обработкой механизма, большинство событий согласуются с сервером, прежде чем что-либо будет выполнено.

```mdx-code-block
import NotImplemented from "@site/src/components/NotImplemented"

<NotImplemented />
```

### Клиент

Для обработки интерфейсов, отрисовки различных партиклей, или любой чисто клиентской части, задействуются клиентские событие, которые, также как и серверные, вызываются для каждого загруженного тайла.

```mdx-code-block
import NotImplemented from "@site/src/components/NotImplemented"

<NotImplemented />
```

## События

Если определенный блок зарегистрирован как тайл, большинство стандартных событий блока обрабатываются тайлом так, что для нас частично или полностью отпадает необходимость использования калбеков.

```mdx-code-block
import NotImplemented from "@site/src/components/NotImplemented"

<NotImplemented />
```

### Привязка интерфейсов

По умолчанию, любой тайл вызывает интерфейс, если его имя было возвращено функцией [getScreenName](/api/namespace/TileEntity#getScreenName) и он есть у клиента в методе [getScreenByName](/api/namespace/TileEntity#getScreenByName) прототипа.

```mdx-code-block
import NotImplemented from "@site/src/components/NotImplemented"

<NotImplemented />
```

## Хранилища

Тайлы привязаны к личному контейнеру, который задействуется как для интерфейса, так и для возможного хранения данных.

```mdx-code-block
import NotImplemented from "@site/src/components/NotImplemented"

<NotImplemented />
```

## Расширение прототипа

В первую очередь тайлы состоят из прототипов, события которых могут вызываться из других модов и библиотек.

```mdx-code-block
import NotImplemented from "@site/src/components/NotImplemented"

<NotImplemented />
```
