export default {
  name: "Formulario",
  components: {},
  props: [],
  data() {
    return {
      formData: this.getInicialData(),
      formState: {},
      nombreLengthMin: 5,
      nombreLengthMax: 15,
      edadMin: 18,
      edadMax: 120,
      users: [],
    };
  },
  computed: {},
  mounted() {},
  methods: {
    getInicialData() {
      return {
        nombre: "",
        apellido: "",
        edad: "",
        email: "",
      };
    },

    enviar() {
      this.users = [...this.users, this.formData];

      this.formData = this.getInicialData();
      this.formState._reset();
    },
  },
};
