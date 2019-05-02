var app = new Vue({
    el: '#vueScript',
    data: {
        number_1: 0,
        number_2: 0,
        result: 0
    },
    methods: {
        sum: function() {
            var num1 = document.getElementById('firstNumber').value;
            var num2 = document.getElementById('secondNumber').value;
            var del_1 = ('' + Math.floor(Math.abs(+num1))).length + 1;
            var del_2 = ('' + Math.floor(Math.abs(+num2))).length + 1;
            if(+num1 < 0) {
                del_1++;
            }
            if(+num2 < 0) {
                del_2++;
            }
            var len_num1 = num1.length - del_1;
            var len_num2 = num2.length - del_2;
            var del = len_num1;
            if(len_num1 >= len_num2) {
                var float_2 = (num2).slice(0, len_num2 + del_2) + '0'.repeat(len_num1 - len_num2);
                var float_1 = (num1).slice(0, len_num1 + del_1)
            } else  if(len_num2 > len_num1) {
                del = len_num2;
                var float_1 = (num1).slice(0, len_num1 + del_1) + '0'.repeat(len_num2 - len_num1);
                var float_2 = (num2).slice(0, len_num2 + del_2)
            }
            this.number_1 = +float_1;
            console.log(this.number_1)
            this.number_2 = +float_2;
            console.log(this.number_2)
            this.result = this.number_1 + this.number_2;
            document.getElementById('result').value = (this.result).toFixed(del);
        }
    }
})
