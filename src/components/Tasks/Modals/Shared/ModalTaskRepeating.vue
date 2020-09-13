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
      <q-btn class="task-btn q-pa-xs"
      @click="daily = !daily
      monthly = false
      byDayNumber = false"       
      flat dense color="blue" icon="repeat_one">
        <q-tooltip content-class="bg-secondary">Repeat Task Daily/Days of the Week</q-tooltip>
      </q-btn>

      <!-- <q-btn class="task-btn q-pa-xs"
      @click="monthly = !monthly
      daily = false
      byDayNumber = false"       
      flat dense color="blue" label="31">
      <q-tooltip content-class="bg-secondary">Repeat Task by Days of the Month</q-tooltip>
      </q-btn>

      <q-btn class="task-btn q-pa-xs"
      @click="byDayNumber = !byDayNumber
      daily = false"       
      flat dense color="blue" label="#">
      <q-tooltip content-class="bg-secondary">Repeat Task Every ___ Number of Days</q-tooltip>
      </q-btn> -->

      <!-- <q-btn unelevated flat dense text-color="primary" label="Mo"
            :value="mon"
            :class="!mon ? 'bg-red-1' : 'bg-green-1'"
            @click="mon = !mon"/>
            <q-btn unelevated flat dense text-color="primary" label="Tu"
            :value="tue"
            :class="!tue ? 'bg-red-1' : 'bg-green-1'"
            @click="tue = !tue"/>
            <q-btn unelevated flat dense text-color="primary" label="We"
            :value="wed"
            :class="!wed? 'bg-red-1' : 'bg-green-1'"
            @click="wed = !wed"/>
            <q-btn unelevated flat dense text-color="primary" label="Th"
            :value="thu"
            :class="!thu? 'bg-red-1' : 'bg-green-1'"
            @click="thu = !thu"/>
            <q-btn unelevated flat dense text-color="primary" label="Fr"
            :value="fri"
            :class="!fri? 'bg-red-1' : 'bg-green-1'"
            @click="fri = !fri"/>
            <q-btn unelevated flat dense text-color="primary" label="Sa"
            :value="sat"
            :class="!sat? 'bg-red-1' : 'bg-green-1'"
            @click="sat = !sat"/>
            <q-btn unelevated flat dense text-color="primary" label="Su"
            :value="sun"
            :class="!sun? 'bg-red-1' : 'bg-green-1'"
            @click="sun = !sun"/> -->

      <!--  working -->
      <div>
      <span v-if="daily">
      <q-btn
        unelevated
        flat
        dense
        text-color="primary"
        label="Mo"
        :value="nrepeating.monday"
        @input="$emit('update:nrepeating.monday', $event)"
        :class="!nrepeating.monday ? 'bg-red-1' : 'bg-green-1'"
        @click="nrepeating.monday = !nrepeating.monday"
      />
      <q-btn
        unelevated
        flat
        dense
        text-color="primary"
        label="Tu"
        :value="nrepeating.tuesday"
        @input="$emit('update:nrepeating.tuesday', $event)"
        :class="!nrepeating.tuesday ? 'bg-red-1' : 'bg-green-1'"
        @click="nrepeating.tuesday = !nrepeating.tuesday"
      />
      <q-btn
        unelevated
        flat
        dense
        text-color="primary"
        label="We"
        :value="nrepeating.wednesday"
        @input="$emit('update:nrepeating.wednesday', $event)"
        :class="!nrepeating.wednesday ? 'bg-red-1' : 'bg-green-1'"
        @click="nrepeating.wednesday = !nrepeating.wednesday"
      />
      <q-btn
        unelevated
        flat
        dense
        text-color="primary"
        label="Th"
        :value="nrepeating.thursday"
        @input="$emit('update:nrepeating.thursday', $event)"
        :class="!nrepeating.thursday ? 'bg-red-1' : 'bg-green-1'"
        @click="nrepeating.thursday = !nrepeating.thursday"
      />
      <q-btn
        unelevated
        flat
        dense
        text-color="primary"
        label="Fr"
        :value="nrepeating.friday"
        @input="$emit('update:nrepeating.friday', $event)"
        :class="!nrepeating.friday ? 'bg-red-1' : 'bg-green-1'"
        @click="nrepeating.friday = !nrepeating.friday"
      />
      <q-btn
        unelevated
        flat
        dense
        text-color="primary"
        label="Sa"
        :value="nrepeating.saturday"
        @input="$emit('update:nrepeating.saturday', $event)"
        :class="!nrepeating.saturday ? 'bg-red-1' : 'bg-green-1'"
        @click="nrepeating.saturday = !nrepeating.saturday"
      />
      <q-btn
        unelevated
        flat
        dense
        text-color="primary"
        label="Su"
        :value="nrepeating.sunday"
        @input="$emit('update:nrepeating.sunday', $event)"
        :class="!nrepeating.sunday ? 'bg-red-1' : 'bg-green-1'"
        @click="nrepeating.sunday = !nrepeating.sunday"
      />
      </span>

      <div v-if="monthly">
        <div>
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="1"
            :value="nrepeating.monday"
            @input="$emit('update:nrepeating.monday', $event)"
            :class="!nrepeating.monday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.monday = !nrepeating.monday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="2"
            :value="nrepeating.tuesday"
            @input="$emit('update:nrepeating.tuesday', $event)"
            :class="!nrepeating.tuesday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.tuesday = !nrepeating.tuesday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="3"
            :value="nrepeating.wednesday"
            @input="$emit('update:nrepeating.wednesday', $event)"
            :class="!nrepeating.wednesday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.wednesday = !nrepeating.wednesday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="4"
            :value="nrepeating.thursday"
            @input="$emit('update:nrepeating.thursday', $event)"
            :class="!nrepeating.thursday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.thursday = !nrepeating.thursday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="5"
            :value="nrepeating.friday"
            @input="$emit('update:nrepeating.friday', $event)"
            :class="!nrepeating.friday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.friday = !nrepeating.friday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="6"
            :value="nrepeating.saturday"
            @input="$emit('update:nrepeating.saturday', $event)"
            :class="!nrepeating.saturday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.saturday = !nrepeating.saturday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="7"
            :value="nrepeating.sunday"
            @input="$emit('update:nrepeating.sunday', $event)"
            :class="!nrepeating.sunday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.sunday = !nrepeating.sunday"
          />
        </div>

        <div>
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="8"
            :value="nrepeating.monday"
            @input="$emit('update:nrepeating.monday', $event)"
            :class="!nrepeating.monday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.monday = !nrepeating.monday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="9"
            :value="nrepeating.tuesday"
            @input="$emit('update:nrepeating.tuesday', $event)"
            :class="!nrepeating.tuesday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.tuesday = !nrepeating.tuesday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="10"
            :value="nrepeating.wednesday"
            @input="$emit('update:nrepeating.wednesday', $event)"
            :class="!nrepeating.wednesday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.wednesday = !nrepeating.wednesday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="11"
            :value="nrepeating.thursday"
            @input="$emit('update:nrepeating.thursday', $event)"
            :class="!nrepeating.thursday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.thursday = !nrepeating.thursday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="12"
            :value="nrepeating.friday"
            @input="$emit('update:nrepeating.friday', $event)"
            :class="!nrepeating.friday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.friday = !nrepeating.friday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="13"
            :value="nrepeating.saturday"
            @input="$emit('update:nrepeating.saturday', $event)"
            :class="!nrepeating.saturday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.saturday = !nrepeating.saturday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="14"
            :value="nrepeating.sunday"
            @input="$emit('update:nrepeating.sunday', $event)"
            :class="!nrepeating.sunday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.sunday = !nrepeating.sunday"
          />
        </div>

        <div>
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="15"
            :value="nrepeating.monday"
            @input="$emit('update:nrepeating.monday', $event)"
            :class="!nrepeating.monday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.monday = !nrepeating.monday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="16"
            :value="nrepeating.tuesday"
            @input="$emit('update:nrepeating.tuesday', $event)"
            :class="!nrepeating.tuesday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.tuesday = !nrepeating.tuesday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="17"
            :value="nrepeating.wednesday"
            @input="$emit('update:nrepeating.wednesday', $event)"
            :class="!nrepeating.wednesday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.wednesday = !nrepeating.wednesday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="18"
            :value="nrepeating.thursday"
            @input="$emit('update:nrepeating.thursday', $event)"
            :class="!nrepeating.thursday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.thursday = !nrepeating.thursday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="19"
            :value="nrepeating.friday"
            @input="$emit('update:nrepeating.friday', $event)"
            :class="!nrepeating.friday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.friday = !nrepeating.friday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="20"
            :value="nrepeating.saturday"
            @input="$emit('update:nrepeating.saturday', $event)"
            :class="!nrepeating.saturday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.saturday = !nrepeating.saturday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="21"
            :value="nrepeating.sunday"
            @input="$emit('update:nrepeating.sunday', $event)"
            :class="!nrepeating.sunday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.sunday = !nrepeating.sunday"
          />
        </div>

        <div>
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="22"
            :value="nrepeating.monday"
            @input="$emit('update:nrepeating.monday', $event)"
            :class="!nrepeating.monday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.monday = !nrepeating.monday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="23"
            :value="nrepeating.tuesday"
            @input="$emit('update:nrepeating.tuesday', $event)"
            :class="!nrepeating.tuesday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.tuesday = !nrepeating.tuesday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="24"
            :value="nrepeating.wednesday"
            @input="$emit('update:nrepeating.wednesday', $event)"
            :class="!nrepeating.wednesday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.wednesday = !nrepeating.wednesday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="25"
            :value="nrepeating.thursday"
            @input="$emit('update:nrepeating.thursday', $event)"
            :class="!nrepeating.thursday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.thursday = !nrepeating.thursday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="26"
            :value="nrepeating.friday"
            @input="$emit('update:nrepeating.friday', $event)"
            :class="!nrepeating.friday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.friday = !nrepeating.friday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="27"
            :value="nrepeating.saturday"
            @input="$emit('update:nrepeating.saturday', $event)"
            :class="!nrepeating.saturday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.saturday = !nrepeating.saturday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="28"
            :value="nrepeating.sunday"
            @input="$emit('update:nrepeating.sunday', $event)"
            :class="!nrepeating.sunday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.sunday = !nrepeating.sunday"
          />
        </div>

        <div>
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="29"
            :value="nrepeating.monday"
            @input="$emit('update:nrepeating.monday', $event)"
            :class="!nrepeating.monday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.monday = !nrepeating.monday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="30"
            :value="nrepeating.tuesday"
            @input="$emit('update:nrepeating.tuesday', $event)"
            :class="!nrepeating.tuesday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.tuesday = !nrepeating.tuesday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="31"
            :value="nrepeating.wednesday"
            @input="$emit('update:nrepeating.wednesday', $event)"
            :class="!nrepeating.wednesday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.wednesday = !nrepeating.wednesday"
          />          
        </div>

      </div>

      <div v-if="byDayNumber">
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="3"
            :value="nrepeating.monday"
            @input="$emit('update:nrepeating.monday', $event)"
            :class="!nrepeating.monday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.monday = !nrepeating.monday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="5"
            :value="nrepeating.tuesday"
            @input="$emit('update:nrepeating.tuesday', $event)"
            :class="!nrepeating.tuesday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.tuesday = !nrepeating.tuesday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="10"
            :value="nrepeating.wednesday"
            @input="$emit('update:nrepeating.wednesday', $event)"
            :class="!nrepeating.wednesday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.wednesday = !nrepeating.wednesday"
          />
          <q-btn
            unelevated
            flat
            dense
            text-color="primary"
            label="60"
            :value="nrepeating.wednesday"
            @input="$emit('update:nrepeating.wednesday', $event)"
            :class="!nrepeating.wednesday ? 'bg-red-1' : 'bg-green-1'"
            @click="nrepeating.wednesday = !nrepeating.wednesday"
          />      
      </div>
          
        
      </div>
      
      
    </div>
  </div>
</template>

<script>
export default {
  props: ["nrepeating"],
  data() {
    return {
      daily: false,
      monthly: false,
      byDayNumber: false
     
    };
  }
};
</script>
