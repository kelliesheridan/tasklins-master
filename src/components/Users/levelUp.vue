<template>
    <q-dialog      
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
    <div class="text-center">
      <q-card class="randomEvent center">
        <q-card-section class="bg-primary u-center-text text-white">
          <div class="text-h5 bonusHeader">You Leveled Up!</div>
        </q-card-section>

        <q-card-section class="q-pt-md">
          <div>
            <q-item>
              <q-item-section side top>
                <q-avatar class="bonusImgFocus">
                  <img src="statics/items/chest-1.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section top>
                <q-item-label class="bonusBox">
                  You reached level {{ profile.level }}! Right now, this doesn't really mean anything, but good job!
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>

        <q-card-actions align="right" class="bg-white text-teal" style="margin-top: -25px;">
          <q-btn label="OK" color="primary" v-close-popup @click="onOKClick"/>
        </q-card-actions>

        </q-card-section>
      </q-card>
    </div>
    </q-dialog>
</template>

<script>
export default {

  methods: {
    // following method is REQUIRED
    // (don't change its name --> "show")
    show () {
      this.$refs.dialog.show()
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide () {
      this.$refs.dialog.hide()
    },

    onDialogHide () {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit('hide')
    },

    onOKClick () {
      this.hide()
    }
  }
}
</script>