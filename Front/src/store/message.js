import axios from 'axios'

//  Vuex utilise un arbre d'état unique, c'est-à-dire que cet unique objet contient
// tout l'état au niveau applicatif et sert de « source de vérité unique »
const state = {
  message: []
}
// La seule façon de vraiment modifier l'état dans un store Vuex est d'acter une mutation//
const mutations = {
  setListMessage (state, value) {
    state.message = value
  }
}

// Les actions sont similaires aux mutations, à la différence que :
// Au lieu de modifier l'état, les actions actent des mutations.
// Les actions peuvent contenir des opérations asynchrones.//

const actions = {
  getMessage ({ // Donne moi la liste des produits
    commit
  }) {
    axios
      .get('/message/get') // Obtenir la page produit avec la liste
      .then((res) => { // si cela est fait, envoyer la liste des produits avec les datas
        console.log('store liste des message')
        console.log(res)
        commit('ListMessage', res.data)
      })
      .catch(err => console.log(err)) // sinon log moi une erreur
  },
  createMessage ({ // Créer/Ajouter un produit
    commit
  }, payload) {
    console.log('store')
    console.log(payload)
    axios
      .post('http://localhost:3000/api/message', { // Avec éléments de la collection "products" de la base de données
        name: payload.name,
        email: payload.email,
        sujet: payload.sujet,
        text: payload.text,
        tel: payload.tel
      })
      .then((res) => { // Si cela est fait, afficher la liste des produits
        commit('setListMessage', res.data)
      }) // si il y a une erreur l'afficher
      .catch(err => console.log(err))
  }
}
const getters = {}
export default { // Exporter les modules
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
