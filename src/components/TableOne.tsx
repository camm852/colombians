import { IData } from '../react-app-env';

const TableOne = ({ data }: { data: IData[] }) => {
  data = data.slice(0, 10);
  return (
    <div className="border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 rounded-3xl">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Detenidos más recientes
      </h4>
      <div className="px-8 rounded-md w-full">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Fecha
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Pais detencion
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Grupo edad
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Tipo delito
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Situacion Juridica
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, index) => (
                  <tr key={index} className="hover:bg-gray-200">
                    <td className="pl-2 border-b border-gray-200  text-xs">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {data['fecha_publicaci_n']}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200  text-xs">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {data['pais_prisi_n']}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200  text-xs">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {data['grupo_edad']}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200  text-xs">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {data['delito']}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200  text-xs">
                      <p
                        className={`text-gray-900 whitespace-no-wrap text-center ${
                          data['situaci_n_jur_dica'].toLowerCase() ===
                          'en investigación'
                            ? 'bg-blue-300 bg-opacity-40 text-blue-600 rounded-lg p-1'
                            : data['situaci_n_jur_dica'].toLowerCase() ===
                              'en juicio'
                            ? 'bg-meta-8 bg-opacity-40 text-meta-8 rounded-lg p-1'
                            : data['situaci_n_jur_dica'].toLowerCase() ===
                              'condenado'
                            ? 'bg-meta-1 bg-opacity-40 text-meta-1 rounded-lg p-1'
                            : ''
                        } `}
                      >
                        {data['situaci_n_jur_dica']}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOne;
