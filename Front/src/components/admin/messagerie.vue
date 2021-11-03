
<template>
  <div class="q-pa-md bg-cyan" style="max-width: 100%">
    <q-toggle v-model="expanded" label="Expanded" class="q-mb-md" />

    <q-expansion-item
      v-model="expanded"
      icon="perm_identity"
      label="Messagerie"
      caption="Etienne Massot"
    >
      <q-card>
        <q-card-section>
          <q-list>
            <div v-for="message in message" :key="message">
              <q-table
                title= "Messages"
                :data="data"
                :row="row"
                row-key="name"
              >
      <template v-slot:body="data">
        <q-tr :data="data">
          <q-td key="name" :data="data">{{ message.name }}</q-td>
          <q-td key="Mail" :data="data">{{ message.sujet }}</q-td>
          <q-td key="Sujet" :data="data">{{ message.email }}</q-td>
          <q-td key="tel" :data="data">{{ message.tel }}</q-td>
        </q-tr>
             <div class="row"  key="text" :data="data">
                 {{ message.text }}
             </div>
      </template>
          </q-table>
            </div>
          </q-list>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>
<script>
import axios from 'axios'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'message',
  data () {
    return {
      message: [],
      row: [
        {
          name: 'name',
          required: true,
          align: 'left',
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true
        },
        {
          sujet: 'sujet',
          required: true,
          align: 'center',
          field: (row) => row.sujet,
          format: (val) => `${val}`,
          sortable: true
        },
        {
          mail: 'mail',
          required: true,
          align: 'right',
          field: (row) => row.mail,
          format: (val) => `${val}`,
          sortable: true
        }
      ],
      data: [
        {
          name: '',
          sujet: '',
          mail: '',
          téléphone: ''
        }
      ]
    }
  },
  methods: {
    getData () {
      this.ListMessage()
    },
    ...mapState('message', ['ListMessage'])
  },
  mounted () {
    axios
      .get('http://localhost:3000/api/message/get')
      .then((response) => {
        console.log(response.data)
        this.message = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    console.log('components get state list message')
    console.log(this.ListMessage)
    this.getData()
  },
  ...mapActions('message', ['ListMessage'])
}
</script>
