<template lang="html">
  <div class="listContainer">
    <li class="listItemStyle">
      <!-- Normal State -->
      <div v-show="!isEditState" class="normalState">
        <i
          @click="toggleCheck()"
          :class="[this.isChecked ? 'fa-square-o' : 'fa-check-square-o']"
          class="fa faSize checkMarkStyle"
        ></i>
        <span class="listItemTextStyle"> {{ listItemText }}</span>
        <i
          @click="
            toggleEditState();
            updateTempText(index);
          "
          class="fa fa-edit faSize editMarkStyle"
        ></i>
        <i
          @click="removeItem(index)"
          class="fa fa-times-rectangle faSize closeMarkStyle"
        ></i>
      </div>
      <!-- Edit State -->
      <div v-show="isEditState" class="editState">
        <input
          v-model="listItemText"
          v-on:keyup.enter="toggleEditState()"
          class="editStateInput"
          type="text"
          name=""
          value=""
        />
        <i
          @click="revertItemText(index)"
          class="fa fa-close faSize editStateCloseButton"
        ></i>
        <i
          @click="toggleEditState()"
          class="fa fa-check faSize editStateCheckButton"
        ></i>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: [
    "id",
    "listItemText",
    "isEditState",
    "isChecked",
    "index",
    "tempListItemText"
  ],
  data() {
    return {};
  },
  methods: {
    toggleEditState() {
      this.isEditState = !this.isEditState;
    },
    toggleCheck() {
      this.isChecked = !this.isChecked;
    },
    removeItem(index) {
      this.$store.commit("removeItem", index);
    },
    updateTempText(index) {
      this.$store.commit("updateTempText", index);
    },
    revertItemText(index) {
      this.$store.commit("revertItemText", index);
    }
  }
};
</script>

<style media="screen">
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
</style>
<style lang="scss" media="screen">
@import "../assets/styles/globalStyle.scss";

@mixin liStyle {
  @include listStyleReset;
  @include textLeft;
  padding: 20px 0px;
  word-wrap: break-word;
}

.listItemStyle {
  @include liStyle;
  @include bgGrey;
  padding: 10px 20px;
  border: 1px solid black;
}
.listItemTextStyle {
  margin-top: 3px;
  font-size: 23px;
  @include flexBig;
}
.faSize {
  font-size: 30px;
}

.normalState {
  @include flexContainer;
}
.checkMarkStyle {
  margin-right: 15px;
}
.editMarkStyle {
  margin: 0px 15px;
}
.closeMarkStyle {
}

@mixin editStateFaSize {
  @include resetStyle;
  font-size: 30px;
}
.editState {
  @include flexContainer;
}
.editStateInput {
  height: 30px;
  @include resetStyle;
  @include flexBig;
  border-radius: 5px;
}

.editStateCheckButton {
  @include editStateFaSize;
}

.editStateCloseButton {
  @include editStateFaSize;
  margin: 0 20px;
}
</style>
