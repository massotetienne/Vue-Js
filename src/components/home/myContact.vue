<template>
  <div class="q-pa-md">
      <div class="row">
          <div class="col-6">
            <q-img
            transition="flip-right"
            src="~/assets/envoie-message.jpeg"
            style="width: 100%;height:45vh"
            >
            <div class="absolute-bottom text-subtitle1 text-center">
                Contactez moi
            </div>
            </q-img>
          </div>
          <div class="col-6">
              <div class="q-ma-md text-grey-4">
                  <h4 class="text-center"><u>{{ title }}</u></h4>
              </div>
              <div class="q-ma-md text-grey-10 text-bold">
                  <p class="text-center">{{ lorem }}</p>
              </div>
          </div>
      </div>
      <div class='row q-pa-lg'>
        <div class="col-6 q-pa-md">
            <q-input rounded standout v-model="text" label="Email" />
        </div>
        <div class="col-6 q-pa-md">
            <q-input rounded standout v-model="text" label="Nom" />
        </div>
        <div class="col-12 q-pa-md">
          <q-input rounded standout v-model="text" label="Sujet" />
        </div>
        <div class="col-12 q-pa-md">
            <q-input
                rounded
                standout
                v-model="text"
                label="Message"
                type="textarea"
            />
        </div>
        <div class="col-12 q-pa-md text-center">
            <q-btn rounded color="dark" icon="mail" icon-right="send" label="Envoyer un message" />
        </div>
      </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      title: 'me contacter,',
      lorem: 'Envoyer moi un message , pour de plus amples information .'
    }
  }
}
</script>
