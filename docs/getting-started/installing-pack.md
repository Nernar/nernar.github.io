# Installing Pack

Before creating or just installing modifications, we need to prepare the [tools for modifying the game](methodology#engine-pack-and-launcher). Why can't I modify the game directly? By default, Minecraft has closed source code and does not provide for changing the gameplay, except perhaps [behavior packs](https://bedrock.dev/docs/1.16.0.0/1.16.200.56/Addons).

:::warning Installing Third-Party Applications

Before installing, don't forget to [allow installation from unknown sources](https://lumpics.ru/how-allow-installation-from-unknown-sources-on-android/) if the application is downloaded outside the store.

:::

## Let's Start with the Launcher

To use Inner Core, you need a launcher, it will allow you to manipulate games and modify them accordingly. You will also need any Android device, it is important to have at least a few gigabytes of RAM behind you and the same amount of free storage space, a weak processor will not work either.

```mdx-code-block
import NotImplemented from "@site/src/components/NotImplemented"

<NotImplemented />
```

```mdx-code-block
import GoogleDriveFile from "@site/src/components/GoogleDriveFile"

<GoogleDriveFile filename="horizon-v1.2.0-android-12.apk (31M)" href="https://drive.usercontent.google.com/download?id=14SBKQSYbMGRT-Z5_cowYVfYiWTKD605c&export=download" />
```

<details>
    <summary>What launcher versions exist?</summary>
<div>

Start by [determining the version](https://lumpics.ru/how-find-out-version-of-android-on-phone/) of your device — this is needed to install the correct launcher version. Versions for Android 11 and below allow you to directly modify pack files, mods, and other things via the */games/horizon/* folder, while newer ones will require [finding the necessary folder](#finding-the-pack-folder). This is due to storage access restrictions on newer Android versions.

| Android Version | App Link | :shield: |
| --- | --- | :-: |
| 5.0 and higher | [Horizon for current versions](https://drive.usercontent.google.com/download?id=14SBKQSYbMGRT-Z5_cowYVfYiWTKD605c&export=download) | [:heavy_check_mark:](https://www.virustotal.com/gui/file/044c4bee6df67da9b76854f64dbc2bc0abf7081005fcadd3daa33bd57673b3d2) |
| 5.0 — 11 | [Horizon for Android 11](https://drive.usercontent.google.com/download?id=1-OxSOrCko1XF2eeKUCx0BVfcuagOIvrw&export=download) | [:heavy_check_mark:](https://www.virustotal.com/gui/file/64332e355a8f3d5cd514e6fef8e9917399be0e4a89eaa6848a3e33fa6b4e992e) |
| 4.2 — 10 | [Horizon for emulators and Huawei](https://drive.usercontent.google.com/download?id=1JYR3y7rYQtfuk3SGThNK3yo2mrSMAJm-&export=download) (without Google Play services) | [:heavy_check_mark:](https://www.virustotal.com/gui/file/8a25c16d56d6b218388a9dc1f96b0731bde5d6072dfb9858449e8f50e54ec084) |
| 4.2 — 8.1 | [Inner Core — Trashbox](https://trashbox.ru/link/inner-core-android) (for weak devices, unsupported) | [:heavy_check_mark:](https://www.virustotal.com/gui/file/d20051db816994d020a0bc81bb692401f432b15e2256e5447921cc6da9111830) |

Unfortunately, recently the launcher was removed from [Google Play](https://play.google.com/store/apps/details?id=com.zheka.horizon) because the developer could not update it to newer versions. We do not recommend downloading it from third-party sources, as the version is outdated and will not work on Android 11 and higher. If you want to check the application for viruses, compare the downloaded SHA-256 file hash with those presented in the table under the shield icon.

</div>
</details>

## Downloading a New Pack

Immediately after opening the launcher for the first time, you will be offered to install one of the available packs, in which there should be three main options, choose the best one for yourself:

- Inner Core — main pack version, suitable for most tasks. Developers are required to ensure compatibility with this version regardless of needs, otherwise the published mod may be hidden from others by browser moderators.
- Inner Core Test — here the pack developer can try out experimental features, communication with the community helps debug inoperative interfaces and avoid problems on the main pack. Recently, the first two versions are identical and do not differ from each other.
- Inner Core Legacy — a slightly older version on the previous version of the game, some optimized mods can only run on it. For some reason it is not updated, although the code of the latest versions implies the use of the legacy version as the main one for mods.

:::warning Is the pack list empty?

Check your internet connection, if everything is in order — it means that in your country of residence, or at the communication service provider, there is a ban on using the [GitLab](https://status.gitlab.com/) site. Use a VPN to install packs, you can choose a suitable one by updating the presented site. Check the status of GitLab, maintenance may be currently underway, usually taking no more than 3 hours.

:::

Come up with a name or leave it standard, now the pack will appear in the main list. It is grayed out, which means the installation is not yet complete. Select it and confirm the download, if everything is in order and the archive with the pack has been unpacked, it will start or the launcher will close. Both options are acceptable, the installation is complete, open the launcher if it closed.

### Observing License Conditions

Make sure you have [downloaded the game](https://play.google.com/store/apps/details?id=com.mojang.minecraftpe&hl=ru). The version does not matter, as the launcher runs its own and does not interact with the one installed on the device (even uses other folders for settings and worlds). At the time of development, you can [use a stub](https://github.com/Nernar/Minecraft-Stub/releases/latest), this automatically means that the game has already been purchased and there is simply no need to install it.

## What is Here and How to Use It

The interface is provided by the launcher and customized, or changed, by the pack itself. A huge *Play* button in the center of the screen will launch the game accordingly, loading the installed mods in the selected modpack. In addition, three main tabs appear before us on the right side of the screen, providing access to the main features:

1. Native Mods — modifications created at the level of the game itself. This is a built-in Horizon feature that allows working directly with the game core, rather than from separate engine mods. Contains support for native game code and changing its resources. For Inner Core, the need mostly disappears, as engine mods can freely access native.

2. Mod Manager — built-in manager for installing mods and modpacks, as well as managing them, everyone can freely upload their projects for publication. The manager itself contains several different tabs for installing and managing installed projects:

    1. Download Mods — downloading mods from the built-in browser, the main engine resource for obtaining new mods. Find something needed, filter modifications by new ones and just download random ones. Do not forget also that there are several types of tags:

        - <span style={{color: "green"}}>Adapted</span> — the mod has been updated since [legacy version times](#legacy-inner-core-version) to support Horizon, which means functionality at least on the legacy version of Inner Core in Horizon. It can also mean that the mod is created to work on the client side (like minimaps and others).
        - <span style={{color: "blue"}}>Has Multiplayer</span> — an ideal candidate for installation in the latest versions, most likely everything works stably and the developers took care of this.

    2. My Mods — list of mods in the selected modpack. Here you can delete them, find out information and do a few more useful actions. The main part of the manager, not counting the download tab.

    3. Modpacks — builds, or modpacks, can either simply contain a separate list of mods, or combine several mods with a core that creates integrations between them. Here modpacks can be managed and new ones downloaded if necessary.

    4. Updates — over time, mods in the selected modpack, or the modpack itself, are updated by the developers of these projects. In this case, an update counter will appear on the tab when you open the mod manager after the next launch.

3. Settings and Links — experimental settings (under no circumstances suggest users change them from your mods), information about the application and a list of main sources of inspiration for creating projects.

## Finding the Pack Folder

To start development, you need to find the folder with the contents of the engine and the game itself, in it are located the installed mods and modpacks, including all resources and scripts. Just installing mods from the browser? You will probably need logs to send errors to developers if any arise.

### Installing a File Manager

Start by installing a file explorer, most operations cannot be performed in the built-in file manager. Choose the one that seems more convenient to you — we will create and unpack archives, access to the *Android/data* folder is important, a built-in text editor will not be superfluous. I can recommend [Solid Explorer](https://play.google.com/store/apps/details?id=pl.solidexplorer2&hl=ru), I personally use it and am satisfied with everything. A good option up to Android 12 would be [FX File Explorer](https://play.google.com/store/apps/details?id=nextapp.fx&hl=ru), many like [ES File Explorer](https://es-file-explorer.ru.uptodown.com/android), again choose according to your own comfort — there won't be much difference.

### Determining the Launcher Folder Location

It all depends on the [selected launcher version](#lets-start-with-the-launcher), if it is installed from Google Play or for an emulator — it is legacy, otherwise — standard. Instructions differ only for finding the main launcher folder, its contents remain identical in either option.

Legacy versions (intended for Android 11 and below):

1. Open the file manager, find the *internal storage* or *phone memory* tab.
2. Find the *games* folder in the file list, it contains the *horizon* subfolder.

Current version (version 1.2.0 and higher):

1. Open the file manager, find the *internal storage* or *phone memory* tab (if the explorer offers to grant access to files, be sure to grant it).
2. Find the *Android* folder in the file list, it contains the *data* subfolder (if the folder is empty, most likely the explorer is not supported, install another one).
3. The explorer will request confirmation to access this folder (if not, it is again not supported), approve and the built-in file manager opens before us.
4. If a folder opens at *Android/data*, click **use this folder**, otherwise, if you cannot find the desired folder, install another explorer.
5. Find the *com.zheka.horizon* folder, inside it *files*, and inside that *horizon*.

:::info Save time for yourself and others

Do not be too lazy to add the folder to bookmarks, this is usually done via the three dots on the top right or by holding the folder until the list of functions appears. Thus, access to the folder will become much easier and simpler.

:::

## File Structure

Installed packs are located in the *packs* folder relative to the launcher folder (i.e. the *horizon* folder). Let's look at the contents of the standard Inner Core pack (files are usually located in *Inner_Core* or *Inner_Core_Test*) to better understand what folders and for what purpose may be needed.

:::info If a developer asks to provide logs

Do not suffer with selecting files, just compress the *logs* folder completely into an archive and send it as a report. Find it using the launcher structure indicated below. The same applies if problems were noticed during the game; logs and past errors will be useful for forming a complete picture. So creators and modders can understand the cause of what happened much faster.

:::

### Horizon

Here is the list of packs itself, as well as the logs needed to send to developers to solve problems.

| File Path | Content Purpose |
| --- | --- |
| packs/ | Installed packs respectively, they can be cloned from the launcher itself if necessary. |
| logs/ | The place where you can find the last launcher report, or log (includes the engine log) *log.txt*, past versions of this log *log.txt.\<number from 0 to 6\>*, launcher startup log *core-log.txt* and similar past versions (backups). If a fatal error occurred (the application crashed), you can find out the reason from the launcher itself and *crash.txt* files with similar backups, as well as after archiving them, *archived-crash-\<random number\>.txt* will appear in the application. |
| resource_packs/ | Global resource packs for all packs, available from any version of the game respectively. Resource packs specified in mods are copied and removed from here respectively during startup. |
| behavior_packs/ | Global behavior packs, logic is similar to resource packs, except perhaps the absence of a separate folder inside the pack. |

:::tip How to install resource/behavior packs

Do not use **resource_packs** and **behavior_packs** folders inside the launcher folder. Instead, place folders with them along the path */games/com.mojang/development_resource_packs* for resource packs and */games/com.mojang/development_behavior_packs* for addons respectively. Otherwise, the files will simply be deleted.

:::

### Inner Core

Folders of all versions of similar packs, i.e. *Inner Core*, *Inner Core Test*/*Legacy*, are usually identical to each other. Only files inside may differ, the main structure remains the same.

| File Path | Content Purpose |
| --- | --- |
| modpacks/ | Contents of builds, or modpacks, containing the main *mods* folder, various configurations and own packs, both resources and behavior. The level of content customization is very high and will be discussed repeatedly. |
| innercore/ | The main modpack, having a slightly modified structure due to the lack of configuration capability. Settings and *inner-core.log* are also stored here, containing the last report, or log, of the engine itself. Usually slightly smaller than the main launcher logs, its use is not recommended. |
| innercore/mods/ | Usually, mods are installed here by default. You can unpack any downloaded archive with a mod into this folder and it will be displayed in the game. |
| worlds/ | Like the game folder with worlds, the engine uses its own list of worlds, not transferred between packs in any way. Serves to separate folders from the main game and modpacks. |
| assets/ | Files once located inside the game itself of the presented version. Work similarly to resources built into the device, with the only difference being that the location of such is in the internal storage. Never edit the contents of this folder directly! |

### Legacy Inner Core Version

Do not confuse with the legacy version, this is a separate application outside of Horizon, not so long ago removed from Google Play due to inoperability and lack of updates. In general, all content is based on the folders of the game itself and there is no special sense to describe all folders in a row. All content lies in the *com.mojang* subfolder of the same *games*.

| File Path | Content Purpose |
| --- | --- |
| mods/ | Folder with installed mods, there is no talk of builds in principle. The structure of mods differs only in the absence of new features such as support for new languages, adding resource packs, behavior packs, and others. |
| innercoreWorlds/ | A separate folder with worlds so that there are no conflicts with the main game if it is installed. |
| innercore/ | Here are all the engine settings, as well as the last log *inner-core.log*. |
