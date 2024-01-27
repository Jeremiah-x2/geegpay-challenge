import styled from 'styled-components';
import Image from 'next/image';

export default function SalesActivities(props) {
    const { icon, title, amount, percent, uptrend } = props.activity;
    console.log(icon);
    return (
        <SaleActivity profit={uptrend}>
            <div className="icon--chart">
                <Image
                    src={`/images/${icon}`}
                    width={40}
                    height={40}
                    alt={'icon'}
                />
                <div className="chart">
                    <Image
                        src={
                            uptrend
                                ? '/images/green-chart.svg'
                                : '/images/red-chart.svg'
                        }
                        width={104}
                        height={32}
                    />
                </div>
            </div>
            <h5>{title}</h5>
            <p className="amount">${amount}</p>
            <p className="compare">
                <span>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.5 8.5L4.5 5.5L6.5 7.5L10.5 3.5"
                            stroke=""
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M7 3.5H10.5V7"
                            stroke=""
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>

                    {percent}
                </span>{' '}
                vs. previous month
            </p>
        </SaleActivity>
    );
}

const SaleActivity = styled.section`
    width: 100%;
    padding: 1rem 0.5rem;
    border: 1px solid #edf2f7;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
    background-color: white;
    .icon--chart {
        display: flex;
        justify-content: space-between;
        svg {
            fill: red;
        }
    }
    h5 {
        color: #898989;
        font-weight: 500;
        font-size: 18px;
    }
    .amount {
        font-size: 24px;
        font-weight: 600;
    }
    .compare {
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #606060;
        span {
            font-size: 12px;
            background-color: ${(p) =>
                p.profit
                    ? 'rgba(52, 202, 165, 0.12)'
                    : 'rgba(237, 84, 78, 0.12)'};
            color: ${(p) => (p.profit ? '#34caa5' : '#ed544e')};
            padding: 0.25rem 0.8rem;
            border-radius: 50px;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            svg {
                fill: ${(p) => (p.profit ? '#34caa5' : '#ed544e')};
                stroke: ${(p) => (p.profit ? '#34caa5' : '#ed544e')};
            }
        }
    }
`;
