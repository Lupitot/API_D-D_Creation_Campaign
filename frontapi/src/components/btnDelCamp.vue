<template>
    <div>
        <button @click="recupCampId(campId)">
            Supprimer la campagne
        </button>
    </div>
</template>

<script>
import delCamp from "@/services/delCampService.js";

export default {
    name: "btnDelCamp",
    props: ['campId'],

    methods: {
        deleteCamp() {
            console.log("deleteCamp");
            const campId = localStorage.getItem("currentCampId");
            delCamp(campId)
                .then((response) => {
                    console.log("response dans le delcamp",response);
                    this.$emit('campDeleted');
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        recupCampId(campId) {
            localStorage.setItem("currentCampId", campId);
            this.deleteCamp();
        },
    },
};
</script>

<style scoped>

</style>