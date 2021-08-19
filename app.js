var app = new Vue({
    el: '#my-app',
    data: {
      message: 'Hello Vue!',
      counter: 0,
      name: ''
    },

    methods: {
        add() {
            this.counter++;
        },
        sub() {
            this.counter--;
        },
        setName(event) {
            this.name = event.target.value;
        }
    },
  })