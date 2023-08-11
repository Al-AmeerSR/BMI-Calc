
import './App.css';
import Form from './componenets/form';
import Bmiscore from './componenets/Bmiscore';
import Bmilist from './componenets/Bmilist';
import { useState } from 'react';
function App() {
  const[show,setShow]=useState(false);
  const [bmi, setBmi] = useState("00");
  const [bmiType, setBmiType]=useState("Not Calculated");
  const [bmiRange,setBmiRange]=useState({
    underWeight: {low :""},
    normal: {low :"",high:""},
    overWeight: {low :"",high:""},
    obesityOne: {low :"",high:""},
    obesityTwo: {low :"",high:""},
    obesityThree: {high:""},

  });
  const [changeWeight,setChangeWeight]= useState({weight:"",type:""});
  const onFormsub=(w,h)=>{
    let b=calBmi(w,h);
    
    setBmiType(weightType(b));
    setBmi(b);
    console.log(w,h);
    const range ={
      underWeight: {low :calWeight(18.5,h)},
      normal: {low :calWeight(18.5,h),high:calWeight(24.9,h)},
      overWeight: {low :calWeight(25,h),high:calWeight(29.9,h)},
      obesityOne: {low :calWeight(30,h),high:calWeight(34.9,h)},
      obesityTwo: {low :calWeight(35,h),high:calWeight(39.9,h)},
      obesityThree: {high:calWeight(40,h)},
    };
    setBmiRange(range);
    setChangeWeight(weightChange(b,w,range));
    setShow(true);
  }

  const calBmi = (w , h) => (w/(h*h)).toFixed(2);
  const calWeight = (b , h)=> (b*h*h).toFixed(2);
  const weightType = (bmi) =>{
    if(bmi < 18.5){
      return "Underweight"
    }else if(bmi > 18.5 && bmi <24.9){
      return"Normal";
    }else if(bmi > 24.9 && bmi < 29.9){
      return "Overweight";
    }else if(bmi > 29.9 && bmi < 34.9){
      return"Obesity Class I";
    }else if(bmi > 34.9 && bmi < 39.9){
      return "Obesity Class II";
    }else if(bmi > 39.9){
      return "Obesity Class III";
    }
  }
  const weightChange=(b,w,range)=>{
    let changeObj;
    if(b>24.9){
      changeObj={
        weight:(w-range.normal.high).toFixed(2),
      type:"positive",
      };return changeObj;
    }else if(b<18.5){
      changeObj={
        weight:(w-range.normal.low).toFixed(2),
      type:"negative",
    };return changeObj;
  }else{
    changeObj={weight :0,type:"normal"};
  return changeObj;
  }
  }
  return (
    <> 
  <div className="container">
    <div className="row justify-content-center mt-5 mx-2"> <Form getData={onFormsub}/></div>
    { show&&(
    <div className="row justify-content-center mt-5 ">
      <div className="col-12 col-sm-6 mb-5">
   <Bmiscore bmiNo={bmi} bmiName={bmiType} changeWeight={changeWeight}/>
   </div>
   <div className="col-12 col-sm-6 mb-5">
   <Bmilist range={bmiRange} bmi={bmi}/>
   </div>
   </div>
     )}
   </div>
   </>
  );
}

export default App;
