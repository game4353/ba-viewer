<template>
  <div v-html="formattedText"></div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

const formattedText = computed(() => {
  return props.text
    .replace(
      /\[c\]\[([0-9a-fA-F]{6})\](.*?)\[-\]\[\/c\]/g,
      (match, color, content) => {
        return `<span style="color: #${color};">${content}</span>`;
      },
    ) // Regex to match the pattern [c][color code]xxx[-][/c]
    .replace(/\n/g, "<br>"); // Replace \n with <br> tags
});
</script>
