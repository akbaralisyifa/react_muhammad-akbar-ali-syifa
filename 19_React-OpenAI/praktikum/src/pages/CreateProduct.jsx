// import { Axios } from 'axios';
// import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import TabelProduct from '../components/TabelProduct';
// import axios from 'axios';

const CreateProduct = () => {
  // const [data, setData] = useState([]);

  // // const instanceAxios = new Axios();

  // // Mendapatkan data dari API
  // const getData = async () => {
  //   let url = 'https://65127c2db8c6ce52b395afbb.mockapi.io/products';
  //   try {
  //     const response = await axios.get(url);
  //     const responseData = response.data;
  //     setData(responseData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Navbar />
      <TabelProduct />
    </div>
  );
};

export default CreateProduct;
