import { ElementRef } from '@angular/core';
import { KeyboardLayout } from './layouts';
export declare class NgVirtualKeyboardDirective {
    private element;
    private opened;
    private focus;
    layout: KeyboardLayout | string;
    placeholder: string;
    type: string;
    onWindowBlur(): void;
    onWindowFocus(): void;
    onFocus(): void;
    onClick(): void;
    /**
     * Constructor of the class.
     *
     * @param {ElementRef}  element
     *
     */
    constructor(element: ElementRef);
    /**
     * Method to open virtual keyboard
     */
    private openKeyboard;
    /**
     * Getter for used keyboard layout.
     *
     * @returns {KeyboardLayout}
     */
    private getLayout;
    /**
     * Getter for used placeholder for virtual keyboard input field.
     *
     * @returns {string}
     */
    private getPlaceHolder;
    /**
     * Getter for used type for virtual keyboard input field.
     *
     * @return {string}
     */
    private getType;
}
