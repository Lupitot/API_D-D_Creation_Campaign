<template>
    <decoButton />

    <button @click=redirectProfil()>
        Profil
    </button>
    <button @click="redirectCreationCamp()">
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

    methods: {
        redirectProfil() {
            this.$router.push('/profilPage');
        },
        redirectCreationCamp() {
            localStorage.setItem('createCamp', true),
            this.$router.push('/creationCamp');
        }
    }
}

</script>

<style scoped>


</style>

