import React from "react";
import "./Footer.css";
const Footer = () => {
	return (
		<footer>
			<div className="text-container">
				<p>
					¹$7,500 Federal Tax Credit available for eligible buyers and subject
					to MSRP caps. Model 3 Rear-Wheel <br /> Drive not eligible.
				</p>
				<p>
					²Price before estimated savings is $42,490, excluding taxes and fees.
					Subject to change. Estimated <br /> savings includes $5,000 in{" "}
					<a href="/">gas savings</a> estimated over five years, the $7,500
					Federal Tax Credit and state <br /> incentives, available to eligible
					buyers and subject to MSRP caps. <a href="/">Terms apply.</a>
				</p>
				<p>
					³Price before estimated savings is $44,990, excluding taxes and fees.
					Subject to change. Estimated <br /> savings includes $6,000 in{" "}
					<a href="/">gas savings</a> estimated over five years, the $7,500
					Federal Tax Credit and state <br /> incentives, available to eligible
					buyers and subject to MSRP caps. <a href="/">Terms apply.</a>
				</p>
				<p>
					⁴Price before estimated savings is $79,990, excluding taxes and fees.
					Subject to change. Estimated <br /> savings includes $6,500 in{" "}
					<a href="/">gas savings</a> estimated over five years, the $7,500
					Federal Tax Credit and state <br /> incentives, available to eligible
					buyers and subject to MSRP caps. <a href="/">Terms apply.</a>
				</p>
				<p>
					⁵Price before estimated savings is $74,990, excluding taxes and fees.
					Subject to change. Estimated <br /> savings includes $6,500 in{" "}
					<a href="/">gas savings</a> estimated over five years and state
					incentives, available to eligible <br />
					buyers and subject to MSRP caps. <a href="/">Terms apply.</a>
				</p>
			</div>
			<div className="bottom-links">
				<ul>
					<li>Tesla &copy; {new Date().getFullYear()}</li>
					<li>Privacy & Legal</li>
					<li>Vehicle Recalls</li>
					<li>Contact</li>
					<li>News</li>
					<li>GetUpdates</li>
					<li>Locations</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
