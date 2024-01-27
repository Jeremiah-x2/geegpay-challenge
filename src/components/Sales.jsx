import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Tooltip } from 'chart.js';
import Select from './Select';

const data = [
    { month: 'Jan', value: '20.000' },
    { month: 'Feb', value: '22.000' },
    { month: 'Mar', value: '53.000' },
    { month: 'Apr', value: '24.000' },
    { month: 'May', value: '20.000' },
    { month: 'Jun', value: '29.000' },
    { month: 'Jul', value: '48.000' },
    { month: 'Aug', value: '41.000' },
    { month: 'Sep', value: '55.000' },
    { month: 'Oct', value: '15.000' },
    { month: 'Nov', value: '23.000' },
    { month: 'Dec', value: '46.000' },
];
console.log(data.map((obj) => obj.year));

export default function Sales() {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }
        }
        const ctx = chartRef.current.getContext('2d');

        const newChart = new Chart(ctx, {
            type: 'bar',

            data: {
                labels: data.map((obj) => obj.month),
                datasets: [
                    {
                        label: '',
                        data: data.map((obj) => obj.value),
                        backgroundColor: 'rgba(52, 202, 165, 0.1)',
                        categoryPercentage: 0.5,
                        hoverBackgroundColor: function (context) {
                            var gradient =
                                context.chart.ctx.createLinearGradient(
                                    0,
                                    0,
                                    0,
                                    ctx.canvas.height
                                );
                            gradient.addColorStop(0.7, '#34CAA5');
                            gradient.addColorStop(1, 'white');
                            return gradient;
                        },
                        borderRadius: 50,
                        base: 0,
                    },
                ],
            },

            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: true,
                        displayColors: false,
                        yAlign: 'bottom',
                        padding: 6,
                        callbacks: {
                            title: () => {
                                return '';
                            },
                            labelPointStyle: (context) => {
                                return {
                                    pointStyle: '.',
                                    rotation: 350,
                                };
                            },
                            label: function (context) {
                                let label = context.dataset.label || '';
                                return `$${context.parsed.y}`;
                            },
                        },
                    },
                },
                layout: {
                    // padding: 30,
                },
                responsive: true,

                scales: {
                    x: {
                        border: {
                            display: false,
                        },
                        ticks: {
                            align: 'center',
                        },

                        type: 'category',

                        grid: {
                            display: false,
                            color: '#EAEAEA',
                            drawTicks: false,
                        },
                    },
                    y: {
                        // max: '20',

                        grid: {
                            color: '#EAEAEA',
                        },
                        border: {
                            display: false,
                            dash: [12, 4],
                        },
                        beginAtZero: true,
                        ticks: {
                            maxTicksLimit: 10,
                            callback: (value, index, ticks) => {
                                return value.toFixed(3);
                            },
                        },
                    },
                },
            },
        });
        chartRef.current.chart = newChart;
    }, []);
    return (
        <SalesStyle style={{ position: 'relative' }}>
            <div>
                <h3>Sales Trends</h3>
                <Select />
            </div>
            <canvas ref={chartRef} />
        </SalesStyle>
    );
}

const SalesStyle = styled.section`
    padding: 1rem;
    background-color: white;
    border-radius: 12px;
    grid-column: 1/8;
    & > div {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 0.5rem;
        h3 {
            color: #26282c;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 1rem;
        }
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;
