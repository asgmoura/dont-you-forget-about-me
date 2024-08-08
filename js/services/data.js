const vimtages = [
    {
        "name": "Andreia",
        "fact": "Falo a 200 à hora e ao meio dia já estou 'ALMOÇO, ALMOÇO, ALMOÇO'!",
        "image": "images/andreia.jpg"
    },
    {
        "name": "Carla",
        "fact": "Desapareço nas horas de almoço e estou de férias!",
        "image": "images/carla.jpg"
    },
    {
        "name": "Susana",
        "fact": "Sou a Queen do FrontEnd e DJ da turma",
        "image": "images/susana.jpg"
    },
    {
        "name": "Gonçalo",
        "fact": "Sou o maior defensor do Pikachu e o hacker aqui da sala",
        "image": "images/gonçalo.jpg"
    },
    {
        "name": "Vasco",
        "fact": "Já tenho uma certa idade e caminhos é comigo!",
        "image": "images/vasco.jpg"
    },
    {
        "name": "Francisco",
        "fact": "Odeio castigos e sou espião. Adoro torturar os peluches da Code for All_!",
        "image": "images/francisco.jpg"
    },
    {
        "name": "Rui",
        "fact": "Tenho o melhor sentido de humor deste bootcamp e não deixo uma piada por dizer!",
        "image": "images/rui.jpg"
    },
    {
        "name": "Arnaldo",
        "fact": "Digo um número ilimitado de vezes 'Obrigado' durante as apresentações e falo pelos cotovelos!",
        "image": "images/arnaldo.jpg"
    },
    {
        "name": "Marcelo",
        "fact": "Sou pró a cortar fitas e a adormecer e chegar atrasados às lectures!",
        "image": "images/marcelo.jpg"
    },
    {
        "name": "Zé Pedro",
        "fact": "Abaixo o Capitalismo e Viva às pausas!",
        "image": "images/zePedro.jpg"
    },
    {
        "name": "Guilherme",
        "fact": "As piadas mais secas que a Code for All_ já ouviu.",
        "image": "images/guilherme.jpg"
    },
    {
        "name": "Arada",
        "fact": "Sou MC disfarçado de aluno. Sou meio autista!",
        "image": "images/arada.jpg"
    },
    {
        "name": "Sutre",
        "fact": "Vim lá da serra para Lisboa programar e o que me vale é a jola dos CodeBreaks!",
        "image": "images/sutre.jpg"
    },
    {
        "name": "Deli",
        "fact": "Mando calinadas na gramática e sou o caçula da turma!",
        "image": "images/deli.jpg"
    },
    {
        "name": "Rita",
        "fact": "Neste bootcamp não aprendi a falar mais alto, mas aprendi a andar de skate!",
        "image": "images/rita.jpg"
    },
    {
        "name": "Pedro",
        "fact": "Gosto de meter transe e de estar na merda no código",
        "image": "images/pedro.jpg"
    },
    {
        "name": "Anderson",
        "fact": "Os randomizers adoram-me e eu odeio-os!",
        "image": "images/anderson.jpg"
    },
    {
        "name": "Bernardo",
        "fact": "Moro a 2h do bootcamp, tenho um bicipite que parece uma ervilha e passo o dia a dizer 'Shibal'",
        "image": "images/bernardo.jpg"
    },
    {
        "name": "Inês",
        "fact": "Às 18h da tarde são sempre 4:20.",
        "image": "images/ines.jpg"
    },
    {
        "name": "Andreia MC",
        "fact": "Tenho dislexia assumida e às 10h da manhã já tenho 3 cafés no bucho. Até lopezzzzz",
        "image": "images/andreiaMC.jpeg"
    },
    {
        "name": "Margarida MC",
        "fact": "Buenos maltinhaaa, fico super excited quando o código funciona mas ainda mais quando a Taylor vem à tuga. ",
        "image": "images/margaridaMC.jpg"
    },
    {
        "name": "Mendanha",
        "fact": "Passo a vida a ser confundido, já passei por Manzarra, Mendonça e Miranda. Ok? Fixe ",
        "image": "images/mendanhaMC.jpg"
    },
    {
        "name": "Mariana",
        "fact": "Adoro castigos e sou a rainha do karaoke! Perder no bearpong? NEVER",
        "image": "images/marianaBoss.jpeg"
    },
];
async function getVimtage(index) {
    return vimtage[index];
}
async function getVimtages() {
    return vimtages;
}
export default { getVimtage , getVimtages};