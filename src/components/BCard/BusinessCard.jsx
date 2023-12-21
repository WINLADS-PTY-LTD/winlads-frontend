import { useEffect, useState } from "react";
import backgroundcar from "../../assets/images/background/Background-car.png";
import userBUS from "../../assets/images/BusinessCard/userBUS.png";
import smartphoneBUS from "../../assets/images/BusinessCard/smartphoneBUS.png";
import basketballBUS from "../../assets/images/BusinessCard/basketballBUS.png";
import mailBUS from "../../assets/images/BusinessCard/mailBUS.png";
import { IoMdShare } from "react-icons/io";
import { IoMdSave } from "react-icons/io";
import { MdPersonAddAlt1 } from "react-icons/md";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import BCard from "../CardBusiness/CardBusiness";
import "./modal.css";
import { validateCurrentUser } from "../../utils/validateuser";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function BusinessCard() {
  const navigate = useNavigate();
  const [isOrderNow, setOrderNow] = useState(false);
  const [valUser, setValUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [postalAddress, setPostalAddress] = useState();
  const [bcCard, setBcCard] = useState("")

  const handleShareClick = () => {
    setOrderNow(!isOrderNow);
  };

  const handleRequestButton = () => {
    setOrderNow(!isOrderNow);
    requestNfcCard();
  };

  useEffect(() => {
    currentUserValidation()
  }, []);


  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      setValUser(validator.user);
    } else {
      navigate("/login");
    }
  };


  const saveBC = async () => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/downloadBusinessCard?uid=${valUser.uid}`)
      .then((response) => {
        console.log(response?.data?.data, "downloadddd")
        setBcCard(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
        // setLoading(false);
      });
  };

  const handleSaveCard = () => {
    saveBC();
  }

  const requestNfcCard = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/requestBusinessCard`,
        {
          uid: valUser.uid,
          name: valUser.name,
          mobile: valUser.mobile,
          passport: valUser.passport,
          address: postalAddress,
        }
      );
      if (response.data.status == 200) {
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.error(response.data.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div className="flex flex-col space-y-4 special:space-y-16">
      <div className="flex flex-col special:space-y-5">
        <p className="text-xl font-bold xl:text-4xl md:text-4xl special:text-6xl">
          Get My NFC
        </p>
        <p className="text-black text-lg special:pt-5 special:text-2xl">
          {isOrderNow ? "Let’s Get Your Card !!" : ""}
        </p>
      </div>
      <div
        className=""
      >
        <div className="text-left flex flex-col items-center space-y-0 special:space-y-16">
          {isOrderNow ? (
            <ShareForm
              userName={valUser.name}
              passPort={valUser.passport}
              phone={valUser.mobile}
              postalAddress={valUser.postalAddress}
              setPostalAddress={setPostalAddress}
            />
          ) : (
            <BCard />
          )}

          <div className="w-full xl:w-1/2 special:w-2/5 flex gap-16 justify-center py-5">
            <div className="flex flex-col items-center">
              <button className="text-2xl md:text-4xl pro:text-5xl xl:text-2xl special:text-5xl p-3 rounded-[20px] bg-[#CCBAB3] hover:bg-[#D1D5DB]">
                <IoMdShare />
              </button>
              <label className="text-sm md:text-lg pro:text-xl xl:text-sm special:text-2xl">
                {" "}
                Share
              </label>
            </div>
            <div className="flex flex-col items-center" onClick={handleSaveCard}>
              <button className="text-2xl md:text-4xl pro:text-5xl xl:text-2xl special:text-5xl p-3 rounded-[20px] bg-[#CCBAB3] hover:bg-[#D1D5DB]">
                <IoMdSave />
              </button>
              <label className="text-sm md:text-lg pro:text-xl xl:text-sm special:text-2xl">
                Save
              </label>
            </div>
            <div className="flex flex-col items-center">
              {isOrderNow ? (
                // Display "orderNow" image when isOrderNow is true
                <button
                  className="text-2xl md:text-4xl pro:text-5xl xl:text-2xl special:text-5xl p-3 rounded-[20px] bg-[#CCBAB3] hover:bg-[#D1D5DB]"
                  onClick={handleRequestButton}
                >
                  <MdOutlineAddShoppingCart />
                </button>
              ) : (
                // Display "add" image when isOrderNow is false
                <button
                  className="text-2xl md:text-4xl pro:text-5xl xl:text-2xl special:text-5xl p-3 rounded-[20px] bg-[#CCBAB3] hover:bg-[#D1D5DB]"
                  onClick={handleShareClick}
                >
                  <MdPersonAddAlt1 />
                </button>
              )}
              <label className="text-sm md:text-lg pro:text-xl xl:text-sm special:text-2xl">
                {isOrderNow ? "Order Now" : "Request"}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShareForm({
  onClose,
  userName,
  passPort,
  phone,
  postalAddress,
  setPostalAddress,
}) {
  // const [postalAddress, setPostalAddress] = useState();
  const handlePostalAddressChange = (e) => {
    setPostalAddress(e.target.value);
  };

  return (
    <form className="form-contain-reg space-y-7 w-full xl:w-3/5 special:w-2/5 special:space-y-16">
      <div className="bg-[#ECECEC] flex flex-row-reverse items-center py-3 px-4 gap-3 rounded-2xl justify-end">
        <input
          type="text"
          placeholder="Your Full Name"
          id="name"
          value={userName}
          disabled
          className="bg-[#ECECEC] placeholder:text-gray-500 outline-none w-full special:placeholder:text-2xl"
        />
        <img src={userBUS} alt="user" className="w-8 special:w-14" />
      </div>

      <div className="bg-[#ECECEC] border-black flex flex-row-reverse items-center py-3 px-4 gap-3 rounded-2xl justify-end">
        <input
          type="text"
          placeholder="Your Passport"
          id="passport"
          disabled
          value={passPort}
          className="bg-[#ECECEC]e focus:outline-none placeholder:text-gray-500 w-full outline-none special:placeholder:text-2xl"
        />
        <img src={basketballBUS} alt="passport" className="w-8 special:w-14" />
      </div>
      <div className="bg-[#ECECEC] flex flex-row-reverse items-center py-3 px-4 gap-3 rounded-2xl justify-end">
        <input
          type="text"
          placeholder="Your Phone Number"
          id="mobile"
          disabled
          value={phone}
          className="bg-[#ECECEC] focus:outline-none placeholder:text-gray-500 w-full outline-none special:placeholder:text-2xl"
        />
        <img src={smartphoneBUS} alt="phone" className="w-8 special:w-14" />
      </div>
      <div className="bg-[#ECECEC] flex flex-row-reverse items-center py-3 px-4 gap-3 rounded-2xl justify-end">
        <input
          type="text"
          placeholder="Your Postal Address"
          id="address"
          value={postalAddress}
          onChange={handlePostalAddressChange}
          className="bg-[#ECECEC] focus:outline-none placeholder:text-gray-500 w-full outline-none special:placeholder:text-2xl"
        />
        <img src={mailBUS} alt="mail" className="w-8 special:w-14" />
      </div>
    </form>
  );
}

export default BusinessCard;
