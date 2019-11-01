import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  // Using the filter method, we can create a new array containing only groceries which haven't been purchased
  const notClicked = props.images.filter(image => !image.clicked);

  return (
    <ul className="list-group">
      {notClicked.map(item => (
        <li className="list-group-item" 
            key={item.id}>
            img={item.img}
        </li>
      ))}
    </ul>
  );
}

export default List;