<template>
  <v-btn
    :style="{
      'background-color': theme.global.current.value.colors[props.color],
      'background-image': 'var(--btn-gradient)'
    }"
  >
    {{ props.char }}
  </v-btn>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { withDefaults } from 'vue'

export interface Props {
  char?: string
  color?: string
}

const theme = useTheme()

const props = withDefaults(defineProps<Props>(), {
  char: '?',
  color: 'notGuessed'
})
</script>
