import React from 'react'
import VdoImg from '../../assets/image_dad/About/home1.jpg'
import videoSrc from '../../assets/video/video1.mp4';

function videoabt() {
    return (
        <>
            <div className="video_section">
                <div className="chef_img">
                    <img src={VdoImg} id="chef_img_id" alt="img" style={{zIndex:1000}} />
                </div>
                <video id="videoBlock" className="img-fluid col-12 p-5 rounded-5" autoPlay muted loop style={{zIndex:-1}}>
                <source src={videoSrc} type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default videoabt