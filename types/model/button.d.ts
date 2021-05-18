export interface IButton {
    /** Callback for when the button is activated */
    action: () => {};
    /** Class names to give the button */
    className: string;
    /**Set the tab index attribute for the button */
    tabIndex: number;
    /** Text to show in the button */
    text: string;
}
declare const button: IButton;
export default button;
