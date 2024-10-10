import { Children, ElementRef, forwardRef, useReducer, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TButtonType, TLibrary } from ".";
type OtherComponentType = ElementRef<typeof OtherComponent>
function App() {
  const [count, setCount] = useState<number>(0);
  function TButton() {
    const [buttonType, setButtonType] = useState<TButtonType>("button");
    const [valueLibrary, setValueLibrary] = useState<TLibrary>({
      icon: "home",
      name: "React",
      age: 18,
    });
    const [IconType] = useState<TLibrary["icon"]>("home");
    return <button type={buttonType}></button>;
  }
  type TCouter = { a: number };
  type Taction = { type: "increatement" | "decreament" };
  function CouterReducer(state: TCouter, action: Taction) {
    switch (action.type) {
      case "increatement":
        return {
          ...state,
          a: state.a + 1,
        };
      case "decreament":
        return {
          ...state,
          a: state.a - 1,
        };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(CouterReducer, { a: 18 });
  const tableRef = useRef<OtherComponentType>(null)
  return (
    <>
    <OtherComponent ref={tableRef}>Hello</OtherComponent>
      <h1>{state.a}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => dispatch({ type: "increatement" })}>
          increatement
        </button>
        <button onClick={() => dispatch({ type: "decreament" })}>
          decreatement
        </button>
      </div>
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
      <button ref={buttonRef}>play</button>
    </>
  );
}
const OtherComponent = forwardRef<HTMLTableElement,{children:React.ReactNode}>(({children},ref)=>{
  return <table ref={ref}>{children}</table>  
})
export default App;
