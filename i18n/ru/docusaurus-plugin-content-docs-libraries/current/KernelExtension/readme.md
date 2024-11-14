# Kernel Extension

Kernel Extension — это мод-библиотека для лаунчера модов Inner Core, добавляющая множество нового контента для разработчиков модов, который не экспортирован самим Inner Core в API для языков Java и JavaScript. Последняя актуальная версия библиотеки доступна к загрузке в [браузере модов](https://icmods.mineprogramming.org/mod?id=831).

## Использование публичного API мода KernelExtension

Вы можете использовать API Kernel Extension двумя способами.

1. Создать `ModAPICallback` в главном коде вашего мода и использовать функционал из объекта API, предоставленного вам первым и единственным параметром функции API-калбека.

    ```js
    ModAPI.addAPICallback("KernelExtension", function(api) {
        // параметр api это неймспейс KEX в документации KEX API
    });
    ```

2. Создать `ModAPICallback` в скрипте `launcher.js` вашего мода, таким образом сделав ваш мод полностью зависимым от мода Kernel Extension, потому что теперь он не запустится до тех пор, пока мод Kernel Extension не будет загружен в вашу сборку. Позже, публикуя мод в [браузере модов](https://icmods.mineprogramming.org), вы должны будете добавить `831` в список зависимостей вашего мода.

    ```js
    // launcher.js

    ConfigureMultiplayer({
        name: "KEX-Dependent mod",
        version: "1.0",
        isClientOnly: false
    });

    ModAPI.addAPICallback("KernelExtension", function(api) {
        // проверяете, есть ли функция getKEXVersionCode в объекте API, далее вызываете её и проверяете, подходит ли версия загруженного в сборку Kernel Extension для вашего мода
        if(
            typeof api.getKEXVersionCode === "function" &&
            // в данном случае требуем версию 3.0 и выше
            api.getKEXVersionCode() >= 300
        ) {
            // запускаем мод, добавляя объект API в его скоуп
            Launch({ KEX: api });
        }
    });

    // затем, в главном коде вашего мода вы сможете использовать функционал API Kernel Extension используя переменную KEX (так же само, как в документации, поэтому этот способ очень удобен для разработчиков на TypeScript, использующих декларации KEX API)
    ```

## Для разработчиков модов на TypeScript

Если вы пишете главный код своего мода на языке TypeScript и хотите получать подсказки о членах API вместе со всей документацией к ним, вам понадобится скачать новейший файл деклараций из репозитория [innercore-development-cloud](https://github.com/DMHYT/innercore-development-cloud/tree/kex-declarations/) и переместить его в директорию для TypeScript-деклараций в проекте вашего мода.
