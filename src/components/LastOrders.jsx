import Image from 'next/image';
import styled from 'styled-components';

export default function LastOrders() {
    return (
        <LastOrdersContainer>
            <div>
                Last Orders <span>See All</span>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th className="date">Date</th>
                        <th className="amount">Amount</th>
                        <th>Status</th>
                        <th>Invoice</th>
                    </tr>

                    {lastOrders.map((item, index) => (
                        <tr className="table--row">
                            <td className="name">
                                <Image
                                    src={`/images/${item.img}`}
                                    width={32}
                                    height={32}
                                    alt={item.img}
                                />{' '}
                                {item.name}
                            </td>
                            <td className="date">{item.date}</td>
                            <td className="amount">
                                ${item.amount.toLocaleString()}
                            </td>
                            <td
                                className={`${
                                    item.status === 'Paid' ? 'paid' : 'pending'
                                }`}>
                                {item.status}
                            </td>
                            <td className="last--column">
                                <Image
                                    src={'/images/invoice.svg'}
                                    width={16}
                                    height={16}
                                />
                                View
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </LastOrdersContainer>
    );
}

const LastOrdersContainer = styled.section`
    grid-column: 1/8;
    grid-row: 2;
    padding: 1rem;
    background-color: white;
    border-radius: 12px;
    & > div:first-child {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        font-weight: 600;
        span {
            color: #34caa5;
        }
    }
    table {
        border-spacing: 0px;
        /* border: 1px solid red; */
        width: 100%;
        font-size: 16px;
        th {
            text-align: left;
            color: #9ca4ab;
            font-size: 16px;
            font-weight: 400;
        }
        td {
            font-weight: 500;
            padding-block: 0.5rem;
            &.last--column {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: 14px;
            }
            &.amount {
                color: #0d062d;
            }
            &.name {
                display: flex;
                align-items: center;
                gap: 0.8rem;
            }
            &.date {
                color: #737373;
            }
            &.paid {
                color: #34caa5;
            }
            &.pending {
                color: #ed544e;
            }
        }
    }

    @media screen and (max-width: 600px) {
        table {
            .date,
            .amount {
                display: none;
            }
        }
    }
`;

const lastOrders = [
    {
        img: 'marcus.png',
        name: 'Marcus Bergson',
        date: 'Nov 15, 2023',
        amount: 80000,
        status: 'Paid',
    },
    {
        img: 'jaydon.png',
        name: 'Jaydon Vaccaro',
        date: 'Nov 15, 2023',
        amount: 150000,
        status: 'Refund',
    },
    {
        img: 'corey.png',
        name: 'Corey Sheifer',
        date: 'Nov 15, 2023',
        amount: 87000,
        status: 'Paid',
    },
    {
        img: 'cooper.png',
        name: 'Cooper Press',
        date: 'Nov 15, 2023',
        amount: 100000,
        status: 'Refund',
    },
    {
        img: 'philip.png',
        name: 'Philip Lubin',
        date: 'Nov 15, 2023',
        amount: 78000,
        status: 'Paid',
    },
];
