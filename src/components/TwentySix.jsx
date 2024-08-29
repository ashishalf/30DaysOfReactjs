// Multiple data fetch
import axios from "axios";
import React, { useEffect, useState } from "react";

function TwentySix() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => setData1(response.data));

      axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then((response) => setData2(response.data));
  }, []);

  console.log(data1,data2)

  return <div></div>;
}

export default TwentySix;
