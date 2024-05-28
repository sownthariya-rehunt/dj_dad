import { Link } from "react-router-dom";
import React, { useState } from "react";
import Slider from "react-slick";
import BG from "../../assets/image_dad/HomePage/video_img.jpg";
import icon01 from "../../assets/images/title_icon.png";
import menu01 from "../../assets/image_dad/sandwich.jpg";
import menuimg from "../../assets/image_dad/chikenBurger.jpg";
import menuimg1 from "../../assets/image_dad/French Fries.jpg";
import menuimg2 from "../../assets/image_dad/CheeseOmelette.jpg";
import menuimg3 from "../../assets/image_dad/AlooParatha.jpg";
import menuimg4 from "../../assets/image_dad/ChickooIcecream.jpg";
import menuimg6 from "../../assets/image_dad/LimeIcedTea.jpg";
import menuimg5 from "../../assets/image_dad/HotCoffee.jpg";
import menuimg7 from "../../assets/image_dad/Sweet-SaltLimeSoda.jpg";
import videoimg from "../../assets/images/video_text.png";
import playimg from "../../assets/images/play.png";

const DeliciousMenu = {
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
};

function Deliciousmenu() {
  const [ytshow, setytShow] = useState(false);

  return (
    <>
      <section className="row_am delicous_menu">
        <div className="container">
          <div
            className="section_title text-center"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <span className="icon">
              <img src={icon01} alt="img" />
            </span>
            <span className="sub_text">Delicious menu</span>
            <h2>
              A restaurant with Traditional delicious menu. <br />
              We Only Serve Real Steaks, Authentic Tastes &amp; <br />
              Authentic Atmosphere, with our steaks.
            </h2>
          </div>
          <div className="menu_listing row_am">
            <div
              className="menu_listing_block"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <div className="diplay_state">
                <div className="menu_name">
                  <h4>Sandwiches</h4>
                </div>
                <div className="list_running">
                  <Slider
                    className=" menuTextSlider"
                    {...DeliciousMenu}
                    slidesToShow={4}
                    autoplay={true}
                    autoplaySpeed={500}
                    arrows={false}
                  >
                    <div className="item">
                      <div className="wrp">
                        <span>Paneer Sandwich</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Chicken Cheese Grill</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Chiken grill Sandwich</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Veg Cheese Grill</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>The DJ DAD Chicken</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Boiled Egg</span>
                      </div>
                    </div>
                  </Slider>
                </div>
                <span className="direction_pointer">
                  <i className="icofont-long-arrow-right" />
                </span>
              </div>
              <div className="hover_state">
                <div className="menu_img">
                  <img src={menu01} alt="img" className="" />
                </div>
                <div className="menu_name ">
                  <h4>
                    <Link to="/menulist1">SANDWICHES</Link>
                  </h4>
                </div>
                <div className="menuMobileLIst">
                  <ul>
                    <li>
                      <span>Paneer Sandwich</span>
                    </li>
                    <li>
                      <span>Chicken Cheese Grill</span>
                    </li>
                    <li>
                      <span>Veg Cheese Grill</span>
                    </li>
                    <li>
                      <span>The DJ DAD Chicken</span>
                    </li>
                    <li>
                      <span>Boiled Egg</span>
                    </li>
                  </ul>
                </div>
                <Link to="/menulist1" className="btn btn_primary">
                  View Our Menu <i className="icofont-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="menu_listing_block"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <div className="diplay_state">
                <div className="menu_name">
                  <h4>BURGERS/BUN</h4>
                </div>
                <div className="list_running">
                  <Slider
                    className="menuTextSlider"
                    slidesToShow={4}
                    autoplay={true}
                    autoplaySpeed={500}
                    arrows={false}
                  >
                    <div className="item">
                      <div className="wrp">
                        <span>Chicken Burger</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Veg Burger</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Bun Muska</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Kheema Bun</span>
                      </div>
                    </div>
                  </Slider>
                </div>
                <span className="direction_pointer">
                  <i className="icofont-long-arrow-right" />
                </span>
              </div>
              <div className="hover_state">
                <div className="menu_img">
                  <img src={menuimg} alt="img" />
                </div>
                <div className="menu_name">
                  <h4>
                    <Link to="/menulist1">BURGERS</Link>
                  </h4>
                </div>
                <div className="menuMobileLIst">
                  <ul>
                    <li>
                      <span>Chicken Burger</span>
                    </li>
                    <li>
                      <span>Veg Burger</span>
                    </li>
                    <li>
                      <span>Bun Muska</span>
                    </li>
                    <li>
                      <span>Kheema Bun</span>
                    </li>
                  </ul>
                </div>
                <Link to="/menulist1" className="btn btn_primary">
                  View Our Menu <i className="icofont-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="menu_listing_block"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <div className="diplay_state">
                <div className="menu_name">
                  <h4>SIDES</h4>
                </div>
                <div className="list_running">
                  <Slider
                    className="menuTextSlider"
                    slidesToShow={4}
                    autoplay={true}
                    autoplaySpeed={500}
                    arrows={false}
                  >
                    <div className="item">
                      <div className="wrp">
                        <span>Chilli Cheese Toast</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>French Fries</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Peri Peri Fries</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Hash Browns</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Chicken Sausage </span>
                      </div>
                    </div>

                    <div className="item">
                      <div className="wrp">
                        <span>Maggie Dry</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Maggie Soupy</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Kheema Pav</span>
                      </div>
                    </div>
                  </Slider>
                </div>
                <span className="direction_pointer">
                  <i className="icofont-long-arrow-right" />
                </span>
              </div>
              <div className="hover_state">
                <div className="menu_img">
                  <img src={menuimg1} alt="img" />
                </div>
                <div className="menu_name">
                  <h4>
                    <Link to="/menulist3">SIDES</Link>
                  </h4>
                </div>
                <div className="menuMobileLIst">
                  <ul>
                    <li>
                      <span>Chilli Cheese Toast</span>
                    </li>
                    <li>
                      <span>French Fries</span>
                    </li>
                    <li>
                      <span>Peri Peri Fries</span>
                    </li>
                    <li>
                      <span>Hash Browns </span>
                    </li>
                    <li>
                      <span>Chicken Sausage </span>
                    </li>
                    <li>
                      <span>Maggie Dry</span>
                    </li>{" "}
                    <li>
                      <span>Maggie Soupy</span>
                    </li>{" "}
                    <li>
                      <span>Kheema Pav</span>
                    </li>
                  </ul>
                </div>
                <Link to="/menulist3" className="btn btn_primary">
                  View Our Menu <i className="icofont-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="menu_listing_block"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <div className="diplay_state">
                <div className="menu_name">
                  <h4>EGG DISHES</h4>
                </div>
                <div className="list_running">
                  <Slider
                    className="menuTextSlider"
                    slidesToShow={4}
                    autoplay={true}
                    autoplaySpeed={500}
                    arrows={false}
                  >
                    <div className="item">
                      <div className="wrp">
                        <span>Regular Omelette</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Scrambled Eggs</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Sunny Side Up</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Cheese Omelette</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Chicken Cheese Omelette</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Omelette Toast Sandwich</span>
                      </div>
                    </div>
                  </Slider>
                </div>
                <span className="direction_pointer">
                  <i className="icofont-long-arrow-right" />
                </span>
              </div>
              <div className="hover_state">
                <div className="menu_img">
                  <img src={menuimg2} alt="img" />
                </div>
                <div className="menu_name">
                  <h4>
                    <Link to="/menulist1">EGG DISHES</Link>
                  </h4>
                </div>
                <div className="menuMobileLIst">
                  <ul>
                    <li>
                      <span>Regular Omelette</span>
                    </li>
                    <li>
                      <span>Scrambled Eggs</span>
                    </li>
                    <li>
                      <span>Sunny Side Up</span>
                    </li>
                    <li>
                      <span>Cheese Omelette</span>
                    </li>
                    <li>
                      <span>Chicken Cheese Omelette</span>
                    </li>
                    <li>
                      <span>Omelette Toast Sandwich</span>
                    </li>
                  </ul>
                </div>
                <Link to="/menulist1" className="btn btn_primary">
                  View Our Menu <i className="icofont-long-arrow-right" />
                </Link>
              </div>
            </div>

            <div
              className="menu_listing_block"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <div className="diplay_state">
                <div className="menu_name">
                  <h4>PARATHAS</h4>
                </div>
                <div className="list_running">
                  <Slider
                    className="menuTextSlider"
                    slidesToShow={4}
                    autoplay={true}
                    autoplaySpeed={500}
                    arrows={false}
                  >
                    <div className="item">
                      <div className="wrp">
                        <span>Aloo Paratha</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Paneer Paratha</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Cheese Paratha</span>
                      </div>
                    </div>
                  </Slider>
                </div>
                <span className="direction_pointer">
                  <i className="icofont-long-arrow-right" />
                </span>
              </div>
              <div className="hover_state">
                <div className="menu_img">
                  <img src={menuimg3} alt="img" />
                </div>
                <div className="menu_name">
                  <h4>
                    <Link to="/menulist1">PARATHAS</Link>
                  </h4>
                </div>
                <div className="menuMobileLIst">
                  <ul>
                    <li>
                      <span>Aloo Paratha</span>
                    </li>
                    <li>
                      <span>Paneer Paratha</span>
                    </li>
                    <li>
                      <span>Cheese Paratha</span>
                    </li>
                  </ul>
                </div>
                <Link to="/menulist1" className="btn btn_primary">
                  View Our Menu <i className="icofont-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="menu_listing_block"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <div className="diplay_state">
                <div className="menu_name">
                  <h4>ICE CREAMS</h4>
                </div>
                <div className="list_running">
                  <Slider
                    className="menuTextSlider"
                    slidesToShow={4}
                    autoplay={true}
                    autoplaySpeed={500}
                    arrows={false}
                  >
                    <div className="item">
                      <div className="wrp">
                        <span>Coffee Toffee</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Coconut</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Mango Delight</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Chickoo</span>
                      </div>
                    </div>
                  </Slider>
                </div>
                <span className="direction_pointer">
                  <i className="icofont-long-arrow-right" />
                </span>
              </div>
              <div className="hover_state">
                <div className="menu_img">
                  <img src={menuimg4} alt="img" />
                </div>
                <div className="menu_name">
                  <h4>
                    <Link to="/menulist1">ICE CREAMS</Link>
                  </h4>
                </div>
                <div className="menuMobileLIst">
                  <ul>
                    <li>
                      <span>Coffee Toffee </span>
                    </li>
                    <li>
                      <span>Coconut</span>
                    </li>
                    <li>
                      <span>Mango Delight </span>
                    </li>
                    <li>
                      <span>Chickoo </span>
                    </li>
                  </ul>
                </div>
                <Link to="/menulist1" className="btn btn_primary">
                  View Our Menu <i className="icofont-long-arrow-right" />
                </Link>
              </div>
            </div>
          

            
            <div
              className="menu_listing_block"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <div className="diplay_state">
                <div className="menu_name">
                  <h4>TEA & COFFEE
</h4>
                </div>
                <div className="list_running">
                  <Slider
                    className="menuTextSlider"
                    slidesToShow={4}
                    autoplay={true}
                    autoplaySpeed={500}
                    arrows={false}
                  >
                    <div className="item">
                      <div className="wrp">
                        <span>Chai
</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Green Tea</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Hot Coffee</span>
                      </div>
                    </div>

                    <div className="item">
                      <div className="wrp">
                        <span>Cold Coffee</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Affogatto</span>
                      </div>
                    </div>
                  </Slider>
                </div>
                <span className="direction_pointer">
                  <i className="icofont-long-arrow-right" />
                </span>
              </div>
              <div className="hover_state">
                <div className="menu_img">
                  <img src={menuimg5} alt="img" />
                </div>
                <div className="menu_name">
                  <h4>
                    <Link to="/menulist1">TEA & COFFEE
</Link>
                  </h4>
                </div>
                <div className="menuMobileLIst">
                  <ul>
                    <li>
                      <span>Chai
</span>
                    </li>
                    <li>
                      <span>Green Tea
</span>
                    </li>
                    <li>
                      <span>Hot Coffee</span>
                    </li>
                    <li>
                      <span>Cold Coffee
</span>
                    </li>
                    <li>
                      <span>Affogatto</span>
                    </li>
                  </ul>
                </div>
                <Link to="/menulist1" className="btn btn_primary">
                  View Our Menu <i className="icofont-long-arrow-right" />
                </Link>
              </div>
            </div>
            
            <div
              className="menu_listing_block"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <div className="diplay_state">
                <div className="menu_name">
                  <h4>REFRESHERS</h4>
                </div>
                <div className="list_running">
                  <Slider
                    className="menuTextSlider"
                    slidesToShow={4}
                    autoplay={true}
                    autoplaySpeed={500}
                    arrows={false}
                  >
                    <div className="item">
                      <div className="wrp">
                        <span>Peach Iced Tea
</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Blue Curraco Iced Tea</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Lime Iced Tea
</span>
                      </div>
                    </div>

                    <div className="item">
                      <div className="wrp">
                        <span>Watermelon Iced Tea

</span>
                      </div>
                      
                    </div>
                   
                  </Slider>
                </div>
                <span className="direction_pointer">
                  <i className="icofont-long-arrow-right" />
                </span>
              </div>
              <div className="hover_state">
                <div className="menu_img">
                  <img src={menuimg6} alt="img" />
                </div>
                <div className="menu_name">
                  <h4>
                    <Link to="/menulist1">DRINKS</Link>
                  </h4>
                </div>
                <div className="menuMobileLIst">
                  <ul>
                    <li>
                      <span>Orange Juice
</span>
                    </li>
                    <li>
                      <span>Lemonade
</span>
                    </li>
                    <li>
                      <span>Lime Soda</span>
                    </li>
                  </ul>
                </div>
                <Link to="/menulist1" className="btn btn_primary">
                  View Our Menu <i className="icofont-long-arrow-right" />
                </Link>
              </div>
            </div>
          </div>

          
        
        </div>
        <div className="video_wraper">
          <div className="action_box" style={{ backgroundImage: `url(${BG})` }}>
            <div
              className="play_vtn d-flex justify-content-center align-items-center"
              onClick={() => setytShow(true)}
            >
              <div className="round_anim">
                <img src={videoimg} alt="img" className="col-12" />
              </div>
              <div className="action_btn">
                <Link
                  to="#"
                  className="popup-youtube play-button"
                  data-url="https://www.youtube.com/embed/NC9KlaxtfLg?autoplay=1&mute=1"
                  data-toggle="modal"
                  data-target="#myModal"
                  title="XJj2PbenIsU"
                >
                  <img src={playimg} alt="img" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {ytshow && (
        <div
          className="modal fade youtube-video show"
          id="myModal"
          tabIndex={-1}
          role="dialog"
          style={{ paddingRight: 17, display: "block" }}
          aria-modal="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content" onClick={() => setytShow(false)}>
              <button
                id="close-video"
                type="button"
                className="button btn btn-default text-right"
                data-dismiss="modal"
                onClick={() => setytShow(false)}
              >
                <i className="icofont-close-line-circled" />
              </button>
              <div className="modal-body">
                <div id="video-container" className="video-container">
                  <iframe
                    id="youtubevideo"
                    width={640}
                    height={360}
                    allowFullScreen=""
                    src="https://www.youtube.com/embed/NC9KlaxtfLg?autoplay=1&mute=1"
                  />
                </div>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Deliciousmenu;
