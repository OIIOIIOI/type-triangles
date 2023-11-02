<script setup>
import Letter from "./components/Letter.vue";
import {computed, ref} from "vue";

const index = ref(0);
const letter = computed(() => String.fromCharCode(97 + index.value));

const swapLetter = (direction) => {
	let i = index.value + direction;
	if (i > 25)
		i = 0;
	else if (i < 0)
		i = 25;
	index.value = i;
};

const palettes = ref([
	{ text: 'Lime', value: 0 },
	{ text: 'Orange', value: 1 },
	{ text: 'Sand', value: 2 },
	{ text: 'Purple', value: 3 },
	{ text: 'Blue', value: 4 },
]);
const palette = ref(0);

const word = ref('spider');
const wordArray = computed(() => {
	return word.value.split('');
});
</script>

<template>
	<div class="flex flex-col items-center justify-center">
		<p class="text-center italic text-gray-500 text-sm">Click on a cell to cycle through corners<br>Shift+Click to reset
		</p>
		<div class="my-8 flex flex-col items-center">
			<p class="font-bold mb-2">Experiment #1</p>
			<div class="flex gap-2 mb-4">
				<button class="px-3 py-2 bg-gray-700 rounded-lg"
						@click="swapLetter(-1)">Prev
				</button>
				<button class="px-3 py-2 bg-gray-700 rounded-lg"
						@click="swapLetter(1)">Next
				</button>
			</div>
			<Letter :letter="letter"
					palette="0"></Letter>
		</div>
		<div class="my-8 flex flex-col items-center">
			<p class="font-bold mb-2 w-64 text-center">Experiment #2</p>
			<div class="flex gap-4 mb-4">
				<input type="text"
					   class=" w-64 px-2 py-1 bg-gray-700"
					   v-model="word">
				<select v-model="palette"
						class="px-2 py-1 bg-gray-700">
					<option v-for="p in palettes"
							class="text-black"
							:value="p.value">{{ p.text }}</option>
				</select>
			</div>
			<div class="flex">
				<Letter v-for="l in wordArray"
						:letter="l"
						:palette="palette"></Letter>
			</div>
		</div>
	</div>
</template>

<style scoped>
</style>
