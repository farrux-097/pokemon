 let elPokemonList = document.querySelector(".container-list");
 let elSerchInput = document.querySelector(".search-input");
 let  elMoodBtn = document.querySelector(".mood-btn");



 function renderPokemons(arr,list){
    list.innerHTML = ""
    arr.forEach(value => {
        let elItem =document.createElement("li")
        let elImg = document.createElement("img")
        let elBgImg = document.createElement("img")
        let elNumber = document.createElement("h2")
        let elName = document.createElement("b")


        let actionBtnWrapper = document.createElement("div")
        let elGRassaBtn = document.createElement("button")
        let elPoisonNBtn = document.createElement("button")

        //className
        actionBtnWrapper.className = "flex item-center ml-[76px] mt-[35px] gap-[10px]"
        elGRassaBtn.className = "grass-btn"
        elPoisonNBtn.className = "poison-btn"


        
        elItem.className =  "item-list cursor-pointer"
        elImg.src = value.img
        elImg.width = "96px"
        elImg.height = "96px"
        elImg.className = "w-[96px] h-[96px] ml-[90px] mt-[-15px] rounded-[10px] hover:scale-105"
        
        elNumber.textContent = value.num
        elName.textContent = value.name
        // elGRassaBtn.textContent = value.type`Grass`



        actionBtnWrapper.append(elGRassaBtn, elPoisonNBtn);
        elItem.append(elImg, elNumber, elName,  elBgImg, actionBtnWrapper );
        list.append(elItem)

    });
 }
 renderPokemons(pokemons,  elPokemonList);


 elSerchInput.addEventListener("keyup", (evt) => {
    var serchValeu = evt.target.value;
    if(Number(serchValeu)){
        var serchedList = pokemons.filter(item => String (item.num).toLowerCase().includes(serchValeu.trim()))
        renderPokemons(serchedList,elPokemonList)
 
    }
    else{
        var serchedList =  pokemons.filter(item => item.name.toLowerCase().includes(serchValeu.trim().toLowerCase()))
        renderPokemons(serchedList,elPokemonList)
    }
 })

 document.getElementById('toggleDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('mood-btn');
});

