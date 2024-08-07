# Поддерживаемые среды

Среда позволяет упростить разработку проектов, предоставляя автозаполнение, проверку на ошибки, компиляцию низкоуровневых языков и целую кучу возможностей. Писать код в среде намного удобнее, чем использовать блокнот, хотя впрочем выбирать только вам.

## Устанавливаем среду

### Visual Studio Code

Отличным вариантом для начала и знакомства со средами является [Visual Studio Code](https://code.visualstudio.com/), его выбирают большинство мододелов и используют на протяжении всей жизни модификации. Из коробки нам предоставляются многие языки, улучшаемые различными расширениями для анализа кода, автозаполнения и просто комфортного использования.

<!-- TODO: Изображение предполагаемой среды. -->

Начинаете со скриптов? Поздравляю, установка этой среды уже предоставляет все необходимое. Хотите языки посложнее, тогда дерзайте, [установите несколько расширений](https://code.visualstudio.com/docs/editor/extension-marketplace):

- [Extension Pack for Java](vscode:extension/vscjava.vscode-java-pack) для работы с Java
- [C/C++ Extension Pack](vscode:extension/ms-vscode.cpptools-extension-pack) для работы с C/C++

### IntelliJ IDEA

Качественной альтернативой может послужить [IntelliJ IDEA](https://www.jetbrains.com/ru-ru/idea/), она также содержит все необходимые инструменты для работы с кодом. Важно помнить, что это проприетарный продукт. Дополнительно может пригодиться [CLion](https://www.jetbrains.com/ru-ru/clion/) от разработчиков IntelliJ, на тот случай если нужен C/C++.

<!-- TODO: Изображение предполагаемой среды. -->

### Spck Code Editor

Будете писать код на ходу или просто на мобильном устройстве? Тоже есть несколько вариантов, наиболее оптимальным из которых будет [Spck Code Editor](https://play.google.com/store/apps/details?id=io.spck&hl=ru). Можно получить автозаполнение для скриптов, а в остальных языках будет подсвечен синтаксис. Этого достаточно для создания нового контента, поверьте.

<!-- TODO: Изображение предполагаемой среды. -->

Подготовили еще [немного полезной информации](https://telegra.ph/Spck-Editor-i-Inner-Core-04-08), вдруг появятся трудности с использованием.

## Inner Core Mod Toolchain

Прежде всего, для разработки на TypeScript нам потребуется TypeScript Compiler (tsc), для компиляции Java нужен Java Development Kit (JDK) или хотя бы Eclipse compiler for Java (ECJ), для сборки C/C++ необходим GNU Compiler Collection (GCC), а просто для отправки кода на устройство с компьютера Android Debug Bridge (ADB). Нет, нужен только [Inner Core Mod Toolchain](https://github.com/zheka2304/innercore-mod-toolchain/blob/master/README-ru.md), все остальное будет установлено когда понадобится или используется автоматически.

<!-- TODO: Изображение предполагаемой среды. -->

Тулчейн служит помощником в сборке наших с вами проектов, предлагая пользователю потратить минимум времени на настройку рабочего пространства и отвести оставшееся время на код.

## Дополнительные приложения

Помимо основной среды нужно производить манипуляции с файлами, это и текстуры, и структуры, и прочие необходимые для вашего проекта файла. Вот небольшой список полезных приложений, ведь ими пользуемся и мы, создатели документации, а главное на всех типах устройств:

| Предназначение | Компьютер | Мобильное устройство |
| --- | --- | --- |
| Управление файлами | Любой встроенный проводник | [Установка файлового менеджера](installing-pack#установка-файлового-менеджера) |
| Создание текстур | [Adobe Photoshop (Windows)](https://www.adobe.com/ru/products/photoshop.html) <br/> [GNU Image Manipulation Program](https://www.gimp.org/) | [Pixly](https://play.google.com/store/apps/details?id=com.meltinglogic.pixly&hl=ru) |
| Добавление моделей | [Blockbench](https://www.blockbench.net/) | [Blockbench (браузерный)](https://web.blockbench.net/) |
| Редактирование данных | [NBT Studio](https://github.com/tryashtar/nbt-studio) | [Blocktopograph](https://github.com/oO0oO0oO0o0o00/blocktopograph) |
