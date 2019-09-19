<template>
  <v-container>
    <v-row>
      <v-col class="col-8 offset-2">
      <h1 class="headline text-center mb-7">Life Countdown Timer</h1>
        <v-form @submit.prevent="submit">
          <v-text-field
            v-model="dayOfBirth"
            label="Day of birth"
            required
          ></v-text-field>
          <v-text-field
            v-model="monthOfBirth"
            label="Month of birth"
            required
          ></v-text-field>
          <v-text-field
            v-model="yearOfBirth"
            label="Year of birth"
            required
          ></v-text-field>
          <v-text-field
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
export default {
  data() {
    return {
      dayOfBirth: null,
      monthOfBirth: null,
      yearOfBirth: null,
      expectedLifespan: null,
    };
  },
  methods: {
    submit() {
      if (this.dayOfBirth == null || this.monthOfBirth == null
      || this.yearOfBirth == null || this.expectedLifespan == null) {
        return;
      }
      const deathYear = Number(this.yearOfBirth) + Number(this.expectedLifespan);
      const userData = {
        day: Number(this.dayOfBirth),
        month: Number(this.monthOfBirth),
        year: deathYear,
      };
      this.$emit('submit-data', userData);
    },
  },
};
</script>
