import { Plus_Jakarta_Sans } from 'next/font/google';
import styled from 'styled-components';
import { FaRegBell, FaChevronDown } from 'react-icons/fa6';
import Image from 'next/image';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: '700' });
const date = new Date();

const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export default function Header() {
    return (
        <HeaderStyle>
            <h1 className={jakarta.className}>Dashboard</h1>
            <section>
                <div className="input--search">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.68945 0C11.9293 0 15.3781 3.3727 15.3781 7.51907C15.3781 9.47532 14.6104 11.2595 13.3542 12.5986L15.8261 15.0109C16.0574 15.2371 16.0582 15.6031 15.8269 15.8294C15.7116 15.9436 15.5592 16 15.4076 16C15.2568 16 15.1052 15.9436 14.9892 15.8309L12.4874 13.3912C11.1714 14.4219 9.5028 15.0389 7.68945 15.0389C3.44955 15.0389 0 11.6655 0 7.51907C0 3.3727 3.44955 0 7.68945 0ZM7.68945 1.15821C4.10251 1.15821 1.18433 4.01125 1.18433 7.51907C1.18433 11.0269 4.10251 13.8807 7.68945 13.8807C11.2756 13.8807 14.1938 11.0269 14.1938 7.51907C14.1938 4.01125 11.2756 1.15821 7.68945 1.15821Z"
                            fill="#78828A"
                        />
                    </svg>

                    <input
                        type="search"
                        placeholder="Search"
                    />
                </div>
                <span className="date">{`${
                    monthNames[date.getMonth()]
                } ${date.getDate()}, ${date.getFullYear()}`}</span>
                <div className="account">
                    <span className="notification">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.00005 0.041626C7.2872 0.041626 5.64449 0.722055 4.43332 1.93323C3.22215 3.1444 2.54172 4.7871 2.54172 6.49996V7.08663C2.54167 7.66737 2.36973 8.23511 2.04755 8.71829L1.09172 10.1541C-0.0199466 11.8208 0.828387 14.0858 2.76089 14.6125C3.39005 14.7841 4.02505 14.9291 4.66422 15.0483L4.66589 15.0525C5.30589 16.7625 7.01839 17.9583 9.00005 17.9583C10.9817 17.9583 12.6942 16.7625 13.3351 15.0525L13.3367 15.0483C13.9769 14.9292 14.6119 14.7838 15.2401 14.6125C17.1726 14.0858 18.0209 11.8208 16.9092 10.1541L15.9526 8.71829C15.6304 8.23511 15.4584 7.66737 15.4584 7.08663V6.49996C15.4584 4.7871 14.778 3.1444 13.5668 1.93323C12.3556 0.722055 10.7129 0.041626 9.00005 0.041626ZM11.8134 15.2808C9.9442 15.5041 8.05507 15.5041 6.18589 15.2808C6.77839 16.1316 7.80922 16.7083 9.00005 16.7083C10.1909 16.7083 11.2209 16.1316 11.8134 15.2808ZM3.79172 6.49996C3.79172 5.11862 4.34045 3.79386 5.31721 2.81711C6.29396 1.84036 7.61872 1.29163 9.00005 1.29163C10.3814 1.29163 11.7062 1.84036 12.6829 2.81711C13.6597 3.79386 14.2084 5.11862 14.2084 6.49996V7.08663C14.2084 7.91412 14.4534 8.72329 14.9126 9.41162L15.8692 10.8475C16.0175 11.0695 16.1108 11.3235 16.1415 11.5887C16.1722 11.8539 16.1393 12.1226 16.0457 12.3726C15.9521 12.6226 15.8004 12.8467 15.6031 13.0265C15.4057 13.2063 15.1685 13.3366 14.9109 13.4066C11.0407 14.4621 6.95855 14.4621 3.08839 13.4066C2.83103 13.3364 2.59403 13.206 2.39692 13.0263C2.19981 12.8465 2.04822 12.6225 1.95464 12.3727C1.86106 12.1228 1.82816 11.8544 1.85866 11.5893C1.88915 11.3243 1.98217 11.0703 2.13005 10.8483L3.08839 9.41162C3.54717 8.72303 3.79189 7.91406 3.79172 7.08663V6.49996Z"
                                fill="#0D062D"
                            />
                        </svg>
                    </span>
                    <div>
                        <Image
                            src={'/images/profile.png'}
                            width={40}
                            height={40}
                            alt="Profile image"
                        />
                        <span>
                            <h6>Justin Bergson</h6>
                            <p>justin@gmail.com</p>
                        </span>
                        <FaChevronDown />
                    </div>
                </div>
            </section>
        </HeaderStyle>
    );
}

const HeaderStyle = styled.header`
    /* flex-grow: 1; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px;
    border-bottom: 1px solid #ebecf2;
    width: 100%;
    margin-bottom: 2rem;
    h1 {
        font-size: 20px;
    }
    section {
        display: flex;
        gap: 2rem;
        align-items: center;
        .input--search {
            position: relative;
            svg {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 16px;
            }
            input {
                width: 340px;
                height: 48px;
                border: 1px solid #dadddd;
                border-radius: 50px;
                padding-inline: 2.4rem;
            }
        }
        .account {
            display: flex;
            gap: 1rem;
            align-items: center;
            .notification {
                border: 1px solid #edf2f7;
                padding: 0.8rem;
                width: 50px;
                height: 50px;
                border-radius: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                svg: {
                    fill: red;
                }
            }
            & > div {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 0.5rem;
                border: 1px solid #dadddd;
                border-radius: 50px;
            }
        }
    }

    @media screen and (max-width: 600px) {
        flex-wrap: wrap;
        gap: 0rem;
        text-align: center;
        width: 100%;
        overflow: hidden;
        h1 {
            width: 100%;
            grid-column: 1/3;
        }
        .date {
            display: none;
        }

        .account {
            div {
                span {
                    display: none;
                }
                svg {
                    display: none;
                }
            }
        }
    }
`;
