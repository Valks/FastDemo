import { html, attr, customElement, FASTElement } from "@microsoft/fast-element";
import { FlexStyles as styles } from "./FastFlex.styles"

const template = html<FASTFlex>`
    <template style="${x => x.padding === PaddingMode.medium ? `padding: 10px;` : ``}">
        <slot></slot>
    </template>
`;

export enum FlexAlignMode {
    start   = 'start',
    center  = 'center',
    end     = 'end',
    stretch = 'stretch'
}

export enum FlexSpaceMode {
    around  = 'around',
    between = 'between',
    evenly  = 'evenly'
}

export enum GapMode {
    smaller = 'gap.smaller',
    small   = 'gap.small',
    medium  = 'gap.medium',
    large   = 'gap.large'
}

export enum PaddingMode {
    medium = 'padding.medium'
}

@customElement({
    name: 'fast-flex',
    template,
    styles
})
export class FASTFlex extends FASTElement {
    /**
     *  Defines if container should be inline element.
     *  @public
     *  @remarks
     *  HTML Attribute: inline
     */
    @attr({ attribute: "inline", mode: "boolean" })
    public inline?: boolean;

    /**
     *  Sets vertical flow direction.
     *  @public
     *  @remarks
     *  HTML Attribute: column
     */
    @attr({ attribute: "column", mode: "boolean" })
    public column?: boolean;

    /**
     *  Allows overflow items to wrap on the next container's line.
     *  @public
     *  @remarks
     *  HTML Attribute: wrap
     */
    @attr({ attribute: "wrap", mode: "boolean" })
    public wrap?: boolean;

    /**
     *  Controls items alignment in horizontal direction.
     *  @public
     *  @remarks
     *  HTML Attribute: hAlign
     */
    @attr({ attribute: "hAlign", mode: "fromView" })
    public hAlign?: FlexAlignMode;

    /**
     *  Controls items alignment in vertical direction.
     *  @public
     *  @remarks
     *  HTML Attribute: vAlign
     */
    @attr({ attribute: "vAlign", mode: "fromView" })
    public vAlign?: FlexAlignMode;

    /**
     *  Defines strategy for distributing remaining space between items.
     *  @public
     *  @remarks
     *  HTML Attribute: space
     */
    @attr({ attribute: "space", mode: "fromView" })
    public space?: FlexSpaceMode;

    /**
     *  Defines gap between each two adjacent child items.
     *  @public
     *  @remarks
     *  HTML Attribute: gap
     */
    @attr({ attribute: "gap", mode: "fromView" })
    public gap?: GapMode;

    /**
     *  Defines container's padding.
     *  @public
     *  @remarks
     *  HTML Attribute: padding
     */
    @attr({ attribute: "padding", mode: "fromView" })
    public padding?: PaddingMode;

    /**
     *  Enables debug mode.
     *  @public
     *  @remarks
     *  HTML Attribute: debug
     */
    @attr({ attribute: "debug", mode: "boolean" })
    public debug?: boolean;

    /**
     *  Orders container to fill all parent's space available.
     *  @public
     *  @remarks
     *  HTML Attribute: fill
     */
    @attr({ attribute: "fill", mode: "boolean" })
    public fill?: boolean;
}

export const FlexStyles = styles;