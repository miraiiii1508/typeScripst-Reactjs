export const Button = (props: {}) => {
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
