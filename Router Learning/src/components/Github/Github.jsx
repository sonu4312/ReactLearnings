import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/sonu4312")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github username :{data.name}
      <img src={data.avatar_url} alt="Git Pfp" width={300} />
    </div>
  );
}

export default Github;

export const gitInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/sonu4312");
  return res.json();
};
