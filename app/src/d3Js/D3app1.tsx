import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

const D3app1 = () => {
  const myElementRef = useRef(null);

  const [barData,setBarData]=useState([10,20,30,40,50]);

  useEffect(() => {
    const selectElement = d3.selectAll(".my-class");
    console.log(selectElement);

    const selectElementp = d3.selectAll("p");
    console.log(selectElementp);

    selectElement.style("color", "green");

    const svg= d3.select(myElementRef.current)
    const firstRectDatum= svg.select("rect").datum(barData)
    const allReactDatum=svg.selectAll("rect").datum(barData)
    const allReactData= svg.selectAll("rect").data(barData)

    console.log(firstRectDatum)
    console.log(allReactDatum)
    console.log(allReactData)

  }, []);

  return (
    <>
      <p>E01</p>
      <div className="my-class"> hello1</div>
      <div className="my-class"> hello2</div>

      <div>
        <h3> practice 2</h3>

        <svg className="bg-red-300" ref={myElementRef}>
          <rect />
          <rect />
          <rect />
          <rect />
          <rect />
        </svg>
      </div>
    </>
  );
};

export default D3app1;
