import React, { useState } from 'react'

import FaqChild from "./FaqChild";


export default function FaqComponent() {

    const [data, set_data] = useState([

        { "key:": 1, "ques": "How to Complete Identity Verification?", "ans": "Verify your Binance account with any of the supported documents by following this guide." },
        { "key:": 2, "ques": "How to Buy Cryptocurrency on Binance P2P?", "ans": "You can now buy cryptocurrencies using Indian Rupees with 0 transaction fees on Binance P2P! Follow this guide for Weband App." },
        { "key:": 3, "ques": "How to Complete Identity Verification?", "ans": "Verify your Binance account with any of the supported documents by following this guide." },
        { "key:": 4, "ques": "How to Complete Identity Verification?", "ans": "Verify your Binance account with any of the supported documents by following this guide." },
        { "key:": 5, "ques": "How to Complete Identity Verification?", "ans": "Verify your Binance account with any of the supported documents by following this guide." },

    ])

    return (
        <div className="blog_comp">

            <div className="blog_header">

                <h1>Getting started</h1>
                <p>Learn how to start trading cryptocurrency today.</p>

                <div className="blog_filter">
                    <button>Buy Crypto</button>
                    <button className="bg_color">Learn About Cryptocurrency</button>
                    <button className="bg_color">Binance Trade</button>
                    <button className="bg_color">Binance Earn</button>
                </div>

            </div>

            <div className="blog_grid">

                <div className="grid_comp">
                    <img src={news_1} alt="" />
                    <p>Buy Crypto in India on Binance</p>
                </div>
                <div className="grid_comp">
                    <img src={news_2} alt="" />
                    <p>What Is P2P trading ?</p>
                </div>
                <div className="grid_comp">
                    <img src={news_3} alt="" />
                    <p>Buy and transfer cryptocurrency via WazirX</p>
                </div>

            </div>
        </div>
    )
}
