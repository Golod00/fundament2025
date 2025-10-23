'use client';
import { useState, useEffect, useRef } from 'react';
import classes from './BuyTicket.module.scss';
import Button from '@/ui/components/Button/Button';
import TextTitle from '@/ui/components/TextTitle/TextTitle';

export default function BuyTicket() {
    const mainItemRefs = [useRef(null), useRef(null), useRef(null)];
    const [dotsCounts, setDotsCounts] = useState([0, 0, 0]);

    useEffect(() => {
        function updateDots() {
            const newCounts = mainItemRefs.map(ref => {
                if (!ref.current) return 0;
                const containerWidth = ref.current.offsetWidth;
                const totalWidthPerDot = 13 + 20;
                const count = Math.ceil(containerWidth / totalWidthPerDot);
                const maxDots = window.innerWidth >= 1240 ? 11 : count;
                return Math.min(count, maxDots);
            });
            setDotsCounts(newCounts);
        }
        updateDots();
        window.addEventListener('resize', updateDots);
        return () => window.removeEventListener('resize', updateDots);
    }, []);

    return (
        <section id="about-event" className={classes.section}>
            <div className="container">
                <div className={classes.sectionMain}>
                    <div className={classes.sectionContent}>
                        <div className={classes.wrapperTitle}>
                            <h2 className={classes.title}>Придбайте квиток</h2>
                            <p className={classes.des}>
                                Оберіть свій формат участі. <span>Кількість квитків обмежена.</span>
                            </p>
                        </div>

                        <div className={classes.wrapperTime}>
                            <p className={classes.descriptionTime}>Зараз дешевше до -20%</p>
                        </div>

                    </div>

                    <div className={classes.mainBlock}>
                        {mainItemRefs.map((ref, i) => (
                            <TextTitle key={i} className={classes.mainItemWrap}>
                                <div ref={ref} className={classes.mainItem}>
                                    {i === 0 && (
                                        <>
                                            <div className={classes.topWrap}>
                                                <p className={classes.topTitle}>Виставкова зона</p>
                                                <p className={classes.topPrice}>
                                                    <span className={classes.price}>999 грн</span>
                                                    <span className={classes.priceOld}>1 439 грн</span>
                                                </p>
                                            </div>
                                            <div className={classes.dots}>
                                                {Array(dotsCounts[i]).fill(0).map((_, idx) => (
                                                    <div key={idx} className={classes.dot}></div>
                                                ))}
                                            </div>
                                            <div className={classes.bottomWrap}>
                                                <ul className={classes.list}>
                                                    <li className={classes.listItem}>Доступ до виставкової зони забудовників та компаній</li>
                                                    <li className={classes.listItem}>Знайомство з новими об’єктами і технологіями</li>
                                                    <li className={classes.listItem}>Пряма комунікація з девелоперами та виробниками</li>
                                                </ul>
                                            </div>
                                        </>
                                    )}
                                    {i === 1 && (
                                        <>
                                            <div className={classes.topWrap}>
                                                <p className={classes.topTitle}>Спікерська зона</p>
                                                <p className={classes.topPrice}>
                                                    <span className={classes.price}>1999 грн</span>
                                                    <span className={classes.priceOld}>2 879 грн</span>
                                                </p>
                                            </div>
                                            <div className={classes.dots}>
                                                {Array(dotsCounts[i]).fill(0).map((_, idx) => (
                                                    <div key={idx} className={classes.dot}></div>
                                                ))}
                                            </div>
                                            <div className={classes.bottomWrap}>
                                                <ul className={classes.list}>
                                                    <li className={`${classes.listItem} ${classes.colorText}`}>Все, що у виставковій зоні</li>
                                                    <li className={classes.listItem}>Повний доступ до конференц-зали та виступів спікерів</li>
                                                    <li className={classes.listItem}>Участь у панельних дискусіях і можливість поставити питання</li>
                                                </ul>
                                            </div>
                                        </>
                                    )}
                                    {i === 2 && (
                                        <>
                                            <div className={classes.topWrap}>
                                                <div className={classes.topTitle}>
                                                    VIP
                                                    <p className={classes.topTitleInfo}>закінчуються</p>
                                                </div>
                                                <p className={classes.topPrice}>
                                                    <span className={classes.price}>3999 грн</span>
                                                    <span className={classes.priceOld}>5 759 грн</span>
                                                </p>
                                            </div>
                                            <div className={classes.dots}>
                                                {Array(dotsCounts[i]).fill(0).map((_, idx) => (
                                                    <div key={idx} className={classes.dot}></div>
                                                ))}
                                            </div>
                                            <div className={classes.bottomWrap}>
                                                <ul className={classes.list}>
                                                    <li className={`${classes.listItem} ${classes.colorText}`}>Все, що у виставковій зоні</li>
                                                    <li className={`${classes.listItem} ${classes.colorText}`}>Все, що у спікерській зоні</li>
                                                    <li className={classes.listItem}>Обід із учасниками та спікерами</li>
                                                    <li className={classes.listItem}>Пріоритетні місця у залі</li>
                                                    <li className={classes.listItem}>Нетворкінг у бізнес-лаунж-зоні</li>
                                                </ul>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <Button className={classes.btn}>Купити квиток</Button>
                            </TextTitle>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}