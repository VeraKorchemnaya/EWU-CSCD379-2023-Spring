<!-- <template>
  <v-card flat class="mx-auto" style="width: 500px">
    <v-card-title class="text-center text-h4 font-weight-bold">Wordle Mind Bender</v-card-title>
    <v-card-text class="mt-2">
      <v-row v-for="word in game.guesses" :key="word.text" class="mx-auto">
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
</script> -->

<template>
  <h1>Wordle Mind Bender</h1>

  <GameBoard :game="game" @letterClick="addChar" />

  <KeyBoard @letterClick="addChar" :guessedLetters="game.guessedLetters" />

  <v-btn @click="checkGuess" @keyup.enter="checkGuess"> Check </v-btn>

  <h2>{{ guess }}</h2>
  <h3>{{ game.secretWord }}</h3>

  <AvailableWords></AvailableWords>
</template>

<script setup lang="ts">
import { WordleGame } from '@/scripts/wordleGame'
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import GameBoard from '../components/GameBoard.vue'
import KeyBoard from '../components/KeyBoard.vue'
import type { Letter } from '@/scripts/letter'
import AvailableWords from '../components/AvailableWords.vue'

const guess = ref('')
const game = reactive(new WordleGame())
console.log(game.secretWord)

onMounted(() => {
  window.addEventListener('keyup', keyPress)
})
onUnmounted(() => {
  window.removeEventListener('keyup', keyPress)
})

function checkGuess() {
  game.submitGuess()
  guess.value = ''
}

function addChar(letter: Letter) {
  game.guess.push(letter.char)
  guess.value += letter.char
}

function keyPress(event: KeyboardEvent) {
  console.log(event.key)
  if (event.key === 'Enter') {
    checkGuess()
  } else if (event.key === 'Backspace') {
    guess.value = guess.value.slice(0, -1)
    game.guess.pop()
    console.log('Back')
  } else if (event.key.length === 1 && event.key !== ' ') {
    guess.value += event.key.toLowerCase()
    game.guess.push(event.key.toLowerCase())
  }
}
</script>
