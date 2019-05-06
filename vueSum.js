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
            var indexOfPoint_num1 = num1.indexOf('.');
            var indexOfPoint_num2 = num2.indexOf('.');
            if ((indexOfPoint_num1 != -1)) {
                var len_num1 = (num1.slice(indexOfPoint_num1+1, num1.length)).length;
                var point_num1 = '';
            } else {
                var len_num1 = 0;
                var point_num1 = '.';
            }
            if ((indexOfPoint_num2 != -1)) {
                var len_num2 = (num2.slice(indexOfPoint_num2+1, num2.length)).length;
                var point_num2 = '';
            } else {
                var len_num2 = 0;
                var point_num2 = '.';
            }
            var del = len_num1;
            if(len_num1 >= len_num2) {
                var float_2 = (num2).slice(0, num2.length) + point_num2 + '0'.repeat(len_num1 - len_num2)+'001';
                var float_1 = (num1).slice(0, num1.length)
            } else  if(len_num2 > len_num1) {
                del = len_num2;
                var float_1 = (num1).slice(0, num1.length) + point_num1 + '0'.repeat(len_num2 - len_num1)+'001';
                var float_2 = (num2).slice(0, num2.length)
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
