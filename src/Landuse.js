define(["TypeCheck", "Failure", "LanduseType"], function (TypeCheck, Failure, LanduseType) {
    /** 
     * @alias Landuse 
     * @constructor
     * @param {Object} options - options object
     * @param {String} options.id - the id of the dataset
     * @param {}
     */
    var Landuse = function (options) {
        this.id = TypeCheck.isString(options.id) ? options.id : Failure.throwTypeError("options.id is not a string");
        this.name = TypeCheck.isString(options.name) ? options.name : Failure.throwTypeError("options.name is not a string");
        this.coordinates = TypeCheck.isArray(options.coordinates) ? options.coordinates : [];
        this.type = TypeCheck.isEnumValue(options.type, LanduseType) ? options.type : Failure.throwTypeError("options.type is not a value of LanduseType");
    };
    /** @returns {Number[]} - the coordinates as an array */
    Landuse.prototype.getCoordinatesArray = function () {
        var a = [], i;
        for (i = 0; i < this.coordinates.length; i++) {
            a.push(parseFloat(this.coordinates[i].longitude), parseFloat(this.coordinates[i].latitude));
        }
        return Cesium.Cartesian3.fromDegreesArray(a);
    };
    /** @returns {Number[]} - the heights as an array */
    Landuse.prototype.getHeights = function () {
        var a = [], i;
        for (i = 0; i < this.coordinates.length; i++) {
            a.push(3);
        }
        return a;
    };
    return Landuse;
});