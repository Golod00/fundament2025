"use client";

import classes from "./Speakers.module.scss";
import data from "./speakersData.json";
import SpeakerCard from "@/ui/components/SpeakerCard";

export default function Speakers() {
	const speakers = data.speakers;

	return (
		<section className={classes.section}>
			<div className="container">
				<h2 className={classes.description}>Експерти діляться досвідом</h2>
				<h2 className={classes.title}>Спікери форуму</h2>
				<div className={classes.wrapper}>
					<div className={classes.speakers}>
						{speakers?.map((item, index) => (
							<SpeakerCard key={index} data={item} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}