import { Dialog, Loading } from 'quasar'

export function showLevelUp(level) {
	Loading.hide()
	Dialog.create({
		title: 'You Leveled Up',
		message: 'You reached level {{ profile.level }}! '
	})
}

<q-dialog
v-model="levelUp"
persistent
transition-show="scale"
transition-hide="scale"
>
<q-card class="bg-primary text-white" style="width: 400px">
  <q-card-section>
	<div class="text-h6">You Leveled Up!</div>
  </q-card-section>

  <q-card-section class="q-pt-none">
	
  </q-card-section>

  <q-card-actions align="right" class="bg-white text-teal">
	<q-btn flat label="OK" v-close-popup />
  </q-card-actions>
</q-card>
</q-dialog> 