import opa from "../../assets/images/opa.png";
import opaBiqin1 from "../../assets/images/opa-biqin-1.png";
import opaBiqin2 from "../../assets/images/opa-biqin-2.png";
import { FreeIcon } from "../../assets/icons/freeIcon.jsx";
import { CustomerIcon } from "../../assets/icons/customerIcon.jsx";
import { PaymentIcon } from "../../assets/icons/paymentIcon.jsx";
import { MoneyBackIcon } from "../../assets/icons/moneyBackIcon.jsx";
import { RightArrow } from "../../assets/icons/rightArrow.jsx";
import vegetables from "../../assets/images/vegetables.png";
import meat from "../../assets/images/meat.png";
import fruit from "../../assets/images/fruit.png";

import { PopularCategories } from "./components/popularCategories";
import { PopularProducts } from "./components/popularProducts";

const Home = () => {
  return (
    <div>
      <div className="container flex justify-between items-center py-5 gap-x-5">
        <div className="w-[872px]">
          <img src={opa} alt="opa" />
        </div>

        <div className="flex flex-col gap-y-5">
          <img className="w-[423px]" src={opaBiqin1} alt="opa-biqin-1" />
          <img className="w-[423px]" src={opaBiqin2} alt="opa-biqin-2" />
        </div>
      </div>
      <div>
        {/* Intro */}
        <section className="container">
          <div className="container flex gap-[5px] items-center justify-between p-10 rounded-2xl shadow-2xl bg-white">
            <div className="flex items-center gap-4 ">
              <div>
                <FreeIcon />
              </div>
              <div>
                <h1 className="text-4 font-semibold">Free Shipping</h1>
                <h1 className="text-[14px] font-normal text-gray-400">
                  Free shipping on all your order
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
              <div>
                <CustomerIcon />
              </div>
              <div>
                <h1 className="text-4 font-semibold">Customer Support 24/7</h1>
                <h1 className="text-[14px] font-normal text-gray-400">
                  Instant access to Support
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
              <div>
                <PaymentIcon />
              </div>
              <div>
                <h1 className="text-4 font-semibold">100% Secure Payment</h1>
                <h1 className="text-[14px] font-normal text-gray-400">
                  We ensure your money is save
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
              <div>
                <MoneyBackIcon />
              </div>
              <div>
                <h1 className="text-4 font-semibold">Money-Back Guarantee</h1>
                <h1 className="text-[14px] font-normal text-gray-400">
                  30 Days Money-Back Guarantee
                </h1>
              </div>
            </div>
          </div>
        </section>
        {/* Intro end */}
      </div>

      <div>
        {/* Popular Categoryies Product */}
        <section className="container pt-[60px]">
          <div>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-[32px] font-semibold text-gray-900 leading-[1.2]">
                Popular Categories
              </h1>
              <button className="flex items-center gap-3 text-[#00b207] text-[16px] font-medium">
                <h1>View All</h1>
                <RightArrow />
              </button>
            </div>

            <PopularCategories />

            <div className="flex justify-between items-center mt-[50px]">
              <h1 className="text-[32px] font-semibold text-gray-900 leading-[1.2]">
                Popular Categories
              </h1>
              <button className="flex items-center gap-3 text-[#00b207] text-[16px] font-medium">
                <h1>View All</h1>
                <RightArrow />
              </button>
            </div>

            <PopularProducts />
          </div>
        </section>
        {/* Popular Categoryies Product end */}
      </div>

      <section className="container pt-[60px]">
        <div className="flex gap-6">
          <div>
            <img src={vegetables} alt="vegetables" />
          </div>
          <div>
            <img src={meat} alt="meat" />
          </div>
          <div>
            <img src={fruit} alt="fruit" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
