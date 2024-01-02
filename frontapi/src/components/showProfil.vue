<template>
  <div class="infoUser">
    {{ name }}
    <button class="modif" @click="nameModif = true">modiName</button>
    <input class="inputModif" v-if="nameModif" type="text" v-model="newName" />
    <button class="modif" v-if="nameModif" @click="modifyProfil('name', newName)">
      Submit
    </button>

    {{ email }}
    <button class="modif" @click="emailModif = true">modiEmail</button>
    <input class="inputModif" v-if="emailModif" type="text" v-model="newEmail" />
    <button class="modif" v-if="emailModif" @click="modifyProfil('email', newEmail)">
      Submit
    </button>
  </div>

  <button class="btnShow" @click="this.$router.push('/showCamp')">
    Voir toutes les campagnes
  </button>
</template>

<script>
import { getProfil } from "../services/profilService";
import modifUser from "../services/modifUserService";

export default {
  name: "showProfil",
  data() {
    return {
      name: "",
      email: "",
      newName: "",
      newEmail: "",
      nameModif: false,
      emailModif: false,
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
    modifyProfil(data, value) {
      console.log("Modifying user:", data, value);
      modifUser(localStorage.getItem("idUser"), data, value).then(
        (response) => {
          if (response) {
            console.log("API response", response);
            if (data === "name") {
              console.log("Setting name in localStorage:", response.user.name);
              this.name = response.user.name;
              localStorage.setItem("name", response.user.name);
              this.nameModif = false;
              this.newName = "";
              this.loadProfil();
            } else {
              this.email = response.user.email;
              localStorage.setItem("email", response.user.email);
              this.emailModif = false;
              this.newEmail = "";
              this.loadProfil();
            }
          } else {
            console.log("invalid response", response);
          }
        }
      );
    },
  },
  created() {
    this.loadProfil();
  },
};
</script>

<style scoped>

.infoUser {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: auto;
  width: auto;


  gap: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;

}


.btnShow {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: auto;
  width: auto;
  padding: 1rem;
  position: absolute;
  top: 0;
  left : 3rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: var(--var-color2);
  color: var(--var-color4);
  font-size: 1rem;
  font-weight: bold;

}


.btnShow:hover {
  background-color: #4d84ecb3;
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  color: var(--var-color4);
}

.modif {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: auto;
  width: auto;
  padding: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: var(--var-color2);
  color: var(--var-color4);
  font-size: 1rem;
  font-weight: bold;
}

.inputModif {
  width: 20rem;
  height: 3.5rem;
  margin: 1rem;
  padding: 1rem;
  border-radius: 20px;
  box-direction: none;
  border: 1px solid rgba(88, 88, 88, 0.901);
  box-shadow: inset 0px 0px 2px 0px var(--var-color2);
}



</style>
