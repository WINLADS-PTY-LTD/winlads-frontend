import React, { useState, useEffect } from "react";
import SideNav from "../../components/SideNav/SideNav";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import GoldCard from "../../components/GoldCard/GoldCard";
import TopNav from "../../components/TopNav/TopNav";
import MainCar from "../../assets/images/MainCar.png";
import Transfer from "../../assets/images/transaction/transfer-outlined.png";
import Save from "../../assets/images/transaction/save-outlined.png";
import Slip from "../../assets/images/transaction/slip-outlined.png";
import "react-calendar/dist/Calendar.css";
import Profit from "../../assets/images/transaction/profit.png";
import ShoppingBag from "../../assets/images/transaction/shopping-bag.png";
import axios from "axios";
import { validateCurrentUser } from "../../utils/validateuser";
import Stripe from "../../assets/images/transaction/strip.png";
import Fund from "../../assets/images/transaction/fund.png";
import Sub from "../../assets/images/transaction/sub.png";
import Balance from "../../assets/images/transaction/balance.png";
import { FiLoader } from "react-icons/fi";
import FundTransferForm from "../../components/fundTransfer/FundTransferForm";
import BG from "../../assets/images/HomesideBg.png";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import MyEntriesButton from "../../components/MyEntries/MyEntriesButton";
import Line from "../../assets/images/line.png";

