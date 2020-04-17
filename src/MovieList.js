import React from "react";
import HOC from "./HOC";
import "./App.css";

const List = [
  {
    id: "Movie1",
    name: "Sortilège",
    rate: "★★★★☆",
    image: "https://i.pinimg.com/564x/5e/4e/a2/5e4ea2d3f02714b07fd4389c0fe01dff.jpg"
      
  },
  {
    id: "Movie2",
    name: "Emma Watson Love",
    rate: "★★★☆☆",
    image: "https://i.pinimg.com/564x/1d/7c/e6/1d7ce69a44ae7e87b7f4282c033a23a1.jpg"
  },
  {
    id: "Movie3",
    name: "The Gonnies",
    rate: "★★☆☆☆",
    image:"https://i.pinimg.com/564x/79/d1/56/79d156d8bb470bc7ea144f702dbc41a7.jpg"
  }
      
];

const MovieList = props => {
  return (
    <div>
      <h1>MOVIES LIST</h1>
      {List.map((el, i) => (
        <div className="movies">
          <h4> Id : {el.id} </h4>
          <h4> Name : {el.name} </h4>
          <h4> Rating : {el.rate} </h4>
          <img src={el.image} />
        </div>
      ))}
    </div>
  );
};
export default HOC(MovieList);