// import MyButton from "../components/MyButton";
import { useState } from "react";

import MyButton from "./Mybutton";
import AboutPage from "./AboutPage";
import User from "./User";
import ShoppingList from "./ShoppingList";

export default function MyApp() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <AboutPage />
      <User />
      <ShoppingList />
    </div>
  );
}
