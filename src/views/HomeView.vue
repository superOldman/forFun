<script setup>
import TheWelcome from '../components/TheWelcome.vue'

import { registerAccount, loginAccount, getList } from '@/api/index.js'
getList()
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
