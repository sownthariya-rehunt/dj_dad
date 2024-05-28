import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Wesimg from "../../assets/images/smilly.png";
import WeIcon from "../../assets/images/knife_icon.png";
import Weimg from "../../assets/image_dad/HomePage/whowe.jpg";
import Wechef from "../../assets/image_dad/HomePage/DJdad.jpg";
import Wetext from "../../assets/images/who_text.png";
import gallery01 from "../../assets/image_dad/AlooParatha.jpg";
import gallery02 from "../../assets/image_dad/Affogatto.jpg";
import gallery03 from "../../assets/image_dad/ChickenSausage.jpg";
import gallery04 from "../../assets/image_dad/Lemonade.jpg";
import gallery05 from "../../assets/image_dad/MaggieSoupy.jpg";
import gallery06 from "../../assets/image_dad/SunnySideUp.jpg";
import gallery07 from "../../assets/image_dad/OrangeJuice.jpg";
import gallery08 from "../../assets/image_dad/Sweet-SaltLimeSoda.jpg";

const Whoslider = {
  infinite: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 10,
        autoplaySpeed: 2000,
        easing: "linear",
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 5,
        autoplaySpeed: 2000,
        easing: "linear",
      },
    },
  ],
};

function WhoWe() {
  return (
    <>
      <div className="row_am who_we_section bg_white_textcher">
        <div
          className="sider_shape"
          data-aos="fade-in"
          data-aos-duration={1500}
        >
          <img src={Wesimg} alt="img" />
        </div>
        <div className="container">
          <div
            className="section_title d-flex justify-content-center align-items-start"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="icon">
              <img src={WeIcon} alt="img" />
            </div>
            <div className="text">
              <span className="sub_text">Who we are</span>
              <h2>
                Luxurious restaurant with A rare taste <br /> you can’t find
                anywhere.{" "}
              </h2>
            </div>
          </div>
          <div className="row row_am">
            <div className="col-md-6">
              <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                <img className="img-fluid radius_img" src={Wechef} alt="img" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="who_We_text">
                <p data-aos="fade-up" data-aos-duration={1500}>
                  Welcome to DJ DAD Cafe, your go-to destination for delicious
                  homemade food and a warm, welcoming atmosphere in Pune,
                  Maharashtra. Located near ABC Farms at Salunkhe Vihar Society,
                  our cafe offers a cozy and comfortable space where you can
                  savor freshly prepared meals while enjoying lively
                  conversations and interactive fun games.
                </p>
                <p>
                  At DJ DAD Cafe, we take pride in our custom tiffin services,
                  freshly baked goods, meal plans tailored to your preferences,
                  and the option to place custom orders. Our menu features a
                  variety of freshly served dishes made with love and care.
                </p>

                <p>
                  Whether you're looking for the best cafe in Pune to unwind
                  after a long day or a place to connect with friends over good
                  food, DJ DAD Cafe provides the perfect setting. Join us and
                  experience a relaxed atmosphere where you can indulge in
                  hearty meals and create lasting memories. .
                </p>
                <div
                  className="chef_block d-flex justify-content-center align-items-center"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                >
                  <img className="chef_img" src={Weimg} alt="img" />
                  <img className="text_img" src={Wetext} alt="img" />
                </div>
                <div
                  className="action_block"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                >
                  <ul className="social_media d-flex align-content-center">
                    <li>
                      <Link to="https://www.facebook.com/@djdadcafe" >
                        <i className="icofont-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://twitter.com/">
                        <i className="icofont-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/@djdadcafe">
                        <i className="icofont-instagram" />
                      </Link>
                    </li>
                    <li>
                    <Link to="https://www.whatsapp.com/channel/8766613536">  <i className="icofont-whatsapp" /></Link>
                  
                    </li>
                    {/* <li>
                      <Link to="#">
                        <i className="icofont-pinterest" />
                      </Link>
                    </li> */}
                  </ul>
                  <Link to="/contact" className="btn btn_primary">
                    Get direction <i className="icofont-location-pin" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery_direction_right gallery_slider">
          <Slider
            className="Slider-Who"
            {...Whoslider}
            id="gallery_flow_right"
            data-aos="fade-in"
            data-aos-duration={1500}
            slidesToShow={11.5}
            arrows={false}
            autoplay={true}
            autoplaySpeed={1000}
          >
            <div className="item">
              <div className="img">
                <img src={gallery01} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery02} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery03} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery04} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery01} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery02} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery03} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery04} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery01} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery02} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery03} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery04} alt="img" />
              </div>
            </div>
          </Slider>
          <Slider
            className="Slider-Who"
            {...Whoslider}
            id="gallery_flow_left"
            data-aos="fade-in"
            data-aos-duration={1500}
            rtl={true}
            slidesToShow={11.5}
            arrows={false}
            autoplay={true}
            autoplaySpeed={1000}
          >
            <div className="item">
              <div className="img">
                <img src={gallery05} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery06} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery07} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery08} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery05} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery06} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery07} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery08} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery05} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery06} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery07} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery08} alt="img" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default WhoWe;
