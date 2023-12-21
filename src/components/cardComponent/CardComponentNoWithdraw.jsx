import React, { useEffect, useState } from "react";
import Ticket from "../../assets/images/cardComponent/ticket.png";
import Money from "../../assets/images/cardComponent/money.png";
import { validateCurrentUser } from "../../utils/validateuser";
import axios from "axios";
import { FiLoader } from "react-icons/fi";

const CardComponentNoWithdraw = () => {
  const [valUser, setValUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadingWallet, loadingSetWallet] = useState(true);
  const [wallet, setWallet] = useState([]);

  useEffect(() => {
    currentUserValidation();
  }, []);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      setValUser(validator.user);
      getTransactionsFunction();
    } else {
      setLoading(false);
    }
  };

  const getTransactionsFunction = async () => {
    await axios
      .get(
        `${import.meta.env.VITE_SERVER_API}/getTransactions?uid=${valUser.uid}`
      )
      .then((response) => {
        console.log(response.data.data);
        setWallet(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const dateObject = new Date(valUser.transaction?.endfrom);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = dateObject.toLocaleString("en-US", options);

  return (
    <div className="bg-white border-gray-300 border border-solid rounded-xl">
      {loading ? (
        <div className="flex justify-center py-12">
          <FiLoader className="w-9 h-9 2xl:w-9 2xl:h-9 special:w-18 special:h-18 animate-spin" />
        </div>
      ) : (
        <div className="flex flex-col p-2 space-y-4 2xl:space-y-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-1 text-black">
              <p className="2xl:text-lg font-semibold capitalize">
                your balance
              </p>
              <p className="font-semibold">${valUser.balance || "0.00"}</p>
            </div>
            <div className="flex flex-col space-x-1">
              <div className="bg-black rounded-full py-1 text-center px-2">
                <p
                  className={`text-${
                    valUser.subscripton?.name == "Black"
                      ? "white"
                      : valUser.subscripton?.color || "white"
                  } 2xl:text-lg capitalize`}
                >
                  {valUser.subscripton?.name || "no plane"}
                </p>
              </div>
              <p className="text-black text-sm">{formattedDate || ""}</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="bg-[#008767] rounded-l-xl flex flex-row flex-1 py-4 md:justify-center xl:justify-center justify-between md:gap-6 xl:gap-6 px-2">
              <img src={Money} alt="" className="" />
              <div className="flex flex-col text-white">
                <p className="font-semibold 2xl:text-xl special:text-2xl text-lg">
                  ${wallet.earning || "0.00"}
                </p>
                <p className="capitalize text-sm">Earning</p>
              </div>
            </div>
            <div className="bg-[#CBAD11] rounded-r-xl flex flex-row flex-1 py-4 md:justify-center xl:justify-center justify-between md:gap-6 xl:gap-6 px-2">
              <img src={Ticket} alt="" />
              <div className="flex flex-col text-white">
                <p className="font-semibold 2xl:text-xl special:text-2xl text-lg">
                  ${wallet.purchase || "0.00"}
                </p>
                <p className="capitalize text-sm">Purchase</p>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default CardComponentNoWithdraw;
