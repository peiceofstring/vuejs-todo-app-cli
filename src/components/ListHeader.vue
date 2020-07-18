<template lang="html">
  <div class="listHeader">
    <div class="titleContainer">
      <!-- Normal State-->
      <div v-show="!isMainShown" class="">
        <h1 class="titleStyle">
          <span>
            <i
              @click="
                toggleMainShown();
                copyListTitle();
              "
              class="fa fa-list listIconStyle "
            >
            </i
          ></span>

          {{ listTitle }}
        </h1>
      </div>
      <!-- Edit State -->

      <div v-show="isMainShown" class="mainEditState">
        <input
          class="mainEditStateInput"
          v-on:keyup.enter="toggleMainShown()"
          v-model="listTitle"
          type="text"
          name=""
          value=""
        />
        <button
          @click="
            revertTitleText();
            toggleMainShown();
          "
          class="mainEditStateCloseButton"
          type="button"
          name="button"
        >
          <i class="fa fa-close faSize "></i>
        </button>
        <button
          @click="toggleMainShown()"
          class="mainEditStateCheckButton"
          type="button"
          name="button"
        >
          <i class="fa fa-check faSize "></i>
        </button>
      </div>
    </div>
    <!-- Input Container -->
    <div class="mainInputContainer">
      <input
        :value="textInput"
        @input="updateTextInput"
        v-on:keyup.enter="addListItem()"
        class="mainInputStyle"
        placeholder="New Item..."
        type="text"
        name=""
      />
      <button
        @click="addListItem()"
        class="mainInputButtonStyle"
        type="button"
        name="button"
      >
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
      listTitle: "My ToDo List",
      isMainShown: false,
      tempListTitle: ""
    };
  },
  computed: {
    textInput() {
      return this.$store.state.textInput;
    }

    /* textInput: {
      get_textInput() {
        return this.$store.state.textInput;
      },
      set_textInput(value) {
        return this.$store.commit("updateTextInput", value);
      }
    } */
  },
  methods: {
    copyListTitle() {
      this.tempListTitle = this.listTitle;
    },
    revertTitleText() {
      this.listTitle = this.tempListTitle;
      this.tempListTitle = "";
    },
    toggleMainShown() {
      this.isMainShown = !this.isMainShown;
    },
    addListItem() {
      this.$store.commit("addListItem");
    },
    updateTextInput(el) {
      this.$store.commit("updateTextInput", el.target.value);
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
  font-weight: bold;
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
  padding: 0 14px;
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
