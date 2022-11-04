import React from "react";
import Image from "next/image";
import heroImage from "../public/images/heroimage.jpg";
import { Element } from "react-scroll";

function homePage() {
	return (
		<Element id="home" name="home">
			<div>
				<div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28 ">
					<div className=" w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
						<Image
							src={heroImage}
							alt="heroImage"
							layout="fill"
							objectFit="cover"
							className=" rounded-full cursor-pointer hidden md:block"
						/>
					</div>
					<div className="flex flex-col md:ml-20 mx-10 mt-10">
						<h1 className="font-bold text-7xl text-left mb-5">
							Hello, I am a Full Stack Developer.<span className="text-indigo-900">My name is Thamsanqa Menzi.</span>
						</h1>
						<p className="text-left font-normal font mb-5 flex-wrap">
							Hi, I am Thamsanqa Menzi from Cape Town, South Africa. I come from a family of four, me being the second
                            last child. I am a graduate who is currently doing an internship with Coega Development Corporation as a Full
                            Stack Developer. My job is to produce working projects using the Software Development Lifecycle, using the agile
                            methodology. I am looing to sink my teeth into any development work, my weapons of choice are C#, SQL Server, HTML
                            and CSS and Javascript.
						</p>
						<a
							href="#"
							className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black "
						>
							See My Portfolio !
						</a>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default homePage;
