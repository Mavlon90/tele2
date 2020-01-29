import React from 'react'

export default function Tariff(props) {
    return (
    <article>
        <div><h1>{props.title}</h1></div>
                    <div><span>{props.price}</span>
                        <div><span>{props.chase}</span>
                                <span>{props.month}</span>
                        </div>
                    </div>
                    <ul><li><div>
                            <div>
                                <div>{props.title2}</div>
                            </div>
                            <div>
                                <li>
                                <span>
                                    <span>{props.purchase}</span>
                                    <span>{props.blockNum}</span>
                                </span>
                                </li>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    <span>{props.num}</span>
                                    <span>{props.gb}</span>
                                </span>
                            </div>
                         </li>
                    </ul>
        </article>
    )
}
