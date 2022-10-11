import React from "react";

const Gifts = () => {
    return (
        <section id="Gift">
            <div className="text">
                <div className="title">
                    <h1>Great Deals</h1>
                    <img src="/fire.png" />
                </div>
                <h3>
                    From <span>Amazon</span>
                </h3>
            </div>
            <div className="gift">
                <div className="gift__item">
                    <img src="/img.png" alt="gift" />
                    <h6>From: ₹1,599</h6>
                </div>
                <div className="gift__item">
                    <img src="/img.png" alt="gift" />
                    <h6>From: ₹1,599</h6>
                </div>
                <div className="gift__item">
                    <img src="/img.png" alt="gift" />
                    <h6>From: ₹1,599</h6>
                </div>
                <div className="gift__item">
                    <img src="/img.png" alt="gift" />
                    <h6>From: ₹1,599</h6>
                </div>
                <div className="gift__item">
                    <img src="/img.png" alt="gift" />
                    <h6>From: ₹1,599</h6>
                </div>{" "}
                <div className="gift__item">
                    <img src="/img.png" alt="gift" />
                    <h6>From: ₹1,599</h6>
                </div>
            </div>
            <div className="botttom-button">
                <button>Open Amazon</button>
            </div>
        </section>
    );
};

export default Gifts;
