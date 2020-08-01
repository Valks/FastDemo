import { html, attr, customElement, FASTElement } from "@microsoft/fast-element";
import { FlexItemStyles as styles } from "./FastFlexItem.styles"

const template = html<FASTFlexItem>`
    <template style="${x => x.align ? `align-self: flex-${x.align};` : void 0}
                     ${x => x.size ? `flex-basis: ${x.size};` : void 0}
                     ${x => x.shrink ? `flex-shrink: ${x.shrink};` : void 0}
                     ${x => x.grow ? `flex-grow: ${x.grow};` : void 0}
                     ${x => x.push && (x.flexDirection === FlexDirection.column ? `margin-top: 'auto';` : `margin-left: 'auto';`)}
    ">
        <slot></slot>
    </template>
`;

customElement({
    name: 'fast-flex-item',
    template,
    styles
})

export enum FlexItemAlignMode {
    auto    = 'auto',
    start   = 'start',
    end = 'end',
    center = 'center',
    baseline = 'baseline',
    stretch = 'stretch'
}

export enum FlexItemSizeMode {
    half = 'size.half',
    quarter = 'size.quarter',
    small = 'size.small',
    medium = 'size.medium',
    large = 'size.large'
}

export enum FlexDirection {
    row = 'row',
    column = 'column'
}

export class FASTFlexItem extends FASTElement {
    /**
     *  Controls item's alignment.
     *  @public
     *  @remarks
     *  HTML Attribute: align
     */
    @attr({ attribute: "align" })
    public align: FlexItemAlignMode = FlexItemAlignMode.auto;

    /**
     *  Defines size of the item.
     *  @public
     *  @remarks
     *  HTML Attribute: size
     */
    @attr({ attribute: "align" })
    public size: FlexItemSizeMode = FlexItemSizeMode.quarter;

    /**
     *  Item can fill remaining space of the container.
     *  If numeric value is provided, remaining space will be distributed proportionally between all the items.
     *  @public
     *  @remarks
     *  HTML Attribute: grow
     */
    @attr({ attribute: "grow", mode: "fromView" })
    public grow: boolean | number = false;

    /**
     *  Controls item's ability to shrink.
     *  @public
     *  @remarks
     *  HTML Attribute: shrink
     */
    @attr({ attribute: "shrink", mode: "fromView" })
    public shrink: boolean | number = false;

    /**
     *  Item can be pushed towards opposite side in the container's direction.
     *  @public
     *  @remarks
     *  HTML Attribute: push
     */
    @attr({ attribute: "push", mode: "boolean" })
    public push: boolean = false;

    /**
     *  IGNORE (will be refactored and not exposed via API).
     *  Value is automatically set by parent Flex component.
     *  @private
     *  @remarks
     *  HTML Attribute: flexDirection
     */
    @attr({ attribute: "flexDirection" })
    public flexDirection: FlexDirection = FlexDirection.row;
}

export const FlexItemStyles = styles;