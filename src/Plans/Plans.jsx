import React from "react";
import "./Plans.css";
import { plansData } from "../data/PlansData";
import '../App.css';

const Plans = () => {
    return (
        <div className="plans-container">
            <div className="blur plan-blur-1"></div>
            <div className="blur plan-blur-2"></div>
            <div className="programs-header" style={{gap: '2rem'}}>
                <span className="stroke-text">READ TO START</span>
                <span>YOUR JOURNEY </span>
                <span className="stroke-text">NOW WITHUS</span>
            </div>

            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span style={{fontWeight:'bold'}}>$ {plan.price}</span>


                        <div className="features">
                            {plan.features.map((feature,i)=> (
                                <div className="feature">
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div><span>See More Benefits...</span>
                        </div>
                        <button className="btn">Join Now</button>
                    </div>
                    
                ))}
            </div>
        </div>


    );
};

export default Plans;