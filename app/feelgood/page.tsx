'use client'
import React, { useState } from 'react';
import QuoteBlock from './QuoteBlock';
import Button from './Button';
import Ingredients from './Ingredients';
import { getRecipe, getAPIData } from './ninjaAPI';
import Header from '../Header';
import Peach from './Peach';

const randomCocktail = () => {
  const cocktails = ['Espresso Martini', 'Manhattan', 'White Russian', 'Porn Star Martini', 'Margarita', 'Negroni', 'Mai Tai', 'Whiskey Sour']
  let randomNum = Math.random();
  let index = Math.floor(randomNum * cocktails.length);
  return cocktails[index];
}

console.log(randomCocktail())

function Page() {

  //sets text output
  const [data, setData] = useState("Click a button below to choose a category!");

  //sets ingredients, based on random cocktail generator
  const [recipe, setRecipe] = useState<string[]>([]);

  //sets whether a quote is cocktail recipe is shown.
  const [toggled, setToggled] = useState(false)


  const dataClickHandler = async (type: string) => {
    const response = await getAPIData(type)
    setData(response)
    setToggled(false)
  }

  const cocktailClickHandler = async (type: string) => {
    const cocktailIngredients: string[] = await getRecipe(type);
    setData(type)
    setRecipe(cocktailIngredients)
    setToggled(true)
  }


  return (
    <div className='flex flex-col bg-sprinkles bg-center h-screen '>
      <Header
        text='Positivity Peach' />
      <Peach />
      <section id='border' className='flex flex-col justify-center mx-auto bg-gradient-to-r from-pink via-green to-purple shadow-lg p-1 m-2 font-secondary text-pink w-4/5 md:w-fit' >
        <div className='bg-white pb-10 pt-5 -mt-2 -ml-2 md:px-20 md:w-fit'>
          <div className='text-center font-primary text-purple mb-3  '>
            <QuoteBlock
              data={data} />
            {toggled ? <Ingredients
              recipe={recipe} /> : undefined}
          </div>
          <div className='flex flex-col justify-center lg:m-8' >
            <div className='flex flex-row mx-auto'>
              <Button
                id='button1'
                innerHtml='A joke'
                type='dadJoke'
                handler={dataClickHandler}
                colour='pink'
              />

              <Button
                id='button2'
                innerHtml='New bucketlist idea'
                type='bucketlist'
                handler={dataClickHandler}
                colour='pink'
              />
            </div>
            <div className='mx-auto'>
              <Button
                id='button3'
                innerHtml='Still not happy?'
                type={randomCocktail()}
                handler={cocktailClickHandler}
                colour='purple'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;