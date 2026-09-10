<template>
 Lastname: <input v-model="name">
 <br><br>
 Firstname: <input v-model="name1">
 <br><br>
 <button @click="greet(name, name1)">Sumbit</button>
 <p>Hello, {{ message }}!</p>
</template>

<style>
p {
  color: blue
}
</style>

<script>
export default {
  data() {
    return {
     message: '',
    }
  },
  methods: {
    greet(name, name1) {
      this.message= name + ' ' + name1
    }
  } 
}
</script>

