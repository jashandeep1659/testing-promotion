// /pages/api/og.tsx

import { ImageResponse } from "@vercel/og";

export const config = {
    runtime: "experimental-edge",
};

export default function handler(req) {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name") ?? "Your Friend";
    const emoji = searchParams.get("emoji") ?? "🔥";
    return new ImageResponse(
        (
            <div
                style={{
                    backgroundColor: "#f9ce0b",
                    borderRadius: "10px",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    flexWrap: "nowrap",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    tw="text-4xl font-bold"
                >
                    Happy Diwali
                </div>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    tw="my-4"
                >
                    from
                </div>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    tw="font-bold text-4xl"
                >
                    {name}
                </div>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    tw="my-4"
                >
                    #CustomDiwaliWish
                </div>
            </div>
        ),
        { width: 390, height: 390 }
    );
}

function enw() {
    return new ImageResponse(
        (
            <div
                style={{
                    backgroundColor: "#f9ce0b",
                    borderRadius: "10px",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    flexWrap: "nowrap",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    tw="text-4xl font-bold"
                >
                    Happy Diwali
                </div>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    tw="my-4"
                >
                    from
                </div>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    tw="font-bold text-4xl"
                >
                    Jashandeep Singh
                </div>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    tw="my-4"
                >
                    #CustomDiwaliWish
                </div>
            </div>
        ),
        {
            width: 390,
            height: 390,
        }
    );
}
