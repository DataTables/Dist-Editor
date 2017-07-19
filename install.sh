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
    echo "  The Editor zip source file must be given as the first argument. Please download from https://editor.datatables.net/download"
    exit 2
fi

if [ ! -f "$EDITOR_ZIP" ]; then
    echo "  Editor zip file not found. Please download Editor from https://editor.datatables.net/download"
    exit 3
fi

unzip -q $EDITOR_ZIP -d /tmp/editor-tmp
UNZIP_PATH=/tmp/editor-tmp/$(ls /tmp/editor-tmp)

MODULE="node_modules/datatables.net-editor"
if [ -d $MODULE ]; then
    echo "  Installing Editor core"
    cp $UNZIP_PATH/js/dataTables.editor.js $MODULE/js
    cp $UNZIP_PATH/js/dataTables.editor.min.js $MODULE/js
fi

MODULE="node_modules/datatables.net-editor-dt"
if [ -d $MODULE ]; then
    echo "  Installing DataTables styling"
    cp $UNZIP_PATH/css/editor.dataTables.css $MODULE/css
    cp $UNZIP_PATH/css/editor.dataTables.min.css $MODULE/css
fi

MODULE="node_modules/datatables.net-editor-bs"
if [ -d $MODULE ]; then
    echo "  Installing Bootstrap 3 styling"
    cp $UNZIP_PATH/css/editor.bootstrap.css $MODULE/css
    cp $UNZIP_PATH/css/editor.bootstrap.min.css $MODULE/css
    cp $UNZIP_PATH/js/editor.bootstrap.js $MODULE/js
    cp $UNZIP_PATH/js/editor.bootstrap.min.js $MODULE/js
fi

MODULE="node_modules/datatables.net-editor-bs4"
if [ -d $MODULE ]; then
    echo "  Installing Bootstrap 4 styling"
    cp $UNZIP_PATH/css/editor.bootstrap4.css $MODULE/css
    cp $UNZIP_PATH/css/editor.bootstrap4.min.css $MODULE/css
    cp $UNZIP_PATH/js/editor.bootstrap4.js $MODULE/js
    cp $UNZIP_PATH/js/editor.bootstrap4.min.js $MODULE/js
fi

MODULE="node_modules/datatables.net-editor-zf"
if [ -d $MODULE ]; then
    echo "  Installing Foundation styling"
    cp $UNZIP_PATH/css/editor.foundation.css $MODULE/css
    cp $UNZIP_PATH/css/editor.foundation.min.css $MODULE/css
    cp $UNZIP_PATH/js/editor.foundation.js $MODULE/js
    cp $UNZIP_PATH/js/editor.foundation.min.js $MODULE/js
fi

MODULE="node_modules/datatables.net-editor-jqui"
if [ -d $MODULE ]; then
    echo "  Installing jQuery UI styling"
    cp $UNZIP_PATH/css/editor.jqueryui.css $MODULE/css
    cp $UNZIP_PATH/css/editor.jqueryui.min.css $MODULE/css
    cp $UNZIP_PATH/js/editor.jqueryui.js $MODULE/js
    cp $UNZIP_PATH/js/editor.jqueryui.min.js $MODULE/js
fi

MODULE="node_modules/datatables.net-editor-se"
if [ -d $MODULE ]; then
    echo "  Installing Semantic UI styling"
    cp $UNZIP_PATH/css/editor.semanticui.css $MODULE/css
    cp $UNZIP_PATH/css/editor.semanticui.min.css $MODULE/css
    cp $UNZIP_PATH/js/editor.semanticui.js $MODULE/js
    cp $UNZIP_PATH/js/editor.semanticui.min.js $MODULE/js
fi


rm -rf /tmp/editor-tmp

echo "Done"
echo ""