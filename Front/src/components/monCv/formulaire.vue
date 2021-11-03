<template>
<div>
  <div class="row">
  <div class="col-1"></div>
   <div class="col-10 q-pa-md bg-purple-8" style="margin-bottom:20px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
       class="bg-white"
        filled
        type="text"
        v-model="message.name"
        label="Votre Nom"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'veuillez renseigner votre adress nom']"
      />

      <q-input
       class="bg-white"
        filled
        type="email"
        v-model="message.email"
        label="Email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'veuillez renseigner votre adress mail']"
      />
      <div class="row">
        <div class="col-6" style="margin-right:10px">
          <q-input
        class="bg-white"
        filled
        v-model="message.sujet"
        type="text"
        label="Sujet"
        lazy-rules
      />
        </div>
        <div class="col-5">
           <q-input
        class="bg-white"
        filled
        v-model="message.tel"
        type="number"
        label="Téléphone"
        lazy-rules
      />
        </div>
      </div>
       <div class="q-pa-md q-gutter-sm">
       <q-editor v-model="message.text" min-height="12rem" />
      </div>

      <q-toggle v-model="accept" label="I accept the license and terms" />
      <div>
        <q-btn @click="onSubmit" label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
   </div>
  <div class="col-1"></div>
  </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      message: { name: '', email: '', sujet: '' },
      accept: false
    }
  },

  methods: {
    onSubmit (e) {
      e.preventDefault()

      console.log(this.message)
      this.createMessage(this.message)
    },
    ...mapActions('message', ['createMessage'])
  },

  onReset () {
    this.name = null
    this.age = null
    this.accept = false
  }
}
</script>
