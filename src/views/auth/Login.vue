<template>
  <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Log in</v-toolbar-title>
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
                    type="email"></v-text-field>
                  <v-text-field 
                    v-validate="'required|min:4'"
                    prepend-icon="lock" 
                    :error-messages="errors.collect('password')"
                    data-vv-name="password"
                    name="password" 
                    label="Password" 
                    v-model="password"
                    type="password"></v-text-field>
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
export default {
  data: () => ({
    email: '',
    password: ''
  }),
  components: {}
};
</script>
