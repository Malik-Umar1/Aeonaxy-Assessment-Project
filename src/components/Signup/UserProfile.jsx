import React, { useState } from "react";
import Button from "../Button";

const UserProfile = ({setStep}) => {
  const [location, setLocation] = useState("");
  const [error, setError] = useState("")
  const handleAccount = ()=>{
    // setStep ((prev)=>prev+1)
    if(!location.trim()){
       setError("Location is required ")
    }else{
      setStep ((prev)=>prev+1)
    }
  };


  const [avatar, setAvatar] = useState(null);

  const handleAvatarSelection = (event) => {
    const selectedAvatar = event.target.files[0];
    setAvatar(URL.createObjectURL(selectedAvatar));
  };
  const handleButtonClick = () => {
    document.getElementById("avatar-input").click();
  };
  

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div>
      <div className="logo-container w-full ml-10 mb-5 sm:mb-16">
        <img
          className="h-20 w-30 bg-[#F2D184]"
          src="https://logowik.com/content/uploads/images/dribbble.jpg"
        ></img>
      </div>
      <div className="heading ml-8 sm:ml-96">
        <h1 className="text-4xl font-bold mb-6">
          Welcome! Let's create your profile
        </h1>
        <p className="text-lg mb-10">
          Let others get to know you better! You can do these later
        </p>
      </div>

      <div className="avatar ml-8 mb-10 sm:ml-96 sm:mb-16">
        <h3 className="text-2xl font-bold mb-8">Add an avatar</h3>
        <div className="avatar-option flex">
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: "#333",
              textAlign: "center",
              lineHeight: "100px",
            }}
          >
            <label htmlFor="avatar-input">
              <img
                src={avatar}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  position: "absolute",
                  objectFit: "cover",
                }}
              />
              <span className="text-3xl" role="img" aria-label="camera icon">
                📷
              </span>
            </label>
            <input
              type="file"
              id="avatar-input"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleAvatarSelection}
            />
          </div>
          <button
            onClick={handleButtonClick}
            className="ml-10 font-semibold py-2 px-4 rounded border h-12"
          >
            Choose Image
          </button>
        </div>
      </div>

      <div className="ml-8 mb-2 sm:ml-96">
        <h3 className="text-2xl font-bold mb-8">Add your location</h3>
        <input
          type="text"
          className=" outline-none border-b-2 border-gray-300 w-1/2 mb-5"
          id="location"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter a location"
        />{" "}
        {error && <p className="text-red-500">{error}</p>}
        <br />
        <Button
          className={
            "bg-pink-500 w-1/5 text-white font-semibold py-2 px-4 rounded "
          }
          type="button"
          onClick={()=>handleAccount()}
        >Next</Button>
      </div>
    </div>
  );
};

export default UserProfile;
