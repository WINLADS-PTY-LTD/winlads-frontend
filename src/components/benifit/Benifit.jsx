import Jip from "../../assets/images/benifit/jip.png";
import { motion } from "framer-motion";

const Benifit = () => {
  return (
    <div className="w-full bg-benifit">
      <div className="flex flex-col items-center w-full px-3 lg:px-5 py-10 lg:py-16 gap-10">
        <motion.p
          initial={{ opacity: 0, y: "-40%" }}
          whileInView={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-center text-bse sm:text-lg 2xl:text-xl special:text-3xl font-bold xl:tracking-[18px] sm:tracking-[16px] tracking-[12px] uppercase"
        >
          {" "}
          Explore Exclusive Member Benefit
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: "40%" }}
          whileInView={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center w-10/12 mx-auto text-xs sm:text-sm md:text-base xl:text-base special:text-lg"
        >
          Delight in exclusive discounts, dive into exhilarating giveaways, and
          stand a chance to seize phenomenal prizes, including luxury cars and
          bikes, through our captivating weekly giveaways and WINLADS loyalty
          programs.
        </motion.p>

        <div className="flex w-full  flex-col  items-center gap-5 md:gap-8 lg:gap-0 lg:flex-row lg:items-stretch 2xl:max-w-[2400px]">
          {/* left */}
          <div className="w-10/12 lg:w-2/5  flex flex-col  lg:order-1 order-1  gap-5">
            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0 }}
              className="w-full"
            >
              <p className="text-center lg:text-start text-xs sm:text-sm md:text-base xl:text-base special:text-lg font-bold mb-3">
                Thrill of the draw
              </p>
              <p className="text-center lg:text-start text-xs sm:text-sm md:text-base xl:text-base special:text-lg">
                Experience the rush of our exciting class-leading promotions.
                Could you be the next lucky winner?
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full"
            >
              <p className="text-center lg:text-start text-xs sm:text-sm md:text-base xl:text-base special:text-lg font-bold mb-3">
                Expert support
              </p>
              <p className="text-center lg:text-start text-xs sm:text-sm md:text-base xl:text-base special:text-lg">
                Got questions or need assistance? Our professional support team
                is always ready to help you navigate your journey with us.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="w-full"
            >
              <p className="text-center lg:text-start text-xs sm:text-sm md:text-base xl:text-base special:text-lg font-bold mb-3">
                Exclusive discounts
              </p>
              <p className="text-center lg:text-start text-xs sm:text-sm md:text-base xl:text-base special:text-lg">
                Unlock access to substantial discounts at businesses across
                Australia, all for a low monthly membership fee.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="w-full"
            >
              <p className="text-center lg:text-start text-xs sm:text-sm md:text-base xl:text-base special:text-lg font-bold mb-3">
                Australia-Wide Rewards
              </p>
              <p className="text-center lg:text-start text-xs sm:text-sm md:text-base xl:text-base special:text-lg">
                Enjoy exclusive discounts and benefits across Australia, from
                Sydney to Perth, making your membership truly worthwhile, no
                matter where you are.
              </p>
            </motion.div>
          </div>

          {/* middle car */}
          <div className="w-10/12 lg:w-1/5   flex items-end justify-center  lg:order-2 order-3 ">
            <motion.img
              initial={{ opacity: 0, y: "-70%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.8 }}
              src={Jip}
              alt=""
              className="lg:w-full md:w-10/12 sm:w-9/12 w-8/12"
            />
          </div>

          {/* right  */}
          <div className="w-10/12 lg:w-2/5  flex flex-col lg:order-3 order-2 gap-5 text-[#01819D]">
            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0 }}
              className="w-full"
            >
              <p className="text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg font-bold mb-3">
                Community of Enthusiast
              </p>
              <p className="text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg">
                Join a community of classic car enthusiasts. Share the
                excitement, the anticipation, and the joy of winning!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full"
            >
              <p className="text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg font-bold mb-3">
                Frequent draws
              </p>
              <p className="text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg">
                We conduct our membership draws frequently, increasing your
                chances of changing your life forever.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-full"
            >
              <p className="text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg font-bold mb-3">
                Trusted Benefitship
              </p>
              <p className="text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg">
                We ve partnered with reputable businesses nationwide to ensure
                our members receive only the best deals and offers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="w-full"
            >
              <p className="text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg font-bold mb-3">
                Expertise at Your Service
              </p>
              <p className="text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg">
                Our specialized teams ensure smooth operations, while diverse
                faces represent our brand, ensuring a personalized and
                professional touch
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="w-full"
            >
              <p className="text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg font-bold mb-3">
                Winlads Lux
              </p>
              <p className="text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg">
                Elevate your journey with Winlads Lux and get access to luxury
                savings, exclusive benefits, and the chance to win many luxury
                prizes.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifit;
