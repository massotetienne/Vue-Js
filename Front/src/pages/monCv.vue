<template>
<div>
    <myCv />
    <formulaire />
</div>
</template>

<script>
import myCv from '../components/monCv/myCv'
import formulaire from '../components/monCv/formulaire'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    myCv, formulaire
  }
}
</script>
