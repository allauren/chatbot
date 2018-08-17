const mongoose = require ('mongoose')
const keys = require ('../config/keys')
let Schema =  mongoose.Schema
let template = new Schema({
	question : String,
	answer :String,
})
let botlogs = mongoose.model('clevy', template)

module.exports = (question, answer) =>{
	mongoose.connect(keys.mgurl, { useNewUrlParser: true },  (err) =>{
		if (!err)
		{
			let log = new botlogs({
				question : question,
				answer : answer,
			})
			log.save((err) =>{
				if (err)
					console.log(err)
				mongoose.connection.close()
			})
		}
	})
}
