<template lang="html">
  <div class="listContainer">
    <ul class="listItemUl">
      <ListItem
        v-for="(items, index) in this.$store.state.listItemArray"
        :key="items"
        :id="items.id"
        :listItemText="items.listItemText"
        :isChecked="items.isChecked"
        :isEditState="items.isEditState"
        :tempListItemText="items.tempListItemText"
        :index="index"
      >
      </ListItem>
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
    return {};
  }
};
</script>

<style lang="scss" media="screen">
@import "../assets/styles/globalHelpers.scss";
.listItemUl {
  @include resetStyle;
}
</style>
