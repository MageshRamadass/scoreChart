import axios from 'axios';

// var axiosThis = this
// eslint-disable-next-line
function datal() {
    var config = {
        method: 'post',
        url: 'http://192.168.5.165:5001/',
        headers: {}
      };
      
      axios(config)
        .then(function (response) {
          console.log(response.data);
          this.summary = response.data
        // return summary;

        })
        .catch(function (error) {
          console.log(error);
        });
        return this.summary;

}
datal()
