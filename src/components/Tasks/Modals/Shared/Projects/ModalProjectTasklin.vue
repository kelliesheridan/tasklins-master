<template>

          <div>
			<div>
				<p> Soon, you'll be able to assign each project to a Tasklin. For now, your starter Tasklin will gain experience on all projects.</p>
			</div>
			<div>
				<q-select
					disable
					readonly
					filled
					v-model="model"
					:options="options"			
					
				/>
			</div>
                
          </div>
        
</template>

<script>
	import { selectAll } from 'src/directives/directive-select-all'

	export default {
		props: ['name'],
		directives: {
			selectAll
		}
	}
</script>

<style scoped>
  .egg {
  width: 20%;
  max-width: 50%;
  margin: auto;
  margin-left: 10px;
  display: inline-block;
}

div {
	text-align: center;
}

</style>