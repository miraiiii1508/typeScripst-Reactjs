import { useState } from "react";
import { TButtonType, TLibrary } from ".";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState<number>(1);
  // const [isOpen, setIsOpen] = useState<boolean>(() => Boolean(0));
  return (
    <>
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
      <Button />
    </>
  );
}
function Button() {
  const [buttonType, setButtonType] = useState<TButtonType>("button");
  const [iconType] = useState<TLibrary["icon"]>("user");
  return <button type={buttonType}></button>;
}

export default App;
