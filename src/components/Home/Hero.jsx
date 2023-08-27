import React from "react";
import Header from "../Header/Header";
import '../../App.css';
import './Hero.css';
import Heart from '../../assets/heart.png';
import ManImage from '../../assets/man-image.png';
import Design from '../../assets/design.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter';
import {motion} from 'framer-motion'
const Hero = () =>{

    const transition = {type: 'spring', duration : 3}
    const mobile = window.innerWidth<=768 ? true: false;
    return(
        <div className="hero" id="home">

            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header/>
{/* the best ad */}
                <div className="the-best-ad">
                    <motion.div
                    initial={{left: mobile? '178px' : '238px' }}
                    whileInView={{left: '8px'}}
                    transition={transition}
                ></motion.div>
                    <span>the best fitness club in the town</span>
                </div>

{/* hero heading */}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape</span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                             In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>

                {/* figures */}
                <div className="figures">
                    <div>
                        <span style={{fontWeight:'bold'}}>
                            <NumberCounter end={140} start={100} delay='4' preFix="+"/>
                            </span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span style={{fontWeight:'bold'}}>
                        <NumberCounter end={978} start={800} delay='4' preFix="+"/>
                        </span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span style={{fontWeight:'bold'}}>
                        <NumberCounter end={50} start={0} delay='4' preFix="+"/>
                        </span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>

                {/* hero button */}
                <div className="hero-button">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
                </div>
            <div className="right-h">
                <button className="btn">Join Now</button>

                <motion.div
                initial= {{right : '-1rem'}}
                whileInView={{right: '4rem'}}
                transition={transition}
                 className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                
                <img src={ManImage} alt=""  className="man-img"/>
                <motion.img
                initial={{right: '11rem'}}
                whileInView={{right: '20rem'}}
                transition={transition}
                src={Design} alt=""  className="design-img"/>

                {/* calories */}
                <motion.div 
                initial={{right : '37rem'}}
                whileInView= {{right: '28rem'}}
                transition={transition}
                className="calories">
                    <img src={Calories} alt="" />
                    <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero