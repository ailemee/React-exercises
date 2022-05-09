import "./App.css";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav
        style={{
          paddingTop: "1rem",
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> | <Link to="/exercise1">Excercise 1</Link> |{" "}
        <Link to="/exercise2">Excercise 2</Link> |{" "}
        <Link to="/exercise3">Excercise 3</Link> |{" "}
        <Link to="/exercise4">Excercise 4</Link> |{" "}
        <Link to="/exercise5">Excercise 5</Link> |{" "}
        <Link to="/exercise6">Excercise 6</Link> |{" "}
        <Link to="/exercise7">Excercise 7</Link> |{" "}
        <Link to="/exercise8">Excercise 8</Link> |{" "}
        <Link to="/exercise9">Excercise 9</Link> |{" "}
      </nav>
      <Outlet />
    </div>
  );
}
