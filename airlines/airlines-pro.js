let flights = [

    { id: 0, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 1, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 2, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 3, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 4, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 5, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 6, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 7, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 8, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 9, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }];

let inBudgetFlights = [];
let username ;

airlinesProgram();

function airlinesProgram(){
console.clear();
greetUser();
displayFlights(flights);
getAveragePrice();
filterFlightsWithScales();
getLast5Destination();
if (isAdmin() == true){
    displayAdminMenu();
}else{
    searchFlightByPrice();
    purchaseFlight();
}

}

function greetUser(){
        username = prompt('Please log in using your name');
        if(!isNaN(username) || username === ''){
            confirm('Please enter a valid username');
            greetUser();
        } else{
        alert(`Hi ${username}, welcome to SkyLab Airlines, here is a detailed list of all our today's flights, as well as some extra information.`)
        }
}

function displayFlights(array){
    
    let scalesString;
    
    for (let i = 0; i < array.length; i++){
        scalesString = array[i].scale ? 'has scales.' : "doesn't have scales.";
        console.log(`The flight with ID #${array[i].id} from ${array[i].from} to ${array[i]. to} costs ${array[i].cost}€ and ${scalesString}`);
    }
}

function getAveragePrice(){
    const ALLPRICES = flights.map(a => a.cost);
    const AVERAGEPRICE = ALLPRICES.reduce((a, b) => a + b) / flights.length;

    console.log(`The average price of our today's flights is ${AVERAGEPRICE.toFixed(2)}€`);
}


function filterFlightsWithScales(){
    const FLIGHWTSWITHSCALES = flights.filter( a => a.scale == true);
    const SCALESID = FLIGHWTSWITHSCALES.map(a => a.id);
    
    console.log(`${FLIGHWTSWITHSCALES.length} of our flights have scales. The IDs are: ${SCALESID}.` );
}
    

function getLast5Destination(){
    const LAST5DESTINATION = flights.slice(flights.length -5).map(a => a.to).join(', ');
    console.log(`The last 5 flights of the day go to: ${LAST5DESTINATION}`);
}

function isAdmin(){
    let typeOfAccount = confirm('Are you an Admin? If so press the accept button');

    return typeOfAccount ? true : false ;    
}

function displayAdminMenu(){
    console.clear();
    displayFlights(flights);

    let option = prompt('Please type 1 if you want to add flights 2 if you want to delete flights or 3 to exit');

    switch (option){
        case '1':
            if(flights.length < 15){
            addFlights();
            }else{
                alert('The maximum ammount of flights for a day is 15, delete some if you want to introduce new ones.');
                displayAdminMenu();
            }
            break;

        case '2':
            if(flights.length > 0){
                deleteFlights();
            }else{
                alert('You have deleted all the flights for the day');
                displayAdminMenu();
            }
            break;
        
        case '3':
            alert(`${username} logged out`);
            break;
        
        default:
            alert('That is not a valid option');
            displayAdminMenu();
            break;
    }
}

function addFlights(){
let moreFlights;
do{
    let flightTo = prompt('Where does the flight take off?');
    let flightFrom = prompt('Where is it going?');
    let flightCost = Number.parseInt(prompt('How much does it cost?'));
    let flightScale = confirm('Does it have scales? If so press the accept button.');
    let flightsLength = flights.length;

    let newFlight = {
        id : flightsLength ++ ,
        to : flightTo ,
        from : flightFrom ,
        cost : flightCost ,
        scale : flightScale
    }

    flights.push(newFlight);

    if (flights.length < 15){
    moreFlights = confirm('Would you like to add more flights?');

    }else{
        alert('The maximum ammount of flights for a day is 15');
    }

}while(flights.length < 15 && moreFlights === true);

displayAdminMenu();
}

function deleteFlights(){

    let flightToDelete;
    let IDarray = flights.map(a => a.id);
    let i = 0;
    let deleteAgain;

    do{
        if(i > 0){
            alert("The input introduced doesn't match any of our current IDs")
        }
        flightToDelete = Number.parseInt(prompt('Type the ID of the flight you want to delete'));
        i++
    }while(!IDarray.includes(flightToDelete))

    flights.splice(flightToDelete, 1);
    updateID();
    console.clear();
    displayFlights(flights);

    deleteAgain = confirm('Do you want to delete another flight?');

    if(deleteAgain && flights.length > 0){
        deleteFlights();

    }else if(deleteAgain && flights.length == 0){
        alert('You already deleted all the flights for today');
        displayAdminMenu();

    }else{
        displayAdminMenu();
    }
}

function updateID(){
    for (let i = 0; i < flights.length; i++){
        flights[i].id = i;
    }
}


function searchFlightByPrice(){
    
    let priceSearcher = {
    };

    priceSearcher.budget = prompt('Choose a price to start your search');
    if (isNaN(priceSearcher.budget)){
        alert('Invalid option, please choose a number');
        searchFlightByPrice();
    }else{
        priceSearcher.comparator = prompt("Type '<' '>' or '=' to search for flights cheaper, more expensive or equal then your budget");
    
            switch(priceSearcher.comparator){
                case '<':
                    for (let i = 0; i < flights.length; i++){
                        if(flights[i].cost < priceSearcher.budget){
                            inBudgetFlights.push(flights[i]);
                        }
                    }
                    break;

                case '>':
                    for (let i = 0; i < flights.length; i++){
                        if(flights[i].cost > priceSearcher.budget){
                            inBudgetFlights.push(flights[i]);
                        }
                    }
                    break;

                case '=':
                    for (let i = 0; i < flights.length; i++){
                        if(flights[i].cost == priceSearcher.budget){
                            inBudgetFlights.push(flights[i]);
                        }
                    }
                    break;
                default:
                    alert('Invalid option, follow the instructions precisely.');
                    searchFlightByPrice();
            }

            console.clear();

            if (inBudgetFlights.length > 0){
                console.log(`There are ${inBudgetFlights.length} flights matching your search parameters, it's IDs are: `);
                displayFlights(inBudgetFlights);
                
            }else{
                alert('There are no flights matching your parameters introduce new ones');
                searchFlightByPrice();
            }
        } 
}

function purchaseFlight(){
    let selectedID = parseInt(prompt('Select one of the IDs of the flights displayed to purchase it.'));
    let IDarray = inBudgetFlights.map(a => a.id);
    let purchasedFlight = inBudgetFlights.findIndex(a => a.id == selectedID);
    
    if (IDarray.includes(selectedID)){
        console.log(`Thank you, ${username}, your purchase of the flight from ${inBudgetFlights[purchasedFlight].from} to ${inBudgetFlights[purchasedFlight].to} has been confirmed.`)
    }else{
        alert('Incorrect option , please select one of the ID currently on screen');
        purchaseFlight();
    }
}

    