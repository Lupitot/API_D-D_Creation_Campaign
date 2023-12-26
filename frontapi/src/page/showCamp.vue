<template>
    <decoButton />

    <button @click="this.$router.push('/profilPage')">
        Profil
    </button>
    <button @click="this.$router.push('/creationCamp')">
        Créer une campagne
    </button>
    <div>
        les campagnes
    </div>
    
    <showAllCamp />
</template>

<script>
import showAllCamp from '@/components/showAllCamp.vue';
import decoButton from "@/components/decoButton.vue";


export default {
    name : "ShowCamp",
    components: {
        showAllCamp,
        decoButton,
    },
}

</script>

<style scoped>


</style>

