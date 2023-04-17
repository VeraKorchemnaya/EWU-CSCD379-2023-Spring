<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from "vue"
import { useTheme } from "vuetify"

const theme = useTheme()
const myThemes = ["light", "dark", "dark_2", "zesty_citrus"]
const selectedTheme = ref(myThemes[0])

const setTheme = () => {
  theme.global.name.value = selectedTheme.value
  console.log(selectedTheme.value)
}
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card flat>
          <v-toolbar density="compact" color="primary">
            <v-toolbar-title style="cursor: pointer" @click="$router.push('/')">
              Wordle Mind Bender <v-icon icon="mdi-head-heart"></v-icon>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn k v-bind="props"> <v-icon icon="mdi-menu" size="x-large"></v-icon> </v-btn>
              </template>

              <v-list flat>
                <v-list-item>
                  <v-btn variant="plain" to="/"> Home </v-btn>
                </v-list-item>
                <v-list-item>
                  <v-btn variant="plain" to="/about"> About </v-btn>
                </v-list-item>
                <v-list-item>
                  <v-btn variant="plain" to="/game"> Game </v-btn>
                </v-list-item>
              </v-list>
            </v-menu>
              
            <v-dialog
              transition="dialog-bottom-transition"
              width="30rem"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                ><v-icon icon="mdi-cog" size="x-large"></v-icon></v-btn>
              </template>
              <template v-slot:default="{ isActive }">
                <v-card>
                  <v-toolbar
                    title="Settings"
                  ></v-toolbar>
                  <v-card-text>
                    <v-select
                    label="Select Theme"
                    v-model="selectedTheme"
                    :items="myThemes"
                    @update:modelValue="setTheme()"
                  ></v-select>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn
                      variant="text"
                      @click="isActive.value = false"
                    >Close</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-toolbar>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <RouterView />
      </v-col>
    </v-row>
  </v-container>
</template>