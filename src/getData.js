import React, { useState, useEffect } from "react";
import Axios from "axios";

function Data() {
  const [getimg, setimg] = useState([]);

  useEffect(() => {
    Axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        console.log(res);
        const getimg = res.data;
        setimg(getimg);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <img className="image" src={getimg.url}></img>
      <div className="centerd">{getimg.explanation}</div>
    </div>
  );
}

export default Data;
