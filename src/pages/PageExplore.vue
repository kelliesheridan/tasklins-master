<template>
  <q-page padding>
      <div class="world-map">
        <q-img
        class="world-map rounded-borders" src="statics/backgrounds/WorldMap.jpg">
        </q-img>
        <list-header class="textureBar explore-bar">
          <div>Let's be honest... this page doesn't do anything yet. But one of the focuses for October is being able to go into the world of Tasklins and start exploring!</div>
        </list-header>
      </div>
  </q-page>
</template>

<script>
export default {
    components: {
    "list-header": require("components/Shared/ListHeader.vue").default,
  },
}
</script>