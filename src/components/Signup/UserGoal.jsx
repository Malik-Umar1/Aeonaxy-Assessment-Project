import React, { useState } from "react";
import Button from "../Button";

const UserGoal = ({setStep}) => {
  const handleAccount = ()=>{
    if(!isChecked1 && !isChecked2 && !isChecked3){
      setError("choose an option")
    }else{
      setStep((prev)=>prev+1)
    }
    
  };
 const [isHidden,setIsHidden] = useState(true)
 const [isChecked1,setIsChecked1] = useState(false)
 const [isChecked2,setIsChecked2] = useState(false)
 const [isChecked3,setIsChecked3] = useState(false)
 const [error,setError] = useState("")

 const handleCheckbox1 = ()=>{
  setIsHidden(false);
  setIsChecked1(true);
 };
 const handleCheckbox2 = ()=>{
  setIsHidden(false);
  setIsChecked2(true);
 };
 const handleCheckbox3 = ()=>{
  setIsHidden(false);
  setIsChecked3(true);
 };
  return (
    <div>
      <div className="logo-container ml-10 mb-5 sm:mb-10">
        <img
          className="h-20 w-30 bg-[#F2D184]"
          src="https://logowik.com/content/uploads/images/dribbble.jpg"
        ></img>
      </div>

      <div className="heading flex justify-center items-center">
        <h1 className="text-3xl ml-5 font-bold mb-3 sm:text-4xl sm:ml-0">What brings to you Dribble?</h1>
      </div>
      <div className="sub-heading flex justify-center items-center mb-2 ">
        <p className="text-md ml-5 mb-3 sm:text-lg sm:ml-0 sm:mb-10">
          Select the options that best describe you. Don't worry, you can
          explore other options later.
        </p>
      </div>
      <div className="container flex flex-col justify-center items-center p-5 mb-5 sm:flex-row">
        <div className="card ml-20 mr-20 mb-5 h-80 w-full p-10 border border-gray-300 rounded-lg sm:ml-32 sm:mr-20 sm:h-80 sm:w-96 sm:p-10 sm:mb-0">
          <div className="img-container h-32 w-52 mb-10 ml-8">
            <img
              src="https://plus.unsplash.com/premium_photo-1664297551940-224d6fb69aa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWF0ZWQlMjBkZXNrJTIwYXJ0fGVufDB8fDB8fHww"
              alt=""
            />
          </div>
          <h2 className="font-bold text-xl text-center mb-3">
            I'm a designer looking to share my work
          </h2>
          <div className="flex justify-center items-center">
            <input className="check h-5 w-5 mb-5" type="checkbox" onClick={handleCheckbox1} checked={isChecked1}/>
          </div>
        </div>
        <div className="card ml-20 mr-20 mb-5 h-80 w-full p-10 border border-gray-300 rounded-lg sm:ml-32 sm:mr-20 sm:h-80 sm:w-96 sm:p-10 sm:mb-0 ">
          <div className="img-container h-32 w-52 mb-10 ml-8">
            <img
              src="https://images.unsplash.com/photo-1635350736475-c8cef4b21906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlyaW5nfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
          <h2 className="font-bold text-xl text-center mb-3">
            I'm looking to hire a designer
          </h2>
          <div className="flex justify-center items-center">
            <input className="check h-5 w-5 mb-5" type="checkbox" onClick={handleCheckbox2} checked={isChecked2}/>
          </div>
        </div>
        <div className="card ml-20 mr-20 h-80 w-full p-10 border border-gray-300 rounded-lg sm:ml-32 sm:mr-20 sm:h-80 sm:w-96 sm:p-10 ">
          <div className="img-container h-32 w-52 mb-10 ml-8">
            <img
              src="https://images.unsplash.com/photo-1446511437394-36cdff3ae1b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGxvb2tpbmclMjBmb3IlMjBpbnNwaXJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <h2 className="font-bold text-xl text-center mb-3">
            I'm looking for design inspiration
          </h2>
          <div className="flex justify-center items-center">
            <input className="check h-5 w-5 mb-5" type="checkbox" onClick={handleCheckbox3} checked={isChecked3}/>
          </div>
        </div>
      </div>
      {!isHidden && (
        <div id="hiddenDiv" className="flex justify-center items-center mb-5 ">
        
        <h3 className="text-lg font-bold">Anything else? You can select multiple</h3>
      </div>
      )}
      {error &&(<div id="hiddenDiv" className="flex justify-center items-center mb-5 "><p className="text-red-500 ">{error}</p></div>) }
      
          <div className="flex justify-center items-center mb-2 sm:mb-0">
          <Button
          className={
            "bg-pink-500 w-48 text-white font-semibold py-2  rounded-lg "
          }
          type="button"
          onClick={()=>handleAccount()}
        >Finish</Button>
          </div>
    </div>
  );
};

export default UserGoal;
