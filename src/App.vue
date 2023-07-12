<script setup lang="ts">
// imports
import { onMounted, ref } from 'vue';
import { useLanguageStore } from './store/language'

// store
const store = useLanguageStore()

// data
const withDefaultLanguage = ref<string>('uz')
const language = ref<object | any>({})

// methods
function getLanguage() {
  store.getLanguage(withDefaultLanguage.value)
  language.value = store.language
}
function changeLanguageValue() {
  store.getLanguage(withDefaultLanguage.value)
  language.value = store.language
}

// mounted
onMounted(() => {
  getLanguage()
  // event listener
  document.getElementById('language')?.addEventListener('change', () => {
    withDefaultLanguage.value = document.getElementById('language')?.value
    changeLanguageValue()
  })
})

</script>

<template>
  <div>
    App component
    <select name="language" id="language">
      <option value="uz">Uz</option>
      <option value="ru">Ru</option>
    </select>

    <div style="margin-top: 10px;">
      {{ language.header_title }}
    </div>
  </div>
</template>