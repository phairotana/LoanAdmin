<template>
  <div>
    <base-header
      class="header pb-7 pt-lg-7 d-flex align-items-center"
      style="
        min-height: 10px;
        background-image: url(img/theme/profile-cover.jpg);
        background-size: cover;
        background-position: center top;
      "
    >
      <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
      <!-- Header container -->
    </base-header>

    <div class="container-fluid mt--7">
      <div class="col-xl-12 order-xl-1">
        <card shadow type="secondary">
          <template v-slot:header>
            <div class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-12">
                  <router-link
                    title="Add New"
                    to="/new-customer"
                    class="btn btn-primary btn-sm mb-2"
                    ><em class="far fa-plus-square"></em
                  ></router-link>
                </div>
              </div>
              <div style="overflow-x: auto">
                <table
                  class="table table-striped Disbursed-table-sticky"
                  id="dtHorizontalExample"
                >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Date of Birth</th>
                      <th scope="col">phone</th>
                      <th scope="col">Email</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in cusList" :key="item.id">
                      <th scope="" v-text="index + 1"></th>
                      <td v-text="item.first_name + ' ' + item.last_name"></td>
                      <td v-text="item.gender"></td>
                      <td v-text="formatDate(item.dob)"></td>
                      <td v-text="item.phone"></td>
                      <td v-text="item.email"></td>
                      <td>
                        <router-link
                          v-bind:to="'/customer/' + item.id + '/show'"
                          class="btn btn-sm btn-info"
                        >
                          <em class="far fa-eye"></em>
                        </router-link>
                        <router-link
                          v-bind:to="'/customer/' + item.id + '/edit'"
                          class="btn btn-sm btn-primary"
                        >
                          <em class="far fa-edit"></em>
                        </router-link>
                        <button
                          v-on:click="deleteCustomer(item.id)"
                          class="btn btn-sm btn-danger"
                          type="button"
                        >
                          <em class="far fa-trash-alt"></em>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </template>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import httpAxios from "@/utils/http-axios";
import moment from "moment";
export const sweetalertConfig = function (alertText) {
  return {
      title: "Confirmation",
      text: alertText,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      reverseButtons: true
  };
};

export default {
  name: "List Customer",
  data: function () {
    return {
      cusList: {},
    };
  },
  methods: {
    formatDate(date) {
      return moment(date).format("DD-MM.YYYY");
    },
    getCustomers() {
      var self = this;
      httpAxios
        .get("customer")
        .then(function (response) {
          self.cusList = response.data.data;
        })
        .catch(function (error) {
          console.log(error.message);
        });
    },
    deleteCustomer(cus_id) {
      var self = this;

      self
        .$swal(sweetalertConfig("Are you sure you want to delete this customer?"))
        .then((result) => {
          if (result.value) {
            httpAxios
              .delete("customer/" + cus_id)
              .then(function (response) {
                if (response.data.message == "Customer is active") {
                  self.$notify({
                    type: "warn",
                    text: "You cannot delete a customer that have loan",
                  });
                } else if (response.data.success) {
                  self.$notify({
                    type: "success",
                    text: "Customer has been deleted!",
                  });
                } else {
                  self.$notify({
                    type: "error",
                    text: "Deleting customer failed!",
                  });
                }
                self.getCustomers();
              })
              .catch(function (error) {
                self.$notify({
                  type: "error",
                  text: "Deleting customer failed!",
                });
              });
          } else {
            //
          }
        });
    },
  },
  created() {
    this.getCustomers();
  },
};
</script>
