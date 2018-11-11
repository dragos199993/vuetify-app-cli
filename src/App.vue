<template>
  <v-app dark>
    <Loading />
    <Navigation />
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
    <v-footer app fixed> <span>&copy; 2017</span> </v-footer>
  </v-app>
</template>

<script>
import Loading from "./components/shared/Loading";
import Navigation from "./components/shared/Navigation";
export default {
  name: "App",
  components: {
    Navigation,
    Loading
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="scss">
@import './style/main.scss';

</style>
