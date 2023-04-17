<template>
  <v-row>
    <v-col>
      <v-card flat class="mx-auto" style="width: 500px">
        <v-card-title class="text-center text-h4 font-weight-bold">Wordle Mind Bender</v-card-title>
        <v-card-text>
          <v-row v-for="word in game.guesses" :key="word.text">
            <v-col v-for="letter in word.letters" :key="letter.char">
              <v-btn class="ps-0 pe-0" :color="letter.color" flat>
                {{ letter.char }}
              </v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                variant="solo"
                v-model="guess"
                placeholder="Guess"
                maxlength="5"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn variant="tonal" @click="checkGuess">Check</v-btn>
          <v-btn disabled>Secret: {{ game.secretWord }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { WordleGame } from '@/scripts/wordleGame'
import { ref, reactive } from 'vue'

const guess = ref('')
const game = reactive(new WordleGame())
console.log(game.secretWord)

function checkGuess() {
  game.submitGuess(guess.value)
}
</script>
