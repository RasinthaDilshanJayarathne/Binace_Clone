import React from 'react';
import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.png";

export default function BlogComponent() {
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
					<img src={news1} alt="" />
					<p>Buy Crypto in India on Binance</p>
				</div>
				<div className="grid_comp">
					<img src={news2} alt="" />
					<p>What Is P2P trading ?</p>
				</div>
				<div className="grid_comp">
					<img src={news3} alt="" />
					<p>Buy and transfer cryptocurrency via WazirX</p>
				</div>

			</div>
		</div>
	)
}
