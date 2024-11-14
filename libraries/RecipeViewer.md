# Recipe Viewer

Recipe Viewer — a mod-library for Inner Core (Minecraft BE 1.11.4 and 1.16.201) that allows you to view all kinds of recipes. Latest up-to-date version of library is available for download in [mods browser](https://icmods.mineprogramming.org/mod?id=455).

## Usage

* Tap the R button on the inventory screen to open main window.
* Tapping items or liquids will display that recipe while long tapping shows what recipes it is used in.
* Tapping back button will back to previous page while long tapping will close recipe window.

### Introduction Videos

[![Basic usage](https://i.ytimg.com/vi/Cajagp_BZyU/mqdefault.jpg)](http://www.youtube.com/watch?v=Cajagp_BZyU)
[![New features](https://i.ytimg.com/vi/XXLsaUkFfUE/mqdefault.jpg)](http://www.youtube.com/watch?v=XXLsaUkFfUE)

## How to add Recipe Type

1. Place [RecipeViewer.d.ts](https://github.com/NikuJagajaga/RecipeViewer/blob/main/RecipeViewer.d.ts) into *\<your_mod_directory\>/declarations*
2. Prepare a function that will return all your recipes: `() => RecipePattern[]`
3. Add the following callback at the end of your mod:

    ```ts
    ModAPI.addAPICallback("RecipeViewer", (api: RecipeViewerAPI) => {
        // all subsequent code should be written here
    });
    ```

4. Declare a class for your recipe type:

    ```ts
    class YourRecipeType extends api.RecipeType {
        getAllList(): RecipePattern[] {
            return PreparedFunc();
        }
    }
    ```

5. Create instance:

    ```ts
    const YourRecipe = new YourRecipeType("Your Recipe", BlockID.block, {
        params: {},
        drawing: [],
        elements: {

            // "input" + index starts from zero -> InputSlot
            input0: { x: 0, y: 0, size: 100 },
            input1: { x: 0, y: 0, size: 100 },
            input2: { x: 0, y: 0, size: 100 },

            // "output" + index starts from zero -> OutputSlot
            output0: { x: 0, y: 0, size: 100 },
            output1: { x: 0, y: 0, size: 100 },
            output2: { x: 0, y: 0, size: 100 },

            // "inputLiq" + index starts from zero -> InputTank
            inputLiq0: { x: 0, y: 0, width: 50, height: 200 },
            inputLiq1: { x: 0, y: 0, width: 50, height: 200 },
            inputLiq2: { x: 0, y: 0, width: 50, height: 200 },

            // "outputLiq" + index starts from zero -> OutputTank
            outputLiq0: { x: 0, y: 0, width: 50, height: 200 },
            outputLiq1: { x: 0, y: 0, width: 50, height: 200 },
            outputLiq2: { x: 0, y: 0, width: 50, height: 200 }

        }
    });
    ```

6. For recipes that use liquids, set the liquid limit:

    ```ts
    YourRecipe.setTankLimit(8);
    ```

7. Register a class in the RecipeTypeRegistry:

    ```ts
    RecipeTypeRegistry.register("your_key", YourRecipe);
    ```

8. If you cannot get all the recipes, you can use the following method:

    ```ts
    class YourRecipeType extends api.RecipeType {
        getAllList(): RecipePattern[] {
            return [];
        }
        getList(id: number, data: number, isUsage: boolean): RecipePattern[] {
            return PreparedFunc(id, data, isUsage);
        }
    }
    ```

9. It can also be written as follows:

    ```ts
    class YourRecipeType extends api.RecipeType {
        constructor() {
            super("Your Recipe", BlockID.your_block, {
                params: {},
                drawing: [],
                elements: {}
            });
            this.setTankLimit(8);
        }
        getAllList(): RecipePattern[] {
            return PreparedFunc();
        }
    }

    RecipeTypeRegistry.register("your_key", new YourRecipeType());
    ```

    ```ts
    class YourRecipeType extends api.RecipeType {
        constructor(name: string) {
            super(name, BlockID.your_block, {
                params: {},
                drawing: [],
                elements: {}
            });
            this.setTankLimit(8);
        }
        getAllList(): RecipePattern[] {
            return PreparedFunc();
        }
    }

    RecipeTypeRegistry.register("your_key1", new YourRecipeType("Your Recipe 1"));
    RecipeTypeRegistry.register("your_key2", new YourRecipeType("Your Recipe 2"));
    ```
