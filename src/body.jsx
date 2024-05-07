import Search from './search.jsx';
import Social from './social.jsx';
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';



export default function MainBody({favIsClicked ,handleClick}) {

    const quotes = [
        {content: "Failure is an option here. If things are not failing, you are not innovating enough.", author: 'Elon Musk'},
        {content: "When you struggle with a problem, that's when you understand it.", author: "Elon Musk" },
        {content: "Many things are improbable, only a few are impossible.", author: "Elon Musk" },
        {content: "Some people don't like change, but you need to embrace change if the alternative is disaster.", author: "Elon Musk" },
        {content: "Constantly seek criticism. A well thought out critique of what you're doing is as valuable as gold.", author: "Elon Musk" },

        {content: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs"},
        {content: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs"},
        {content: "Stay hungry, stay foolish.", author: "Steve Jobs"},
        {content: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs"},

        {content: "The only true wisdom is in knowing you know nothing.", author: "Socrates"},
        {content: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius"},
        {content: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle"},
        {content: "Act only according to that maxim whereby you can at the same time will that it should become a universal law.", author: "Immanuel Kant"},
        {content: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche"},
        {content: "An unexamined life is not worth living.", author: "Socrates"},
        {content: "Real knowledge is to know the extent of one's ignorance.", author: "Confucius"},
        {content: "The more you know, the more you realize you don't know.", author: "Aristotle"},
        {content: "We are not rich by what we possess but by what we can do without.", author: "Immanuel Kant"},
        {content: "Without music, life would be a mistake.", author: "Friedrich Nietzsche"},
        {content: "The unexamined life is not worth living.", author: "Socrates"},
        {content: "I cannot teach anybody anything, I can only make them think.", author: "Socrates"},
        {content: "True wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us.", author: "Socrates"},
        {content: "Choose a job you love, and you will never have to work a day in your life.", author: "Confucius"},
        {content: "Our greatest glory is not in never falling, but in rising every time we fall.", author: "Confucius"},
        {content: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius"},
        {content: "The roots of education are bitter, but the fruit is sweet.", author: "Aristotle"},
        {content: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle"},
        {content: "Happiness depends upon ourselves.", author: "Aristotle"},
        {content: "Two things awe me most, the starry sky above me and the moral law within me.", author: "Immanuel Kant"},
        {content: "Science is organized knowledge. Wisdom is organized life.", author: "Immanuel Kant"},
        {content: "Morality is not the doctrine of how we may make ourselves happy, but of how we may make ourselves worthy of happiness.", author: "Immanuel Kant"},
        {content: "In individuals, insanity is rare; but in groups, parties, nations, and epochs, it is the rule.", author: "Friedrich Nietzsche"},
        {content: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche"},
        {content: "To live is to suffer, to survive is to find some meaning in the suffering.", author: "Friedrich Nietzsche"},

        {content: "Kindness is a mark of faith, and whoever is not kind has no faith.", author: "Muhammad sm."},
        {content: "The best among you are those who have the best manners and character.", author: "Muhammad sm."},
        {content: "The strong person is not the one who can wrestle someone else down. The strong person is the one who can control himself when he is angry.", author: "Muhammad sm."},
        {content: "Do not belittle any act of kindness, even if it is just smiling at your brother.", author: "Muhammad sm."},
        {content: "The greatest jihad is to battle your own soul, to fight the evil within yourself.", author: "Muhammad sm."},
        {content: "Speak good or remain silent.", author: "Muhammad sm."},
        {content: "A man's true wealth is the good he does in this world.", author: "Muhammad sm."},
        {content: "The best of you are those who are best to their women.", author: "Muhammad sm."},
        {content: "Feed the hungry, visit the sick, and set free the captives.", author: "Muhammad sm."},
        {content: "A believer does not slander, curse, or speak in an obscene or foul manner.", author: "Muhammad sm."}
    ];

    const [quote ,setQuote] = useState(quotes[13].content);
    const [author ,setAuthor] = useState(quotes[13].author);
    const [fade ,setFade] = useState(false);
    const [selected ,setSelected] = useState('Select Author');
    const [selectedArray, setSelectedArray] = useState([]);
    

    function handleButtonClick() {

        setFade(true)
        setTimeout(() => {

            
            if(selected === 'Select Author'){
            let random = Math.floor(Math.random() * quotes.length);
            setQuote(quotes[random].content);
            setAuthor(quotes[random].author);
            
            }
            
            else{
                let random = Math.floor(Math.random() * selectedArray.length)
                setQuote(selectedArray[random].content)
                setAuthor(selectedArray[random].author)
            }

            setFade(false)
        }, 350);
    }

    function handleChange(e) {
        const newSelected = e.target.value;
        setSelected(newSelected);

        const filtered = quotes.filter(q => q.author === newSelected);

        setSelectedArray([])
        setSelectedArray(p => [...p ,...filtered]);
        setQuote(filtered[0].content)
        setAuthor(filtered[0].author)
    }

    const [favQuotes, setFavQuotes] = useState([]);
    function handleSaveClick(){
        let item = JSON.parse(localStorage.getItem('quotes'));
        if(item === null) item = []

        let quoteExist = item.some(i => i.content === quote);
        

        if(!quoteExist){
            item.push({content: quote, author: author})
            localStorage.setItem('quotes' ,JSON.stringify(item))
        }

        setFavQuotes(JSON.parse(localStorage.getItem('quotes')))
    }

    window.onload = () => {
        if(JSON.parse(localStorage.getItem('quotes')) !== null){
        setFavQuotes(JSON.parse(localStorage.getItem('quotes')))
        }
        else{
            setFavQuotes([])
        }
    }


   let favQuotesList = favQuotes.map(f => <div className='favquotes' key={f.content}><p>{f.content}</p><p>{f.author}</p></div>)

    return (
        <main id='main'>
            
            <div id='modal' className={favIsClicked ? 'modal' : ''}>

            </div>
            <div id='fav-quotes' className={favIsClicked ? 'f-in' : ''}>
            <span onClick={handleClick}>&times;</span>
                {favQuotesList}
            </div>
            
            
        
        <div id='Quote' className={fade ? 'fade-out' : 'fade-in'}>{`"${quote}"`}</div>
        <span id='save' onClick={handleSaveClick}><FontAwesomeIcon icon={faHeart} style={{color: 'purple'}}/>
</span>

        <Social quote = {quote}>
            
        <div id='AuthorName' className={fade ? 'fade-out' : 'fade-in'}>{'-- ' + author}</div>
        <button onClick={handleButtonClick}> New Quote </button>
        
        </Social>

        <div id='input'>
        <Search onChange = {handleChange}/>
        <div id='border-animate'></div>
        <div id='border-animate2'></div>
        </div>

        </main>
    )
}