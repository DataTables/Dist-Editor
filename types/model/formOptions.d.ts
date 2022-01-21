/// <reference types="jquery" />
/// <reference types="datatables.net" />
import Editor from '../Editor';
export interface IFormOptions {
    /** Buttons to be displayed in the form footer (e.g. submit button) */
    buttons: any;
    /** DataTables draw type when updating the table */
    drawType: 'full-reset' | 'full-hold' | 'page' | 'none' | false | true;
    /** Which element to focus on when the form is shown */
    focus: null | number | string;
    /** Form message */
    message: string | boolean;
    /** Tell the display controller to nest down */
    nest: boolean;
    /** Action to take when a background element is activated */
    onBackground: 'blur' | 'close' | 'none' | 'submit' | ((editor: Editor) => void);
    /** Action to take when the form is blurred */
    onBlur: 'submit' | 'close' | 'none' | ((editor: Editor) => void);
    /** Action to occur after Ajax update */
    onComplete: 'close' | 'none' | ((editor: Editor) => void);
    /** What action to perform when pressing escape key */
    onEsc: 'blur' | 'close' | 'none' | 'submit' | ((editor: Editor, e: JQuery.TriggeredEvent) => void);
    /** What to do with a JSON returned error for a field */
    onFieldError: 'focus' | 'none' | ((editor: Editor) => void);
    /** Action to take on return key when the form is focused */
    onReturn: 'submit' | 'none' | ((editor: Editor, e: JQuery.TriggeredEvent) => void);
    /** What data should be loaded into the form */
    scope: 'row' | 'cell';
    /** What values should be submitted to the server */
    submit: 'all' | 'changed' | 'allIfChanged';
    /** HTML to insert for submit button (inline editing) */
    submitHtml: string;
    /** Position to insert a submit button (inline editing) */
    submitTrigger: null | HTMLElement | JQuery | number;
    /** Form title */
    title: string | boolean;
}
declare const formOptions: IFormOptions;
export default formOptions;
