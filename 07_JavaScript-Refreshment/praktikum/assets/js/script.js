
document.addEventListener("DOMContentLoaded",() => {
    const inputProductName = document.querySelector("#productName");
    const buttonSubmit = document.getElementById("buttonSubmit");
    const inputProductPrice = document.querySelector("#productPrice")

    buttonSubmit.addEventListener("click", (e) => {
        e.preventDefault();

        const productName = inputProductName.value;
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