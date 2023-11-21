declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';

export interface IData {
  fecha_publicaci_n: string;
  pais_prisi_n: string;
  consulado: string;
  delito: string;
  extraditado_y_o_repatriado: string;
  situaci_n_jur_dica: string;
  g_nero: string;
  grupo_edad: string;
  geocoded_column: string;
  cantidad: number;
  latitud: number;
  longitud: number;
}

export interface IDataContext {
  data: IData[];
  loading: boolean;
  error: boolean;
}

export type TDictionary = {
  [key: string]: number;
};
