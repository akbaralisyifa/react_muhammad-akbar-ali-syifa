// import { Axios } from 'axios';
import { useEffect, useState } from 'react';
import TabelProduct from '../components/TabelProduct';

const CreateProduct = () => {
  const [data, setData] = useState([]);

  // const instanceAxios = new Axios();

  const getData = async () => {
    let url = 'https://65127c2db8c6ce52b395afbb.mockapi.io/products';

    try {
      const response = await fetch(url, { method: 'GET' });
      const responseJson = await response.json();
      console.log(responseJson);
      setData(responseJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <TabelProduct data={data} />
    </div>
  );
};

export default CreateProduct;
