"use client";
import { Slider } from "~/src";

const SliderWithDots = () => {
  return (
    <div className="p-4">
      <Slider
        defaultValue={300}
        dots={true}
        max={1000}
        min={100}
        onChange={(value: number | number[]) => console.log(value)}
        step={200}
      />
    </div>
  );
};

const SliderWithDotsCode = `
"use client";
import { Slider } from "keep-react";

const SliderWithDots = () => {
  return (
    <Slider
      defaultValue={300}
      dots={true}
      max={1000}
      min={100}
      onChange={(value: number | number[]) => console.log(value)}
      step={200}
    />
  );
};

export default SliderWithDots;
`;

export { SliderWithDots, SliderWithDotsCode };
