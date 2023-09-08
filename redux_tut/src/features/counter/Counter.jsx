import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from "./counterSlice"
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setAmount] = useState(0)
    const addValue = Number(incrementAmount) || 0

    const resetAll = () => {
      dispatch(reset())
      setAmount(0)
    }

  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick = {() => dispatch(increment())}>+</button>
            <button onClick = {() => dispatch(decrement())}>-</button>
            <button onClick = {() => dispatch(reset())}>reset</button>
        </div>
        <div>
          <input 
            type="text" 
            value={incrementAmount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick = {() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
          <button onClick = {resetAll}>reset all</button>

        </div>
    </section>
  )
}

export default Counter