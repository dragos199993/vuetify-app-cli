<template>
  <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Register an account</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="submitSignup">
                  <v-text-field       
                    v-validate="'required|email'"
                    prepend-icon="person" 
                    name="email" 
                    label="Email" 
                    :error-messages="errors.collect('email')"
                    data-vv-name="email"
                    v-model="email"
                    type="email">
                  </v-text-field>
                  <v-text-field 
                    v-validate="'required|min:4'"
                    prepend-icon="lock" 
                    :error-messages="errors.collect('password')"
                    data-vv-name="password"
                    name="password" 
                    label="Password"
                    ref="password"
                    v-model="password"
                    type="password">
                  </v-text-field>                  
                  <v-text-field 
                    v-validate="'required|min:4|confirmed:password'"
                    prepend-icon="lock" 
                    :error-messages="errors.collect('repeat')"
                    data-vv-name="repeat"
                    name="repeat"  
                    label="Repeat Password" 
                    v-model="repeat"
                    type="password">
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="submitSignup" color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  data: () => ({
    email: '',
    password: '',
    repeat: ''
  }),

  methods: {
    ...mapMutations('helpers', {
      loading: 'SET_LOADING',
    }),

    submitSignup() {
        this.$store.dispatch('authentication/signUp', {
          email: this.email,
          password: this.password,
        });
    },
  }
};
</script>
