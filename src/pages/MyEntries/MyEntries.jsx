import { useEffect, useState } from "react";
import TopNav from "../../components/TopNav/TopNav";
import SideNav from "../../components/SideNav/SideNav";
import Filters from "../../components/MyEntries/Filters";
import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import EntriPagination from "../../components/MyEntries/EntriPagination";
import { IoIosTimer } from "react-icons/io";
import noMore from "../../assets/images/icons/no-more.svg";
import { validateCurrentUser } from "../../utils/validateuser";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FiLoader } from "react-icons/fi";
import { PiBookmarkSimpleLight } from "react-icons/pi";

const MyEntries = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [valUser, setValUser] = useState({});
  const navigate = useNavigate();

  const [myGiveaways, setMyGiveaways] = useState([]);

  useEffect(() => {
    currentUserValidation();
    getMyGiveaways();
  }, [myGiveaways]);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      setValUser(validator.user);
    } else {
      //   navigate("/login");
      console.log("");
    }
  };

  const getMyGiveaways = async () => {
    await axios
      .get(
        `${import.meta.env.VITE_SERVER_API}/myRaffleRounds?uid=${valUser.uid}`
      )
      .then((response) => {
        console.log(response.data.data, "data raffle");
        setMyGiveaways(response.data.data.tickets);
        // console.log(myGiveaways.rounds, 'asdsad')
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };
  return (
    <div className="flex items-stretch w-full">
      <div className="w-full">
        <div className="flex flex-col xl:flex-col flex-1 px-1 gap-5 w-full">
          {/* left side */}
          <div className="flex flex-col flex-1 ">
            <div className="block xl:hidden space-y-4">
              <div className=" rounded-b-3xl py-4">
                <TopNav />
              </div>
            </div>
          </div>
          <div className="hidden xl:flex flex-col space-y-4 items-end">
            <div className=" rounded-b-3xl space-y-4 relative w-web">
              <div className="grid grid-cols-2 gap-4 m-2">
                <div className="col-span-1"></div>
                <div className="col-span-1">
                  <TopNav textColor={"black"} />
                </div>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="px-0 md:px-10 relative">
            <Filters />
            <div className="flex items-center justify-between xl:hidden px-5 my-5">
              <h1 className="text-xl font-bold">Upcoming Entries</h1>
              <IoIosTimer className="text-2xl font-bold" />
            </div>
            {isLoading ? (
              <div className="flex justify-center">
                <FiLoader className="w-9 h-9 2xl:w-12 2xl:h-12 special:w-18 special:h-18 animate-spin" />
              </div>
            ) : (
              <>
                {myGiveaways?.length > 0 ? (
                  <div className="flex flex-col space-y-2">
                    {myGiveaways.map((giveaway, key) => (
                      <div
                        key={key}
                        className="flex xl:flex-row flex-col items-center px-2 xl:px-0"
                      >
                        <div className="xl:rounded-l-full xl:flex flex-row justify-between items-center rounded-t-2xl py-3 xl:pl-4 px-2 bg-blue-300 flex-2 2xl:pr-64 xl:pr-48 special:pr-[500px] w-full xl:w-0">
                          <div className="flex flex-row justify-between items-center xl:gap-4">
                            <p className="text-black capitalize">
                              {giveaway?.type}
                            </p>
                            <PiBookmarkSimpleLight />
                     
                          </div>
                        </div>
                        <div className="bg-blue-100 py-3 xl:pr-4 pl-2 pr-2 xl:pl-4 w-full flex-1 xl:rounded-b-none rounded-b-2xl flex xl:flex-row flex-col xl:items-center justify-between space-y-1 xl:space-y-0">
                          <p className="capitalize">{giveaway.round.name}</p>
                          <p>{giveaway.entryNumber}</p>
                          <div className="flex flex-row justify-between 2xl:gap-36 xl:gap-12">
                            <p className="text-xs xl:text-sm">
                              {" "}
                              {new Date(giveaway.round.endtime).toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                  hour: "numeric",
                                  minute: "numeric",
                                  second: "numeric",
                                }
                              )}
                            </p>
                            {giveaway.status === 1 ? <MdDone /> : <RxCross1 />}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="w-52 mx-auto my-52">
                    {" "}
                    <img
                      src={noMore}
                      alt="empty"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </>
            )}

            <hr className="h-[2px] bg-gray-300 my-10 w-11/12 mx-auto" />
            <EntriPagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEntries;
