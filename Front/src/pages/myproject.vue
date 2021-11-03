<template>
<div>
 <titreprojet />
 <headerprojet />
 <btnlink />
 <mesProjets />
 <headerprojet2 />
 <btnlink />
 <projet2 />
</div>
</template>
<script>
import titreprojet from '../components/mesProjet/titreprojet'
import headerprojet from '../components/mesProjet/headerprojet'
import mesProjets from '../components/mesProjet/mesProjets'
import btnlink from '../components/mesProjet/btnlink'
import projet2 from '../components/mesProjet/projets2'
import headerprojet2 from '../components/mesProjet/headerprojet2'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    titreprojet, headerprojet, mesProjets, btnlink, projet2, headerprojet2
  }
}
</script>
