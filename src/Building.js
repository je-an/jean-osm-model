define(["TypeCheck", "Failure"], function (TypeCheck, Failure) {
    /** 
     * @alias Building 
     * @constructor
     * @param {Object} options - options object
     * @param {String} options.id - the id of the dataset
     * @param {String} options.name - the name of the dataset
     * @param {Number[]} options.coordinates - all bulding coordinates [longitude, latitude, longitude, latitude, ...]
     * @param {Number} options.levels - the building levels
     */
    var Building = function (options) {
        this.id = TypeCheck.isString(options.id) ? options.id : Failure.throwTypeError("options.id is not a string");
        this.name = TypeCheck.isString(options.name) ? options.name : Failure.throwTypeError("options.name is not a string");
        this.coordinates = TypeCheck.isArray(options.coordinates) ? options.coordinates : [];
        this.levels = TypeCheck.isNumber(options.levels) ? options.levels : 0;
    };   
    return Building;
});