import React from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import CyberTruck from "../assets/CyberTruck.svg";
const MainPage = () => {
	return (
		<>
			<section className="parent-container">
				<div className="child-container">
					<div className="wall-text">
						<h1>Model 3</h1>
						<p>$7,500 Federal Tax Credit Available¹</p>
						<p>
							<a href="">From $29,990 After Est. Savings²</a>
						</p>
					</div>
					<div className="buttons">
						<button className="order-now">Order Now</button>
						<button className="demo-drive">Demo Drive</button>
					</div>
				</div>
			</section>

			<section className="parent-container container-2">
				<div className="child-container">
					<div className="wall-text">
						<h1>Model Y</h1>
						<p>
							<a href="">1.99% APR Financing</a> Ending August 31
						</p>
						<p>From $31,4903³</p>
					</div>
					<div className="buttons">
						<button className="order-now">Order Now</button>
						<button className="demo-drive">Demo Drive</button>
					</div>
				</div>
			</section>

			<section className="parent-container container-3">
				<div className="child-container">
					<div className="wall-text">
						<h1>Model X</h1>
						<p>From $65,990⁴</p>
						<p>
							<a href="">After $14,000 Est. Savings</a>
						</p>
					</div>
					<div className="buttons">
						<button className="order-now">Order Now</button>
						<button className="demo-drive">Demo Drive</button>
					</div>
				</div>
			</section>

			<section className="parent-container container-4">
				<div className="child-container">
					<div className="wall-text" style={{ color: "white" }}>
						<h1>Model S</h1>
						<p>From $68,490⁵</p>
						<p>
							<a href="">After $6,500 Est. Savings</a>
						</p>
					</div>
					<div className="buttons">
						<button className="order-now">Order Now</button>
						<button className="demo-drive">Demo Drive</button>
					</div>
				</div>
			</section>

			<section className="parent-container container-5">
				<div className="child-container">
					<div className="wall-text">
						{/* <h1>Model 3</h1>
						<p>$7,500 Federal Tax Credit Available1</p>
						<p>
							<a href="">From $29,990 After Est. Savings2</a>
						</p> */}
						<img src={CyberTruck} style={{ height: "80px", width: "auto" }} />
					</div>
					<div className="buttons">
						<button className="order-now">Order Now</button>
						<button className="demo-drive">Demo Drive</button>
					</div>
				</div>
			</section>

			<section className="parent-container container-6">
				<div className="child-container">
					<div className="wall-text" style={{ color: "white" }}>
						<h1>Solar Panels</h1>
						<p>
							<a href="">Schedule a Virtual Consultation</a>
						</p>
					</div>
					<div className="buttons">
						<button className="order-now">Order Now</button>
						<button className="demo-drive">Learn More</button>
					</div>
				</div>
			</section>

			<section className="parent-container container-7">
				<div className="child-container">
					<div className="wall-text">
						<h1>Solar Roof</h1>
						<p>Produce Clean Energy From Your Roof</p>
					</div>
					<div className="buttons">
						<button className="order-now">Order Now</button>
						<button className="demo-drive">Learn More</button>
					</div>
				</div>
			</section>

			<section className="parent-container container-8">
				<div className="child-container">
					<div className="wall-text">
						<h1>Powerwall</h1>
					</div>
					<div className="buttons">
						<button className="order-now">Order Now</button>
						<button className="demo-drive">Learn More</button>
					</div>
				</div>
			</section>

			<section className="parent-container container-9">
				<div className="child-container">
					<div className="wall-text">
						<h1>Accessories</h1>
					</div>
					<div className="buttons">
						<button className="order-now">Shop Now</button>
						{/* <button className="demo-drive">Demo Drive</button> */}
					</div>
				</div>
			</section>
		</>
	);
};

export default MainPage;
