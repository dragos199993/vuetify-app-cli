<template>
    <v-snackbar
      v-model="snackbarVisible"
      :multi-line="mode == 'multi-line'"
      :timeout="timeout"
      :top="y === 'top'"
      :color= "snackbar.color"
    >
      {{ snackbar.message }}
      <v-btn
        color="light"
        flat
        @click="closeSnackbar"
      >
        Close
      </v-btn>
    </v-snackbar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data: () => ({
    y: "top",
    x: null,
    mode: "multi-line",
    timeout: 5000
  }),
  computed: {
    ...mapGetters("helpers", ['snackbar'] ),
    snackbarVisible: {
      get() {
        return this.snackbar.visible;
      },
      set() {
        this.setSnackbarVisibility(false);
      }
    }
  },
  methods: {
    ...mapMutations("helpers", {
      setSnackbarVisibility: "SET_SNACKBAR"
    }),
    closeSnackbar(){
      this.setSnackbarVisibility({
        visible: false,
        message: '',
        color: ''
      })
    }
  }
};
</script>

