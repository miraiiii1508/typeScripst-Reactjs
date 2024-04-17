type ModalProps =
  | {
      variant: "no-title";
    }
  | {
      variant: "title";
      title: string;
    };

export const Modal = (props: ModalProps) => {
  if (props.variant === "no-title") {
    return <div>No title</div>;
  } else {
    return <div>Title: {props.title}</div>;
  }
};

export const Test = () => {
  return (
    <div>
      <Modal variant="title" title="Hello" />
      <Modal variant="no-title" />

      <Modal variant="title" title="evondev" />
      <Modal variant="no-title" />
    </div>
  );
};
