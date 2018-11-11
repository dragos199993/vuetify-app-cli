<template>
    <div class="navigation-container">
    <v-navigation-drawer v-model="drawer" clipped fixed app dark>
        <v-toolbar flat class="transparent">
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                    <img src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                    <v-list-tile-title>John Leider</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-toolbar>
        <v-list dense>
            <v-divider></v-divider>
            <v-list-tile class="mt-2" :to="{path: '/'}">
                <v-list-tile-action> <v-icon>home</v-icon> </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile class="mb-2" :to="{path: '/about'}">
                <v-list-tile-action> <v-icon>settings</v-icon> </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Settings</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            
            <v-list-tile class="mt-2" @click="logout">
                <v-list-tile-action> <v-icon>exit_to_app</v-icon> </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Log out</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            
            <v-list-tile class="mt-2" :to="{path: '/about'}">
                <v-list-tile-action> <v-icon>settings</v-icon> </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Login</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile :to="{path: '/about'}">
                <v-list-tile-action> <v-icon>settings</v-icon> </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Register</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
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
export default {
  data: () => ({
    drawer: null
  }),
  computed: {
    appName() {
      return this.$store.state.appName;
    },
    appDescription() {
      return this.$store.state.appDescription;
    }
  },
  methods: {
    logout() {
      console.log("log out");
    }
  }
};
</script>
