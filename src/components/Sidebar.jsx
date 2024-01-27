import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export default function Sidebar({ setDarkMode }) {
    const [showsidebarMobile, setShowsidebarMobile] = useState(true);
    const [menu, setMenu] = useState([
        { isSelect: true, img: 'Vector.svg' },
        { isSelect: false, img: 'category.svg' },
        { isSelect: false, img: 'trend-up.svg' },
        { isSelect: false, img: 'user.svg' },
        { isSelect: false, img: 'Group2.svg' },
        { isSelect: false, img: 'discount-shape.svg' },
        { isSelect: false, img: 'info-circle.svg' },
    ]);

    const settings = ['arrow-right.svg', 'setting-2.svg', 'logout.svg'];

    function setActive(id) {
        setMenu((prev) => {
            return [...prev].map((item, index) => {
                if (index === id) {
                    return { ...item, isSelect: true };
                } else {
                    return { ...item, isSelect: false };
                }
            });
        });
    }

    useEffect(() => {
        if (window.innerWidth <= 600) {
            setShowsidebarMobile(false);
        }
    }, []);

    return (
        <SidebarContainer>
            <div>
                {menu.map((item, index) => (
                    <Icon
                        item={item}
                        setActive={setActive}
                        index={index}
                        key={index}
                    />
                ))}
            </div>
            <div className="toggle-darkmode">
                <Image
                    src={'/images/sun.svg'}
                    width={30}
                    height={30}
                    alt="light mode"
                    onClick={() => setDarkMode(false)}
                />
                <Image
                    src={'/images/moon.svg'}
                    width={30}
                    height={30}
                    alt="dark mode"
                    onClick={() => setDarkMode(true)}
                />
            </div>
            <ul className="settings">
                {settings.map((item, index) => (
                    <li key={index}>
                        <Image
                            src={`/images/${item}`}
                            width={24}
                            height={24}
                        />
                    </li>
                ))}
            </ul>
        </SidebarContainer>
    );
}

export function Icon({ item, index, setActive }) {
    return (
        <IconContainer
            className={item.isSelect ? 'select' : ''}
            onClick={() => setActive(index)}>
            <Image
                src={`/images/${item.img}`}
                width={32}
                height={32}
                alt=""
            />
        </IconContainer>
    );
}

const SidebarContainer = styled.div`
    background-color: #f7f8fa;
    width: 80px;
    padding-block: 1.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    & > div:first-child {
        /* position: absolute; */
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .toggle-darkmode {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: white;
        padding: 0.8rem 0.5rem;
        border-radius: 50px;
    }
    .settings {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: auto;
        li {
            cursor: pointer;
        }
    }
    div.close {
        display: none;
    }
    .open {
        display: none;
    }

    @media screen and (max-width: 600px) {
        z-index: 100;
        position: fixed;
        bottom: 0;
        left: 0;
        padding: 1rem;
        width: 100%;
        flex-direction: row;
        overflow-x: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
        & > div:first-child {
            flex-direction: row;
            margin: 0;
        }
        .toggle-darkmode {
            flex-direction: row;
        }
        .settings {
            margin: 0;
            flex-direction: row;
        }
        .close {
            display: block;
        }
        .open {
            display: block;
        }
    }
`;

const IconContainer = styled.div`
    cursor: pointer;
    position: relative;
    margin-inline: 1rem;
    &.select {
        &::before {
            content: '';
            position: absolute;
            width: 10px;
            height: 100%;
            right: -24px;
            top: 0;
            background-color: black;
            border-radius: 8px 0 0 8px;
        }
    }

    @media screen and (max-width: 600px) {
        &.select {
            &::before {
                content: '';
                position: absolute;
                height: 10px;
                width: 100%;
                left: 0;
                top: -26px;
                background-color: black;
                border-radius: 0px 0 8px 8px;
            }
        }
    }
`;
