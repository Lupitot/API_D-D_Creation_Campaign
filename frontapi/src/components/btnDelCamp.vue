<template>
  <button class="contentDel" @click="recupCampId(campId)">
    <img src="../assets/trash.png" alt="trash" />
  </button>
</template>

<script>
import delCamp from "@/services/delCampService.js";

export default {
  name: "btnDelCamp",
  props: ["campId"],

  methods: {
    deleteCamp() {
      console.log("deleteCamp");
      const campId = localStorage.getItem("currentCampId");
      delCamp(campId)
        .then((response) => {
          console.log("response dans le delcamp", response);
          this.$emit("campDeleted");
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
.contentDel {
  position: relative;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  color: var(--var-color4);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: var(--var-color3);
  cursor: pointer;
  padding: 10px;
}

.contentDel:hover {
  background-color: #f05454c4;
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
}

.contentDel img {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
