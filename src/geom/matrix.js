import "geom";

// [ a b e ]   [ x ]
// [ c d f ] * [ y ]
// [ 0 0 1 ]   [ 1 ]
d3.geom.matrix = function(a, b, c, d, e, f, sink) {
  return {
    polygonStart: function() { sink.polygonStart(); },
    polygonEnd: function() { sink.polygonEnd(); },
    lineStart: function() { sink.lineStart(); },
    lineEnd: function() { sink.lineEnd(); },
    point: function(x, y) { sink.point(a * x + b * y + e, c * x + d * y + f); }
  };
};
