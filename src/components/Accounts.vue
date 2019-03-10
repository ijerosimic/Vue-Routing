<template>
  <div>
    <p>This is an accounts page</p>Account ID:
    <input type="number" v-bind="accountID">
    <br>
    <router-link class="btn btn-primary" tag="button" :to="accountDetails">Account details</router-link>
    <button class="btn btn-info" @click="openDetails()">Acces details</button>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  data() {
    return {
      accountID: 0,
      accountDetails: {
        name: "accountDetails",
        params: { id: 5 }
      }
    };
  },
  methods: {
    openDetails() {
      this.$router.push("accounts/5", () => {
        alert("completed");
      });
    }
  }
};
</script>
