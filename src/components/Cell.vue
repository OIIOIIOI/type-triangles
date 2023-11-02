<script setup>
import {computed, onMounted, ref} from "vue";

const props = defineProps({
	corner: Number,
	palette: Number,
});

const modIndex = ref(0);
const modding = ref(false);
const corners = ['', 'tl', 'tr', 'br', 'bl', 't', 'r', 'b', 'l', 'rbl', 'blt', 'trl', 'trb', 'f'];
const colors = [
	['text-lime-a', 'text-lime-b', 'text-lime-c', 'text-lime-d'],
	['text-orange-a', 'text-orange-b', 'text-orange-c', 'text-orange-d'],
	['text-sand-a', 'text-sand-b', 'text-sand-c', 'text-sand-d'],
	['text-purple-a', 'text-purple-b', 'text-purple-c', 'text-purple-d'],
	['text-blue-a', 'text-blue-b', 'text-blue-c', 'text-blue-d'],
];

const color = computed(() => colors[props.palette][Math.floor(Math.random() * 4)]);

const swapCorner = (direction) => {
	modding.value = true;
	let i = modIndex.value + direction;
	if (i >= corners.length)
		i = 0;
	else if (i < 0)
		i = corners.length - 1;
	modIndex.value = i;
};

onMounted(() => {
	modIndex.value = props.corner;
	console.log(props.palette);
});
</script>

<template>
	<div class="transition-colors duration-200 hover:bg-gray-800 cursor-pointer">
		<div v-if="modding"
			 :class="`cell mod ${corners[modIndex]}`"
			 @click.shift="modding = false"
			 @click.left.exact="swapCorner(1)"
			 @click.right.exact.prevent="swapCorner(-1)"></div>
		<div v-else
			 :class="`cell ${corners[corner]} ${color}`"
			 @click="modding = true"></div>
	</div>
</template>

<style scoped>
.cell {
	@apply w-0 h-0 border-cell border-transparent inline-block;
	@apply transition-colors duration-200;

	&.t { @apply border-t-current; }
	&.r { @apply border-r-current; }
	&.b { @apply border-b-current; }
	&.l { @apply border-l-current; }
	&.br { @apply border-b-current border-r-current; }
	&.bl { @apply border-b-current border-l-current; }
	&.tr { @apply border-t-current border-r-current; }
	&.tl { @apply border-t-current border-l-current; }
	&.trb { @apply border-t-current border-r-current border-b-current; }
	&.trl { @apply border-t-current border-r-current border-l-current; }
	&.rbl { @apply border-r-current border-b-current border-l-current; }
	&.blt { @apply border-b-current border-l-current border-t-current; }
	&.f { @apply border-current; }
	&.mod { @apply opacity-70; }
}
</style>