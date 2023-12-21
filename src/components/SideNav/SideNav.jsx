import "./SideNav.css";
import { useEffect, useState } from "react";
import Credit from "../../assets/images/side-bar/Credit.png";
import Logout from "../../assets/images/side-bar/Logout.png";
import User from "../../assets/images/side-bar/User2.png";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Auth from "../../assets/images/dashboard-icon/1.png";
import Transaction from "../../assets/images/side-bar/Transactions2.png";
import News from "../../assets/images/side-bar/News2.png";
import Sub from "../../assets/images/side-bar/PayWall2.png";
import Messages from "../../assets/images/side-bar/Messages2.png";
import Business from "../../assets/images/side-bar/Credit2.png";
import { validateCurrentUser } from "../../utils/validateuser";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase.config";
import Cookies from "universal-cookie";
import { FiLoader } from "react-icons/fi";

const SideNav = ({ screen }) => {
  const cookies = new Cookies(null, { path: "/" });

  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();
  const [valUser, setValUser] = useState({});
  const [userImage, setUserImage] = useState("");
  const [loading, setLoading] = useState(true);

  const expandSidebar = () => {
    setExpanded((pre) => true);
  };

  const notExpandSidebar = () => {
    setExpanded((pre) => false);
  };

  useEffect(() => {
    currentUserValidation();
  }, []);

  const handleClick = () => {
    cookies.remove("wr_token");
    navigate("/login");
  };

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      setValUser(validator.user);
      getProfileImage(validator.user.image);
    } else {
      navigate("/login");
    }
  };

  function getProfileImage(img) {
    getDownloadURL(ref(storage, img))
      .then((url) => {
        setUserImage(url);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        // Handle any errors
      });
  }

  return (
    <OutsideClickHandler>
      <div
        className={`pt-10 relative min-h-screen h-full  space-y-4 side-nav-back  ${
          expanded ? "w-[50px] xl:w-[180px]" : "side-nav-half w-[50px]"
        } `}
      >
        <div
          onClick={expandSidebar}
          className="flex flex-row items-center mb-10 w-full"
        >
          <div className="flex flex-col items-center gap-2 justify-center overflow-hidden relative w-full ">
            <Link to="/profile">
              <div className="flex justify-center items-center w-full">
                {loading ? (
                  <div className="flex justify-center">
                    <FiLoader className="w-6 h-6 2xl:w-9 2xl:h-9 special:w-12 special:h-12 animate-spin text-white" />
                  </div>
                ) : (
                  <img
                    src={userImage}
                    className="w-[30px] md:w-[35px] xl:w-[40px] rounded-full"
                    alt="user"
                  />
                )}
              </div>
            </Link>
            <div className="side-nav-name text-white  items-center justify-center flex-col hidden xl:flex">
              <p className="text-sm">{valUser.name}</p>
              {/* <p className="text-[10px]">{valUser.uid}</p> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4 w-full">
          <div onClick={expandSidebar}>
            <Link to="/transaction">
              <button className="flex flex-row items-center gap-2 hover:bg-[#36383b] py-2 px-2 w-full">
                <img src={Transaction} className="w-[14px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  hidden xl:flex text-white w-4">
                    Transaction
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/newslist">
              <button className="flex flex-row items-center gap-2 hover:bg-[#36383b] py-2 px-2 w-full">
                <img src={News} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin hidden xl:flex text-white">
                    News
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/messages">
              <button className="flex flex-row items-center gap-2 hover:bg-[#36383b] py-2 px-2 w-full">
                <img src={Messages} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin hidden xl:flex text-white">
                    Messages
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/subscription">
              <button className="flex flex-row items-center gap-2 hover:bg-[#36383b] py-2 px-2 w-full">
                <img src={Sub} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin hidden xl:flex text-white">
                    Subscription
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/business-card">
              <button className="flex flex-row items-center gap-2 hover:bg-[#36383b] py-2 px-2 w-full">
                <img src={Business} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  hidden xl:flex text-white">
                    Business card
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <button
              onClick={handleClick}
              className="flex flex-row items-center gap-2 hover:bg-[#36383b] py-2 px-2 side-nav-logout w-full left-0 mt-5"
            >
              <img src={Logout} style={{ width: "16px" }} alt="protect" />
              <span className=" text-white hidden xl:flex">Sign out</span>
            </button>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default SideNav;
