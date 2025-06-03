import { useDispatch, useSelector } from "react-redux";
import { selectFlag } from "../flag/flagSlice";
import { increment, selectCount } from "./counterSlice";

export function Counter() {
  const dispatch = useDispatch();

  const count = useSelector(selectCount);
  const flag = useSelector(selectFlag);

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
