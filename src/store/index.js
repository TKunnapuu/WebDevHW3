import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    postList: [
      {
        id: 0,
        date: "Sept 1, 2021 13:20",
        image: "img1",
        caption: "Water on Mars :D",
      },
      {
        id: 1,
        date: "Jan 4, 2021 20:22",
        image: "meme",
        caption: "Moths!!!!!!!",
      },
      {
        id: 2,
        date: "Dec 25, 2021 00:31",
        image: "img2",
        caption: "Hi, first post",
      },
      {
        id: 3,
        date: "Sept 15, 2021 02:59",
        image: "img3",
        caption: "Hehe xd",
      },
      {
        id: 4,
        date: "Aug 29, 2021 15:50",
        image: "img4",
        caption: "Nr 1 page",
      },
      {
        id: 5,
        date: "Nov 31, 2021 17:45",
        image: "img5",
        caption: "Look at my meme",
      },
      {
        id: 6,
        date: "Nov 30, 2021 12:37",
        image: "img6",
        caption: "like plz",
      },
      {
        id: 7,
        date: "Sept 25, 2021 05:24",
        image: "img7",
        caption: "Hi",
      },
      {
        id: 8,
        date: "Sept 11, 2021 10:01",
        image: "img8",
        caption: "sup",
      },
      {
        id: 9,
        date: "Sept 8, 2021 21:08",
        image: "img9",
        caption: "This is caption",
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
