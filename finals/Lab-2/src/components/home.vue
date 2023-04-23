<template>
  <div class= "home">
    <h1>Marvel Cinematic Universe</h1>
    <img src="https://wallpaperaccess.com/full/54674.jpg">
    <h2> My favorite comic which is The Marvel Cinematic Universe (MCU) is a common universe of superhuman motion pictures and Network programs created by Wonder Studios, in view of characters from Wonder Comics. It began with the release of "Iron Man" in 2008 and has since included over 25 films and a number of television shows that are all connected to one another and follow a common narrative. The films and shows follow different superheroes and their partners as they fight antagonists and save the world from different dangers. Iron Man, Captain America, Thor, Black Widow, Hulk, Spider-Man, and the Guardians of the Galaxy are among the MCU's most well-known characters. The Marvel Cinematic Universe (MCU) is the highest-grossing film franchise of all time with over $22 billion in worldwide box office revenue, making it a cultural phenomenon.</h2>
  </div>
  
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Home'
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
    margin-top: 2%;
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
