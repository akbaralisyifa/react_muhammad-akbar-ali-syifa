export const article = {

    title: {
  
      id: "Buat Akun",
  
      en: "Create Account"
  
    },
  
    description: {
  
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
  
      en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
  
    }
  
  };

  import { v4 as uuidv4 } from 'uuid';
  export const initialValue = [
    {
        id : uuidv4() ,
        nama : "Eiger",
        Kategori : "T-Shirt",
        image : "img.jpg",
        freshness : "New Brand",
        deskripsi: "suisusius",
        price : "2",
    },
    {
        id : uuidv4() ,
        nama : "Rei",
        Kategori : "Jacket",
        image : "img.jpg",
        freshness : "New Brand",
        deskripsi: "suisusius",
        price : "4",
    },
    {
        id : uuidv4() ,
        nama : "Erigo",
        Kategori : "Jacket",
        image : "img.jpg",
        freshness : "New Brand",
        deskripsi: "suisusius",
        price : "6",
    },
]