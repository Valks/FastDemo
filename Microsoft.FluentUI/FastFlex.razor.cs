using System.Collections.Generic;

using Microsoft.AspNetCore.Components;

namespace Microsoft.FluentUI
{
    public partial class FastFlex
    {
        [Parameter(CaptureUnmatchedValues = true)] public Dictionary<string, object> AdditionalAttributes { get; set; }
        [Parameter] public RenderFragment? ChildContent { get; set; }

        /// <summary>
        /// Defines if container should be inline element
        /// </summary>
        [Parameter] public bool Inline { get; set; } = false;
        /// <summary>
        /// Sets vertical flow direction
        /// </summary>
        [Parameter] public bool Column { get; set; } = false;
        /// <summary>
        /// Allows overflow items to wrap on the next container's line
        /// </summary>
        [Parameter] public bool Wrap { get; set; } = true;
        /// <summary>
        /// Controls items alignment in horizontal direction
        /// </summary>
        [Parameter] public Attributes.FlexAlignMode HorizontalAlign { get; set; } = Attributes.FlexAlignMode.Start;
        /// <summary>
        /// Controls items alignment in vertical direction
        /// </summary>
        [Parameter] public Attributes.FlexAlignMode VerticalAlign { get; set; } = Attributes.FlexAlignMode.Start;
        /// <summary>
        /// Defines strategy for distributing remaining space between items
        /// </summary>
        [Parameter] public Attributes.FlexSpaceMode Space { get; set; } = Attributes.FlexSpaceMode.Around;
        /// <summary>
        /// Defines gap between each two adjacent child items
        /// </summary>
        [Parameter] public Attributes.GapMode Gap { get; set; } = Attributes.GapMode.Small;
        /// <summary>
        /// Defines container's padding
        /// </summary>
        [Parameter] public Attributes.PaddingMode Padding { get; set; } = Attributes.PaddingMode.Medium;
        /// <summary>
        /// Enables debug mode
        /// </summary>
        [Parameter] public bool Debug { get; set; } = false;
        /// <summary>
        /// Orders container to fill all parent's space available
        /// </summary>
        [Parameter] public bool Fill { get; set; } = false;
        
    }
}
