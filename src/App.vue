<template>
  <v-app>
    <v-content>
      <v-row v-if="!isCounterActive">
        <v-col>
          <UserInput
            v-on:submit-data="calculateUserDate"
          ></UserInput>
        </v-col>
      </v-row>
      <v-row v-else>
        <Counter
          v-on:reset="isCounterActive=false"
          :userDate="userDate"
          ></Counter>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import UserInput from '@/components/UserInput.vue';
import Counter from '@/components/Counter.vue';

export default {
  name: 'App',
  data() {
    return {
      userDate: null,
      isCounterActive: false,
    };
  },
  components: {
    UserInput,
    Counter,
  },
  methods: {
    calculateUserDate(data) {
      this.userDate = data;
      this.isCounterActive = true;
    },
  },
};
</script>
