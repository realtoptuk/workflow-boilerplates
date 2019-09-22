<template>
  <div class="p">
    <h2>HomePage</h2>
    <p class="p--h">{{ arr }}</p>
    <button @click="makeArr" class="g--text">Make arr</button>
    <hr />
    <button @click="goToTestPage">go to test page</button>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  computed: {
    arr() {
      return this.$store.getters.arr;
    },
  },
  methods: {
    goToTestPage() {
      this.$router.push('/test');
    },
    makeArr() {
      this.$store.dispatch('getArray');
    },
  },
};
</script>

<style></style>
