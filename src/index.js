console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imageContainer = document.getElementById("dog-image-container");
const dogBreeds = document.getElementById("dog-breeds");
const breedDropdown = document.getElementById("breed-dropdown");

const fetchList = (element) => {
    if(element[0].charAt(0) === breedDropdown.options[breedDropdown.selectedIndex].value){
        const li = document.createElement("li");
        li.textContent = element;
        li.addEventListener("click", () => {
        li.style.color = "red";
    })
    dogBreeds.appendChild(li);
    }
}


fetch(imgUrl).then(res => res.json()).then(results => {
    results.message.forEach((result) => {
        const img = document.createElement("img");
        img.src = result;
        img.classList.add("img");
        imageContainer.appendChild(img);
    })
});

fetch(breedUrl).then(res => res.json()).then(data => {
    const arr = Object.entries(data.message);
    arr.forEach((element) => {
        fetchList(element)
    })
   
})

breedDropdown.addEventListener("change", () => {
    dogBreeds.innerHTML = "";
    fetch(breedUrl).then(res => res.json()).then(data => {
        const arr = Object.entries(data.message);
        arr.map((element) => {
            fetchList(element);
        })
       
    })
    
})
