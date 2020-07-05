<template>
  <div>
    <v-app-bar app :color="color" dark :flat="flat">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/img/logo.png"
          transition="scale-transition"
          width="50"
        />
      </div>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isSm"
      />
      <div v-else>
        <v-btn text @click="$vuetify.goTo('#hero', 0, 500)">
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#sobre', 0, 500)">
          <span class="mr-2">Sobre</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#servicos', 0, 500)">
          <span class="mr-2">Serviços</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#contatos', 0, 500)">
          <span class="mr-2">Contatos</span>
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      src="@/assets/img/bgn.jpg"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/img/logo.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">Calango</v-list-item-title>
            <v-list-item-subtitle>WEB</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
        <v-list-item-icon class="justify-center">
          <v-icon>{{icon}}</v-icon>
        </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-row class="text-center">
          <v-col v-for="(icon, i) in icons" :key="i">
            <v-btn icon>
              <v-icon>{{icon}}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    isSm: false,
    items: [
      ["fa-home", "Home", "#hero"],
      ["fa-info", "Sobre", "#sobre"],
      ["fa-th", "Serviços", "#servicos"],
      ["fa-envelope-o", "Contatos", "#contatos"],
    ],
    icons: [
      "fa-instagram",
      "fa-twitter",
      "fa-facebook",
    ]
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    onResize() {
      this.isSm = window.innerWidth < 960;
    },
  },
};
</script>
