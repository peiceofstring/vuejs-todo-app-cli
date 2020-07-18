import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    startingId: 3,
    textInput: "",
    listItemArray: [
      {
        id: 0,
        listItemText: "First Item",
        isChecked: false,
        isEditState: false,
        index: "",
        tempListItemText: ""
      },
      {
        id: 1,
        listItemText: "Second Item",
        isChecked: false,
        isEditState: false,
        index: "",
        tempListItemText: ""
      },
      {
        id: 2,
        listItemText: "Third Item",
        isChecked: false,
        isEditState: false,
        index: "",
        tempListItemText: ""
      }
    ]
  },
  mutations: {
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
    removeItem(state, index) {
      console.log(index);
      state.listItemArray.splice(index, 1);
    },
    updateTempText(state, index) {
      state.listItemArray[index].tempListItemText =
        state.listItemArray[index].listItemText;
    },
    revertItemText(state, index) {
      state.listItemArray[index].listItemText =
        state.listItemArray[index].tempListItemText;
      state.listItemArray[index].tempListItemText = "";
    }
  },
  actions: {},
  modules: {}
});
