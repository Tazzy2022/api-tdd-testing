const app = require('./api/app')
const { syncAndSeed } = require('./db/db')

const port = process.env.PORT || 3000

const init = async () => {
	try {
    await syncAndSeed();
		app.listen(port, () => {
			console.log(`listening on port ${port}`)
		})
	} catch (error) {
    console.error(error)
	}
}

init()

module.exports = app;
