<template>
  <!-- <div>{{ count }}</div> -->
  <h1>Wordle Mind Bender</h1>
  <v-text-field v-model="guess" label="Guess" variant="solo"></v-text-field>

  <v-btn variant="tonal" @click="checkGuess">Check</v-btn>
  <div>
    <v-row v-for="word in guesses">
      <v-col v-for="letter in word" :key="letter.letter">
        <v-card :color="letter.status === LetterStatus.Correct ? 'green' : 'red'">
          <v-card-text>{{ letter.letter }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>

  <h2>{{ guess }}</h2>
  <h3>{{ secretWord }}</h3>
</template>

<script setup lang="ts">
import { Letter, LetterStatus } from '@/scripts/letter'
import { ref, reactive } from 'vue'

const guess = ref('') // guess is an observable
// wordlist words have to be 5 letters
//
const wordList = ['apple', 'peach', 'crypt', 'bitter', 'jelly']

const secretWord = wordList[Math.floor(Math.random() * wordList.length)]
const guesses = reactive(new Array<Array<Letter>>()) // change contents and not the array itself
// change attributes of the array elements

function checkGuess() {
  // check length of the word
  if (guess.value.length !== secretWord.length) {
    console.log('Word length is incorrect')
    guess.value = ''
    return
  }

  const results = new Array<Letter>()
  let isCorrect = true

  const guessChars = guess.value.split('') // we modify inside guessChars
  const secretChars = secretWord.split('')

  // check if the letters are valid
  for (let i = 0; i < guess.value.length; i++) {
    results.push(new Letter(guess.value[i]))
    if (secretWord[i] === guess.value[i]) {
      console.log(`Letter ${i} is correct`)
      results[i].status = LetterStatus.Correct
      guessChars[i] = '_'
      secretChars[i] = '_'
    } else {
      isCorrect = false
      results[i].status = LetterStatus.Wrong
      console.log(`Letter ${i} is incorrect`)
    }
  }

  for (let i = 0; i < 5; i++) {
    if (guessChars[i] !== '_') {
      for (let j = 0; j < 5; j++) {
        if (secretChars[j] === guessChars[j]) {
          results[i].status = LetterStatus.Misplaced
          guessChars[i] = '_'
          secretChars[j] = '_'
          console.log(`Letter ${i} is misplaced (partially correct)`)
          break
        }
      }
    }
  }

  console.log(guessChars)
  console.log(secretChars)
  console.log(results)
  console.log(isCorrect)
  guesses.push(results)
  console.log(guesses)
}
</script>
