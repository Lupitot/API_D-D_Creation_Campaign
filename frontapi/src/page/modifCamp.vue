<template>

<div>
    <h2>
        Modifier votre campagne
    </h2>
</div>
    <div>
        <inputModif /> 
    </div>
    <div>
        <modifMonster />
        <button @click="this.$router.push('/addMonsterPage')">
            ajout de monstre
        </button>
    </div>

</template>

<script>
import inputModif from "@/components/inputModif.vue";
import modifMonster from "@/components/modifMonster.vue";

export default {
    name: "modifCamp",
    components: {
        inputModif,
        modifMonster
    },

};


</script>

<style scoped>
</style>