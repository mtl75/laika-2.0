<template>
  <div id="app">
    <Header :correctPrompts="correctPrompts" :totalPrompts="totalPrompts"></Header>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <Prompts
            v-if="prompts.length"
            :currentPrompt="prompts[index]"
            :next="next"
            :increment="increment"
            :correctPrompts="correctPrompts"
            :launch="launch"
            :launchRocket="launchRocket"
          />
        </b-col>
        <b-col>
          <Gif :launchRocket="launchRocket" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Prompts from "./components/Prompts";
import Header from "./components/Header";
import Gif from "./components/GifViewer";

export default {
  name: "app",
  components: {
    Header,
    Prompts,
    Gif
  },
  data: function() {
    return {
      prompts: [],
      index: 0,
      correctPrompts: 0,
      totalPrompts: 0,
      launchRocket: false
    };
  },
  methods: {
    next() {
      this.index++;
    },
    increment(correctAns) {
      if (correctAns) {
        this.correctPrompts++;
      }
      this.totalPrompts++;
    },
    launch() {
      this.launchRocket = true;
    },
    callingAPI(fetchable){
      fetch(
      fetchable,
      {
        method: "get"
      }
    )
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.prompts = jsonData.results;
      });
    }
  },
  mounted: function() {
    this.callingAPI("https://opentdb.com/api.php?amount=20&category=17&difficulty=hard&type=multiple")
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