const Transaction = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();
  const [wallet, setWallet] = useState("");
  const [transactions, getTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [transactionsCom, setTransactionsCom] = useState(true);

  useEffect(() => {
    currentUserValidation();
  }, []);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      getEarning(validator.user.uid);
      getTransactionsFunction(validator.user.uid);
    } else {
      navigate("/login");

    }
  };

  const getEarning = async (valuid) => {
    await axios
      .get(
        `${import.meta.env.VITE_SERVER_API}/getPointBalances?uid=${valuid}`
      )
      .then((response) => {
        setWallet(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const getTransactionsFunction = async (valuid) => {
    await axios
      .get(
        `${import.meta.env.VITE_SERVER_API}/getTransactions?uid=${valuid}`
      )
      .then((response) => {
        console.log(response.data.data);
        getTransactions(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  const handleDateChange = (newDate) => {
    // Handle date change logic here
    setDate(newDate);
  };

  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chartOptions = {
    series: [1, 1, 1],
    options: {
      chart: {
        type: "donut",
      },
      legend: {
        position: "bottom",
      },
      labels: [
        "Card Transactions",
        "Digital Transactions",
        "Earning Transactions",
      ],
    },
  };

  const handleButtonClick = () => {
    setTransactionsCom(false);
  };

  const handleBackClick = () => {
    setTransactionsCom(true);
  };

  const chartWidth = windowWidth > 700 ? 400 : windowWidth - 80;

  return (
    <div>
      <div className="flex relative min-h-screen">
        <div className="xl:flex xl:flex-row flex-col xl:justify-between px-8 special:px-12 2xl:px-8 flex-1 xl:gap-8 special:gap-16 2xl:gap-12 space-y-4 xl:space-y-0">
          <img
            src={BG}
            alt=""
            className="absolute right-0 hidden md:block xl:block -z-10 top-10 w-72 xl:w-96 md:w-96 special:w-1/3 2xl:w-1/4 special:top-80 opacity-60 xl:top-60 2xl:top-80"
          />
          <div className="flex flex-col space-y-4 flex-1 special:space-y-8 2xl:space-y-6">
            {transactionsCom ? (
              <div className="block xl:hidden space-y-4">
                <div className="bg-black rounded-b-3xl py-4">
                  <TopNav textColor={"white"} />
                  <div className="pt-10">
                    <img className="w-full" src={MainCar} alt="main" />
                  </div>
                </div>

                <div className="flex md:flex-col flex-col space-y-2 md:space-y-0 gap-2">
                  <div className="w-full">
                    <GoldCard />
                  </div>
                  <div
                    className="bg-black rounded-2xl text-white text-center py-2 text-sm  hover:bg-black/75 cursor-pointer"
                    onClick={handleButtonClick}
                  >
                    <p>Fund transfer</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="block xl:hidden pb-12">
                <TopNav color="black" />
              </div>
            )}

            <div className="flex flex-col space-y-1">
              <p className="font-extrabold text-xl md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl">
                Your Balance
              </p>
              {/* <p className="font-extrabold md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl">
                ${valUser.balance}
              </p> */}
            </div>
            <div className="flex flex-row gap-2 xl:gap-2 md:gap-6 2xl:text-2xl special:text-3xl">
              <div className="bg-[#008767] justify-between items-center rounded-2xl gap-4 py-2 xl:px-3 md:px-4 flex flex-1 flex-row px-4 cursor-pointer hover:bg-green-600/75">
                <img
                  src={Balance}
                  alt=""
                  className="w-12 h-12 md:h-20 md:w-20 xl:h-16 xl:w-16 max-w-screen-sm"
                />
                <div className="flex flex-col">
                  <p className="text-white text-xl md:text-xl xl:text-3xl 2xl:text-2xl special:text-3xl">
                    ${wallet.balance || "0.00"}
                  </p>
                  <p className="text-white text-lg md:text-lg xl:text-xl 2xl:text-xl special:text-2xl">
                    Balance
                  </p>
                </div>
              </div>
              <div className="bg-[#52A0DF] justify-between items-center rounded-2xl gap-4 py-2 xl:px-4 md:px-4 flex flex-1 flex-row px-4 cursor-pointer hover:bg-[#52A0DF]/75">
                <img
                  src={Profit}
                  alt=""
                  className="w-12 h-12 md:h-20 md:w-20 xl:h-16 xl:w-16 max-w-screen-sm"
                />
                <div className="flex flex-col">
                  <p className="text-white text-xl md:text-xl xl:text-3xl 2xl:text-2xl special:text-3xl">
                    ${wallet.earning || "0.00"}
                  </p>
                  <p className="text-white text-lg md:text-lg xl:text-xl 2xl:text-xl special:text-2xl">
                    Earning
                  </p>
                </div>
              </div>

              <div className="bg-[#DF7E59] justify-between items-center rounded-2xl gap-4 py-2 xl:px-3 md:px-4 flex flex-1 flex-row px-4 cursor-pointer hover:bg-[#DF7E59]/75">
                <img
                  src={ShoppingBag}
                  alt=""
                  className="w-12 h-12 md:h-20 md:w-20 xl:h-16 xl:w-16 max-w-screen-sm"
                />
                <div className="flex flex-col">
                  <p className="text-white text-xl md:text-xl xl:text-3xl 2xl:text-2xl special:text-3xl">
                    ${wallet.purchase || "0.00"}
                  </p>
                  <p className="text-white text-lg md:text-lg xl:text-xl 2xl:text-xl special:text-2xl">
                    Purchase
                  </p>
                </div>
              </div>
            </div>
            {transactionsCom ? (
              ""
            ) : (
              <div className="block xl:hidden flex-col space-y-2">
                <IoArrowBackCircleOutline
                  className="hover:scale-110 text-2xl"
                  onClick={handleBackClick}
                />

                <FundTransferForm />
              </div>
            )}
            {/* <div className="flex flex-col">
              <div style={{ position: "relative" }}>
                <div
                  className="flex flex-row items-center justify-center gap-2 mb-5"
                  onClick={toggleCalendar}
                >
                  <p className="text-center uppercase md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl">
                    DECEMBER 2023
                  </p>
                  <img src={Arrow} alt="" />
                </div>
                {isCalendarVisible && (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%", // Center vertically
                      left: "50%", // Center horizontally
                      transform: "translate(-50%, -50%)", // Center both vertically and horizontally
                      zIndex: 100,
               
                    }}
                  >
                    <Calendar onChange={handleDateChange} value={date} />
                  </div>
                )}
              </div>
              <div className="flex justify-center">
                <Chart
                  options={chartOptions.options}
                  series={chartOptions.series}
                  type="donut"
                  width={chartWidth}
                  font="18px"
                />
              </div>
            </div> */}
            <div className="flex flex-col space-y-4 flex-1 pt-12">
              {/* <div className="flex flex-row justify-between items-center">
                <p className="text-[#EC2639] md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl">
                  Transactions History
                </p>
             
              </div> */}
              <div className="flex justify-between items-center">
                <p className="font-bold text-xl md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl">
                  Transactions
                </p>
                {/* <p className="text-md md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl">See All</p> */}
                <div className="relative inline-block text-left">
                  <button
                    onClick={handleToggle}
                    type="button"
                    className="inline-flex  items-center justify-center w-full px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring focus:border-gray-300 relative"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    <span className="mr-4 text-sm md:text-sm xl:text-lg 2xl:text-lg special:text-2xl">
                      {selectedOption || "See All"}
                    </span>
                    <span
                      className={`transform ${
                        isOpen ? "-rotate-180" : "rotate-0"
                      }`}
                    >
                      &#9660;
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <div
                          onClick={() => handleSelect("Card Transaction")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                          role="menuitem"
                        >
                          Card Transaction
                        </div>
                        <div
                          onClick={() => handleSelect("Digital Transaction")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                          role="menuitem"
                        >
                          Digital Transaction
                        </div>
                        <div
                          onClick={() => handleSelect("Earning Transaction")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                          role="menuitem"
                        >
                          Earning Transaction
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {loading ? (
                <div className="flex justify-center">
                  <FiLoader className="w-9 h-9 2xl:w-12 2xl:h-12 special:w-18 special:h-18 animate-spin" />
                </div>
              ) : transactions.length > 0 ? (
                <div className="flex flex-col space-y-4">
                  {transactions?.map((transaction, key) => (
                    <div
                      key={key}
                      className="flex flex-row items-center justify-between hover:bg-[#F5F5F5] p-2 rounded-lg"
                    >
                      <div className="flex flex-row items-center gap-2">
                        <img
                          src={
                            transaction.type == "stripe"
                              ? Stripe
                              : transaction.type == "CR"
                              ? Fund
                              : Sub
                          }
                          alt=""
                          className="w-12"
                        />
                        <div className="flex flex-col">
                          <p className="text-black capitalize">
                            {transaction.type}
                          </p>
                          <p className={`capitalize text-xs text-gray-400`}>
                            {transaction.mode}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p
                          className={`text-${
                            transaction.transactiontype == "DR"
                              ? "green-400"
                              : "red-400"
                          } text-lg`}
                        >
                          ${transaction.amount}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="flex justify-center text-lg text-black">
                  No transactions data
                </p>
              )}

              {/* Display Card Purchase */}
              {selectedOption === "Card Transaction" && (
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row gap-2 items-center">
                    <img
                      src={Transfer}
                      alt=""
                      className="special:w-20 special:h-20 xl:w-14 xl:h-14 md:w-12 md:h-12 w-8 h-8"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm md:text-lg xl:text-xl 2xl:text-2xl special:text-3xl">
                        Car Purchase
                      </p>
                      <p className="text-xs md:text-xl xl:text-lg 2xl:text-xl special:text-2xl">
                        Auto Loan
                      </p>
                    </div>
                  </div>
                  <p className="text-[#4FC8E8] font-semibold xl:text-lg 2xl:text-2xl special:text-4xl">
                    -$250
                  </p>
                </div>
              )}

              {/* Display House Purchase */}
              {selectedOption === "Digital Transaction" && (
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row gap-2 items-center">
                    <img
                      src={Slip}
                      alt=""
                      className="special:w-20 special:h-20 xl:w-14 xl:h-14 md:w-12 md:h-12 w-8 h-8"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm md:text-lg xl:text-xl 2xl:text-2xl special:text-3xl">
                        Houses Purchase
                      </p>
                      <p className="text-xs md:text-xl xl:text-lg 2xl:text-xl special:text-2xl">
                        Airbnb home
                      </p>
                    </div>
                  </div>
                  <p className="text-[#059713] font-semibold xl:text-lg 2xl:text-2xl special:text-4xl">
                    $2250
                  </p>
                </div>
              )}

              {/* Display Transport */}
              {selectedOption === "Earning Transaction" && (
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row gap-2 items-center">
                    <img
                      src={Save}
                      alt=""
                      className="special:w-20 special:h-20 xl:w-14 xl:h-14 md:w-12 md:h-12 w-8 h-8"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm md:text-lg xl:text-xl 2xl:text-2xl special:text-3xl">
                        Transport
                      </p>
                      <p className="text-xs md:text-xl xl:text-lg 2xl:text-xl special:text-2xl">
                        Uber pathao
                      </p>
                    </div>
                  </div>
                  <p className="text-[#059713] font-semibold xl:text-lg 2xl:text-2xl special:text-4xl">
                    $250
                  </p>
                </div>
              )}
            </div>
          </div>

          {transactionsCom ? (
            <div className="flex-col flex-1 space-y-4 hidden xl:flex">
              <div className="space-y-4">
                <div className="bg-black rounded-b-3xl py-4">
                  <TopNav textColor={"white"} />
                  <div className="pt-10">
                    <motion.img
                      initial={{ x: 80, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ type: "tween", duration: 1, delay: 1 }}
                      className="w-3/4"
                      src={MainCar}
                      alt="main"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <GoldCard />
                </div>
                <div
                  className="bg-black rounded-2xl text-white text-center py-2 special:py-4 2xl:text-lg text-sm special:text-2xl hover:bg-black/75 cursor-pointer"
                  onClick={handleButtonClick}
                >
                  <p>Fund transfer</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden xl:flex flex-1 flex-col pt-6">
              <div className="pb-12">
                <TopNav />
              </div>
              <img src={Line} alt="" />
              <div className="flex flex-col">
                <IoArrowBackCircleOutline
                  className="text-2xl 2xl:text-4xl special:text-6xl hover:scale-110"
                  onClick={handleBackClick}
                />
                <FundTransferForm />
              </div>
            </div>
          )}
          {/* </div> */}
        </div>
      </div>
      <MyEntriesButton />
    </div>
  );
};

export default Transaction;
