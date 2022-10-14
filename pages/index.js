import React, { useEffect, useState } from "react";
import Link from "next/link";
import Countdown from "react-countdown";
import Head from "next/head";
import slugify from "react-slugify";

const Home = (prop) => {
    const DiwaliDate = new Date("2022-10-24T00:00:00");
    const [Timepending, setTimepending] = useState(null);
    useEffect(() => {
        localStorage.setItem("from", prop.from ? prop.from : "Your Name");
        setTimepending(DiwaliDate);
    }, []);
    const countDownRender = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return null;
        } else {
            return (
                <>
                    In advance:
                    <p className="time">
                        {days}d:{hours}h:{minutes}m:{seconds}s
                    </p>
                </>
            );
        }
    };

    return (
        <section id="Home">
            <Head>
                <meta
                    name="og:title"
                    content={`Happy Diwali ${
                        prop.from !== "Your name"
                            ? `from ${prop.from}`
                            : "wishes for you with some gifts"
                    }`}
                ></meta>
                <meta
                    name="og:description"
                    content={`${
                        prop.from !== "Your name" ? prop.from : "Your Friend"
                    } wishes you a very happy diwali with some gifts check it out`}
                ></meta>
                <meta property="og:type" content="article" />
                <meta
                    property="og:image"
                    content={`https://diwali-wishes.vercel.app/api/og/?name=${prop.from}`}
                />
                <meta
                    property="og:url"
                    content={`https://diwali-wishes.vercel.app/?from=${
                        prop.from ? slugify(prop.from) : "Your Name"
                    }`}
                ></meta>

                <meta
                    property="og:description"
                    content={`${
                        prop.from !== "Your name" ? prop.from : "Your Friend"
                    } wishes you a very happy diwali with some gifts check it out`}
                />
                <meta
                    property="og:site_name"
                    content="Happy Diwali specail way"
                />
            </Head>
            <div className="text">
                <div className="title">
                    <h1>Happy Diwali</h1>
                    <img src="/fire.png" />
                </div>
                <div className="advance">
                    {Timepending ? (
                        <Countdown
                            date={new Date("2022-10-24T00:00:00")}
                            renderer={countDownRender}
                        />
                    ) : null}
                </div>
                <h3>
                    From <span>{prop.from}</span>
                </h3>
            </div>
            <div className="gift">
                <div className="gift__item">
                    {/* <img src="/gift.png" alt="gift" /> */}
                    <video autoPlay loop muted>
                        <source src="/front.mp4" />
                    </video>

                    <div className="button">
                        <Link href="/gifts">
                            <button>Gifts for you</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="botttom-button">
                <Link href="/create">
                    <a>
                        <button>Create Yours</button>
                    </a>
                </Link>
            </div>
        </section>
    );
};

export async function getServerSideProps(context) {
    const from = context.query.from;
    if (from) {
        return {
            props: {
                from: from,
            },
        };
    } else {
        return {
            props: { from: "Your name" }, // will be passed to the page component as props
        };
    }
}

export default Home;
