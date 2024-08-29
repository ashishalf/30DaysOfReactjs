// Fetch Data

import React, { useEffect, useState } from "react";

function Six() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData));
  }, []);

  return <>{data ? (<div><h1> Title: {data.title}</h1> </div>) : (<div><h1>Loading......</h1></div>)}</>;
}

export default Six;
