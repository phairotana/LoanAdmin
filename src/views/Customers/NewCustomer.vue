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
                  <h3 class="mb-0">Create Customer</h3>
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
                    v-model="cusData.first_name"
                  />
                </div>
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    label="Last Name"
                    input-classes="form-control-alternative"
                    v-model="cusData.last_name"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 mb-4">
                  <label for="Gender">Gender</label>
                  <Multiselect
                    class="form-control form-control-alternative"
                    v-model="selectGender.value"
                    v-bind="selectGender"
                  ></Multiselect>
                </div>
                <div class="col-lg-6">
                  <base-input
                    type="date"
                    alternative=""
                    label="Date of Birth"
                    input-classes="form-control-alternative"
                    v-model="cusData.dob"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <label for="Phone">Phone</label>
                  <vue-tel-input
                    class="form-control form-control-alternative"
                  ></vue-tel-input>
                </div>
                <div class="col-lg-6">
                  <base-input
                    type="email"
                    alternative=""
                    label="Email"
                    input-classes="form-control-alternative"
                    v-model="cusData.email"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 mb-4">
                  <label for="Nationality">Nationality</label>
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
                    v-model="cusData.issue_expired_date"
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
                    v-model="cusData.no_number"
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
                type="button"
                @click="createCustomer()"
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
import $ from "jquery";

export default {
  name: "newcustomer",
  components: {
    Multiselect,
  },
  data() {
    return {
      selectGender: {
        value: 0,
        options: ["Male", "Female"],
      },
      selectNationality: {
        value: 0,
        options: ["Khmer", "Chinese"],
      },
      identityType: {
        value: 0,
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
        issue_expired_date: "",
        no_number: "",
        street_no: "",
        address: "",
        profile_im: "",
      },
    };
  },
  methods: {
    async createCustomer() {
      const submitData = {
        first_name: this.cusData.first_name,
        last_name: this.cusData.last_name,
        gender: this.selectGender.value,
        dob: this.cusData.dob,
        phone: $(".vti__input").val(),
        email: this.cusData.email,
        income: this.cusData.income,
        expense: this.cusData.expense,
        nationality: this.selectNationality.value,
        occupation: this.cusData.occupation,
        identity_type: this.identityType.value,
        identity_number: this.cusData.identity_number,
        issue_date: this.cusData.issue_date,
        issue_expired_date: this.cusData.issue_expired_date,
        no_number: this.cusData.no_number,
        street_no: this.cusData.street_no,
        address: this.cusData.address,
        profile_im: this.cusData.phone,
      };
      const response = await httpAxios
        .post("customer", submitData)
        .catch(function (error) {
          this.$notify({ type: "error ", text: "Creating customer failed!" });
        });
      if (response.data.success) {
        this.$notify({
          type: "success",
          text: "Creating customer successfully!",
        });
        this.$router.push("/customer");
      } else {
        this.$notify({ type: "error ", text: "Creating customer failed!" });
      }
    },
    onCancel() {
      this.show = false;
      this.$router.push("/customer");
    },
  },
};
</script>
