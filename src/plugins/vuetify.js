import Vue from "vue";
import Vuetify from "vuetify/lib";
import pt from "vuetify/es5/locale/pt";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#11a67c",
        secondary: "#1A1A1A",
      },
    },
  },
  lang: {
    locales: { pt },
    current: "pt",
  },
  icons: {
    iconfont: "fa4",
  },
});
