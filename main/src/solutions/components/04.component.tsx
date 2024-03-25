// type ButtonProps = {
//   className: string;
// };
// interface ButtonProps extends ComponentProps<"button"> {
//   className?: string;
// }
// type ButtonProps = {
//   className?: string;
// } & ComponentProps<"button">;
// type ButtonProps = {
//   className?: string;
// } & React.DetailedHTMLProps<
//   React.ButtonHTMLAttributes<HTMLButtonElement>,
//   HTMLButtonElement
// >;
type ButtonProps = {
  className?: string;
} & JSX.IntrinsicElements["button"];

export const Button = ({ className, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button disabled onClick={() => {}} type="button"></Button>;
};
