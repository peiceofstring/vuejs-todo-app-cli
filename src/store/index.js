import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    startingId: 3,
    textInput: "",
    originalText: "",
    listItemArray: [
      {
        id: 0,
        listItemText: "First Item",
        isChecked: false,
        isEditState: false,
        index: "",
        originalListItemText: ""
      },
      {
        id: 1,
        listItemText: "Second Item",
        isChecked: false,
        isEditState: false,
        index: "",
        originalListItemText: ""
      },
      {
        id: 2,
        listItemText: "Third Item",
        isChecked: false,
        isEditState: false,
        index: "",
        originalListItemText: ""
      }
    ]
  },
  mutations: {
    // Header
    updateTextInput(state, textInput) {
      state.textInput = textInput;
    },
    addListItem(state) {
      state.startingId++;
      console.log(state.startingId);
      state.listItemArray.push({
        id: state.startingId,
        listItemText: state.textInput,
        isChecked: false,
        isEditState: false
      });
      state.textInput = "";
    },
    // List
    shiftUp(state, index) {
      console.log(index + 1);
      state.listItemArray.copyWithin(index, index + 1);
    },
    shiftDown(state, index) {
      console.log(index - 1);
      state.listItemArray.copyWithin(index, index - 1);
    },

    removeItem(state, index) {
      console.log(index);
      state.listItemArray.splice(index, 1);
    }
  },
  actions: {},
  modules: {}
});
