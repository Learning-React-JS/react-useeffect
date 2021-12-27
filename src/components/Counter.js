import React, { useState, useEffect } from "react";
export default function Counter() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Component mounted!");

    const interval = setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);

    return () => {
      console.log("Component unmounted!");
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("State for number updated!");
  }, [number]);

  return (
    <div>
      <h1>{number}</h1>

      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  );
}
