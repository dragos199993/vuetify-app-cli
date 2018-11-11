<template>
    <v-snackbar
      v-model="snackbar"
      :multi-line="mode == 'multi-line'"
      :timeout="timeout"
      :top="y === 'top'"
    >
      {{ globalMessage }}
      <v-btn
        color="pink"
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
    ...mapGetters("helpers", {
      globalMessage: "globalMessage",
      snackbarVisible: "snackbarVisible"
    }),
    snackbar: {
      get() {
        return this.snackbarVisible;
      },
      set() {
        this.setSnackbarVisibility(false);
      }
    }
  },
  methods: {
    ...mapMutations("helpers", {
      setSnackbarVisibility: "SET_SNACKBAR_VISIBILITY"
    }),
    closeSnackbar(){
      this.setSnackbarVisibility(false)
    }
  }
};
</script>

