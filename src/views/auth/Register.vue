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
                <v-form>
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
                    v-model="password"
                    type="password">
                  </v-text-field>                  
                  <v-text-field 
                    v-validate="'required|min:4'"
                    prepend-icon="lock" 
                    :error-messages="errors.collect('repeatPassword')"
                    data-vv-name="repeatPassword"
                    name="repeatPassword" 
                    label="Repeat Password" 
                    v-model="repeatPassword"
                    type="password">
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Login</v-btn>
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
    repeatPassword: ''
  }),

  methods: {
    ...mapMutations('alerts', {
      error: 'ERROR',
    }),
    ...mapMutations('helpers', {
      loading: 'SET_LOADING',
    }),

    submitSignup() {
      this.loading(true);
      if (this.email === '' || this.password === '' || this.passwordConfirm === '') {
        this.error('Fields cannot be empty');
        this.loading(false);
        return;
      }
      if (this.passwordConfirm === this.password) {
        this.$store.dispatch('authentication/signUp', {
          email: this.email,
          password: this.password,
        });
        this.error('');
      } else {
        this.error('Password must be the same');
        this.loading(false);
      }
    },
  }
};
</script>
