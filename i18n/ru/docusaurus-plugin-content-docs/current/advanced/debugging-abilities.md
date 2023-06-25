# TODO

Не использовать не по назначению!

## Расширение списка команд

    1. Издание для учебных заведений, патчинг методов и замена символов:
    
        1. Перезапишите `AppPlatform::isEduMode() const` на 1, что активирует учебный режим (не рекомендуется, если вы не знаете что делаете).

        2. Добавьте к методу `ServerCommands::setupStandardServer(Minecraft&, std::basic_string const&, std::basic_string const&, PermissionsFile*)`:

            ```cpp
            // Не забудьте получить LevelData и CommandRegistry!
            if (LevelData::isEducationEditionLevel(LevelData&) == 0) {
                AbilityCommand::setup(CommandRegistry&);
                ImmutableWorldCommand::setup(CommandRegistry&);
                AbilityCommand::setup(CommandRegistry&);
                CodeBuilderCommand::setup(CommandRegistry&);
                GetChunkDataCommand::setup(CommandRegistry&);
                GetChunksCommand::setup(CommandRegistry&);
                GetSpawnPointCommand::setup(CommandRegistry&);
                GlobalPauseCommand::setup(CommandRegistry&);
                ImmutableWorldCommand::setup(CommandRegistry&);
                TakePictureCommand::setup(CommandRegistry&);
                WorldBuilderCommand::setup(CommandRegistry&);
            }
            ```
        
        3. Не имеющие смысла команды, если нет активации входа в учебное издание; дополните `VanillaGameModuleClient::setupStandardCommands(CommandRegistry&)` следующего вида:
        
            ```cpp
            if (AppPlatform::isEduMode() == 0) {
                if (EducationOptions::isCodeBuilderEnabled() == 0) {
                    CodeCommand::setup(CommandRegistry&);
                }
                ClassRoomModeCommand::setup(CommandRegistry&);
            }
            ```
    
    2. Недоступные команды по умолчанию (в разработке или отладочные):
    
        1. Клиенсткие для патчинга `ClientCommands::setupStandard(MinecraftCommands&, IMinecraftGame&, mce::TextureGroup&, FileArchiver&, bool, ActiveDirectoryIdentity const*)`:

            ```cpp
            GetDurabilityCommand::setup(CommandRegistry&);
            MixerInteractiveCommand::setup(CommandRegistry&);
            ```
        
        2. Серверные для патчинга `ServerCommands::setupStandardServer(Minecraft&, std::basic_string const&, std::basic_string const&, PermissionsFile*)`:

            ```cpp
            BossbarCommand::setup(CommandRegistry&); // не реализовано практически ничего
            EnchantCommand::setup(CommandRegistry&);
            EquipCommand::setup(CommandRegistry&);
            ```
