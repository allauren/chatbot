const fs = require('fs')
const randomuser = require('../middlewares/random_name.js')

module.exports = (folder, equiv, callback) => {
	let buf = fs.readFileSync(folder)

	buf = buf.toString().split('\n')
	for (let i = 0; i < buf.length; i++)
	{
		let first = buf[i].split(';')
		if (first[0] === equiv)
		{
			return randomuser ((err, data) =>{
				if (err)
					return (err)
				return callback (null, first[1].indexOf('${name}') != -1 ? first[1].replace('${name}', data) : first[1])
			})
		}
	}
	return callback (null, 'invalid request :( please add a routine for ' + equiv)
}
