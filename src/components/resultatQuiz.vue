<style scoped src="./Quiz2.css"></style>

<template  @load="demo1">
    <body>
        <header>
            <h1>WEB QUIZ</h1> <!-- eslint-disable -->
        </header>
    <section id="section">
<img id='image1' src="./undraw_winners_ao2o 2.svg">
<h2>Résultat</h2>
<h3 v-if="n>0">Bravo vous avez {{n}} bonnes réponses</h3>
<h3 v-else>Vous n'avez aucunes bonnes réponses</h3>
</section>
<footer>
<h4>Réalisé par Bilal Kolli.</h4>
</footer>
</body>
</template>

<script>
/* eslint-disable */
 export default {
    data()
    {
        return {
            link:"./Quiz3.vue",
            rep1:"Ruby",
            rep2:"PHP",
            rep3:"Python",
            rep4:"CSS",
            n: localStorage.getItem('vrai').length
        }
    },
    }
    </script>
