<template>
   <q-card style="width: 350px">
        <modal-header>Experience Points</modal-header>

        <modal-help>
            <p>
                Gaining experience points are how your Tasklins level up. 
                Almost everytime you interact with a task, the tasklin associated with that project will gain or lose experience depending on what you did. 
                Once they reach a certain amount of experience, they will gain a level. Once a Tasklin levels up, losing experience will not cause them to lose that level.
            </p>
            <br>
            <q-list dense padding>
                <q-item>
                    <q-item-section>
                    <q-item-label><strong>Ways to Gain and Lose XP</strong></q-item-label>
                    <q-item-label>Add New Task +1-3xp</q-item-label>
                    <q-item-label>Delete Task -2-3xp</q-item-label>
                    <q-item-label>Finish a Challenge Task +5xp</q-item-label>
                    <q-item-label>Complete Task On Time +5xp</q-item-label>
                    <q-item-label>Complete Task Late +3xp</q-item-label>
                    <q-item-label>Delay Task -1xp</q-item-label>
                    </q-item-section>

                    <q-item-section>
                    <q-item-label><strong>What's stopping someone from creating and completing tasks just to gain xp</strong></q-item-label>
                    <q-item-label>Nothing. Everyone is free to play Tasklins however makes the most sense for them. If people want to endlessly click buttons just to get Tasklins xp, their results won't effect those who are playing as intended.</q-item-label>
                    </q-item-section>

                    <q-item-section>
                    <q-item-label><strong>Whick Tasklin gains XP when I complete challenge tasks.</strong></q-item-label>
                    <q-item-label>Since challenges aren't part of any project, that xp currently goes to your default Tasklin (assigned to project Tasks)</q-item-label>
                    </q-item-section>
                </q-item>

                </q-list>
        </modal-help>

    </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {

    data() {
        return {
            

        }
        },
        components: {
        'modal-header': require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
        'modal-help': require('components/Tasks/Modals/Shared/ModalHelp.vue').default,
				    },
    }
</script>