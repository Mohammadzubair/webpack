import { useEffect } from "react";
import { firstFun } from "./utils/second";

export const App = () => {
  useEffect(() => {
    firstFun();
  }, []);

  return (
    <div className="app">
      <h1 className="hello">Hello React</h1>
      <p>Webpack + TypeScript + React</p>
    </div>
  );
};
