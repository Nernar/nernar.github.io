# Частицы и излучатели

Частицами называют двухмерные, обычно равноускоренные, тела в игровом пространстве. Они испускаются при взаимодействиях с блоками, от самих блоков во время их работы, разрушения инструментов и прочего, прочего, прочего. Излучатели определяют "источники"; те места, относительно которых частицы будут, например, перемещаться. Излучатели позволяют переопределять линейные ускорения испускаемых частиц, значительно расширяя сферы их применения.

Мы начнем с использования глобального излучателя, рассмотрим контексты использования новых систем излучателей и углубимся в небольшое количество математики совместно с ранее изученными игровыми объектами.

## Глобальный излучатель — а большего и не нужно

Поверьте, в большинстве случаев, глобального излучателя будет вполне достаточно. Вам не потребуется создавать свои, если частицы остаются сугубо линейными или и вовсе статичными. Большинство частиц в игре появляются единожды и исчезают через небольшой промежуток времени. Например, пылинки красного камня или окружение адских биомов. Отсутствие условий их существования позволяет добиться единовременного отображения большого количества частиц без провисаний.

В первую очередь, важно понимать, что частицы как и прочие рендеры остаются сугубо клиентскими. Так что наша задача как моддеров обеспечить либо передачу пакетов для их отображения, либо использовать клиентские события для этой цели. Прежде чем рассмотреть примеры, определимся с использованием глобального излучателя.

```js
Particles.addParticle(<числовой идентификатор партикля>, <x>, <y>, <z>, <ускорение по x>, <ускорение по y>, <ускорение по x>, <вариация партикля>);
Particles.addFarParticle(<числовой идентификатор партикля>, <x>, <y>, <z>, <ускорение по x>, <ускорение по y>, <ускорение по x>, <вариация партикля>);
```

То есть все излучение частиц сводится к указанию идентификатора, начальной точки и линейного ускорения. Вариация в некоторых случаях определяет размер частицы, в некоторых, например, перевернута ли частица. Для нот над проигрывателем вариация определяет ее цвет, это внутреигровые партикли. Некоторые частицы имеют собственное ускорение помимо того, что мы можем указать здесь. Например, частички огня перемещаются и меняют размер независимо от входного ускорения, это опять же весьма специфично для определенных типов. Попробуйте сами поэкспериментировать с ними в игре.

Мы неоднократно задействовали первую функцию в прошлых примерах. Вторая же является полной копией первой, за немногим исключением того, что ко второй дополнительно накладывается шейдер размытия.

## Паттерны ускорения

Отдельные частицы сами по себе весьма незначительны, игроку даже может быть сложно заметить их. Обычно для обозначения работы чего-либо задействуется целая куча партиклей. Мы воспользуемся кодом World of Magical Art для определения нескольких базовых форм, которые могут быть созданы с помощью частиц:

<Tabs lazy>
<TabItem value="explode" label="Взрыв">

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
<TabItem value="round" label="Окружность">

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
<TabItem value="line" label="Линия">

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
<TabItem value="spiral" label="Спираль">

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
<TabItem value="highSpiral" label="Высокая спираль">

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
<TabItem value="ellipse" label="Эллипс">

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

Большинство модов так или иначе взаимодействуют с частицами, еще несколько подобных примеров можно найти, к примеру, в Ancient Wonders. Там задействуется чуть больше геометрии, позволяя более тонко настроить поведение частиц. Пока мы остановимся лишь на использовании вариантов выше.
