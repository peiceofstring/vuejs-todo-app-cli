<template lang="html">
  <div class="toDoApp">
    <ListHeader />
    <List />
  </div>
</template>

<script>
import ListHeader from "@/components/ListHeader.vue";
import List from "@/components/List.vue";
export default {
  name: "ToDoList",
  components: {
    ListHeader,
    List
  }
};
</script>

<style lang="css" scoped></style>
<style lang="scss" media="screen">
@import "../assets/styles/globalColors";
body {
  @include bgCharcoal;

  width: 600px;
  margin: auto;
}
</style>
