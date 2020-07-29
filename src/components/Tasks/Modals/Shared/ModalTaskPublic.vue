<template>
  
                    <q-checkbox
                    :value="npublic"
                    label="Public"
                    name="public"
                    ref="public"
                    color="secondary"
                    @input="$emit('update:npublic', $event)" />

</template>

<script>
export default {
props: ['npublic']
}
  
</script>