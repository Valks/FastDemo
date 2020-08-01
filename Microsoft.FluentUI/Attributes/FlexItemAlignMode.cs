using System.ComponentModel;

namespace Microsoft.FluentUI.Attributes
{
    public enum FlexItemAlignMode
    {
        [Description("auto")]     Auto,
        [Description("start")]    Start,
        [Description("end")]      End,
        [Description("center")]   Center,
        [Description("baseline")] Baseline,
        [Description("stretch")]  Stretch
    }
}
