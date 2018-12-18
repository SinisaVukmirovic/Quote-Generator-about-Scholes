const quotes = [
    {
        avatar: 'img/avatars/pele.jpg',
        author: 'Pele',
        quote: '"If he was playing with me, I would have scored so many more."',
    },
    {
        avatar: 'img/avatars/zidane.jpg',
        author: 'Zinedine Zidane',
        quote: '"My toughest opponent? Scholes of Manchester. He is the complete midfielder."',
    },
    {
        avatar: 'img/avatars/figo.jpg',
        author: 'Luis Figo',
        quote: '"I’m star-struck when I see Paul Scholes because you never see him. On the pitch you can’t catch him. Off the pitch he disappears."',
    },
    {
        avatar: 'img/avatars/davids.jpg',
        author: 'Edgar Davids',
        quote: '"I’m not the best, Paul Scholes is."',
    },
    {
        avatar: 'img/avatars/xavi.jpg',
        author: 'Xavi',
        quote: '"In the last 15 to 20 years the best central midfielder that I have seen – the most complete – is Scholes. I have spoken with Xabi Alonso about this many times. Scholes is a spectacular player who has everything. He can play the final pass, he can score, he is strong, he never gets knocked off the ball and he doesn’t give possession away. If he had been Spanish then maybe he would have been valued more."',
    },
    {
        avatar: 'img/avatars/vieira.jpg',
        author: 'Patrick Vieira',
        quote: '"The player in the Premiership I admire most? Easy – Scholes."',
    },
    {
        avatar: 'img/avatars/keane.jpg',
        author: 'Roy Keane',
        quote: '"An amazingly gifted player who remained an unaffected human being."',
    },
    {
        avatar: 'img/avatars/blanc.jpg',
        author: 'Laurent Blanc',
        quote: '"I tell anyone who asks me – Scholes is the best English player."',
    },
    {
        avatar: 'img/avatars/kidd.jpeg',
        author: 'Brian Kidd',
        quote: '"Paul Scholes had the best football brain I’d ever seen in a kid. Let’s face it. Paul Scholes is in a class of his own."',
    },
    {
        avatar: 'img/avatars/lipi.jpg',
        author: 'Marcello Lippi',
        quote: '"Paul Scholes would have been one of my first choices for putting together a great team."',
    },
    {
        avatar: 'img/avatars/guardiola.jpg',
        author: 'Pep Guardiola',
        quote: '"Out of everyone at Manchester United, I would pick out Scholes, he is the best midfielder of his generation. I would had loved to play alongside him."',
    },
    {
        avatar: 'img/avatars/fabregas.jpg',
        author: 'Cesc Fabregas',
        quote: '"He is the one whose level I aspire to. He is the best player in the Premier League."',
    },
    {
        avatar: 'img/avatars/messi.jpg',
        author: 'Lionel Messi',
        quote: '"At La Masia his name was mentioned a lot. He’s a teacher."',
    },
    {
        avatar: 'img/avatars/berbatov.jpg',
        author: 'Dimitar Berbatov',
        quote: '"Nobody else can play the way Paul Scholes does."',
    },
    {
        avatar: 'img/avatars/ronaldo.jpg',
        author: 'Cristiano Ronaldo',
        quote: '"When we were in training, I used to do a lot of tricks which hardly any players at the club could do. Once I was showing my skills to Scholes. After I finished, Scholes took the ball and pointed to a tree which was about 50m from where we were standing. He said, I’m going to hit it in one shot. He kicked and hit the tree. He asked me to do the same; I kicked about 10 times, but still couldn’t hit it, with that accuracy. He smiled and left."',
    },
    {
        avatar: 'img/avatars/neville.jpg',
        author: 'Gary Neville',
        quote: '"I wouldn’t swap Paul Scholes for anybody. He is quite simply the most complete footballer I have ever played with. He is the best."',
    },
    {
        avatar: 'img/avatars/ferdinand.jpg',
        author: 'Rio Ferdinand',
        quote: '"Best player? For me, it’s Paul Scholes. He’ll do ridiculous things in training like say, “You see that tree over there?” – it’ll be 40 yards away – “I’m going to hit it”. And he’ll do it. Everyone at the club considers him the best."',
    },
    {
        avatar: 'img/avatars/sirBC.jpg',
        author: 'Sir Bobby Charlton',
        quote: '"I have no hesitation in putting a name to the embodiment of all that I think is best about football. It’s Paul Scholes. In so many ways Scholes is my favourite."',
    },
    {
        avatar: 'img/avatars/saf.jpg',
        author: 'Sir Alex Ferguson',
        quote: '"I think Paul Scholes is the best player in England. He’s got the best skills, the best brain. No one can match him. There isn’t a player of his mould anywhere in the world. Paul is irreplaceable."',
    },
];

const btn = document.querySelector('.btn');
const avatar = document.getElementById('avatar');
const authorName = document.getElementById('authorName');
const quote = document.querySelector('.quote');

btn.addEventListener('click', generateQuote);

function generateQuote() {
    let random = Math.floor(Math.random() * quotes.length);

    avatar.setAttribute('src', quotes[random].avatar);
    authorName.textContent = quotes[random].author;
    quote.textContent = quotes[random].quote;
}