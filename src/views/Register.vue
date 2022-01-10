<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <h3>Create New Account</h3>
          </div>
          <form role="form" @submit.prevent="register">
            <div class="form-group">
              <base-input
                autocomplete
                formClasses="input-group-alternative"
                placeholder="Full Name"
                type="text"
                addon-left-icon="ni ni-hat-3"
                v-model="v$.registerData.name.$model"
              >
              </base-input>
              <div class="pre-icon os-icon os-icon-user-male-circle"></div>
              <!-- Error Message -->
              <div
                class="input-errors"
                v-for="(error, index) of v$.registerData.name.$errors"
                :key="index"
              >
                <div class="error-msg text-danger text-sm">
                  {{ error.$message }}
                </div>
              </div>
            </div>
            <div class="form-group">
              <base-input
                autocomplete
                formClasses="input-group-alternative"
                placeholder="Email"
                type="email"
                addon-left-icon="ni ni-email-83"
                v-model="v$.registerData.email.$model"
                focused
              >
              </base-input>
              <div class="pre-icon os-icon os-icon-email-2-at2"></div>
              <!-- Error Message -->
              <div
                class="input-errors"
                v-for="(error, index) of v$.registerData.email.$errors"
                :key="index"
              >
                <div class="error-msg text-danger text-sm">
                  {{ error.$message }}
                </div>
              </div>
            </div>

            <div class="form-group">
              <base-input
                autocomplete
                formClasses="input-group-alternative"
                placeholder="Password"
                type="password"
                addon-left-icon="ni ni-lock-circle-open"
                v-model="v$.registerData.password.$model"
              >
              </base-input>
              <div class="pre-icon os-icon os-icon-fingerprint"></div>
              <!-- Error Message -->
              <div
                class="input-errors"
                v-for="(error, index) of v$.registerData.password.$errors"
                :key="index"
              >
                <div class="error-msg text-danger text-sm">
                  {{ error.$message }}
                </div>
              </div>
            </div>

            <div class="form-group">
              <base-input
                @base-input="checkPassword()"
                autocomplete
                formClasses="input-group-alternative"
                placeholder="Confirm Password"
                type="password"
                addon-left-icon="ni ni-lock-circle-open"
                v-model="v$.registerData.con_password.$model"
              >
              </base-input>
              <!-- Error Message -->
              <div
                class="input-errors"
                v-for="(error, index) of v$.registerData.con_password.$errors"
                :key="index"
              >
                <div class="error-msg text-danger text-sm">
                  {{ error.$message }}
                </div>
              </div>
            </div>
            <div class="text-center">
              <button type="submit" class="my-4 btn btn-primary">
                Create account
              </button>
            </div>
          </form>
          <router-link to="/login" class="text-light">
            <small class="text-primary">Login into your account</small>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import httpAxios from "@/utils/http-axios";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export function validName(name) {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)) {
    return true;
  }
  return false;
}

export default {
  name: "Register",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      registerData: {
        name: "",
        email: "",
        password: "",
        con_password: "",
      },
    };
  },
  validations() {
    return {
      registerData: {
        name: {
          required,
          name_validation: {
            $validator: validName,
            $message:
              "Invalid Name. Valid name only contain letters, dashes (-) and spaces",
          },
        },
        email: { required, email },
        password: { required, min: minLength(8) },
        con_password: { required },
      },
    };
  },
  methods: {
    async register() {
      this.v$.registerData.$touch();
      const response = await httpAxios
        .post("register", this.registerData)
        .catch(function () {
          this.$notify({ type: "error ", text: "Register account failed!" });
        });
      if (response.data.message == "email is already token") {
        this.$notify({
          type: "warn",
          text: "This email is already token!",
        });
      }
      if (response.data.success) {
        this.$notify({
          type: "success",
          text: "Register account successfully!",
        });
        this.$router.push("/login");
      } else {
        this.$notify({ type: "error ", text: "Register account failed!" });
      }
    },
  },
};
</script>
