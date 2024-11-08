import { useDispatch } from "react-redux";
import Counter from "../components/counter";
import {increment, decrement} from '../slice/counterSlice'

const DisplayCounter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <Counter />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
};

export default DisplayCounter;
