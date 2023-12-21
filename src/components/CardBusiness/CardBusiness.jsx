import { useEffect, useState } from "react";
import winladsCard from "../../assets/images/BusinessCard/winladsCard.png";
import Signal from "../../assets/images/BusinessCard/Signal.png";
import png2 from "../../assets/images/BusinessCard/png2.png";
import Icon from "../../assets/images/BusinessCard/icon.png";
import Rectangle from "../../assets/images/BusinessCard/Rectangle.png";
import axios from "axios";
import { validateCurrentUser } from "../../utils/validateuser";
import { useNavigate } from "react-router-dom";
import { FiLoader } from "react-icons/fi";

const BCard = () => {
  const [bCard, setBCard] = useState("");
  const [valUser, setValUser] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBCard();
    currentUserValidation();
  }, [bCard, valUser]);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      setValUser(validator.user);
    } else {
      navigate("/login");
    }
  };

  const getBCard = async () => {
    await axios
      .get(
        `${import.meta.env.VITE_SERVER_API}/getBusinessCard?uid=${valUser.uid}`
      )
      .then((response) => {
        console.log(response?.data?.data, "img")
        setBCard(response?.data?.data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col space-y-4 xl:mx-20 md:mx-20">
      {loading ? (
        <div className="flex justify-center">
          <FiLoader className="w-9 h-9 2xl:w-12 2xl:h-12 special:w-18 special:h-18 animate-spin" />
        </div>
      ) : (
        <>
          <div className="bg-black rounded-[35px] px-4 special:px-8 2xl:px-6 justify-between py-4 special:py-8 2xl:py-4 cursor-pointer">
            <div className="flex flex-row justify-between item-center">
              <div className="col-span-8">
                <img
                  src={winladsCard}
                  className="w-16 2xl:w-24 special:w-36 md:w-36"
                  alt="Winlads Card"
                />
              </div>

              <div className="xl:space-y-2 space-y-1 px-2 col-span-4">
                <img
                  src={Signal}
                  className="w-4 special:w-8 md:w-8"
                  alt="Signal"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="mx-20">
                <img src={png2} alt="" className="w-full" />
              </div>

              <span className="text-blue text-[8px] text-center md:text-sm xl:text-[8px] 2xl:text-xs special:text-xl">
                "Connecting hearts, uplifting lives: Our People-centric
                giveaways"
              </span>
            </div>
          </div>
          <div className="bg-black rounded-[35px] px-4 special:px-8 2xl:px-6 item-center py-2 special:py-4 2xl:py-4 cursor-pointer">
            <div className="flex flex-row justify-between item-center">
              <div className="col-span-12">
                <img
                  src={Icon}
                  className="w-8 2xl:w-16 special:w-24"
                  alt="Winlads Card"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex justify-center">
                <img
                  src={bCard.image}
                  className="w-24 xl:w-36 2xl:w-48 special:w-96 md:w-48"
                  alt=""
                />
              </div>

              <span className="text-blue text-center md:text-sm xl:text-sm 2xl:text-xl special:text-2xl">
                giveaways@winlads.com.au
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BCard;
