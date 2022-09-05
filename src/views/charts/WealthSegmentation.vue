<style>
.chartmdl {
  position: relative;
  text-align: center;
}

.chartctn {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<template>
  <div class="chartmdl">
    <div class="chartctn">
      <span class="title" style="color: #505359; font-family: 'DM Sans', sans-serif !important;">6,54,800</span>

      <p class="body-2"
        style="color: #FF8D24; letter-spacing: 0.16em; text-transform: uppercase; font-family: 'DM Sans', sans-serif !important;">
        Net Wealth
      </p>
    </div>
    <canvas id="myChart" width="100%" height="100%"></canvas>
  </div>
</template>
<script>
// import datafeed from '../charts/dataApi.js'
import axios from 'axios';
export default {
  data() {
    return {
      /* eslint-disable */

    };
  },
  beforeMount () {
    var axiosThis = this
    var config = {
      method: 'post',
      url: 'http://192.168.5.165:5001/',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        axiosThis.summary = response.data.summary
        console.log('sec',response.data.summary);
      })
      .catch(function (error) {
        console.log(error);
      });

  },
  mounted() {
    var axiosThis = this
    var config = {
      method: 'post',
      url: 'http://192.168.5.165:5001/',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        axiosThis.summary = response.data.summary
        console.log('sec',response.data.summary);
      })
      .catch(function (error) {
        console.log(error);
      });
      setTimeout(function(){
 console.warn("summ",axiosThis.summary.JV)
 const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Positions', 'Holdings', 'Currency', 'Commodity'],
        datasets: [{
          data: [axiosThis.summary.opening_balance ,axiosThis.summary.receipt.toFixed(2),axiosThis.summary.withdraw.toFixed(2), axiosThis.summary.JV],
          backgroundColor: [
            '#1877F2',
            '#FF8D24',
            '#2ECE14',
            '#00B2FE'
          ],
        }]
      },
      options: {
        legend: {
          display: false,
        },
        cutoutPercentage: 75,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
}, 1500);
   
    const ctx = document.getElementById('myChart').getContext('2d');

  },

}
</script>