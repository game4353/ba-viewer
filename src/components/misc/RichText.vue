<template>
  <div v-html="formattedText"></div>
</template>

<script setup lang="ts">
import { PropMaybeResult } from "@/utils/result";
import { ERR_HANDLE } from "../warn/error";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  text: {
    type: [String, Object] as PropMaybeResult<string>,
    required: true,
  },
});

const text = computed(() => {
  if (typeof props.text === "string") return props.text;
  return props.text.unwrapOrElse(errHandle) ?? "";
});

const formattedText = computed(() => {
  return text.value
    .replace(
      /\[c\]\[([0-9a-fA-F]{6})\](.*?)\[-\]\[\/c\]/g,
      (match, color, content) => {
        return `<span style="color: #${color};">${content}</span>`;
      },
    ) // Regex to match the pattern [c][color code]xxx[-][/c]
    .replace(/\n/g, "<br>"); // Replace \n with <br> tags
});
</script>
