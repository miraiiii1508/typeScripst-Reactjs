import { ComponentProps } from "react";

const buttonPropsMap = {
  reset: {
    className: "bg-blue-500 text-white",
    type: "reset",
    // illegalProperty: "whatever",
  },
  submit: {
    className: "bg-gray-200 text-black",
    type: "submit",
    // illegalProperty: "whatever",
  },
  next: {
    className: "bg-green-500 text-white",
    type: "button",
    // illegalProperty: "whatever",
  },
} satisfies Record<string, ComponentProps<"button">>;
buttonPropsMap.next.className;
// buttonPropsMap.reset.disabled;

type ButtonProps = {
  variant: keyof typeof buttonPropsMap;
};
const Button = (props: ButtonProps) => {
  return <button {...buttonPropsMap[props.variant]}>Click me</button>;
};

const Parent = () => {
  return (
    <>
      <Button variant="next"></Button>
      <Button variant="reset"></Button>
      <Button variant="submit"></Button>
      {/* <Button variant="something"></Button> */}
      {/* <Button></Button> */}
    </>
  );
};
