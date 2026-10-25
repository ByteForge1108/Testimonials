import React from "react";
import Testimonial from "./Components/Testimonial.jsx";
import reviews from "./data";

const App = () => {
  return (
    <div>
      <h1>Our Testimonials</h1>
      <div></div>
      <Testimonial reviews={reviews}/>
    </div>
  );
};

export default App;
