import dragon from "../../assets/images/dragon.png";
import cloud from "../../assets/images/cloud.png";
import pineapple from "../../assets/images/pineapple.png";
import watermelon from "../../assets/images/watermelon.png";
import { motion } from "framer-motion";

const Gallery2 = () => {
  return (
    <div className="w-full bg-gallery">
      <div className="flex flex-col items-center w-full px-3 lg:px-5  py-10 lg:py-16 gap-3">
        <motion.p
          initial={{ opacity: 0, y: "-40%" }}
          whileInView={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-center text-base sm:text-lg 2xl:text-xl special:text-3xl font-bold uppercase xl:tracking-[18px] sm:tracking-[16px] tracking-[12px]"
        >
          {" "}
          @Winlads
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: "40%" }}
          whileInView={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-base sm:text-lg 2xl:text-xl special:text-3xl font-bold "
        >
          Follow Us On Instagram
        </motion.p>

        <div className="flex w-full 2xl:max-w-[2400px] flex-col gap-3">
          <div className="bg-transparent h-full  py-6 sm:py-8 lg:py-12 w-full ">
            <div className="mx-auto max-w-[2000px] px-4 md:px-8">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-6 xl:gap-8">
                {/* image - start */}
                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <img
                    src={dragon}
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                  <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    Instagram
                  </span>
                </a>
                {/* image - end */}

                {/* image - start */}
                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <img
                    src={watermelon}
                    loading="lazy"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                  <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    Instagram
                  </span>
                </a>
                {/* image - end */}
                {/* image - start */}
                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <img
                    src={cloud}
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                  <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    Instagram
                  </span>
                </a>
                {/* image - end */}
                {/* image - start */}
                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <img
                    src={pineapple}
                    loading="lazy"
                    alt="Photo by Lorenzo Herrera"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                  <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    Instagram
                  </span>
                </a>
                {/* image - end */}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center ">
            <motion.button
              initial={{ opacity: 0, y: "-40%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl px-3 2xl:px-5 special:px-8 py-2 2xl:py-3 special:py-5 text-[#d4d4d4] bg-black rounded-lg hover:text-white hover:bg-[#00F0FF]"
            >
              {" "}
              Load More...
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery2;
