<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-cyan-8 text-purple myfont" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="../../public/icons/62372_1422735690618_3764301_n.jpg">
          </q-avatar>
          Admin
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center" class="myfont">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/monCv" label="Mon CV" />
        <q-route-tab to="/myskill" label="Mes compétences" />
        <q-route-tab to="/myproject" label="Mes Projet" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <q-scroll-area class="fit bg-cyan-9 myfont">
          <q-list padding class="menu-list text-white">
            <q-item class="text-white" clickable v-ripple to="/messagerie">
              <q-item-section class="font25 text-white" avatar>
              <i class="fas fa-mail-bulk text-purple"></i>
              </q-item-section>

              <q-item-section>
                Messages
              </q-item-section>
            </q-item>

            <q-item class="text-white" clickable v-ripple to="/editProjet">
              <q-item-section class="font25 text-white" avatar>
               <i class="fas fa-project-diagram text-purple"></i>
              </q-item-section>
              <q-item-section>
                Mes Projet
              </q-item-section>

            </q-item>
            <q-item class="text-white" clickable v-ripple to="/editSkill">
              <q-item-section class="font25 text-white" avatar>
               <i class="fas fa-user-cog text-purple"></i>
              </q-item-section>

              <q-item-section>
                Mes compétences
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-cyan-10 text-white myfont2 text-center">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
          </q-avatar>
          Copyright 2020 https://dev-squallou.fr
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false
    }
  }
}
</script>
