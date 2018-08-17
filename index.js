const recast = require('./middlewares/post')
const bot = require('./parse_csv/csv_parser')
const adddb = require('./database/baseDeDonnees')
const csv_file = './csv_files/answers.csv'

let display = (question, answer) =>{
	console.log (answer)
	return adddb(question, answer)
}
let param = ''

for (let i = 2; i < process.argv.length; i++)
{
	param += ' ' + process.argv[i]
}
param = param.trim()

recast(param, (err, data) =>{
	if (err)
		return display(param, err)
	bot(csv_file, data, (err, data) =>{
		if (err)
			return display(param, err)
		display(param, data)})
})
