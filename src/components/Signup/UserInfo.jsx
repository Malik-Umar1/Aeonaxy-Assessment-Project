import React, { useState } from "react";
import Button from "../Button";

const UserInfo = ({ setStep }) => {
  // const handleCreateAccount = (formData) => {
   
  // };

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    agreement: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    if (Object.keys(errors).length === 0) {   // this converts the error object into an array of errors  and checks for any errors my checking its length
      setStep((prev) => prev + 1);
    } else {
      setErrors(errors);
    }
  };

  const validate = (data) => {
    const errors = {};
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    if (!data.username.trim()) {
      errors.username = "Username is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)){
      errors.email = "Not a valid email";
    }
    if (!data.password.trim()) {
      errors.password = "Password is required";
    }
    if (!data.agreement) {
      errors.agreement = "You must agree to terms";
    }
    return errors;
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="w-full  h-full p-10 bg-[#F2D184] sm:min-w-1/2">
        <div className="logo-container mt-0 md:mt-5 mb-5 md:mb-7">
          <img
            className="h-20 w-30 bg-[#F2D184]"
            src="https://logowik.com/content/uploads/images/dribbble.jpg"
          ></img>
        </div>

        <div className="heading max-w-23 text-3xl mb-10">
          <h2>Discover the world's top Designers and Creatives</h2>
        </div>
        <div className="img-container mb-10">
          <img
            className="h-96 w-110"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <span>
          Art by{" "}
          <a href="#" className="text-[red]">
            Peter Tarka
          </a>
        </span>
      </div>

      <div className="right px-5 w-full py-0 sm:p-0 sm:px-64 sm:py-20">
        <div className="max-w-64 ml-44 mt-12 mb-12 sm:min-w-44 sm:ml-51 sm:mb-10 absolute top-1 left-3/4">
          <h3 className="text-sm w-full font-semibold">
            Already a member?{" "}
            <a href="#" className="text-[#4B3F9A]">
              Sign in
            </a>
          </h3>
        </div>
        <div className="form-container mt-12">
          <div className="heading">
            <h2 className="block text-gray-700 text-4xl font-bold mb-10 md:mb-20 ">
              Sign up to Dribble
            </h2>
          </div>
          <form
            className="bg-white  rounded px-8 pt-6 pb-8 mb-4 w-550 "
            id="myForm"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <div className="flex justify-between">
                <div className="w-1/2 mr-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="appearance-none border rounded bg-[#F3F3F3] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                    id="name"
                    form="myForm"
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                  />
                  {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>
                <div className="w-1/2 ml-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="appearance-none border rounded w-full bg-[#F3F3F3] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    form="myForm"
                    name="username"
                    onChange={handleChange}
                    type="text"
                    placeholder="Username"
                  />
                  {errors.username && <p className="text-red-500">{errors.username}</p>}
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className=" appearance-none border rounded w-full py-2 bg-[#F3F3F3] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                form="myForm"
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Email"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className=" appearance-none border rounded w-full py-2 px-3 bg-[#F3F3F3] text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                form="myForm"
                type="password"
                placeholder="6+ characters  "
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
            {errors.agreement && <p className="text-red-500">{errors.agreement}</p>}
            <div className="agreement flex max-w-full mb-8">
              <input
                className="h-5 w-5 mb-5 "
                type="checkbox"
                form="myForm"
                id="agreement"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
              />
              
              <p className="max-w-80 text-sm ml-3 font-medium">
                Creating an account means you're okay with our{" "}
                <span className="text-[#4B3F9A]">Terms of Service</span>,
                <span className="text-[#4B3F9A]">Privacy Policy</span> and our
                default{" "}
                <span className="text-[#4B3F9A]">Notification Settings</span>
              </p>
              
            </div>
            <div className="flex items-center justify-between">
              <Button
                className={
                  "bg-pink-500 w-1/2 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                }
                type="submit"
              >
                Create Account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
