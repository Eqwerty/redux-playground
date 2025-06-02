import { Counter } from "./counter/Counter";
import { FlagToggler } from "./flag/FlagToggler";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <FlagToggler />
    </div>
  );
}
