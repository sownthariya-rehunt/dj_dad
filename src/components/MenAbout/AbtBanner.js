import React from 'react'
import AboutImg from '../../assets/image_dad/About/home10.png'
import Icon01 from '../../assets/images/title_icon.png'
import abt01 from '../../assets/image_dad/About/home13.jpg'
import abt02 from '../../assets/image_dad/About/home2.jpg'
import abt03 from '../../assets/image_dad/About/home3.jpg'
import abt04 from '../../assets/image_dad/About/home4.jpg'
import abt05 from '../../assets/image_dad/About/home6.jpg'

function AbtBanner() {
  return (
    <>
      <section className="abt_banner">
        <div className="right_shape position-absolute">
          <img src={AboutImg} alt="img" />
        </div>
        <div className="section_title text-center">
          <span className="icon" data-aos="fade-down" data-aos-duration={1500}>
            <img src={Icon01} alt="img" />
          </span>
          <span className="sub_text mb-1" data-aos="fade-down" data-aos-duration={1500} >
            Our Story{" "}
          </span>
          <h2 data-aos="zoom-in" data-aos-duration={1500}>
          Enjoy a unique dining experience with rare flavors you can't find anywhere else in India
          </h2>
          <p className="lead" data-aos="fade-up" data-aos-duration={1500}>
          Experience culinary excellence at our restaurant, where every meal is a masterpiece. Join us for an unforgettable dining adventure with flavors that delight and ambiance that soothes.
          </p>
        </div>
        <div className="abt_img">
          <div className="img" data-aos="fade-right" data-aos-duration={1500} data-aos-delay={200} >
            <img src={abt01} alt="img" />
          </div>
          <div className="img" data-aos="fade-right" data-aos-duration={1500} data-aos-delay={100} >
            <img src={abt02} alt="img" />
          </div>
          <div className="img" data-aos="fade-up" data-aos-duration={1500}>
            <img src={abt03} alt="img" />
          </div>
          <div className="img" data-aos="fade-left" data-aos-duration={1500} data-aos-delay={100} >
            <img src={abt04} alt="img" />
          </div>
          <div className="img" data-aos="fade-left" data-aos-duration={1500} data-aos-delay={200} >
            <img src={abt05} alt="img" />
          </div>
        </div>
      </section>
    </>
  )
}

export default AbtBanner