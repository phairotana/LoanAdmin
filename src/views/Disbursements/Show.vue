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
          <div class="container">
            <ul class="nav nav-tabs nav-justified">
              <li class="nav-item">
                <a
                  class="nav-link"
                  @click.prevent="setActive('disbursed')"
                  :class="{ active: isActive('disbursed') }"
                  href="#disbursed"
                  >Disbursed Info</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  @click.prevent="setActive('schedule')"
                  :class="{ active: isActive('schedule') }"
                  href="#schedule"
                  >Schedule</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  @click.prevent="setActive('payment')"
                  :class="{ active: isActive('payment') }"
                  href="#payment"
                  >Collected</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  @click.prevent="setActive('payoff')"
                  :class="{ active: isActive('payoff') }"
                  href="#payoff"
                  >Pay Off</a
                >
              </li>
            </ul>
            <div class="tab-content py-3" id="myTabContent">
              <div
                class="tab-pane fade"
                :class="{ 'active show': isActive('disbursed') }"
                id="disbursed"
              >
                <table class="table table-striped" aria-hidden="true">
                  <tr>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Disbursed Code
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.dis_code }}
                    </td>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Status
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.status }}
                    </td>
                  </tr>
                  <tr>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Product Name
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.product_type }}
                    </td>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Repayment Method
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.repayment_method }}
                    </td>
                  </tr>
                  <tr>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Disbursed Amount
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ formatCurrency(disDetial.balance, "$") }}
                    </td>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Currency
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td
                      class="border-0"
                      style="width: 25%"
                      v-text="disDetial.currency"
                    ></td>
                  </tr>
                  <tr>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Duration
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td
                      v-if="disDetial.duration > 1"
                      class="border-0"
                      style="width: 25%"
                    >
                      {{ disDetial.duration + " Months" }}
                    </td>
                    <td v-else class="border-0" style="width: 25%">
                      {{ disDetial.duration + " Month" }}
                    </td>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Duration Period
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.duration_period }}
                    </td>
                  </tr>
                  <tr>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Interest Rate
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.interest_rate + " %" }}
                    </td>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Interest Period
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.interest_period }}
                    </td>
                  </tr>
                  <tr>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Admin Fee
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.fee_rate + " %" }}
                    </td>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Frequency
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.frequency }}
                    </td>
                  </tr>
                  <tr>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Disbursed Date
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ formatDate(disDetial.dis_date) }}
                    </td>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      First Payment Date
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ formatDate(disDetial.first_date) }}
                    </td>
                  </tr>
                </table>
              </div>
              <div
                class="tab-pane fade"
                :class="{ 'active show': isActive('schedule') }"
                id="schedule"
              >
                <card shadow type="secondary">
                  <form action="" method="post" id="frm-pay">
                    <div class="row">
                      <div class="col-md-6">
                        <label for="payment">Monthly Payment</label>
                        <div class="form-control-alternative">
                          <input
                            type="number"
                            step="any"
                            class="form-control"
                            v-model.number="amountPay.amount"
                          />
                        </div>
                      </div>
                      <div class="form-group btnPay col-md-6">
                        <label for="payment" class="p-2"></label>
                        <button
                          id="btn-pay"
                          type="button"
                          class="btn btn-success btn-block"
                          v-on:click="btnPay"
                        >
                          <em class="la la-receipt"></em>
                          Receive Now
                        </button>
                      </div>
                    </div>
                  </form>
                </card>
                <div class="table-responsive">
                  <table class="table table-hover" aria-hidden="true">
                    <thead>
                      <tr class="text-nowrap">
                        <th scope="" colspan="8" class="pl-0 pb-0">
                          <router-link
                            v-bind:to="
                              '/disbursed/' + disDetial.id + '/print-schedule'
                            "
                            class="btn btn-success btn-sm"
                            title="Preview Schedule"
                          >
                            <em class="far fa-eye"></em>
                          </router-link>
                        </th>
                      </tr>
                    </thead>
                    <thead>
                      <tr class="text-nowrap bg-light">
                        <th scope="">No</th>
                        <th scope="">Payment Date</th>
                        <th scope="">Balance</th>
                        <th scope="">Principal</th>
                        <th scope="">Interest</th>
                        <th scope="">Fee</th>
                        <th scope="">Total</th>
                        <th scope="">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item, index) in shceduleDetial"
                        :key="item.id"
                      >
                        <td v-if="index == 0">-</td>
                        <td v-else>{{ index }}</td>
                        <td>{{ formatDate(item.collection_date) }}</td>
                        <td v-text="formatCurrency(item.balance, '$')"></td>
                        <td v-text="formatCurrency(item.principal, '$')"></td>
                        <td v-text="formatCurrency(item.interest, '$')"></td>
                        <td v-text="formatCurrency(item.fee, '$')"></td>
                        <td
                          v-text="
                            formatCurrency(
                              item.principal +
                                item.interest +
                                item.penalty +
                                item.fee,
                              '$'
                            )
                          "
                        ></td>
                        <td
                          v-if="item.status == 'Not Yet Due'"
                          v-text="item.status"
                          class="font-weight-bold text-primary"
                        ></td>
                        <td
                          v-else-if="item.status == 'Past Due'"
                          v-text="item.status"
                          class="font-weight-bold text-danger"
                        ></td>
                        <td
                          v-else-if="item.status == 'Due Today'"
                          v-text="item.status"
                          class="font-weight-bold text-info"
                        ></td>
                        <td
                          v-else
                          v-text="item.status"
                          class="font-weight-bold text-success"
                        ></td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr class="border-tb font-weight-bold text-center">
                        <td colspan="3">Total</td>
                        <td
                          v-text="
                            formatCurrency(totalSche.total_principal, '$')
                          "
                        ></td>
                        <td
                          v-text="formatCurrency(totalSche.total_interest, '$')"
                        ></td>
                        <td
                          v-text="formatCurrency(totalSche.total_fee, '$')"
                        ></td>
                        <td
                          v-text="
                            formatCurrency(
                              totalSche.total_interest +
                                totalSche.total_fee +
                                totalSche.total_principal,
                              '$'
                            )
                          "
                        ></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div
                class="tab-pane fade"
                :class="{ 'active show': isActive('payment') }"
                id="payment"
              >
                <div class="table-responsive">
                  <table class="table table-hover" aria-hidden="true">
                    <thead>
                      <tr class="text-nowrap bg-light">
                        <th scope="">No</th>
                        <th scope="">Payment Date</th>
                        <th scope="">Invoice Number</th>
                        <th scope="">Principal</th>
                        <th scope="">Interest</th>
                        <th scope="">Fee</th>
                        <th scope="">Total</th>
                        <th scope="">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item, index) in schedulePaidData"
                        :key="item.id"
                      >
                        <td v-text="index + 1"></td>
                        <td>{{ formatDate(item.paid_date) }}</td>
                        <td v-text="item.invoice"></td>
                        <td
                          v-text="formatCurrency(item.principal_paid, '$')"
                        ></td>
                        <td
                          v-text="formatCurrency(item.interest_paid, '$')"
                        ></td>
                        <td v-text="formatCurrency(item.fee_paid, '$')"></td>
                        <td
                          v-text="
                            formatCurrency(
                              item.principal_paid +
                                item.interest_paid +
                                item.penalty_paid +
                                item.fee_paid,
                              '$'
                            )
                          "
                        ></td>
                        <td
                          v-if="item.status == 'Close'"
                          class="font-weight-bold text-success"
                        >
                          Paid
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                class="tab-pane fade"
                :class="{ 'active show': isActive('payoff') }"
                id="payoff"
              >
                <card shadow type="secondary">
                  <form action="" method="post" id="frm-pay">
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label for="payment">Principal</label>
                        <div class="form-control-alternative">
                          <input
                            readonly
                            type="number"
                            step="any"
                            class="form-control"
                            v-model.number="amountPayOff.principal"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <label for="payment">interest</label>
                        <div class="form-control-alternative">
                          <input
                            readonly
                            type="number"
                            step="any"
                            class="form-control"
                            v-model.number="amountPayOff.interest"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <label for="payment">Fee</label>
                        <div class="form-control-alternative">
                          <input
                            readonly
                            type="number"
                            step="any"
                            class="form-control"
                            v-model.number="amountPayOff.fee"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <label for="payment">Penalty</label>
                        <div class="form-control-alternative">
                          <input
                            readonly
                            type="number"
                            step="any"
                            class="form-control"
                            v-model.number="amountPayOff.penalty"
                          />
                        </div>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="payment" class="p-2"></label>
                        <button
                          id="btn-pay"
                          type="button"
                          class="btn btn-success btn-block"
                          v-on:click="btnPayOff"
                        >
                          <em class="la la-receipt"></em>
                          Pay Now
                        </button>
                      </div>
                    </div>
                  </form>
                </card>
                <div class="table-responsive">
                  <table class="table table-hover" aria-hidden="true">
                    <thead>
                      <tr class="text-nowrap bg-light">
                        <th scope="">No</th>
                        <th scope="">Payment Date</th>
                        <th scope="">Invoice Number</th>
                        <th scope="">Principal</th>
                        <th scope="">Interest</th>
                        <th scope="">Fee</th>
                        <th scope="">Total</th>
                        <th scope="">Status</th>
                      </tr>
                    </thead>
                    <tbody
                      v-for="(item, index) in schedulePaidData"
                      :key="item.id"
                    >
                      <tr v-if="item.status == 'Paid Off'">
                        <td v-text="index + 1"></td>
                        <td>{{ formatDate(item.paid_date) }}</td>
                        <td v-text="item.invoice"></td>
                        <td
                          v-text="formatCurrency(item.principal_paid, '$')"
                        ></td>
                        <td
                          v-text="formatCurrency(item.interest_paid, '$')"
                        ></td>
                        <td v-text="formatCurrency(item.fee_paid, '$')"></td>
                        <td
                          v-text="
                            formatCurrency(
                              item.principal_paid +
                                item.interest_paid +
                                item.penalty_paid +
                                item.fee_paid,
                              '$'
                            )
                          "
                        ></td>
                        <td
                          v-if="item.status == 'Paid Off'"
                          class="font-weight-bold text-success"
                        >
                          Paid Off
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
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
    reverseButtons: true,
  };
};

