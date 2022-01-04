<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <stats-card
            type="gradient-red"
            icon="ni ni-user-run"
            class="mb-4 mb-xl-0"
          >
            <h5 class="ccard-title text-uppercase text-muted mb-0">
              Customers
            </h5>
            <span class="h2 font-weight-bold mb-0">{{
              realTimeData.customers
            }}</span>
            <template v-slot:footer>
              <span v-if="realTimeData.customers > 0" class="text-success mr-2">
                <em class="fa fa-arrow-up"></em>
                {{ realTimeData.customers }}%
              </span>
              <span
                v-else-if="realTimeData.customers == 0"
                class="text-success mr-2"
              >
                <em class="fas fa-arrows-alt-h"></em>
                {{ realTimeData.customers }}%
              </span>
              <span v-else class="text-danger mr-2">
                <em class="fa fa-arrow-down"></em>
                {{ realTimeData.customers }}%
              </span>
              <span class="text-nowrap">
                <apan class="font-weight-bold">vs</apan> last month</span
              >
            </template>
          </stats-card>
        </div>

        <div class="col-xl-3 col-lg-6">
          <stats-card
            type="gradient-green"
            icon="ni ni-money-coins"
            class="mb-4 mb-xl-0"
          >
            <h5 class="ccard-title text-uppercase text-muted mb-0">
              Disbursement
            </h5>
            <span class="h2 font-weight-bold mb-0">{{
              formatCurrency(realTimeData.disbursement, "$")
            }}</span>
            <template v-slot:footer>
              <span
                v-if="realTimeData.disbursement_rate > 0"
                class="text-success mr-2"
              >
                <em class="fa fa-arrow-up"></em>
                {{ realTimeData.disbursement_rate }}%
              </span>
              <span
                v-else-if="realTimeData.disbursement_rate == 0"
                class="text-success mr-2"
              >
                <em class="fas fa-arrows-alt-h"></em>
                {{ realTimeData.disbursement_rate }}%
              </span>
              <span v-else class="text-danger mr-2">
                <em class="fa fa-arrow-down"></em>
                {{ realTimeData.disbursement_rate }}%
              </span>
              <span class="text-nowrap">
                <apan class="font-weight-bold">vs</apan> last month</span
              >
            </template>
          </stats-card>
        </div>

        <div class="col-xl-3 col-lg-6">
          <stats-card
            type="gradient-orange"
            icon="ni ni-collection"
            class="mb-4 mb-xl-0"
          >
            <h5 class="ccard-title text-uppercase text-muted mb-0">
              Collection
            </h5>
            <span class="h2 font-weight-bold mb-0">{{
              formatCurrency(realTimeData.collection, "$")
            }}</span>
            <template v-slot:footer>
              <span
                v-if="realTimeData.collection > 0"
                class="text-success mr-2"
              >
                <em class="fa fa-arrow-up"></em>
                {{ realTimeData.collection }}%
              </span>
              <span
                v-else-if="realTimeData.collection == 0"
                class="text-success mr-2"
              >
                <em class="fas fa-arrows-alt-h"></em>
                {{ realTimeData.collection }}%
              </span>
              <span v-else class="text-danger mr-2">
                <em class="fa fa-arrow-down"></em>
                {{ realTimeData.collection }}%
              </span>
              <span class="text-nowrap">
                <apan class="font-weight-bold">vs</apan> last month</span
              >
            </template>
          </stats-card>
        </div>

        <div class="col-xl-3 col-lg-6">
          <stats-card
            type="gradient-info"
            icon="ni ni-chart-bar-32"
            class="mb-4 mb-xl-0"
          >
            <h5 class="ccard-title text-uppercase text-muted mb-0">
              Collected
            </h5>
            <span class="h2 font-weight-bold mb-0">{{
              formatCurrency(realTimeData.collected, "$")
            }}</span>
            <template v-slot:footer>
              <span v-if="realTimeData.collected > 0" class="text-success mr-2">
                <em class="fa fa-arrow-up"></em>
                {{ realTimeData.collected }}%
              </span>
              <span
                v-else-if="realTimeData.collected == 0"
                class="text-success mr-2"
              >
                <em class="fas fa-arrows-alt-h"></em>
                {{ realTimeData.collected }}%
              </span>
              <span v-else class="text-danger mr-2">
                <em class="fa fa-arrow-down"></em>
                {{ realTimeData.collected }}%
              </span>
              <span class="text-nowrap">
                <apan class="font-weight-bold">vs</apan> last month</span
              >
            </template>
          </stats-card>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <!--Charts-->
      <div class="row">
        <div class="col-xl-12 mb-5 mb-xl-0">
          <card type="default" header-classes="bg-transparent">
            <template v-slot:header>
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="text-light text-uppercase ls-1 mb-0">
                    Collection Vs Collected
                  </h6>
                </div>
              </div>
            </template>
            <div class="chart-area">
              <canvas :height="300" :id="salesChartID"></canvas>
            </div>
          </card>
        </div>
      </div>
      <!-- End charts-->
    </div>
  </div>
