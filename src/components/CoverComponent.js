import React from 'react';
import bit from "../assets/bit.png";
import graph from "../assets/graph.png";

export default function CoverComponent() {
    return (
        <div className='cover'>
            <div className='cover_top'>
                <h1>Buy Bitcoin with INR</h1>
                <p>Join the world's largest crypto exchange. Designed for India</p>
                <button className="yellow_button">Register Now</button>
            </div>

            <div className='cover_middle cover_grid'>

                <div className="grid_comp">
                    <div className="comp_top">
                        <div className="comp_top_head">
                            <img src="https://th.bing.com/th/id/R.8a159f3eb58e87ce0352c72abb44d613?rik=TL7%2fm4Yh%2bbmm%2bg&pid=ImgRaw&r=0" alt="bitcoin" />
                            <div>
                                <h2>BNB/BUSD</h2>
                                <p>Volume 7,03,35,229,734 BUSD</p>
                            </div>
                            <p className="color_green">1.17%</p>
                        </div>
                    </div>
                    <div className="comp_middle">
                        <h1 className="color_green">304.48 </h1>
                        <p>$304.41</p>
                    </div>

                    <div className="comp_bottom">
                        <img src={graph} alt="graph" />
                        <div>
                            <img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="grid_comp">
                    <div className="comp_top">
                        <div className="comp_top_head">
                            <img src="https://pbs.twimg.com/profile_images/1340063829347225600/fMUvnUG8_400x400.jpg" alt="bitcoin" />
                            <div>
                                <h2>GRT/BUSD</h2>
                                <p>Volume 7,03,35,229,734 BUSD</p>
                            </div>
                            <p className="color_green">2.1%</p>
                        </div>
                    </div>
                    <div className="comp_middle">
                        <h1 className="color_red">304.48 </h1>
                        <p>$304.41</p>
                    </div>
                    <div className="comp_bottom">
                        <img src={graph} alt="graph" />
                        <div>
                            <img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="grid_comp">
                    <div className="comp_top">
                        <div className="comp_top_head">
                            <img src="https://th.bing.com/th/id/OIP.8tGhSxnFg4qpAoXMtClU9QHaHD?pid=ImgDet&rs=1" alt="bitcoin" />
                            <div>
                                <h2>DOT/BUSD</h2>
                                <p>Volume 7,03,35,229,734 BUSD</p>
                            </div>
                            <p className="color_green">1.17%</p>
                        </div>
                    </div>
                    <div className="comp_middle">
                        <h1 className="color_red">304.48 </h1>
                        <p>$304.41</p>
                    </div>
                    <div className="comp_bottom">
                        <img src={graph} alt="graph" />
                        <div>
                            <img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="grid_comp">
                    <div className="comp_top">
                        <div className="comp_top_head">
                            <img src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png" alt="bitcoin" />
                            <div>
                                <h2>ETH/BUSD</h2>
                                <p>Volume 7,03,35,229,734 BUSD</p>
                            </div>
                            <p className="color_red">1.17%</p>
                        </div>
                    </div>
                    <div className="comp_middle">
                        <h1 className="color_green">304.48 </h1>
                        <p>$304.41</p>
                    </div>
                    <div className="comp_bottom">
                        <img src={graph} alt="graph" />
                        <div>
                            <img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>

            <div className='cover_bottom'>

                <h1>Market trend</h1>


                <div className="price_table">

                    <div className="price_header">
                        <div className="name">
                            <p>Name</p>
                        </div>
                        <div className="name">
                            <p>Last Price</p>
                        </div>
                        <div className="name">
                            <p>24th Change</p>
                        </div>
                        <div className="name">
                            <p>Market</p>
                        </div>
                        <div className="name">
                            <p></p>
                        </div>
                    </div>

                    <div className="price_header">
                        <div className="coin_data">
                            <img src="https://th.bing.com/th/id/R.8a159f3eb58e87ce0352c72abb44d613?rik=TL7%2fm4Yh%2bbmm%2bg&pid=ImgRaw&r=0" alt="bitcoin" />
                            <h2>BNB</h2>
                            <p>BNB</p>
                        </div>
                        <div className="coin_data">
                            <h3>$301.12</h3>
                        </div>
                        <div className="coin_data">
                            <h4>-0.003</h4>
                        </div>
                        <div className="coin_data_graph">
                            <img src={graph} alt="graph" />
                        </div>
                        <div className="coin_data">
                            <button>Buy</button>
                        </div>
                    </div>
                    <div className="price_header">
                        <div className="coin_data">
                            <img src={bit} alt="bitcoin" />
                            <h2>Bitcoin</h2>
                            <p>BTC</p>
                        </div>
                        <div className="coin_data">
                            <h3>$301.12</h3>
                        </div>
                        <div className="coin_data">
                            <h4>-0.003</h4>
                        </div>
                        <div className="coin_data_graph">
                            <img src={graph} alt="graph" />
                        </div>
                        <div className="coin_data">
                            <button>Buy</button>
                        </div>
                    </div>
                    <div className="price_header">
                        <div className="coin_data">
                            <img src="https://th.bing.com/th/id/OIP.8tGhSxnFg4qpAoXMtClU9QHaHD?pid=ImgDet&rs=1" alt="bitcoin" />
                            <h2>Ethereum</h2>
                            <p>ETH</p>
                        </div>
                        <div className="coin_data">
                            <h3>$301.12</h3>
                        </div>
                        <div className="coin_data">
                            <h4>-0.003</h4>
                        </div>
                        <div className="coin_data_graph">
                            <img src={graph} alt="graph" />
                        </div>
                        <div className="coin_data">
                            <button>Buy</button>
                        </div>
                    </div>
                    <div className="price_header">
                        <div className="coin_data">
                            <img src="https://th.bing.com/th/id/R.21020394517924df4a0f25520b541e7e?rik=oGnPes787Acamg&pid=ImgRaw&r=0" alt="bitcoin" />
                            <h2>ProjectG.</h2>
                            <p>GAL</p>
                        </div>
                        <div className="coin_data">
                            <h3>$301.12</h3>
                        </div>
                        <div className="coin_data">
                            <h4>-0.003</h4>
                        </div>
                        <div className="coin_data_graph">
                            <img src={graph} alt="graph" />
                        </div>
                        <div className="coin_data">
                            <button>Buy</button>
                        </div>
                    </div>
                    <div className="price_header">
                        <div className="coin_data">
                            <img src="https://th.bing.com/th/id/OIP.IG5KX_QPZY_jSetkY7w5uAHaHa?pid=ImgDet&w=1000&h=1000&rs=1" alt="bitcoin" />
                            <h2>GreenM.</h2>
                            <p>GMT</p>
                        </div>
                        <div className="coin_data">
                            <h3>$301.12</h3>
                        </div>
                        <div className="coin_data">
                            <h4>-0.003</h4>
                        </div>
                        <div className="coin_data_graph">
                            <img src={graph} alt="graph" />
                        </div>
                        <div className="coin_data">
                            <button>Buy</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom_line">
                <h2>View More Markets</h2>
                <p>Introducing Unifi Protocol DAO (UNFI) on Binance Launchpool! Farm UNFI By Staking BNB, BUSD & ETH Tokens 11-13 More</p>
            </div>
        </div>

    )
}
