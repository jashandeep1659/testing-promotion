import React, { useState } from "react";
import Link from "next/link";
const Create = () => {
    const [name, setname] = useState("Your Name");
    const [valuePresent, setvaluePresent] = useState(false);

    const SetThevalue = (e) => {
        if (e !== "") {
            setname(e);
            setvaluePresent(true);
        }
        if (e === "") {
            setname("Your Name");
            setvaluePresent(false);
        }
    };
    const shareData = {
        title: `Happy Diwali from ${name}`,
        text: `Happy Diwali from ${name}`,
        url: `http://localhost:3000/?from=${name}`,
    };
    const Sharebutton = () => {
        try {
            navigator.share(shareData);
            console.log("succesful");
        } catch (err) {
            alert("un");
        }
    };

    return (
        <section id="Create">
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
                        <p>http://localhost:3000/?from={name}</p>
                    ) : null}
                    <div className="button">
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    `http://localhost:3000/?from=${name}`
                                );
                            }}
                        >
                            Copy Link
                        </button>
                    </div>
                    <div className="button">
                        <button onClick={() => Sharebutton()}>Share</button>
                    </div>
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
