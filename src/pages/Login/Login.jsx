import "./Login.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainImg from "../../assets/images/jip.png";
import { MdOutlineNavigateNext } from "react-icons/md";
import Loader from "../../components/Loader/Loader";
import { useFormik } from "formik";
import { auth } from "../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import axios from "axios";
import Cookies from "universal-cookie";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { validateCurrentUser } from "../../utils/validateuser.js";
import LoginImg from "../../assets/images/login/jeep.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [final, setfinal] = useState("");
  const [show, setshow] = useState(false);
  const [showOTPBox, setShowOTPBox] = useState(false);
  const [buttonText, setButtonText] = useState("Get OTP");
  const cookies = new Cookies(null, { path: "/" });

  const onSubmit = async (values, actions) => {
    // console.log(value, actions)
    // setTimeout(() => {
    //   navigate("/authentication");
    // }, 1500);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  async function onSignup(e) {
    if (buttonText === "Login") {
      ValidateOtp();
    } else {
      setButtonText("Sending...");

      try {
        console.log("signup called");
        // console.log(ph, "phone");
        // let verify = new auth.RecaptchaVerifier("recaptcha-container");
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {}
        );
        let verify = window.recaptchaVerifier;
        // console.log(`${import.meta.env.VITE_SERVER_API}/checkMobile?mobile=${ph}, "ccc"`)
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_API}/checkMobile?mobile=${ph}`
        );
        if (!response.data.exists) {
          // alert("Mobile number is not registered. Please register first.");
          toast.error(
            "Mobile number is not registered. Please register first.",
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
        } else {
          try{
            const result = await signInWithPhoneNumber(auth, "+"+ph, verify);
            setfinal(result);
            // console.log(final, "code sent final");
            setshow(true);
            setShowOTPBox(true);
            setButtonText("Login");
          } catch(error) {
              console.log(error, 'fir error')
          }
      
        }
      } catch (error) {
        console.error("Error checking mobile:", error);
        setButtonText("Get OTP");
        // alert("An error occurred while checking the mobile number.");
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
      }
    }
  }

  useEffect(() => {
    currentUserValidation()
  },[])

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      navigate("/dashboard");
    } else {
      console.log("")
    }
  };

  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        // success
        const uid = result.user.uid;

        axios
          .get(`${import.meta.env.VITE_SERVER_API}/login?uid=${uid}`)
          .then((response) => {
            if (response.data.exists) {
              console.log("success");
              cookies.set("wr_token", response.data.data._id);
              navigate("/dashboard");
            } else {
              alert("Login failed");
            }
          })
          .catch((error) => {
            toast.error("Error checking mobile number. Please try again", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            console.error("Error checking mobile:", error);
          });
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

  // Set loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        mobile: "",
        remind: "",
      },
      // validationSchema: basicSchemasLogin,
      onSubmit,
    });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="h-screen flex flex-col xl:flex-row items-center justify-center bg-image px-20">
          <div className="container login-section">
            <div className="login-contain flex items-center justify-center md:flex-row flex-col">
              <div className="img-container scale-150 mb-9 md:mb-0 prevent">
                {/* Dekstop VIew Jeep */}
                <div className="hidden md:block xl:hidden w-full">
                  <motion.img
                    initial={{ opacity: 0, x: "-50%" }}
                    whileInView={{ opacity: 1, x: "-10%" }}
                    transition={{ duration: 0.8 }}
                    src={LoginImg}
                    className="w-full h-full object-contain md:object-cover "
                    alt="main-img"
                  />
                </div>
                <div className="hidden xl:block md:hidden w-full">
                  <motion.img
                    initial={{ opacity: 0, x: "-50%" }}
                    whileInView={{ opacity: 1, x: "-25%" }}
                    transition={{ duration: 0.8 }}
                    src={LoginImg}
                    className="w-[600px] h-full object-contain md:object-cover "
                    alt="main-img"
                  />
                </div>
                {/* Mobile View Jeep */}
                <div className="block md:hidden xl:hidden w-full">
                  <motion.img
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: -10 }}
                    transition={{ duration: 0.8 }}
                    src={MainImg}
                    className="w-full h-full object-contain md:object-cover "
                    alt="main-img"
                  />
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="text-center"
              >
                <span className="text-2xl md:text-3xl lg:text-4xl fw-bold font-bold special:text-4xl">
                  Sign in to access your account
                </span>

                <div className="flex items-center flex-col justify-center gap-5 w-3/4 mx-auto mt-10">
                  <div
                    // id="recaptcha-container"
                    className={
                      errors.otp && touched.opt
                        ? "input-div input-error"
                        : ""
                    }
                  >
                    <PhoneInput
                      country={"au"}
                      // value={this.state.phone}
                      // onChange={(phone) => this.setState({ phone })}
                      value={ph}
                      onChange={(value, country, e, formattedValue) => setPh(value)}
                      onBlur={handleBlur}
                      id="mobile"
                      className="placeholder:text-[16px] border borer-solid  border-black xl:w-96 w-64"
                    />
                    {/* <PhoneInput
                  country={"au"}
                  type="number"
                  // value={this.state.phone}
                  // onChange={(phone) => this.setState({ phone })}
                  value={ph}
                  onChange={(e) => setPh(e.target.value)}
                  onBlur={handleBlur}
                  id="mobile"
                  className="placeholder:text-[16px]"
                /> */}
                    {/* <FcPhoneAndroid size={20} /> */}
                    {/* <img src={Flag} alt="" /> */}

                    {/* <input
                      type="text"
                      placeholder="+61&nbsp;(Phone Number)"
                      value={ph}
                      onChange={(e) => setPh(e.target.value)}
                      onBlur={handleBlur}
                      id="mobile"
                      className="placeholder:text-[16px]"
                    /> */}
                    <small className="text-error">
                      {errors.mobile && touched.mobile && errors.mobile}
                    </small>
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

                  <div className="flex items-center justify-start w-full text-md">
                    <div>
                      {/* <input
                        className="mr-1"
                        type="checkbox"
                        id="remind"
                        name="remember"
                        value={values.remind}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      /> */}
                      <input type="checkbox" name="" id="rem" />
                      <label htmlFor="rem" className="ml-2">
                        Remember me
                      </label>
                    </div>
                  </div>

                  {!final && <div id="recaptcha-container"></div>}
                  {/* 
                  <button className="btn-main" type="submit">
                    <span>Next</span>
                    <MdOutlineNavigateNext
                      color={"#fff"}
                      size={40}
                      className="mt-1"
                    />
                  </button> */}

                  <button
                    className="px-12 w-full py-1 sm:py-2 flex justify-center flex-row items-center rounded-lg bg-black hover:bg-black/75"
                    onClick={(e) => onSignup(e)}
                    type="submit"
                  >
                    <span className="xl:text-2xl text-lg text-white font-bold">
                      {buttonText}
                    </span>
                    <MdOutlineNavigateNext
                      color={"#fff"}
                      size={40}
                      className="inline-block mt-0"
                    />
                  </button>
                  <div className="font-semibold text-lg">
                    <span>New Member? </span>
                    <span>
                      <Link
                        to="/register"
                        className="react-link text-[#157D98]"
                      >
                        Register now
                      </Link>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// export {firebase}

export default Login;
