<template>
  <div class="q-pa-md">
      <div class="row">
          <div class="col-6">
            <q-img
            transition="rotate"
            src="https://cdn.pixabay.com/photo/2018/02/11/09/51/block-chain-3145392_960_720.jpg"
            style="width: 100%;height:45vh"
            >
            <div class="absolute-bottom text-subtitle1 text-center text-bold">
                Sur mon temps libre
            </div>
            </q-img>
          </div>
          <div class="col-6">
              <div class="q-ma-md text-grey-4">
                  <h4><u>{{ title }}</u></h4>
              </div>
              <div class="q-ma-md text-grey-10 text-bold">
                  <p>{{ lorem }}</p>
              </div>
          </div>
      </div>
      <div class='row q-pa-lg' >
        <div class="col-3 q-pa-md col-md-4 col-lg-3 col-sm-6 col-xs-12" :key="n" v-for="n in 8">
          <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-overline">Overline</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>

              <q-card-section class="col-5 flex flex-center">
                <q-img
                  class="rounded-borders"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
              </q-card-section>
            </q-card-section>

            <q-separator />
          </q-card>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'mes projets,',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>
