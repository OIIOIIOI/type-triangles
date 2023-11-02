<script setup>
import Cell from "./Cell.vue";
import {letters} from '../letters.js';
import {onBeforeUpdate, onMounted, ref} from "vue";

const props = defineProps({
	letter: String,
	palette: Number,
});

const index = ref(0);
const ready = ref(false);

const convertLetter = () => {
	if (props.letter === '.')
		index.value = 0;
	else
		index.value = parseInt(props.letter.toLowerCase(), 36) - 9;
	ready.value = true;
};

onMounted(convertLetter);
onBeforeUpdate(convertLetter);
</script>

<template>
	<div>
		<div v-if="ready"
			 v-for="row in letters[index]"
			 class="text-[0] flex">
			<Cell v-for="cell in row"
				  :corner="cell"
				  :palette="palette"></Cell>
		</div>
	</div>
</template>

<style scoped>
</style>