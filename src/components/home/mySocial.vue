<template>
  <div class="q-pa-md">
      <div class="row">
          <div class="col-6">
            <q-img
            transition="scale"
            src="https://www.tmncorp.com/wp-content/uploads/2016/06/social_media_marketing.washington.dc_.marketing.firm_.png"
            style="width: 100%;height:45vh"
            >
            <div class="absolute-bottom text-subtitle1 text-center text-bold">
                Rejoignez-moi
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
        <div class="col-3 q-pa-md col-md-3 col-lg-2 col-sm-4 col-xs-6"
          :key="soc" v-for="soc in social"
        >
          <q-card  class="my-card">
            <q-img :src="soc.img" height="30vh">
              <div class="absolute-bottom">
                <div class="text-h6">{{ soc.name }}</div>
              </div>
            </q-img>

            <q-card-actions>
              <q-btn type="a" :href='soc.link' target="_blank" flat><q-icon class="q-ma-xs" name="visibility"/>View</q-btn>
              <q-btn flat><q-icon class="q-ma-xs" name="person_add_alt_1"/>Follow</q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'mes réseaux ,',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
      social: [
        {
          name: 'Twitter',
          link: 'https://twitter.com/',
          img: 'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/738px-Twitter_Bird.svg.png'
        },
        {
          name: 'Facebuk',
          link: 'https://mastodon.social/about',
          img: 'https://pngimg.com/uploads/telegram/telegram_PNG19.png'
        },
        {
          name: 'Mastodon',
          link: 'https://mastodon.social/about',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Mastodon_Logotype_%28Simple%29.svg/953px-Mastodon_Logotype_%28Simple%29.svg.png'
        },
        {
          name: 'Framasphere',
          link: 'https://framasphere.org/',
          img: 'https://framalibre.org/sites/default/files/leslogos/logoframasphere.png'
        }
      ]
    }
  }
}
</script>
