var point1 = [38.89855, -77.03785],
    point2 = [38.89714, -77.04393];

var distHaversine = (function (point1, point2) {
    'use strict';

    var cos = Math.cos,
        sin = Math.sin,
        atan2 = Math.atan2,
        sqrt = Math.sqrt,

        toRad = function (x) {
            return x * Math.PI / 180;
        },

        sq = function (x) {
            return (x * x);
        },

        latlon1 = point1,
        latlon2 = point2,
        R = 6371,
        dLat = toRad(latlon2[0] - latlon1[0]),
        dLon = toRad(latlon2[1] - latlon1[1]),
        lat1 = toRad(latlon1[0]),
        lat2 = toRad(latlon2[0]),

        a = sq(sin(dLat / 2)) +  sq(sin(dLon / 2)) * cos(lat1) * cos(lat2),
        c = 2 * atan2(sqrt(a), sqrt(1 - a)),
        d = R * c;
        
        return d;

});

distHaversine(point1, point2);