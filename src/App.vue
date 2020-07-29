<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
	import { mapActions } from 'vuex'
	import { firebaseDb, firebaseAuth } from 'boot/firebase'

	export default {
		methods: {
		...mapActions('auth', ['handleAuthStateChange'])
		},
	  created() {
	  	this.handleAuthStateChange()
	  }
	}
</script>

<style>
	.text-strikethrough {
		text-decoration: line-through;
	}
</style>
