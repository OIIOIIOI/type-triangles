<script setup>
import {onMounted, ref} from "vue";

const props = defineProps({
	corner: Number,
});

const modIndex = ref(0);
const modding = ref(false);
const corners = ['', 'tl', 'tr', 'br', 'bl', 'f'];

const swapCorner = () => {
	modding.value = true;
	let i = modIndex.value + 1;
	if (i >= corners.length)
		i = 0;
	modIndex.value = i;
};

onMounted(() => {
	modIndex.value = props.corner;
});
</script>

<template>
	<div class="transition-colors duration-200 hover:bg-gray-800 cursor-pointer">
		<div v-if="modding"
			 :class="`cell mod ${corners[modIndex]}`"
			 @click.shift="modding = false"
			 @click.exact="swapCorner()"></div>
		<div v-else
			 :class="`cell ${corners[corner]}`"
			 @click="modding = true"></div>
	</div>
</template>

<style scoped>
.cell {
	@apply w-0 h-0 border-cell border-transparent inline-block;
	@apply transition-colors duration-200;

	&.br {
		@apply border-b-white border-r-white;
	}
	&.bl {
		@apply border-b-white border-l-white;
	}
	&.tr {
		@apply border-t-white border-r-white;
	}
	&.tl {
		@apply border-t-white border-l-white;
	}
	&.f {
		@apply border-white;
	}
	&.mod {
		@apply opacity-70;
	}
}
</style>