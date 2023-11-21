export const getAllData = async () => {
  try {
    const response = await fetch(
      'https://www.datos.gov.co/resource/e97j-vuf7.json',
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
