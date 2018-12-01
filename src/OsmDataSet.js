define(["TypeCheck", "Failure", "List"], function (TypeCheck, Failure, List) {
    /** 
     * @alias OsmDataSet 
     * @constructor
     * @param {Object} options - options object
     * @param {String} options.id - the id of the dataset
     * @param {List<Building>} options.buildings - the buildings
     * @param {List<Landuse>} options.landuses - the landuses
     */
    var OsmDataSet = function (options) {
        this.id = TypeCheck.isString(options.id) ? options.id : Failure.throwTypeError("options.id is not a string");
        this.buildings = TypeCheck.isInstanceOf(options.buildings, List) ? options.buildings : Failure.throwTypeError("options.buildings is not a List");
        this.landuses = TypeCheck.isInstanceOf(options.landuses, List) ? options.landuses : Failure.throwTypeError("options.landuses is not a List");
    };
    return OsmDataSet;
});