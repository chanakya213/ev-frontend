import _ from "lodash";

class Convert {
  static toCamelCase(sourceObject) {
    const result = sourceObject instanceof Array ? [] : {};

    _.each(sourceObject, (value, key) => {
      if (typeof value === "object" && value != null) {
        result[_.camelCase(key)] = this.toCamelCase(value);
      } else result[_.camelCase(key)] = value;
    });

    return result;
  }

  static ObjectToQuery(sourceObject) {
    var ArrayStr = [];
    for (var p in sourceObject)
      if (sourceObject.hasOwnProperty(p)) {
        ArrayStr.push(encodeURIComponent(p) + "=" + encodeURIComponent(sourceObject[p]));
      }
    return ArrayStr.join("&");
  }
}

export { Convert };