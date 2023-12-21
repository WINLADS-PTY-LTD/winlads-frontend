import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { basicSchemasRegister } from "../../schemas/index.js";
import { useFormik } from "formik";
import axios from "axios";
import { auth } from "../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { MdOutlineNavigateNext } from "react-icons/md";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "../Login/Login.css";
import { motion } from "framer-motion";
import { validateCurrentUser } from "../../utils/validateuser.js";
import LoginImg from "../../assets/images/login/jeep.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  FcBusinessman,
  FcFeedback,
  FcDiploma1,
  FcViewDetails,
  FcSmartphoneTablet,
} from "react-icons/fc";

const Register = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");
  const [verifyDisable, setVerifyDisable] = useState(true);
  const [showOTPBox, setShowOTPBox] = useState(false);
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Get OTP");
  const [isChecked, setIsChecked] = useState(false);
  const cookies = new Cookies(null, { path: "/" });

  // set loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    currentUserValidation() //a 2-second loading delay
  }, []);

  const onCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const saveFormData = async (temp_values, uid) => {
    console.log(temp_values, uid);
    const data = {
      name: values.name,
      email: values.email,
      mobile: ph,
      passport: values.passport,
      tin: values.tin,
      rafflesId: values.rafflesId,
      uid: uid,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/register`,
        data
      );
      // console.log(response.data);
      cookies.set("wr_token", response.data.data._id);
    } catch (error) {
      toast.error("Error submitting login credentials", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.error("Error submitting form:", error);
    }
  };

  function onSignup(e) {
    if (!isChecked) {
      toast.error("Please confirm terms and conditions", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    if (buttonText === "Register") {
      ValidateOtp();
    } else {
      setButtonText("Sending...");
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {}
      );
      let verify = window.recaptchaVerifier;
      axios
        .get(`${import.meta.env.VITE_SERVER_API}/checkMobile?mobile=${ph}`)
        .then((response) => {
          if (response.data.exists) {
            toast.error("Mobile number is already registered!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            // alert("Mobile number is already registered!");
            setButtonText("Get OTP");
          } else {
            signInWithPhoneNumber(auth, "+"+ph, verify)
              .then((result) => {
                setfinal(result);
                console.log(final, "code sent final");
                setshow(true);
                setVerifyDisable(false);
                setShowOTPBox(true);
                setButtonText("Register");
              })
              .catch((err) => {
                toast.error(err.message, {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
                window.location.reload();
                setButtonText("Get OTP");
              });
          }
        })
        .catch((error) => {
          console.error("Error checking mobile:", error);
          toast.error("An error occurred while checking the mobile number.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          // alert("An error occurred while checking the mobile number.");
          setButtonText("Get OTP");
        });
    }
  }

  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        // success
        // console.log("success", result);
        saveFormData(values, result.user.uid);

        navigate("/welcome");
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      })
      .catch((err) => {
        toast.error("Invalid OTP Code", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        mobile: "",
        passport: "",
        tin: "",
        rafflesId: "",
      },
      validationSchema: basicSchemasRegister,
      onSubmit: saveFormData,
    });

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      navigate("/dashboard");
    } else {
      console.log("");
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="h-screen flex flex-col justify-center bg-image">
          <div className="container mx-auto login-section max-sm:overflow-scroll">
            <div className="login-contain flex items-center justify-center md:flex-row xl:flex-row 4xl:flex-row flex-col">
              <div className="img-container w-2/4 scale-150 mb-9 md:mb-0 prevent">
                <div className="hidden md:block 4xl:hidden xl:hidden w-full prevent">
                  <motion.img
                    initial={{ opacity: 0, x: "-50%" }}
                    whileInView={{ opacity: 1, x: "-10%" }}
                    transition={{ duration: 0.8 }}
                    src={LoginImg}
                    className="w-full h-full object-contain md:object-cover"
                    alt="main-img"
                  />
                </div>
                <div className="hidden xl:block md:hidden w-full">
                  <motion.img
                    initial={{ opacity: 0, x: "-50%" }}
                    whileInView={{ opacity: 1, x: "-25%" }}
                    transition={{ duration: 0.8 }}
                    src={LoginImg}
                    className="w-[600px] h-full object-contain md:object-cover"
                    alt="main-img"
                  />
                </div>
                {/* Mobile View Jeep */}
                <div className="block md:hidden xl:hidden 4xl:hidden w-full pt-5">
                  <motion.img
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: -10 }}
                    transition={{ duration: 0.8 }}
                    src={LoginImg}
                    className="w-full h-full object-contain md:object-cover "
                    alt="main-img"
                  />
                </div>
              </div>
              <div className="flex flex-col xl:space-y-4 md:space-y-4 space-y-2 text-center md:mt-10 lg:mt-20 xl:mt-10 4xl:mt-10 mt-1 mb-10 sm:mb-0 ">
                <span className="text-2xl md:text-3xl xl:text-4xl fw-bold font-bold 4xl:text-8xl">
                  Create an Account
                </span>
                <form
                  onSubmit={handleSubmit}
                  autoComplete="off"
                  className="form-contain text-center"
                >
                  <div className="flex flex-col justify-center gap-5  mx-auto xl:mt-10 md:mt-10 mt-4 4xl:mt-20">
                    <div
                      className={
                        errors.name && touched.name
                          ? "input-div input-error"
                          : "input-div"
                      }
                    >
                      <FcBusinessman size={20} />
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="name"
                        className="placeholder:text-[16px]"
                      />
                      <small className="text-error">
                        {errors.name && touched.name && errors.name}
                      </small>
                    </div>

                    <div
                      className={
                        errors.email && touched.email
                          ? "input-div input-error"
                          : "input-div"
                      }
                    >
                      <FcFeedback size={20} />
                      <input
                        type="email"
                        placeholder="Your Email Address"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="email"
                        className="placeholder:text-[16px]"
                      />
                      <small className="text-error">
                        {errors.email && touched.email && errors.email}
                      </small>
                    </div>

                    <div
                      className={
                        errors.passport && touched.passport
                          ? "input-div input-error"
                          : "input-div"
                      }
                    >
                      <FcDiploma1 size={20} />
                      <input
                        type="text"
                        placeholder="Your Nic Number"
                        value={values.passport}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="passport"
                        className="placeholder:text-[16px]"
                      />
                      {/* <small className="text-error">
                      {errors.passport && touched.passport && errors.passport}
                    </small> */}
                    </div>

                    <div
                      className={
                        errors.tin && touched.tin
                          ? "input-div input-error"
                          : "input-div"
                      }
                    >
                      <FcViewDetails size={20} />
                      <input
                        type="text"
                        placeholder="Your Tin Number"
                        value={values.tin}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="tin"
                        className="placeholder:text-[16px]"
                      />
                    </div>

                    <div
                      className={
                        errors.mobile && touched.mobile
                          ? "input-div input-error"
                          : ""
                      }
                    >
                      <PhoneInput
                      country={"au"}
                      value={ph}
                      onChange={(value, country, e, formattedValue) => setPh(value)}
                      onBlur={handleBlur}
                      id="mobile"
                      className="placeholder:text-[16px] border borer-solid  border-black xl:w-96 w-64"
                    />
                      <small className="text-error">
                        {errors.mobile && touched.mobile && errors.mobile}
                      </small>
                    </div>

                    <div
                      className={
                        errors.rafflesId && touched.rafflesId
                          ? "input-div input-error"
                          : "input-div"
                      }
                    >
                      <FcSmartphoneTablet size={20} />
                      <input
                        type="text"
                        placeholder="Refferal Id"
                        value={values.rafflesId}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="rafflesId"
                        className="placeholder:text-[16px]"
                      />
                    </div>

                    {showOTPBox && (
                      <div
                        className={
                          errors.otp && touched.opt
                            ? "input-div input-error"
                            : "input-div"
                        }
                      >
                        <input
                          type="text"
                          placeholder="OTP Code"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          // id="tin"
                        />
                        <small className="text-error">
                          {errors.otp && touched.opt && errors.otp}
                        </small>
                      </div>
                    )}

                    <div className="special:text-xl flex flex-row gap-2 items-center">
                      {" "}
                      <input
                        id="checkbox"
                        type="checkbox"
                        checked={isChecked}
                        onChange={onCheckboxChange}
                        className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <div className="flex flex-row items-center gap-2">
                        <p
                          className="text-sm special:text-lg cursor-pointer"
                          onClick={() => setIsChecked(!isChecked)}
                        >
                         By checking the box you agree to our
                        </p>
                        <Link
                          to="/conditions"
                          target="_blank"
                          className="yellow-text"
                        >
                          <p className="text-sm special:text-lg cursor-pointer">
                            terms of use
                          </p>
                        </Link>
                      </div>
                    </div>

                    {!final && <div id="recaptcha-container"></div>}

                    <button
                      className={`text-white rounded-xl justify-center px-12 py-3 flex flex-row items-center font-semibold special:text-xl bg-${
                        isChecked ? "black" : "gray-500"
                      } hover:bg-${isChecked ? "black/50" : ""}`}
                      onClick={(e) => onSignup(e)}
                      disabled={!isChecked}
                    >
                      <span className="xl:text-2xl md:text-xl 4xl:text-2xl text-lg text-white font-bold">
                        {buttonText}
                      </span>
                      <MdOutlineNavigateNext
                        color={"#fff"}
                        size={40}
                        className=""
                      />
                    </button>

                    <div className="font-semibold text-lg">
                      <span>Already a member? </span>
                      <span>
                        <Link className="react-link text-[#157D98]" to="/login">
                          Login
                        </Link>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
