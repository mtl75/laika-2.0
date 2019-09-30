<template>
  <div class="laika-gif">
    <b-jumbotron>
      <b-img data-test="first_gif"
        v-show="!launchRocket"
        src="https://media.giphy.com/media/QM6lwvMJulMLTfehvA/giphy.gif"
        fluid
        alt="Responsive image"
      ></b-img>
      <b-img data-test="second_gif"
        v-show="launchRocket"
        src="https://media.giphy.com/media/3o7buf1UvEqZ9WX0Wc/giphy.gif"
        fluid
        alt="Responsive image"
      ></b-img>
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  props: {
    launchRocket: Boolean
  },
  data: function() {
    return {};
  }
};
</script>