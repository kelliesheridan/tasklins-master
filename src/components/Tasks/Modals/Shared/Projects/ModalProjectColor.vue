<template>

  <table style="width:100%">
    <tr>
      <th><img src="statics/colors/yellow.jpg" class="size"></th>
      <th><img src="statics/colors/blue.jpg" class="size"></th>
      <th><img src="statics/colors/green.jpg" class="size"></th>
      <th><img src="statics/colors/purple.jpg" class="size"></th>
    </tr>
    <tr class="picker">
      <td><q-radio v-model="project.color" val="yellow" color="yellow" /></td>
      <td><q-radio v-model="project.color" val="blue" color="blue" /></td>
      <td><q-radio v-model="project.color" val="green" color="green" /></td>
      <td><q-radio v-model="project.color" val="purple" color="purple" /></td>
    </tr>
  </table>

</template>

<script>
	import { selectAll } from 'src/directives/directive-select-all'

	export default {
        data() {
        return {
            project: {
                projectName: '',
                }
        }
    },
		props: ['name'],
		directives: {
			selectAll
		}
	}
</script>

<style scoped>
.picker {
  text-align: center;
 margin: auto;
}

</style>