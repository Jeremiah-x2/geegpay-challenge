'use client';
import React, { useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import styled from 'styled-components';

const options = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
export default function Select() {
    const [currentValue, setCurrentValue] = useState(options[0]);
    const [optionsList, setOptionsList] = useState(null);
    const [showMenubool, setShowMenubool] = useState(false);

    const showMenu = () => {
        setShowMenubool((prev) => !prev);
    };
    useEffect(() => {
        const ul = document.querySelector('.select');
        setOptionsList(ul);
    }, []);

    return (
        <CustomSelect showmenu={showMenubool}>
            <p onClick={showMenu}>
                {currentValue}{' '}
                <span>
                    <FaAngleDown />
                </span>
            </p>

            <div className="optionsHide">
                <ul className="select">
                    {options
                        .filter((item) => item !== currentValue)
                        .map((item, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    setCurrentValue(item);
                                    setShowMenubool(false);
                                }}>
                                {item}
                            </li>
                        ))}
                </ul>
            </div>
        </CustomSelect>
    );
}

const CustomSelect = styled.div`
    position: relative;
    p {
        display: inline-flex;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem 0.8rem;
        border: 1px solid #e1dfdf;
        border-radius: 50px;
        svg {
            transform: translateY(15%);
            scale: 1.2;
        }
    }
    div {
        position: relative;
        height: ${(p) => (p.showmenu ? '0px' : '100px')};
        position: absolute;
        display: ${(p) => (p.showmenu ? 'block' : 'none')};
        top: 100%;
        right: 0;
        border-radius: 8px;
        ul {
            border-radius: 8px;
            padding: 1rem;
            margin-top: 0.75rem;
            background-color: #a0a0a0;
            color: white;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            li {
                cursor: pointer;
            }
        }
    }
`;
