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
                  <h3 class="mb-0">Update Customer</h3>
                </div>
              </div>
            </div>
          </template>
          <form class="add-customer">
            <div class="pl-lg-4">
              <div class="row">
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    label="Frist Name"
                    input-classes="form-control-alternative"
                    v-model="v$.cusData.first_name.$model"
                  >
                  </base-input>
                  <!-- Error Message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.cusData.first_name.$errors"
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
                    label="Last Name"
                    input-classes="form-control-alternative"
                    v-model="v$.cusData.last_name.$model"
                  >
                  </base-input>
                  <!-- Error Message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.cusData.last_name.$errors"
                    :key="index"
                  >
                    <div class="error-msg text-danger text-sm">
                      {{ error.$message }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 mb-4">
                  <label class="font-weight-bold" for="Gender">Gender</label>
                  <Multiselect
                    class="form-control form-control-alternative"
                    v-model="v$.selectGender.value.$model"
                    v-bind="selectGender"
                  ></Multiselect>
                  <!-- Error Message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.selectGender.value.$errors"
                    :key="index"
                  >
                    <div class="error-msg text-danger text-sm">
                      {{ error.$message }}
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <base-input
                    type="date"
                    alternative=""
                    label="Date of Birth"
                    input-classes="form-control-alternative"
                    v-model="v$.cusData.dob.$model"
                  >
                  </base-input>
                  <!-- Error Message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.cusData.dob.$errors"
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
                  <label class="font-weight-bold" for="Phone">Phone</label>
                  <vue-tel-input
                    class="form-control form-control-alternative"
                  ></vue-tel-input>
                </div>
                <div class="col-lg-6">
                  <base-input
                    type="email"
                    alternative=""
                    label="Email Address"
                    input-classes="form-control-alternative"
                    v-model="v$.cusData.email.$model"
                  >
                  </base-input>
                  <!-- Error Message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.cusData.email.$errors"
                    :key="index"
                  >
                    <div class="error-msg text-danger text-sm">
                      {{ error.$message }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 mb-4">
                  <label class="font-weight-bold" for="Nationality"
                    >Nationality</label
                  >
                  <Multiselect
                    class="form-control form-control-alternative"
                    v-model="selectNationality.value"
                    v-bind="selectNationality"
                  ></Multiselect>
                </div>
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    type="text"
                    label="Cccupation"
                    input-classes="form-control-alternative"
                    v-model="cusData.occupation"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <base-input
                    type="number"
                    alternative=""
                    label="Income"
                    input-classes="form-control-alternative"
                    v-model.number="cusData.income"
                  />
                </div>
                <div class="col-lg-6">
                  <base-input
                    type="number"
                    alternative=""
                    label="Expense"
                    input-classes="form-control-alternative"
                    v-model.number="cusData.expense"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 mb-4">
                  <label for="Identity Type">Identity Type</label>
                  <Multiselect
                    class="form-control form-control-alternative"
                    v-model="identityType.value"
                    v-bind="identityType"
                  ></Multiselect>
                </div>
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    label="Identity Number"
                    input-classes="form-control-alternative"
                    v-model="cusData.identity_number"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    type="date"
                    label="Issue Date"
                    input-classes="form-control-alternative"
                    v-model="cusData.issue_date"
                  />
                </div>
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    type="date"
                    label="Issue Expired Date"
                    input-classes="form-control-alternative"
                    v-model="cusData.issue_expired"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <base-input
                    type="text"
                    alternative=""
                    label="House Number"
                    input-classes="form-control-alternative"
                    v-model="cusData.house_no"
                  />
                </div>
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    type="text"
                    label="Street Number"
                    input-classes="form-control-alternative"
                    v-model="cusData.street_no"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <base-input
                    alternative=""
                    label="Address"
                    input-classes="form-control-alternative"
                    v-model="cusData.address"
                  />
                </div>
                <div class="col-lg-12">
                  <base-input
                    alternative=""
                    type="file"
                    label="Profile"
                    input-classes="form-control-alternative"
                    v-model="cusData.profile_img"
                  />
                </div>
              </div>
              <button
                @click="updateCustomer()"
                type="button"
                class="btn btn-primary"
              >
                <em class="fas fa-save"></em>
                Update
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
import $ from "jquery";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export function validName(name) {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)) {
    return true;
  }
  return false;
}

export default {
  name: "Update Customer",
  components: {
    Multiselect,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      selectGender: {
        value: null,
        options: ["Male", "Female"],
      },
      selectNationality: {
        value: null,
        options: ["Khmer", "Chinese"],
      },
      identityType: {
        value: null,
        options: ["ID Card", "Passport", "Family Book"],
      },
      cusData: {
        first_name: "",
        last_name: "",
        dob: "",
        email: "",
        income: 0,
        expense: 0,
        occupation: "",
        identity_number: "",
        issue_date: "",
        issue_expired: "",
        house_no: "",
        street_no: "",
        address: "",
        profile_im: "",
      },
    };
  },
  mounted() {
    this.getCusById();
  },
  validations() {
    return {
      selectGender: {
        value: { required },
      },
      cusData: {
        first_name: {
          required,
          name_validation: {
            $validator: validName,
            $message:
              "Invalid Name. Valid name only contain letters, dashes (-) and spaces",
          },
        },
        last_name: {
          required,
          name_validation: {
            $validator: validName,
            $message:
              "Invalid Name. Valid name only contain letters, dashes (-) and spaces",
          },
        },
        dob: { required },
        email: { required, email },
      },
    };
  },
  methods: {
    async getCusById() {
      const self = this;
      const result = await httpAxios.get("customer/" + self.$route.params.id);
      self.cusData = result.data;
      // self.selectGender = result.data.gender;
      // self.selectNationality = result.data;
      // self.identityType = result.data.identity_type;
    },
    async updateCustomer() {
      var vm = this;
      vm.v$.selectGender.$touch();
      vm.v$.cusData.$touch();
      const submitData = {
        first_name: vm.cusData.first_name,
        last_name: vm.cusData.last_name,
        gender: vm.selectGender.value,
        dob: vm.cusData.dob,
        phone: $(".vti__input").val(),
        email: vm.cusData.email,
        income: vm.cusData.income,
        expense: vm.cusData.expense,
        nationality: vm.selectNationality.value,
        occupation: vm.cusData.occupation,
        identity_type: vm.identityType.value,
        identity_number: vm.cusData.identity_number,
        issue_date: vm.cusData.issue_date,
        issue_expired: vm.cusData.issue_expired,
        house_no: vm.cusData.house_no,
        street_no: vm.cusData.street_no,
        address: vm.cusData.address,
        profile_im: vm.cusData.profile_im,
      };
      const response = await httpAxios
        .put("customer/" + vm.$route.params.id, submitData)
        .catch(function (error) {
          vm.$notify({ type: "error ", text: "Updating customer failed!" });
        });
      if (response.data.success) {
        vm.$notify({
          type: "success",
          text: "Updating customer successfully!",
        });
        vm.$router.push("/customer");
      } else {
        vm.$notify({ type: "error ", text: "Updating customer failed!" });
      }
    },
    onCancel() {
      this.show = false;
      this.$router.push("/customer");
    },
  },
};
</script>
