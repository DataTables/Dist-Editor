// Type definitions for DataTables Editor
//
// Project: https://editor.datatables.net

/// <reference types="jquery" />

import DataTables, {Api} from 'datatables.net';
import Editor from './Editor';
import {IButton} from './model/button';
import {IFormOptions} from './model/formOptions';

export default Editor;

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * DataTables' types integration
 */
declare module 'datatables.net' {
	interface ConfigLanguage {
		/**
		 * Editor language options
		 */
		editor?: ConfigEditorLanguage;
	}

	interface Api<T> {
		/**
		 * Get the Editor instance assigned to this DataTable
		 */
		editor(): Editor;

		/**
		 * Get information about a file
		 */
		file: InstanceType<typeof Editor>['file'];

		/**
		 * Get information about files
		 */
		files: InstanceType<typeof Editor>['files'];
	}

	interface ApiRow<T> {
		/**
		 * Create a new row
		 */
		create: (opts?: ApiOptions) => Editor;
	}

	interface ApiRowMethods<T> {
		/**
		 * Trigger editing on the selected row
		 */
		edit: (opts?: ApiOptions) => Editor;

		/**
		 * Delete the current row
		 */
		delete: (opts?: ApiOptions) => Editor;
	}

	interface ApiRowsMethods<T> {
		/**
		 * Trigger editing on the selected rows
		 */
		edit: (opts?: ApiOptions) => Editor;

		/**
		 * Delete the current rows
		 */
		delete: (opts?: ApiOptions) => Editor;
	}

	interface ApiCellMethods<T> {
		/**
		 * Trigger inline or bubble editing on the selected cell
		 */
		edit: (type?: 'inline' | 'bubble', opts?: ApiOptions) => Editor;
	}

	interface ApiCellsMethods<T> {
		/**
		 * Trigger bubble editing on the selected cells
		 */
		edit: (opts?: ApiOptions) => Editor;
	}

	interface DataTablesStatic {
		/**
		 * Editor class
		 */
		Editor: {
			/**
			 * Create a new Editor instance for the target DataTable
			 */
			new (config: ConfigEditor): Editor;

			/**
			 * Editor version
			 */
			version: string;

			/**
			 * Default configuration values
			 */
			defaults: ConfigEditor;
		}
	}

	interface Buttons {
		create: EditorButtonCreate;
		edit: EditorButtonEdit;
		editSingle: EditorButtonEditSingle;
		remove: EditorButtonRemove;
		removeSingle: EditorButtonRemoveSingle;

		createInline: {
			extend: 'createInline';
			position?: null | 'start' | 'end' | HTMLElement;
		}
	}
}

/** Create new row Button */
export interface EditorButtonCreate extends EditorButtonConfig {
	extend: 'create';
}

/** Edit one or more rows Button */
export interface EditorButtonEdit extends EditorButtonConfig {
	extend: 'edit';
}

/** Edit a single row Button (disabled when multiple selected) */
export interface EditorButtonEditSingle extends EditorButtonConfig {
	extend: 'editSingle';
}

/** Delete one or more rows Button */
export interface EditorButtonRemove extends EditorButtonConfig {
	extend: 'remove';
}

/** Delete a single row Button (disabled when multiple selected) */
export interface EditorButtonRemoveSingle extends EditorButtonConfig {
	extend: 'removeSingle';
}

/** Common properties used by the buttons provided by Editor */
export interface EditorButtonConfig {
	/** Editor instance to trigger button */
	editor: Editor;

	/** The form control buttons to show in the Editor form when activated */
	formButtons?: IButton | IButton[] | string;

	/** The message to show in the edit form */
	formMessage?: string;

	/** Form options to configure the behaviour of the form */
	formOptions?: IFormOptions;

	/** The title to give the edit form */
	formTitle?: string;
}

export interface ApiOptions {
	buttons?: 'string';
	title?: 'string';
	message?: 'string';
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Options
 */
interface ConfigEditor extends DeepPartial<typeof Editor.defaults> {}
interface ConfigEditorLanguage extends DeepPartial<typeof Editor.defaults.i18n> {}
