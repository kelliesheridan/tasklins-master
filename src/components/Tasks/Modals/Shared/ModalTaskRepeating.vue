<template>
  <div>
    <div>
      <q-btn
        class="task-btn q-pa-xs"
        @click="
          daily = !daily;
          monthly = false;
          byDayNumber = false;
          everyNumDays = true;
        "
        flat
        dense
        color="blue"
        icon="repeat_one"
      >
        <q-tooltip content-class="bg-secondary"
          >Repeat Task Daily/Days of the Week</q-tooltip
        >
      </q-btn>
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

        <div v-if="everyNumDays">
          <q-input
            label="Repeat every ___ days"
            @change="$emit('update:nrepeating.numDay', $event)"
			      v-model="numberOfDays"
            type="number"
            placeholder="1"
            style="max-width: 200px"
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
      byDayNumber: false,
      everyNumDays: false
    };
  },
  computed: {
    numberOfDays: {
      get() {
        return this.nrepeating.numDay;
      },
      set(value) {
        this.nrepeating.numDay = value;
      }
    }
  }
};
</script>
