<template>
  <v-btn
    :style="{
      'background-color': theme.global.current.value.colors[props.color],
      'background-image': 'linear-gradient(315deg, #00000040, #FFFFFF40)'
    }"
  >
    {{ props.char }}
  </v-btn>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { defineProps, withDefaults } from 'vue'
const theme = useTheme()

export interface Props {
  char?: string
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  char: '?',
  color: 'notGuessed'
})
</script>
