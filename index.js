/// variables 

let btn = document.querySelector("#new-quote");
let quote= document.querySelector('.qoute');
let person = document.querySelector('.person');

const qoutes =[
    {
        quote:`“The only way to do great work is to love what you do.” `,
        person:"Steve Jobs"
    },
    {
        quote:`“In the end, we will remember not the words of our enemies, but the silence of our friends.”`,
        person:"Martin Luther King Jr."
    },
    {
        quote:`“Be the change that you wish to see in the world.”`,
        person:"Mahatma Gandhi"
    },
    {
        quote:`“You must be the change you wish to see in the world.”`,
        person:"Mahatma Gandhi"
    },
    {
        quote:`“The future belongs to those who believe in the beauty of their dreams.”`,
        person:"Eleanor Roosevelt"
    },
    {
        quote:`“The best way to predict your future is to create it.”`,
        person:"Abraham Lincoln"
    },
    {
        quote:`“Life is what happens when you’re busy making other plans.” `,
        person:"John Lennon"
    },
    {
        quote:`“The best way to predict the future is to invent it.”`,
        person:"Alan Kay"
    },
    {
        quote:`“The biggest adventure you can take is to live the life of your dreams.”`,
        person:"Oprah Winfrey"
    },
    {
        quote:`“The future is not something we enter, but something we create.”`,
        person:"John F. Kennedy"
    }
]

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*qoutes.length);
    quote.innerText = qoutes[random].quote
    person.innerText=qoutes[random].person
})