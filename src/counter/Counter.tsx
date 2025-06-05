import { useDispatch, useSelector } from "react-redux";
import { increment, selectCount } from "./counterSlice";

export function Counter() {
  const dispatch = useDispatch();

  const count = useSelector(selectCount);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>
        Increment (<span>{count}</span>)
      </button>
    </div>
  );
}
