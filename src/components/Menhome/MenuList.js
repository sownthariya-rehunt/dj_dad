import React from 'react'
import Slider from 'react-slick';

const MenuOptions = {
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 11,
        autoplaySpeed: 1000,
        easing: "linear"

      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
}

function MenuList() {

  return (
    <>
      <div className="menu_list_section">
        <div className="Slider-option" id="menu_list_flow" >
          <Slider className='Slider-List' {...MenuOptions} slidesToShow={10} infinite={true} arrows={false} autoplay={true} speed={5000} autoplaySpeed={0} easing={"linear"}>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span>SANDWICHES</span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span>Burger</span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span> SIDES
 </span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span> EGG DISHES </span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span>PARATHAS </span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span>ICE CREAMS
</span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span>TEA 
</span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span>COFFEE </span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span> REFRESHERS </span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span>DRINKS </span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span>Lemon Tea</span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span>chiken sandwich</span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span>French Fries </span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  )
}

export default MenuList