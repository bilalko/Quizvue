<style scoped src="./Quiz.css"></style>

<template>
    <body>
        <header>
            <h1>COUNTRY QUIZ</h1>
              <img id="image1" src="./undraw_adventure_4hum1.svg"> <!-- eslint-disable -->
        </header>
    <section id="section">
<h2>Parmi ces FrameWorks, lequel est un FrameWork Javascript ?</h2>
<p id="question1" @click="demo">{{rep1}}</p>
<p id="question2" @click="demo2">{{rep2}}</p>
<p id="question3" @click="demo3">{{rep3}}</p>
<p id="question4" @click="demo4">{{rep4}}</p>
<router-link to="/Quiz3">
<button type="submit" @submit='demo5' id="boutton" >Suivant</button>
</router-link>
</section>
<footer>
<h3>Réalisé par Bilal Kolli.</h3>
</footer>
</body>
</template>

<script>
/* eslint-disable */ 
 export default {
    data()
    {
        return {
            rep1:"Symfony",
            rep2:"Bootstrap",
            rep3:"React",
            rep4:"Django"
        }
    },
    methods: {
    demo: () => {
      document.getElementById('boutton').style.display = 'flex'
      document.getElementById('question1').style.color = 'white'
      document.getElementById('question1').style.backgroundColor = 'red'
      document.getElementById('question3').style.backgroundColor = 'green'
      document.getElementById('question3').style.color = 'white'
    },
    demo2: () => {
      document.getElementById('boutton').style.display = 'flex'
      document.getElementById('question2').style.color = 'white'
      document.getElementById('question2').style.backgroundColor = 'red'
      document.getElementById('question3').style.backgroundColor = 'green'
      document.getElementById('question3').style.color = 'white'
    },
    demo3: () => {
      document.getElementById('boutton').style.display = 'flex'
      document.getElementById('question3').style.backgroundColor = 'green'
      document.getElementById('question3').style.color = 'white' 
      this.w = localStorage.getItem('vrai')
      this.w += 1
      console.log(this.w)
      localStorage.setItem('vrai',this.w)
    },
    demo4: () => {
      document.getElementById('boutton').style.display = 'flex'
      document.getElementById('question4').style.color = 'white'
      document.getElementById('question4').style.backgroundColor = 'red'
      document.getElementById('question3').style.backgroundColor = 'green'
      document.getElementById('question3').style.color = 'white'
    },
    demo5: () => {
    }
    }
    }
    </script>
