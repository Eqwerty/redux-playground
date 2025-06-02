import { useDispatch } from "react-redux";
import { toggle } from "./flagSlice";

export function FlagToggler() {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(toggle())}>Toggle Flag</button>;
}
