import React from 'react';
import { TDictionary } from './react-app-env.d';
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
  status: string;
  error: Error;
  setData: React.Dispatch<React.SetStateAction<IData[]>>;
}

export type TDictionary = {
  [key: string]: number;
};

export type TIconProps = {
  className?: string;
};

export interface IGraphicProps {
  data: TDictionary;
  title: string;
  className?: string;
}

export interface IPieGraphicProps extends IGraphicProps {
  legendPosition?: 'top' | 'bottom' | 'left' | 'right';
  customScale?: number;
  chartWidth: number;
}
