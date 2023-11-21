import CardFour from '../../components/CardFour.tsx';
import CardOne from '../../components/CardOne.tsx';
import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import ChartOne from '../../components/ChartOne.tsx';
import ChartThree from '../../components/ChartThree.tsx';
import ChartTwo from '../../components/ChartTwo.tsx';
import ChatCard from '../../components/ChatCard.tsx';
import MapOne from '../../components/MapOne.tsx';
import TableOne from '../../components/TableOne.tsx';
import useData from '../../hooks/useData.tsx';
import { IDataContext } from '../../react-app-env';
import {
  countCountries,
  countCrimes,
  counterGender,
  getTopRecords,
} from '../../utils/utils.tsx';

const Dashboard = () => {
  const { data, loading, error } = useData() as IDataContext;

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }

  console.log(getTopRecords(data));

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne rows={data.length} />
        <CardTwo mens={counterGender(data)[0]} />
        <CardThree womans={counterGender(data)[1]} />
        <CardFour countries={countCountries(data)} />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree crimes={countCrimes(data)} />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default Dashboard;
