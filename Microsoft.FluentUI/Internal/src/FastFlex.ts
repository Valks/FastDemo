import { html, attr, customElement, FASTElement } from "@microsoft/fast-element";
import { FlexStyles as styles } from "./FastFlex.styles"

const template = html<FASTFlex>`
    <template style="${x => x.column && x.hAlign ? `align-items: flex-${x.hAlign};` : `justify-content: flex-${x.hAlign};`}
                     ${x => x.column && x.vAlign ? `justify-content: flex-${x.vAlign};` : `align-items: flex-${x.vAlign};`}
                     ${x => x.space ? `justify-content: space-${x.space};` : void 0}
                     ${x => x.wrap ? `flex-wrap: wrap;` : void 0}
                     ${x => x.fill ? `width: 100%; height: 100%;` : void 0}
    ">
        <slot></slot>
    </template>
`;

customElement({
    name: 'fast-flex',
    template,
    styles
})

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

export class FASTFlex extends FASTElement {
    /**
     *  Defines if container should be inline element.
     *  @public
     *  @remarks
     *  HTML Attribute: inline
     */
    @attr({ attribute: "inline", mode: "boolean" })
    public inline: boolean = false;

    /**
     *  Sets vertical flow direction.
     *  @public
     *  @remarks
     *  HTML Attribute: column
     */
    @attr({ attribute: "column", mode: "boolean" })
    public column: boolean = false;

    /**
     *  Allows overflow items to wrap on the next container's line.
     *  @public
     *  @remarks
     *  HTML Attribute: wrap
     */
    @attr({ attribute: "wrap", mode: "boolean" })
    public wrap: boolean = false;

    /**
     *  Controls items alignment in horizontal direction.
     *  @public
     *  @remarks
     *  HTML Attribute: hAlign
     */
    @attr({ attribute: "hAlign" })
    public hAlign: FlexAlignMode = FlexAlignMode.start;

    /**
     *  Controls items alignment in vertical direction.
     *  @public
     *  @remarks
     *  HTML Attribute: vAlign
     */
    @attr({ attribute: "vAlign" })
    public vAlign: FlexAlignMode = FlexAlignMode.start;

    /**
     *  Defines strategy for distributing remaining space between items.
     *  @public
     *  @remarks
     *  HTML Attribute: space
     */
    @attr({ attribute: "space" })
    public space: FlexSpaceMode = FlexSpaceMode.around;

    /**
     *  Defines gap between each two adjacent child items.
     *  @public
     *  @remarks
     *  HTML Attribute: gap
     */
    @attr({ attribute: "gap" })
    public gap: GapMode = GapMode.small;

    /**
     *  Defines container's padding.
     *  @public
     *  @remarks
     *  HTML Attribute: padding
     */
    @attr({ attribute: "padding" })
    public padding: PaddingMode = PaddingMode.medium;

    /**
     *  Enables debug mode.
     *  @public
     *  @remarks
     *  HTML Attribute: debug
     */
    @attr({ attribute: "debug" })
    public debug: boolean = false;

    /**
     *  Orders container to fill all parent's space available.
     *  @public
     *  @remarks
     *  HTML Attribute: fill
     */
    @attr({ attribute: "fill" })
    public fill: boolean = false;
}

export const FlexStyles = styles;