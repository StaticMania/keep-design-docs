"use client";
import { useState } from "react";
import { NumberInput } from "~/src";

const DefaultNumberInput = () => {
  const [value, setValue] = useState(100);
  return <NumberInput sizing="md" value={value} setValue={setValue} />;
};

const DefaultNumberInputCode = `
"use client";
import { useState } from "react";
import { NumberInput } from "keep-react";

const DefaultNumberInput = () => {
  const [value, setValue] = useState(100);
  return <NumberInput sizing="md" value={95} setValue={setValue} />;
};

export default DefaultNumberInput;
`;

export { DefaultNumberInput, DefaultNumberInputCode };
