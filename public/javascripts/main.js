var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!',
		show: false
	},

	methods: {
		open: function (event) {
			this.show = true
		},
		close: function (event) {
			this.show = false
		}
	}
})
