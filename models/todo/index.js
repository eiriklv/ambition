exports = module.exports = function(collection, mongoose) {
    var schema = mongoose.Schema({
        type: {
            type: String,
            required: true,
            index: true
        },
        complete: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            required: true
        }
    });

    return mongoose.model(collection, schema);
};
