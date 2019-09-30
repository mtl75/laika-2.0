<template>
  <div class="prompt half">
    <b-jumbotron>
      <template v-slot:header>Fuel Your Rocket!</template>
      <template v-slot:lead>{{currentPrompt.question}}</template>
      <hr class="my-4" />
      <b-list-group>
        <b-list-group-item 
          v-for="(answer, index) in shuffledData"
          :key="index"
          @click.prevent="clickIndex(index)"
          :class="answersFunction(index)"
        >{{answer }}</b-list-group-item>
      </b-list-group>
      <b-button data-test="button_one"
        variant="primary"
        @click="submitData"
        :disabled="clickedIndex === null || isAnswered"
      >Submit Answer!</b-button>
      <b-button data-test="button_two" variant="success" @click="next">Next Question!</b-button>
      <b-button data-test="button_three" variant="success" @click="launch" :disabled="correctPrompts<10">Launch Rockets!</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  props: {
    currentPrompt: Object,
    next: Function,
    increment: Function,
    correctPrompts: Number,
    launch: Function
  },





  data: function() {
    return {
      clickedIndex: null,
      actualIndex: null,
      shuffledData: [],
      isAnswered: false,
      launchRocket: false
    };
  },
  watch: {
    currentPrompt: {
      immediate: true,
      handler() {
        (this.clickedIndex = null),
          (this.isAnswered = false),
          this.shuffleData();
      }
    }
  },
  methods: {
    clickIndex(index) {
      this.clickedIndex = index;
    },
    submitData() {
      let correctAns = false;
      if (this.clickedIndex === this.actualIndex) {
        correctAns = true;
      }
      this.isAnswered = true;
      this.increment(correctAns);
    },
    shuffleData() {
      let pulledAnswers = [
        this.currentPrompt.correct_answer,
        ...this.currentPrompt.incorrect_answers
      ];
      this.shuffledData = _.shuffle(pulledAnswers);
      this.actualIndex = this.shuffledData.indexOf(
        this.currentPrompt.correct_answer
      );
    },
    answersFunction(index) {
      let answersFunction = "";
      if (!this.isAnswered && this.clickedIndex === index) {
        answersFunction = "selected";
      } else if (this.isAnswered && this.actualIndex === index) {
        answersFunction = "correct";
      } else if (
        this.isAnswered &&
        this.clickedIndex === index &&
        this.actualIndex !== index
      ) {
        answersFunction = "incorrect";
      }
      return answersFunction;
    }
  }
};
</script>
<style scoped>
.list-group {
  margin-bottom: 20px;
}
.list-group-item:hover {
  background: rgba(238, 238, 255, 0.329);
  cursor: pointer;
}
.btn {
  margin: 0 10px;
}
.selected {
  background-color: rgba(238, 238, 255, 0.329);
}
.correct {
  background-color: rgba(15, 236, 56, 0.664);
}
.incorrect {
  background-color: rgba(231, 12, 12, 0.815);
}
</style>
