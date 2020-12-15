const search = document.querySelector(".search");
const matchList = document.getElementById("country-match");
//search for json file and filter it
let searchCountry = async searchText => {
    let res = await fetch("./country.json")
    const data = await res.json();

    //filter the data;
    let matches = data.filter(dataValue =>{
        const regex = new RegExp(`^${searchText}`, 'gi');
       return dataValue.country.match(regex)
    });
    if(searchText.length === 0){
        matches = [];
        matchList.innerHTML = ""
    }
    outputHtml(matches)
}
 const outputHtml = matches =>{
     if(matches.length > 0){
         output = matches.map(match =>
            `<div class="card card-body"><p><i class ="fas text-danger fa-university"></i> ${match.country}</p></div>`
            ).join('')
            matchList.innerHTML = output; 
     }
 }
search.addEventListener('input', () => searchCountry(search.value))
//use template literal with map.
