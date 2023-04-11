"use client";

import { useState } from "react";
import ButtonCounter from "./ButtonCounter";

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <ButtonCounter
//         setCount={setCount}
//         count={count}
//       />
//     </div>
//   );
// }

const Counter = function () {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <ButtonCounter
        setCount={setCount}
        count={count}
      />
    </div>
  );
};

export default Counter;