export default {
  name: "Show",
  data() {
    return {
      activeItem: "disbursed",
      disDetial: {},
      shceduleDetial: {},
      customerDetial: {},
      schedulePaidData: {},
      amountPay: {
        amount: 0,
      },
      amountPayOff: {},
      totalSche: {},
    };
  },
  created() {
    this.disbursedDetial();
    this.schedulePaid();
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
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
    disbursedDetial() {
      var vm = this;
      httpAxios
        .get("disbursement/" + vm.$route.params.id + "/form")
        .then((response) => {
          vm.disDetial = response.data.data.disbursement;
          vm.shceduleDetial = response.data.data.schedules;
          vm.customerDetial = response.data.data.customer;
          vm.amountPay = response.data.data.pay_now;
          vm.amountPayOff = response.data.data.pay_off;
          vm.totalSche = response.data.data.total_sche;
        })
        .catch(function (error) {
          console.log(error.message);
        });
    },
    schedulePaid() {
      var vm = this;
      httpAxios
        .get("disbursement/" + vm.$route.params.id + "/schedule-paid")
        .then((response) => {
          vm.schedulePaidData = response.data.data;
        })
        .catch(function (error) {
          console.log(error.message);
        });
    },
    btnPay() {
      var vm = this;
      vm.$swal(
        sweetalertConfig("Are you sure you want to receive payment?")
      ).then((result) => {
        if (result.value) {
          httpAxios
            .post(
              "disbursement/" + vm.$route.params.id + "/schedule/paynow",
              vm.amountPay
            )
            .then((response) => {
              vm.disbursedDetial();
              vm.schedulePaid();
              if (response.data.message == "Disbursement was close!") {
                vm.$notify({
                  type: "success",
                  text: "Thsi loan is already fully paid!",
                });
              } else if (response.data.success) {
                vm.$notify({
                  type: "success",
                  text: "Receive payment successfully!",
                });
              } else {
                vm.$notify({ type: "error ", text: "Receive payment failed!" });
              }
            })
            .catch(function (error) {
              vm.$notify({ type: "error ", text: "Receive payment failed!" });
            });
        } else {
          //
        }
      });
    },
    btnPayOff() {
      var vm = this;
      vm.$swal(
        sweetalertConfig("Are you sure you want to make payoff loan?")
      ).then((result) => {
        if (result.value) {
          httpAxios
            .post("disbursement/" + vm.$route.params.id + "/schedule/payoff")
            .then((response) => {
              vm.disbursedDetial();
              vm.schedulePaid();
              if (response.data.message == "Disbursement was close!") {
                vm.$notify({
                  type: "success",
                  text: "Thsi loan is already fully paid!",
                });
              } else if (response.data.success) {
                vm.$notify({
                  type: "success",
                  text: "Payoff loan successfully!",
                });
              } else {
                vm.$notify({ type: "error ", text: "Payoff loan failed!" });
              }
            })
            .catch(function (error) {
              vm.$notify({ type: "error ", text: "Payoff loan failed!" });
            });
        } else {
          //
        }
      });
    },
  },
};
</script>
