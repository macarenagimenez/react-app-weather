import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <form>
        <input
          type="type"
          placeholder="Type your city"
          autofocus="on"
          autoComplete="off"
        />
      </form>
      <p className="name">London</p>
      <p className="date">Monday 11.45</p>
    </div>
  );
}
