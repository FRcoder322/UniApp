<template>
  <v-footer app fixed>
    <v-sheet color="teal" dark>
      <v-container>
        <v-row align="center">
          <v-col>
      <strong>Get connected with us on social networks!</strong>
          </v-col>

      <v-col class="text-right">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
      ></v-btn>
      </v-col>
      </v-row>
      </v-container>
    </v-sheet>


    <v-sheet color="black" dark>
      <v-container>
        <v-row>
          <v-col>
            <div class="text-center">
              {{ new Date().getFullYear() }} — <strong>Institute of Innovation University</strong>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>
