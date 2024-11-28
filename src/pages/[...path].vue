<script setup lang="ts">
import { ERR_404 } from "@/components/warn/error";

const route = useRoute<"/[...path]">();
const error404 = inject(ERR_404)!;
error404(route.fullPath);
</script>
