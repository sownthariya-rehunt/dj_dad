import React from 'react'
import { Link } from 'react-router-dom'
import Ctn01 from '../../assets/image_dad/HomePage/pngegg (4).png'
import Ctn02 from '../../assets/image_dad/HomePage/pngegg (1).png'
import Ctn03 from '../../assets/image_dad/HomePage/pngegg (5).png'
import Ctn04 from '../../assets/image_dad/HomePage/Contact1.jpg'

function ContactUS() {
  return (
    <>
      <section className="contact_us_section">
        <div className="right_shape position-absolute">
          <img src={Ctn01} alt="img"  className='col-8'/>
        </div>
        <div className="left_shape position-absolute">
          <img src={Ctn02} alt="img"  />
        </div>
        <div className="container">
          <div className="section_title text-center">
            <span className="icon" data-aos="fade-down" data-aos-duration={1500}>
              <img src={Ctn03} alt="img"/>
            </span>
            <span className="sub_text mb-1" data-aos="fade-up" data-aos-duration={1500} >
              Contact us
            </span>
            <h2 data-aos="fade-up" data-aos-duration={500}>
              Get in touch with us
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="img" data-aos="fade-up" data-aos-duration={500}>
                <img className="radius_img" src={Ctn04} alt="img" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact_box">
                <ul className="contact_listing" data-aos="fade-up" data-aos-duration={500} >
                  <li>
                    <p className="sub_title">Call us</p>
                    <div className="cnt_block">
                      <Link to="tel:">+91-8766613536</Link>
                      <span>
                        <i className="icofont-ui-call" />
                      </span>
                    </div>
                    <div className="cnt_block">
                      <Link to="tel:+10987654321">+91-8766613536</Link>
                      <span>
                        <i className="icofont-whatsapp" />
                      </span>
                    </div>
                  </li>
                  <li>
                    <p className="sub_title">Email us</p>
                    <div className="cnt_block">
                      <Link to="mailto:">hello@gmail.com</Link>
                      <span>
                        <i className="icofont-envelope-open" />
                      </span>
                    </div>
                  </li>
                  <li>
                    <p className="sub_title">Find us</p>
                    <div className="cnt_block">
                      <p>Near ABC Farms, Salunkhe Vihar Society, Land, Pune, Maharashtra 411048</p>
                      <span>
                        <i className="icofont-location-pin" />
                      </span>
                    </div>
                  </li>
                </ul>
                <form data-aos="fade-up" data-aos-duration={250}>
                  <h3>Say hi, Don’t be shy!</h3>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Phone Number" />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" placeholder="Message" defaultValue={""} />
                  </div>
                  <div className="form-group text-right">
                    <button type="submit" className="btn btn_primary">
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="map" data-aos="fade-up" data-aos-duration={300}>
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.543016907705!2d73.9003874!3d18.480807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x70bcbcdf02b24c5e!2sThe%20Dj%20Dad%20Cafe!5e0!3m2!1sen!2sin!4v1629876543210!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUS