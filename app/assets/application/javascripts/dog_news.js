import Vue from 'vue/dist/vue.esm'

document.addEventListener('DOMContentLoaded', () => {
  var app = new Vue({
    el: "#dog-news",
    data: {
      headline: "In some dog news..."
    }
  })
})
