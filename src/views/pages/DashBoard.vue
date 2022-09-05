<style>
</style>

<template>
  <v-container class="pa-0 pa-sm-3 pa-md-3">

    <div>
        <v-row>
          <v-col xs="6" sm="3" md="3" lg="3">
            <v-list-item class="crddta rounded-lg mb-3 elevation-10">
              <v-list-item-icon class="my-auto">
                <v-icon size="40" color="#FFC300">mdi-scale-balance</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-content>
                  <v-list-item-title class="title pb-3">
                    <span style="color: #E64141;" v-if="summary.opening_balance < 0">₹ &nbsp; {{
                        summary.opening_balance.toFixed(2)
                    }}</span>
                    <span style="color: #2DCD92;" v-else>₹ &nbsp; {{ summary.opening_balance.toFixed(2) }}</span>
                  </v-list-item-title>
                  <v-list-item-subtitle><span class="txtclr font-weight-black">Opening Balance</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col xs="6" sm="3" md="3" lg="3">
            <v-list-item class="crddta rounded-lg mb-3 elevation-10">
              <v-list-item-icon class="my-auto">
                <v-icon size="40" color="#FF5733">mdi-receipt</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-content>
                  <v-list-item-title class="title pb-3">
                    <span style="color: #E64141;" v-if="summary.receipt < 0">₹ &nbsp; {{ summary.receipt.toFixed(2)
                    }}</span>
                    <span style="color: #2DCD92;" v-else>₹ &nbsp; {{ summary.receipt.toFixed(2) }}</span>
                  </v-list-item-title>
                  <v-list-item-subtitle><span class="txtclr font-weight-black">Receipt</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col xs="6" sm="3" md="3" lg="3">
            <v-list-item class="crddta rounded-lg mb-3 elevation-10">
              <v-list-item-icon class="my-auto">
                <v-icon size="40" color="#C70039">mdi-briefcase-download</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-content>
                  <v-list-item-title class="title pb-3">
                    <span style="color: #E64141;" v-if="summary.withdraw < 0">₹ &nbsp; {{
                        summary.withdraw.toFixed(2)
                    }}</span>
                    <span style="color: #2DCD92;" v-else>₹ &nbsp; {{ summary.withdraw.toFixed(2) }}</span>
                  </v-list-item-title>
                  <v-list-item-subtitle><span class="txtclr font-weight-black">Withdraw</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col xs="6" sm="3" md="3" lg="3">
            <v-list-item class="crddta rounded-lg mb-3 elevation-10" elevation="24">
              <v-list-item-icon class="my-auto">
                <v-icon size="40" color="#DAF7A6">mdi-note-text</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-content>
                  <v-list-item-title class="title pb-3">
                    <span style="color: #E64141;" v-if="summary.JV < 0">₹ &nbsp; {{ summary.JV.toFixed(2) }}</span>
                    <span style="color: #2DCD92;" v-else>₹ &nbsp; {{ summary.withdraw.JV }}</span>
                  </v-list-item-title>
                  <v-list-item-subtitle><span class="txtclr font-weight-black">Journal voucher</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
    </div>

    <div class="mx-16 px-16">
      <WealthSegmentation />
    </div>
    <div>
      <TradeCurve />
    </div>
    <div>
      <HoldingCurve />
    </div>
    <div>
      <v-card outlined class="elevation-0 rounded-lg pa-1 pb-0 pa-md-6 pb-md-2 mt-6">
        <CalenDartb />
      </v-card>
    </div>
    <div>
      <v-card outlined class="elevation-0 rounded-lg pa-1 pb-0 pa-md-6 pb-md-2 mt-6">
        <CalendarProfitlose />
      </v-card>
    </div>
  </v-container>
</template>

