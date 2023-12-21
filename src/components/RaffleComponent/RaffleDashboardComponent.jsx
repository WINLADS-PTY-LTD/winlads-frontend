import { Link } from "react-router-dom";
import "./Raffle.css";
import { useEffect, useState } from "react";
import CatJeep from "../../assets/images/rafflesImages/newJeep.png";

function RaffleDashboardComponent({ bgColor, id, name, type, img, date }) {

  return (
    <>
      <Link to={`/giveaway/${id}`} state={{name, bgColor}} className="w-full">
        <div
          className={`
          } flex flex-row justify-between pr-2 rounded-3xl 2xl:rounded-[30px] special:rounded-[40px] w-full py-2 shadow-lg hover:transition hover:duration-300 hover:ease-in-out hover:opacity-75 hover:opacity-100}`}
          style={{ backgroundColor: bgColor }}
        >
          <img
            src={CatJeep}
            alt=""
            className="flex w-36 special:w-96 2xl:w-48"
          />
          <div className="flex flex-col space-y-4">
            <div className="flex justify-end">
              <img
                src={img}
                alt=""
                className="2xl:w-12 xl:w-8 w-8 special:w-16"
              />
              {/* <p>{type}</p> */}
            </div>
            <div className="flex text-end flex-col z-10 pr-2 items-center space-y-2 2xl:space-y-4 special:space-y-4">
              <p className="text-white font-bold xl:text-[12px] text-xs special:text-4xl 2xl:text-[16px] text-center">
                {name}
              </p>
              <p className="text-[10px] text-white special:text-xl 2xl:text-[10px]">
                {date}
              </p>
            </div>
            <div className="grid grid-cols-3 px-5 items-center">
              <div className="col-span-2 flex justify-end gap-2 z-10"></div>
              {/* <div className="col-span-1 justify-end flex">
                <GoQuestion />
              </div> */}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default RaffleDashboardComponent;
