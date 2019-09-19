<template>
  <v-container>
    <v-row>
      <v-col class="mt-12">
        <h1 class="headline text-center"
        >{{days}} days : {{hours}} hrs : {{minutes}} min : {{seconds}} sec
        </h1>
        <div class="text-center mt-5">
          <v-btn color="blue" @click="reset">Reset</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['userDate'],
  data() {
    return {
      days: null,
      hours: null,
      minutes: null,
      seconds: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.countdown(this.userDate.day,
        this.userDate.month,
        this.userDate.year,
        this.userDate.lifespan);
    });
  },
  methods: {
    reset() {
      this.$emit('reset');
    },
    countdown(aDay, aMonth, aYear, aLifespan) {
      /*
        Function converts a specific date into a countdown timer to that date.
        inputs: 4 all ints
        return: void -> setInterval calls
      */
      const theMonth = aMonth - 1;
      const deathYear = aYear + aLifespan;
      const deathDate = new Date(deathYear, theMonth, aDay).getTime();
      const theFinalCountdown = setInterval(() => {
        const currentTime = new Date().getTime();
        const distance = deathDate - currentTime;

        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
          clearInterval(theFinalCountdown);
        }
      }, 1000);
    },
  },
};
</script>
