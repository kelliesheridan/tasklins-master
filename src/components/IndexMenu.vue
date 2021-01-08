<template>
      <div bordered class="row indexMenuBar">
        <div>
            <q-space />
        <q-btn
            class="q-mt-sm col indexMenuButton"
            padding
            color="secondary"
            push
            to="/index"
            >Home</q-btn
          >
          <q-btn
            class="q-mt-sm col indexMenuButton"
            padding
            color="secondary"
            push
            to="/planuary"
            >Planuary</q-btn
          >
          <q-btn
            class="q-mt-sm col indexMenuButton"
            padding
            color="secondary"
            push
            to="/news"
            >News</q-btn
          >
          <q-space />
        </div>
      </div>
    </template>

<script>
export default {
    
}
</script>