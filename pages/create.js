import React, { useState, useEffect } from "react";
import Link from "next/link";
import slugify from "react-slugify";

const Create = () => {
    const [from, setfrom] = useState("Us");
    useEffect(() => {
        setfrom(
            localStorage.getItem("from")
                ? localStorage.getItem("from")
                : "You Name"
        );
    }, []);

    const [name, setname] = useState("Your Name");
    const [valuePresent, setvaluePresent] = useState(false);
    const [copyLinkdata, setcopyLinkdata] = useState("copy link");
    const SetThevalue = (e) => {
        if (e !== "") {
            setname(slugify(e));
            setvaluePresent(true);
        }
        if (e === "") {
            setname("Your Name");
            setvaluePresent(false);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setcopyLinkdata("copy link");
        }, 2000);

        return () => {};
    }, [copyLinkdata]);

    const shareData = {
        title: `Happy Diwali from ${name}`,
        text: `*${name}* wishes you a very happy Diwali in a specail way with some great deals from Amazon. So check now fast  #CreateCustomDiwaliWishes #AmazonSeLiya`,
        url: `https://diwali-wishes.vercel.app/?from=${name}`,
    };

    const copyData = () => {
        try {
            navigator.clipboard.writeText(
                `https://diwali-wishes.vercel.app/?from=${name}`,
                setcopyLinkdata("copied")
            );
        } catch {
            alert(
                "Sorry! for inconvenience😢This function is not available in your browser"
            );
        }
    };
    const Sharebutton = () => {
        try {
            navigator.share(shareData);
            console.log("succesful");
        } catch (err) {
            alert(
                "Sorry! for inconvenience😢This function is not available in your browser"
            );
        }
    };

    return (
        <section id="Create">
            <div className="backbutton">
                <Link href={`/?from=${from}`}>
                    <a>
                        <i className="bx bxs-home-alt-2"></i>
                    </a>
                </Link>
            </div>
            <div className="text">
                <div className="title">
                    <h1>Happy Diwali</h1>
                    <img src="/fire.png" />
                </div>
                <h3>
                    Enter <span>{name}</span>
                </h3>
            </div>
            <div className="gift">
                <div className="form">
                    <div className="input">
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            onChange={(e) => SetThevalue(e.target.value)}
                        />
                    </div>
                    {valuePresent ? (
                        <p>https://diwali-wishes.vercel.app/?from={name}</p>
                    ) : null}

                    {valuePresent ? (
                        <>
                            <div className="button">
                                <button onClick={() => Sharebutton()}>
                                    Share
                                </button>
                            </div>
                            <div className="button">
                                <button
                                    onClick={() => {
                                        copyData();
                                    }}
                                >
                                    {copyLinkdata}
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="button">
                                <button
                                    onClick={() =>
                                        alert("Please Enter your name")
                                    }
                                >
                                    Share
                                </button>
                            </div>
                            <div className="button">
                                <button
                                    onClick={() => {
                                        alert("Please Enter your name");
                                    }}
                                >
                                    {copyLinkdata}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            {/* <div className="botttom-button">
                <Link href="/create">
                    <button>Create Your's</button>
                </Link>
            </div> */}
        </section>
    );
};

export default Create;
