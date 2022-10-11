import React from "react";
import Link from "next/link";
const Home = (prop) => {
    return (
        <section id="Home">
            <div className="text">
                <div className="title">
                    <h1>Happy Diwali</h1>
                    <img src="/fire.png" />
                </div>
                <p>In advance: 04d 3h 42sec </p>
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
