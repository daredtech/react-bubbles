import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../utilities/axiosWithAuth ";

// When BubblePages renders, make a GET request to fetch the color data for your bubbles.

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  // fetch your colors data from the server when the component mounts
  useEffect(() => {

    const getColorsData = () => {

        axiosWithAuth()

        .get('http://localhost:5000/api/colors')

        .then(response => {
            console.log('response getdata: ', response.data);
            setColorList(response.data);
        })

        .catch(error => {
            console.log('error: ', error);
        })
    }
    getColorsData();
}, []);


  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
