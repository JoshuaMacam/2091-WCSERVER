<template>
    <div class= "about">
      <h1>About</h1>
      <img src = "https://images4.alphacoders.com/975/975294.jpg">
      <h2>This page is about my favorite comic which is Marvel Cinematic Universe (MCU). The Marvel Cinematic Universe (MCU) is a vast and interconnected world of superheroes, villains, and epic adventures that has captivated audiences around the world. Created by Marvel Studios, the MCU is a shared universe of films and TV shows based on characters from Marvel Comics, spanning over 25 movies and several TV shows. From the first Iron Man film in 2008 to the latest installment, the MCU has become a cultural phenomenon, grossing over $22 billion at the worldwide box office and attracting a massive fanbase.</h2>
    </div>
  </template>
  
  <script>
  export default {
    name: 'about',
    data () {
      return {
        title: 'About'
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1{
    font-family: lucida;
    margin-top: 2%;
    color: red;
  }
  img{
    width: 1500px;
  }
  h2{
    font-family: lucida;
    font-size: 30px;
    color: red;
    margin-top: 2%;
    margin-left: 10%;
    margin-right: 10%;
  }
  </style>
  