var point1 = [38.898556, -77.037852],
    point2 = [38.897147, -77.043934];

var distHaversine = (function (p, b) {
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

        latlon1 = p,
        latlon2 = b,
        R = 6371,
        dLat = toRad(latlon2[0] - latlon1[0]),
        dLon = toRad(latlon2[1] - latlon1[1]),
        lat1 = toRad(latlon1[0]),
        lat2 = toRad(latlon2[0]),

        a = sq(sin(dLat / 2)) +  sq(sin(dLon / 2)) * cos(lat1) * cos(lat2),
        c = 2 * atan2(sqrt(a), sqrt(1 - a)),
        d = R * c;
        
        return d;
        
}(point1, point2));