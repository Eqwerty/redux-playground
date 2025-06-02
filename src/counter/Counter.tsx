import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { increment, selectCount } from "./counterSlice";

export function Counter() {
  const count = useSelector(selectCount);
  const flag = useSelector((state: RootState) => state.flag.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>
        Increment (
        <span>
          {count} - {flag.toString()}
        </span>
        )
      </button>
    </div>
  );
}
