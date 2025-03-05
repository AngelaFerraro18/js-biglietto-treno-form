//salvo in una variabile il valore del form
const askUserElement = document.getElementById('ask-user');
console.log(askUserElement);

//salvo in una variabile il valore che sarà il nome dell'utente
const nameElement = document.getElementById('input-name');

//salvo in una variabile i km che l'utente vuole percorrere
const kmElement = document.getElementById('input-km');

//salvo in una variabile l'età che inserirà l'utente
const ageElement = document.getElementById('input-age');

//appena l'utente invierà il form...
askUserElement.addEventListener('submit',
    function(event){
        event.preventDefault();

        console.log(nameElement.value);
        console.log(kmElement.value);
        console.log(ageElement.value);

        //converto i dati: km ed età in numero
        const userKm = parseInt(kmElement.value);
        const userAge = parseInt(ageElement.value);

        //procedo con il calcolo del costo del biglietto in tutte le sue circostanze
        const kmPrice = 0.21;
        let ticketPrice = userKm * kmPrice;
        console.log(ticketPrice);
        let discountPercentage = 0;

        if (userAge < 18){
            discountPercentage = 20;
        } else if (userAge >= 65){
            discountPercentage = 40;
        }

        let discount = (ticketPrice * discountPercentage) / 100;

        ticketPrice -= discount;

        console.log(ticketPrice.toFixed(2));

    }
)