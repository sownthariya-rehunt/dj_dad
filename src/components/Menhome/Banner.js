import React from 'react'
import { Link } from 'react-router-dom'
import Img01 from '../../assets/images/banner_left_shap.png'
import Img02 from '../../assets/images/banner_right_shap.png'
import Img03 from '../../assets/image_dad/HomePage/banner2.jpg'
import Img04 from '../../assets/images/chef_cap.png'
import Img05 from '../../assets/images/ban_02_shape.png'
import Img06 from '../../assets/image_dad/HomePage/banner5.jpg'
import Img07 from '../../assets/images/since_round.png'
import Img08 from '../../assets/images/drop_arrow.svg'
import Img09 from '../../assets/image_dad/HomePage/banner4.jpg'
import Img10 from '../../assets/images/ban_03_shape.png'

function Banner() {
  return (
    <>
      <section className="banner_section">
        <div className="social_media_side side_fixer">
          <ul>
            <li>
              <a href="https://www.facebook.com/@djdadcafe" target='_blank'>Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/" target='_blank'>👩‍🍳</a>
            </li>
            <li>
              <a href="https://www.instagram.com/@djdadcafe" target='_blank'>Instagram</a>
            </li>
           
            <li>
              <a href="https://www.youtube.com/" target='_blank'>👩‍🍳</a>
            </li>
          </ul>
        </div>
        <div className="timing_side side_fixer">
          <ul>
            <li>
              <span>Morning: 8.15 AM - 11.45 AM </span>
            </li>
            <li>
              <span>Evening: 4 PM - 10.15 PM</span>
            </li>
          </ul>
        </div>
        <div className="banner_side_shape">
          <div className="left_shape">
            <img src={Img01} alt="img" />
          </div>
          <div className="right_shape">
            <img src={Img02} alt="img" />
          </div>
        </div>
        <div className="container">
          <div className="banner_inner">
            <h1 data-aos="fade-up" data-aos-duration={1500}>
            👨‍🍳 dj dad cafe👩‍🍳 , <br /> Indulge in Mouthwatering  <picture>
        <source
          srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f924/512.webp"
          type="image/webp"
        />
        <img
          src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f924/512.gif"
          alt="Mouthwatering Face"
          width="50"
          height="50"
        />
      </picture> Steaks at India's Premier Culinary Destination!
            </h1>
            
            <p className="lead" data-aos="fade-up" data-aos-duration={1500}>
              Providing an enjoyable dining experience  at rich location of India!
            </p>
            <div className="banner_images">
              <div className="img" data-speed={100}>
                <img className="radius_img" src={Img03} alt="img" />
                <div className="bt_curve_text">
                  
                <img className="badge_shape" src={Img04} alt="img" />
                </div>
              </div>
              <div className="img" data-speed={100}>
                <img src={Img05} className="side_shape" alt="img" />
                <img className="radius_img" src={Img06} alt="img" />
                <div className="banner_badge">
                  <div className="since">
                    <p>since</p>
                    <span>1975</span>
                  </div>
                  <div className="round_anim">
                    <img src={Img07} alt="img" />
                  </div>
                </div>
                <div className="go_down">
                  <img src={Img08} alt="img" />
                </div>
              </div>
              <div className="img" data-speed={100}>
                <img className="radius_img" src={Img09} alt="img" />
                <img className="badge_shape" src={Img10} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner