//salvo in una variabile il valore del form
const askUserElement = document.getElementById('ask-user');

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

        //converto i dati: km ed età in numero
        const userKm = parseInt(kmElement.value);
        const userAge = parseInt(ageElement.value);

        //procedo con il calcolo del costo del biglietto in tutte le sue circostanze
        const kmPrice = 0.21;
        let ticketPrice = userKm * kmPrice;
       
        let discountPercentage = 0;

        if (userAge < 18){
            discountPercentage = 20;
        } else if (userAge >= 65){
            discountPercentage = 40;
        }

        let discount = (ticketPrice * discountPercentage) / 100;

        ticketPrice -= discount;
       
        //creo un nuovo elemento h2 
        const createNewTitle = document.createElement('h2');
        createNewTitle.innerText = `Ecco il tuo biglietto, ${nameElement.value}!`;

        // creo un elemento paragrafo in cui inserisco il prezzo del biglietto
        const createNewParagraf = document.createElement('p');
        createNewParagraf.innerText = `Costo: ${ticketPrice.toFixed(2)}€`;
      
        // creo un div 
        const detailsTicketElement = document.createElement('div');
     
        //inserisco gli elementi h2 e p nel div
        detailsTicketElement.append(createNewTitle);
        detailsTicketElement.append(createNewParagraf);

        // inserisco il div in pagina
        askUserElement.append(detailsTicketElement);

        const printButtonElement = document.createElement('button');
        printButtonElement.innerHTML = '<i class="bi bi-printer"> Stampa</i>';
        askUserElement.appendChild(printButtonElement);

        const cancelButtonElement = document.createElement('button');
        cancelButtonElement.innerHTML = '<i class="bi bi-x-circle"> Annulla</i>';
        askUserElement.appendChild(cancelButtonElement);

        const divButtonsElement = document.createElement('div');

        divButtonsElement.append(printButtonElement);
        divButtonsElement.append(cancelButtonElement);

        askUserElement.append(detailsTicketElement, divButtonsElement);

        // lavoro sullo stile degli elementi aggiunti nella pagina
        createNewTitle.classList.add('text-center', 'fs-4');
        createNewParagraf.classList.add('text-center', 'fs-5');
        detailsTicketElement.classList.add('bg-info', 'p-5', 'border', 'rounded', 'border-2', 'border-light', 'mb-3');
        printButtonElement.classList.add('btn', 'btn-outline-primary', 'mx-3');
        cancelButtonElement.classList.add('btn', 'btn-outline-danger');
        divButtonsElement.classList.add('d-flex', 'justify-content-center');  

    }
)


 
