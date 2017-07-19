#!/bin/sh

EDITOR_ZIP=$1

echo ""
echo "Editor installation"

# Sanity checks first
UNZIP=$(which unzip)
if [ ! -x "$UNZIP" ]; then
    echo "  Could not find unzip package"
    exit 1
fi

if [ ! -d ./node_modules ]; then
    echo "  `node_modules` directory not found. Please execute this script from your package's base directory'"
    exit 2
fi

if [ -z "$EDITOR_ZIP" ]; then
    echo "  Editor zip file not found. Please download Editor from https://editor.datatables.net/download"
    exit 2
fi

unzip $EDITOR_ZIP -f /tmp/editor-tmp

MODULE="node_modules/datatables.net-editor"
if [ -d $MODULE ]; then
    echo "  Installing Editor core"
    cp /tmp/editor-tmp/js/dataTables.editor.js $MODULE/js
    cp /tmp/editor-tmp/js/dataTables.editor.min.js $MODULE/js
fi

MODULE="node_modules/datatables.net-editor-dt"
if [ -d $MODULE ]; then
    echo "  Installing DataTables styling"
    cp /tmp/editor-tmp/css/editor.dataTables.css $MODULE/css
    cp /tmp/editor-tmp/css/editor.dataTables.min.css $MODULE/css
fi

MODULE="node_modules/datatables.net-editor-bs"
if [ -d $MODULE ]; then
    echo "  Installing Bootstrap 3 styling"
    cp /tmp/editor-tmp/css/editor.bootstrap.css $MODULE/css
    cp /tmp/editor-tmp/css/editor.bootstrap.min.css $MODULE/css
    cp /tmp/editor-tmp/js/editor.bootstrap.js $MODULE/js
    cp /tmp/editor-tmp/js/editor.bootstrap.min.js $MODULE/js
fi

MODULE="node_modules/datatables.net-editor-bs4"
if [ -d $MODULE ]; then
    echo "  Installing Bootstrap 4 styling"
    cp /tmp/editor-tmp/css/editor.bootstrap4.css $MODULE/css
    cp /tmp/editor-tmp/css/editor.bootstrap4.min.css $MODULE/css
    cp /tmp/editor-tmp/js/editor.bootstrap4.js $MODULE/js
    cp /tmp/editor-tmp/js/editor.bootstrap4.min.js $MODULE/js
fi

MODULE="node_modules/datatables.net-editor-zf"
if [ -d $MODULE ]; then
    echo "  Installing Foundation styling"
    cp /tmp/editor-tmp/css/editor.foundation.css $MODULE/css
    cp /tmp/editor-tmp/css/editor.foundation.min.css $MODULE/css
    cp /tmp/editor-tmp/js/editor.foundation.js $MODULE/js
    cp /tmp/editor-tmp/js/editor.foundation.min.js $MODULE/js
fi

MODULE="node_modules/datatables.net-editor-jqui"
if [ -d $MODULE ]; then
    echo "  Installing jQuery UI styling"
    cp /tmp/editor-tmp/css/editor.jqueryui.css $MODULE/css
    cp /tmp/editor-tmp/css/editor.jqueryui.min.css $MODULE/css
    cp /tmp/editor-tmp/js/editor.jqueryui.js $MODULE/js
    cp /tmp/editor-tmp/js/editor.jqueryui.min.js $MODULE/js
fi

MODULE="node_modules/datatables.net-editor-se"
if [ -d $MODULE ]; then
    echo "  Installing Semantic UI styling"
    cp /tmp/editor-tmp/css/editor.semanticui.css $MODULE/css
    cp /tmp/editor-tmp/css/editor.semanticui.min.css $MODULE/css
    cp /tmp/editor-tmp/js/editor.semanticui.js $MODULE/js
    cp /tmp/editor-tmp/js/editor.semanticui.min.js $MODULE/js
fi


rm -rf /tmp/editor-tmp

echo "Done"
echo ""