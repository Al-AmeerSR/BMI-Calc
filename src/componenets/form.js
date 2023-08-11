import { useState } from "react";

function Form({getData}) {
  
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [alert, setalert] = useState(false); // initially set alert to false
  const onSubmit = (e) => {
    e.preventDefault();
    if(isNaN(weight)||isNaN(height)){
      console.log("Not a valid input");
      setalert(true);
    }else{
      setalert(false);
      getData(weight,height);
      setHeight("");
      setWeight("");
    
  }
  };
  return (
    
      <div className="col-sm-4 shadow rounded px-5">
        <h1 className="text-center pt-3 text-secondary h2">BMI Calculator</h1>

        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col col-sm-6">
              <div className="my-3">
                <label className="form-label">Weight (Kg):</label>
                <input
                  type="text"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="form-control"
                  placeholder="eg : 70"
                  required
                />
              </div>
            </div>
            <div className="col col-sm-6">
              <div className="my-3">
                <label className="form-label">Height (m):</label>
                <input
                  type="text"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="form-control"
                  placeholder="eg : 1.7"
                  required
                />
              </div>
            </div>
          </div>
          <div class="row justify-content-md-center">
          <input
            type="submit"
            className="btn btn-primary my-3"
            value="Get BMI"
          />
          </div>
        </form>
        {alert && <div className="alert alert-danger" role="alert">Please enter a valid number</div> }
      </div>
    
  );
}

export default Form;
