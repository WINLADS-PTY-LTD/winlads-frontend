import RaffleDashboardComponent from "../../components/RaffleComponent/RaffleDashboardComponent";
import SideNav from "../../components/SideNav/SideNav";
import MainCar from "../../assets/images/MainCar.png";
import TopNav from "../../components/TopNav/TopNav";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { validateCurrentUser } from "../../utils/validateuser";
import axios from "axios";
import { motion } from "framer-motion";
import six from "../../assets/images/rafflesImages/six4.png";
import { GoQuestion } from "react-icons/go";
import SearchField from "../../components/SearchField/SearchField";
import User from "../../assets/images/user4.png";
import BG from "../../assets/images/HomesideBg.png";
import bgCar from "../../assets/images/hiddenCar.png";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase.config.js";
import { FiLoader } from "react-icons/fi";
import CatJeep from "../../assets/images/rafflesImages/newJeep.png";
import MyEntriesButton from "../../components/MyEntries/MyEntriesButton.jsx";

export const bgStyle = {
  backgroundImage: `url(${bgCar})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
};

function RaffleDashbord() {
  const [raffles, setRaffles] = useState([]);
  const [value, onChange] = useState(new Date());
  const [valUser, setValUser] = useState({});
  const [userImage, setUserImage] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    currentUserValidation();
    getRaffles();
  }, []);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK");
      setValUser(validator.user);
      getProfileImage(validator.user.image);
    } else {
      navigate("/login");
    }
  };

  const getRaffles = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/raffles`)
      .then((response) => {
        console.log(response.data.data, "data");
        setRaffles(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  function getProfileImage(img) {
    getDownloadURL(ref(storage, img))
      .then((url) => {
        setUserImage(url);
      })
      .catch((error) => {
        // Handle any errors
      });
  }

  return (
    <>
      <div className="flex flex-row justify-between min-h-screen">
        <div className="flex-1">
          {/* home-content */}
          <div className="flex flex-col xl:px-6 px-4 special:px-12 special:space-y-24 space-y-8">
            <div className="xl:flex xl:flex-row flex-col xl:justify-between xl:gap-4 space-y-4 xl:space-y-0">
              <img
                src={BG}
                alt=""
                className="absolute right-0 -z-10 top-10 w-72 xl:w-96 md:w-96 special:w-1/4 2xl:w-1/4 special:top-40 opacity-60"
              />
              {/* left side */}
              <div className="flex flex-col flex-1">
                <div className="block xl:hidden space-y-4">
                  <div className="bg-black rounded-b-3xl py-4">
                    <TopNav textColor={"white"} />
                    <div className="pt-10">
                      <img className="" src={MainCar} alt="main" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col 2xl:space-y-8 space-y-6 special:space-y-12">
                  <div className="mt-4 xl:pt-0 pb-4 xl:pb-0">
                    <SearchField />
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col space-y-2 special:space-y-8 flex-1">
                      <div className="flex flex-row items-center gap-2 special:gap-4">
                        {userImage ? (
                          <img
                            src={userImage}
                            className="w-12 h-12 special:w-36 special:h-36 rounded-full"
                            alt="user"
                          />
                        ) : (
                          <img
                            src={User}
                            alt=""
                            className="w-12 h-12 special:w-36 special:h-36"
                          />
                        )}

                        <div className="flex flex-col space-y-1">
                          <p className="font-bold special:text-6xl">
                            Earning Balance
                          </p>
                          <p className="special:text-6xl">
                            ${valUser.balance || "0.00"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col xl:flex-row md:flex-row gap-2 justify-between items-center">
                    <div className="flex-1 flex">
                      <iframe
                        title="YouTube Video"
                        src="https://www.youtube.com/watch?v=y6qxTSuf91k"
                        frameBorder="0"
                        className=""
                      ></iframe>
                    </div>
                    <Link to="/live" className="flex flex-1">
                      <div className="bg-[#D5B511] hover:bg-[#D5B511]/75 flex-col rounded-3xl 2xl:rounded-[30px] special:rounded-[40px] px-2 special:px-4 py-1 space-y-2 shadow-lg">
                        <div className="flex flex-row justify-between items-center">
                          <img
                            src={CatJeep}
                            alt=""
                            className="flex w-36 special:w-96 2xl:w-64"
                          />

                          <div className="flex flex-col space-y-4">
                            <div className="justify-end flex">
                              <div className="flex flex-col">
                                <img
                                  src={six}
                                  alt=""
                                  className="w-12 special:w-36 2xl:w-16"
                                />

                                <div className="flex-row flex justify-end gap-1">
                                  <p className="text-white text-[10px] uppercase 2xl:text-sm special:text-lg">
                                    live
                                  </p>
                                  <span className="relative flex h-1.5 w-1.5 special:h-3.5 special:w-3.5 2xl:h-2.5 2xl:w-2.5 flex-col justify-start items-start">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 special:h-3.5 special:w-3.5 2xl:h-2.5 2xl:w-2.5 bg-red-600"></span>
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="flex text-end flex-col z-10 pr-2 items-center space-y-1 special:space-y-2">
                              <p className="text-white font-bold xl:text-[12px] text-xs special:text-4xl 2xl:text-[16px] text-center">
                                1991 Land Rover Defender 110
                              </p>
                              <p className="text-[10px] text-white special:text-xl 2xl:text-[10px]">
                                2023-SEP-19 TUESDAY
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 px-5 items-center">
                          <div className="col-span-2 flex justify-end gap-2 z-10">
                            <p className="text-[#4FC8E8] font-bold">R</p>
                            <p className="text-white font-bold">14</p>
                            <p className="text-white font-bold">34</p>
                            <p className="text-white font-bold">38</p>
                            <p className="text-white font-bold">76</p>
                          </div>
                          <div className="col-span-1 justify-end flex">
                            <GoQuestion />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="flex xl:flex-row md:flex-row flex-col xl:justify-between gap-2">
                  <div className="xl:flex md:flex items-end flex-1 w-full"></div>
                </div>
              </div>

              {/* right-side */}
              <div className="flex-col flex-1 space-y-4 hidden xl:flex">
                <div className="bg-black rounded-b-[50px] py-4">
                  <TopNav textColor={"white"} />
                  <div className="pt-10">
                    <motion.img
                      initial={{ x: 80, opacity: 0 }} // Initial position and opacity (hidden)
                      animate={{ x: 0, opacity: 1 }} // Move and fade in when in view
                      transition={{ type: "tween", duration: 1, delay: 1 }}
                      className="w-3/4"
                      src={MainCar}
                      alt="main"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2 special:space-y-6 2xl:space-y-4">
              <p className="font-semibold text-lg xl:text-xl 2xl:text-3xl special:text-4xl">
                Giveaway Categories
              </p>
              {loading ? (
                <div className="flex justify-center">
                  <FiLoader className="w-9 h-9 2xl:w-12 2xl:h-12 special:w-18 special:h-18 animate-spin" />
                </div>
              ) : raffles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 2xl:gap-4 special:gap-4">
                  {raffles.map((raffle, key) => (
                    <RaffleDashboardComponent
                      key={key}
                      bgColor={raffle.color}
                      id={raffle._id}
                      name={raffle.name}
                      type={raffle.type}
                      img={raffle.image}
                      date={raffle.date}
                    />
                  ))}
                </div>
              ) : (
                <p className="flex justify-center font-semibold 2xl:text-2xl xl:text-xl special:text-4xl text-lg">
                  No Giveaways
                </p>
              )}
            </div>
          </div>
        </div>
        <MyEntriesButton/>
      </div>
    </>
  );
}

export default RaffleDashbord;
