import React, { useState } from "react";

export default function Exercise4() {
  const [count, setCount] = useState(0);

  return (
    <main className="mainContainer">
      <div>
        <p>Button has been clicked {count} times</p>
        <div className="buttonDiv">
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
      </div>
    </main>
  );
}
