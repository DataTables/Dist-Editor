
///
/// Editor NPM install script
///
/// This script will extract files from an Editor download zip file (either
/// a licensed package or a trial package) and place them into the NPM
/// holding packages for Editor (e.g. `datatables.net-editor`).
///
/// This script should be run after an `npm install` has been done to download
/// the packages to the working directory.
///

var AdmZip = require('adm-zip');
var fs = require('fs');

console.info('Editor NPM install script');

if (process.argv.length !== 3) {
	console.error('  Install script must be called with the path to the Editor zip file passed in as the only argument.');
	process.exit(1);
}

if (!isDir('node_modules')) {
	console.error("  Install script must be executed from your project's base path (i.e. next to `node_modules`.");
	process.exit(2);
}

var zipPath = process.argv[2];

try {
	fs.statSync(zipPath);
} catch (e) {
	console.error('  File not found - please check the passed in path');
	process.exit(3);
}

try {
	var zip = new AdmZip(zipPath);
	var zipEntries = zip.getEntries();
} catch (e) {
	console.error('  Given file is not a zip archive');
	process.exit(4);
}

zipEntries.forEach(function(zipEntry) {
	// Editor core
	copyJs(zipEntry, 'dataTables.editor', '');

	// DT styling
	copyCss(zipEntry, 'editor.dataTables', 'dt');
	copyJs(zipEntry, 'editor.dataTables', 'dt');

	// Bootstrap styling
	copyCss(zipEntry, 'editor.bootstrap', 'bs');
	copyJs(zipEntry, 'editor.bootstrap', 'bs');

	// Bootstrap 4 styling
	copyCss(zipEntry, 'editor.bootstrap4', 'bs4');
	copyJs(zipEntry, 'editor.bootstrap4', 'bs4');

	// Bootstrap 5 styling
	copyCss(zipEntry, 'editor.bootstrap5', 'bs5');
	copyJs(zipEntry, 'editor.bootstrap5', 'bs5');

	// Bulma styling
	copyCss(zipEntry, 'editor.bulma', 'bm');
	copyJs(zipEntry, 'editor.bulma', 'bm');

	// Foundation styling
	copyCss(zipEntry, 'editor.foundation', 'zf');
	copyJs(zipEntry, 'editor.foundation', 'zf');

	// jQuery UI styling
	copyCss(zipEntry, 'editor.jqueryui', 'jqui');
	copyJs(zipEntry, 'editor.jqueryui', 'jqui');

	// Semantic UI styling
	copyCss(zipEntry, 'editor.semanticui', 'se');
	copyJs(zipEntry, 'editor.semanticui', 'se');
});

console.info('Done');

// Check if the file matches and the npm package was installed for it to be written into
function checkWrite(zipEntry, file, type, packageName) {
	if (zipEntry.name.indexOf(file) !== -1 && isDir(packageName)) {
		var path = packageName + '/' + type + '/' + file;

		console.info('  Installing ' + path);

		fs.writeFileSync(path, zipEntry.getData().toString('utf8'));
	}
}

// Copy min and non-min versions of a single CSS file
function copyCss(zipEntry, file, style) {
	checkWrite(zipEntry, file + '.css', 'css', 'node_modules/datatables.net-editor-' + style);
	checkWrite(zipEntry, file + '.min.css', 'css', 'node_modules/datatables.net-editor-' + style);
}

// Copy min and UMD / ESM versions of a single file
function copyJs(zipEntry, file, style) {
	if (style) {
		style = '-' + style;
	}

	checkWrite(zipEntry, file + '.js', 'js', 'node_modules/datatables.net-editor' + style);
	checkWrite(zipEntry, file + '.min.js', 'js', 'node_modules/datatables.net-editor' + style);
	checkWrite(zipEntry, file + '.mjs', 'js', 'node_modules/datatables.net-editor' + style);
	checkWrite(zipEntry, file + '.min.mjs', 'js', 'node_modules/datatables.net-editor' + style);
}

// Check to see if a path is a directory
function isDir(localPath) {
	try {
		var stats = fs.statSync(localPath);

		if (stats.isDirectory()) {
			return true;
		}
	} catch (e) {}

	return false;
}
