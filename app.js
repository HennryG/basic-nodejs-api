const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.listen(3000);

var quotes = [
    {
        'text': 'Las historias están llenas de ejemplos de perros fieles que de amigos fieles.',
        'author': 'Alexander Pope',
    },
    {
        'text': 'El único ser del mundo que te amará más de lo que se ama a sí mismo es el perro.',
        'author': 'John Billings',
    },
    {
        'text': 'La vida sin un perro es un craso error.',
        'author': 'Carl Zuckmayer',
    },
    {
        'text': 'Un perro te enseñará lo que es el amor incondicional. Si tienes esto en la vida, todo lo demás no será tan malo.',
        'author': 'Robert Wagner',
    },
    {
        'text' : 'Un buen perro no te pedirá comida... pero hará que te sientas inmensamente culpable por no compartir.',
        'author' : 'Anónimo',
    }

];

app.get('/random-quote', function(req, res) {
    var randomQuote = getRandomQuote();
	res.send(randomQuote);
});

function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}