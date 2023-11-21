const CardThree = ({ womans }: { womans: number }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <svg
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-7 text-primary dark:text-white"
        >
          <path
            fill="currentColor"
            d="M9 1.5a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 019 1.5zM11.234 8L12 7.445 9.917 4.224a.5.5 0 00-.417-.225h-4a.497.497 0 00-.417.225L3 7.445 3.766 8l1.729-2.244.601 1.402-2.095 3.841h1.917l.333 5h1v-5h.5v5h1l.333-5h1.917L8.906 7.157l.601-1.402 1.729 2.244z"
          />
        </svg>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {womans}
          </h4>
          <span className="text-sm font-medium">Total Mujeres Detenidas</span>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
