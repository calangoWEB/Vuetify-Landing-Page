<template>
  <section id="sobre">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" md="4" class="d-none d-md-flex justify-center">
          <v-img src="@/assets/img/profile_analysis_.svg" max-width="400px" />
        </v-col>
        <v-col cols="12" sm="10" md="8" class="text-center">
          <h1 class="display-1 font-weight-light mb-6">Quem somos</h1>
          <p class="body-1 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At tempora
            quia quaerat eaque possimus exercitationem eius aut veritatis fuga
            suscipit? Necessitatibus nesciunt dolores obcaecati accusantium
            maxime accusamus, reprehenderit dolor cum.
          </p>
          <p class="body-1 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At tempora
            quia quaerat eaque possimus exercitationem eius aut veritatis fuga
            suscipit? Necessitatibus nesciunt dolores obcaecati accusantium
            maxime accusamus, reprehenderit dolor cum.
          </p>
          <v-btn
            rounded
            outlined
            class="ma-6"
            color="primary"
            @click="$vuetify.goTo('#contatos')"
            >Contate-nos</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-rounded text-light">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 144.54 17.34"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path
          d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"
        />
      </svg>
    </div>
  </section>
</template>

<style scoped>
.svg-border-rounded svg {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  color: #eaeaea;
}
.content {
  z-index: 1;
}
svg {
  overflow: hidden;
}
section {
  position: relative;
}
</style>

<script>
export default {
  name: "Sobre",
};
</script>
