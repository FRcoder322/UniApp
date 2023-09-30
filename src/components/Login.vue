<script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      loginWithGoogle() {
        alert('Google login clicked!');
      }
    }
  };
  </script>
<template>

<v-sheet
    class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
    elevation="6"
    height="250"
    rounded
    max-width="600"
    width="35%"

  >
    <div>
      <h2 class="text-h4 font-weight-black text-orange">Congratulations!</h2>

      <div class="text-h5 font-weight-medium mb-2">
        You are officially a part of the Institute of Innovation University!
      </div>

      <p class="text-body-2 mb-4">
        Please head over to your inbox/spam or others folder to find our verificaiton email.
      </p>
    </div>
  </v-sheet>
    <div id="Login">
      <v-container>
        <v-container>
          <v-layout row>

            <v-card class="mx-auto" width="500">

              <v-container>
                <v-text-field
                  v-model="email"
                  color="teal"
                  label="Email"
                  variant="underlined"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  color="teal"
                  label="Password"
                  placeholder="Enter your password"
                  variant="underlined"
                  type="password"
                ></v-text-field>
              </v-container>

              <v-btn color="teal" :style="{ width: '600px' }">Login</v-btn>

              <v-divider></v-divider>

              <v-card-actions>
                <v-text class="forgot-password">Forgot password?</v-text>

                <v-spacer></v-spacer>
              </v-card-actions>

              <v-btn @click="loginWithGoogle" color="grey" :style="{ width: '600px' }" dark>
                <v-icon left>mdi-google</v-icon>
                Login with Google
              </v-btn>
            </v-card>
          </v-layout>
        </v-container>
      </v-container>
    </div>
  </template>
