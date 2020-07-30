<template>
  
            <div class="row q-mb-sm">
                <q-select
                outlined
                @input="$emit('update:project', $event)"
                class="col"
                :value="project"
                :options="options"
                label="Project" />
            </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
           options: ['None', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
        }
    },
		 props: ['project']
}
  
</script>