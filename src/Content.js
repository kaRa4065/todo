import React from "react";
import List from "./List";

const Content = ({ items, handleChange, handleClick }) => {
  return (
    <>
      {items.length ? (
        <List
          handleChange={handleChange}
          handleClick={handleClick}
          items={items}
        />
      ) : (
        <p>Your list is empty</p>
      )}
    </>
  );
};
export default Content;
//   const [name, setName] = useState("Earn");
//   function clickHandler() {
//     const names = ["Give", "Earn", "Grow"];
//     const int = Math.floor(Math.random() * 3);
//     setName(names[int]);
//   }
//   const [count, setCount] = useState(0);
//   function decrement() {
//     const int = count - 1;
//     setCount(int);
//   }
//   function increment() {
//     const dint = count + 1;
// setCount(dint);
//   }
//   return (
//     <div>
//       <p>Lets {name} Money</p>
//       <button onClick={clickHandler}>Click me</button>
//       <div>
//         <button onClick={decrement}>-</button>
//         <span>{count}</span>
//         <button onClick={increment}>+</button>
//       </div>
//     </div>
//   );
// };
