import React from "react";
import style_css from "./Related.module.css";
export default function Related() {
  return (
    <div>
      <div>
        <h2>Related</h2>
      </div>
      <div className="h-[395px] w-[305px] rounded-[5px] border-[1px] border-[#B4B1B1]">
        <div className={style_css.item_product}>
          <div className="py-[20px] px-[25px] flex-[1_1_56%]">
            <img
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/60712c4ffd24452fbe87acee00dbf61a_9366/adidas_Ultraboost_DNA_x_LEGO(r)_Colors_Shoes_White_H67955_01_standard.jpg"
              alt="adidas shoes"
              className="w-full h-full"
              //   className="w-[254px] h-[200px] m-auto "
            />
          </div>
          <div className="flex-[1_1_44%]">
            <h3>Adidas Shoes</h3>
            <span>ID: 123</span>
            <div>
              <div>Rate</div>
              <span>50% Off</span>
            </div>
            <div>
              <span>$ 120</span>
              <span>cart</span>
            </div>
            <button>Available</button>
          </div>
        </div>
      </div>
    </div>
  );
}
