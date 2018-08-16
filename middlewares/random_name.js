const https = require ('https')


let options = {
	host: 'www.randomuser.me',
	path: '/api',
}
module.exports = (callback) => {
// request to send
	let ret = ''

	https.get(options, (res) => {
		let response = []

		res.on('data',  (data) => {
			response += data 
		})
		res.on('end',  () => {
			response = JSON.parse(response)
			response = response.results[0].name
			ret = JSON.stringify(response.first + ' ' +  response.last)
			return callback(null, ret)
		})
		res.on('error',  (err) => {
			return callback(err.message)
		})
	})
}
