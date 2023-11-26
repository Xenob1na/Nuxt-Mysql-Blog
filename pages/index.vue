<template>
    <h1 class="text-3xl">
        {{ data }}
    </h1>
</template>

<script setup lang="ts">
import type { BlogModel } from '../server/model/blog';

const data = ref<BlogModel[]>([]);

const fetchData = async () => {
    try {
        const result = await $fetch('/api/blog');
        data.value = result.data as BlogModel[];
    } catch (error) {
        alert('Error')
    }
}
onMounted(fetchData);
</script>