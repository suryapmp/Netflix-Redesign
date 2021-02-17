import React from "react";
import "./Footer.css";
import tmdbIcon from "./assets/tmdb.svg";

function Footer() {
  return (
    <div className="footer">
			<img src={tmdbIcon} />
			<p>
				<a href="">@suryapmp </a> | <a href="https://github.com/suryapmp"> GitHub</a>
			</p>
		</div>
  )
}
export default Footer;