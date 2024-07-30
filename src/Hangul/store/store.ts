import { defineStore } from "pinia";
import { ref } from "vue";
import { supabase } from "../../lib/supabase";
import type { Hangul_Alphabet } from "../models/hangul";

export const useHangulStore = defineStore("hangul", () => {
  const hangulAlphabet = ref([] as Hangul_Alphabet[]) || null
  const vowels = ref([] as Hangul_Alphabet[]);
  const consonants = ref([] as Hangul_Alphabet[]);

  const database_error = ref("" as unknown) 
  const loading =  ref(false)

  async function getHangul() {
    try{
      loading.value = true
      const { data, error } = await supabase.from('hangul_alphabet').select()
      if (error) throw Error

      if (data) {
        hangulAlphabet.value = data as Hangul_Alphabet[]
        vowels.value = hangulAlphabet.value.filter(character => character.identifier === 'Vowel')
        consonants.value = hangulAlphabet.value.filter(character => character.identifier === 'Consonant')
      } 
    }
    catch(error) {
      database_error.value = error
      return database_error
    }
    finally {
      loading.value = false
    }
  }

  return { hangulAlphabet, getHangul , database_error, loading, vowels, consonants}
})
