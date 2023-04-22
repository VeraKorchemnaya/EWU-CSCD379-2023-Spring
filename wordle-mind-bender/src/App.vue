<script setup lang="ts">
import { RouterView } from 'vue-router'
import ThemeSelector from './components/ThemeSelector.vue'
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card flat>
          <v-toolbar density="compact">
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

            <ThemeSelector/>
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
