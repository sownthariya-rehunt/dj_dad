import React from 'react'
import { Link } from 'react-router-dom'
import Img01 from '../../assets/image_dad/HomePage/pngegg (5).png'
import Img02 from '../../assets/image_dad/Coustomer/2023-04-23 (2).jpg'
import Img03 from '../../assets/image_dad/HomePage/pngegg (2).png'
import Img04 from '../../assets/image_dad/Coustomer/2023-04-23 (1).jpg'

function PrivateSection() {
  return (
    <>
      <section className="row_am privet_event_section bg_white_textcher position-relative">
        <div className="sider_shape" data-aos="fade-in" data-aos-duration={1500}>
          <img src={Img01} alt="img" />
        </div>
        <div className="container">
          <div className="row py_50">
            <div className="col-md-6">
              <div className="privet_text" data-aos="fade-up" data-aos-duration={1500} >
                <div className="section_title">
                  <span className="sub_text">Private events</span>
                  <h2>
                    we provide private event with enjoyable dining experience &amp;
                    traditional cuisine 
                  </h2>
                </div>
                <img className="d-block ml-auto" src={Img02} alt="img"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="privet_info position-relative">
                <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                  <span className="side_icon">
                    <img src={Img03} alt="img" />
                  </span>
                  <img className="img-fluid radius_img" src={Img04} alt="img" />
                </div>
                <p data-aos="fade-up" data-aos-duration={1500}>
                Celebrate your special occasions with us! Whether it's a birthday, anniversary, or any other milestone, we offer pre-booking options to make your day unforgettable. Enjoy customized decorations, delicious cakes, and personalized services tailored to your needs. Book in advance and let us create magical moments for you and your loved ones!
                </p>
                <Link to="/reservation1" className="btn btn_primary" data-aos="fade-up" data-aos-duration={1500} >
                  CONTACT <i className="icofont-long-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivateSection