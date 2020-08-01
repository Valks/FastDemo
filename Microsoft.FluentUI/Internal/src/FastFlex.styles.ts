import { css } from "@microsoft/fast-element";
import { display } from "@microsoft/fast-foundation";


export const FlexStyles = css`
    :host {
        display: 'flex';
    }
    :host([debug]) {
        border: '1px dotted grey';
        background: 'lightgrey';
    }
    :host([inline]) {
        display: 'inline-flex';
    }
    :host([column]) {
        flex-direction: 'column';
    }
`;