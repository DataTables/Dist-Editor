
## Editor NPM distribution package

[Editor](https://editor.datatables.net) is an extension for the [DataTables Javascript library](https://datatables.net) which adds full editing abilities to a DataTable, including row creation and deletion, multi-row editing, inline and bubble editing and full integration with Bootstrap, Foundation, Semantic UI and others. Full details and live examples for Editor can be found on [its web-site](https://editor.datatables.net).



## Installing Editor

Editor is commercial software and thus is not suitable for distribution via NPM directly. As such the primary method to include Editor on your page is to [download the Editor packages](https://editor.datatables.net/download) or use the [DataTables download builder](https://datatables.net/download). However, NPM packages are useful for package builders such as WebPack and ESBuild, which is why this package is available.

Although the Editor Javascript library is not available in this package, it provides a skeleton structure that can be used with the Editor download packages and the licensed files dropped directly into this structure for use.


### CLI installation

This distribution method does mean that each time you `npm install` to install the required packages for your application you will need to copy the licensed Editor files into your `npm_modules`. To help assist with that this package provides a Node script which will copy the files from the Editor zip to your node modules. Usage:

    node node_modules/datatables.net-editor/install.js pathToEditorZip

For example:

    node node_modules/datatables.net-editor/install.js ~/Downloads/Editor.zip



## Why?

Although distribution of a Javascript library using this method is not ideal, npm currently doesn't offer a way to distribute commercial software. It works great for open source software such as DataTables core, but licensed software such as Editor needs to be downloaded separately. If you have any thoughts on this topic and how to improve it, feedback is always welcome.
