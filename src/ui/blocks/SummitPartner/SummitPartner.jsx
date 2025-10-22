'use client';

import classes from './SummitPartner.module.scss';
import TextTitle from '@/ui/components/TextTitle';
import Image from 'next/image';
import FormPartner from '@/ui/components/FormPartner/FormPartner';

export default function SummitPartner() {

    return (
        <section id="partners" className={classes.section}>
            <div className={classes.sectionMain}>
                <div className={`${classes.container} container`}>
                    <div className={classes.sectionContent}>
                        <h2 className={classes.title}>Стати партнером саміту</h2>
                        <p className={classes.description}>
                            Оберіть формат участі — й отримайте прямий доступ до потенційних клієнтів, інвесторів та медіа.
                        </p>
                        <div className={classes.formWrap}>
                            <FormPartner />
                        </div>
                    </div>
                </div>
                <div className={classes.sectionImg}>
                    <picture>
                        <source
                            media="(min-width: 1240px)"
                            srcSet="/images/SummitPartner/pc.webp"
                        />
                        <img
                            src="/images/SummitPartner/image-mob.webp"
                            width={610}
                            height={428}
                            alt="Image ave mania"
                        />
                    </picture>
                </div>

            </div>
        </section>
    );
}