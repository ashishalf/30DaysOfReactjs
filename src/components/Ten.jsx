// Random Quote

import React from 'react'

function Ten() {
    const quotes = [
        "The best way to predict the future is to invent it. – Alan Kay",
        "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
        "Do not watch the clock. Do what it does. Keep going. – Sam Levenson",
        "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
        "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
        "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
        "It does not matter how slowly you go as long as you do not stop. – Confucius",
        "You miss 100% of the shots you don't take. – Wayne Gretzky",
        "The journey of a thousand miles begins with one step. – Lao Tzu",
        "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
        "Don’t count the days, make the days count. – Muhammad Ali",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
        "Believe you can and you're halfway there. – Theodore Roosevelt",
        "The way to get started is to quit talking and begin doing. – Walt Disney",
        "Dream big and dare to fail. – Norman Vaughan",
        "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
        "The only thing we have to fear is fear itself. – Franklin D. Roosevelt",
        "Act as if what you do makes a difference. It does. – William James"
      ];

      const randIndex = Math.floor(Math.random()*quotes.length)
      const quote = quotes[randIndex]
      
  return (
    <div><h1>Today's Quote: {quote}</h1></div>
  )
}

export default Ten