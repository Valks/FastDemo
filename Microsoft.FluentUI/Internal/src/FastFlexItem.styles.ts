import { css } from "@microsoft/fast-element";


export const FlexItemStyles = css`
    :host([align]) {
        align-self: "flex-" attr('align');
}

    :host([shrink]) {
        flex-shrink: attr('shrink');
    }

    :host([grow]) {
        flex-grow: attr('grow');
    }

    :host([push][flex-direction='row']) {
        margin-left: auto;
    }
    :host([push][flex-direction='column']) {
        margin-top: auto;
    }
`;