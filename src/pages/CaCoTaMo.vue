<template>
  <q-page padding>
    <div class="row main justify-center q-pa-md">

      <div class="section col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div>
        <list-header class="textureBar">
          <div>Canadian Coding Tasklins Month</div>
        </list-header>

        <div class="tamo-text">
          Welcome to the Tasklin's November Feature Challenge. 
          In the spirit of National Novel Writing Month, which is also happening right now, I've been calling it CaCoTaMo in my head (Canadian Coding Tasklins Month),
          but what it comes down to is a one month challenge where the goal is to add something new to Tasklins every day in November.
          <br><br>
          Some days this might be entire new features, other days it will be smaller pieces required for bigger new features (with the big one being the ability to level up your Tasklins!),
          and once a week, likely every Sunday I'll be taking a day to do some cleanup and bug fixes. I'm hoping to do something every day, but like with NaNoWriMo, the end goal is what's important.
          Some days I may fall ahead, and others I might do more than one task. But you'll be able to check in every step of the way to see where we're headed.
          <br><br>
          Most days probably won't involve a full site update, but the plan is to get new features up and running once their working, so you can expect progress at least every Monday throughout November.
          And, as always, if you have any issues, please use the help button via the ? button and submit a ticket (you should be able to access this on mobile now as well from the home page). 
        </div>
        </div>
      </div>

      <div class="section col-xs-12 col-sm-12 col-md-6 col-lg-6">

        <list-header class="textureBar">
          <div>The Task List</div>
        </list-header>


         <div class="tamo-list row">
          <div class="tamo-task task-true">Make World Map Interactive</div>
          <div class="tamo-task task-true">Add First Town</div>
          <div class="tamo-task task-false">Create Piper's Store</div>
          <div class="tamo-task task-false">Set Task Goal Feature</div>
          <div class="tamo-task task-false">Create Blacksmith Shop</div>
        </div>

        <div class="tamo-list row">
          <div class="tamo-task task-true">Update Tasklin Moods</div>
          <div class="tamo-task task-false">Tasklins Show Level 2+ Art</div>
          <div class="tamo-task task-false">Complete Tasklin Creator</div>
          <div class="tamo-task task-false">Add Tasklin Stats</div>
          <div class="tamo-task task-false">Tasklins Can Level Up</div>
        </div>

        <div class="tamo-list row">
          <div class="tamo-task task-true">View Tomorrow's Tasks</div>
          <div class="tamo-task task-false">Better Sort on Challenges</div>
          <div class="tamo-task task-false">Update Tasklins.com</div>
          <div class="tamo-task task-false">Open for Public SignUps</div>
          <div class="tamo-task task-false">Update Home Page To Do List</div>
        </div>

        <div class="tamo-list row">
          <div class="tamo-task task-true">Tasklin Nose/Eyelid Art</div>
          <div class="tamo-task task-true">More Tasklin Body Types</div>
          <div class="tamo-task task-true">Blacksmith Art</div>
          <div class="tamo-task task-false">Tasklin Ears/Horns Art</div>
          <div class="tamo-task task-false">Tasklin Pattern Art</div>
        </div>

        <div class="tamo-list row">
          <div class="tamo-task task-false">Better Project Sorting</div>
          <div class="tamo-task task-false">Project Color From Tasklin</div>
          <div class="tamo-task task-false">Improve Mobile Experience</div>
          <div class="tamo-task task-true">Repeating By # of Days</div>
          <div class="tamo-task task-false">Repeating by Day of Month</div>
        </div>

        <div class="tamo-list row">
          <div class="tamo-task task-true">Bug Fix Day</div>
          <div class="tamo-task task-true">Bug Fix Day</div>
          <div class="tamo-task task-true">Bug Fix Day</div>
          <div class="tamo-task task-true">Bug Fix Day</div>
          <div class="tamo-task task-false">Bug Fix Day</div>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
export default {
    components: {
    "list-header": require("components/Shared/ListHeader.vue").default,
  },
}
</script>