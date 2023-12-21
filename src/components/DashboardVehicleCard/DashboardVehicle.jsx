import CatJeep from "../../assets/images/rafflesImages/newJeep.png";

const DashboardVehicleCard = ({
  bgColor,
  name,
  date,
  icon,
  fromColor,
  type,
  onButton,
  color,
}) => {
  const handleClick = () => {
    onButton();
  };

  const dateObject = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const formattedDate = dateObject.toLocaleString('en-US', options);

  return (
    <>
      <div
        className={`flex flex-row justify-between pr-2 rounded-3xl 2xl:rounded-[30px] special:rounded-[40px] w-full py-2 shadow-lg hover:transition hover:duration-300 hover:ease-in-out hover:opacity-75 hover:opacity-100`}
        style={{ backgroundColor: color }}
        onClick={handleClick}
      >
        <img src={CatJeep} alt="" className="flex w-36 special:w-96 2xl:w-48" />
        <div className="flex flex-col space-y-4">
          <div className="flex justify-end">
            <img
              src={icon}
              alt=""
              className="2xl:w-12 xl:w-8 w-8 special:w-16"
            />
            {/* <p>{type}</p> */}
          </div>
          <div className="flex text-end flex-col z-10 pr-2 items-center space-y-2 2xl:space-y-4 special:space-y-4">
              <p className="text-white font-bold xl:text-[12px] text-xs special:text-4xl 2xl:text-[16px] text-center">
                {name}
              </p>
              <p className="text-[10px] text-white special:text-xl 2xl:text-[10px]">
                {formattedDate}
              </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default DashboardVehicleCard;
