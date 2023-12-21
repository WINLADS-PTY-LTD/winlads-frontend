import { useEffect, useState } from "react";
import SideNav from "../../components/SideNav/SideNav";
import liveBackground from "../../assets/images/rafflesImages/LiveBackground.png";
import "./liveRaffle.css";
import { validateCurrentUser } from "../../utils/validateuser";
import { useNavigate } from "react-router-dom";

function LiveRaffle() {
  const [valUser, setValUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    currentUserValidation();
  }, []);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK");
      setValUser(validator.user);
    } else {
      navigate("/login");
    }
  };


  // const currentDate = new Date();
  // const formattedDate = currentDate.toLocaleString();
  return (
    <div
      className="flex "
      style={{
        backgroundImage: `url(${liveBackground})`,
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <SideNav screen="screen" name={valUser.name} userId={valUser.uid}  />

      <div className="flex flex-col xl:mx-10 mx-5 flex-1 pt-4">
        <div className="flex flex-row justify-between items-center">
          {/* <div className="flex items-center justify-center flex-col">
            <img src={max} alt="" className="w-24 special:w-64 2xl:w-48" />
            <div className="text-white text-3xl font-extrabold special:text-5xl 2xl:text-4xl">Lotto MAX</div>
          </div> */}
          {/* <div className="text-white flex flex-row gap-1 special:gap-2 2xl:gap-2">
            <p className="uppercase text-lg font-semibold 2xl:text-3xl special:text-4xl">live</p>
            <span className="relative flex h-1.5 w-1.5 special:h-3.5 special:w-3.5 2xl:h-2.5 2xl:w-2.5 flex-col justify-start items-start">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 special:h-3.5 special:w-3.5 2xl:h-2.5 2xl:w-2.5 bg-red-600"></span>
            </span>
          </div> */}
        </div>

        {/* <div className="bottom-10 left-0 right-0 absolute ml-12 xl:ml-0 4xl:ml-0">
          <div className="flex justify-center flex-col items-center space-y-4 special:space-y-8 2xl:space-y-6">
            <div className="flex flex-row gap-4 2xl:gap-6 special:gap-8 items-center">
              <img src={soundicon} alt="" className="w-10 h-10 2xl:w-24 2xl:h-24 special:w-36 special:h-36" />
              <img src={displayicon} alt="" className="w-10 h-10 2xl:w-24 2xl:h-24 special:w-36 special:h-36" />
              <img src={cutIcon} alt="" className="w-10 h-10 2xl:w-24 2xl:h-24 special:w-36 special:h-36" />
            </div>
            <div className="">
              <div
                className="rounded-full px-6 py-3 special:px-12 special:py-7 2xl:px-9 2xl:py-5"
                style={{
                  background:
                    "linear-gradient(98.92deg, #37DBFF 45%, #00529D 83%)",
                }}
              >
                <div className="flex flex-col space-y-1 2xl:space-y-3 special:space-y-5">
                  <div className="flex flex-row items-center gap-5">
                    <div className="text-white font-bold rounded-full bg-[#157D98] h-9 w-9 special:w-24 special:h-24 special:text-4xl 2xl:w-16 2xl:h-16 2xl:text-2xl items-center flex justify-center">
                      R
                    </div>
                    <div className="text-black font-bold h-9 w-9 special:w-24 special:h-24 special:text-4xl 2xl:w-16 2xl:h-16 2xl:text-2xl rounded-full bg-[#D6F6FF] items-center flex justify-center">
                      14
                    </div>
                    <div className="text-black font-bold h-9 w-9 special:w-24 special:h-24 special:text-4xl 2xl:w-16 2xl:h-16 2xl:text-2xl rounded-full bg-[#D6F6FF] items-center flex justify-center">
                      34
                    </div>
                    <div className="text-black font-bold h-9 w-9 special:w-24 special:h-24 special:text-4xl 2xl:w-16 2xl:h-16 2xl:text-2xl rounded-full bg-[#D6F6FF] items-center flex justify-center">
                      ?
                    </div>
                    <div className="text-black font-bold h-9 w-9 special:w-24 special:h-24 special:text-4xl 2xl:w-16 2xl:h-16 2xl:text-2xl rounded-full bg-[#D6F6FF] items-center flex justify-center">
                      ?
                    </div>
                  </div>
                  <p className="xl:text-sm text-xs special:text-xl 2xl:text-lg text-center font-bold text-black">
                    Brisko - 2042 | 2023-SEP-17 TUESDAY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default LiveRaffle;

/* <div className="	">
          <div className="bg-gradient-to-br from-[#37DBFF] to-[#00529D] p-4 rounded-2xl">
            <div className="">
              <div className="flex justify-center items-center gap-4 px-3 py-3 ">
                <input
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className=" bg-[#157D98] text-white text-sm p-1  w-6 cursor-not-allowed  rounded-full flex justify-center items-center"
                  value=" R "
                  disabled
                  readOnly
                />
                <input
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className=" bg-[#D6F6FF] text-black text-sm p-1  w-6 cursor-not-allowed rounded-full"
                  value="14"
                  disabled
                  readOnly
                />
                <input
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className=" bg-[#D6F6FF] text-black text-sm p-1  w-6 cursor-not-allowed rounded-full "
                  value="34"
                  disabled
                  readOnly
                />
                <input
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className=" bg-[#D6F6FF] text-black text-sm p-1  w-6 cursor-not-allowed  rounded-full"
                  value="38"
                  disabled
                  readOnly
                />
                <input
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className=" bg-[#D6F6FF] text-black text-sm p-1  w-6 cursor-not-allowed  rounded-full"
                  value="78"
                  disabled
                  readOnly
                />
              </div>
              <p className="text-black font-subscription flex justify-center items-center  mb-3 ">
                {formattedDate}
              </p>
            </div>
          </div>
        </div> */
