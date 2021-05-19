<template>
  <section class="src-componentes-http mt-3">
    <div class="container-fluid">
      <h2>Http requests</h2>
      <hr />
      <div class="container-fluid">
        <div class="row">
          <div class="col-3">
            <button class="btn btn-primary" @click="getUsersCb()">
              Pedir XMLHttpRequest
            </button>
          </div>
          <div class="col-3">
            <button class="btn btn-warning" @click="getUsersFetch()">
              Pedir Fetch
            </button>
          </div>
          <div class="col-3">
            <button class="btn btn-success" @click="getUsersAxios()">
              Pedir Axios
            </button>
          </div>
          <div class="col-3">
            <button class="btn btn-danger" @click="borrar()">Borrar</button>
          </div>
        </div>
      </div>

      <div v-if="users.length" class="table-container mt-3">
        <div class="table-responsive">
          <table class="table table-striped table-bordered mt-3">
            <!-- encabezado de la tabla -->
            <thead>
              <tr>
                <th v-for="(col, index) in getCols" :key="index">{{ col }}</th>
              </tr>
            </thead>

            <!-- filas con los datos -->
            <tbody>
              <tr v-for="(user, index) in users" :key="index">
                <td v-for="(col, index) in getCols" :key="index">
                  {{ user[col] }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-if="users.length" class="alert alert-primary mt-3">
        Se encontraron {{ users.length }} usuarios.
      </div>
      <div v-else class="alert alert-secondary mt-3">
        No se encontraron usuarios
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-http',
    props: [],
    mounted () {

    },
    data () {
      return {
        url : 'https://60a5969fc0c1fd00175f40c0.mockapi.io/api/users',
        users : []
      }
    },
    methods: {
      /* ---- AJAX: XMLHttpRequest ---- */
      getUsersCb() {
        // creo la instancia de comunicación asincrónica AJAX
        let xhr = new XMLHttpRequest
        //configuro dicha instancia
        xhr.open('get',this.url)
        //registro del evento de fin de la comunicación
        xhr.addEventListener('load', () => {
          //La comunicación finalizó ok
          if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log('XMLHttpRequest', respuesta)
            this.users = respuesta
          }
          else {
            console.error(`Error en GET -> status: ${xhr.status}`)
          }
        })
        //registro del evento de error de comunicación
        xhr.addEventListener('error', e => {
          console.error('Error XMLHttpRequest ->',e)
        })
        //Petición del recurso
        xhr.send()
      },

      /* ---- AJAX: FETCH ---- */
      getUsersFetch() {
        fetch(this.url)
        .then(datos => datos.json())
        .then(respuesta => {
          console.log('FETCH',respuesta)
          this.users = respuesta
        })
        .catch(error => console.error(error))
      },

      /* ---- AJAX: AXIOS ---- */
      getUsersAxios() {
        this.axios(this.url)
        .then( respuesta => {
          console.log('AXIOS',respuesta.data)
          this.users = respuesta.data
        })
        .catch(error => console.log(error))
      },
      borrar() {
        this.users = []
      }

    },
    computed: {
      getCols() {
        return Object.keys(this.users[0])
      }
    }
}


</script>

<style scoped lang="css">
.table-container {
  height: 500px;
  overflow: scroll;
}
.row button {
  width: 100%;
}
</style>
