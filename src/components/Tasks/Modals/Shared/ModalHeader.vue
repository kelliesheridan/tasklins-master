<template>
        <q-card-section class="row">
          <div class="modal-header-task"><slot></slot></div>
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
