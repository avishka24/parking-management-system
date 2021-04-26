const addCarButton = document.getElementById("add-car-button");
const carEntry = document.getElementById("car-entries");
const details = document.getElementById("details-form");
const searchField = document.getElementById("search-field");
addCarButton.addEventListener('click',(e) => {
    e.preventDefault();
    const owner = document.getElementById("owner").value;
    const car = document.getElementById("car").value;
    const license = document.getElementById("license-plate").value;
    const entryDate = document.getElementById("entry-date").value;
    const endDate = document.getElementById("end-date").value;
    if(owner != "" && car != "" && license != "" && entryDate != "" && endDate != "")
    {
        console.log(owner,license,entryDate,endDate);
        insertEntry({owner:owner,car:car,license:license,entryDate:entryDate,endDate:endDate});
        details.reset();
    }
    
});

function insertEntry({owner,car,license,entryDate,endDate}){
    const elementTobeAppended = ` 
    <tr>
    <td class="owner__name">${owner}</td>
    <td>${car}</td>
    <td>${license}</td>
    <td>${entryDate}</td>
    <td>${endDate}</td>
    <td><button class="btn btn-danger" onclick="removeCell(event)">Remove</button></td>
    </tr>`;
    carEntry.innerHTML += elementTobeAppended;
}
function removeCell(e) {
    e.target.parentElement.parentElement.remove();
}

searchField.addEventListener('keyup',(e) => {
    searchElement({input : e.target.value});
})

function searchElement({input}) {
    let storedValue = input.toUpperCase();
    const owners = document.querySelectorAll(".owner__name");
    // console.log(owners);
    for(let i = 0; i < owners.length; i++) {
        const ownerName = owners[i].innerText || owners[i].innerHTML;
        if( ownerName.toUpperCase().indexOf(storedValue) > -1){
            owners[i].parentElement.style.display = "";
        }
        else{
            owners[i].parentElement.style.display = "none";
        }
    }
}