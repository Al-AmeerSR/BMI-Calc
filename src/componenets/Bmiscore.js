import React from "react";

function Bmiscore({ bmiName, bmiNo, changeWeight } ) {
  return (
    <div className="text-center shadow rounded p-4">
      <div>Your BMI Score</div>
      <div className="row justify-content-md-center">
        <div className="p-3 my-2 alert fs-1 alert-primary col-sm-4">{bmiNo}</div>
      </div>
      <div className="fs-3 fw-bold text-primary">{bmiName}</div>
      {changeWeight.type === "negative" &&(<div className="fs-4">"Your need to gain"<span className="fw-bold">{changeWeight.weight}</span></div>)}
      {changeWeight.type === "positive" &&(<div className="fs-4">"Your need to lose"<span className="fw-bold">{changeWeight.weight}</span></div>)}
      {changeWeight.type === "normal" &&(<div className="fs-4">"Your Weight is Normal for you"</div>)}
    </div>
  );
}

export default Bmiscore;
