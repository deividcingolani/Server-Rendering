import React from "react";

export default function Home() {
  return (
    <div>
      <div>I'm the very very BEST home component</div>
      <button onClick={()=>console.log('Hi there!')}>Press me!</button>
    </div>
  );
}
