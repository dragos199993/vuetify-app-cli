<template>
  <div class="navigation-container">
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <template v-if="authInfo">
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="https://randomuser.me/api/portraits/men/31.jpg" />
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ authInfo.email }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-divider></v-divider>
      </template>
      <v-list dense>
        <v-subheader>Sections</v-subheader>
        <v-list-tile :to="{ path: '/' }">
          <v-list-tile-action> <v-icon>home</v-icon> </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <template v-if="authInfo">
          <v-list-tile :to="{ path: '/items' }">
            <v-list-tile-action> <v-icon>settings</v-icon> </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Items</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
        <v-divider></v-divider>
        <v-subheader>Account</v-subheader>

        <template v-if="authInfo">
          <v-list-tile   @click.stop.prevent="logout">
            <v-list-tile-action >
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Log out</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
        <template v-else>
          <v-list-tile class="mt-2" :to="{ path: '/login' }">
            <v-list-tile-action> <v-icon>person</v-icon> </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Login</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile :to="{ path: '/register' }">
            <v-list-tile-action> <v-icon>person_add</v-icon> </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Register</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon
        @click.stop="drawer = !drawer;"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <span class="text-uppercase">{{ appName }}</span>
        <span class="font-weight-light subheading"> {{ appDescription }} </span>
      </v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    drawer: null
  }),
  computed: {
    ...mapGetters('authentication', ['authInfo']),
    appName() {
      return this.$store.state.appName;
    },
    appDescription() {
      return this.$store.state.appDescription;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('authentication/logOut');
    }
  }
};
</script>
