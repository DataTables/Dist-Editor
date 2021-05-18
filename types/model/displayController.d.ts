import Editor from '../Editor';
export interface IDisplayController {
    /** Initialisation method, called by Editor when itself, initialises. */
    init: (editor: Editor) => void;
    /** Display the form (add it to the visual display in the document) */
    open: (editor: Editor, append: HTMLElement, fn: Function) => void;
    /** Hide the form (remove it form the visual display in the document) */
    close: (editor: Editor, fn: Function) => void;
    /** Get the container node */
    node: (editor: Editor) => HTMLElement | void;
    [others: string]: any;
}
declare const displayController: IDisplayController;
export default displayController;
