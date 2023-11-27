<template>
    <div class="w-full max-w-3xl mx-auto py-8">
        <div class="text-xl font-semibold">Blog Page</div>
        <div class="relative flex justify-end mb-7">
            <NuxtLink
                to="/blog/create" 
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "
                >
                Add Post
            </NuxtLink>
        </div>
        
        <div v-for="blog in data" :key="blog.id" class="relative w-full border rounded-lg p-5 mb-5">
            <div class="text-lg font-semibold mb-3">{{ blog.title }}</div>
            <p>{{ blog.content }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { BlogModel } from '../../server/model/blog';
useHead({
    title: 'Blog Page'
});


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