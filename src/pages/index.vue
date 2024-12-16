<template>
  <div class="flex flex-row w-screen">
    <v-container>
      <v-row class="row1">
        <v-col cols="4">
          <v-sheet rounded="xl" :color="darkColors[0]">
            BA Viewer ver 0.2.0.<br />
            This website is still working in progress.
            <!-- intro -->
          </v-sheet>
        </v-col>
        <v-col cols="4">
          <v-sheet rounded="xl" :color="darkColors[1]">
            <!-- event -->
          </v-sheet>
        </v-col>
        <v-col cols="4">
          <v-sheet rounded="xl" :color="darkColors[2]">
            <!-- timeline -->
          </v-sheet>
        </v-col>
      </v-row>
      <v-row class="row2">
        <v-col cols="4">
          <v-sheet rounded="xl" :color="darkColors[3]">
            <!-- contact -->
          </v-sheet>
        </v-col>
        <v-col cols="4">
          <v-sheet rounded="xl" :color="darkColors[4]">
            <!-- link -->
          </v-sheet>
        </v-col>
        <v-col cols="4">
          <v-sheet rounded="xl" :color="darkColors[5]">
            <HomeBirthday />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <div class="twitter">
      <a
        class="twitter-timeline"
        data-width="400"
        :data-height="twitterH"
        data-theme="dark"
        href="https://twitter.com/Blue_ArchiveJP?ref_src=twsrc%5Etfw"
        >Loading posts by Blue_ArchiveJP...</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
onMounted(() => {
  // Ensure the Twitter widget script is loaded and executed
  // @ts-ignore
  if (window.twttr) {
    // @ts-ignore
    window.twttr.widgets.load();
  }
});
const twitterH = window.innerHeight * 0.9 - 20;

// const lightColors = [
//   "#ADD8E6",
//   "#90EE90",
//   "#F08080",
//   "#FFFFE0",
//   "#FFB6C1",
//   "#E6E6FA",
// ];

const darkColors = [
  "#4B008280",
  "#00640080",
  "#8B000080",
  "#00008B80",
  "#FF8C0080",
  "#2F4F4F80",
];
</script>

<style scoped lang="scss">
.twitter {
  @apply max-w-full m-4;
}
.row1 {
  height: calc(90vh - 200px);
}
.row2 {
  height: 200px;
}
.v-sheet {
  @apply p-5 h-full;
}
</style>
