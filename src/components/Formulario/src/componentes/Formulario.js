export default {
  name: "Formulario",
  components: {},
  props: [],
  data() {
    return {
      formData: this.getInicialData(),
      formState: {},
      nombreLengthMin: 3,
      nombreLengthMax: 10,
      edadMin: 18,
      edadMax: 120,
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
        password: "",
      };
    },

    enviar() {
      //... -> SPREAD Operator
      console.log({ ...this.formData });

      this.formData = this.getInicialData();
      this.formState._reset();
    },
  },
};
