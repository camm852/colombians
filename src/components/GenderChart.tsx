import {ApexOptions} from 'apexcharts';
import React, {useEffect, useState} from 'react';
import ReactApexChart from 'react-apexcharts';
import {TDictionaryCrimes} from '../react-app-env';

interface ChartThreeState {
    series: number[];
}

const GenderChart = ({groupAges}: { groupAges: TDictionaryCrimes }) => {
    const [state, setState] = useState<ChartThreeState>({
        series: [],
    });
    const [options, setOptions] = useState<ApexOptions>({
            chart: {
                type: 'donut',
            },
            colors: ['#FF8C66', '#66FF8C', '#8C66FF', '#FF66B3', '#B366FF', '#FFD966', '#66FFE0', '#D966FF', '#FF66A3', '#A366FF',
                '#66B3FF', '#FF66E0', '#E066FF', '#FF8C66', '#66FF8C', '#8C66FF', '#FF66B3', '#B366FF', '#FFD966', '#66FFE0',
                '#D966FF', '#FF66A3', '#A366FF', '#66B3FF', '#FF66E0', '#E066FF', '#FF8C66', '#66FF8C', '#8C66FF', '#FF66B3',
                '#B366FF', '#FFD966', '#66FFE0', '#D966FF', '#FF66A3', '#A366FF', '#66B3FF', '#FF66E0', '#E066FF', '#FF8C66',
                '#66FF8C', '#8C66FF', '#FF66B3', '#B366FF', '#FFD966', '#66FFE0', '#D966FF', '#FF66A3', '#A366FF', '#66B3FF',
                '#FF66E0', '#E066FF', '#FF8C66', '#66FF8C', '#8C66FF', '#FF66B3', '#B366FF', '#FFD966', '#66FFE0', '#D966FF',
                '#FF66A3', '#A366FF', '#66B3FF', '#FF66E0', '#E066FF', '#4C4C4C', '#3E2723', '#795548', '#8D6E63', '#607D8B',
                '#3949AB', '#F44336', '#00BCD4', '#FFEB3B', '#795548', '#4CAF50', '#FF5722', '#2196F3', '#FFC107', '#9C27B0',
                '#009688', '#FF9800', '#CDDC39', '#9E9E9E', '#FFCDD2', '#B2EBF2', '#FFECB3', '#E0E0E0', '#B9F6CA', '#F0F4C3',
                '#BBDEFB', '#C8E6C9', '#E1BEE7', '#D7CCC8', '#FFCCBC', '#F8BBD0', '#B2DFDB', '#D1C4E9', '#AED581', '#FF8A65',
                '#9FA8DA', '#E57373', '#AED581', '#E57373', '#FF8A65', '#9FA8DA', '#FFD54F', '#F48FB1', '#4DB6AC', '#FFEB3B'
            ],
            labels: [],
            legend: {
                show: true,
                position: 'bottom',
            },
            plotOptions: {
                pie: {
                    customScale : 1,
                    donut: {
                        size: '65%',
                        background: 'transparent',
                        labels: {
                            show: true,
                            name : {
                                fontSize : '10px'
                            },value : {
                                fontSize : '10px'
                            }
                        }
                    }
                },
            },
            dataLabels: {
                enabled: true,
                dropShadow: {
                    opacity: 0,
                    color: '#fff'
                }
            },
            responsive: [
                {
                    breakpoint: 2600,
                    options: {
                        chart: {
                            width: 400,
                        },
                    },
                },
                {
                    breakpoint: 640,
                    options: {
                        chart: {
                            width: 400,
                        },
                    },
                },
            ],
        }
    )
    React.useEffect(() => {
        setState(state => ({...state, series: Object.values(groupAges)}))
        setOptions((options: ApexOptions) => ({...options, labels: Object.keys(groupAges)}))
    }, [])

    return (
        <div
            className="col-span-4 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-4">
            <div className="mb-3 justify-between gap-4 sm:flex">
                <div>
                    <h5 className="text-xl font-semibold text-black dark:text-white">
                        Grupos de edades de los detenidos
                    </h5>
                </div>
            </div>

            <div className="mb-2">
                <div id="chartThree" className="mx-auto flex justify-center text-white">
                    {state.series.length > 0 && <ReactApexChart
                        options={options}
                        series={state.series}
                        type="donut"
                    />}

                </div>
            </div>
        </div>
    );
};

export default GenderChart;
