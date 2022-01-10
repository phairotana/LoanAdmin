<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <h3>Sign In</h3>
          </div>
          <form role="form" @submit.prevent="login">
            <div
              class="form-group"
              :class="{ error: v$.username.$errors.length }"
            >
              <base-input
                formClasses="input-group-alternative mb-3"
                placeholder="Email"
                autocomplete
                addon-left-icon="ni ni-email-83"
                v-model="v$.username.$model"
                type="email"
              >
              </base-input>
              <div class="pre-icon os-icon os-icon-user-male-circle"></div>
              <!-- error message -->
              <div
                class="input-errors"
                v-for="(error, index) of v$.username.$errors"
                :key="index"
              >
                <div class="error-msg text-danger text-sm">
                  {{ error.$message }}
                </div>
              </div>
            </div>

            <div
              class="form-group"
              :class="{ error: v$.password.$errors.length }"
            >
              <base-input
                formClasses="input-group-alternative mb-3"
                placeholder="Password"
                autocomplete
                type="password"
                addon-left-icon="ni ni-lock-circle-open"
                v-model="v$.password.$model"
              >
              </base-input>
              <div class="pre-icon os-icon os-icon-fingerprint"></div>
              <!-- error message -->
              <div
                class="input-errors"
                v-for="(error, index) of v$.password.$errors"
                :key="index"
              >
                <div class="error-msg text-danger text-sm">
                  {{ error.$message }}
                </div>
              </div>
            </div>

            <base-checkbox class="custom-control-alternative">
              <span class="text-muted">Remember me</span>
            </base-checkbox>
            <div class="text-center">
              <button type="submit" class="my-4 btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <a href="#" class="text-light"><small>Forgot password?</small></a>
        </div>
        <div class="col-6 text-right">
          <router-link to="/register" class="text-light"
            ><small>Create new account</small></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import httpAxios from "@/utils/http-axios";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export default {
  name: "Login",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      username: null,
      password: null,
    };
  },
  validations() {
    return {
      username: {
        required,
        email,
      },
      password: {
        required,
        min: minLength(8),
      },
    };
  },
  methods: {
    async login() {
      const self = this;
      self.v$.username.$touch();
      self.v$.password.$touch();
      const formData = new FormData();
      formData.append("username", self.username);
      formData.append("password", self.password);
      const response = await httpAxios
        .post("login", formData)
        .catch(function () {
          self.$notify({ type: "error ", text: "Login failed!" });
        });
      if (response.status == 200) {
        self.$notify({ type: "success", text: "Login Successfully!" });
        self.$store.commit("LOGGED_USER", response.data);
        self.$router.push("/dashboard");
      }
    },
  },
};
</script>
