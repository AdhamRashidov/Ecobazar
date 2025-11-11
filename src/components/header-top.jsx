import locationIcon from "../assets/icons/locationIcon.svg";
import bottomPointer from "../assets/icons/bottom-pointer.jsx";
import BottomPointer from "../assets/icons/bottom-pointer.jsx";

export const HeaderTop = () => {
  return (
    <div className="container mx-auto px-[30px]">
      <div className=" flex items-center justify-between py-3  text-gray-600 ">
        <div className="flex items-center gap-5">
          <div>
            <img src={locationIcon} alt="locationIcon" />
          </div>
          <div>
            <h3>Store Location: Lincoln- 344, Illinois, Chicago, USA</h3>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex gap-5">
            <h3 className="flex gap-3 items-center">
              Eng
              <BottomPointer/>
            </h3>
            <h3 className="flex gap-3 items-center">
              USD
              <BottomPointer/>
            </h3>
          </div>

          <span className="text-gray-300">|</span>

          <div>
            <h3>Sign In</h3>
          </div>
          <span>/</span>
          <div>
            <h3>Sign up</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