</template>
<script>
// Charts
import Chart from "chart.js";
let chart;
import httpAxios from "@/utils/http-axios";
import $ from "jquery";

export default {
  name: "Dashboard",
  data() {
    return {
      realTimeData: {},
      salesChartID: "salesChart",
      bigLineChart: {
        allData: [
          [0, 20, 10, 30, 15, 40, 20, 60, 60, 60, 60, 60],
          [0, 20, 5, 25, 10, 30, 15, 40, 40, 40, 40, 40],
        ],
        activeIndex: 0,
      },
    };
  },
  created() {
    this.dashboardData();
  },
  methods: {
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
    async dashboardData() {
      const response = await httpAxios.get("dashboard");
      this.realTimeData = response.data.data;
    },
    initBigChart(index) {
      chart.destroy();
      chart = new Chart(
        document.getElementById(this.salesChartID).getContext("2d"),
        {
          type: "line",
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
              {
                label: "Performance",
                tension: 0.4,
                borderWidth: 4,
                borderColor: "#5e72e4",
                pointRadius: 0,
                backgroundColor: "transparent",
                data: this.bigLineChart.allData[index],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false,
            },
            tooltips: {
              enabled: true,
              mode: "index",
              intersect: false,
            },
            scales: {
              yAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.0)",
                    zeroLineColor: "transparent",
                  },
                  ticks: {
                    padding: 0,
                    fontColor: "#8898aa",
                    fontSize: 13,
                    fontFamily: "Open Sans",
                  },
                },
              ],
              xAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.0)",
                    zeroLineColor: "transparent",
                  },
                  ticks: {
                    padding: 10,
                    fontColor: "#8898aa",
                    fontSize: 13,
                    fontFamily: "Open Sans",
                  },
                },
              ],
            },
            layout: {
              padding: 0,
            },
          },
        }
      );
      this.bigLineChart.activeIndex = index;
    },
  },
  mounted() {
    chart = new Chart(
      document.getElementById(this.salesChartID).getContext("2d"),
      {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "Performance",
              tension: 0.4,
              borderWidth: 4,
              borderColor: "#5e72e4",
              pointRadius: 0,
              backgroundColor: "transparent",
              data: this.bigLineChart.allData[1],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          tooltips: {
            enabled: true,
            mode: "index",
            intersect: false,
          },
          scales: {
            yAxes: [
              {
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: "rgba(29,140,248,0.0)",
                  zeroLineColor: "transparent",
                },
                ticks: {
                  padding: 0,
                  fontColor: "#8898aa",
                  fontSize: 13,
                  fontFamily: "Open Sans",
                },
              },
            ],
            xAxes: [
              {
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: "rgba(29,140,248,0.0)",
                  zeroLineColor: "transparent",
                },
                ticks: {
                  padding: 10,
                  fontColor: "#8898aa",
                  fontSize: 13,
                  fontFamily: "Open Sans",
                },
              },
            ],
          },
          layout: {
            padding: 0,
          },
        },
      }
    );
  },
};
</script>
