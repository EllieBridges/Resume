'use client'
import React, {useState} from 'react';
import axios from 'axios';
import Title from './Title';
import QuoteBlock from './QuoteBlock';
import Button from './Button';
import Ingredients from './Ingredients';

const randomCocktail = () => {
  const cocktails = ['Espresso Martini', 'Manhattan', 'White Russian','Dirty Martini', 'PornStar Martini', 'Margarita', 'Negroni', 'Mai Tai', 'Whiskey Sour']
  let randomNum = Math.random();
  let index = Math.floor(randomNum * cocktails.length);
  return cocktails[index]
}

console.log(randomCocktail())

function Page() {
    
    
  const [quote, setQuote] = useState("Click a button below to choose a category!");
  const [ingredients, setIngredients] = useState([]);
  const [toggled, setToggled] = useState(false)


  const clickHandler = (ext: string, type: string, isQuote: boolean,) => {
    axios.get(`https://api.api-ninjas.com/v1/${ext}${type}`, {
        headers: {
            'X-Api-Key': '+/Kdimt7p9mi5p8FKv8mxQ==Hy6oJnoDukSahBMM'
        }
    }).then((response) => {
      if (isQuote === true && toggled === false) {
        setQuote(response.data[0].quote)}
      else if (isQuote === true && toggled === true){
        setQuote(response.data[0].quote)
        setIngredients([])
        setToggled(false)}
      else {
        setQuote((response.data[0].name).toUpperCase())
        setIngredients(response.data[0].ingredients)
        setToggled(true)
      };
    }).catch((err) => {
        console.log(err);
    })}

  return (
    <div className ='flex flex-col justify-center bg-sprinkles bg-center h-screen'>
      <Title/>
      <section id='border' className='flex flex-col justify-center m-auto bg-gradient-to-r from-pink via-green to-purple shadow-lg p-1 m-2 font-secondary text-pink' >
      <div className='bg-white px-20 pb-10 pt-5 -mt-2 -ml-2'>
      <div className = 'text-center font-primary text-purple text-2xl mb-3'>
      <QuoteBlock
      quote = {quote}/>
       {toggled ? <Ingredients 
      data = {ingredients}/> : undefined}
      </div>
      <div className ='flex flex-col justify-center ' >
      <div className='flex flex-row mx-auto'>
        <Button 
        id = 'button1'
        innerHtml = "Funny"
        type= "funny"
        handler = {clickHandler}
        ext = 'quotes?category='
        isQuote = {true}
        colour = 'purple'
        />
        <Button 
        id = 'button2'
        innerHtml = "Inspirational"
        type = "inspirational"
        handler = {clickHandler}
        ext = 'quotes?category='
        isQuote = {true}
        colour = 'purple'
        />
        <Button 
        id = 'button3'
        innerHtml = "Happiness"
        type = "happiness"
        handler = {clickHandler}
        ext = 'quotes?category='
        isQuote = {true}
        colour = 'purple'
        />
      </div>
      <div className='mx-auto'>
        <Button
        id = 'button4'
        innerHtml = 'Still not happy?'
        type = {randomCocktail()}
        handler = {clickHandler}
        ext = 'cocktail?name='
        isQuote = {false}
        colour = 'green'
        />
        </div>
      </div>
      </div>
      </section>
    </div>
  );
}

export default Page;