
let mainSection = document.getElementById("data-list-wrapper");

// pitch
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-category");
let pitchDescritionInput = document.getElementById("pitch-description");
let pitchPercentageInput = document.getElementById("pitch-percentage");
let pitchfounderInput = document.getElementById("pitch-founder");
let pitchPriceInput = document.getElementById("pitch-price");
let pitchYearInput = document.getElementById("pitch-year");
let pitchCreateBtn = document.getElementById("add-pitch");

// Update pitch
let updatePitchIdInput = document.getElementById("update-pitch-id");
let updatePitchTitleInput = document.getElementById("update-pitch-title");
let updatePitchImageInput = document.getElementById("update-pitch-image");
let updatePitchfounderInput = document.getElementById("update-pitch-founder");
let updatePitchCategoryInput = document.getElementById("update-pitch-category");
let updatePitchPriceInput = document.getElementById("update-pitch-price");
let updatePitchBtn = document.getElementById("update-pitch");

//Update price
let updatePricePitchId = document.getElementById("update-price-pitch-id");
let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
let updatePricePitchPriceButton = document.getElementById("update-price-pitch");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterFood = document.getElementById("filter-Food");
let filterElectronics = document.getElementById("filter-Electronics");
let filterPersonalCare = document.getElementById("filter-Personal-Care");

//Search by title/founder

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

// Problem 1. List of pitches on page load [3]

let productdata = [];

function fetchdata()
{
    let store = fetch('http://localhost:3000/pitches')
    .then((res) => res.json())
    .then((data) => {
      cardlist(data) ,
      productdata = data})
    .catch((err) => console.log(err));
}

fetchdata();

function cardlist(data)
{
    let store = data.map((el)=>card(el.id , el.category , el.description , el.founder , 
        el.image , el.percentage , el.price , el.title , el.year))
    mainSection.innerHTML = store.join(" ");
}

// Add Pitch

function card(id , category , description , founder , image , percentage , price , title , year)
{
    let card = `
    <div>
        <h3 class="card-id"> id: ${id} </h3>
        <p  class="card-category"> category : ${category} </p>
        <p  class="card-description"> description : ${description} </p>
        <p  class="card-founder"> founder : ${founder} </p>
        <img src = "${image}" height="280px" width="250px"  >
        <p  class="card-percentage"> percentage : ${percentage} </p>
        <p  class="card-price"> price : ${price} </p>
        <p  class="card-title"> title : ${title} </p>
        <p  class="card-year"> year : ${year} </p>
        <button data-id=${id} class="card-edit">Edit</button>
        <button data-id=${id} class="card-button">Delete</button>
    </div>
    `
    return card;
}

pitchCreateBtn.addEventListener("click",(event)=>{

    event.preventDefault()

    let obj = {
        title : pitchTitleInput.value,
        image : pitchImageInput.value,
        category : pitchCategoryInput.value,
        description : pitchDescritionInput.value,
        percentage : pitchPercentageInput.value,
        founder : pitchfounderInput.value,
        price : pitchPriceInput.value,
        year : pitchYearInput.value
    }

    console.log(obj)

    fetch('http://localhost:3000/pitches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      })
      .then(response => response.json())
      .then(data => console.log('POST request successful:', data))
      .catch(error => console.error('Error:', error));
})

// Delete data

document.addEventListener("click",(e)=>{
    if(e.target.classList.contains('card-button'))
    {
        deleteproduct(e.target.dataset.id)
    }
})

function deleteproduct(id)
{
    fetch(`http://localhost:3000/pitches/${id}`, {
        method: 'DELETE',
      })
      .then(response => {
        if (response.ok) {
          console.log('DELETE request successful');
        } else {
          console.error('Failed to delete:', response.statusText);
        }
      })
      .catch(error => console.error('Error:', error));
}

// Filtering

filterFood.addEventListener("click", () => {
  let filterdata = productdata.filter(el => el.category === "Food");
  cardlist(filterdata);
});

filterElectronics.addEventListener("click", () => {
  let filterdata = productdata.filter(el => el.category === "Electronics");
  cardlist(filterdata);
});

filterPersonalCare.addEventListener("click", () => {
  let filterdata = productdata.filter(el => el.category === "Personal Care");
  cardlist(filterdata);
});

// Sorting

sortAtoZBtn.addEventListener("click",()=>{
  let newarr = productdata.sort(function(a, b)
  {return a.price - b.price})
  cardlist(newarr)
})

sortZtoABtn.addEventListener("click",()=>{
  let newarr = productdata.sort(function(a, b)
  {return b.price - a.price})
  cardlist(newarr)
})

// Update Data

document.addEventListener('click',(e)=>{
  if(e.target.classList.contains('card-edit'))
  {
       updateData(e.target.dataset.id)
  }
})

function updateData(id)
{
    fetch(`http://localhost:3000/pitches/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)

        updatePitchIdInput.value = data.id
        updatePitchTitleInput.value = data.title
        updatePitchImageInput.value = data.image
        updatePitchfounderInput.value = data.founder
        updatePitchCategoryInput.value = data.category
        updatePitchPriceInput.value = data.price
    })
    .catch((err)=>console.log(err))
}

updatePitchBtn.addEventListener('click',()=>{
  
    let updateObj = {
        id :updatePitchIdInput.value,
        title : updatePitchTitleInput.value,
        image : updatePitchImageInput.value,
        category :updatePitchCategoryInput.value,
        founder : updatePitchfounderInput.value,
        price : updatePitchPriceInput.value,
    }
    fetch(`http://localhost:3000/pitches/${updateObj.id}`,{
        method:'PUT',
        headers : {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateObj)
    }).then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
})

// Update Price

document.addEventListener('click',(e)=>{
  if(e.target.classList.contains('card-edit'))
  {
       updateprice(e.target.dataset.id)
  }
})

function updateprice(id)
{
    fetch(`http://localhost:3000/pitches/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        updatePricePitchId.value = data.id
        updatePricePitchPrice.value = data.price
    })
    .catch((err)=>console.log(err))
}

updatePricePitchPriceButton.addEventListener('click',()=>{
   
    let updateprice1 = {
        id :updatePricePitchId.value,
        price : updatePricePitchPrice.value,
    }
    fetch(`http://localhost:3000/pitches/${updateprice1.id}`,{
        method:'PATCH',
        headers : {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateprice1)
    }).then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
})