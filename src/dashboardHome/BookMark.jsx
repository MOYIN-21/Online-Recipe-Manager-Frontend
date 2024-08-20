import React, { useState, useEffect } from 'react';

const BookMark = () => {
  const [meals, setMeals] = useState([]); // State to store meals

  useEffect(() => {
    const apiURL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
    
    // Fetching the data from the API
    fetch(apiURL)
      .then((response) => {
        console.log('resolved', response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.meals) {
          setMeals(data.meals); // Store meals in state
        } else {
          console.log('No meals found.');
        }
      })
      .catch((err) => {
        console.log('rejected', err);
      });
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div className='bg-orange-50 h-screen'>
      <h1>BookMark</h1>
      <div className='grid grid-cols-3 gap-4'>
        {meals.map((meal) => (
          <div key={meal.idMeal} draggable='true' className='h-72 bg-white w-72 shadow'>
            <p className='flex justify-start'>
              {meal.strMeal}
            </p>
            <p className='flex justify-end'>
              {meal.strCategory}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookMark;
