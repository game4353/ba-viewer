<script setup lang="ts">
import { ERR_501 } from "@/components/warn/error";

const route = useRoute();
const error501 = inject(ERR_501)!;
error501(route.fullPath);
</script>
