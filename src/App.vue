<template>
  <v-app>
    <Navigation />
    <router-view/>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from "./components/shared/Navigation";

export default {
  name: "App",
  components: {
    Navigation
  },
  data() {
    return {
      //
    };
  }
};
</script>
