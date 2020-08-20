<template>

                <div>
                    <!-- <div>
                        <q-checkbox
                        :value="nrepeating"
                        label="Repeating"
                        color="secondary"
                        ref="nrepeating"
                        @input="$emit('update:nrepeating', $event)"
                        />
                    </div> -->
                    
                    <div>
                        <q-btn class="task-btn"                        
                        flat                        
                        dense
                        color="blue"
                        icon="repeat_one">
                        <q-tooltip content-class="bg-secondary">Repeat Task</q-tooltip>
                        </q-btn>

                        <q-btn unelevated flat dense text-color="primary" label="Mo"
                        v-model="monday"
                        :class="!monday? 'bg-red-1' : 'bg-green-1'"
                        @click="monday = !monday"/>
                        <q-btn unelevated flat dense text-color="primary" label="Tu"
                        v-model="tuesday"
                        :class="!tuesday? 'bg-red-1' : 'bg-green-1'"
                        @click="tuesday = !tuesday"/>
                        <q-btn unelevated flat dense text-color="primary" label="We"
                        v-model="wednesday"
                        :class="!wednesday? 'bg-red-1' : 'bg-green-1'"
                        @click="wednesday = !wednesday"/>
                        <q-btn unelevated flat dense text-color="primary" label="Th"
                        v-model="thursday"
                        :class="!thursday? 'bg-red-1' : 'bg-green-1'"
                        @click="thursday = !thursday"/>
                        <q-btn unelevated flat dense text-color="primary" label="Fr"
                        v-model="friday"
                        :class="!friday? 'bg-red-1' : 'bg-green-1'"
                        @click="friday = !friday"/>
                        <q-btn unelevated flat dense text-color="primary" label="Sa"
                        v-model="saturday"
                        :class="!saturday? 'bg-red-1' : 'bg-green-1'"
                        @click="saturday = !saturday"/>
                        <q-btn unelevated flat dense text-color="primary" label="Su"
                        v-model="sunday"
                        :class="!sunday? 'bg-red-1' : 'bg-green-1'"
                        @click="sunday = !sunday"/>
                        
                    </div>

                    

                </div>

</template>

<script>
export default {

        data() {
        return {
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false
        }
        },

             props: ['nrepeating']
}
</script>

