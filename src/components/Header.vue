<template>
  <div class="header-template">
    <b-nav class="starter-nav" tabs fill>
      <b-nav-item class="laika-title" data-test="laika_title" disabled>
        <b>Laika: A Space Adventure</b>
      </b-nav-item>
      <b-nav-item disabled>
        <b-progress data_test='progress_bar' :value="correctPrompts" :max="10" show-progress animated></b-progress>
      </b-nav-item>
    </b-nav>
  </div>
</template>
<script>
export default {
  props: {
    correctPrompts: Number,
    totalPrompts: Number
  },
  data: function() {
    return {};
  }
};
</script>
