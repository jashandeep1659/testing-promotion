import React, { useEffect, useState } from "react";
import Link from "next/link";
import Countdown from "react-countdown";

const Home = (prop) => {
    const DiwaliDate = new Date("2022-10-24T00:00:00");
    const [Timepending, setTimepending] = useState(null);
    useEffect(() => {
        setTimepending(DiwaliDate);
    }, []);

    const countDownRender = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <p>Happy Diwali</p>;
        } else {
            return (
                <p className="time">
                    {days}d:{hours}h:{minutes}m:{seconds}s
                </p>
            );
        }
    };

    return (
        <section id="Home">
            <div className="text">
                <div className="title">
                    <h1>Happy Diwali</h1>
                    <img src="/fire.png" />
                </div>
                <div className="advance">
                    In advance:
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
                    <img src="/gift.png" alt="gift" />
                    <div className="button">
                        <Link href="/gifts">
                            <button>Gifts for you</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="botttom-button">
                <Link href="/create">
                    <button>Create Yours</button>
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
