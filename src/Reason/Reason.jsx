import React from "react";
import './Reason.css';
import '../App.css';
import Image1 from '../assets/img1.png';
import Image2 from '../assets/img2.png';
import Image3 from '../assets/img3.png';
import Image4 from '../assets/img4.png';
import Tick from '../assets/tick.png';
import Nb from '../assets/nb.png';
import Adidas from '../assets/adidash.png';
import Nike from '../assets/nike.png'

const Reason = () => {
    return(
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={Image1} alt="" />
                <img src={Image2} alt="" />
                <img src={Image3} alt="" />
                <img src={Image4} alt="" />
            </div>
            <div className="right-r">
                <span>Some Reasons</span>

                <div>
                    <spna className="stroke-text">Why</spna>
                    <spna>Choose us?</spna>
                </div>

            <div className="details-r">
                <div>
                    <img src={Tick} alt="" />
                    <span>OVER 140+ EXPERT COACHS</span>
                </div>
                <div>
                    <img src={Tick} alt="" />
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>
                <div>
                    <img src={Tick} alt="" />
                    <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                </div>
                <div>
                    <img src={Tick} alt="" />
                    <span>RELIABLE PARTNERS</span>
                </div>
                </div>
                <span style={{
                    color :  "var(--gray)",
                    fontWeight:"normal",
                }}
                >
                    OUR PARTNERS
                </span>

                <div className="partners">
                    <img src={Nb} alt="" />
                    <img src={Adidas} alt="" />
                    <img src={Nike} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reason