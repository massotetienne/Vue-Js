<template>
  <div class="text-white text-center tw">
  <div class="row">
    <div class="col-1">
    </div>
    <div class="col-10 bg-purple-8 border tw  q-ma-xl">
    <h2 class="text-h3 myfont">Mes compétences</h2>
     </div>
    <div class="col-1">
    </div>
    </div>
    <div class="row">
     <div class="col-2"></div>
      <div class="col-8 bg-purple-9 border q-ma-lg q-pa-lg">
       <p class="font25 q-pa-lg">
        Ci dessous les <span class="text-cyan">languages</span>  et <span class="text-cyan">technologie</span>  que je connais et leurs niveau de compétences </p>
      </div>
      <div class="col-2"></div>
    </div>
      <div class='row q-pa-lg' >
        <div class="col-2 q-pa-md col-md-2 col-xs-6" :key="n" v-for="n in skill">
          <q-card class="my-card text-white text-center bg-purple-10">
            <q-circular-progress
              show-value
              font-size="10px"
              class="q-ma-md bg-transparent"
              :value="n.value"
              size="100px"
              :thickness="0.25"
              color="purple-8"
              track-color="grey-3"
            >
              <q-avatar size="60px">
                <img :src="n.img">
              </q-avatar>
            </q-circular-progress>
            <q-card-actions class="justify-center">
              <q-btn flat class="">{{n.name}}</q-btn>
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
      // value: 50,
      skill: [
        {
          name: 'html',
          value: 85,
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png'
        },
        {
          name: 'css',
          value: 85,
          img: 'https://www.softfluent.fr/wp-content/uploads/2019/10/css-3.png'
        },
        {
          name: 'js',
          value: 70,
          img: 'http://www.demonixis.net/wp-content/uploads/2014/03/javascript_logo.png'
        },
        {
          name: 'Linux',
          value: 50,
          img: 'http://globbsecurity.fr/wp-content/uploads/2020/08/Linux.jpg'
        },
        {
          name: 'MongoDB',
          value: 70,
          img: 'https://practicalprogramming.fr/wp-content/uploads/2020/05/mongodb-1-270x270.jpg'
        },
        {
          name: 'NGINX',
          value: 45,
          img: 'https://www.nginx.com/wp-content/uploads/2020/05/NGINX-Plus-product-icon-RGB.svg'
        },
        {
          name: 'SASS',
          value: 60,
          img: 'http://jeandocquier.com/wp-content/uploads/2020/03/sass.png'
        },
        {
          name: 'Flex',
          value: 70,
          img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--7vRln5eS--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/ljr291umxaap6m1wxak7.jpg'
        },
        {
          name: 'Grid',
          value: 60,
          img: 'https://www.balbooa.com/images/blog/gridbox/coming-soon/intro.png'
        },
        {
          name: 'NodeJS',
          value: 65,
          img: 'https://www.technsmile.com/wp-content/uploads/2018/11/nodejs-300.png'
        },
        {
          name: 'VueJS',
          value: 50,
          img: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg'
        },
        {
          name: 'Bootstrap',
          value: 85,
          img: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg'
        }
      ]
    }
  }
}
</script>
