<template>
        <q-card-section class="row">
          <div class="text-h6"><slot></slot></div>
          <q-space />
          <q-btn
          v-close-popup
          round
          dense
          icon="close" />
        </q-card-section>
</template>

<script>
export default {
    
}
</script>
