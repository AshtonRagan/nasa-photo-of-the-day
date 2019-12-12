import React, { useState, useEffect } from "react";
import { Image, Container, Centerd, BgImage } from "./style";
import Axios from "axios";

function Data() {
  const [getimg, setimg] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=AfNc3tNmyUHMdbLLEVTDp0QlHSxAABqTV5hmjkHM"
    )
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
    <Container>
      <Image src={getimg.url}></Image>
      <Centerd>{getimg.explanation}</Centerd>
    </Container>
  );
}

export default Data;
