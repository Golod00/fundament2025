'use client';

import classes from './JoinInstagram.module.scss';
import Image from 'next/image';
import Button from  '@/ui/components/Button';
import TextTitle from '@/ui/components/TextTitle';
export default function JoinInstagram() {
    return (
        <section className={classes.joinInstagram}>
            <div className="container">
                <div className={classes.mainBlock}>
                    <div className={classes.blockContent}>
                        <div className={classes.wrapTitle}>
                            <p className={classes.subTitle}>
                                Долучайтесь в Instagram
                            </p>
                            <h2 className={classes.title}>
                                Ми вже почали відкривати спікерів і блоки програми
                            </h2>
                        </div>
                        <div className={classes.wrapDescription}>
                            <TextTitle className={classes.text}>
                                Слідкуйте в Instagram — там ми першими показуємо,<br /> хто виступить, які теми
                                обговоримо і як виглядатимуть<br /> дні саміту.
                            </TextTitle>
                            <Button className={classes.btn} href="https://www.instagram.com/fundament.nezlamnosti/">Долучитись</Button>
                        </div>
                    </div>
                    <div className={classes.blockWrap}>
                        <div className={classes.wrapImage}>
                            <Image
                                src="/images/JoinInstagram/phone.webp"
                                alt="image"
                                width={525}
                                height={371}
                            />
                        </div>
                        <TextTitle className={classes.wrapIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="259" height="259" viewBox="0 0 259 259" fill="none">
                                <path d="M129.5 86.4119C105.774 86.4119 86.4118 105.774 86.4118 129.5C86.4118 153.226 105.774 172.588 129.5 172.588C153.226 172.588 172.588 153.226 172.588 129.5C172.588 105.774 153.226 86.4119 129.5 86.4119ZM258.732 129.5C258.732 111.657 258.894 93.9757 257.892 76.1651C256.89 55.4776 252.17 37.1174 237.043 21.9897C221.883 6.82963 203.555 2.14262 182.867 1.14057C165.024 0.13852 147.343 0.300142 129.532 0.300142C111.689 0.300142 94.008 0.13852 76.1973 1.14057C55.5098 2.14262 37.1497 6.86196 22.0219 21.9897C6.86186 37.1497 2.17485 55.4776 1.1728 76.1651C0.170747 94.008 0.332369 111.689 0.332369 129.5C0.332369 147.311 0.170747 165.024 1.1728 182.835C2.17485 203.523 6.89419 221.883 22.0219 237.01C37.182 252.17 55.5098 256.857 76.1973 257.859C94.0403 258.862 111.722 258.7 129.532 258.7C147.375 258.7 165.057 258.862 182.867 257.859C203.555 256.857 221.915 252.138 237.043 237.01C252.203 221.85 256.89 203.523 257.892 182.835C258.926 165.024 258.732 147.343 258.732 129.5ZM129.5 195.797C92.812 195.797 63.203 166.188 63.203 129.5C63.203 92.812 92.812 63.2031 129.5 63.2031C166.188 63.2031 195.797 92.812 195.797 129.5C195.797 166.188 166.188 195.797 129.5 195.797ZM198.512 75.9711C189.946 75.9711 183.029 69.0537 183.029 60.4878C183.029 51.9219 189.946 45.0045 198.512 45.0045C207.078 45.0045 213.995 51.9219 213.995 60.4878C213.998 62.5218 213.599 64.5364 212.822 66.4161C212.045 68.2957 210.904 70.0036 209.466 71.4419C208.028 72.8801 206.32 74.0205 204.44 74.7977C202.561 75.575 200.546 75.9737 198.512 75.9711Z" fill="#B7E4FF"/>
                            </svg>
                        </TextTitle>
                    </div>
                </div>
            </div>
        </section>
    );
}