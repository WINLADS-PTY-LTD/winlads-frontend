import Jip from "../../assets/images/services/jip.png";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div className="w-full bg-service">
      <div className="flex flex-col items-center w-full px-3 lg:px-5 py-10 lg:py-16 gap-10">
        <motion.p
          initial={{ opacity: 0, y: "-40%" }}
          whileInView={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-center text-base sm:text-lg 2xl:text-xl special:text-3xl font-bold uppercase xl:tracking-[18px] sm:tracking-[16px] tracking-[12px]"
        >
          {" "}
          WINLADS SERVICES
        </motion.p>

        <div className="flex w-full  flex-col  items-center gap-5 md:gap-8 lg:gap-0 lg:flex-row lg:items-stretch 2xl:max-w-[2400px]">
          {/* left */}
          <div className="w-10/12 lg:w-1/3  flex flex-col  justify-center gap-5 md:gap-8 lg:gap-10 xl:gap-16 special:gap-10 lg:order-1 order-1">
            <motion.div
              initial={{ opacity: 0, x: "-10%" }}
              whileInView={{ opacity: 1, x: "0" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full"
            >
              <p className="mb-3 lg:mb-5 xl:mb-6 special:mb-8  text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg  font-bold">
                Winlads Urgency Program
              </p>
              <p className=" text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg ">
                Experience the support you need during critical times with
                Winlads Urgency Program. Submit your proposal through our
                platform for a chance at assistance, subject to eligibility.
                We're here to help when it matters most
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: "-10%" }}
              whileInView={{ opacity: 1, x: "0" }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-full"
            >
              <p className=" mb-3 lg:mb-5 xl:mb-6 special:mb-8 text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg  font-bold">
                Winlads OG Club
              </p>
              <p className=" text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg ">
                Join the Winlads OG Club, where devoted members shape decisions
                and direction. With a democratic approach to decision-making,
                our members contribute to the essence and evolution of our
                community
              </p>
            </motion.div>
          </div>

          {/* middle car */}
          <div className="w-10/12 lg:w-1/3   flex items-center justify-center lg:order-2 order-3 ">
            <motion.img
              initial={{ opacity: 0, y: "-40%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5 }}
              src={Jip}
              alt=""
              className="lg:w-full md:w-10/12 sm:w-9/12 w-8/12"
            />
          </div>

          {/* right  */}
          <div className="w-10/12 lg:w-1/3  flex flex-col  justify-center gap-5 md:gap-8 lg:gap-10 xl:gap-16 special:gap-10 lg:order-3 order-2">
            <motion.div
              initial={{ opacity: 0, x: "10%" }}
              whileInView={{ opacity: 1, x: "0" }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="w-full"
            >
              <p className="mb-3 lg:mb-5 xl:mb-6 special:mb-8 lg:text-start text-center text-xs sm:text-sm md:text-base xl:text-base special:text-lg  font-bold">
                Winlads Referral System
              </p>
              <p className="lg:text-start text-center text-xs sm:text-sm md:text-base xl:text-base special:text-lg ">
                Unlock rewards and passive income through Winlads Referral
                System. Refer friends and family, earn commissions, and watch
                your network grow organically. Your referrals could be your
                pathway to ongoing rewards
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: "10%" }}
              whileInView={{ opacity: 1, x: "0" }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="w-full"
            >
              <p className="mb-3 lg:mb-5 xl:mb-6 special:mb-8 lg:text-start text-center text-xs sm:text-sm md:text-base xl:text-base special:text-lg  font-bold">
                Winlads LuxLife{" "}
              </p>
              <p className="lg:text-start text-center text-xs sm:text-sm md:text-base xl:text-base special:text-lg ">
                Indulge in luxury with Winlads Lux. Experience weekly giveaways
                and exclusive offerings, elevating your lifestyle and adding a
                touch of opulence to your days
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
