// interface ButtonProps {
//   className: string;
// }
// type ButtonProps = {
//   className: string;
// };

// export const Button = (props: ButtonProps) => {
//   return <button className={props.className}></button>;
// };
export const Button = (props: { className: string }) => {
  return <button className={props.className}></button>;
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};
