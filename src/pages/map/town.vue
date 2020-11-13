<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="statics/sad404.png"
        style="width:30vw;max-width:150px;">
    </p>
    <p class="text-faded">
      Look, you found a town!
    </p>
    <q-btn
      color="secondary"
      style="width:200px;"
      to="/"
      label="Go back"
    />
  </div>
</template>

<script >
export default {
  name: 'Error404'
}
</script>
