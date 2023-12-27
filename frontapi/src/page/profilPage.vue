<template>
    <div>
        <h2>
            Profil
        </h2>
    </div>

    <showProfil />
    <showCampProfil />



</template>

<script>
import showProfil from "@/components/showProfil.vue";
import showCampProfil from "@/components/showCampProfil.vue";

export default {
    name: "profilPage",
    components: {
        showProfil,
        showCampProfil,
    },
};
</script>

<style scoped>
</style>