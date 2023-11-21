const CardTwo = ({ mens }: { mens: number }) => {
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
            d="M9 1.5a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 019 1.5zM9 4H6a1 1 0 00-1 1v5h1v6h1.25v-6h.5v6H9v-6h1V5a1 1 0 00-1-1z"
          />
        </svg>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {mens}
          </h4>
          <span className="text-sm font-medium">Total Hombres Detenidos</span>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
