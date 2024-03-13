import React, {
  ComponentProps,
  ElementRef,
  forwardRef,
  useReducer,
  useRef,
  useState,
} from "react";
// import { TButtonType, TLibrary } from ".";
import { EventFor } from ".";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
type OtherComponentRef = ElementRef<typeof OtherComponent>;
const data: { name: string; age: number }[] = [
  { name: "evondev", age: 20 },
  { name: "evondev", age: 20 },
  { name: "evondev", age: 20 },
];
function App() {
  const [count, setCount] = useState<number>(1);
  // const [isOpen, setIsOpen] = useState<boolean>(() => Boolean(0));
  const ref = useRef<OtherComponentRef>(null);
  const handleChangeValue = (e: EventFor<"input", "onChange">) => {
    console.log(e);
  };
  console.log(
    <a
      href="https://vitejs.dev"
      target="_blank"
      // onClick={() => setIsOpen(1)}
    >
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
  );
  // {type: "div", props: {}, key: null}
  return (
    <>
      {/* <OtherComponent ref={ref}>Hello</OtherComponent> */}
      <input onChange={(e) => handleChangeValue(e)} />
      <div>
        <a
          href="https://vitejs.dev"
          target="_blank"
          // onClick={() => setIsOpen(1)}
        >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(10)}>count is {count}</button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Counter />
      {/* <Button /> */}
      {/* <Button onClick={() => 1} className="" type="button">
        <div>hello</div>
      </Button>
      <Button>
        <Counter />
      </Button>
      <Button type="button">{undefined}</Button>
      <Status text="evondev" className="inline-block"></Status>
      <Row icon={UserIcon} />
      <Tag tagName={"div"}></Tag> */}
      {data.map((item) => (
        <div>{item.name}</div>
      ))}
      <BoxedItemWithRef
        data={[
          {
            job: "Frontend Developer",
          },
        ]}
        renderData={(item) => <div>{item.job}</div>}
      />
      <BoxedItemWithRef data={[1]} renderData={(item) => <div>{item}</div>} />
    </>
  );
}
// function Button() {
//   const [buttonType, setButtonType] = useState<TButtonType>("button");
//   const [iconType] = useState<TLibrary["icon"]>("user");
//   return <button type={buttonType}></button>;
// }
type TCounter = {
  age: number;
};
type TAction = {
  type: "incremented_age" | "decremented_age";
};
function counterReducer(state: TCounter, action: TAction) {
  switch (action.type) {
    case "incremented_age":
      return {
        ...state,
        age: state.age + 1,
      };
    case "decremented_age":
      return {
        ...state,
        age: state.age - 1,
      };
    default:
      break;
  }
  return state;
}
function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { age: 42 });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        Increment age
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decremented_age" });
        }}
        type="button"
      >
        Decrement age
      </button>
      <p>Hello! You are {state.age}.</p>
      <Audio />
    </>
  );
}
// (property) JSX.IntrinsicElements.button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

function Audio() {
  const audioRef = useRef<ElementRef<"audio">>(null);
  const buttonRef = useRef<ElementRef<"button">>(null);
  return (
    <>
      <audio ref={audioRef}></audio>
      <button ref={buttonRef}></button>
    </>
  );
}
const OtherComponent = forwardRef<
  HTMLTableElement,
  { children: React.ReactNode }
>(({ children }, ref) => {
  return <table ref={ref}>{children}</table>;
});

function Button({
  children,
  onClick,
  ...rest
}: {
  children: React.ReactNode;
  onClick?: () => void;
} & ComponentProps<"button">): JSX.Element {
  return (
    <button onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
// function Status(props: { text: string }) {
//   return <span>{props.text}</span>;
// }
// destructuring
// function Status({ text }: { text: string }) {
//   return <span>{text}</span>;
// }
// type TStatus = {
//   text: string;
// };
interface TStatus extends ComponentProps<"span"> {
  text: string;
}
function Status({ text, ...rest }: TStatus) {
  return <span {...rest}>{text}</span>;
}
// type TButtonPropsWithRef = ComponentProps<typeof Button>;
// type TStatusProps = ComponentProps<typeof Button>;
// import {Button} from "some-library"
// type Button = ComponentProps<typeof Button>;
const Row = (props: {
  icon: React.ComponentType<{
    className?: string;
  }>;
}) => {
  return (
    <div>
      <props.icon className="icon" />
    </div>
  );
};
const Tag = (props: {
  tagName: React.ElementType<{
    className?: string;
  }>;
}) => {
  return (
    <div>
      <props.tagName className="tag" />
    </div>
  );
};
function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
      />
    </svg>
  );
}
function fixedForwardRef<T, P = Record<string, any>>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode
): (props: P & React.RefAttributes<T>) => React.ReactNode {
  return React.forwardRef(render) as any;
}
// const BoxedItem2 = <T,>() => {}
function BoxedItem<T>(
  {
    data,
    renderData,
  }: {
    data: T[];
    renderData: (item: T) => React.ReactNode;
  },
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return <div ref={ref}>{data.map((item) => renderData(item))}</div>;
}
const BoxedItemWithRef = fixedForwardRef(BoxedItem);

export default App;
