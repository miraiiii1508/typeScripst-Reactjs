// interface ButtonProps {
//   children?: React.ReactNode;
// }
type ButtonProps = {
  children?: React.ReactNode;
};
export const Button = (props: ButtonProps) => {
  return <button>{props.children}</button>;
};

const Parent = () => {
  return (
    <>
      <Button></Button>
      <Button>Hello world!</Button>
    </>
  );
};
