import { useState, useEffect } from "react";

const Timer = ({ initialTime, endTime }) => {
  const [count, setCount] = useState(initialTime);

  useEffect(() => {
    let counterInt = setInterval(() => {
      setCount((prevValue) => {
        if (prevValue >= endTime) {
          clearInterval(counterInt);
          return 0;
        }
        return prevValue + 1;
      });
    }, 1000);

    return () => {
      clearInterval(counterInt);
    };
  }, []);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(0)}>Restart</button>
    </div>
  );
};

export default Timer;
