import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import useData from '../hooks/useData.tsx';
import { IDataContext } from '../react-app-env';
import { countDetainedByCountry } from '../utils/utils.tsx';

const Profile = () => {
  const { data, loading, error } = useData() as IDataContext;
  const countries = countDetainedByCountry(data);

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error...</div>;
  } else
    return (
      <>
        <div className="mb-4">
          <h2 className="text-xl font-bold">Detenidos por país</h2>
        </div>

        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={3}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data.map((actualD) => (
              <Marker position={[actualD.latitud, actualD.longitud]}>
                <Popup>
                  <h4>
                    <b>País</b> : {actualD.pais_prisi_n}
                  </h4>
                  <p>
                    <b>Número de detenidos</b> :{' '}
                    {countries[actualD.pais_prisi_n]}
                  </p>
                  <p>
                    <b>Latitud</b> : {actualD.latitud}
                  </p>
                  <p>
                    <b>Longitud</b> : {actualD.longitud}
                  </p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </>
    );
};

export default Profile;
