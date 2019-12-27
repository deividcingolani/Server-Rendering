import React from "react";

function Home() {
  return (
    <div className="center-align" style={{marginTop:"200px"}}>
      <h3>Welcome</h3>
      <p> Check out these awesome featurs </p>
      <button onClick={() => console.log("Hi there!")}>Press me!</button>
    </div>
  );
}
export default {
  component: Home
};
