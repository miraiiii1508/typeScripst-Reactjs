import { ElementRef, forwardRef, useReducer, useRef, useState } from "react";
// import { TButtonType, TLibrary } from ".";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
type OtherComponentRef = ElementRef<typeof OtherComponent>;
function App() {
  const [count, setCount] = useState<number>(1);
  // const [isOpen, setIsOpen] = useState<boolean>(() => Boolean(0));
  const ref = useRef<OtherComponentRef>(null);
  return (
    <>
      <OtherComponent ref={ref}>Hello</OtherComponent>
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
      >
        Decrement age
      </button>
      <p>Hello! You are {state.age}.</p>
      <Audio />
    </>
  );
}
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

export default App;
