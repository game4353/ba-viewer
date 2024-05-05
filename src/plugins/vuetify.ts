/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "vuetify/styles";
import "../styles/tw.scss";
import "../styles/_font.scss";

// Composables
import { createVuetify } from "vuetify";
import { mdi } from "vuetify/iconsets/mdi";
import { fa } from "vuetify/iconsets/fa-svg";
import { customSVGs } from "../assets/icons/customSvgs";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "dark",
  },
  icons: {
    defaultSet: "mdi",
    sets: {
      mdi,
      fa,
      custom: customSVGs,
    },
  },
});
