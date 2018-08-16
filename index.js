const recast = require('./middlewares/post')
const bot = require('./parse_csv/csv_parser')
let csv_file = './csv_files/answers.csv'

let param = ''

for (let i = 2; i < process.argv.length; i++)
{
	param += ' ' + process.argv[i]
}
param = param.trim()

recast(param, (err, data) =>{
	if (err)
		return console.log(err)
	bot (csv_file, data, (err, data) =>{
		if (err)
			return console.log(err)
		console.log(data)})
}
)
