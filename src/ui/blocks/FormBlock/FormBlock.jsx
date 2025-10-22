"use client";

import Form from "@/ui/components/Form/Form";
import classes from './FormBlock.module.scss';
import TextTitle from '@/ui/components/TextTitle';
import Image from 'next/image';

export default function FormBlock() {
    return (
        <section id="form" className={classes.formBlock}>
            <TextTitle className={classes.bg}>
                <picture>
                    <source
                        media="(min-width: 1240px)"
                        srcSet="/images/FormBlock/bg.webp"
                    />
                    <img
                        src="/images/FormBlock/mob.webp"
                        width={610}
                        height={428}
                        alt="Image ave mania"
                    />
                </picture>
            </TextTitle>
            <div className={`${classes.containerForm} container`}>
                <p className={classes.description}>Долучайтесь до саміту</p>
                <h2 className={classes.title}>Придбати квиток</h2>
                <Form />
            </div>
        </section>
    );
}