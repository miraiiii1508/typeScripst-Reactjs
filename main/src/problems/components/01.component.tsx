export const Button = (props: unknown) => {
  return <button className={props.className}></button>;
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};
