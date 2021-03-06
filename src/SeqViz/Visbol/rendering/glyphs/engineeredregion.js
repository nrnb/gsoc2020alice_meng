const defaultString = `
<svg  version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:parametric="https://parametric-svg.github.io/v0.2"
      width="100"
      height="100"
      glyphtype="Engineered Region"
      soterms="SO:0000804"
      parametric:defaults="baseline_offset=0;baseline_x=0;baseline_y=25;height=15;pad_after=2;pad_before=2;pad_bottom=3;pad_top=3;width=30">

<path 
      id="engineered-region-path" 
      parametric:d="M{baseline_x+pad_before},{(baseline_y-baseline_offset)-(height*0.5)} L{baseline_x+pad_before+width},{(baseline_y-baseline_offset)-(height*0.5)} L{baseline_x+pad_before+width},{(baseline_y-baseline_offset)+(height*0.5)} {baseline_x+pad_before},{(baseline_y-baseline_offset)+(height*0.5)} Z" 
      d="M2,17.5 L32,17.5 L32,32.5 2,32.5 Z" 
      fill="rgb(230,230,230)"
        fill-rule="nonzero"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="miter"
        stroke-linecap="butt" />

</svg>`;

const dimensions = [30, 15];
const inset = 7.5;

export {
    defaultString,
    dimensions,
    inset,
}