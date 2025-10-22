'use client';
import { useState, useEffect, useRef } from 'react';
import classes from './BuyTicket.module.scss';
import Button from '@/ui/components/Button/Button';
import TextTitle from '@/ui/components/TextTitle/TextTitle';

export default function BuyTicket() {
    const mainItemRefs = [useRef(null), useRef(null), useRef(null)];
    const [dotsCounts, setDotsCounts] = useState([0, 0, 0]);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        finished: false
    });
    const [endTime, setEndTime] = useState(null);
    const finishedText = 'Акція закінчилась';

    useEffect(() => {
        const now = new Date();
        const end = new Date(now);
        end.setDate(end.getDate() + 5);
        end.setHours(23, 59, 59, 999);
        end.setHours(end.getHours() - 1); // минус 1 час
        setEndTime(end);
    }, []);

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

    useEffect(() => {
        if (!endTime) return;
        const interval = setInterval(() => {
            const now = new Date();
            const distance = endTime - now;

            if (distance <= 0) {
                clearInterval(interval);
                setTimeLeft({ finished: true, days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((distance / (1000 * 60)) % 60);
            const seconds = Math.floor((distance / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds, finished: false });
        }, 1000);

        return () => clearInterval(interval);
    }, [endTime]);

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
                            <p className={classes.timeText}>До підвищення цін залишилось:</p>
                            <p className={classes.descriptionTime}>
                                {timeLeft.finished ? (
                                    <span className={classes.finished}>{finishedText}</span>
                                ) : (
                                    <>
                                        <span className={classes.timeDay}>{timeLeft.days} днів</span>
                                        <span className={classes.timeNumbers}>
                                            {String(timeLeft.hours).padStart(2,'0')}:
                                            {String(timeLeft.minutes).padStart(2,'0')}:
                                            {String(timeLeft.seconds).padStart(2,'0')}
                                        </span>
                                    </>
                                )}
                            </p>
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