<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-purple-8 text-white" height-hint="98">
      <q-toolbar>
         <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title class="myfont">
          <q-avatar>
            <img src="../../public/icons/62372_1422735690618_3764301_n.jpg">
          </q-avatar>
          Dev-Squallou
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs class="myfont" align="center">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/monCv" label="Mon CV" />
        <q-route-tab to="/myskill" label="Mes compétences" />
        <q-route-tab to="/myproject" label="Mes Projet" />
      </q-tabs>
    </q-header>

     <q-drawer
        v-model="left"
        show-if-above
        :width="200"
        :breakpoint="500"
      >
        <q-scroll-area class="fit bg-purple-9 text-white myfont">
          <q-list padding class="menu-list">
            <q-item clickable v-ripple to="/moncv">
              <q-item-section class="font25 text-white" avatar>
              <i class="fas fa-id-card"></i>
              </q-item-section>

              <q-item-section>
                Contact
              </q-item-section>
            </q-item>

            <a href="https://github.com/massotetienne" target="_blank" rel="noopener noreferrer">
            <q-item clickable v-ripple>
              <q-item-section class="font25 text-white" avatar>
                <i class="fab fa-github-square"></i>
              </q-item-section>
              <q-item-section>
                Github
              </q-item-section>
            </q-item>
            </a>
            <a href=" https://www.linkedin.com/in/etienne-massot-8398b31b8" target="_blank" rel="noopener noreferrer">
            <q-item clickable v-ripple>
              <q-item-section class="font25 text-white" avatar>
               <i class="fab fa-linkedin"></i>
              </q-item-section>

              <q-item-section>
                Linkedin
              </q-item-section>
            </q-item>
            </a>
          </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-purple-10 text-white text-center myfont2">
      <q-toolbar>
        <q-toolbar-title>
          Copyright 2020 https://dev-squallou.fr
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
// import { mdiLinkedin } from '@mdi/js'
export default {
  data () {
    return {
      left: false,
      right: false
    }
  }
  // created () {
  //   this.mdiLinkedin = mdiLinkedin
  // }
}
</script>
