import React from 'react';
import './App.css';
import Counter from "./components/counter";
import List from "./components/list";


const images = [
  {
    id: 1,
    name: "Image 1", 
    img: "#"
  },
  {
    id: 2,
    name: "Image 2", 
    img: "#"
  },
  {
    id: 3,
    name: "Image 3", 
    img: "#"
  },
  {
    id: 4,
    name: "Image 4", 
    img: "#"
  }
]

function App() {
  return <Counter />;
  return <List images={images}/>;
}

export default App;
