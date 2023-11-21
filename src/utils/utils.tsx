import { IData, TDictionary } from '../react-app-env'; // Asegúrate de importar el tipo IData desde el archivo correspondiente

export function counterGender(data: IData[]): number[] {
  let lenghtMens = 0;
  let lenghtWomans = 0;

  data.forEach((item) => {
    if (item.g_nero.toLocaleLowerCase() === 'femenino') {
      lenghtMens++;
    } else if (item.g_nero.toLocaleLowerCase() === 'masculino') {
      lenghtWomans++;
    }
  });
  return [lenghtMens, lenghtWomans];
}

export function countCountries(data: IData[]): number {
  const countries: string[] = [];

  data.forEach((item) => {
    if (!countries.includes(item.pais_prisi_n)) {
      countries.push(item.pais_prisi_n);
    }
  });

  return countries.length;
}

export function countCrimes(data: IData[]): TDictionary {
  const crimeCounts: TDictionary = {};

  data.forEach((item) => {
    const crime = item.delito;

    if (crimeCounts.hasOwnProperty(crime)) {
      crimeCounts[crime] += +item.cantidad;
    } else {
      crimeCounts[crime] = 1;
    }
  });

  return crimeCounts;
}

export function countGroupAges(data: IData[]): TDictionary {
  const groupAgesCount: TDictionary = {};

  data.forEach((item) => {
    const group = item.grupo_edad;

    if (groupAgesCount.hasOwnProperty(group)) {
      groupAgesCount[group]++;
    } else {
      groupAgesCount[group] = 1;
    }
  });

  return groupAgesCount;
}

export function countDetainedByCountry(data: IData[]): TDictionary {
  const detainedByCountry: TDictionary = {};

  data.forEach((item) => {
    const country = item.pais_prisi_n;

    if (detainedByCountry.hasOwnProperty(country)) {
      detainedByCountry[country] += +item.cantidad;
    } else {
      detainedByCountry[country] = 1;
    }
  });

  return detainedByCountry;
}

export function countBySituation(data: IData[]): TDictionary {
  const situationDictionary: TDictionary = {};

  data.forEach((item) => {
    console.log(item,'sss');
    const situation = item.situaci_n_jur_dica;

    if (Object.keys(situationDictionary).includes(situation)) {
      situationDictionary[situation] += +item.cantidad;
    } else {
      situationDictionary[situation] = 1;
    }
  });

  return situationDictionary;
}
export function getTopRecords(data: IData[]): IData[] {
  const topRecords: IData[] = [];

  data.sort((a, b) => b.cantidad - a.cantidad);

  for (let i = 0; i < 5; i++) {
    const record = data[i];
    topRecords.push(record);
  }

  return topRecords;
}

export function sortData(data, type = 'ascendent') : IData[] {
  var arrayDePares = Object.entries(data);

  arrayDePares.sort(function(a, b) {
    return type === 'ascendent' ? b[1] - a[1] : a[1] - b[1];
  });

  return Object.fromEntries(arrayDePares) as IData[];
}
