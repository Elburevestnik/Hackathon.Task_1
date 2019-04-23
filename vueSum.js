var app = new Vue({
    el: '#vueScript',
    data: {
        number_1: 0,
        number_2: 0,
        result: 0
    },
    methods: {
        sum: function() {
            this.number_1 = +document.getElementById('firstNumber').value;
            this.number_2 = +document.getElementById('secondNumber').value;
            this.result = this.number_1 + this.number_2;
            document.getElementById('result').value = +(this.result).toFixed(10);
        }
    }
})