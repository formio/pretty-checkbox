Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="' +
((__t = ( ctx.instance.checkboxClasses )) == null ? '' : __t) +
'">\n    <' +
((__t = (ctx.input.type)) == null ? '' : __t) +
' ref="input"\n    ';
 for (var attr in ctx.input.attr) { ;
__p += '\n    ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\n    ';
 } ;
__p += '\n    ';
 if (ctx.checked) { ;
__p += 'checked=true';
 } ;
__p += '\n    ></' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'>\n\n    <div class="' +
((__t = ( ctx.instance.stateClasses )) == null ? '' : __t) +
'">\n        ';
 if (ctx.instance.isIcon) { ;
__p += '\n            <i class="' +
((__t = ( ctx.instance.iconClasses )) == null ? '' : __t) +
'"></i>\n        ';
 } ;
__p += '\n        <label class="control-label form-check-label"></label>\n    </div>\n</div>\n';
return __p
}