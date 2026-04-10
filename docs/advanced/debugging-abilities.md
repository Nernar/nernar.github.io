# TODO

Do not misuse!

## Extending the list of commands

    1. Education Edition, method patching and symbol replacement:
    
        1. Override `AppPlatform::isEduMode() const` to 1, which activates education mode (not recommended unless you know what you are doing).

        2. Add to the method `ServerCommands::setupStandardServer(Minecraft&, std::basic_string const&, std::basic_string const&, PermissionsFile*)`:

            ```cpp
            // Don't forget to get LevelData and CommandRegistry!
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
        
        3. Commands that make no sense if there is no activation of logging into the education edition; supplement `VanillaGameModuleClient::setupStandardCommands(CommandRegistry&)` as follows:
        
            ```cpp
            if (AppPlatform::isEduMode() == 0) {
                if (EducationOptions::isCodeBuilderEnabled() == 0) {
                    CodeCommand::setup(CommandRegistry&);
                }
                ClassRoomModeCommand::setup(CommandRegistry&);
            }
            ```
    
    2. Unavailable commands by default (in development or debug):
    
        1. Client for patching `ClientCommands::setupStandard(MinecraftCommands&, IMinecraftGame&, mce::TextureGroup&, FileArchiver&, bool, ActiveDirectoryIdentity const*)`:

            ```cpp
            GetDurabilityCommand::setup(CommandRegistry&);
            MixerInteractiveCommand::setup(CommandRegistry&);
            ```
        
        2. Server for patching `ServerCommands::setupStandardServer(Minecraft&, std::basic_string const&, std::basic_string const&, PermissionsFile*)`:

            ```cpp
            BossbarCommand::setup(CommandRegistry&); // practically nothing is implemented
            EnchantCommand::setup(CommandRegistry&);
            EquipCommand::setup(CommandRegistry&);
            ```
