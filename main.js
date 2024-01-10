// Per prima cosa dovrai creare il layout ti servirà una icona per caricare l'immagine e gli input necessari per applicare i filtri CSS.

function loadImage() {

    // Consente alle applicazioni Web di leggere in modo asincrono il contenuto dei file

    let reader = new FileReader();

    // quando carico l'immagine parte la funzione

    reader.onload = function(){

        // prendo l'elemento dal mio html con id imageDisplay

        let output = document.getElementById('imageDisplay');

        // dico che l'output è una immagine e gli assegno il risultato di reader

        output.src = reader.result;

        // cambio lo style in block

        output.style.display = 'block';
    };

    // legge le stringhe delle immagini che andiamo a inserire

    reader.readAsDataURL(event.target.files[0]);
}

function ChangeFilter() {

    let filter = document.getElementById("Filter").value;

    // Moltiplica questo valore per 10 e lo usa per creare una stringa che rappresenta l’effetto di scala di grigi in percentuale.

    let greyScale = 'grayscale(' + (filter * 10) + '%)';

    // applico il filtro grayscale alla mia immagine

    document.getElementById("imageDisplay").style['-webkit-filter'] = greyScale;
 }