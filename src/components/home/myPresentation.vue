<template>
  <div class="q-pa-md">
      <div class="row">
          <div class="col">
            <q-img
            transition="fade"
            src="https://cdn.pixabay.com/photo/2016/11/18/18/37/programming-1836330_960_720.png"
            style="width: 100%;height:45vh"
            >
            <div class="absolute-bottom text-subtitle1 text-center text-bold">
                Mon nom est Etienne Massot
            </div>
            </q-img>
          </div>
          <div class="col text-center">
              <div class="q-ma-md text-grey-4">
                  <h4><u>Mon cote Geek</u></h4>
              </div>
              <div class="q-ma-md text-bold text-white">
                  <p>Joueur de Magic the gathering version papier ainsi que online , jaime les mangas et tres grand fan de la licence Final Fantasy</p>
              </div>
          </div>
      </div>
      <div class='row'>
          <div class="col text-center">
              <div class="q-ma-md text-grey-4">
                  <h4>{{ title }}</h4>
              </div>
              <div class="q-ma-md text-white text-bold">
                  <p>{{ lorem }}</p>
              </div>
          </div>
          <div class="col">
            <q-img
            transition="fade"
            src="https://geeko.lesoir.be/wp-content/uploads/sites/58/2020/07/jeu-video-magic-gathering.jpg"
            style="width: 100%;height:45vh"
            >
            <div class="absolute-bottom text-subtitle1 text-center text-bold">
                Squallou
            </div>
            </q-img>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Presentation',
      lorem: 'Devellopeur Web fullstack de 32ans et passioné par mon métier '
    }
  }
}
</script>
