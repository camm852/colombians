import { ApexOptions } from 'apexcharts';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { IGraphicProps, TDictionary } from '../react-app-env';
import { sortData } from '../utils/utils.tsx';

type TBarGraphicData = {
  series: {
    name: string;
    data: number[];
  }[];
};

const BarGraphic = ({ data, title, className }: IGraphicProps) => {
  const byCountry: TDictionary = sortData(data);
  const [options, setOptions] = React.useState<ApexOptions>({
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
  const [state, setState] = React.useState<TBarGraphicData>({
    series: [],
  });

  React.useEffect(() => {
    setState((state) => ({
      ...state,
      series: [
        {
          name: title,
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
    <div
      className={`rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark ${className}`}
    >
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            {title}
          </h4>
        </div>
      </div>

      <div id="BarGraphic">
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
  );
};

BarGraphic.DefaultProps = {
  title: 'Gráfica de barras',
};

export default BarGraphic;
