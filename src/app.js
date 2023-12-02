import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";

const AppComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};

let images = [
  "https://images.unsplash.com/photo-1517330283827-2527c57981ad?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1517331028157-75de91e10628?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1515890435782-59a5bb6ec191?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
let randomIndex = Math.floor(Math.random() * images.length);
document.querySelector(
  "body"
).style.backgroundImage = `url(${images[randomIndex]})`;

const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(jsxHeader); //replaces everything in the root element with header
root.render(<AppComponent />);
