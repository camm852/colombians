import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllData } from '../api/request';

const DataContext = React.createContext({});

const DataProvider = ({ children }: { children: JSX.Element }) => {
  // const [data, setData] = React.useState<IData[]>([
  //   {
  //     fecha_publicaci_n: '',
  //     pais_prisi_n: '',
  //     consulado: '',
  //     delito: '',
  //     extraditado_y_o_repatriado: '',
  //     situaci_n_jur_dica: '',
  //     g_nero: '',
  //     grupo_edad: '',
  //     geocoded_column: '',
  //     cantidad: 0,
  //     latitud: 0,
  //     longitud: 0,
  //   },
  // ]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['AllData'],
    queryFn: getAllData,
  });

  return (
    <DataContext.Provider value={{ data, isLoading, isError }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider };

export default DataContext;
