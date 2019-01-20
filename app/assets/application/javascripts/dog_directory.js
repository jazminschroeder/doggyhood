import "../stylesheets/dog_card.scss"
import Vue from 'vue/dist/vue.esm'

document.addEventListener('DOMContentLoaded', () => {
  let dog_directory = document.getElementById("dog-directory") 
  var app = new Vue({
    el: dog_directory,
    data: {
      feature_dogs: JSON.parse(dog_directory.dataset.featuredDogs)
    }
  })
})
