<script setup>
import { ref } from 'vue';
import usePoints from '../../composables/usePoints';

const selectedAmount = ref(null);
const {addBalance} = usePoints();

const handleAddingBalance = async () => {
    if (!selectedAmount.value) return;

    await addBalance(selectedAmount.value);
}
</script>

<template>
    <section class="navbar__points__modal">
        <header class="navbar__points__modal__heading">
            Add Balance
        </header>
        <section>
            <form @submit.prevent="handleAddingBalance">
                <div class="points__selectors">
                    <div class="flex-grow">
                        <input v-model.number="selectedAmount" class="points__selector" value="1000" type="radio" name="points1000" id="points1000" />
                        <label class="points__selector" for="points1000">1000</label>
                    </div>
                    <div class="flex-grow">
                        <input v-model.number="selectedAmount" class="points__selector"  value="5000" type="radio" name="points5000" id="points5000" />
                        <label class="points__selector" for="points5000">5000</label>
                    </div>
                    <div class="flex-grow">
                        <input v-model.number="selectedAmount" class="points__selector" value="7500" type="radio" name="points7500" id="points7500" />
                        <label class="points__selector" for="points7500">7500</label>
                    </div>
                </div>
                <button type="submit" class="points__button" :disabled="!selectedAmount">
                    Add Points
                </button>
            </form>
        </section>
    </section>
</template>
