import carVideo from "../../assets/images/youtube/carAnim.mp4"
import ReactPlayer from "react-player";
import P1 from "../../assets/images/youtube/p1.png";
import P2 from "../../assets/images/youtube/p2.png";
import { motion } from "framer-motion";

const Youtube = () => { 
  return (
    <div className="w-full">
      <div className="w-full mx-auto bg-youtube py-8">
        <div className="flex mx-auto 2xl:max-w-[2400px] w-full items-center justify-center">
          <div className="w-11/12 r-player">
            <ReactPlayer
              // url={carVideo}
              controls={true}
              loop={true}
              width="100%"
              height="100%"
              playing={true}
              muted={true}
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex items-center justify-center py-10 lg:py-16">
        <div className="flex flex-col items-center justify-center 2xl:max-w-[2400px] lg:gap-8 gap-5">
          <motion.p
            initial={{ opacity: 0, y: "-40%" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.5, delay: 0}}
            className="text-center text-base sm:text-lg 2xl:text-xl special:text-3xl font-bold uppercase xl:tracking-[18px] sm:tracking-[16px] tracking-[12px]"
          >
            SOME OUR PARTNERS
          </motion.p>

          <div className="flex items-center justify-center special:gap-16 xl:gap-10 lg:gap-8 md:gap-6 sm:gap-5 gap-4">
            <div className="flex items-center justify-center">
              <motion.img
                initial={{ opacity: 0, x: "-10%" }}
                whileInView={{ opacity: 1, x: "0" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                src={P1}
                alt=""
                className="special:w-full xl:w-11/12 lg:w-10/12 md:w-8/12 w-8/12"
              />
            </div>
            <div className="flex items-center justify-center">
              <motion.img
                initial={{ opacity: 0, x: "10%" }}
                whileInView={{ opacity: 1, x: "0" }}
                transition={{ duration: 0.5, delay: 0.6 }}
                src={P2}
                alt=""
                className="special:w-full xl:w-11/12 lg:w-10/12 md:w-8/12 w-8/12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
