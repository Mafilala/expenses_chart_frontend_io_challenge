"use client";
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import styles from "./chart.module.css";
const Chart = ({ data }) => {
  const threshold = 375;
  const [width, setWidth] = useState(window.innerWidth > threshold ? 350 : 300);
  console.log(width);
  const svgRef = useRef(null);
  const h = 180;
  const padding = 10;
  const bigVal = d3.max(data, (d) => d.amount);
  const l = data.length;

  useEffect(() => {
    const barWidth = (width - (l - 1) * padding) / l;
    const yScale = d3
      .scaleLinear()
      .domain([d3.max(data, (d) => d.amount), 0])
      .range([h, 0]);

    const xScale = d3
      .scaleLinear()
      .domain([0, l])
      .range([0, width + padding]);
    const svg = d3.select(svgRef.current);
    const updateWidth = () => {
      const newWidth = window.innerWidth > threshold ? 350 : 300;
      svg.attr("width", newWidth).attr("height", h);
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWidth);

    svg.attr("width", width).attr("height", h);
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (_, i) => xScale(i))
      .attr("y", (d) => h - yScale(d.amount))
      .attr("width", barWidth)
      .attr("height", (d) => yScale(d.amount) - 20)
      .attr("ry", 3)
      .attr("class", (d) => (d.amount == bigVal ? styles.biggest : styles.bar));

    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (_, i) => xScale(i) + (width - (l - 1) * padding) / (2 * l))
      .attr("y", (d) => h - 5)
      .attr("dominant-baseline", "middle") // Align text vertically
      .attr("text-anchor", "middle")
      .text((d) => d.day)
      .style("fill", "#93867b")
      .style("font-size", "10px");

    svg
      .selectAll("rect")
      .append("title")
      .text((d) => "$" + d.amount);
  }, [data]);

  return <svg className="" ref={svgRef}></svg>;
};

export default Chart;
