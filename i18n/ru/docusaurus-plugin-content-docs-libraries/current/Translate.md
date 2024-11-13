# Translate

Translate — библиотека, позволяющая загружать переводы из JSON файла. Последнюю версию библиотеки можно загрузить в [официальном репозитории](https://github.com/SDesya74/Libraries/blob/master/Translate/Translate.js).

## Использование

Для начала работы импортируйте библиотеку *Translate.js* или *Translate.min.js*:

```js
IMPORT("Translate");
```

### Загрузка переводов

:::note Разделите огромный файл с переводами

Необязательно использовать 1 файл для всех переводов, можно загружать множество файлов одновременно.

:::

```js
Translate("assets/translations.json", true);
```

### Перевод отдельных строк

Только с **английского** на другие языки, с других не тестировалось.

```js
Translate("Test")
```

## Пример из файла (*translations.json*)

```jsonc
// assets/translations.json
{
    "Item": { // Default
        "en": "Item", // English
        "ru": "Предмет", // Русский
        "nl": "Item", // Nederlands
        "de": "Element", // Deutsch
        "es": "Elemento", // Espanol
        "fr": "Article", // Français
        "it": "Elemento", // Italiano
        "pt": "Item", // Português
        "ja": "アイテム", // Japanese 
        "ko": "항목", // Korean
        "zh": "项目"  // Chinese
    },
    // . . .
}
```
