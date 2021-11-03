<template>
  <div id="q-app" class="background">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
.background {
  background: url('../public/images/photo-1511447333015-45b65e60f6d5.jpeg');
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  overflow: hidden;
}
@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
p,h3,h4,.myfont{
  font-family: 'Pacifico', cursive;
}
.myfont2{
  font-family: 'Caveat', cursive;
}
</style>
