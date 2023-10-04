const { connect, connection } = require("mongoose");
const { config } = require('dotenv')

async function initialiseDB() {
    try {
        config() // invoke dotenv config
        const uri = process.env.DB_URI

        connect(uri).then(() => { console.log("connected to mongodb") })
        connection.on("error", (error) => { console.log(error.message) })
    } catch (error) {
        throw new Error(error)
    }

}
module.exports = initialiseDB