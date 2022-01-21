import Editor from '../Editor';
export interface IDisplayController {
    [others: string]: any;
    /** Hide the form (remove it form the visual display in the document) */
    close: (editor: Editor, fn: Function) => void;
    /** Initialisation method, called by Editor when itself, initialises. */
    init: (editor: Editor) => void;
    /** Get the container node */
    node: (editor: Editor) => HTMLElement | void;
    /** Display the form (add it to the visual display in the document) */
    open: (editor: Editor, append: HTMLElement, fn: Function) => void;
}
declare const displayController: IDisplayController;
export default displayController;
