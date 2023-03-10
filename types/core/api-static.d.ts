/**
 * Common error message emitter. This method is not (yet) publicly documented on
 * the Editor site. It might be in future.
 *
 * @param  {string} msg Error message
 * @param  {int}    tn  Tech note link
 */
export declare function error(msg: string, tn: number, thro?: boolean): void;
/**
 * Obtain label / value pairs of data from a data source, be it an array or
 * object, for use in an input that requires label / value pairs such as
 * `select`, `radio` and `checkbox` inputs.
 *
 * A callback function is triggered for each label / value pair found, so the
 * caller can add it to the input as required.
 *
 * @static
 * @param {object|array} An object or array of data to iterate over getting the
 * label / value pairs.
 * @param {object} props When an array of objects is passed in as the data
 * source by default the label will be read from the `label` property and
 * the value from the `value` property of the object. This option can alter
 * that behaviour.
 * @param {function} fn Callback function. Takes three parameters: the label,
 * the value and the iterator index.
 */
export declare function pairs(data: any, props: any, fn: any): void;
/**
 * Field specific upload method. This can be used to upload a file to the Editor
 * libraries. This method is not (yet) publicly documented on the Editor site.
 * It might be in future.
 *
 * @static
 * @param {Editor} editor The Editor instance operating on
 * @param {object} conf Field configuration object
 * @param {Files} files The file(s) to upload
 * @param {function} progressCallback Upload progress callback
 * @param {function} completeCallback Callback function for once the file has
 * been uploaded
 */
export declare function upload(editor: any, conf: any, files: any, progressCallback: any, completeCallback: any): void;
/**
 * CommonJS factory function pass through. Matches DataTables.
 * @param {*} root Window
 * @param {*} jq jQUery
 * @returns {boolean} Indicator
 */
export declare function factory(root: any, jq: any): boolean;
