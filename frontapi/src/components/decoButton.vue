<template>
        <button @click="deconnexion" class="deconnexionButton">
            Deconnexion
        </button>
</template>

<script>
export default {
    name: 'decoButton',
    data() {
        return {
            message: 'Déconnexion'
        }
    
    },
    methods: {
        deconnexion() {
            localStorage.removeItem('token')
            this.$router.push('/')
        }
    }
}
</script>

<style scoped> 
    .deconnexionButton {
        position: fixed;
        top: 0;
        right: 0;
        margin: 10px;
        width: auto;
        height:auto;
        padding: 8px;
        background-color: #7030bd;
        border: none;
        border-radius: 5px;
        color: rgb(224, 224, 224);
        
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
        font-weight: 500;
        transition: 0.3s ease-in-out;
    }

    .deconnexionButton:hover {
        background-color: #5a1ca6;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.878), inset 0px 0px 4px 0px rgba(0, 0, 0, 0.796);
    }

</style>
