
document.addEventListener("DOMContentLoaded",() => {
    const inputProductName = document.querySelector("#productName");
    const inputSeletProduct = document.getElementById("select-Product");
    const inputImage = document.querySelector("#images");
    const inputBrand = document.querySelector("#checked")
    const inputDescriptionProduct = document.getElementById("description");
    const inputProductPrice = document.querySelector("#productPrice");
    const buttonSubmit = document.getElementById("buttonSubmit");

    const tabelList = document.querySelector("#tabel_list");

    buttonSubmit.addEventListener("click", (e) => {
        e.preventDefault();

        const productName = inputProductName.value;
        const selectProduct = inputSeletProduct.value;
        // const images = inputImage.value;
        // const brand = inputBrand.value;
        const description = inputDescriptionProduct.value;
        const productPrice = inputProductPrice.value;

        if (productName.length > 25) {
            alert("Nama Produk Tidak Boleh Melebihi 25 Karakter");
            
        } 

        if( productName === ''){
           alert( "Please enter a valid Prouct name.");
           return;
        }
        
        if(productPrice === ""){
            return alert("Please enter a valid Prouct Price")
        }

        let newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${tabelList.children.length + 1}</td>
            <td>${productName}</td>
            <td>${selectProduct}</td>
            <td><img src="img.jpg"  alt="img"/></td>
            <td>Brand New</td>
            <td>${description}</td>
            <td>$${productPrice}</td>
        `;

        tabelList.appendChild(newRow);

        inputProductName.value = ""
        inputSeletProduct.value = ""
        inputImage.value = ""
        inputBrand.value = ""
        inputDescriptionProduct.value = ""
        inputProductPrice.value = ""



    });
    
    inputProductName.addEventListener("input", () => {
        const productName = inputProductName.value;
        if(productName.length > 10){
            alert("Last Name must not exceed 25 characters.");

        }

        if(productName.includes("@") || productName.includes("#") || productName.includes("{") || productName.includes("}") ){
            alert("Name must not contain symbols.")
        }

    })
})  