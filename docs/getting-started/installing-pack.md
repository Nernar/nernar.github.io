# Installing the Engine

Before creating or simply installing modifications, we need to prepare [tools for modifying the game](methodology#engine-pack-and-launcher). Why can't I modify the game directly? By default, Minecraft is closed-source and does not allow for gameplay modification, except perhaps for [behavior packs](https://bedrock.dev/docs/1.16.0.0/1.16.200.56/Addons).

:::warning Installing third-party applications

Before installing, do not forget to [allow installation from unknown sources](https://lumpics.ru/how-allow-installation-from-unknown-sources-on-android/) if the app is downloaded outside the store.

:::

## Let's start with the launcher

To use Inner Core, you need a launcher; it will allow you to manipulate games and modify them accordingly. You will also need any Android device; it is important to have at least a few gigabytes of RAM under your belt and the same amount of free space in storage, a weak processor will not work either.

```mdx-code-block
import NotImplemented from "@site/src/components/NotImplemented"

<NotImplemented />
```

```mdx-code-block
import GoogleDriveFile from "@site/src/components/GoogleDriveFile"

<GoogleDriveFile filename="horizon-v1.2.0-android-12.apk (31M)" href="https://drive.usercontent.google.com/download?id=14SBKQSYbMGRT-Z5_cowYVfYiWTKD605c&export=download" />
```

<details>
    <summary>What versions of the launcher exist?</summary>
<div>

Start by [determining the version](https://lumpics.ru/how-find-out-version-of-android-on-phone/) of your device — this is needed to install the correct version of the launcher. Versions for Android 11 and below allow you to directly modify the files of packs, modifications, and other things through the */games/horizon/* folder, while newer ones will require [finding the necessary folder](#finding-the-pack-folder). This is due to storage access restrictions on newer versions of Android.

| Android Version | App Link | :shield: |
| --- | --- | :-: |
| 5.0 and above | [Horizon for current versions](https://drive.usercontent.google.com/download?id=14SBKQSYbMGRT-Z5_cowYVfYiWTKD605c&export=download) | [:heavy_check_mark:](https://www.virustotal.com/gui/file/044c4bee6df67da9b76854f64dbc2bc0abf7081005fcadd3daa33bd57673b3d2) |
| 5.0 — 11 | [Horizon for Android 11](https://drive.usercontent.google.com/download?id=1-OxSOrCko1XF2eeKUCx0BVfcuagOIvrw&export=download) | [:heavy_check_mark:](https://www.virustotal.com/gui/file/64332e355a8f3d5cd514e6fef8e9917399be0e4a89eaa6848a3e33fa6b4e992e) |
| 4.2 — 10 | [Horizon for emulators and Huawei](https://drive.usercontent.google.com/download?id=1JYR3y7rYQtfuk3SGThNK3yo2mrSMAJm-&export=download) (without Google Play services) | [:heavy_check_mark:](https://www.virustotal.com/gui/file/8a25c16d56d6b218388a9dc1f96b0731bde5d6072dfb9858449e8f50e54ec084) |
| 4.2 — 8.1 | [Inner Core — Trashbox](https://trashbox.ru/link/inner-core-android) (for weak devices, unsupported) | [:heavy_check_mark:](https://www.virustotal.com/gui/file/d20051db816994d020a0bc81bb692401f432b15e2256e5447921cc6da9111830) |

Unfortunately, the launcher was recently removed from [Google Play](https://play.google.com/store/apps/details?id=com.zheka.horizon) because the developer was unable to update it to new versions. We do not recommend downloading it from third-party sources, as the version is outdated and will not work on Android 11 and above. If you want to check the app for viruses, compare the already downloaded SHA-256 file hash with the ones presented in the table under the shield icon.

</div>
</details>

## Downloading a new pack

Right after the first opening of the launcher, you will be prompted to install one of the available packs, where there should be three main options, choose the best one for yourself:

- Inner Core — the main version of the pack, suitable for most tasks. Developers are obliged to ensure compatibility with this version regardless of their needs, otherwise the published mod may be hidden from others by the browser moderators.
- Inner Core Test — here the pack developer can try out experimental features, communicating with the community helps debug inoperable interfaces and avoid problems on the main pack. Recently, the first two versions are identical and do not differ from each other.
- Inner Core Legacy — a slightly older version on the previous version of the game, some optimized mods can only be launched on it. For some reason it is not updated, although the code of recent versions implies using the legacy version as the main one for mods.

:::warning The pack list is empty?

Check your internet connection, if everything is fine, then in your host country, or with your communication service provider, there is a ban on using the [GitLab](https://status.gitlab.com/) site. Use a VPN to install packs, you can find a suitable one by refreshing the provided site. Check the status of GitLab, it may currently be undergoing maintenance, usually taking no more than 3 hours.

:::

Come up with a name or leave it standard, now the pack will appear in the main list. It is highlighted in gray, which means the installation is not yet complete. Select it and confirm the download, if everything is fine and the archive with the pack was unpacked, it will launch or the launcher will close. Both options are acceptable, the installation is complete, open the launcher if it closed.

### Obeying the license terms

Make sure you have the [game downloaded](https://play.google.com/store/apps/details?id=com.mojang.minecraftpe&hl=ru). The version does not matter, since the launcher launches its own and does not interact in any way with the one installed on the device (it even uses different folders for settings and worlds). At the time of development, you can [use a stub](https://github.com/Nernar/Minecraft-Stub/releases/latest), this automatically implies that the game has already been purchased and there is simply no need to install it.

## What is here and how to use it

The interface is provided by the launcher and customized, or changed, by the pack itself. A huge *Play* button in the center of the screen will launch the game accordingly, loading the installed mods in the selected modpack. In addition, we are presented with three main tabs on the right side of the screen, providing access to main features:

1. Native Mods — modifications created at the level of the game itself. This is a built-in feature of Horizon that allows you to work directly with the game core, and not from individual engine mods. It contains support for native game code and modifying its resources. For Inner Core, the need for this mostly falls away, as engine mods can freely access the native code.

2. Mod Manager — a built-in manager for installing mods and modpacks, as well as managing them, anyone can freely upload their projects to it for publication. The manager itself contains several different tabs for installing and managing installed projects:

    1. Download Mods — downloading mods from the built-in browser, the main engine resource for obtaining new mods. Find something you need, filter modifications by new ones, and simply download random ones. Do not forget also that there are several types of marks:

        - <span style={{color: "green"}}>Adapted</span> — the mod was updated from [the times of the outdated version](#outdated-version-of-inner-core) to support Horizon, which means it works at least on the legacy version of Inner Core in Horizon. It can also mean that the mod is created to work on the client side (like minimaps and the like).
        - <span style={{color: "blue"}}>Has Multiplayer</span> — an ideal candidate for installation in the latest versions, most likely everything works stably and the developers took care of it.

    2. My Mods — a list of mods in the selected modpack. Here you can delete them, find out information, and perform a few more useful actions. The main part of the manager, not counting the download tab.

    3. Modpacks — assemblies, or modpacks, can either simply contain a separate list of mods, or combine several mods with a core creating integrations between them. Here modpacks can be managed and new ones downloaded if necessary.

    4. Updates — over time, mods in the selected modpack, or the entire modpack, are updated by the developers of these projects. In this case, a counter of available updates will appear on the tab when you open the mod manager after the next launch.

3. Settings and Links — experimental settings (under no circumstances suggest users change them from your mods), application information and a list of main sources of inspiration for creating projects.

## Finding the pack folder

To start developing, you need to find the folder containing the engine and the game itself, where the installed mods and modpacks, including all resources and scripts, are also located. Are you just installing mods from the browser? You might probably need logs to send errors to developers if any arise.

### Installing a File Manager

Start by installing an explorer, most operations cannot be performed in the built-in file manager. Choose the one that seems more convenient to you — we will create and unpack archives, access to the *Android/data* folder is important, a built-in text editor will not be superfluous. I can advise [Solid Explorer](https://play.google.com/store/apps/details?id=pl.solidexplorer2&hl=ru), I personally use it and am satisfied with everything. A good option up to Android 12 would be [FX File Explorer](https://play.google.com/store/apps/details?id=nextapp.fx&hl=ru), many people like [ES File Explorer](https://es-file-explorer.ru.uptodown.com/android), again choose according to your own comfort — there will be no strong difference.

### Locating the launcher folder

It all depends on the [selected launcher version](#lets-start-with-the-launcher), if it is installed from Google Play or for an emulator — it is legacy, otherwise — standard. The instructions differ only for finding the main launcher folder, its content remains identical in any of the options.

Outdated versions (intended for Android 11 and below):

1. Open the file manager, find the *internal storage* tab, or *phone memory*.
2. Find the *games* folder in the file list, it contains the *horizon* subfolder.

Current version (version 1.2.0 and higher):

1. Open the file manager, find the *internal storage* tab, or *phone memory* (if the explorer prompts you to provide access to files, be sure to provide it).
2. Find the *Android* folder in the file list, it contains the *data* subfolder (if the folder is empty, the explorer is most likely unsupported, install another one).
3. The explorer will request confirmation to access this folder (if not, again it is unsupported), approve and the built-in file manager opens before us.
4. If the folder at the path *Android/data* opens, click **use this folder**, otherwise, if you cannot find the desired folder, install another explorer.
5. Find the *com.zheka.horizon* folder, inside it *files*, and inside that *horizon*.

:::info Save time for yourself and others

Don't be lazy to add the folder to bookmarks, usually this is done through the three dots on the top right or by holding the folder until the list of functions appears. Thus, access to the folder will become much easier and simpler.

:::

## File Structure

Installed packs are located in the *packs* folder relative to the launcher folder (i.e. the *horizon* folder). Let's take a look at the contents of a standard Inner Core pack (files are usually in *Inner_Core* or *Inner_Core_Test*) to better understand which folders might be needed and for what.

:::info If a developer asks to provide logs

Do not bother sorting files, just compress the entire *logs* folder into an archive and send it as a report. Find it using the launcher structure specified below. The same applies if problems were noticed during the game; logs and past errors are useful for forming a complete picture. This way creators and modders will be able to understand the cause of what happened much faster.

:::

### Horizon

Here is the list of packs itself, as well as the logs necessary to send to developers to solve problems.

| File Path | Content Purpose |
| --- | --- |
| packs/ | Installed packs respectively, they can be cloned from the launcher itself if necessary. |
| logs/ | The place where you can find the last report, or log, of the launcher (includes the engine log) *log.txt*, past versions of this log *log.txt.\<number from 0 to 6\>*, launch log of the launcher itself *core-log.txt* and the same past versions (backups). If a fatal error occurred (the application crashed), you can find out the cause from the launcher itself and the *crash.txt* files with the same backups, and also after archiving them in the application *archived-crash-\<random number\>.txt* will appear. |
| resource_packs/ | Global resource packs for all packs, available from any version of the game respectively. Resource packs specified in mods are copied and deleted from here respectively during startup. |
| behavior_packs/ | Global behavior packs, logic is similar to resource packs, except perhaps the lack of a separate folder inside the pack. |

:::tip How to install resource/behavior packs

Do not use the **resource_packs** and **behavior_packs** folders inside the launcher folder. Instead, place their folders at the path */games/com.mojang/development_resource_packs* for resource packs and */games/com.mojang/development_behavior_packs* for addons respectively. Otherwise the files will simply be deleted.

:::

### Inner Core

The folders of all versions of such packs, i.e. *Inner Core*, *Inner Core Test*/*Legacy*, are usually identical to each other. Only the files inside may differ, the main structure remains the same.

| File Path | Content Purpose |
| --- | --- |
| modpacks/ | The contents of assemblies, or modpacks, containing the main *mods* folder, various configurations and their own packs, both resources and behavior. The level of content customization is very high and will be repeatedly considered. |
| innercore/ | The main modpack having a slightly modified structure due to the lack of configuration capability. It also stores settings and *inner-core.log*, containing the last report, or log, of the engine itself. Usually slightly smaller than the main launcher logs, its use is not recommended. |
| innercore/mods/ | This is where mods are usually installed by default. You can unpack any downloaded mod archive into this folder and it will show up in the game. |
| worlds/ | Similar to the game's worlds folder, the engine uses its own list of worlds, in no way transferred between packs. Serves to separate folders from the main game and modpacks. |
| assets/ | Files once located inside the game itself of the presented version. Work like built-in device resources, with the only difference being that their location is in the internal storage. Never edit the contents of this folder directly! |

### Outdated Version of Inner Core

Do not confuse with the legacy version, this is a separate application outside of Horizon, recently removed from Google Play due to inoperability and lack of updates. In general, all content is based on the folders of the game itself and there is no special point in describing all the folders in a row. All content is located in the *com.mojang* subfolder of the same *games*.

| File Path | Content Purpose |
| --- | --- |
| mods/ | Folder with installed mods, we are not talking about modpacks at all. The structure of mods differs only in the absence of new capabilities such as support for new languages, adding resource, behavior packs, and the like. |
| innercoreWorlds/ | A separate folder with worlds, so there are no conflicts with the main game if it is installed. |
| innercore/ | Here are all the engine settings, as well as the last log *inner-core.log*. |
