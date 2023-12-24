<template>
  <div>
    {{ name }}
    {{ email }}
  </div>
</template>

<script>
import { getProfil } from "../services/profilService";

export default {
  name: "showProfil",
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    loadProfil() {
      const idUser = localStorage.getItem("idUser");
      getProfil(idUser).then((user) => {
        this.name = user.name;
        this.email = user.email;
      });
    },
  },
  created() {
    this.loadProfil();
  },
};
</script>

<style scoped></style>
