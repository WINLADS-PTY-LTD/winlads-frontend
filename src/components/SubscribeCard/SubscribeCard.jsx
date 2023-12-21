import React, { useEffect, useState } from "react";
import Blue from "../../assets/images/subscribers/blue.png";
import Green from "../../assets/images/subscribers/green.png";
import Yellow from "../../assets/images/subscribers/yellow.png";
import Red from "../../assets/images/subscribers/red.png";
import wallet from "../../assets/images/rafflesImages/wallet.png";
import savelotto from "../../assets/images/rafflesImages/savelotto.png";
import bitcoin from "../../assets/images/rafflesImages/bitcoin.png";
import { ImCancelCircle } from "react-icons/im";
import { IoCloseSharp } from "react-icons/io5";
import Visa from "../../assets/images/subcription/visa.png";
import BitCoin from "../../assets/images/subcription/bitcoin.png";
import Save from "../../assets/images/subcription/save.png";
import GreenCorrect from "../../assets/images/subcription/Icons.png";

const PaymentModal = ({ handleClose, show }) => {
  return (
    <div className={show ? "block" : "hidden"}>
      <section className="modal-main">
        {/* Your payment method form or content goes here */}
        text
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

function SubscribeCard({
  name,
  price,
  desc1,
  desc2,
  desc3,
  bgColor,
  gradientFrom,
  gradientTo,
  textColor,
  borderColor,
  buttonColor,
  buttonText,
  buttonHoverText,
  buttonHover,
  hoverButtonBorder,
  raffleCount,
  onButtonClick,
  cardBorderColor,
  subId,
  descList = [],
  mPlanId,
  qPlanId,
  yPlanId,
  planeId
}) {
  const handleChooseButton = () => {
    onButtonClick();
  
  };

  return (
    <div
      className={`bg-${bgColor} bg-gradient-to-r relative ${gradientFrom} ${gradientTo} border border-solid border-${cardBorderColor} text-${textColor} py-8 px-8 special:py-8 2xl:py-8 rounded-[40px] flex flex-col space-y-6 special:space-y-8 2xl:space-y-8 cursor-pointer`}
    >
      <p className="text-sm special:text-xl 2xl:text-lg">{name}&nbsp;Tier</p>

      <p className="font-semibold text-center text-2xl special:text-6xl 2xl:text-3xl">
        {raffleCount} <span className="uppercase"> {subId} free entries</span>
      </p>
      <div className="flex justify-center flex-col space-y-4 special:space-y-6 2xl:space-y-4 pb-16">
        {descList[0].map((disc, key) => (
          <div
            key={key}
            className="flex flex-row gap-2 special:gap-4 2xl:gap-4 items-center"
          >
            <img
              src={GreenCorrect}
              alt=""
              className="w-5 h-5 special:h-7 special:w-7 2xl:h-5 2xl:w-5"
            />
            <p className="text-xs special:text-lg 2xl:text-md">{disc}</p>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <div className="flex justify-center pb-4 px-12">
          <button
            type="button"
            className={`bg-${buttonColor} font-semibold uppercase w-full  border-2 border-transparent hover:border-2 rounded-full hover:border-${hoverButtonBorder} text-black py-2 px-8 special:py-4 special:px-12 2xl:px-10 text-xs special:text-lg 2xl:text-sm mt-4 mb-2 hover:bg-${buttonHover}`}
            onClick={handleChooseButton}
            // disabled={subId ? true : false}
          >
            <p className={`text-${buttonText}`}>{planeId == mPlanId || planeId == qPlanId || planeId == yPlanId ? "selected" : "choose plans"}</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubscribeCard;
