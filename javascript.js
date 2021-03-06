var app = new Vue({
    el: '#app',
    data: {
        weight: 0,
        height: 0,
        age: 0,
        boy: undefined, //1:boy 0:girl
        bmi: undefined,
        bodyfat: undefined
    },
    computed: {
        cal_bmi: function() {
            this.bmi = this.weight / (this.height * this.height);
            this.bmi = Math.round(this.bmi * 100) / 100; //The second decimal place
            return this.bmi;
        },
        cal_bodyfat: function() {
            this.bodyfat = (1.2 * this.bmi) + (0.23 * this.age) - 5.4 - (10.8 * this.boy);
            this.bodyfat = Math.round(this.bodyfat * 100) / 100;
            return this.bodyfat;
        }
    },
    methods: {
        reset: function() {
            this.weight = 0;
            this.height = 0;
            this.age = 0;
            this.boy = undefined;
            this.bmi = undefined;
            this.bodyfat = undefined;
        },
        result: function() {
            if (this.boy == 1) {
                if (this.age <= 30) {
                    if (this.bodyfat <= 8) {
                        alert('瘦');
                    } else if (this.bodyfat <= 16.2) {
                        alert('理想');
                    } else if (this.bodyfat <= 22.1) {
                        alert('標準');
                    } else {
                        alert('肥');
                    }
                } else if (this.age <= 46) {
                    if (this.bodyfat <= 12.5) {
                        alert('2瘦');
                    } else if (this.bodyfat <= 18.6) {
                        alert('2理想');
                    } else if (this.bodyfat <= 25.6) {
                        alert('2標準');
                    } else {
                        alert('2肥');
                    }
                } else {
                    if (this.bodyfat <= 16.2) {
                        alert('3瘦');
                    } else if (this.bodyfat <= 23.4) {
                        alert('3理想');
                    } else if (this.bodyfat <= 29) {
                        alert('3標準');
                    } else {
                        alert('3肥');
                    }
                }
            } else {
                alert("G");
                if (this.age <= 30) {
                    if (this.bodyfat <= 18.6) {
                        alert('瘦');
                    } else if (this.bodyfat <= 24.1) {
                        alert('理想');
                    } else if (this.bodyfat <= 31) {
                        alert('標準');
                    } else {
                        alert('肥');
                    }
                } else if (this.age <= 46) {
                    if (this.bodyfat <= 22.2) {
                        alert('2瘦');
                    } else if (this.bodyfat <= 27.3) {
                        alert('2理想');
                    } else if (this.bodyfat <= 33.5) {
                        alert('2標準');
                    } else {
                        alert('2肥');
                    }
                } else {
                    if (this.bodyfat <= 25.5) {
                        alert('3瘦');
                    } else if (this.bodyfat <= 30.2) {
                        alert('3理想');
                    } else if (this.bodyfat <= 36) {
                        alert('3標準');
                    } else {
                        alert('3肥');
                    }
                }
            }
        }
    }
})
