<template>
    <q-banner dense inline-actions :class="bgColor" class="list-header text-accent text-center">
      <span class="text-bold text-subtitle1"><slot></slot></span>
    </q-banner>
</template>

<script>
export default {
    props: ['bgColor']
}
</script>