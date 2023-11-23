import axios from 'axios';

export const getAllData = async () => {
  const { data } = await axios.get(
    'https://www.datos.gov.co/resource/e97j-vuf7.json',
  );
  return data;
};
