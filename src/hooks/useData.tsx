import React from 'react';
import DataContext from '../context/DataProvider';

const useData = () => {
  return React.useContext(DataContext);
};

export default useData;
