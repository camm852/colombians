import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { IData, TDictionary } from '../react-app-env';
import { sortData } from '../utils/utils.tsx';

interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
}

const LegalStatus = ({ crimes }: { crimes: TDictionary }) => {
  const byCountry: TDictionary = sortData(crimes);
  const [options, setOptions] = useState<ApexOptions>({
    colors: ['#3C50E0', '#80CAEE'],
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      type: 'bar',
      height: 435,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },

    responsive: [
      {
        breakpoint: 1536,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: '30%',
            },
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 0,
        columnWidth: '100%',
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last',
      },
    },
    dataLabels: {
      enabled: true,
    },

    xaxis: {
      categories: [],
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      fontFamily: 'Satoshi',
      fontWeight: 500,
      fontSize: '14px',

      markers: {
        radius: 99,
      },
    },
    fill: {
      opacity: 1,
    },
  });
  const [state, setState] = useState<ChartTwoState>({
    series: [],
  });

  React.useEffect(() => {
    setState((state) => ({
      ...state,
      series: [
        {
          name: 'Número de detenidos',
          data: Object.values(byCountry).slice(0, 15),
        },
      ],
    }));
    setOptions((options: ApexOptions) => ({
      ...options,
      xaxis: {
        categories: Object.keys(byCountry).slice(0, 30),
      },
    }));
  }, []);

  return (
    <div className="border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Número de detenidos por Situación Jurídica
          </h4>
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-ml-5 -mb-9">
          {options.xaxis?.categories && (
            <ReactApexChart
              options={options}
              series={state.series}
              type="bar"
              height={350}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LegalStatus;
