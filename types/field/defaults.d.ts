import Editor from '../Editor';
import Field from './Field';
export declare type IFormatter = (this: Editor, val: any, field: Field, def?: any) => any;
/**
 * Initialisation options that can be given to Editor.Field at initialisation
 * time.
 */
export interface IDefaults {
    /**
     * Class name to assign to the field's container element (in addition to the other
     * classes that Editor assigns by default).
     */
    className: string;
    /**
     * Define a custom comparison function for the field's data.
     */
    compare: null | ((submitted: any, original: any) => boolean);
    /**
     * The data property (`mData` in DataTables terminology) that is used to
     * read from and write to the table. If not given then it will take the same
     * value as the `name` that is given in the field object. Note that `data`
     * can be given as null, which will result in Editor not using a DataTables
     * row property for the value of the field for either getting or setting
     * data.
     *
     * In previous versions of Editor (1.2-) this was called `dataProp`. The old
     * name can still be used for backwards compatibility, but the new form is
     * preferred.
     */
    data: string;
    /**
     * The default value for the field. Used when creating new rows (editing will
     * use the currently set value). If given as a function the function will be
     * executed and the returned value used as the default
     *
     * In Editor 1.2 and earlier this field was called `default` - however
     * `default` is a reserved word in Javascript, so it couldn't be used
     * unquoted. `default` will still work with Editor 1.3, but the new property
     * name of `def` is preferred.
     */
    def: string;
    /**
     * Control the decoding of HTML entities in input elements.
     */
    entityDecode: boolean;
    /**
     * Helpful information text about the field that is shown below the input control.
     */
    fieldInfo: string;
    /**
     * Apply a transform (a format) to the value read from a field.
     */
    getFormatter: IFormatter;
    /**
     * The ID of the field. This is used by the `label` HTML tag as the "for" attribute
     * improved accessibility. Although this using this parameter is not mandatory,
     * it is a good idea to assign the ID to the DOM element that is the input for the
     * field (if this is applicable).
     */
    id: string;
    /**
     * The label to display for the field input (i.e. the name that is visually
     * assigned to the field).
     */
    label: string;
    /**
     * Helpful information text about the field that is shown below the field label.
     */
    labelInfo: string;
    /**
     * The name for the field that is submitted to the server. This is the only
     * mandatory parameter in the field description object.
     */
    name: string;
    /**
     * If `null` values should be replaced with the default value on edit
     */
    nullDefault: boolean;
    /**
     * The input control that is presented to the end user. The options available
     * are defined by {@link Editor.fieldTypes} and any extensions made
     * to that object.
     */
    type: string;
    /**
     * Information message for the field - expected to be dynamic
     */
    message: string;
    /**
     * Allow a field to be editable when multiple rows are selected
     */
    multiEditable: boolean;
    /**
     * Apply a transform (format) to a value when it is set into the field
     */
    setFormatter: IFormatter;
    /**
     * Indicate if the field's value can be submitted
     */
    submit: boolean;
}
export interface IOptions extends Partial<IDefaults> {
}
declare const defaults: IDefaults;
export default defaults;
