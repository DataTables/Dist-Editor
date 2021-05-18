
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
	checkWrite(zipEntry, 'dataTables.editor.js', 'js', 'node_modules/datatables.net-editor');
	checkWrite(zipEntry, 'dataTables.editor.min.js', 'js', 'node_modules/datatables.net-editor');

	// DT styling
	checkWrite(zipEntry, 'editor.dataTables.css', 'css', 'node_modules/datatables.net-editor-dt');
	checkWrite(zipEntry, 'editor.dataTables.min.css', 'css', 'node_modules/datatables.net-editor-dt');

	// Bootstrap styling
	checkWrite(zipEntry, 'editor.bootstrap.js', 'js', 'node_modules/datatables.net-editor-bs');
	checkWrite(zipEntry, 'editor.bootstrap.min.js', 'js', 'node_modules/datatables.net-editor-bs');
	checkWrite(zipEntry, 'editor.bootstrap.css', 'css', 'node_modules/datatables.net-editor-bs');
	checkWrite(zipEntry, 'editor.bootstrap.min.css', 'css', 'node_modules/datatables.net-editor-bs');

	// Bootstrap 4 styling
	checkWrite(zipEntry, 'editor.bootstrap4.js', 'js', 'node_modules/datatables.net-editor-bs4');
	checkWrite(zipEntry, 'editor.bootstrap4.min.js', 'js', 'node_modules/datatables.net-editor-bs4');
	checkWrite(zipEntry, 'editor.bootstrap4.css', 'css', 'node_modules/datatables.net-editor-bs4');
	checkWrite(zipEntry, 'editor.bootstrap4.min.css', 'css', 'node_modules/datatables.net-editor-bs4');

	// Bootstrap 5 styling
	checkWrite(zipEntry, 'editor.bootstrap5.js', 'js', 'node_modules/datatables.net-editor-bs5');
	checkWrite(zipEntry, 'editor.bootstrap5.min.js', 'js', 'node_modules/datatables.net-editor-bs5');
	checkWrite(zipEntry, 'editor.bootstrap5.css', 'css', 'node_modules/datatables.net-editor-bs5');
	checkWrite(zipEntry, 'editor.bootstrap5.min.css', 'css', 'node_modules/datatables.net-editor-bs5');

	// Bulma styling
	checkWrite(zipEntry, 'editor.bulma.js', 'js', 'node_modules/datatables.net-editor-bm');
	checkWrite(zipEntry, 'editor.bulma.min.js', 'js', 'node_modules/datatables.net-editor-bm');
	checkWrite(zipEntry, 'editor.bulma.css', 'css', 'node_modules/datatables.net-editor-bm');
	checkWrite(zipEntry, 'editor.bulma.min.css', 'css', 'node_modules/datatables.net-editor-bm');

	// Foundation styling
	checkWrite(zipEntry, 'editor.foundation.js', 'js', 'node_modules/datatables.net-editor-zf');
	checkWrite(zipEntry, 'editor.foundation.min.js', 'js', 'node_modules/datatables.net-editor-zf');
	checkWrite(zipEntry, 'editor.foundation.css', 'css', 'node_modules/datatables.net-editor-zf');
	checkWrite(zipEntry, 'editor.foundation.min.css', 'css', 'node_modules/datatables.net-editor-zf');

	// jQuery UI styling
	checkWrite(zipEntry, 'editor.jqueryui.js', 'js', 'node_modules/datatables.net-editor-jqui');
	checkWrite(zipEntry, 'editor.jqueryui.min.js', 'js', 'node_modules/datatables.net-editor-jqui');
	checkWrite(zipEntry, 'editor.jqueryui.css', 'css', 'node_modules/datatables.net-editor-jqui');
	checkWrite(zipEntry, 'editor.jqueryui.min.css', 'css', 'node_modules/datatables.net-editor-jqui');

	// Semantic UI styling
	checkWrite(zipEntry, 'editor.semanticui.js', 'js', 'node_modules/datatables.net-editor-se');
	checkWrite(zipEntry, 'editor.semanticui.min.js', 'js', 'node_modules/datatables.net-editor-se');
	checkWrite(zipEntry, 'editor.semanticui.css', 'css', 'node_modules/datatables.net-editor-se');
	checkWrite(zipEntry, 'editor.semanticui.min.css', 'css', 'node_modules/datatables.net-editor-se');
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
