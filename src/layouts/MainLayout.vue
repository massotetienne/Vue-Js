<template>
  <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2 rounded-borders">
    <q-header elevated class="row no-wrap shadow-1 bg-black">

      <q-toolbar class="col-6">
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>Squallou</q-toolbar-title>
      </q-toolbar>

      <q-toolbar class="col-6 bg-primary text-white">
        <q-space />
        <q-btn flat round dense @click="prev" icon="skip_previous" />
        <q-btn stretch flat :label="current.title"/>
        <q-btn flat round dense v-if="!isPlaying" @click="play" icon="play_circle_filled" class="q-mr-sm" />
        <q-btn flat round dense v-else @click="pause" icon="pause_circle_filled" />
        <q-btn flat round dense @click="next" icon="skip_next" />
        <q-btn-dropdown stretch flat>
          <q-list>
            <q-item-label header>Playlist</q-item-label>
            <q-item v-for="song in songs" :key="song.src"
              clickable v-close-popup tabindex="0" @click="play(song)" class=""
            >
              <q-item-section avatar>
                <q-avatar icon="library_music" color="primary" text-color="lime" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ song.title }}</q-item-label>
                <q-item-label caption>{{ song.artist }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="200"
      :breakpoint="500"
      bordered
      content-class="bg-grey-4"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item clickable v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section>Acceuil</q-item-section>
          </q-item>
          <q-separator></q-separator>

          <q-item clickable v-ripple to="/about">
            <q-item-section avatar>
              <q-icon name="person_pin" />
            </q-item-section>

            <q-item-section>présentation,</q-item-section>
          </q-item>
          <q-separator></q-separator>

          <q-item clickable v-ripple to="/contact">
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section>me contacter,</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/social">
            <q-item-section avatar>
              <q-icon name="person_add" />
            </q-item-section>

            <q-item-section>réseaux,</q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple to="/skill">
            <q-item-section avatar>
              <q-icon name="engineering" />
            </q-item-section>

            <q-item-section>Compétences,</q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple to="/project">
            <q-item-section avatar>
              <q-icon name="extension" />
            </q-item-section>

            <q-item-section>Projets,</q-item-section>
          </q-item>
          <q-separator />

          <q-item clickable v-ripple to="/news">
            <q-item-section avatar>
              <q-icon name="fact_check" />
            </q-item-section>

            <q-item-section>news.</q-item-section>
          </q-item>
          <q-separator />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-page>
        <router-view/>
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      miniState: true,
      current: {},
      index: 0,
      isPlaying: false,
      songs: [
        {
          title: 'Shankara',
          artist: 'Panda Dub',
          src: require('../assets/panda-dub-shankara.mp3')
        },
        {
          title: 'Politic man',
          artist: 'Soom T',
          src: require('../assets/soom-t-politic-man.mp3')
        },
        {
          title: 'Moonlight',
          artist: 'XXXTentacion',
          src: require('../assets/xxxtentacion-moonlight.mp3')
        },
        {
          title: 'Lost memory',
          artist: 'Boris Brejcha',
          src: require('../assets/boris-brejcha-lost-memory.mp3')
        },
        {
          title: 'Walk',
          artist: 'Pantera',
          src: require('../assets/pantera-walk.mp3')
        },
        {
          title: 'Le bonheur',
          artist: "L'entourloop ft PandaDub",
          src: require('../assets/lentourloop-ft-panda-dub-le-bonheur.mp3')
        }
      ],
      player: new Audio()
    }
  },
  methods: {
    play (song) {
      if (typeof song.src !== 'undefined') {
        this.current = song
        this.player.src = this.current.src
      }
      this.player.play()
      this.player.addEventListener('ended', function () {
        this.index++
        if (this.index > this.songs.length - 1) this.index = 0
        this.current = this.songs[this.index]
        this.play(this.current)
      }.bind(this))
      this.isPlaying = true
    },
    pause () {
      this.player.pause()
      this.isPlaying = false
    },
    prev () {
      this.index--
      if (this.index < 0) this.index = this.songs.length - 1
      this.current = this.songs[this.index]
      this.play(this.current)
    },
    next () {
      this.index++
      if (this.index > this.songs.length - 1) this.index = 0
      this.current = this.songs[this.index]
      this.play(this.current)
    }
  },
  created () {
    this.current = this.songs[this.index]
    this.player.src = this.current.src
  }
}
</script>
