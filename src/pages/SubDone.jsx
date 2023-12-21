import React from 'react'
import { useNavigate } from 'react-router-dom';
import Correct from "../assets/images/payment_success/success.png"
import Bg from "../assets/images/payment_success/bg.png";
import {successAnimation} from "../animation/animation"
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const SubDone = () => {
  // const history = useHistory();
  const navigate = useNavigate();

  const controls = useAnimation();

  useEffect(() => {
    controls.start(successAnimation.animate);

    const timeoutId = setTimeout(() => {
      navigate('/dashboard');
    }, 4000);

    return () => clearTimeout(timeoutId);


  }, [controls]);
  

 return (
    <div
      className="flex"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >

      <div className="flex flex-col xl:mx-10 mx-5 flex-1 pt-4  items-center justify-center ">
        <div className="flex flex-col justify-center items-center container xl:gap-10 lg:gap-8 md:gap-6 sm:gap-5 gap-5">
          <div className=" flex items-center justify-center">
            <motion.img
              src={Correct}
              alt=""
              className="xl:w-9/12 lg:w-8/12 md:w-6/12 sm:w-5/12 w-3/12"
              initial="initial"
              animate={controls}
              transition={successAnimation.transition}
            />
          </div>
          <p className="font-bold  xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
            Payment Successful !
          </p>
        </div>
      </div>
    </div>
  );
}

export default SubDone