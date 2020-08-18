<template>
  <q-page padding>
    <div class="eggBasket">
      <div class="egg"></div>
      <div class="egg2"></div>
      <div class="egg3"></div>
      <div class="egg4"></div>
    </div>
       
  </q-page>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      
    };
  },
  computed: {
     },
  components: {
    
  }
};
</script>

<style>
.eggBasket {
  margin-top: 200px;  
  position: relative;
}
.egg {
  position: absolute;
  animation: shake 1.1s ease-in-out;
  animation-iteration-count: infinite;
  margin-left: 300px;
  height: 365px;
  width: 251px; 
  background-image: linear-gradient(315deg, #CA8F9D 0%, #F7E5B6 74%);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;
  box-shadow: 0px 20px 12px #cdcdcd;
}

.egg2 {
  position: absolute;
  animation: shake 1.2s ease-in-out;
  animation-iteration-count: infinite;
  height: 365px;
  width: 251px; 
  background-image: repeating-linear-gradient(
    45deg, 
    #606693,
    #606693 10px, 
    #ACAFC6 10px,
    #ACAFC6 20px);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;
  box-shadow: 0px 20px 12px #cdcdcd;
}

.egg3 {
  position: absolute;
  animation: shake 0.9s ease-in-out;
  animation-iteration-count: infinite;
  margin-left: -300px;
  height: 365px;
  width: 251px; 
  background-image:
  linear-gradient(90deg, rgba(153, 123, 164, .07) 50%, transparent 50%),
  linear-gradient(90deg, rgba(153, 123, 164, .13) 50%, transparent 50%),
  linear-gradient(90deg, transparent 50%, rgba(153, 123, 164, .17) 50%),
  linear-gradient(90deg, transparent 50%, rgba(153, 123, 164, .19) 50%);
  background-size: 13px, 29px, 37px, 53px;
  background-color: #D1D6D8;  
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;
  box-shadow: 0px 20px 12px #cdcdcd;
}

.egg4 {
  position: absolute;
  animation: shake 1.1s ease-in-out;
  animation-iteration-count: infinite;
  margin-left: -600px;
  height: 365px;
  width: 251px; 
  background-color: #80588e;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='18' viewBox='0 0 100 18'%3E%3Cpath fill='%23d2ba7d' fill-opacity='1' d='M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z'%3E%3C/path%3E%3C/svg%3E");
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;
  box-shadow: 0px 20px 12px #cdcdcd;
}

/* @keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
} */

</style>
