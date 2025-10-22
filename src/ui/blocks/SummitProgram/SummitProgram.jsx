'use client';

import classes from './SummitProgram.module.scss';
import TextTitle from '@/ui/components/TextTitle';

const program = [
    {
        day: 'ДЕНЬ 1',
        events: [
            { time: '09:30', title: 'Ранкова кава, початок реєстрації учасників' },
            { time: '10:30', title: 'Офіційне відкриття саміту' },
            {
                time: '11:00',
                title:
                    'Панельна дискусія: "Нерухомість як інструмент економічної стійкості країни. Виклики та стратегії розвитку забудовників регіонів країни"',
                speakers: 'спікери уточнюються, модераторка Оксана Савула',
            },
            { time: '12:00', title: 'Деталі, які коштують мільйони', speakers: 'Наталія Паньків' },
            { time: '12:40', title: 'Синергія в розвитку ринку нерухомості: рієлтор, забудовник та інвестор', speakers: 'Оксана Савула' },
            { time: '13:20', title: 'Сучасні аспекти страхування в Україні. Захист ваших інвестицій та конкурентна перевага', speakers: 'Крістіна Брош' },
            { time: '14:00', title: 'ОБІД' },
            { time: '15:00', title: 'Як безкоштовно розвивати бізнес в соцмережах', speakers: 'Тарас Нестеренко' },
            { time: '15:45', title: 'Благодійний аукціон' },
            { time: '16:15', title: 'Розвиток міст через призму окремих громад - інструмент побудови країни майбутнього', speakers: 'Назарій Брезіцький' },
            { time: '16:35', title: 'Як повернути в роботу 57% лідів? Кейс впровадження відділу якості', speakers: 'Лілія Пелехата' },
            { time: '17:00', title: 'Спікер уточнюється. Тема уточнюється' },
            { time: '18:00', title: 'Завершення 1-ого' },
        ],
    },
    {
        day: 'ДЕНЬ 2',
        events: [
            { time: '10:00', title: 'Офіційний початок 2-ого дня саміту' },
            { time: '10:10', title: 'спікер уточнюється, тема уточнюється' },
            { time: '10:50', title: 'єОселя як вигідна інвестиція', speakers: 'Каріна Бахолдіна' },
            { time: '11:30', title: 'Квадратні метри, які продає репутація: нова формула маркетингу в нерухомості', speakers: 'Олексій Чиж' },
            { time: '12:00', title: 'Тема уточнюється', speakers: 'Тарас Демкура' },
            { time: '12:30', title: 'Стратегічне планування комерційної нерухомості в новобудовах країни. Розвиток дитячих просторів та освітніх закладів у сучасних ЖК', speakers: 'Наталія Заяць' },
            { time: '13:00', title: 'SMM, reels і таргетована реклама для розвитку нерухомості: від контенту до продажу', speakers: 'Тетяна Савицька' },
            { time: '13:30', title: 'Безпека угод купівлі-продажу нерухомості, коли клієнти знаходяться за межами України', speakers: 'Руслана Артим' },
            { time: '14:00', title: 'ОБІД' },
            { time: '15:00', title: 'Психологія великих угод: як продавати ідею, а не квадратні метри. Емоції в продажах, як продавати без знижок', speakers: 'Оксана Винницька' },
            { time: '15:30', title: 'Нерухомість, як інструмент свободи', speakers: 'Христина Звєрєва' },
            { time: '16:15', title: 'Урбаністика країни в часи невизначеності та викликів', speakers: 'Панельна дискусія: Юрій Столяров, Андрій Павлів' },
            { time: '17:00', title: 'Завершення саміту' },
        ],
    },
];

export default function SummitProgram() {
    return (
        <section id="program" className={classes.summitProgram}>
            <div className="container">
                <TextTitle className={classes.title}>Програма саміту</TextTitle>
                <p className={classes.description}>
                    <span>Два дні</span> виступів, дискусій та практичних кейсів.
                </p>
                <div className={classes.mainBlock}>
                    {program.map((dayItem, idx) => (
                        <div key={idx} className={classes.dayBlock}>
                            <div className={classes.dayHeader}>{dayItem.day}</div>
                            <div className={classes.events}>
                                {dayItem.events.map((event, eIdx) => (
                                    <TextTitle key={eIdx} className={classes.eventRow}>
                                        <div className={classes.time}>{event.time}</div>
                                        <div className={classes.details}>
                                            <div className={classes.titleTab}>{event.title}</div>
                                            {event.speakers && (
                                                <div className={classes.speakers}>
                                                    {event.speakers.split(',').map((part, idx) => {
                                                        const trimmed = part.trim();
                                                        const isName = /\p{Lu}\p{L}+ \p{Lu}\p{L}+$/u.test(trimmed);
                                                        return (
                                                            <span
                                                                key={idx}
                                                                className={isName ? classes.speakerName : undefined}
                                                            >
                                                                {trimmed}{idx < event.speakers.split(',').length - 1 ? ', ' : ''}
                                                            </span>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    </TextTitle>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}