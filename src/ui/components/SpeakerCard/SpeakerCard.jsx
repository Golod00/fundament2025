"use client";

import classes from "./SpeakerCard.module.scss";
import Image from "next/image";
import TextTitle from '@/ui/components/TextTitle';
import { useState, useEffect } from "react";

export default function SpeakerCard({ data }) {
	const [isOpened, toggleOpened] = useState(false);
	const [isTouchDevice, setIsTouchDevice] = useState(false);

	useEffect(() => {
		const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
		setIsTouchDevice(hasTouch);
	}, []);

	return (
		<article
			className={`${classes.card} ${isOpened ? classes.opened : ""}`}
			onClick={() => toggleOpened(!isOpened)}
			{...(!isTouchDevice && {
				onMouseEnter: () => toggleOpened(true),
				onMouseLeave: () => toggleOpened(false),
			})}
		>
			<div className={classes.imageContainer}>
				<Image
					src={`/images/speakers/${data.photoSrc}`}
					width={600}
					height={800}
					alt={data.name}
				/>
			</div>
			<div className={classes.content}>
				<div className={classes.wrap}>
					<p className={classes.wrapName}>{data.name}</p>
					<div className={classes.textSection}>
						{[...(data.text1 || []), ...(data.text2 || [])].map((item, index) => (
							<p key={index}>{item}</p>
						))}
					</div>
				</div>
				<div className={classes.arrowContainer}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M20.0306 12.2193C20.1003 12.289 20.1557 12.3717 20.1934 12.4627C20.2312 12.5538 20.2506 12.6514 20.2506 12.7499C20.2506 12.8485 20.2312 12.9461 20.1934 13.0371C20.1557 13.1282 20.1003 13.2109 20.0306 13.2806L12.5306 20.7806C12.461 20.8503 12.3782 20.9056 12.2872 20.9433C12.1961 20.9811 12.0986 21.0005 12 21.0005C11.9014 21.0005 11.8038 20.9811 11.7128 20.9433C11.6217 20.9056 11.539 20.8503 11.4694 20.7806L3.96936 13.2806C3.82863 13.1398 3.74957 12.949 3.74957 12.7499C3.74957 12.5509 3.82863 12.36 3.96936 12.2193C4.1101 12.0786 4.30097 11.9995 4.49999 11.9995C4.69901 11.9995 4.88988 12.0786 5.03061 12.2193L12 19.1896L18.9694 12.2193C19.039 12.1496 19.1217 12.0943 19.2128 12.0565C19.3038 12.0188 19.4014 11.9993 19.5 11.9993C19.5986 11.9993 19.6961 12.0188 19.7872 12.0565C19.8782 12.0943 19.961 12.1496 20.0306 12.2193ZM11.4694 13.2806C11.539 13.3503 11.6217 13.4056 11.7128 13.4433C11.8038 13.4811 11.9014 13.5005 12 13.5005C12.0986 13.5005 12.1961 13.4811 12.2872 13.4433C12.3782 13.4056 12.461 13.3503 12.5306 13.2806L20.0306 5.78055C20.1713 5.63982 20.2504 5.44895 20.2504 5.24993C20.2504 5.05091 20.1713 4.86003 20.0306 4.7193C19.8899 4.57857 19.699 4.49951 19.5 4.49951C19.301 4.49951 19.1101 4.57857 18.9694 4.7193L12 11.6896L5.03061 4.7193C4.88988 4.57857 4.69901 4.49951 4.49999 4.49951C4.30097 4.49951 4.1101 4.57857 3.96936 4.7193C3.82863 4.86003 3.74957 5.05091 3.74957 5.24993C3.74957 5.44895 3.82863 5.63982 3.96936 5.78055L11.4694 13.2806Z" fill="#4E77D3"/>
					</svg>
				</div>
			</div>
		</article>
	);
}
