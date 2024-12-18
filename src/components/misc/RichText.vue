<template>
  <div v-html="formattedText"></div>
</template>

<script setup lang="ts">
import { PropMaybeResult } from "@/utils/result/result";
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
        const c = changeBrightness("#" + color, () => 0.7);
        return `<span style="color: ${c};">${content}</span>`;
      },
    ) // Regex to match the pattern [c][color code]xxx[-][/c]
    .replace(/\n/g, "<br>"); // Replace \n with <br> tags
});

function changeBrightness(hexColor: string, fn: (l: number) => number): string {
  // Helper to clamp a value between 0 and 255
  const clamp = (value: number): number => Math.min(255, Math.max(0, value));

  // Parse the hex color into RGB components
  const r = parseInt(hexColor.substring(1, 3), 16);
  const g = parseInt(hexColor.substring(3, 5), 16);
  const b = parseInt(hexColor.substring(5, 7), 16);

  // Convert RGB to HSL
  const [h, s, l] = rgbToHsl(r, g, b);

  // change brightness (lightness)
  const reversedL = fn(l);

  // Convert back to RGB
  const [newR, newG, newB] = hslToRgb(h, s, reversedL);

  // Format as hex and return
  return `#${clamp(newR).toString(16).padStart(2, "0")}${clamp(newG).toString(16).padStart(2, "0")}${clamp(newB).toString(16).padStart(2, "0")}`;
}

// Converts RGB to HSL
function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0,
    s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
}

// Converts HSL to RGB
function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  let r: number, g: number, b: number;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number): number => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
</script>
