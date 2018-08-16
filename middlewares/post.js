const https = require ('https')
const ids = require('../config/keys.js')

//options for the request
let options = {
	host: 'api.recast.ai',
	path: '/v2/request',
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Authorization' :'Token ' + ids.token ,
	}
}

let endRequest = (response, callback) =>{
	response = JSON.parse(response)
	if (response.results && response.results.intents[0])
	{
		response = response.results.intents[0].slug
		return callback(null, response)
	}
	else
	{
		return callback('Be gentle and communicate with me with an understable message')
	}
}

module.exports = (str, callback) => {
// datas for the request
	if (!str)
	{
		return callback('missing parameters')
	}
	let data =  JSON.stringify({
		'text': str,
		'language': 'EN',
	})
	// request to send
	let req = https.request(options, (res) => {
		let response = ''

		res.on('data',  (data) => {
			response += data
		})
		res.on('end',  () => {
			return endRequest(response, callback)
		})
		res.on('error',  (err) => {
			return callback(err.message)
		})
	})
	req.write(data)
	req.end()
}
