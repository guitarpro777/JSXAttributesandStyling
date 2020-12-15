import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        className="food-img"
        src="https://www.pillsbury.com/-/media/PB/Images/everyday-eats/breakfast-brunch/how-to-cook-bacon-in-the-oven/how-to-cook-bacon_00.jpg"
      />
      <img
        className="food-img"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*"
      />
      <img
        className="food-img"
        src="https://hips.hearstapps.com/amv-prod-tpw.s3.amazonaws.com/wp-content/uploads/2015/09/how-to-cook-bacon-in-the-oven-00.jpg?crop=1.00xw:0.752xh;0,0&resize=1200:*"
      />
    </div>
  </div>,
  document.getElementById("root")
);
