const mongoose = require("mongoose");

const connect = (dbConfig) => {
    try {
        
        const mongoUri = `mongodb://${dbConfig.host}/${dbConfig.database}`;                             

        return mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    } catch (err) {
        console.log(`Error connecting to MongoDB: ${err}`);
        throw err;
    }
};

const getClient = () => {
    return mongoose.connection.getClient();
}

module.exports = {
    connect,
    getClient
};