<script>
import WealthSegmentation from '../charts/WealthSegmentation.vue';
import HoldingCurve from '../charts/HoldingCurve.vue';
import TradeCurve from '../charts/TradeCurve.vue';
import CalenDartb from '../heatmap calendars/CalenDartb.vue';
import CalendarProfitlose from '../heatmap calendars/CalendarProfitlose.vue';
import axios from 'axios';
// import datafeed from '../charts/dataApi.js'
export default {
  data() {
    return {
      summary: "",
      // completeResponse: [],
      // Journalvoucher: [],
      // lastTradedDate: [],
      // noofTrade: "",
      // openingbalance: [],
      // payoutbal: [],
      // systemjounal: [],
      // closingbalance: "",
      // completeResponsedata: false,
      // Journalvoucherdata: false,
      // LastTradedDatedata: false,
      // noofTradedata: false,
      // Openingbalancedata: false,
      // payoutbaldata: false,
      // systemjounaldata: false,
      // tofixedvalue: null,

    }
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
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  // computed: {
  //   completeResponseheaders() {
  //     return [
  //       { text: 'ACCOUNTCODE', value: 'ACCOUNTCODE' },
  //       { text: 'ACCOUNTCODE1', value: 'ACCOUNTCODE1' },
  //       { text: 'ACCOUNTNAME', value: 'ACCOUNTNAME' },
  //       { text: 'ADDR', value: 'ADDR' },
  //       { text: 'BILLNO', value: 'BILLNO', },
  //       { text: 'BILL_DATE', value: 'BILL_DATE' },
  //       { text: 'BOOKTYPECODE', value: 'BOOKTYPECODE' },
  //       { text: 'COCD', value: 'COCD' },
  //       { text: 'CONAME', value: 'CONAME' },
  //       { text: 'CR_AMT', value: 'CR_AMT', },
  //       { text: 'CTRCODE', value: 'CTRCODE' },
  //       { text: 'CTRNAME', value: 'CTRNAME', },
  //       { text: 'ContractNo', value: 'ContractNo' },
  //       { text: 'DR_AMT', value: 'DR_AMT' },
  //       { text: 'EMAIL', value: 'EMAIL' },
  //       { text: 'EXPECTED_DATE', value: 'EXPECTED_DATE' },
  //       { text: 'FAX', value: 'FAX' },
  //       { text: 'GATEWAYID', value: 'GATEWAYID', },
  //       { text: 'GROUPCODE', value: 'GROUPCODE' },
  //       { text: 'KINDOFACCOUNT', value: 'KINDOFACCOUNT' },
  //       { text: 'LAST2SETL', value: 'LAST2SETL' },
  //       { text: 'LAST_PAYMENT', value: 'LAST_PAYMENT' },
  //       { text: 'LAST_RECEIPT', value: 'LAST_RECEIPT' },
  //       { text: 'MANUALVNO', value: 'MANUALVNO' },
  //       { text: 'MKT_TYPE', value: 'MKT_TYPE' },
  //       { text: 'NARRATION', value: 'NARRATION' },
  //       { text: 'OPENINGBALANCE', value: 'OPENINGBALANCE' },
  //       { text: 'PANNO', value: 'PANNO', },
  //       { text: 'PUNCH_TIME', value: 'PUNCH_TIME' },
  //       { text: 'Row_ID', value: 'Row_ID' },
  //       { text: 'SETL_PAYINDATE', value: 'SETL_PAYINDATE' },
  //       { text: 'SETTLEMENT_NO', value: 'SETTLEMENT_NO' },
  //       { text: 'TELNO', value: 'TELNO', },
  //       { text: 'TRADING_COCD', value: 'TRADING_COCD' },
  //       { text: 'TRANS_TYPE', value: 'TRANS_TYPE', },
  //       { text: 'TRANS_TYPE1', value: 'TRANS_TYPE1' },
  //       { text: 'VOUCHERDATE', value: 'VOUCHERDATE' },
  //       { text: 'VOUCHERNO', value: 'VOUCHERNO' },
  //       { text: 'voctype', value: 'voctype' },
  //     ]
  //   },

  //   Journalvoucherheaders() {
  //     return [
  //       { text: 'COCD', value: 'COCD' },
  //       { text: 'CR_AMT', value: 'CR_AMT', },
  //       { text: 'DR_AMT', value: 'DR_AMT' },
  //       { text: 'NARRATION', value: 'NARRATION' },
  //       { text: 'PUNCH_TIME', value: 'PUNCH_TIME' },
  //       { text: 'TRANS_TYPE', value: 'TRANS_TYPE' },
  //       { text: 'VOUCHERNO', value: 'VOUCHERNO' },
  //     ]
  //   },
  //   lastTradedDateheaders() {
  //     return [
  //       { text: 'BILL_DATE', value: 'BILL_DATE' },
  //       { text: 'COCD', value: 'COCD' },
  //     ]
  //   },
  //   openingbalanceheaders() {
  //     return [
  //       { text: 'COCD', value: 'COCD' },
  //       { text: 'CR_AMT', value: 'CR_AMT', },
  //       { text: 'DR_AMT', value: 'DR_AMT' },
  //       { text: 'TRANS_TYPE', value: 'TRANS_TYPE' },
  //     ]
  //   },
  //   payoutbalheaders() {
  //     return [
  //       { text: 'COCD', value: 'COCD' },
  //       { text: 'CR_AMT', value: 'CR_AMT', },
  //       { text: 'ContractNo', value: 'ContractNo', },
  //       { text: 'DR_AMT', value: 'DR_AMT' },
  //       { text: 'GATEWAYID', value: 'GATEWAYID' },
  //       { text: 'NARRATION', value: 'NARRATION' },
  //       { text: 'PUNCH_TIME', value: 'PUNCH_TIME' },
  //       { text: 'TRANS_TYPE', value: 'TRANS_TYPE' },
  //       { text: 'VOUCHERNO', value: 'VOUCHERNO' },
  //     ]
  //   },
  //   systemjounalheaders() {
  //     return [
  //       { text: 'BILLNO', value: 'BILLNO' },
  //       { text: 'BILL_DATE', value: 'BILL_DATE' },
  //       { text: 'COCD', value: 'COCD' },
  //       { text: 'CR_AMT', value: 'CR_AMT', },
  //       { text: 'DR_AMT', value: 'DR_AMT' },
  //       { text: 'NARRATION', value: 'NARRATION' },
  //       { text: 'PUNCH_TIME', value: 'PUNCH_TIME' },
  //       { text: 'SETTLEMENT_NO', value: 'SETTLEMENT_NO' },
  //       { text: 'TRANS_TYPE', value: 'TRANS_TYPE' },
  //       { text: 'VOUCHERNO', value: 'VOUCHERNO' },
  //     ]
  //   },
  // },
  components: { WealthSegmentation, HoldingCurve, TradeCurve, CalenDartb, CalendarProfitlose },
}

</script>
