import styled from 'styled-components';

export default function TopPlatform() {
    return (
        <Platform>
            <div className="heading">
                Top Platform <span>See All</span>
            </div>
            <div className="platforms">
                {platforms.map((item, index) => (
                    <div
                        className="platform"
                        key={index}>
                        <h4>{item.name}</h4>
                        <PriceBar
                            value={item.value / 10000}
                            color={item.color}>
                            <span></span>
                        </PriceBar>
                        <p>${item.value}</p>
                    </div>
                ))}
            </div>
        </Platform>
    );
}

const Platform = styled.section`
    grid-column: 8/13;
    /* border: 1px solid red; */
    padding: 1rem 1.6rem;
    border-radius: 12px;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .heading {
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        span {
            color: #34caa5;
        }
    }
    .platforms {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        .platform {
            display: inherit;
            flex-direction: inherit;
            gap: 0.8rem;
        }
    }
`;

const PriceBar = styled.div`
    height: 12px;
    width: 100%;
    background-color: #f5f5f5;
    border-radius: 50px;
    overflow: hidden;
    position: relative;
    span {
        position: absolute;
        height: 100%;
        background-color: ${(p) => p.color};
        width: calc(${(p) => p.value} * 1px);
        border-radius: 50px;
    }
`;

const platforms = [
    {
        name: 'Book Bazaar',
        value: 2500000,
        percent: 15,
        color: '#6160DC',
    },
    {
        name: 'Artisan Aisle',
        value: 1800000,
        percent: 10,
        color: '#54C5EB',
    },
    {
        name: 'Toy Troop',
        value: 1200000,
        percent: 8,
        color: '#FFB74A',
    },
];
