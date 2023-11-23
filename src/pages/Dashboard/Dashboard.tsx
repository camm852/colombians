import TableOne from '../../components/TableOne.tsx';
import useData from '../../hooks/useData.tsx';
import { IDataContext } from '../../react-app-env';
import {
  countBySituation,
  countCountries,
  countCrimes,
  countDetainedByCountry,
  counterGender,
  countGroupAges,
} from '../../utils/utils.tsx';
import PieChart from '../../components/PieChart.tsx';
import Card from '../../components/Card.tsx';
import WomanIcon from '../../icons/WomanIcon.tsx';
import MenIcon from '../../icons/MenIcon.tsx';
import UsersIcon from '../../icons/UsersIcon.tsx';
import WorldIcon from '../../icons/WorldIcon.tsx';
import BarGraphic from '../../components/BarGraphic.tsx';

const Dashboard = () => {
  const { data, status, error, setData } = useData() as IDataContext;

  if (!data) {
    if (status === 'loading') {
      return <div>Loading...</div>;
    }
    if (status === 'error') {
      return <div>{error.message}</div>;
    }
  } else {
    setData(data);
    return (
      <>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <Card
            data={data.length}
            icon={<UsersIcon className="text-primary" />}
            text="Registros"
          />
          <Card
            data={counterGender(data)[0]}
            icon={<MenIcon className="text-primary" />}
            text="Hombres detenidos"
          />
          <Card
            data={counterGender(data)[1]}
            icon={<WomanIcon className="text-primary" />}
            text="Mujeres detenidas"
          />
          <Card
            data={countCountries(data)}
            icon={<WorldIcon className="text-primary" />}
            text="Total Paises"
          />
        </div>

        {/* gap-4 md:mt-6 md:gap-5 2xl:mt-7.5 2xl:gap-7.5 */}
        <div className="mt-4 flex flex-col gap-2">
          <BarGraphic
            data={countDetainedByCountry(data)}
            title="Número de detenidos vs País"
            className="w-full rounded-3xl"
          />
          <div className="flex flex-row gap-2 flex-wrap  md:flex-nowrap">
            <PieChart
              data={countGroupAges(data)}
              title="Grupo de edades"
              className="w-full md:w-2/5 rounded-3xl"
              customScale={1.05}
              legendPosition="bottom"
              chartWidth={400}
            />
            <PieChart
              data={countCrimes(data)}
              title="Delitos mas comunes"
              customScale={1.05}
              legendPosition="left"
              chartWidth={580}
              className="w-full md:w-3/5 rounded-3xl"
            />
          </div>
          {/* <ChartThree data={countCrimes(data)} title="Delitos mas comunes" /> */}
          <BarGraphic
            data={countBySituation(data)}
            title="Delitos por situación juridica"
            className="w-full rounded-3xl"
          />
          {/* <LegalStatus crimes={countBySituation(data)} /> */}
          <TableOne data={data} />
          {/* <ChatCard /> */}
        </div>
      </>
    );
  }
};

export default Dashboard;
