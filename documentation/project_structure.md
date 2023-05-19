---
title: Project Structure
---

# Project Structure and Organization 📚

## Recommended Complexity per glTF

- Max. 50 MB export size uncompressed (usually ends up ~10-20 MB compressed)  
- Max. 500k vertices (less if you target mobile VR as well)  
- Max. 4x 2k lightmaps  

You can split up scenes and prefabs into multiple glTF files, and then load those on demand (only when needed). This keeps loading performance fast and file size small. See the [AssetReference section in the Scripting docs](scripting.md#assetreference-and-addressables).

::: tip
 The scene complexity here is recommended to ensure good performance across a range of web-capable devices and bandwidths. There's no technical limitation to this beyond the capabilities of your device.  
:::

## Unity Project Structure

You can organize your assets like in any typical Unity project. If you are not familiar with Unity you may follow [this guide](https://learn.unity.com/tutorial/project-organization-2019-3#5f68a346edbc2a002004052b) for a first overview. In general Unity assets are organized in two main parts: ``Assets`` and ``Packages``.

- ``Assets`` - this is where project specific/exclusive assets live.
- ``Packages`` - this is where packages installed for this project live. A package can contain any asset type. The main difference is that it can be added to multiple Unity projects. It therefor is a great method to share code or assets. To learn more about packages see [the Unity documentation about packages](https://docs.unity3d.com/Manual/PackagesList.html).

**Builtin-runtime components** added specifically for our runtime engine can be found in ``Packages/Needle Engine Exporter/Runtime/Components`` in the [Unity Project window](https://docs.unity3d.com/Manual/ProjectView.html).

### Organizing Typescript in Unity

*modular projects - re-useable code and assets made easy* - see [twitter](https://twitter.com/marcel_wiessler/status/1536006405605449729)   

**NPM Definition** is what we call [npm packages](https://docs.npmjs.com/about-packages-and-modules) that you can install to your projects from within Unity, and that are tightly integrated into the Unity Editor. That includes generating C# component stubs automatically. In the future, we're planning to support automatically copying assets to output/distribution folders as well. 

Each NpmDef contains a npm package (written in TypeScript) and is linked to a matching ``.codegen`` folder where all the generated components will be put.

![image](https://user-images.githubusercontent.com/5083203/185805355-0618aa93-a9ca-463a-86b8-e735e8772bda.png)

#### Creating and installing a npmdef
To create a *NPM Definition* right click in the Unity Project browser and select ``Create/NPM Definition``.   
You can **install a *NPM Definition* package** to your runtime project by e.g. selecting your ``Export Info`` component and adding it to the ``dependencies`` list (internally this will just add the underlying npm package to your package.json).

![image](https://user-images.githubusercontent.com/5083203/170374130-d0e32516-a1d4-4903-97c2-7ec9fa0b17d4.png)

Don't forget to install the newly added package by e.g. clicking Install on the ExportInfo component and also restart the server if it is already running

To edit the code inside a *NPM Definition* package just double click the asset *NPM Definition* asset in your project browser and it will open the vscode workspace that comes with each npmdef.

[Read more about scripting](scripting)

### Version Control / git

Generated projects already contain a `.gitignore` that excludes generated files.  
The following folders are excluded:
- `assets`
- `generated`
- `node_modules`

> **Note**: Currently some files use codegen (e.g. registering your npmdef types) and may show up in sourcecontrol even if they have not changed (e.g. ``register_types.js``. This might be improved in the future. 
   Npmdefs also reference ``@needle-tools/engine`` via a local path at the moment (these paths are also updated automatically) so they might show up as changed if you use them in multiple projects. This might be removed in the future if/when ``@needle-tools/engine`` is resolved/loaded from npm.

### Temporary Projects

If you're planning to only add custom files via NpmDefs and not change the project config (e.g. for a quick fullscreen test), you can prefix the project path with `Library`. The project will be generated in the Unity Project Library and does not need to be added to source control (the Library folder should be excluded from source control). We call these projects _temporary projects_. They're great for quickly testing out ideas!

## Vite Project Structure

Our main project template uses the superfast [vite](https://vitejs.dev/) bundler. The following shows the structure of the Vite template that we created and ship (altough it is possible to adapt it to your own needs).

- ``index.html`` Your standard index.html - as we know and <3 it
- ``assets/`` - The asset folder contains exported assets from Unity. E.g. generated ``gltf`` files, audio or video files. It is not recommended to manually add files to ``assets`` as it will get cleared on building the distribution for the project.
- ``include/`` (optional) - If you have custom assets that you need to reference/load add them to the include directory. On build this directory will be copied to the output folder.
- ``src/``
    - ``main.ts`` - Here we import the ``needle-engine`` package
    - ``src/generated/`` - The generated javascript code. Do not edit manually!
    - ``src/scripts/`` - Your project specific scripts / components
    - ``src/styles/`` - Stylesheets
- ``vite.config`` - The [vite config](https://vitejs.dev/config/). Settings for building the distribution and hosting the development server are made here. It is usually not necessary to edit these settings.


[Learn more in the docs about bundling](html.md#vue-react-mustache-etc)

---
Our exporter can be used with other project structures as well, vite is just our go-to frontend bundling tool because of its speed. Feel free to set up your JavaScript project as you like. 
