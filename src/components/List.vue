<template lang="html">
  <div class="listContainer">
    <ul class="listItemUl">
      <ListItem list-item-text=" First Item "> </ListItem>
      <ListItem list-item-text="Second Item" />
    </ul>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";
export default {
  name: "List",
  components: {
    ListItem
  },
  data() {
    return {
      listItemText: "hello"
    };
  }
};
</script>

<style lang="scss" media="screen">
@import "../assets/styles/globalHelpers.scss";
.listItemUl {
  @include resetStyle;
}
</style>
