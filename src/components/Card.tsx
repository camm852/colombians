const Card = ({
  data,
  icon,
  text,
}: {
  data: number;
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <div className="rounded-3xl border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {icon}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {data}
          </h4>
          <span className="text-sm font-medium">{text}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
