import { html, attr, customElement, FASTElement } from "@microsoft/fast-element";
import { FlexItemStyles as styles } from "./FastFlexItem.styles"

const template = html<FASTFlexItem>`
    <template style="${x => x.size ? `flex-basis: ${x.size};` : ``}">
        <slot></slot>
    </template>
`;

export enum FlexItemAlignMode {
    auto     = 'auto',
    start    = 'start',
    end      = 'end',
    center   = 'center',
    baseline = 'baseline',
    stretch  = 'stretch'
}

export enum FlexItemSizeMode {
    half    = 'size.half',
    quarter = 'size.quarter',
    small   = 'size.small',
    medium  = 'size.medium',
    large   = 'size.large'
}

export enum FlexDirection {
    row = 'row',
    column = 'column'
}

@customElement({
    name: 'fast-flex-item',
    template,
    styles
})
export class FASTFlexItem extends FASTElement {
    /**
     *  Controls item's alignment.
     *  @public
     *  @remarks
     *  HTML Attribute: align
     */
    @attr({ attribute: "align", mode: "fromView" })
    public align?: FlexItemAlignMode;

    /**
     *  Defines size of the item.
     *  @public
     *  @remarks
     *  HTML Attribute: size
     */
    @attr({ attribute: "size", mode: "fromView" })
    public size?: FlexItemSizeMode;

    /**
     *  Item can fill remaining space of the container.
     *  If numeric value is provided, remaining space will be distributed proportionally between all the items.
     *  @public
     *  @remarks
     *  HTML Attribute: grow
     */
    @attr({ attribute: "grow", mode: "fromView" })
    public grow?: boolean | number;

    /**
     *  Controls item's ability to shrink.
     *  @public
     *  @remarks
     *  HTML Attribute: shrink
     */
    @attr({ attribute: "shrink", mode: "fromView" })
    public shrink?: boolean | number;

    /**
     *  Item can be pushed towards opposite side in the container's direction.
     *  @public
     *  @remarks
     *  HTML Attribute: push
     */
    @attr({ attribute: "push", mode: "boolean" })
    public push?: boolean;

    /**
     *  IGNORE (will be refactored and not exposed via API).
     *  Value is automatically set by parent Flex component.
     *  @private
     *  @remarks
     *  HTML Attribute: flexDirection
     */
    @attr({ attribute: "flexDirection", mode: "fromView" })
    public flexDirection?: FlexDirection;
}

export const FlexItemStyles = styles;