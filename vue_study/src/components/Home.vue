<template>
<div>
   <p v-border:dotted.round.shadow="{width: '5px', color: 'black'}">Home</p>
   <h2>{{ title  | toUpperCase | upperCase }}</h2>
   <p>{{ subTitle  | toLowerCase  }}</p>
   <p>{{ number }}</p>
   <button @click="number++">+1</button>
   <CountNumber></CountNumber>
</div>
</template>

<script>
import CountNumber from './CountNumber';
import {tokyoNumber} from '@/tokyoNumber';
export default {
  mixins: [tokyoNumber],
    data() {
        return {
        tmpData: "Hello",
        };
    },
    components: {
      CountNumber
    },
    // computed: {
    //   upperCaseTitle() {
    //     return this.title.toUpperCase();
    //   },
    // },

  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }

      if (binding.modifiers.round.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0,0,0,0.26)";
      }
    }
  }
};
</script>