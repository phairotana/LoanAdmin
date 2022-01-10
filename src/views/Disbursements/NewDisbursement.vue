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
                  <h3 class="mb-0">Create Disbursement</h3>
                </div>
              </div>
            </div>
          </template>
          <form>
            <div class="pl-lg-4">
              <div class="row">
                <div class="col-lg-6 mb-4">
                  <label for="Product Name">Customer</label>
                  <Multiselect
                    class="form-control form-control-alternative"
                    v-model="v$.selectCusName.value.$model"
                    v-bind="selectCusName"
                  ></Multiselect>
                  <!-- Error Message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.selectCusName.value.$errors"
                    :key="index"
                  >
                    <div class="error-msg text-danger text-sm">
                      {{ error.$message }}
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <label for="Product Name">Product Name</label>
                  <Multiselect
                    class="form-control form-control-alternative"
                    v-model="v$.selectProduct.value.$model"
                    v-bind="selectProduct"
                  ></Multiselect>
                  <!-- Error Message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.selectProduct.value.$errors"
                    :key="index"
                  >
                    <div class="error-msg text-danger text-sm">
                      {{ error.$message }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <base-input
                    type="number"
                    alternative=""
                    label="Disbursed Amount"
                    input-classes="form-control-alternative"
                    v-model="v$.disbursementData.balance.$model"
                  >
                  </base-input>
                  <!-- Error Message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.disbursementData.balance
                      .$errors"
                    :key="index"
                  >
                    <div class="error-msg text-danger text-sm">
                      {{ error.$message }}
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <label for="Currency">Currency</label>
                  <Multiselect
                    class="form-control form-control-alternative"
                    v-model="v$.selectCurrency.value.$model"
                    v-bind="selectCurrency"
                  ></Multiselect>
                  <!-- Error Message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.selectCurrency.value.$errors"
                    :key="index"
                  >
                    <div class="error-msg text-danger text-sm">
                      {{ error.$message }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    label="Duration"
                    type="number"
                    input-classes="form-control-alternative"
                    v-model="v$.disbursementData.duration.$model"
                  >
                  </base-input>
                  <!-- Error Message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.disbursementData.duration
                      .$errors"
                    :key="index"
                  >
                    <div class="error-msg text-danger text-sm">
                      {{ error.$message }}
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <label for="Interest Period">Duration Period</label>
                  <Multiselect
                    class="form-control form-control-alternative"
                    v-model="v$.selectDurationPeriod.value.$model"
                    v-bind="selectDurationPeriod"
                  ></Multiselect>
                  <!-- Error Message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.selectDurationPeriod.value
                      .$errors"
                    :key="index"
                  >
                    <div class="error-msg text-danger text-sm">
                      {{ error.$message }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    label="Interest Rate (%)"
                    type="number"
                    input-classes="form-control-alternative"
                    v-model="v$.disbursementData.interest_rate.$model"
                  >
                  </base-input>
                  <!-- Error Message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.disbursementData.interest_rate
                      .$errors"
                    :key="index"
                  >
                    <div class="error-msg text-danger text-sm">
                      {{ error.$message }}
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <label for="Interest Period">Interest Period</label>
                  <Multiselect
                    class="form-control form-control-alternative"
                    v-model="v$.selectInterestPeriod.value.$model"
                    v-bind="selectInterestPeriod"
                  ></Multiselect>
                  <!-- Error Message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.selectInterestPeriod.value
                      .$errors"
                    :key="index"
                  >
                    <div class="error-msg text-danger text-sm">
                      {{ error.$message }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    type="number"
                    label="Fee Rate (%)"
                    input-classes="form-control-alternative"
                    v-model="v$.disbursementData.fee_rate.$model"
                  >
                  </base-input>
                  <!-- Error Message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.disbursementData.fee_rate
                      .$errors"
                    :key="index"
                  >
                    <div class="error-msg text-danger text-sm">
                      {{ error.$message }}
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <base-input
                    type="number"
                    alternative=""
                    label="Frequency"
                    input-classes="form-control-alternative"
                    v-model="v$.disbursementData.frequency.$model"
                  >
                  </base-input>
                           <!-- Error Message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.disbursementData.frequency
                      .$errors"
                    :key="index"
                  >
                    <div class="error-msg text-danger text-sm">
                      {{ error.$message }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <label for="Nationality">Repayment Method</label>
                  <Multiselect
                    class="form-control form-control-alternative"
                    v-model="v$.selectRepaymentMethod.value.$model"
                    v-bind="selectRepaymentMethod"
                  ></Multiselect>
                  <!-- Error Message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.selectRepaymentMethod.value
                      .$errors"
                    :key="index"
                  >
                    <div class="error-msg text-danger text-sm">
                      {{ error.$message }}
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    type="date"
                    label="Disbursed Date"
                    input-classes="form-control-alternative"
                    v-model="v$.disbursementData.dis_date.$model"
                  >
                  </base-input>
                  <!-- Error Message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.disbursementData.dis_date
                      .$errors"
                    :key="index"
                  >
                    <div class="error-msg text-danger text-sm">
                      {{ error.$message }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    type="date"
                    label="First Payment Date"
                    input-classes="form-control-alternative"
                    v-model="v$.disbursementData.first_date.$model"
                  >
                  </base-input>
                  <!-- Error Message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.disbursementData.first_date
                      .$errors"
                    :key="index"
                  >
                    <div class="error-msg text-danger text-sm">
                      {{ error.$message }}
                    </div>
                  </div>
                </div>
              </div>
              <button
                v-on:click="createDisbursement"
                type="button"
                class="btn btn-primary"
              >
                <em class="fas fa-save"></em>
                Save
              </button>
              <button
                v-on:click="onCancel"
                type="button"
                class="btn btn-secondary"
              >
                <em class="fas fa-window-close"></em>
                Cancel
              </button>
            </div>
          </form>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import httpAxios from "@/utils/http-axios";
import Multiselect from "@vueform/multiselect";
import store from "@/store";
import $ from "jquery";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const fetchCustomer = async (query) => {
  let where = "";
  if (query) {
    where =
      "id=" +
      encodeURIComponent(
        JSON.stringify({
          firstName: {
            $regex: `${query}|${query.toUpperCase()}|${
              query[0].toUpperCase() + query.slice(1)
            }`,
          },
        })
      );
  }
  const response = await fetch("https://global-loan.herokuapp.com/customer?" + where, {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": "token-value",
      Authorization: "Bearer " + store.getters.getLoggedUser.access_token,
    },
  });
  const data = await response.json(); // Here you have the data that you need
  return data.data.map((item) => {
    return { value: item.id, label: item.first_name };
  });
};

export default {
  name: "New disbursement",
  components: {
    Multiselect,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      selectProduct: {
        value: null,
        options: ["Personal", "Representative"],
      },
      selectCurrency: {
        value: null,
        options: ["USD", "RIEL"],
      },
      selectDurationPeriod: {
        value: null,
        options: ["Monthy", "Yearly"],
      },
      selectInterestPeriod: {
        value: null,
        options: ["Monthy", "Yearly"],
      },
      selectRepaymentMethod: {
        value: null,
        options: ["Balloon", "Bullet"],
      },
      selectCusName: {
        value: null,
        placeholder: "Choose a customer",
        filterResults: false,
        minChars: 1,
        resolveOnLoad: false,
        delay: 0,
        searchable: true,
        options: async (query) => {
          return fetchCustomer(query);
        },
      },
      disbursementData: {
        product_type: "",
        interest_rate: "",
        balance: "",
        currency: "",
        frequency: "",
        duration: "",
        fee_rate: "",
        dis_date: "",
        first_date: "",
      },
    };
  },
  validations() {
    return {
      selectCusName: {
        value: { required },
      },
      selectProduct: {
        value: { required },
      },
      selectCurrency: {
        value: { required },
      },
      selectDurationPeriod: {
        value: { required },
      },
      selectInterestPeriod: {
        value: { required },
      },
      selectRepaymentMethod: {
        value: { required },
      },
      disbursementData: {
        balance: { required },
        duration: { required },
        interest_rate: { required },
        frequency: { required },
        fee_rate: { required },
        dis_date: { required },
        first_date: { required },
      },
    };
  },
  methods: {
    async createDisbursement() {
      var vm = this;
      vm.v$.selectCusName.$touch();
      vm.v$.selectProduct.$touch();
      vm.v$.selectCurrency.$touch();
      vm.v$.selectDurationPeriod.$touch();
      vm.v$.selectInterestPeriod.$touch();
      vm.v$.selectRepaymentMethod.$touch();
      vm.v$.disbursementData.$touch();
      const response = await httpAxios
        .post("disbursement", {
          cus_id: vm.selectCusName.value,
          product_type: vm.selectProduct.value,
          repayment_method: vm.selectRepaymentMethod.value,
          interest_rate: vm.disbursementData.interest_rate,
          balance: vm.disbursementData.balance,
          duration_period: vm.selectDurationPeriod.value,
          interest_period: vm.selectInterestPeriod.value,
          currency: vm.selectCurrency.value,
          frequency: vm.disbursementData.frequency,
          duration: vm.disbursementData.duration,
          fee_rate: vm.disbursementData.fee_rate,
          dis_date: vm.disbursementData.dis_date,
          first_date: vm.disbursementData.first_date,
        })
        .catch(function (error) {
          vm.$notify({ type: "error ", text: "Create disbursement failed!" });
        });
      if (response.data.success) {
        vm.$notify({
          type: "success",
          text: "The Loan create successfully!",
        });
        vm.$router.push("/disbursed");
      } else {
        vm.$notify({ type: "error ", text: "Create disbursement failed!" });
      }
    },
    onCancel() {
      this.show = false;
      this.$router.push("/disbursed");
    },
  },
};
</script>
