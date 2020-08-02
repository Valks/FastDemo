import { css } from "@microsoft/fast-element";
import { display } from "@microsoft/fast-foundation";

export const FlexStyles = css`
    :host {
        display: flex;
    }
    :host([debug]) {
        border: 1px dotted grey;
        background: 'lightgrey';
    }
    :host([inline]) {
        display: inline-flex;
    }
    :host([column]) {
        flex-direction: column;
    }
    :host([hAlign][column]) {
        align-items: "flex-" attr('hAlign');
    }
    :host([hAlign]:not([column])) {
        justify-content: "flex-" attr('hAlign');
    }
    :host([vAlign][column]) {
        justify-content: "flex-" attr('vAlign');
    }
    :host([vAlign]:not([column])) {
        align-items: "flex-" attr('vAlign');
    }
    :host([space]) {
        justify-content: "space-" attr('space');
    }
    :host([wrap]) {
        flex-wrap: wrap;
    }
    :host([fill]) {
        width: 100%;
        height: 100%;
    }
    :host([grow]) {
        flex-grow: attr(grow);
    }

    :host([gap="gap.smaller"]:not([column])) ::slotted(*:not(:last-child)) {
          margin-right: 8px;
    }
    :host([gap="gap.smaller"][column]) ::slotted(*:not(:last-child)) {
          margin-bottom: 8px;
    }

    :host([gap="gap.small"]:not([column])) ::slotted(*:not(:last-child)) {
        margin-right: 10px;
    }
    :host([gap="gap.small"][column]) ::slotted(*:not(:last-child)) {
        margin-bottom: 10px;
    }

    :host([gap="gap.medium"]:not([column])) ::slotted(*:not(:last-child)) {
        margin-right: 15px;
    }
    :host([gap="gap.medium"][column]) ::slotted(*:not(:last-child)) {
        margin-bottom: 15px;
    }

    :host([gap="gap.large"]:not([column])) ::slotted(*:not(:last-child)) {
        margin-right: 30px;
    }
    :host([gap="gap.large"][column]) ::slotted(*:not(:last-child)) {
        margin-bottom: 30px;
    }
`;