import React from 'react'
import Tarif from './components/Tariffs/Tariff'

export default function App() {
    const tariffs = [
        {
            id: 123, title: "Мой онлайн +", price: 700, chase: '₽', month: "месяц",
            title2: "безлимит на Tele2 России", purchase: "800 мин.", blockNum: "на остальные номера России",
            num: "30", gb: "ГБ интернета"
        },

        {
            id: 124, title: "Везде онлайн", price: 500, chase: '₽', month: "месяц",
            title2: "безлимит на Tele2 России", purchase: "500 мин.", blockNum: "на остальные номера России",
            num: "40", gb: "ГБ интернета"
        },

        {
            id: 125, title: "Мой онлайн", price: 400, chase: '₽', month: "месяц",
            title2: "безлимит на Tele2 России", purchase: "500 мин.", blockNum: "на остальные номера России",
            num: "15", gb: "ГБ интернета"
        },

        {
            id: 126, title: "Мой разговор", price: 200, chase: '₽', month: "месяц",
            title2: "безлимит на Tele2 России", purchase: "200 мин.", blockNum: "на остальные номера России",
            num: "2", gb: "ГБ интернета"
        },

        {
            id: 127, title: "Мой Tele 2", price: "7", chase: '₽', month: "день",
            title2: "безлимит на Tele2 России", num: "5", gb: "ГБ интернета"
        },

    ];

    return (
        <div>
            <Tarif id={tariffs[0].id} title={tariffs[0].title} price={tariffs[0].price} chase={tariffs[0].chase}
                month={tariffs[0].month} title2={tariffs[0].title2} purchase={tariffs[0].purchase} blockNum={tariffs[0].blockNum}
                num={tariffs[0].num} gb={tariffs[0].gb} />

            <Tarif id={tariffs[1].id} title={tariffs[1].title} price={tariffs[1].price} chase={tariffs[1].chase}
                month={tariffs[1].month} title2={tariffs[1].title2} purchase={tariffs[1].purchase} blockNum={tariffs[1].blockNum}
                num={tariffs[1].num} gb={tariffs[1].gb} />


            <Tarif id={tariffs[2].id} title={tariffs[2].title} price={tariffs[2].price} chase={tariffs[0].chase}
                month={tariffs[2].month} title2={tariffs[2].title2} purchase={tariffs[2].purchase} blockNum={tariffs[2].blockNum}
                num={tariffs[2].num} gb={tariffs[2].gb} />

            <Tarif id={tariffs[3].id} title={tariffs[3].title} price={tariffs[3].price} chase={tariffs[3].chase}
                month={tariffs[3].month} title2={tariffs[3].title2} purchase={tariffs[3].purchase} blockNum={tariffs[3].blockNum}
                num={tariffs[3].num} gb={tariffs[3].gb} />

            <Tarif id={tariffs[4].id} title={tariffs[4].title} price={tariffs[4].price} chase={tariffs[4].chase}
                month={tariffs[4].month} title2={tariffs[4].title2} purchase={tariffs[4].purchase} blockNum={tariffs[4].blockNum}
                num={tariffs[4].num} gb={tariffs[4].gb} />
        </div>
    )
}
