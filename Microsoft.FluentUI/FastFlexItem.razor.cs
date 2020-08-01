
using System.Collections.Generic;

using Microsoft.AspNetCore.Components;
using Microsoft.FluentUI.Attributes;

namespace Microsoft.FluentUI
{
    public partial class FastFlexItem
    {
        [Parameter(CaptureUnmatchedValues = true)] public Dictionary<string, object> AdditionalAttributes { get; set; }
        [Parameter] public RenderFragment? ChildContent { get; set; }

        /// <summary>
        /// Controls item's alignment
        /// </summary>
        [Parameter] public FlexItemAlignMode Align { get; set; }
        /// <summary>
        /// Item can fill remaining space of the container.
        /// If numeric value is provided, remaining space will be distributed proportionally between all the items.
        /// </summary>
        [Parameter] public object Grow { get; set; }
        /// <summary>
        /// Controls item's ability to shrink
        /// </summary>
        [Parameter] public object Shrink { get; set; }
        /// <summary>
        /// Item can be pushed towards opposite side in the container's direction
        /// </summary>
        [Parameter] public bool Push { get; set; }
        /// <summary>
        /// IGNORE (will be refactored and not exposed via API).
        /// Value is automatically set by parent Flex component.
        /// </summary>
        [Parameter] public FlexDirection FlexDirection { get; set; }
    }
}
