// imports
import { defineStore } from 'pinia'

// import languages
import { uz } from '../locale/uz'
import { ru } from '../locale/ru'

// export define store
export const useLanguageStore = defineStore('language', {
    state: () => {
        return {
            uz,
            ru,
            language: {}
        }
    },
    actions: {
        getLanguage(lang: string) {
            if (lang === 'uz') {
                this.language = this.uz
            } else if (lang === 'ru') {
                this.language = this.ru
            } else {
                this.language = {
                    error_message: "We don't have this language!"
                }
            }
        }
    }
})
