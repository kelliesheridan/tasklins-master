<template>

                    <q-checkbox
                    :value="nrepeating"
                    label="Repeating"
                    color="secondary"
                    ref="nrepeating"
                    @input="$emit('update:nrepeating', $event)"
                     />

</template>

<script>
export default {

props: ['nrepeating']
}
</script>

