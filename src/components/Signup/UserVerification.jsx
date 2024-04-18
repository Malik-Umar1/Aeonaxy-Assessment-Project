import React from "react";
import SearchBar from "../SearchBar";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook }from "@fortawesome/free-brands-svg-icons";
import { faInstagram }from "@fortawesome/free-brands-svg-icons";
import { faPinterest }from "@fortawesome/free-brands-svg-icons";
import SidebarMenu from "../SidebarMenu";

const UserVerification = () => {
  return (
    <div>
      <div className="logo-container ml-5 mb-8 md:mb-16 mt-5 md:mt-0 flex justify-between items-center">
        <div className="flex md:gap-5">
          
            <a href="#" className="hidden md:flex">
              {" "}
              <img
                className="h-32 w-32 md:h-20 md:w-30 bg-[#F2D184]"
                src="https://logowik.com/content/uploads/images/dribbble.jpg"
              ></img>
            </a>
            
          <ul className="hidden gap-5 sm:flex">
          <li className="mt-7 font-semibold">
            <a href="#">Inspiration</a>
          </li>
          <li className="mt-7 font-semibold">
            <a href="#">Find Work</a>
          </li>
          <li className="mt-7 font-semibold">
            <a href="#">Learn Design</a>
          </li>
          <li className="mt-7 font-semibold">
            <a href="#">Go Pro</a>
          </li>
          <li className="mt-7 font-semibold">
            <a href="#">Hire Designers</a>
          </li>
          </ul>
          
        </div>
        <SidebarMenu/>
        <div className="flex  md:flex-row mr-1 ">
          <SearchBar />
          <Button
            className={
              "bg-pink-500  w-28 md:w-32 text-white  md:mt-0 font-semibold py-2  rounded-lg "
            }
            type="button"
          >
            Upload
          </Button>
        </div>
        
      </div>


      <div className="content text-center mt-3 md:mt-7 bgs ">
        <h2 className="text-3xl font-bold">Please verify your email... </h2>
        <FontAwesomeIcon
          icon={faEnvelopeCircleCheck}
          className="h-24 text-gray-400 mt-5"
        />
      </div>
      <div className="text-container min-w-32 px-10 md:px-96 text-center">
        <p className="mt-5 text-lg">
          Please verify your email address. We've sent a confirmation email to:{" "}
          <br />
        </p>
        <h2 className="font-bold mt-4 text-lg">account&refero.design</h2>
        <h2 className="mt-5 text-lg">
          Click the confirmation link in that email to begin using Dribble.
        </h2>
        <p className="mt-5 text-lg">
          Didn't receive the email? Check your spam folder, it may have been
          caught by a filter. If you still don't see it , you can{" "}
          <a href="#" className="text-lg text-[#DE4C85] font-semibold">
            resend the confirmation email
          </a>
          .
        </p>
        <h2 className="mt-5 text-lg">Wrong email address? <a href="#" className="text-lg text-[#DE4C85] font-semibold">Change it.</a></h2>
      </div>

      <footer className="mt-16 md:mt-36 flex flex-col md:flex-row bg-[#FAFAFA] border-b-2">
      <div className="logo-container ml-5 md:ml-10 mb-5 mr-8 md:mr-16">
        <img
          className="h-20 w-30 bg-[#F2D184]"
          src="https://logowik.com/content/uploads/images/dribbble.jpg"
        ></img>
         <div className="max-w-56 ">
        <p>Dribble is the world's leading community for creatives to share, grow, and get hired. </p>
      </div>
      <div className="icon-container ml-1 mt-5 flex">
      <FontAwesomeIcon icon={faBasketball} className="mr-2" style={{color: "#f70279",}} />
      <FontAwesomeIcon icon={faTwitter}  className="mr-2" />
      <FontAwesomeIcon icon={faFacebook}  className="mr-2" />
      <FontAwesomeIcon icon={faInstagram} className="mr-2"/>
      <FontAwesomeIcon icon={faPinterest} />
      </div>
      </div>
     
    
      <div className="quicklinks hidden md:flex  ml-5 md:ml-0 py-6">
        <div className="mr-3 md:mr-16">
          <ul>
            <li className="font-semibold mb-3">For Designers</li>
            <li className=" mb-3">Go Pro!</li>
            <li className=" mb-3">Explore Design work</li>
            <li className=" mb-3">Design Blog</li>
            <li className=" mb-3">Overtime Podcast</li>
            <li className=" mb-3">Playoffs</li>
            <li className=" mb-3">Weekly Warm-up</li>
            <li className=" mb-3">Refer a Friend</li>
            <li className=" mb-3">Code of Conduct</li>
          </ul>
        </div>
        <div className="mr-3 md:mr-16">
          <ul>
           <li className="font-semibold mb-3">Hire Designers</li>
           <li className=" mb-3">Post a Job Opening</li>
           <li className=" mb-3">Post freelance project</li>
           <li className=" mb-3">Search for designers</li>
           <li className="font-semibold mb-3">Brands</li>
           <li className=" mb-3">Advertise with us</li>
          </ul>
        </div>
        <div className="mr-3 md:mr-16">
          <ul>
            <li className="font-semibold mb-3">Company</li>
            <li className=" mb-3">About</li>
            <li className=" mb-3">Careers</li>
            <li className=" mb-3">Suppot</li>
            <li className=" mb-3">Media Kit</li>
            <li className=" mb-3">Testimonials</li>
            <li className=" mb-3">API</li>
            <li className=" mb-3">Terms of Service</li>
            <li className=" mb-3">Privacy Policy</li>
            <li className=" mb-3">Cookie Policy</li>
          </ul>
        </div>
        <div className="mr-3 md:mr-16">
          <ul>
s<li className="font-semibold mb-3">Directories</li>
            <li className=" mb-3">Design Jobs</li>
            <li className=" mb-3">Designers for hire</li>
            <li className=" mb-3">Freelancers for hire</li>
            <li className=" mb-3">Tags</li>
            <li className=" mb-3">Places</li>
            <li className="font-semibold mb-3">Design Assets</li>
            <li className=" mb-3">Dribble Marketplace</li>
            <li className=" mb-3">Creative Market </li>
            <li className=" mb-3">FontSpring</li>
            <li className=" mb-3">Font Squirrel</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-semibold mb-3">Design Resources</li>
            <li className=" mb-3">Freelancing</li>
            <li className=" mb-3">Design Hiring</li>
            <li className=" mb-3">Design Portfolio</li> 
            <li className=" mb-3">Design Education</li>
            <li className=" mb-3">Creative Process</li>
            <li className=" mb-3">Design Industry</li>
          </ul>
        </div>  
      </div>

<div class="quicklinks md:hidden flex flex-wrap py-6">
  <div class="mr-3 ml-5 md:ml-0 mb-6 md:mr-0 md:mb-0">
    <ul>
      <li class="font-semibold  mb-3">For Designers</li>
      <li class="mb-3">Go Pro!</li>
      <li class="mb-3">Explore Design work</li>
      <li class="mb-3">Design Blog</li>
      <li class="mb-3">Overtime Podcast</li>
      <li class="mb-3">Playoffs</li>
      <li class="mb-3">Weekly Warm-up</li>
      <li class="mb-3">Refer a Friend</li>
      <li class="mb-3">Code of Conduct</li>
    </ul>
  </div>
  <div class="mr-3 ml-5 md:ml-0 mb-6 md:mr-0 md:mb-0">
    <ul>
      <li class="font-semibold mb-3">Hire Designers</li>
      <li class="mb-3">Post a Job Opening</li>
      <li class="mb-3">Post freelance project</li>
      <li class="mb-3">Search for designers</li>
      <li class="font-semibold mb-3">Brands</li>
      <li class="mb-3">Advertise with us</li>
    </ul>
  </div>
  <div class="mr-3  ml-5 md:ml-0 mb-6 md:mr-0 md:mb-0">
    <ul>
      <li class="font-semibold mb-3">Company</li>
      <li class="mb-3">About</li>
      <li class="mb-3">Careers</li>
      <li class="mb-3">Support</li>
      <li class="mb-3">Media Kit</li>
      <li class="mb-3">Testimonials</li>
      <li class="mb-3">API</li>
      <li class="mb-3">Terms of Service</li>
      <li class="mb-3">Privacy Policy</li>
      <li class="mb-3">Cookie Policy</li>
    </ul>
  </div>
  <div class="mr-3 ml-5 md:ml-0 mb-6 md:mr-0 md:mb-0">
    <ul>
      <li class="font-semibold mb-3">Directories</li>
      <li class="mb-3">Design Jobs</li>
      <li class="mb-3">Designers for hire</li>
      <li class="mb-3">Freelancers for hire</li>
      <li class="mb-3">Tags</li>
      <li class="mb-3">Places</li>
      <li class="font-semibold mb-3">Design Assets</li>
      <li class="mb-3">Dribble Marketplace</li>
      <li class="mb-3">Creative Market</li>
      <li class="mb-3">FontSpring</li>
      <li class="mb-3">Font Squirrel</li>
    </ul>
  </div>
  <div class="mb-6  ml-5 md:ml-0 md:mb-0">
    <ul>
      <li class="font-semibold mb-3">Design Resources</li>
      <li class="mb-3">Freelancing</li>
      <li class="mb-3">Design Hiring</li>
      <li class="mb-3">Design Portfolio</li>
      <li class="mb-3">Design Education</li>
      <li class="mb-3">Creative Process</li>
      <li class="mb-3">Design Industry</li>
    </ul>
  </div>
</div>


      </footer>
      <div className="p-10 flex justify-between">
        &copy; 2024 Dribble. All rights reserved.
        <div>
        <span className="font-bold">20,501,853</span> shots dribbled <FontAwesomeIcon icon={faBasketball} style={{color: "#f70279",}} />
        </div>
       
      </div>

    </div>
  );
};

export default UserVerification;
