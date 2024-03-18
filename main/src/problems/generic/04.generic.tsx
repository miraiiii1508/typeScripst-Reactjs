import { Equal, Expect } from "../../helpers/type-utils";

interface Button {
  value: string;
  label: string;
}

interface ButtonGroupProps {
  buttons: Button[];
  onClick: (value: string) => void;
}

const ButtonGroup = (props: ButtonGroupProps) => {
  return (
    <div>
      {props.buttons.map((button) => {
        return (
          <button
            key={button.value}
            onClick={() => {
              props.onClick(button.value);
            }}
          >
            {button.label}
          </button>
        );
      })}
    </div>
  );
};

<>
  <ButtonGroup
    onClick={(value) => {
      type test = Expect<Equal<typeof value, "add" | "delete">>;
    }}
    buttons={[
      {
        value: "add",
        label: "Add",
      },
      {
        value: "delete",
        label: "Delete",
      },
    ]}
  ></ButtonGroup>
</>;
