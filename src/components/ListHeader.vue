<template lang="html">
  <div class="listHeader">
    <div class="titleContainer" @click="toggleMainShown()">
      <!-- Normal State-->
      <div v-show="!isMainShown" class="">
        <h1 class="titleStyle">
          <i class="fa fa-list listIconStyle "> </i>
          My To Do List
        </h1>
      </div>
      <!-- Edit State -->

      <div v-show="isMainShown" class="mainEditState">
        <input class="mainEditStateInput" type="text" name="" value="" />
        <button class="mainEditStateCloseButton" type="button" name="button">
          <i class="fa fa-close faSize "></i>
        </button>
        <button class="mainEditStateCheckButton" type="button" name="button">
          <i class="fa fa-check faSize "></i>
        </button>
      </div>
    </div>
    <!-- Input Container -->
    <div class="mainInputContainer">
      <input
        class="mainInputStyle"
        placeholder="New Item..."
        type="text"
        name=""
        value=""
      />
      <button class="mainInputButtonStyle" type="button" name="button">
        ADD
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListHeader",
  data() {
    return {
      isMainShown: false
    };
  },
  methods: {
    toggleMainShown: function() {
      this.isMainShown = !this.isMainShown;
    }
  }
};
</script>

<style lang="scss" media="screen">
@import "../assets/styles/globalStyle.scss";

@mixin inputHeight {
  height: 40px;
}
.listIconStyle {
}
.listHeader {
  padding: 50px;
  @include bgDarkBlue;
}
.titleStyle {
  @include textLeft;
  @include textGreen;
  @include titleFont;
  margin: 20px 0px;
  height: 40px;
}
/* Edit */
.mainEditState {
  @include titleFont;
  @include flexContainer;
  margin: 20px 0px;
  height: 40px;
}

.mainEditStateInput {
  @include resetStyle;
  @include flexBig;
  @include leftCurvedRadius;
  font-size: 25px;
}

@mixin mainEditButtonStyles {
  @include flexSmall;
  @include resetStyle;
  padding: 0 7px;
}
.mainEditStateCloseButton {
  @include mainEditButtonStyles;
  @include bgError;
}
.mainEditStateCheckButton {
  @include mainEditButtonStyles;
  @include rightCurvedRadius;
  @include bgGreen;
}
/*input Style */
.mainInputContainer {
  @include flexContainer;
}

.mainInputStyle {
  @include flexBig;
  @include resetStyle;
  @include inputHeight;
  @include leftCurvedRadius;
  padding-left: 15px;
  font-size: 20px;
}

@mixin mainInputMixin {
  @include flexSmall;
  @include resetStyle;
  @include inputHeight;
  @include rightCurvedRadius;
  padding: 0 15px;
}
.mainInputButtonStyle {
  @include mainInputMixin;
  @include bgGreen;
  @include textDarkBlue;
  font-weight: bold;
  font-size: 25px;
}
.mainInputButtonStyle:hover {
  @include mainInputMixin;
  @include bgDarkGreen;
}
</style>
