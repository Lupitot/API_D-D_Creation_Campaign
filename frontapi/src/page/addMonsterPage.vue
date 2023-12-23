<template>
    <div>
        <add-monster />
    </div>
</template>

<script>
import addMonster from '@/components/addMonster.vue';

export default {
    name: 'addMonsterPage',
    components: {
        'add-monster': addMonster,
    },
}
</script>

<style>
</style>