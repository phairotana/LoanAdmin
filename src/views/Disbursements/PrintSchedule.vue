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
            <button
              v-print="'#printMe'"
              class="btn btn-success btn-sm"
              title="Print Schedule"
            >
              <em class="fas fa-print"></em>
            </button>
            <router-link
              v-bind:to="'/disbursed'"
              class="btn btn-primary btn-sm"
              title="Back all"
            >
              <em class="fas fa-backward"></em>
            </router-link>
            <!-- Print Schedule -->
            <div class="box" id="printMe">
              <div class="box-body">
                <div class="row">
                  <div class="container">
                    <div class="text-center font-moul mt-5 mb-4">
                      <h3>Z1 FLEXIBLE SOLUTION CO. LTD</h3>
                    </div>
                    <div class="text-center mt-3">
                      <h4 class="mb-3" style="font-family: Content">
                        តារាងកាលវិភាគសងប្រាក់
                      </h4>
                    </div>

                    <div class="font-battambang">
                      <table class="table" aria-hidden="true">
                        <tbody class="pl-4 border-top">
                          <tr>
                            <td class="border-0 text-nowrap">លេខគណនីអតិថិជន</td>
                            <td class="border-0 text-nowrap">
                              :&nbsp;&nbsp;{{ customerDetial.cus_code }}
                            </td>
                            <td class="border-0 text-nowrap">ការិយាល័យ</td>
                            <td class="border-0 text-nowrap">
                              <span class="text-input"
                                >:&nbsp;&nbsp; Z1 FLEXIBLE SOLUTION CO.
                                LTD</span
                              >
                            </td>
                          </tr>
                          <tr>
                            <td class="border-0 text-nowrap">
                              ឈ្មោះអ្នកខ្ចីប្រាក់
                            </td>
                            <td class="border-0 text-nowrap">
                              <span class="text-input"
                                >:&nbsp;&nbsp;
                                {{
                                  customerDetial.first_name +
                                  " " +
                                  customerDetial.last_name
                                }}</span
                              >
                            </td>
                            <td class="border-0 text-nowrap">មន្ត្រីឥណទាន</td>
                            <td class="border-0 pb-0 text-nowrap">
                              <span class="text-input"
                                >:&nbsp; Z1 FLEXIBLE</span
                              >
                            </td>
                          </tr>
                          <tr>
                            <td class="border-0 text-nowrap">អាស័យដ្ឋាន</td>
                            <td class="border-0 text-wrap">
                              :&nbsp;&nbsp; {{ customerDetial.address }}
                            </td>
                            <td class="border-0 text-nowrap">របៀបសងប្រាក់</td>
                            <td class="border-0 text-nowrap">
                              <span class="text-input"
                                >:&nbsp;&nbsp;{{
                                  disDetial.repayment_method
                                }}</span
                              >
                            </td>
                          </tr>
                          <tr>
                            <td class="border-0 text-nowrap">លេខគណនីឥណទាន</td>
                            <td class="border-0 text-nowrap">
                              :&nbsp;&nbsp;{{ disDetial.dis_code }}
                            </td>
                            <td class="border-0 text-nowrap">រូបិយវត្ថុ</td>
                            <td class="border-0 text-nowrap">
                              <span class="text-input"
                                >:&nbsp;&nbsp;{{ disDetial.currency }}</span
                              >
                            </td>
                          </tr>
                          <tr>
                            <td class="border-0 text-nowrap">ប្រភេទឥណទាន</td>
                            <td class="border-0 text-nowrap">
                              <span class="text-input"
                                >:&nbsp;&nbsp;{{ disDetial.product_type }}</span
                              >
                            </td>
                            <td class="border-0 text-nowrap">
                              ថ្ងៃខែឆ្នាំ ខ្ចីប្រាក់
                            </td>

                            <td class="border-0 text-nowrap">
                              <span class="text-input"
                                >:&nbsp;&nbsp;{{
                                  formatDate(disDetial.dis_date)
                                }}</span
                              >
                            </td>
                          </tr>
                          <tr>
                            <td class="border-0 text-nowrap">
                              ចំនួនប្រាក់កម្ចី
                            </td>
                            <td class="border-0 text-nowrap">
                              <span class="text-input"
                                >:&nbsp;&nbsp;{{
                                  formatCurrency(disDetial.balance, "$")
                                }}</span
                              >
                            </td>
                            <td class="border-0 text-nowrap">
                              ថ្ងៃខែឆ្នាំ បញ្ចប់
                            </td>
                            <td class="border-0 text-nowrap">
                              <span class="text-input"
                                >:&nbsp;&nbsp;{{
                                  formatDate(totalSche.end_date)
                                }}</span
                              >
                            </td>
                          </tr>
                          <tr>
                            <td class="border-0 text-nowrap">អត្រាការប្រាក់</td>
                            <td class="border-0 text-nowrap">
                              <span class="text-input"
                                >:&nbsp;&nbsp;{{
                                  disDetial.interest_rate + " %"
                                }}</span
                              >
                            </td>

                            <td class="border-0 text-nowrap">
                              សេវាកម្មរដ្ឋបាល
                            </td>
                            <td class="border-0 text-nowrap">
                              <span class="text-input"
                                >:&nbsp;&nbsp;
                                {{ disDetial.fee_rate + " %" }}</span
                              >
                            </td>
                          </tr>
                          <tr>
                            <td class="border-0 text-nowrap">រយៈពេលឥណទាន</td>
                            <td class="border-0 text-nowrap">
                              <span class="text-input"
                                >:&nbsp;&nbsp;
                                {{ disDetial.duration + " ខែ" }}</span
                              >
                            </td>
                            <td class="border-0 text-nowrap">ការបង់ប្រាក់</td>
                            <td class="border-0 text-nowrap">
                              <span class="text-input"
                                >:&nbsp;&nbsp;
                                {{
                                  disDetial.frequency +
                                  " (" +
                                  disDetial.frequency +
                                  " ខែ ម្តង)"
                                }}</span
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="table tbl-bottom" aria-hidden="true">
                        <thead>
                          <tr class="border-tb text-center">
                            <td>លើក</td>
                            <td>ថ្ងៃខែឆ្នាំ ត្រូវបង់ប្រាក់</td>
                            <td>សមតុល្យប្រាក់ដើម</td>
                            <td>ប្រាក់ដើមត្រូវបង់</td>
                            <td>ការប្រាក់</td>
                            <td>សរុបប្រាក់ត្រូវបង់</td>
                          </tr>
                        </thead>
                        <tbody class="text-center">
                          <tr
                            v-for="(item, index) in shceduleDetial"
                            :key="item.id"
                          >
                            <td v-if="index == 0">-</td>
                            <td v-else>{{ index }}</td>
                            <td>{{ formatDate(item.collection_date) }}</td>
                            <td v-text="formatCurrency(item.balance, '$')"></td>
                            <td
                              v-text="formatCurrency(item.principal, '$')"
                            ></td>
                            <td
                              v-text="
                                formatCurrency(item.interest + item.fee, '$')
                              "
                            ></td>
                            <td
                              v-text="
                                formatCurrency(
                                  item.principal + item.interest + item.fee,
                                  '$'
                                )
                              "
                            ></td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr class="border-tb font-weight-bold text-center">
                            <td colspan="3">សរុបរួមទាំងអស់</td>
                            <td
                              v-text="
                                formatCurrency(totalSche.total_principal, '$')
                              "
                            ></td>
                            <td
                              v-text="
                                formatCurrency(
                                  totalSche.total_interest +
                                    totalSche.total_fee,
                                  '$'
                                )
                              "
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
                      <br/>
                      <table width="100%">
                        <thead>
                          <tr class="text-center" style="font-family: 'Content'; font-size: 17px">
                            <th class="pb-6" scope="">អ្នកផ្តល់ឥណទាន</th>
                            <th class="pb-6" scope="">អ្នកខ្ចី</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style="font-family: 'Content'; font-size: 17px">
                            <td class="text-center">Z1 FLEXIBLE</td>
                            <td class="text-center">{{
                              customerDetial.first_name +
                              " " +
                              customerDetial.last_name
                            }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.box body -->
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

export default {
  name: "Print Schedule",
  data() {
    return {
      disDetial: {},
      shceduleDetial: {},
      customerDetial: {},
      schedulePaidData: {},
      totalSche: {},
    };
  },
  created() {
    this.disbursedDetial();
    this.schedulePaid();
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
  },
};
</script>
