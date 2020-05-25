<template>
  <div>
    <like-header>
      <h3>はじめまして。</h3>
    </like-header>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>    
    </keep-alive>
  </div>
</template>

<script>
//ローカル登録
import LikeHeader from "./components/LikeHeader";
import About from './components/About.vue';
import Home from './components/Home.vue';
export default {
  data() {
    return {
      number: 10,
      currentComponent: "Home",
    };
  },
  components: {
    LikeHeader,
    About,
    Home,
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  }
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>