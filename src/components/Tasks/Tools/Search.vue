<template>
	<q-input
		v-model="searchField"
        rounded
        dense
        @keyup.esc="searchField = ''"
        standout
        input-class="text-right"
		class="col q-ml-md q-mr-md"
		>

    <template v-slot:append>
      <q-icon v-if="searchField !== ''" name="close" @click="searchField = ''" class="cursor-pointer" />
      <q-icon name="search" />
    </template>

  </q-input>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	import { selectAll } from 'src/directives/directive-select-all'

	export default {
		computed: {
			...mapState('tasks', ['search']),
			searchField: {
				get() {
					return this.search
				},
				set(value) {
					this.setSearch(value)
				}
			}
		},
		methods: {
			...mapActions('tasks', ['setSearch'])
		},
		directives: {
			selectAll
		}
	}
</script>