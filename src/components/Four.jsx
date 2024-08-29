//Display List

import React from "react";

function Four() {
  const names = ["Alice", "Bob", "Charlie", "David"];
  return (
    <div>
      <ol>
        {names.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ol>
    </div>
  );
}

export default Four;
