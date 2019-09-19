<template>
  <v-container>
    <v-row>
      <v-col class="col-8 offset-2">
      <h1 class="headline text-center mb-7">Life Countdown Timer</h1>
      <v-alert
         v-if="errorMessage"
         type="error"
         >{{errorMessage}}</v-alert>
        <v-form @submit.prevent="submit">
          <v-text-field
            title="Day of Birth"
            v-model="dayOfBirth"
            label="Day of birth"
            required
          ></v-text-field>
          <v-text-field
            title="Month of Birth"
            v-model="monthOfBirth"
            label="Month of birth"
            required
          ></v-text-field>
          <v-text-field
            title="Year of Birth"
            v-model="yearOfBirth"
            label="Year of birth"
            required
          ></v-text-field>
          <v-text-field
            title="Expected Lifespan"
            v-model="expectedLifespan"
            label="How many years are you going to live?"
            required
          ></v-text-field>
          <v-btn color="green" type="submit">Submit</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ValidationServices from '@/services/Validation';

export default {
  data() {
    return {
      dayOfBirth: null,
      monthOfBirth: null,
      yearOfBirth: null,
      expectedLifespan: null,
      errorMessage: null,
    };
  },
  methods: {
    submit() {
      const userDate = {
        day: Number(this.dayOfBirth),
        month: Number(this.monthOfBirth),
        year: Number(this.yearOfBirth),
        lifespan: Number(this.expectedLifespan),
      };

      const validation = ValidationServices.validator(userDate);
      if (!validation.isValid) {
        this.errorMessage = validation.errorMessage;
        return;
      }

      this.$emit('submit-data', userDate);
    },
  },
};
</script>
