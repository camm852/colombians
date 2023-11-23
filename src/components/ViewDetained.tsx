import { IData } from '../react-app-env';
import prision from '../images/detained/prisionero.png';
import juicio from '../images/detained/juicio.png';
import investigacion from '../images/detained/investigacion.png';

const ViewDetained = ({ data }: { data: IData }) => {
  return (
    <>
      <div className="flex flex-row justify-around">
        <div className="flex flex-col gap-2">
          <p className="capitalize font-bold">
            Fecha de publicación:{' '}
            <span className="lowercase font-normal">
              {data.fecha_publicaci_n}
            </span>
          </p>
          <p className="font-bold">
            Situacion carcelaria:{' '}
            <span className="lowercase font-normal">
              {data.extraditado_y_o_repatriado}
            </span>
          </p>
          <p className="font-bold">
            Situacion juridica:{' '}
            <span className="lowercase font-normal">
              {data.situaci_n_jur_dica}
            </span>
          </p>
          <p className="font-bold">
            Grupo de edad:{' '}
            <span className="lowercase font-normal">{data.grupo_edad}</span>
          </p>
          <p className="font-bold">
            Cantidad de activos:{' '}
            <span className="lowercase font-normal">{data.cantidad}</span>
          </p>
          <p className="capitalize font-bold">
            Delito: <span className="lowercase font-normal">{data.delito}</span>
          </p>
          <p className="font-bold">
            Genero: <span className="lowercase font-normal">{data.g_nero}</span>
          </p>
          <p className="font-bold">Ubicación:</p>
          <div className="flex flex-col pl-10">
            <p className="font-bold">
              Latitud: <span className="font-normal">{data.latitud}</span>
            </p>
            <p className="font-bold">
              Longitud: <span className="font-normal">{data.longitud}</span>
            </p>
          </div>
        </div>
        <div className="w-70 hidden md:block">
          {data.situaci_n_jur_dica.toLocaleLowerCase() ===
          'en investigación' ? (
            <img src={investigacion} alt="investigacion.png" />
          ) : data.situaci_n_jur_dica.toLocaleLowerCase() === 'en juicio' ? (
            <img src={juicio} alt="investigacion.png" />
          ) : (
            <img src={prision} alt="investigacion.png" />
          )}
        </div>
      </div>
    </>
  );
};

export default ViewDetained;
