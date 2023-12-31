import React, {useState} from "react";
import './Testimonials.css';
import '../App.css';
import { testimonialsData } from "../data/TestimonialsData";
import LeftArrow from '../assets/leftArrow.png';
import RightArrow from '../assets/RightArrow.png'

const Testimonials =()=>{

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length
    return(
        <div className="testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className="stroke-text">What they</span>
                <span>Say about us</span>
                <span>
                    {testimonialsData[0].review}
                </span>
                <span>
                    <span style={{color: 'orange'}}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="" />

                <div className="arrows">
                    <img 
                    onClick={()=>{
                        selected===0
                        ?setSelected(tLength -1)
                        :setSelected((prev)=>prev - 1);
                    }}
                    src={LeftArrow} alt="" />
                    <img 
                    onClick={()=>{
                        selected===tLength - 1 
                        ? setSelected(0) 
                        : setSelected((prev)=>prev +1);
                    }}
                    src={RightArrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials