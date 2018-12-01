define(["TypeCheck", "Failure"], function (TypeCheck, Failure) {
    /** 
     * @alias Building 
     * @constructor
     * @param {Object} options - options object
     * @param {String} options.id - the id of the dataset
     * @param {}
     */
    var Building = function (options) {
        this.id = TypeCheck.isString(options.id) ? options.id : Failure.throwTypeError("options.id is not a string");
        this.name = TypeCheck.isString(options.name) ? options.name : Failure.throwTypeError("options.name is not a string");
        this.coordinates = TypeCheck.isArray(options.coordinates) ? options.coordinates : [];
        this.levels = TypeCheck.isNumber(options.levels) ? options.levels : 0;
    };
    /** @returns {Number[]} - the coordinates as an array */
    Building.prototype.getCoordinatesArray = function () {
        var a = [], i;
        for (i = 0; i < this.coordinates.length; i++) {
            a.push(parseFloat(this.coordinates[i].longitude), parseFloat(this.coordinates[i].latitude));
        }
        return Cesium.Cartesian3.fromDegreesArray(a);
    };
    return Building;
});