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
                    to="/new-disbursement"
                    class="btn btn-primary btn-sm mb-2"
                    title="Add New"
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
                      <th scope="col">Disbursed Code</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Disbursed Amount</th>
                      <th scope="col">Currency</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Repayment Method</th>
                      <th scope="col">Interest Rate</th>
                      <th scope="col">Admin Fee Rate</th>
                      <th scope="col">Disbursed Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in disData" :key="item.dis_id">
                      <th scope="row" v-text="index + 1"></th>
                      <td v-text="item.dis_code"></td>
                      <td v-text="item.product_type"></td>
                      <td
                        v-text="item.cus_firstname + ' ' + item.cus_lastname"
                      ></td>
                      <td>{{ formatCurrency(item.balance, "$") }}</td>
                      <td v-text="item.currency"></td>
                      <td
                        v-text="item.duration + ' Months'"
                        v-if="item.duration > 1"
                      ></td>
                      <td v-text="item.duration + ' Month'" v-else></td>
                      <td v-text="item.repayment_method"></td>
                      <td v-text="item.interest_rate + ' %'"></td>
                      <td v-text="item.fee_rate + ' %'"></td>
                      <td>{{ formatDate(item.dis_date) }}</td>
                      <td
                        v-text="item.status"
                        class="font-weight-bold text-success"
                      ></td>
                      <td>
                        <router-link
                          v-bind:to="'/disbursed/' + item.dis_id + '/show'"
                          class="btn btn-sm btn-info"
                          title="Preview"
                        >
                          <em class="far fa-eye"></em>
                        </router-link>
                        <button
                          v-on:click="deleteDisbursed(item.dis_id)"
                          type="button"
                          class="btn btn-sm btn-danger"
                          title="Delete"
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
import $ from "jquery";
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
  name: "List disbursed",
  data: function () {
    return {
      disData: {},
    };
  },
  created() {
    this.getDisbursed();
  },
  methods: {
    formatDate(date) {
      return moment(date).format("DD-MM.YYYY");
    },
    formatCurrency(value, symbol, $sign = true) {
      if (!$.isNumeric(value)) {
        value = 0;
      }
      if (symbol === "$") {
        let val = (value / 1).toFixed(2).replace(",", ".");
        if ($sign) {
          return "$" + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      }
    },
    getDisbursed() {
      var self = this;
      httpAxios
        .get("disbursement")
        .then(function (response) {
          self.disData = response.data.data;
        })
        .catch(function (error) {
          console.log(error.message);
        });
    },
    deleteDisbursed(dis_id) {
      var self = this;
      self.$swal(
        sweetalertConfig("Are you sure you want to delete this loan?")
      ).then((result) => {
        if (result.value) {
          httpAxios
            .delete("disbursement/" + dis_id)
            .then(function (response) {
              if (response.data.success) {
                self.$notify({
                  type: "success",
                  text: "Disbursement has been deleted!",
                });
              } else {
                self.$notify({
                  type: "error",
                  text: "Delete disbursement failed!",
                });
              }
              self.getDisbursed();
            })
            .catch(function (error) {
              self.$notify({
                type: "error",
                text: "Delete disbursement failed!",
              });
            });
        } else {
          //
        }
      });
    },
  },
};
</script>
