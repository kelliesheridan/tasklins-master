<template>

          <div>
			<div>
				<p> Eventually, you'll need to assign a Tasklin to each project. For now, they're just here to be cute.</p>
			</div>
			<div>
            <img src="statics/placeholder/blue3a.png" class="responsive egg">
            <img src="statics/placeholder/purple3a.png" class="responsive egg">            
            <img src="statics/placeholder/green3a.png" class="responsive egg">
            <img src="statics/placeholder/pink3a.png" class="responsive egg"> 
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