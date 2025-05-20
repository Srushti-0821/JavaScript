let mainSection = document.getElementById("datawrapper");

// data fetch 

function fetchdata () {
    let store = fetch('http://localhost:3000/product')
    .then((res) => res.json())
    .then((data) => list(data))
    .catch((err) => console.log(err));
}

fetchdata();

function list(data)
{
    let store = data.map((el)=>card( el.Product_Name , el.Image , el.Price))
    mainSection.innerHTML = store.join(" ");
}

// description page re direct

function card( Product_Name , Image , Price ) {
    let card = `
        <a href="descriptionpage.html?image=${encodeURIComponent(Image)}&productname=${encodeURIComponent(Product_Name)}
        &price=${encodeURIComponent(Price)}" class="product-card">
            <div class="card-container">
                <img src="${Image}" height="280px" width="250px">
                <p class="product-name">${Product_Name}</p>
                <p class="product-price">$${Price}</p>
            </div>
        </a>
    `;
    return card;
}