define(["TypeCheck", "Failure", "LanduseType"], function (TypeCheck, Failure, LanduseType) {
    /** 
     * @alias Landuse 
     * @constructor
    * @param {Object} options - options object
     * @param {String} options.id - the id of the dataset
     * @param {String} options.name - the name of the dataset
     * @param {Number[]} options.coordinates - all bulding coordinates [longitude, latitude, longitude, latitude, ...]
     * @param {LanduseType} options.type - the landuse type
     */
    var Landuse = function (options) {
        this.id = TypeCheck.isString(options.id) ? options.id : Failure.throwTypeError("options.id is not a string");
        this.name = TypeCheck.isString(options.name) ? options.name : Failure.throwTypeError("options.name is not a string");
        this.coordinates = TypeCheck.isArray(options.coordinates) ? options.coordinates : [];
        this.type = TypeCheck.isEnumValue(options.type, LanduseType) ? options.type : Failure.throwTypeError("options.type is not a value of LanduseType");
    };
    /** @returns {Number[]} - the heights as an array */
    Landuse.prototype.getHeights = function () {
        var a = [], i;
        for (i = 0; i < this.coordinates.length / 2; i++) {
            a.push(3);
        }
        return a;
    };
    return Landuse;
});