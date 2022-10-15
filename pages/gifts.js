import React, { useEffect, useState } from "react";
import Link from "next/link";
const Gifts = (props) => {
    const [from, setfrom] = useState("Us");
    useEffect(() => {
        setfrom(
            localStorage.getItem("from")
                ? localStorage.getItem("from")
                : "You Name"
        );
    }, []);

    const GiftRender = () =>
        props.gifts.map((gift, index) => {
            return (
                <Link href={gift.link} key={index}>
                    <a>
                        <div
                            className="gift__item"
                            style={{ background: gift.color }}
                        >
                            <img src={`/gifts/${gift.image}`} alt="gift" />
                            <h6>{gift.name}</h6>
                            <h6>From: ₹{gift.price}</h6>
                        </div>
                    </a>
                </Link>
            );
        });

    return (
        <section id="Gift">
            <div className="text">
                <div className="backbutton">
                    <Link href={`/?from=${from}`}>
                        <a>
                            <i className="bx bxs-home-alt-2"></i>
                        </a>
                    </Link>
                </div>
                <div className="title">
                    <h1>Great Deals</h1>
                    <img src="/fire.png" />
                </div>
                <h3>
                    From <span>Amazon</span>
                </h3>
            </div>
            <div className="gift">
                <GiftRender />
            </div>
            <div className="botttom-button">
                <Link href="https://amzn.to/3MAKiYU">
                    <a>
                        <button>Open Amazon</button>
                    </a>
                </Link>
            </div>
        </section>
    );
};

const db = {
    gifts: [
        {
            id: 1,
            image: "1.png",
            name: "SmartPhones",
            price: "5X,999",
            color: "#F9F4F0",
            link: "https://amzn.to/3rXXI84",
        },
        {
            id: 1,
            image: "2.png",
            name: "Buds",
            price: "2X,999",
            color: "#D8D8D9",
            link: "https://amzn.to/3eEEvFf",
        },
        {
            id: 1,
            image: "3.png",
            name: "Smart watches",
            price: "X,999",
            color: "#88AADC",
            link: "https://amzn.to/3rVxrXM",
        },
        {
            id: 1,
            image: "4.png",
            name: "Clothes",
            price: "1XX",
            color: "#ffff",
            link: "https://amzn.to/3rXMOPv",
        },
        {
            id: 1,
            image: "5.png",
            name: "Footwear",
            price: "599",
            color: "#ffee8e",
            link: "https://amzn.to/3evGhbV",
        },
        {
            id: 1,
            image: "6.png",
            name: "Purse",
            price: "479",
            color: "#9DB3B0",
            link: "https://amzn.to/3yHnLUL",
        },
    ],
};
export async function getServerSideProps(context) {
    const gifts = db.gifts;
    return { props: { gifts: gifts } };
}

export default Gifts;
