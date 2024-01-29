!function() {
    var nativeJSON, previousJSON, isRestored, JSON3, isLoader = "function" == typeof define && define.amd, objectTypes = {
        "function": !0,
        "object": !0
    }, freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports, root = objectTypes[typeof window] && window || this, freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && "object" == typeof global && global;
    function runInContext(context, exports) {
        context = context || root["Object"](), exports = exports || root["Object"]();
        var isProperty, forEach, undef, charIndexBuggy, floor, Months, getDay, Escapes, leadingZeroes, toPaddedString, unicodePrefix, quote, serialize, fromCharCode, Unescapes, Index, Source, abort, lex, get, update, walk, Number = context["Number"] || root["Number"], String = context["String"] || root["String"], Object = context["Object"] || root["Object"], Date = context["Date"] || root["Date"], SyntaxError = context["SyntaxError"] || root["SyntaxError"], TypeError = context["TypeError"] || root["TypeError"], Math = context["Math"] || root["Math"], context = context["JSON"] || root["JSON"], context = ("object" == typeof context && context && (exports.stringify = context.stringify, 
        exports.parse = context.parse), Object.prototype), getClass = context.toString, isExtended = new Date(-0xc782b5b800cec);
        try {
            isExtended = -109252 == isExtended.getUTCFullYear() && 0 === isExtended.getUTCMonth() && 1 === isExtended.getUTCDate() && 10 == isExtended.getUTCHours() && 37 == isExtended.getUTCMinutes() && 6 == isExtended.getUTCSeconds() && 708 == isExtended.getUTCMilliseconds();
        } catch (exception) {}
        function has(name) {
            if (has[name] !== undef) return has[name];
            var isSupported;
            if ("bug-string-char-index" == name) isSupported = "a" != "a"[0]; else if ("json" == name) isSupported = has("json-stringify") && has("json-parse"); else {
                var serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                if ("json-stringify" == name) {
                    var stringify = exports.stringify, stringifySupported = "function" == typeof stringify && isExtended;
                    if (stringifySupported) {
                        (value = function() {
                            return 1;
                        }).toJSON = value;
                        try {
                            stringifySupported = "0" === stringify(0) && "0" === stringify(new Number()) && '""' == stringify(new String()) && stringify(getClass) === undef && stringify(undef) === undef && stringify() === undef && "1" === stringify(value) && "[1]" == stringify([ value ]) && "[null]" == stringify([ undef ]) && "null" == stringify(null) && "[null,null,null]" == stringify([ undef, getClass, null ]) && stringify({
                                "a": [ value, !0, !1, null, "\0\b\n\f\r\t" ]
                            }) == serialized && "1" === stringify(null, value) && "[\n 1,\n 2\n]" == stringify([ 1, 2 ], null, 1) && '"-271821-04-20T00:00:00.000Z"' == stringify(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == stringify(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == stringify(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == stringify(new Date(-1));
                        } catch (exception) {
                            stringifySupported = !1;
                        }
                    }
                    isSupported = stringifySupported;
                }
                if ("json-parse" == name) {
                    stringify = exports.parse;
                    if ("function" == typeof stringify) try {
                        if (0 === stringify("0") && !stringify(!1)) {
                            var value, parseSupported = 5 == (value = stringify(serialized))["a"].length && 1 === value["a"][0];
                            if (parseSupported) {
                                try {
                                    parseSupported = !stringify('"\t"');
                                } catch (exception) {}
                                if (parseSupported) try {
                                    parseSupported = 1 !== stringify("01");
                                } catch (exception) {}
                                if (parseSupported) try {
                                    parseSupported = 1 !== stringify("1.");
                                } catch (exception) {}
                            }
                        }
                    } catch (exception) {
                        parseSupported = !1;
                    }
                    isSupported = parseSupported;
                }
            }
            return has[name] = !!isSupported;
        }
        return has("json") || (charIndexBuggy = has("bug-string-char-index"), isExtended || (floor = Math.floor, 
        Months = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 ], getDay = function(year, month) {
            return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(1 < month))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
        }), isProperty = (isProperty = context.hasOwnProperty) || function(property) {
            var constructor, members = {
                __proto__: null
            };
            return members.__proto__ = {
                "toString": 1
            }, isProperty = members.toString != getClass ? function(property) {
                var original = this.__proto__, property = property in (this.__proto__ = null, 
                this);
                return this.__proto__ = original, property;
            } : (constructor = members.constructor, function(property) {
                var parent = (this.constructor || constructor).prototype;
                return property in this && !(property in parent && this[property] === parent[property]);
            }), members = null, isProperty.call(this, property);
        }, forEach = function(object, callback) {
            var Properties, members, property, size = 0;
            for (property in (Properties = function() {
                this.valueOf = 0;
            }).prototype.valueOf = 0, members = new Properties()) isProperty.call(members, property) && size++;
            return members = null, (forEach = size ? 2 == size ? function(object, callback) {
                var property, members = {}, isFunction = "[object Function]" == getClass.call(object);
                for (property in object) isFunction && "prototype" == property || isProperty.call(members, property) || (members[property] = 1, 
                !isProperty.call(object, property)) || callback(property);
            } : function(object, callback) {
                var property, isConstructor, isFunction = "[object Function]" == getClass.call(object);
                for (property in object) isFunction && "prototype" == property || !isProperty.call(object, property) || (isConstructor = "constructor" === property) || callback(property);
                (isConstructor || isProperty.call(object, property = "constructor")) && callback(property);
            } : (members = [ "valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor" ], 
            function(object, callback) {
                var property, length, isFunction = "[object Function]" == getClass.call(object), hasProperty = !isFunction && "function" != typeof object.constructor && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
                for (property in object) isFunction && "prototype" == property || !hasProperty.call(object, property) || callback(property);
                for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
            }))(object, callback);
        }, has("json-stringify") || (Escapes = {
            92: "\\\\",
            34: '\\"',
            8: "\\b",
            12: "\\f",
            10: "\\n",
            13: "\\r",
            9: "\\t"
        }, leadingZeroes = "000000", toPaddedString = function(width, value) {
            return (leadingZeroes + (value || 0)).slice(-width);
        }, unicodePrefix = "\\u00", quote = function(value) {
            for (var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || 10 < length, symbols = useCharIndex && (charIndexBuggy ? value.split("") : value); index < length; index++) {
                var charCode = value.charCodeAt(index);
                switch (charCode) {
                  case 8:
                  case 9:
                  case 10:
                  case 12:
                  case 13:
                  case 34:
                  case 92:
                    result += Escapes[charCode];
                    break;

                  default:
                    charCode < 32 ? result += unicodePrefix + toPaddedString(2, charCode.toString(16)) : result += useCharIndex ? symbols[index] : value.charAt(index);
                }
            }
            return result + '"';
        }, serialize = function(property, object, callback, properties, whitespace, indentation, stack) {
            var value, className, year, month, date, minutes, seconds, time, results, element, index, length, hours, result;
            try {
                value = object[property];
            } catch (exception) {}
            if ("object" == typeof value && value) if ("[object Date]" != (className = getClass.call(value)) || isProperty.call(value, "toJSON")) "function" == typeof value.toJSON && ("[object Number]" != className && "[object String]" != className && "[object Array]" != className || isProperty.call(value, "toJSON")) && (value = value.toJSON(property)); else if (-1 / 0 < value && value < 1 / 0) {
                if (getDay) {
                    for (date = floor(value / 864e5), year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                    for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                    date = 1 + date - getDay(year, month), hours = floor((time = (value % 864e5 + 864e5) % 864e5) / 36e5) % 24, 
                    minutes = floor(time / 6e4) % 60, seconds = floor(time / 1e3) % 60, 
                    time = time % 1e3;
                } else year = value.getUTCFullYear(), month = value.getUTCMonth(), 
                date = value.getUTCDate(), hours = value.getUTCHours(), minutes = value.getUTCMinutes(), 
                seconds = value.getUTCSeconds(), time = value.getUTCMilliseconds();
                value = (year <= 0 || 1e4 <= year ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) + "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) + "." + toPaddedString(3, time) + "Z";
            } else value = null;
            if (null === (value = callback ? callback.call(object, property, value) : value)) return "null";
            if ("[object Boolean]" == (className = getClass.call(value))) return "" + value;
            if ("[object Number]" == className) return -1 / 0 < value && value < 1 / 0 ? "" + value : "null";
            if ("[object String]" == className) return quote("" + value);
            if ("object" == typeof value) {
                for (length = stack.length; length--; ) if (stack[length] === value) throw TypeError();
                if (stack.push(value), results = [], hours = indentation, indentation += whitespace, 
                "[object Array]" == className) {
                    for (index = 0, length = value.length; index < length; index++) element = serialize(index, value, callback, properties, whitespace, indentation, stack), 
                    results.push(element === undef ? "null" : element);
                    result = results.length ? whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + hours + "]" : "[" + results.join(",") + "]" : "[]";
                } else forEach(properties || value, function(property) {
                    var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                    element !== undef && results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                }), result = results.length ? whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + hours + "}" : "{" + results.join(",") + "}" : "{}";
                return stack.pop(), result;
            }
        }, exports.stringify = function(source, filter, width) {
            var whitespace, callback, className;
            if (objectTypes[typeof filter] && filter) if ("[object Function]" == (className = getClass.call(filter))) callback = filter; else if ("[object Array]" == className) for (var value, properties = {}, index = 0, length = filter.length; index < length; value = filter[index++], 
            "[object String]" != (className = getClass.call(value)) && "[object Number]" != className || (properties[value] = 1));
            if (width) if ("[object Number]" == (className = getClass.call(width))) {
                if (0 < (width -= width % 1)) for (whitespace = "", 10 < width && (width = 10); whitespace.length < width; whitespace += " ");
            } else "[object String]" == className && (whitespace = width.length <= 10 ? width : width.slice(0, 10));
            return serialize("", ((value = {})[""] = source, value), callback, properties, whitespace, "", []);
        }), has("json-parse")) || (fromCharCode = String.fromCharCode, Unescapes = {
            92: "\\",
            34: '"',
            47: "/",
            98: "\b",
            116: "\t",
            110: "\n",
            102: "\f",
            114: "\r"
        }, abort = function() {
            throw Index = Source = null, SyntaxError();
        }, lex = function() {
            for (var value, begin, position, isSigned, charCode, source = Source, length = source.length; Index < length; ) switch (charCode = source.charCodeAt(Index)) {
              case 9:
              case 10:
              case 13:
              case 32:
                Index++;
                break;

              case 123:
              case 125:
              case 91:
              case 93:
              case 58:
              case 44:
                return value = charIndexBuggy ? source.charAt(Index) : source[Index], 
                Index++, value;

              case 34:
                for (value = "@", Index++; Index < length; ) if ((charCode = source.charCodeAt(Index)) < 32) abort(); else if (92 == charCode) switch (charCode = source.charCodeAt(++Index)) {
                  case 92:
                  case 34:
                  case 47:
                  case 98:
                  case 116:
                  case 110:
                  case 102:
                  case 114:
                    value += Unescapes[charCode], Index++;
                    break;

                  case 117:
                    for (begin = ++Index, position = Index + 4; Index < position; Index++) 48 <= (charCode = source.charCodeAt(Index)) && charCode <= 57 || 97 <= charCode && charCode <= 102 || 65 <= charCode && charCode <= 70 || abort();
                    value += fromCharCode("0x" + source.slice(begin, Index));
                    break;

                  default:
                    abort();
                } else {
                    if (34 == charCode) break;
                    for (charCode = source.charCodeAt(Index), begin = Index; 32 <= charCode && 92 != charCode && 34 != charCode; ) charCode = source.charCodeAt(++Index);
                    value += source.slice(begin, Index);
                }
                if (34 == source.charCodeAt(Index)) return Index++, value;
                abort();

              default:
                if (begin = Index, 45 == charCode && (isSigned = !0, charCode = source.charCodeAt(++Index)), 
                48 <= charCode && charCode <= 57) {
                    for (48 == charCode && 48 <= (charCode = source.charCodeAt(Index + 1)) && charCode <= 57 && abort(), 
                    isSigned = !1; Index < length && 48 <= (charCode = source.charCodeAt(Index)) && charCode <= 57; Index++);
                    if (46 == source.charCodeAt(Index)) {
                        for (position = ++Index; position < length && 48 <= (charCode = source.charCodeAt(position)) && charCode <= 57; position++);
                        position == Index && abort(), Index = position;
                    }
                    if (101 == (charCode = source.charCodeAt(Index)) || 69 == charCode) {
                        for (43 != (charCode = source.charCodeAt(++Index)) && 45 != charCode || Index++, 
                        position = Index; position < length && 48 <= (charCode = source.charCodeAt(position)) && charCode <= 57; position++);
                        position == Index && abort(), Index = position;
                    }
                    return +source.slice(begin, Index);
                }
                if (isSigned && abort(), "true" == source.slice(Index, Index + 4)) return Index += 4, 
                !0;
                if ("false" == source.slice(Index, Index + 5)) return Index += 5, 
                !1;
                if ("null" == source.slice(Index, Index + 4)) return Index += 4, 
                null;
                abort();
            }
            return "$";
        }, get = function(value) {
            var results, hasMembers;
            if ("$" == value && abort(), "string" == typeof value) {
                if ("@" == (charIndexBuggy ? value.charAt(0) : value[0])) return value.slice(1);
                if ("[" == value) {
                    for (results = []; "]" != (value = lex()); hasMembers = hasMembers || !0) !hasMembers || "," == value && "]" != (value = lex()) || abort(), 
                    "," == value && abort(), results.push(get(value));
                    return results;
                }
                if ("{" == value) {
                    for (results = {}; "}" != (value = lex()); hasMembers = hasMembers || !0) !hasMembers || "," == value && "}" != (value = lex()) || abort(), 
                    "," != value && "string" == typeof value && "@" == (charIndexBuggy ? value.charAt(0) : value[0]) && ":" == lex() || abort(), 
                    results[value.slice(1)] = get(lex());
                    return results;
                }
                abort();
            }
            return value;
        }, update = function(source, property, callback) {
            callback = walk(source, property, callback);
            callback === undef ? delete source[property] : source[property] = callback;
        }, walk = function(source, property, callback) {
            var length, value = source[property];
            if ("object" == typeof value && value) if ("[object Array]" == getClass.call(value)) for (length = value.length; length--; ) update(value, length, callback); else forEach(value, function(property) {
                update(value, property, callback);
            });
            return callback.call(source, property, value);
        }, exports.parse = function(source, callback) {
            var value;
            return Index = 0, Source = "" + source, source = get(lex()), "$" != lex() && abort(), 
            Index = Source = null, callback && "[object Function]" == getClass.call(callback) ? walk(((value = {})[""] = source, 
            value), "", callback) : source;
        }), exports["runInContext"] = runInContext, exports;
    }
    !freeGlobal || freeGlobal["global"] !== freeGlobal && freeGlobal["window"] !== freeGlobal && freeGlobal["self"] !== freeGlobal || (root = freeGlobal), 
    freeExports && !isLoader ? runInContext(root, freeExports) : (nativeJSON = root.JSON, 
    previousJSON = root["JSON3"], isRestored = !1, JSON3 = runInContext(root, root["JSON3"] = {
        "noConflict": function() {
            return isRestored || (isRestored = !0, root.JSON = nativeJSON, root["JSON3"] = previousJSON, 
            nativeJSON = previousJSON = null), JSON3;
        }
    }), root.JSON = {
        "parse": JSON3.parse,
        "stringify": JSON3.stringify
    }), isLoader && define(function() {
        return JSON3;
    });
}.call(this), !function(global, factory) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = global.document ? factory(global, !0) : function(w) {
        if (w.document) return factory(w);
        throw new Error("jQuery requires a window with a document");
    } : factory(global);
}("undefined" != typeof window ? window : this, function(window, noGlobal) {
    "use strict";
    function isFunction(obj) {
        return "function" == typeof obj && "number" != typeof obj.nodeType;
    }
    function isWindow(obj) {
        return null != obj && obj === obj.window;
    }
    var arr = [], document = window.document, getProto = Object.getPrototypeOf, slice = arr.slice, concat = arr.concat, push = arr.push, indexOf = arr.indexOf, class2type = {}, toString = class2type.toString, hasOwn = class2type.hasOwnProperty, fnToString = hasOwn.toString, ObjectFunctionString = fnToString.call(Object), support = {}, preservedScriptAttributes = {
        type: !0,
        src: !0,
        noModule: !0
    };
    function DOMEval(code, doc, node) {
        var i, script = (doc = doc || document).createElement("script");
        if (script.text = code, node) for (i in preservedScriptAttributes) node[i] && (script[i] = node[i]);
        doc.head.appendChild(script).parentNode.removeChild(script);
    }
    function toType(obj) {
        return null == obj ? obj + "" : "object" == typeof obj || "function" == typeof obj ? class2type[toString.call(obj)] || "object" : typeof obj;
    }
    var jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
    }, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        return !isFunction(obj) && !isWindow(obj) && ("array" === type || 0 === length || "number" == typeof length && 0 < length && length - 1 in obj);
    }
    jQuery.fn = jQuery.prototype = {
        jquery: "3.3.1",
        constructor: jQuery,
        length: 0,
        toArray: function() {
            return slice.call(this);
        },
        get: function(num) {
            return null == num ? slice.call(this) : num < 0 ? this[num + this.length] : this[num];
        },
        pushStack: function(elems) {
            elems = jQuery.merge(this.constructor(), elems);
            return elems.prevObject = this, elems;
        },
        each: function(callback) {
            return jQuery.each(this, callback);
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        slice: function() {
            return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(i) {
            var len = this.length, i = +i + (i < 0 ? len : 0);
            return this.pushStack(0 <= i && i < len ? [ this[i] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: push,
        sort: arr.sort,
        splice: arr.splice
    }, jQuery.extend = jQuery.fn.extend = function() {
        var options, name, copy, copyIsArray, src, target = arguments[0] || {}, i = 1, length = arguments.length, deep = !1;
        for ("boolean" == typeof target && (deep = target, target = arguments[i] || {}, 
        i++), "object" == typeof target || isFunction(target) || (target = {}), 
        i === length && (target = this, i--); i < length; i++) if (null != (options = arguments[i])) for (name in options) src = target[name], 
        target !== (copy = options[name]) && (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy))) ? (src = copyIsArray ? (copyIsArray = !1, 
        src && Array.isArray(src) ? src : []) : src && jQuery.isPlainObject(src) ? src : {}, 
        target[name] = jQuery.extend(deep, src, copy)) : void 0 !== copy && (target[name] = copy));
        return target;
    }, jQuery.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(msg) {
            throw new Error(msg);
        },
        noop: function() {},
        isPlainObject: function(obj) {
            return !(!obj || "[object Object]" !== toString.call(obj) || (obj = getProto(obj)) && ("function" != typeof (obj = hasOwn.call(obj, "constructor") && obj.constructor) || fnToString.call(obj) !== ObjectFunctionString));
        },
        isEmptyObject: function(obj) {
            for (var name in obj) return !1;
            return !0;
        },
        globalEval: function(code) {
            DOMEval(code);
        },
        each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) for (length = obj.length; i < length && !1 !== callback.call(obj[i], i, obj[i]); i++); else for (i in obj) if (!1 === callback.call(obj[i], i, obj[i])) break;
            return obj;
        },
        trim: function(text) {
            return null == text ? "" : (text + "").replace(rtrim, "");
        },
        makeArray: function(arr, results) {
            results = results || [];
            return null != arr && (isArrayLike(Object(arr)) ? jQuery.merge(results, "string" == typeof arr ? [ arr ] : arr) : push.call(results, arr)), 
            results;
        },
        inArray: function(elem, arr, i) {
            return null == arr ? -1 : indexOf.call(arr, elem, i);
        },
        merge: function(first, second) {
            for (var len = +second.length, j = 0, i = first.length; j < len; j++) first[i++] = second[j];
            return first.length = i, first;
        },
        grep: function(elems, callback, invert) {
            for (var matches = [], i = 0, length = elems.length, callbackExpect = !invert; i < length; i++) !callback(elems[i], i) != callbackExpect && matches.push(elems[i]);
            return matches;
        },
        map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            if (isArrayLike(elems)) for (length = elems.length; i < length; i++) null != (value = callback(elems[i], i, arg)) && ret.push(value); else for (i in elems) null != (value = callback(elems[i], i, arg)) && ret.push(value);
            return concat.apply([], ret);
        },
        guid: 1,
        support: support
    }), "function" == typeof Symbol && (jQuery.fn[Symbol.iterator] = arr[Symbol.iterator]), 
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    function dir(elem, dir, until) {
        for (var matched = [], truncate = void 0 !== until; (elem = elem[dir]) && 9 !== elem.nodeType; ) if (1 === elem.nodeType) {
            if (truncate && jQuery(elem).is(until)) break;
            matched.push(elem);
        }
        return matched;
    }
    function siblings(n, elem) {
        for (var matched = []; n; n = n.nextSibling) 1 === n.nodeType && n !== elem && matched.push(n);
        return matched;
    }
    var arr = function(window) {
        function funescape(_, escaped, escapedWhitespace) {
            var high = "0x" + escaped - 65536;
            return high != high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(65536 + high) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320);
        }
        function fcssescape(ch, asCodePoint) {
            return asCodePoint ? "\0" === ch ? "�" : ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " " : "\\" + ch;
        }
        function unloadHandler() {
            setDocument();
        }
        var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + +new Date(), preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), sortOrder = function(a, b) {
            return a === b && (hasDuplicate = !0), 0;
        }, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push = arr.push, slice = arr.slice, indexOf = function(list, elem) {
            for (var i = 0, len = list.length; i < len; i++) if (list[i] === elem) return i;
            return -1;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            "ID": new RegExp("^#(" + identifier + ")"),
            "CLASS": new RegExp("^\\.(" + identifier + ")"),
            "TAG": new RegExp("^(" + identifier + "|[*])"),
            "ATTR": new RegExp("^" + attributes),
            "PSEUDO": new RegExp("^" + pseudos),
            "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            "bool": new RegExp("^(?:" + booleans + ")$", "i"),
            "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"), rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, disabledAncestor = addCombinator(function(elem) {
            return !0 === elem.disabled && ("form" in elem || "label" in elem);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes), 
            arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
            push = {
                apply: arr.length ? function(target, els) {
                    push_native.apply(target, slice.call(els));
                } : function(target, els) {
                    for (var j = target.length, i = 0; target[j++] = els[i++]; );
                    target.length = j - 1;
                }
            };
        }
        function Sizzle(selector, context, results, seed) {
            var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            if (results = results || [], "string" != typeof selector || !selector || 1 !== nodeType && 9 !== nodeType && 11 !== nodeType) return results;
            if (!seed && ((context ? context.ownerDocument || context : preferredDoc) !== document && setDocument(context), 
            context = context || document, documentIsHTML)) {
                if (11 !== nodeType && (match = rquickExpr.exec(selector))) if (m = match[1]) {
                    if (9 === nodeType) {
                        if (!(elem = context.getElementById(m))) return results;
                        if (elem.id === m) return results.push(elem), results;
                    } else if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) return results.push(elem), 
                    results;
                } else {
                    if (match[2]) return push.apply(results, context.getElementsByTagName(selector)), 
                    results;
                    if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) return push.apply(results, context.getElementsByClassName(m)), 
                    results;
                }
                if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                    if (1 !== nodeType) newContext = context, newSelector = selector; else if ("object" !== context.nodeName.toLowerCase()) {
                        for ((nid = context.getAttribute("id")) ? nid = nid.replace(rcssescape, fcssescape) : context.setAttribute("id", nid = expando), 
                        i = (groups = tokenize(selector)).length; i--; ) groups[i] = "#" + nid + " " + toSelector(groups[i]);
                        newSelector = groups.join(","), newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                    }
                    if (newSelector) try {
                        return push.apply(results, newContext.querySelectorAll(newSelector)), 
                        results;
                    } catch (qsaError) {} finally {
                        nid === expando && context.removeAttribute("id");
                    }
                }
            }
            return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        function createCache() {
            var keys = [];
            function cache(key, value) {
                return keys.push(key + " ") > Expr.cacheLength && delete cache[keys.shift()], 
                cache[key + " "] = value;
            }
            return cache;
        }
        function markFunction(fn) {
            return fn[expando] = !0, fn;
        }
        function assert(fn) {
            var el = document.createElement("fieldset");
            try {
                return !!fn(el);
            } catch (e) {
                return !1;
            } finally {
                el.parentNode && el.parentNode.removeChild(el);
            }
        }
        function addHandle(attrs, handler) {
            for (var arr = attrs.split("|"), i = arr.length; i--; ) Expr.attrHandle[arr[i]] = handler;
        }
        function siblingCheck(a, b) {
            var cur = b && a, diff = cur && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (diff) return diff;
            if (cur) for (;cur = cur.nextSibling; ) if (cur === b) return -1;
            return a ? 1 : -1;
        }
        function createDisabledPseudo(disabled) {
            return function(elem) {
                return "form" in elem ? elem.parentNode && !1 === elem.disabled ? "label" in elem ? "label" in elem.parentNode ? elem.parentNode.disabled === disabled : elem.disabled === disabled : elem.isDisabled === disabled || elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled : elem.disabled === disabled : "label" in elem && elem.disabled === disabled;
            };
        }
        function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                return argument = +argument, markFunction(function(seed, matches) {
                    for (var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length; i--; ) seed[j = matchIndexes[i]] && (seed[j] = !(matches[j] = seed[j]));
                });
            });
        }
        function testContext(context) {
            return context && void 0 !== context.getElementsByTagName && context;
        }
        for (i in support = Sizzle.support = {}, isXML = Sizzle.isXML = function(elem) {
            elem = elem && (elem.ownerDocument || elem).documentElement;
            return !!elem && "HTML" !== elem.nodeName;
        }, setDocument = Sizzle.setDocument = function(node) {
            var node = node ? node.ownerDocument || node : preferredDoc;
            return node !== document && 9 === node.nodeType && node.documentElement && (docElem = (document = node).documentElement, 
            documentIsHTML = !isXML(document), preferredDoc !== document && (node = document.defaultView) && node.top !== node && (node.addEventListener ? node.addEventListener("unload", unloadHandler, !1) : node.attachEvent && node.attachEvent("onunload", unloadHandler)), 
            support.attributes = assert(function(el) {
                return el.className = "i", !el.getAttribute("className");
            }), support.getElementsByTagName = assert(function(el) {
                return el.appendChild(document.createComment("")), !el.getElementsByTagName("*").length;
            }), support.getElementsByClassName = rnative.test(document.getElementsByClassName), 
            support.getById = assert(function(el) {
                return docElem.appendChild(el).id = expando, !document.getElementsByName || !document.getElementsByName(expando).length;
            }), support.getById ? (Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                    return elem.getAttribute("id") === attrId;
                };
            }, Expr.find["ID"] = function(id, context) {
                if (void 0 !== context.getElementById && documentIsHTML) return (context = context.getElementById(id)) ? [ context ] : [];
            }) : (Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                    elem = void 0 !== elem.getAttributeNode && elem.getAttributeNode("id");
                    return elem && elem.value === attrId;
                };
            }, Expr.find["ID"] = function(id, context) {
                if (void 0 !== context.getElementById && documentIsHTML) {
                    var node, i, elems, elem = context.getElementById(id);
                    if (elem) {
                        if ((node = elem.getAttributeNode("id")) && node.value === id) return [ elem ];
                        for (elems = context.getElementsByName(id), i = 0; elem = elems[i++]; ) if ((node = elem.getAttributeNode("id")) && node.value === id) return [ elem ];
                    }
                    return [];
                }
            }), Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                return void 0 !== context.getElementsByTagName ? context.getElementsByTagName(tag) : support.qsa ? context.querySelectorAll(tag) : void 0;
            } : function(tag, context) {
                var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                if ("*" !== tag) return results;
                for (;elem = results[i++]; ) 1 === elem.nodeType && tmp.push(elem);
                return tmp;
            }, Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                if (void 0 !== context.getElementsByClassName && documentIsHTML) return context.getElementsByClassName(className);
            }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(document.querySelectorAll)) && (assert(function(el) {
                docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                el.querySelectorAll("[msallowcapture^='']").length && rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")"), 
                el.querySelectorAll("[selected]").length || rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")"), 
                el.querySelectorAll("[id~=" + expando + "-]").length || rbuggyQSA.push("~="), 
                el.querySelectorAll(":checked").length || rbuggyQSA.push(":checked"), 
                el.querySelectorAll("a#" + expando + "+*").length || rbuggyQSA.push(".#.+[+~]");
            }), assert(function(el) {
                el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var input = document.createElement("input");
                input.setAttribute("type", "hidden"), el.appendChild(input).setAttribute("name", "D"), 
                el.querySelectorAll("[name=d]").length && rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?="), 
                2 !== el.querySelectorAll(":enabled").length && rbuggyQSA.push(":enabled", ":disabled"), 
                docElem.appendChild(el).disabled = !0, 2 !== el.querySelectorAll(":disabled").length && rbuggyQSA.push(":enabled", ":disabled"), 
                el.querySelectorAll("*,:x"), rbuggyQSA.push(",.*:");
            })), (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function(el) {
                support.disconnectedMatch = matches.call(el, "*"), matches.call(el, "[s!='']:x"), 
                rbuggyMatches.push("!=", pseudos);
            }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), 
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), 
            node = rnative.test(docElem.compareDocumentPosition), contains = node || rnative.test(docElem.contains) ? function(a, b) {
                var adown = 9 === a.nodeType ? a.documentElement : a, b = b && b.parentNode;
                return a === b || !(!b || 1 !== b.nodeType || !(adown.contains ? adown.contains(b) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(b)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, sortOrder = node ? function(a, b) {
                var compare;
                return a === b ? (hasDuplicate = !0, 0) : (compare = !a.compareDocumentPosition - !b.compareDocumentPosition) || (1 & (compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1) || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0 : 4 & compare ? -1 : 1);
            } : function(a, b) {
                if (a === b) return hasDuplicate = !0, 0;
                var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [ a ], bp = [ b ];
                if (!aup || !bup) return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                if (aup === bup) return siblingCheck(a, b);
                for (cur = a; cur = cur.parentNode; ) ap.unshift(cur);
                for (cur = b; cur = cur.parentNode; ) bp.unshift(cur);
                for (;ap[i] === bp[i]; ) i++;
                return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
            }), document;
        }, Sizzle.matches = function(expr, elements) {
            return Sizzle(expr, null, null, elements);
        }, Sizzle.matchesSelector = function(elem, expr) {
            if ((elem.ownerDocument || elem) !== document && setDocument(elem), 
            expr = expr.replace(rattributeQuotes, "='$1']"), support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                var ret = matches.call(elem, expr);
                if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) return ret;
            } catch (e) {}
            return 0 < Sizzle(expr, document, null, [ elem ]).length;
        }, Sizzle.contains = function(context, elem) {
            return (context.ownerDocument || context) !== document && setDocument(context), 
            contains(context, elem);
        }, Sizzle.attr = function(elem, name) {
            (elem.ownerDocument || elem) !== document && setDocument(elem);
            var fn = Expr.attrHandle[name.toLowerCase()], fn = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
            return void 0 !== fn ? fn : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (fn = elem.getAttributeNode(name)) && fn.specified ? fn.value : null;
        }, Sizzle.escape = function(sel) {
            return (sel + "").replace(rcssescape, fcssescape);
        }, Sizzle.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
        }, Sizzle.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i = 0;
            if (hasDuplicate = !support.detectDuplicates, sortInput = !support.sortStable && results.slice(0), 
            results.sort(sortOrder), hasDuplicate) {
                for (;elem = results[i++]; ) elem === results[i] && (j = duplicates.push(i));
                for (;j--; ) results.splice(duplicates[j], 1);
            }
            return sortInput = null, results;
        }, getText = Sizzle.getText = function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (nodeType) {
                if (1 === nodeType || 9 === nodeType || 11 === nodeType) {
                    if ("string" == typeof elem.textContent) return elem.textContent;
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) ret += getText(elem);
                } else if (3 === nodeType || 4 === nodeType) return elem.nodeValue;
            } else for (;node = elem[i++]; ) ret += getText(node);
            return ret;
        }, (Expr = Sizzle.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                "ATTR": function(match) {
                    return match[1] = match[1].replace(runescape, funescape), match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape), 
                    "~=" === match[2] && (match[3] = " " + match[3] + " "), match.slice(0, 4);
                },
                "CHILD": function(match) {
                    return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), 
                    match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), 
                    match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), 
                    match;
                },
                "PSEUDO": function(match) {
                    var excess, unquoted = !match[6] && match[2];
                    return matchExpr["CHILD"].test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = (excess = tokenize(unquoted, !0)) && unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), 
                    match[2] = unquoted.slice(0, excess)), match.slice(0, 3));
                }
            },
            filter: {
                "TAG": function(nodeNameSelector) {
                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return "*" === nodeNameSelector ? function() {
                        return !0;
                    } : function(elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
                },
                "CLASS": function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                        return pattern.test("string" == typeof elem.className && elem.className || void 0 !== elem.getAttribute && elem.getAttribute("class") || "");
                    });
                },
                "ATTR": function(name, operator, check) {
                    return function(elem) {
                        elem = Sizzle.attr(elem, name);
                        return null == elem ? "!=" === operator : !operator || (elem += "", 
                        "=" === operator ? elem === check : "!=" === operator ? elem !== check : "^=" === operator ? check && 0 === elem.indexOf(check) : "*=" === operator ? check && -1 < elem.indexOf(check) : "$=" === operator ? check && elem.slice(-check.length) === check : "~=" === operator ? -1 < (" " + elem.replace(rwhitespace, " ") + " ").indexOf(check) : "|=" === operator && (elem === check || elem.slice(0, check.length + 1) === check + "-"));
                    };
                },
                "CHILD": function(type, what, argument, first, last) {
                    var simple = "nth" !== type.slice(0, 3), forward = "last" !== type.slice(-4), ofType = "of-type" === what;
                    return 1 === first && 0 === last ? function(elem) {
                        return !!elem.parentNode;
                    } : function(elem, context, xml) {
                        var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple != forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = !1;
                        if (parent) {
                            if (simple) {
                                for (;dir; ) {
                                    for (node = elem; node = node[dir]; ) if (ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) return !1;
                                    start = dir = "only" === type && !start && "nextSibling";
                                }
                                return !0;
                            }
                            if (start = [ forward ? parent.firstChild : parent.lastChild ], 
                            forward && useCache) {
                                for (diff = (nodeIndex = (cache = (uniqueCache = (outerCache = (node = parent)[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] || [])[0] === dirruns && cache[1]) && cache[2], 
                                node = nodeIndex && parent.childNodes[nodeIndex]; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0, 
                                start.pop()); ) if (1 === node.nodeType && ++diff && node === elem) {
                                    uniqueCache[type] = [ dirruns, nodeIndex, diff ];
                                    break;
                                }
                            } else if (!1 === (diff = useCache ? nodeIndex = (cache = (uniqueCache = (outerCache = (node = elem)[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] || [])[0] === dirruns && cache[1] : diff)) for (;(node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0, 
                            start.pop())) && ((ofType ? node.nodeName.toLowerCase() !== name : 1 !== node.nodeType) || !++diff || (useCache && ((uniqueCache = (outerCache = node[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] = [ dirruns, diff ]), 
                            node !== elem)); );
                            return (diff -= last) === first || diff % first == 0 && 0 <= diff / first;
                        }
                    };
                },
                "PSEUDO": function(pseudo, argument) {
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                    return fn[expando] ? fn(argument) : 1 < fn.length ? (args = [ pseudo, pseudo, "", argument ], 
                    Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                        for (var idx, matched = fn(seed, argument), i = matched.length; i--; ) seed[idx = indexOf(seed, matched[i])] = !(matches[idx] = matched[i]);
                    }) : function(elem) {
                        return fn(elem, 0, args);
                    }) : fn;
                }
            },
            pseudos: {
                "not": markFunction(function(selector) {
                    var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                        for (var elem, unmatched = matcher(seed, null, xml, []), i = seed.length; i--; ) (elem = unmatched[i]) && (seed[i] = !(matches[i] = elem));
                    }) : function(elem, context, xml) {
                        return input[0] = elem, matcher(input, null, xml, results), 
                        input[0] = null, !results.pop();
                    };
                }),
                "has": markFunction(function(selector) {
                    return function(elem) {
                        return 0 < Sizzle(selector, elem).length;
                    };
                }),
                "contains": markFunction(function(text) {
                    return text = text.replace(runescape, funescape), function(elem) {
                        return -1 < (elem.textContent || elem.innerText || getText(elem)).indexOf(text);
                    };
                }),
                "lang": markFunction(function(lang) {
                    return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), 
                    lang = lang.replace(runescape, funescape).toLowerCase(), function(elem) {
                        var elemLang;
                        do {
                            if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) return (elemLang = elemLang.toLowerCase()) === lang || 0 === elemLang.indexOf(lang + "-");
                        } while ((elem = elem.parentNode) && 1 === elem.nodeType);
                        return !1;
                    };
                }),
                "target": function(elem) {
                    var hash = window.location && window.location.hash;
                    return hash && hash.slice(1) === elem.id;
                },
                "root": function(elem) {
                    return elem === docElem;
                },
                "focus": function(elem) {
                    return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                "enabled": createDisabledPseudo(!1),
                "disabled": createDisabledPseudo(!0),
                "checked": function(elem) {
                    var nodeName = elem.nodeName.toLowerCase();
                    return "input" === nodeName && !!elem.checked || "option" === nodeName && !!elem.selected;
                },
                "selected": function(elem) {
                    return elem.parentNode && elem.parentNode.selectedIndex, !0 === elem.selected;
                },
                "empty": function(elem) {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) if (elem.nodeType < 6) return !1;
                    return !0;
                },
                "parent": function(elem) {
                    return !Expr.pseudos["empty"](elem);
                },
                "header": function(elem) {
                    return rheader.test(elem.nodeName);
                },
                "input": function(elem) {
                    return rinputs.test(elem.nodeName);
                },
                "button": function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return "input" === name && "button" === elem.type || "button" === name;
                },
                "text": function(elem) {
                    return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (elem = elem.getAttribute("type")) || "text" === elem.toLowerCase());
                },
                "first": createPositionalPseudo(function() {
                    return [ 0 ];
                }),
                "last": createPositionalPseudo(function(matchIndexes, length) {
                    return [ length - 1 ];
                }),
                "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
                    return [ argument < 0 ? argument + length : argument ];
                }),
                "even": createPositionalPseudo(function(matchIndexes, length) {
                    for (var i = 0; i < length; i += 2) matchIndexes.push(i);
                    return matchIndexes;
                }),
                "odd": createPositionalPseudo(function(matchIndexes, length) {
                    for (var i = 1; i < length; i += 2) matchIndexes.push(i);
                    return matchIndexes;
                }),
                "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                    for (var i = argument < 0 ? argument + length : argument; 0 <= --i; ) matchIndexes.push(i);
                    return matchIndexes;
                }),
                "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                    for (var i = argument < 0 ? argument + length : argument; ++i < length; ) matchIndexes.push(i);
                    return matchIndexes;
                })
            }
        }).pseudos["nth"] = Expr.pseudos["eq"], {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) Expr.pseudos[i] = function(type) {
            return function(elem) {
                return "input" === elem.nodeName.toLowerCase() && elem.type === type;
            };
        }(i);
        for (i in {
            submit: !0,
            reset: !0
        }) Expr.pseudos[i] = function(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return ("input" === name || "button" === name) && elem.type === type;
            };
        }(i);
        function setFilters() {}
        function toSelector(tokens) {
            for (var i = 0, len = tokens.length, selector = ""; i < len; i++) selector += tokens[i].value;
            return selector;
        }
        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && "parentNode" === key, doneName = done++;
            return combinator.first ? function(elem, context, xml) {
                for (;elem = elem[dir]; ) if (1 === elem.nodeType || checkNonElements) return matcher(elem, context, xml);
                return !1;
            } : function(elem, context, xml) {
                var oldCache, outerCache, newCache = [ dirruns, doneName ];
                if (xml) {
                    for (;elem = elem[dir]; ) if ((1 === elem.nodeType || checkNonElements) && matcher(elem, context, xml)) return !0;
                } else for (;elem = elem[dir]; ) if (1 === elem.nodeType || checkNonElements) if (outerCache = (outerCache = elem[expando] || (elem[expando] = {}))[elem.uniqueID] || (outerCache[elem.uniqueID] = {}), 
                skip && skip === elem.nodeName.toLowerCase()) elem = elem[dir] || elem; else {
                    if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) return newCache[2] = oldCache[2];
                    if ((outerCache[key] = newCache)[2] = matcher(elem, context, xml)) return !0;
                }
                return !1;
            };
        }
        function elementMatcher(matchers) {
            return 1 < matchers.length ? function(elem, context, xml) {
                for (var i = matchers.length; i--; ) if (!matchers[i](elem, context, xml)) return !1;
                return !0;
            } : matchers[0];
        }
        function condense(unmatched, map, filter, context, xml) {
            for (var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = null != map; i < len; i++) !(elem = unmatched[i]) || filter && !filter(elem, context, xml) || (newUnmatched.push(elem), 
            mapped && map.push(i));
            return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            return postFilter && !postFilter[expando] && (postFilter = setMatcher(postFilter)), 
            postFinder && !postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector)), 
            markFunction(function(seed, results, context, xml) {
                var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || function(selector, contexts, results) {
                    for (var i = 0, len = contexts.length; i < len; i++) Sizzle(selector, contexts[i], results);
                    return results;
                }(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = !preFilter || !seed && selector ? elems : condense(elems, preMap, preFilter, context, xml), matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                if (matcher && matcher(matcherIn, matcherOut, context, xml), postFilter) for (temp = condense(matcherOut, postMap), 
                postFilter(temp, [], context, xml), i = temp.length; i--; ) (elem = temp[i]) && (matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem));
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            for (temp = [], i = matcherOut.length; i--; ) (elem = matcherOut[i]) && temp.push(matcherIn[i] = elem);
                            postFinder(null, matcherOut = [], temp, xml);
                        }
                        for (i = matcherOut.length; i--; ) (elem = matcherOut[i]) && -1 < (temp = postFinder ? indexOf(seed, elem) : preMap[i]) && (seed[temp] = !(results[temp] = elem));
                    }
                } else matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut), 
                postFinder ? postFinder(null, results, matcherOut, xml) : push.apply(results, matcherOut);
            });
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            function superMatcher(seed, context, xml, results, outermost) {
                var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += null == contextBackup ? 1 : Math.random() || .1, len = elems.length;
                for (outermost && (outermostContext = context === document || context || outermost); i !== len && null != (elem = elems[i]); i++) {
                    if (byElement && elem) {
                        for (j = 0, context || elem.ownerDocument === document || (setDocument(elem), 
                        xml = !documentIsHTML); matcher = elementMatchers[j++]; ) if (matcher(elem, context || document, xml)) {
                            results.push(elem);
                            break;
                        }
                        outermost && (dirruns = dirrunsUnique);
                    }
                    bySet && ((elem = !matcher && elem) && matchedCount--, seed) && unmatched.push(elem);
                }
                if (matchedCount += i, bySet && i !== matchedCount) {
                    for (j = 0; matcher = setMatchers[j++]; ) matcher(unmatched, setMatched, context, xml);
                    if (seed) {
                        if (0 < matchedCount) for (;i--; ) unmatched[i] || setMatched[i] || (setMatched[i] = pop.call(results));
                        setMatched = condense(setMatched);
                    }
                    push.apply(results, setMatched), outermost && !seed && 0 < setMatched.length && 1 < matchedCount + setMatchers.length && Sizzle.uniqueSort(results);
                }
                return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), 
                unmatched;
            }
            var bySet = 0 < setMatchers.length, byElement = 0 < elementMatchers.length;
            return bySet ? markFunction(superMatcher) : superMatcher;
        }
        return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters(), 
        tokenize = Sizzle.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) return parseOnly ? 0 : cached.slice(0);
            for (soFar = selector, groups = [], preFilters = Expr.preFilter; soFar; ) {
                for (type in matched && !(match = rcomma.exec(soFar)) || (match && (soFar = soFar.slice(match[0].length) || soFar), 
                groups.push(tokens = [])), matched = !1, (match = rcombinators.exec(soFar)) && (matched = match.shift(), 
                tokens.push({
                    value: matched,
                    type: match[0].replace(rtrim, " ")
                }), soFar = soFar.slice(matched.length)), Expr.filter) !(match = matchExpr[type].exec(soFar)) || preFilters[type] && !(match = preFilters[type](match)) || (matched = match.shift(), 
                tokens.push({
                    value: matched,
                    type: type,
                    matches: match
                }), soFar = soFar.slice(matched.length));
                if (!matched) break;
            }
            return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
        }, compile = Sizzle.compile = function(selector, match) {
            var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
                for (i = (match = match || tokenize(selector)).length; i--; ) ((cached = function matcherFromTokens(tokens) {
                    for (var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                        return elem === checkContext;
                    }, implicitRelative, !0), matchAnyContext = addCombinator(function(elem) {
                        return -1 < indexOf(checkContext, elem);
                    }, implicitRelative, !0), matchers = [ function(elem, context, xml) {
                        return elem = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext : matchAnyContext)(elem, context, xml), 
                        checkContext = null, elem;
                    } ]; i < len; i++) if (matcher = Expr.relative[tokens[i].type]) matchers = [ addCombinator(elementMatcher(matchers), matcher) ]; else {
                        if ((matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches))[expando]) {
                            for (j = ++i; j < len && !Expr.relative[tokens[j].type]; j++);
                            return setMatcher(1 < i && elementMatcher(matchers), 1 < i && toSelector(tokens.slice(0, i - 1).concat({
                                value: " " === tokens[i - 2].type ? "*" : ""
                            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                        }
                        matchers.push(matcher);
                    }
                    return elementMatcher(matchers);
                }(match[i]))[expando] ? setMatchers : elementMatchers).push(cached);
                (cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers))).selector = selector;
            }
            return cached;
        }, select = Sizzle.select = function(selector, context, results, seed) {
            var i, tokens, token, type, find, compiled = "function" == typeof selector && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            if (results = results || [], 1 === match.length) {
                if (2 < (tokens = match[0] = match[0].slice(0)).length && "ID" === (token = tokens[0]).type && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
                    if (!(context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0])) return results;
                    compiled && (context = context.parentNode), selector = selector.slice(tokens.shift().value.length);
                }
                for (i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length; i-- && (token = tokens[i], 
                !Expr.relative[type = token.type]); ) if ((find = Expr.find[type]) && (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
                    if (tokens.splice(i, 1), selector = seed.length && toSelector(tokens)) break;
                    return push.apply(results, seed), results;
                }
            }
            return (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context), 
            results;
        }, support.sortStable = expando.split("").sort(sortOrder).join("") === expando, 
        support.detectDuplicates = !!hasDuplicate, setDocument(), support.sortDetached = assert(function(el) {
            return 1 & el.compareDocumentPosition(document.createElement("fieldset"));
        }), assert(function(el) {
            return el.innerHTML = "<a href='#'></a>", "#" === el.firstChild.getAttribute("href");
        }) || addHandle("type|href|height|width", function(elem, name, isXML) {
            if (!isXML) return elem.getAttribute(name, "type" === name.toLowerCase() ? 1 : 2);
        }), support.attributes && assert(function(el) {
            return el.innerHTML = "<input/>", el.firstChild.setAttribute("value", ""), 
            "" === el.firstChild.getAttribute("value");
        }) || addHandle("value", function(elem, name, isXML) {
            if (!isXML && "input" === elem.nodeName.toLowerCase()) return elem.defaultValue;
        }), assert(function(el) {
            return null == el.getAttribute("disabled");
        }) || addHandle(booleans, function(elem, name, isXML) {
            if (!isXML) return !0 === elem[name] ? name.toLowerCase() : (isXML = elem.getAttributeNode(name)) && isXML.specified ? isXML.value : null;
        }), Sizzle;
    }(window), rneedsContext = (jQuery.find = arr, jQuery.expr = arr.selectors, 
    jQuery.expr[":"] = jQuery.expr.pseudos, jQuery.uniqueSort = jQuery.unique = arr.uniqueSort, 
    jQuery.text = arr.getText, jQuery.isXMLDoc = arr.isXML, jQuery.contains = arr.contains, 
    jQuery.escapeSelector = arr.escape, jQuery.expr.match.needsContext);
    function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    }
    var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function winnow(elements, qualifier, not) {
        return isFunction(qualifier) ? jQuery.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
        }) : qualifier.nodeType ? jQuery.grep(elements, function(elem) {
            return elem === qualifier !== not;
        }) : "string" != typeof qualifier ? jQuery.grep(elements, function(elem) {
            return -1 < indexOf.call(qualifier, elem) !== not;
        }) : jQuery.filter(qualifier, elements, not);
    }
    jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        return not && (expr = ":not(" + expr + ")"), 1 === elems.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
            return 1 === elem.nodeType;
        }));
    }, jQuery.fn.extend({
        find: function(selector) {
            var i, ret, len = this.length, self = this;
            if ("string" != typeof selector) return this.pushStack(jQuery(selector).filter(function() {
                for (i = 0; i < len; i++) if (jQuery.contains(self[i], this)) return !0;
            }));
            for (ret = this.pushStack([]), i = 0; i < len; i++) jQuery.find(selector, self[i], ret);
            return 1 < len ? jQuery.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], !1));
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], !0));
        },
        is: function(selector) {
            return !!winnow(this, "string" == typeof selector && rneedsContext.test(selector) ? jQuery(selector) : selector || [], !1).length;
        }
    });
    var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, rparentsprev = ((jQuery.fn.init = function(selector, context, root) {
        if (selector) {
            if (root = root || rootjQuery, "string" != typeof selector) return selector.nodeType ? (this[0] = selector, 
            this.length = 1, this) : isFunction(selector) ? void 0 !== root.ready ? root.ready(selector) : selector(jQuery) : jQuery.makeArray(selector, this);
            if (!(match = "<" === selector[0] && ">" === selector[selector.length - 1] && 3 <= selector.length ? [ null, selector, null ] : rquickExpr.exec(selector)) || !match[1] && context) return (!context || context.jquery ? context || root : this.constructor(context)).find(selector);
            if (match[1]) {
                if (context = context instanceof jQuery ? context[0] : context, 
                jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, !0)), 
                rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) for (var match in context) isFunction(this[match]) ? this[match](context[match]) : this.attr(match, context[match]);
            } else (root = document.getElementById(match[2])) && (this[0] = root, 
            this.length = 1);
        }
        return this;
    }).prototype = jQuery.fn, rootjQuery = jQuery(document), /^(?:parents|prev(?:Until|All))/), guaranteedUnique = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function sibling(cur, dir) {
        for (;(cur = cur[dir]) && 1 !== cur.nodeType; );
        return cur;
    }
    jQuery.fn.extend({
        has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
                for (var i = 0; i < l; i++) if (jQuery.contains(this, targets[i])) return !0;
            });
        },
        closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = "string" != typeof selectors && jQuery(selectors);
            if (!rneedsContext.test(selectors)) for (;i < l; i++) for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) if (cur.nodeType < 11 && (targets ? -1 < targets.index(cur) : 1 === cur.nodeType && jQuery.find.matchesSelector(cur, selectors))) {
                matched.push(cur);
                break;
            }
            return this.pushStack(1 < matched.length ? jQuery.uniqueSort(matched) : matched);
        },
        index: function(elem) {
            return elem ? "string" == typeof elem ? indexOf.call(jQuery(elem), this[0]) : indexOf.call(this, elem.jquery ? elem[0] : elem) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(selector, context) {
            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function(selector) {
            return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector));
        }
    }), jQuery.each({
        parent: function(elem) {
            elem = elem.parentNode;
            return elem && 11 !== elem.nodeType ? elem : null;
        },
        parents: function(elem) {
            return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, i, until) {
            return dir(elem, "parentNode", until);
        },
        next: function(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
            return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
            return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, i, until) {
            return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, i, until) {
            return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
            return siblings(elem.firstChild);
        },
        contents: function(elem) {
            return nodeName(elem, "iframe") ? elem.contentDocument : (nodeName(elem, "template") && (elem = elem.content || elem), 
            jQuery.merge([], elem.childNodes));
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            return (selector = "Until" !== name.slice(-5) ? until : selector) && "string" == typeof selector && (matched = jQuery.filter(selector, matched)), 
            1 < this.length && (guaranteedUnique[name] || jQuery.uniqueSort(matched), 
            rparentsprev.test(name)) && matched.reverse(), this.pushStack(matched);
        };
    });
    var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
    function Identity(v) {
        return v;
    }
    function Thrower(ex) {
        throw ex;
    }
    function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
            value && isFunction(method = value.promise) ? method.call(value).done(resolve).fail(reject) : value && isFunction(method = value.then) ? method.call(value, resolve, reject) : resolve.apply(void 0, [ value ].slice(noValue));
        } catch (value) {
            reject.apply(void 0, [ value ]);
        }
    }
    jQuery.Callbacks = function(options) {
        options = "string" == typeof options ? function(options) {
            var object = {};
            return jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
                object[flag] = !0;
            }), object;
        }(options) : jQuery.extend({}, options);
        function fire() {
            for (locked = locked || options.once, fired = firing = !0; queue.length; firingIndex = -1) for (memory = queue.shift(); ++firingIndex < list.length; ) !1 === list[firingIndex].apply(memory[0], memory[1]) && options.stopOnFalse && (firingIndex = list.length, 
            memory = !1);
            options.memory || (memory = !1), firing = !1, locked && (list = memory ? [] : "");
        }
        var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, self = {
            add: function() {
                return list && (memory && !firing && (firingIndex = list.length - 1, 
                queue.push(memory)), function add(args) {
                    jQuery.each(args, function(_, arg) {
                        isFunction(arg) ? options.unique && self.has(arg) || list.push(arg) : arg && arg.length && "string" !== toType(arg) && add(arg);
                    });
                }(arguments), memory) && !firing && fire(), this;
            },
            remove: function() {
                return jQuery.each(arguments, function(_, arg) {
                    for (var index; -1 < (index = jQuery.inArray(arg, list, index)); ) list.splice(index, 1), 
                    index <= firingIndex && firingIndex--;
                }), this;
            },
            has: function(fn) {
                return fn ? -1 < jQuery.inArray(fn, list) : 0 < list.length;
            },
            empty: function() {
                return list = list && [], this;
            },
            disable: function() {
                return locked = queue = [], list = memory = "", this;
            },
            disabled: function() {
                return !list;
            },
            lock: function() {
                return locked = queue = [], memory || firing || (list = memory = ""), 
                this;
            },
            locked: function() {
                return !!locked;
            },
            fireWith: function(context, args) {
                return locked || (args = [ context, (args = args || []).slice ? args.slice() : args ], 
                queue.push(args), firing) || fire(), this;
            },
            fire: function() {
                return self.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!fired;
            }
        };
        return self;
    }, jQuery.extend({
        Deferred: function(func) {
            var tuples = [ [ "notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2 ], [ "resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected" ] ], state = "pending", promise = {
                state: function() {
                    return state;
                },
                always: function() {
                    return deferred.done(arguments).fail(arguments), this;
                },
                "catch": function(fn) {
                    return promise.then(null, fn);
                },
                pipe: function() {
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        jQuery.each(tuples, function(i, tuple) {
                            var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                            deferred[tuple[1]](function() {
                                var returned = fn && fn.apply(this, arguments);
                                returned && isFunction(returned.promise) ? returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject) : newDefer[tuple[0] + "With"](this, fn ? [ returned ] : arguments);
                            });
                        }), fns = null;
                    }).promise();
                },
                then: function(onFulfilled, onRejected, onProgress) {
                    var maxDepth = 0;
                    function resolve(depth, deferred, handler, special) {
                        return function() {
                            function mightThrow() {
                                var returned, then;
                                if (!(depth < maxDepth)) {
                                    if ((returned = handler.apply(that, args)) === deferred.promise()) throw new TypeError("Thenable self-resolution");
                                    then = returned && ("object" == typeof returned || "function" == typeof returned) && returned.then, 
                                    isFunction(then) ? special ? then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)) : (maxDepth++, 
                                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith))) : (handler !== Identity && (that = void 0, 
                                    args = [ returned ]), (special || deferred.resolveWith)(that, args));
                                }
                            }
                            var that = this, args = arguments, process = special ? mightThrow : function() {
                                try {
                                    mightThrow();
                                } catch (e) {
                                    jQuery.Deferred.exceptionHook && jQuery.Deferred.exceptionHook(e, process.stackTrace), 
                                    maxDepth <= depth + 1 && (handler !== Thrower && (that = void 0, 
                                    args = [ e ]), deferred.rejectWith(that, args));
                                }
                            };
                            depth ? process() : (jQuery.Deferred.getStackHook && (process.stackTrace = jQuery.Deferred.getStackHook()), 
                            window.setTimeout(process));
                        };
                    }
                    return jQuery.Deferred(function(newDefer) {
                        tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)), 
                        tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)), 
                        tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                    }).promise();
                },
                promise: function(obj) {
                    return null != obj ? jQuery.extend(obj, promise) : promise;
                }
            }, deferred = {};
            return jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2], stateString = tuple[5];
                promise[tuple[1]] = list.add, stateString && list.add(function() {
                    state = stateString;
                }, tuples[3 - i][2].disable, tuples[3 - i][3].disable, tuples[0][2].lock, tuples[0][3].lock), 
                list.add(tuple[3].fire), deferred[tuple[0]] = function() {
                    return deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments), 
                    this;
                }, deferred[tuple[0] + "With"] = list.fireWith;
            }), promise.promise(deferred), func && func.call(deferred, deferred), 
            deferred;
        },
        when: function(singleValue) {
            function updateFunc(i) {
                return function(value) {
                    resolveContexts[i] = this, resolveValues[i] = 1 < arguments.length ? slice.call(arguments) : value, 
                    --remaining || master.resolveWith(resolveContexts, resolveValues);
                };
            }
            var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), master = jQuery.Deferred();
            if (remaining <= 1 && (adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining), 
            "pending" === master.state() || isFunction(resolveValues[i] && resolveValues[i].then))) return master.then();
            for (;i--; ) adoptValue(resolveValues[i], updateFunc(i), master.reject);
            return master.promise();
        }
    });
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/, readyList = (jQuery.Deferred.exceptionHook = function(error, stack) {
        window.console && window.console.warn && error && rerrorNames.test(error.name) && window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }, jQuery.readyException = function(error) {
        window.setTimeout(function() {
            throw error;
        });
    }, jQuery.Deferred());
    function completed() {
        document.removeEventListener("DOMContentLoaded", completed), window.removeEventListener("load", completed), 
        jQuery.ready();
    }
    jQuery.fn.ready = function(fn) {
        return readyList.then(fn).catch(function(error) {
            jQuery.readyException(error);
        }), this;
    }, jQuery.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(wait) {
            (!0 === wait ? --jQuery.readyWait : jQuery.isReady) || (jQuery.isReady = !0) !== wait && 0 < --jQuery.readyWait || readyList.resolveWith(document, [ jQuery ]);
        }
    }), jQuery.ready.then = readyList.then, "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(jQuery.ready) : (document.addEventListener("DOMContentLoaded", completed), 
    window.addEventListener("load", completed));
    function access(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = null == key;
        if ("object" === toType(key)) for (i in chainable = !0, key) access(elems, fn, i, key[i], !0, emptyGet, raw); else if (void 0 !== value && (chainable = !0, 
        isFunction(value) || (raw = !0), fn = bulk ? raw ? (fn.call(elems, value), 
        null) : (bulk = fn, function(elem, key, value) {
            return bulk.call(jQuery(elem), value);
        }) : fn)) for (;i < len; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
    }
    var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
    function fcamelCase(all, letter) {
        return letter.toUpperCase();
    }
    function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    }
    function acceptData(owner) {
        return 1 === owner.nodeType || 9 === owner.nodeType || !+owner.nodeType;
    }
    function Data() {
        this.expando = jQuery.expando + Data.uid++;
    }
    Data.uid = 1, Data.prototype = {
        cache: function(owner) {
            var value = owner[this.expando];
            return value || (value = {}, acceptData(owner) && (owner.nodeType ? owner[this.expando] = value : Object.defineProperty(owner, this.expando, {
                value: value,
                configurable: !0
            }))), value;
        },
        set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            if ("string" == typeof data) cache[camelCase(data)] = value; else for (prop in data) cache[camelCase(prop)] = data[prop];
            return cache;
        },
        get: function(owner, key) {
            return void 0 === key ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
        },
        access: function(owner, key, value) {
            return void 0 === key || key && "string" == typeof key && void 0 === value ? this.get(owner, key) : (this.set(owner, key, value), 
            void 0 !== value ? value : key);
        },
        remove: function(owner, key) {
            var i, cache = owner[this.expando];
            if (void 0 !== cache) {
                if (void 0 !== key) {
                    i = (key = Array.isArray(key) ? key.map(camelCase) : (key = camelCase(key)) in cache ? [ key ] : key.match(rnothtmlwhite) || []).length;
                    for (;i--; ) delete cache[key[i]];
                }
                void 0 !== key && !jQuery.isEmptyObject(cache) || (owner.nodeType ? owner[this.expando] = void 0 : delete owner[this.expando]);
            }
        },
        hasData: function(owner) {
            owner = owner[this.expando];
            return void 0 !== owner && !jQuery.isEmptyObject(owner);
        }
    };
    var dataPriv = new Data(), dataUser = new Data(), rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
    function dataAttr(elem, key, data) {
        var name;
        if (void 0 === data && 1 === elem.nodeType) if (name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase(), 
        "string" == typeof (data = elem.getAttribute(name))) {
            try {
                data = function(data) {
                    return "true" === data || "false" !== data && ("null" === data ? null : data === +data + "" ? +data : rbrace.test(data) ? JSON.parse(data) : data);
                }(data);
            } catch (e) {}
            dataUser.set(elem, key, data);
        } else data = void 0;
        return data;
    }
    jQuery.extend({
        hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
            dataUser.remove(elem, name);
        },
        _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
        }
    }), jQuery.fn.extend({
        data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (void 0 !== key) return "object" == typeof key ? this.each(function() {
                dataUser.set(this, key);
            }) : access(this, function(value) {
                var data;
                if (elem && void 0 === value) return void 0 !== (data = dataUser.get(elem, key)) || void 0 !== (data = dataAttr(elem, key)) ? data : void 0;
                this.each(function() {
                    dataUser.set(this, key, value);
                });
            }, null, value, 1 < arguments.length, null, !0);
            if (this.length && (data = dataUser.get(elem), 1 === elem.nodeType) && !dataPriv.get(elem, "hasDataAttrs")) {
                for (i = attrs.length; i--; ) attrs[i] && 0 === (name = attrs[i].name).indexOf("data-") && (name = camelCase(name.slice(5)), 
                dataAttr(elem, name, data[name]));
                dataPriv.set(elem, "hasDataAttrs", !0);
            }
            return data;
        },
        removeData: function(key) {
            return this.each(function() {
                dataUser.remove(this, key);
            });
        }
    }), jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) return queue = dataPriv.get(elem, type = (type || "fx") + "queue"), 
            data && (!queue || Array.isArray(data) ? queue = dataPriv.access(elem, type, jQuery.makeArray(data)) : queue.push(data)), 
            queue || [];
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type);
            "inprogress" === fn && (fn = queue.shift(), startLength--), fn && ("fx" === type && queue.unshift("inprogress"), 
            delete hooks.stop, fn.call(elem, function() {
                jQuery.dequeue(elem, type);
            }, hooks)), !startLength && hooks && hooks.empty.fire();
        },
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    dataPriv.remove(elem, [ type + "queue", key ]);
                })
            });
        }
    }), jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            return "string" != typeof type && (data = type, type = "fx", setter--), 
            arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                jQuery._queueHooks(this, type), "fx" === type && "inprogress" !== queue[0] && jQuery.dequeue(this, type);
            });
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        },
        promise: function(type, obj) {
            function resolve() {
                --count || defer.resolveWith(elements, [ elements ]);
            }
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length;
            for ("string" != typeof type && (obj = type, type = void 0), type = type || "fx"; i--; ) (tmp = dataPriv.get(elements[i], type + "queueHooks")) && tmp.empty && (count++, 
            tmp.empty.add(resolve));
            return resolve(), defer.promise(obj);
        }
    });
    function isHiddenWithinTree(elem, el) {
        return "none" === (elem = el || elem).style.display || "" === elem.style.display && jQuery.contains(elem.ownerDocument, elem) && "none" === jQuery.css(elem, "display");
    }
    function swap(elem, options, callback, args) {
        var name, old = {};
        for (name in options) old[name] = elem.style[name], elem.style[name] = options[name];
        for (name in callback = callback.apply(elem, args || []), options) elem.style[name] = old[name];
        return callback;
    }
    var arr = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, rcssNum = new RegExp("^(?:([+-])=|)(" + arr + ")([a-z%]*)$", "i"), cssExpand = [ "Top", "Right", "Bottom", "Left" ];
    function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
        } : function() {
            return jQuery.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = (jQuery.cssNumber[prop] || "px" !== unit && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
            for (unit = unit || initialInUnit[3], initialInUnit = +(initial /= 2) || 1; maxIterations--; ) jQuery.style(elem, prop, initialInUnit + unit), 
            (1 - scale) * (1 - (scale = currentValue() / initial || .5)) <= 0 && (maxIterations = 0), 
            initialInUnit /= scale;
            jQuery.style(elem, prop, (initialInUnit *= 2) + unit), valueParts = valueParts || [];
        }
        return valueParts && (initialInUnit = +initialInUnit || +initial || 0, adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2], 
        tween) && (tween.unit = unit, tween.start = initialInUnit, tween.end = adjusted), 
        adjusted;
    }
    var defaultDisplayMap = {};
    function showHide(elements, show) {
        for (var display, elem, values = [], index = 0, length = elements.length; index < length; index++) (elem = elements[index]).style && (display = elem.style.display, 
        show ? ("none" === display && (values[index] = dataPriv.get(elem, "display") || null, 
        values[index] || (elem.style.display = "")), "" === elem.style.display && isHiddenWithinTree(elem) && (values[index] = function(elem) {
            var doc = elem.ownerDocument, elem = elem.nodeName, display = defaultDisplayMap[elem];
            return display || (doc = doc.body.appendChild(doc.createElement(elem)), 
            display = jQuery.css(doc, "display"), doc.parentNode.removeChild(doc), 
            defaultDisplayMap[elem] = display = "none" === display ? "block" : display), 
            display;
        }(elem))) : "none" !== display && (values[index] = "none", dataPriv.set(elem, "display", display)));
        for (index = 0; index < length; index++) null != values[index] && (elements[index].style.display = values[index]);
        return elements;
    }
    jQuery.fn.extend({
        show: function() {
            return showHide(this, !0);
        },
        hide: function() {
            return showHide(this);
        },
        toggle: function(state) {
            return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each(function() {
                isHiddenWithinTree(this) ? jQuery(this).show() : jQuery(this).hide();
            });
        }
    });
    var rcheckableType = /^(?:checkbox|radio)$/i, rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, rscriptType = /^$|^module$|\/(?:java|ecma)script/i, wrapMap = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    function getAll(context, tag) {
        var ret = void 0 !== context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : void 0 !== context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];
        return void 0 === tag || tag && nodeName(context, tag) ? jQuery.merge([ context ], ret) : ret;
    }
    function setGlobalEval(elems, refElements) {
        for (var i = 0, l = elems.length; i < l; i++) dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
    wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, 
    wrapMap.th = wrapMap.td;
    var div, rhtml = /<|&#?\w+;/;
    function buildFragment(elems, context, scripts, selection, ignored) {
        for (var elem, tmp, tag, contains, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length; i < l; i++) if ((elem = elems[i]) || 0 === elem) if ("object" === toType(elem)) jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem); else if (rhtml.test(elem)) {
            for (tmp = tmp || fragment.appendChild(context.createElement("div")), 
            tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase(), tag = wrapMap[tag] || wrapMap._default, 
            tmp.innerHTML = tag[1] + jQuery.htmlPrefilter(elem) + tag[2], j = tag[0]; j--; ) tmp = tmp.lastChild;
            jQuery.merge(nodes, tmp.childNodes), (tmp = fragment.firstChild).textContent = "";
        } else nodes.push(context.createTextNode(elem));
        for (fragment.textContent = "", i = 0; elem = nodes[i++]; ) if (selection && -1 < jQuery.inArray(elem, selection)) ignored && ignored.push(elem); else if (contains = jQuery.contains(elem.ownerDocument, elem), 
        tmp = getAll(fragment.appendChild(elem), "script"), contains && setGlobalEval(tmp), 
        scripts) for (j = 0; elem = tmp[j++]; ) rscriptType.test(elem.type || "") && scripts.push(elem);
        return fragment;
    }
    div = document.createDocumentFragment().appendChild(document.createElement("div")), 
    (input = document.createElement("input")).setAttribute("type", "radio"), input.setAttribute("checked", "checked"), 
    input.setAttribute("name", "t"), div.appendChild(input), support.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked, 
    div.innerHTML = "<textarea>x</textarea>", support.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue;
    var documentElement = document.documentElement, rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
    function returnTrue() {
        return !0;
    }
    function returnFalse() {
        return !1;
    }
    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (err) {}
    }
    function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        if ("object" == typeof types) {
            for (type in "string" != typeof selector && (data = data || selector, 
            selector = void 0), types) on(elem, type, selector, data, types[type], one);
            return elem;
        }
        if (null == data && null == fn ? (fn = selector, data = selector = void 0) : null == fn && ("string" == typeof selector ? (fn = data, 
        data = void 0) : (fn = data, data = selector, selector = void 0)), !1 === fn) fn = returnFalse; else if (!fn) return elem;
        return 1 === one && (origFn = fn, (fn = function(event) {
            return jQuery().off(event), origFn.apply(this, arguments);
        }).guid = origFn.guid || (origFn.guid = jQuery.guid++)), elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
        });
    }
    jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, events, t, special, handlers, type, tmp, origType, elemData = dataPriv.get(elem);
            if (elemData) for (handler.handler && (handler = (handleObjIn = handler).handler, 
            selector = handleObjIn.selector), selector && jQuery.find.matchesSelector(documentElement, selector), 
            handler.guid || (handler.guid = jQuery.guid++), events = (events = elemData.events) || (elemData.events = {}), 
            eventHandle = (eventHandle = elemData.handle) || (elemData.handle = function(e) {
                return void 0 !== jQuery && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
            }), t = (types = (types || "").match(rnothtmlwhite) || [ "" ]).length; t--; ) type = origType = (tmp = rtypenamespace.exec(types[t]) || [])[1], 
            tmp = (tmp[2] || "").split(".").sort(), type && (special = jQuery.event.special[type] || {}, 
            type = (selector ? special.delegateType : special.bindType) || type, 
            special = jQuery.event.special[type] || {}, origType = jQuery.extend({
                type: type,
                origType: origType,
                data: data,
                handler: handler,
                guid: handler.guid,
                selector: selector,
                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                namespace: tmp.join(".")
            }, handleObjIn), (handlers = events[type]) || ((handlers = events[type] = []).delegateCount = 0, 
            special.setup && !1 !== special.setup.call(elem, data, tmp, eventHandle)) || elem.addEventListener && elem.addEventListener(type, eventHandle), 
            special.add && (special.add.call(elem, origType), origType.handler.guid || (origType.handler.guid = handler.guid)), 
            selector ? handlers.splice(handlers.delegateCount++, 0, origType) : handlers.push(origType), 
            jQuery.event.global[type] = !0);
        },
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (elemData && (events = elemData.events)) {
                for (t = (types = (types || "").match(rnothtmlwhite) || [ "" ]).length; t--; ) if (type = origType = (tmp = rtypenamespace.exec(types[t]) || [])[1], 
                namespaces = (tmp[2] || "").split(".").sort(), type) {
                    for (special = jQuery.event.special[type] || {}, handlers = events[type = (selector ? special.delegateType : special.bindType) || type] || [], 
                    tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                    origCount = j = handlers.length; j--; ) handleObj = handlers[j], 
                    !mappedTypes && origType !== handleObj.origType || handler && handler.guid !== handleObj.guid || tmp && !tmp.test(handleObj.namespace) || selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector) || (handlers.splice(j, 1), 
                    handleObj.selector && handlers.delegateCount--, special.remove && special.remove.call(elem, handleObj));
                    origCount && !handlers.length && (special.teardown && !1 !== special.teardown.call(elem, namespaces, elemData.handle) || jQuery.removeEvent(elem, type, elemData.handle), 
                    delete events[type]);
                } else for (type in events) jQuery.event.remove(elem, type + types[t], handler, selector, !0);
                jQuery.isEmptyObject(events) && dataPriv.remove(elem, "handle events");
            }
        },
        dispatch: function(nativeEvent) {
            var i, j, matched, handleObj, handlerQueue, event = jQuery.event.fix(nativeEvent), args = new Array(arguments.length), nativeEvent = (dataPriv.get(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
            for (args[0] = event, i = 1; i < arguments.length; i++) args[i] = arguments[i];
            if (event.delegateTarget = this, !special.preDispatch || !1 !== special.preDispatch.call(this, event)) {
                for (handlerQueue = jQuery.event.handlers.call(this, event, nativeEvent), 
                i = 0; (matched = handlerQueue[i++]) && !event.isPropagationStopped(); ) for (event.currentTarget = matched.elem, 
                j = 0; (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped(); ) event.rnamespace && !event.rnamespace.test(handleObj.namespace) || (event.handleObj = handleObj, 
                event.data = handleObj.data, void 0 !== (handleObj = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args)) && !1 === (event.result = handleObj) && (event.preventDefault(), 
                event.stopPropagation()));
                return special.postDispatch && special.postDispatch.call(this, event), 
                event.result;
            }
        },
        handlers: function(event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && cur.nodeType && !("click" === event.type && 1 <= event.button)) for (;cur !== this; cur = cur.parentNode || this) if (1 === cur.nodeType && ("click" !== event.type || !0 !== cur.disabled)) {
                for (matchedHandlers = [], matchedSelectors = {}, i = 0; i < delegateCount; i++) void 0 === matchedSelectors[sel = (handleObj = handlers[i]).selector + " "] && (matchedSelectors[sel] = handleObj.needsContext ? -1 < jQuery(sel, this).index(cur) : jQuery.find(sel, this, null, [ cur ]).length), 
                matchedSelectors[sel] && matchedHandlers.push(handleObj);
                matchedHandlers.length && handlerQueue.push({
                    elem: cur,
                    handlers: matchedHandlers
                });
            }
            return cur = this, delegateCount < handlers.length && handlerQueue.push({
                elem: cur,
                handlers: handlers.slice(delegateCount)
            }), handlerQueue;
        },
        addProp: function(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
                enumerable: !0,
                configurable: !0,
                get: isFunction(hook) ? function() {
                    if (this.originalEvent) return hook(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[name];
                },
                set: function(value) {
                    Object.defineProperty(this, name, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: value
                    });
                }
            });
        },
        fix: function(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== safeActiveElement() && this.focus) return this.focus(), 
                    !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === safeActiveElement() && this.blur) return this.blur(), 
                    !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && nodeName(this, "input")) return this.click(), 
                    !1;
                },
                _default: function(event) {
                    return nodeName(event.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    void 0 !== event.result && event.originalEvent && (event.originalEvent.returnValue = event.result);
                }
            }
        }
    }, jQuery.removeEvent = function(elem, type, handle) {
        elem.removeEventListener && elem.removeEventListener(type, handle);
    }, jQuery.Event = function(src, props) {
        if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
        src && src.type ? (this.originalEvent = src, this.type = src.type, this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && !1 === src.returnValue ? returnTrue : returnFalse, 
        this.target = src.target && 3 === src.target.nodeType ? src.target.parentNode : src.target, 
        this.currentTarget = src.currentTarget, this.relatedTarget = src.relatedTarget) : this.type = src, 
        props && jQuery.extend(this, props), this.timeStamp = src && src.timeStamp || Date.now(), 
        this[jQuery.expando] = !0;
    }, jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue, e && !this.isSimulated && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, jQuery.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(event) {
            var button = event.button;
            return null == event.which && rkeyEvent.test(event.type) ? null != event.charCode ? event.charCode : event.keyCode : !event.which && void 0 !== button && rmouseEvent.test(event.type) ? 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0 : event.which;
        }
    }, jQuery.event.addProp), jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, related = event.relatedTarget, handleObj = event.handleObj;
                return related && (related === this || jQuery.contains(this, related)) || (event.type = handleObj.origType, 
                ret = handleObj.handler.apply(this, arguments), event.type = fix), 
                ret;
            }
        };
    }), jQuery.fn.extend({
        on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) handleObj = types.handleObj, 
            jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler); else {
                if ("object" != typeof types) return !1 !== selector && "function" != typeof selector || (fn = selector, 
                selector = void 0), !1 === fn && (fn = returnFalse), this.each(function() {
                    jQuery.event.remove(this, types, fn, selector);
                });
                for (type in types) this.off(type, selector, types[type]);
            }
            return this;
        }
    });
    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function manipulationTarget(elem, content) {
        return nodeName(elem, "table") && nodeName(11 !== content.nodeType ? content : content.firstChild, "tr") && jQuery(elem).children("tbody")[0] || elem;
    }
    function disableScript(elem) {
        return elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type, 
        elem;
    }
    function restoreScript(elem) {
        return "true/" === (elem.type || "").slice(0, 5) ? elem.type = elem.type.slice(5) : elem.removeAttribute("type"), 
        elem;
    }
    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, pdataCur, events;
        if (1 === dest.nodeType) {
            if (dataPriv.hasData(src) && (pdataOld = dataPriv.access(src), pdataCur = dataPriv.set(dest, pdataOld), 
            events = pdataOld.events)) for (type in delete pdataCur.handle, pdataCur.events = {}, 
            events) for (i = 0, l = events[type].length; i < l; i++) jQuery.event.add(dest, type, events[type][i]);
            dataUser.hasData(src) && (pdataOld = dataUser.access(src), pdataCur = jQuery.extend({}, pdataOld), 
            dataUser.set(dest, pdataCur));
        }
    }
    function domManip(collection, args, callback, ignored) {
        args = concat.apply([], args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        if (valueIsFunction || 1 < l && "string" == typeof value && !support.checkClone && rchecked.test(value)) return collection.each(function(index) {
            var self = collection.eq(index);
            valueIsFunction && (args[0] = value.call(this, index, self.html())), 
            domManip(self, args, callback, ignored);
        });
        if (l && (first = (fragment = buildFragment(args, collection[0].ownerDocument, !1, collection, ignored)).firstChild, 
        1 === fragment.childNodes.length && (fragment = first), first || ignored)) {
            for (hasScripts = (scripts = jQuery.map(getAll(fragment, "script"), disableScript)).length; i < l; i++) node = fragment, 
            i !== iNoClone && (node = jQuery.clone(node, !0, !0), hasScripts) && jQuery.merge(scripts, getAll(node, "script")), 
            callback.call(collection[i], node, i);
            if (hasScripts) for (doc = scripts[scripts.length - 1].ownerDocument, 
            jQuery.map(scripts, restoreScript), i = 0; i < hasScripts; i++) node = scripts[i], 
            rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node) && (node.src && "module" !== (node.type || "").toLowerCase() ? jQuery._evalUrl && jQuery._evalUrl(node.src) : DOMEval(node.textContent.replace(rcleanScript, ""), doc, node));
        }
        return collection;
    }
    function remove(elem, selector, keepData) {
        for (var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0; null != (node = nodes[i]); i++) keepData || 1 !== node.nodeType || jQuery.cleanData(getAll(node)), 
        node.parentNode && (keepData && jQuery.contains(node.ownerDocument, node) && setGlobalEval(getAll(node, "script")), 
        node.parentNode.removeChild(node));
        return elem;
    }
    jQuery.extend({
        htmlPrefilter: function(html) {
            return html.replace(rxhtmlTag, "<$1></$2>");
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, src, dest, nodeName, clone = elem.cloneNode(!0), inPage = jQuery.contains(elem.ownerDocument, elem);
            if (!(support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem))) for (destElements = getAll(clone), 
            i = 0, l = (srcElements = getAll(elem)).length; i < l; i++) src = srcElements[i], 
            dest = destElements[i], nodeName = void 0, "input" === (nodeName = dest.nodeName.toLowerCase()) && rcheckableType.test(src.type) ? dest.checked = src.checked : "input" !== nodeName && "textarea" !== nodeName || (dest.defaultValue = src.defaultValue);
            if (dataAndEvents) if (deepDataAndEvents) for (srcElements = srcElements || getAll(elem), 
            destElements = destElements || getAll(clone), i = 0, l = srcElements.length; i < l; i++) cloneCopyEvent(srcElements[i], destElements[i]); else cloneCopyEvent(elem, clone);
            return 0 < (destElements = getAll(clone, "script")).length && setGlobalEval(destElements, !inPage && getAll(elem, "script")), 
            clone;
        },
        cleanData: function(elems) {
            for (var data, elem, type, special = jQuery.event.special, i = 0; void 0 !== (elem = elems[i]); i++) if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                    if (data.events) for (type in data.events) special[type] ? jQuery.event.remove(elem, type) : jQuery.removeEvent(elem, type, data.handle);
                    elem[dataPriv.expando] = void 0;
                }
                elem[dataUser.expando] && (elem[dataUser.expando] = void 0);
            }
        }
    }), jQuery.fn.extend({
        detach: function(selector) {
            return remove(this, selector, !0);
        },
        remove: function(selector) {
            return remove(this, selector);
        },
        text: function(value) {
            return access(this, function(value) {
                return void 0 === value ? jQuery.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = value);
                });
            }, null, value, arguments.length);
        },
        append: function() {
            return domManip(this, arguments, function(elem) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || manipulationTarget(this, elem).appendChild(elem);
            });
        },
        prepend: function() {
            return domManip(this, arguments, function(elem) {
                var target;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (target = manipulationTarget(this, elem)).insertBefore(elem, target.firstChild);
            });
        },
        before: function() {
            return domManip(this, arguments, function(elem) {
                this.parentNode && this.parentNode.insertBefore(elem, this);
            });
        },
        after: function() {
            return domManip(this, arguments, function(elem) {
                this.parentNode && this.parentNode.insertBefore(elem, this.nextSibling);
            });
        },
        empty: function() {
            for (var elem, i = 0; null != (elem = this[i]); i++) 1 === elem.nodeType && (jQuery.cleanData(getAll(elem, !1)), 
            elem.textContent = "");
            return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            return dataAndEvents = null != dataAndEvents && dataAndEvents, deepDataAndEvents = null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents, 
            this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function(value) {
            return access(this, function(value) {
                var elem = this[0] || {}, i = 0, l = this.length;
                if (void 0 === value && 1 === elem.nodeType) return elem.innerHTML;
                if ("string" == typeof value && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                    value = jQuery.htmlPrefilter(value);
                    try {
                        for (;i < l; i++) 1 === (elem = this[i] || {}).nodeType && (jQuery.cleanData(getAll(elem, !1)), 
                        elem.innerHTML = value);
                        elem = 0;
                    } catch (e) {}
                }
                elem && this.empty().append(value);
            }, null, value, arguments.length);
        },
        replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
                var parent = this.parentNode;
                jQuery.inArray(this, ignored) < 0 && (jQuery.cleanData(getAll(this)), 
                parent) && parent.replaceChild(elem, this);
            }, ignored);
        }
    }), jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            for (var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0; i <= last; i++) elems = i === last ? this : this.clone(!0), 
            jQuery(insert[i])[original](elems), push.apply(ret, elems.get());
            return this.pushStack(ret);
        };
    });
    function getStyles(elem) {
        var view = elem.ownerDocument.defaultView;
        return (view = view && view.opener ? view : window).getComputedStyle(elem);
    }
    var rnumnonpx = new RegExp("^(" + arr + ")(?!px)[a-z%]+$", "i"), rboxStyle = new RegExp(cssExpand.join("|"), "i");
    function curCSS(elem, name, computed) {
        var maxWidth, ret, style = elem.style;
        return (computed = computed || getStyles(elem)) && ("" !== (ret = computed.getPropertyValue(name) || computed[name]) || jQuery.contains(elem.ownerDocument, elem) || (ret = jQuery.style(elem, name)), 
        !support.pixelBoxStyles()) && rnumnonpx.test(ret) && rboxStyle.test(name) && (elem = style.width, 
        name = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, 
        ret = computed.width, style.width = elem, style.minWidth = name, style.maxWidth = maxWidth), 
        void 0 !== ret ? ret + "" : ret;
    }
    function addGetHookIf(conditionFn, hookFn) {
        return {
            get: function() {
                if (!conditionFn()) return (this.get = hookFn).apply(this, arguments);
                delete this.get;
            }
        };
    }
    !function() {
        function computeStyleTests() {
            var divStyle;
            div && (container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
            documentElement.appendChild(container).appendChild(div), divStyle = window.getComputedStyle(div), 
            pixelPositionVal = "1%" !== divStyle.top, reliableMarginLeftVal = 12 === roundPixelMeasures(divStyle.marginLeft), 
            div.style.right = "60%", pixelBoxStylesVal = 36 === roundPixelMeasures(divStyle.right), 
            boxSizingReliableVal = 36 === roundPixelMeasures(divStyle.width), div.style.position = "absolute", 
            scrollboxSizeVal = 36 === div.offsetWidth || "absolute", documentElement.removeChild(container), 
            div = null);
        }
        function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
        div.style && (div.style.backgroundClip = "content-box", div.cloneNode(!0).style.backgroundClip = "", 
        support.clearCloneStyle = "content-box" === div.style.backgroundClip, jQuery.extend(support, {
            boxSizingReliable: function() {
                return computeStyleTests(), boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
                return computeStyleTests(), pixelBoxStylesVal;
            },
            pixelPosition: function() {
                return computeStyleTests(), pixelPositionVal;
            },
            reliableMarginLeft: function() {
                return computeStyleTests(), reliableMarginLeftVal;
            },
            scrollboxSize: function() {
                return computeStyleTests(), scrollboxSizeVal;
            }
        }));
    }();
    var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rcustomProp = /^--/, cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
    }, cssPrefixes = [ "Webkit", "Moz", "ms" ], emptyStyle = document.createElement("div").style;
    function finalPropName(name) {
        return jQuery.cssProps[name] || (jQuery.cssProps[name] = function(name) {
            if (name in emptyStyle) return name;
            for (var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length; i--; ) if ((name = cssPrefixes[i] + capName) in emptyStyle) return name;
        }(name) || name);
    }
    function setPositiveNumber(elem, value, subtract) {
        var matches = rcssNum.exec(value);
        return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
    }
    function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = "width" === dimension ? 1 : 0, extra = 0, delta = 0;
        if (box === (isBorderBox ? "border" : "content")) return 0;
        for (;i < 4; i += 2) "margin" === box && (delta += jQuery.css(elem, box + cssExpand[i], !0, styles)), 
        isBorderBox ? ("content" === box && (delta -= jQuery.css(elem, "padding" + cssExpand[i], !0, styles)), 
        "margin" !== box && (delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles))) : (delta += jQuery.css(elem, "padding" + cssExpand[i], !0, styles), 
        "padding" !== box ? delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles) : extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles));
        return !isBorderBox && 0 <= computedVal && (delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - .5))), 
        delta;
    }
    function getWidthOrHeight(elem, dimension, extra) {
        var styles = getStyles(elem), val = curCSS(elem, dimension, styles), isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", !1, styles), valueIsBorderBox = isBorderBox;
        if (rnumnonpx.test(val)) {
            if (!extra) return val;
            val = "auto";
        }
        return valueIsBorderBox = valueIsBorderBox && (support.boxSizingReliable() || val === elem.style[dimension]), 
        "auto" !== val && (parseFloat(val) || "inline" !== jQuery.css(elem, "display", !1, styles)) || (val = elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)], 
        valueIsBorderBox = !0), (val = parseFloat(val) || 0) + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px";
    }
    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) return "" === (computed = curCSS(elem, "opacity")) ? "1" : computed;
                }
            }
        },
        cssNumber: {
            "animationIterationCount": !0,
            "columnCount": !0,
            "fillOpacity": !0,
            "flexGrow": !0,
            "flexShrink": !0,
            "fontWeight": !0,
            "lineHeight": !0,
            "opacity": !0,
            "order": !0,
            "orphans": !0,
            "widows": !0,
            "zIndex": !0,
            "zoom": !0
        },
        cssProps: {},
        style: function(elem, name, value, extra) {
            if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
                var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
                if (isCustomProp || (name = finalPropName(origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], 
                void 0 === value) return hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, !1, extra)) ? ret : style[name];
                "string" === (type = typeof value) && (ret = rcssNum.exec(value)) && ret[1] && (value = adjustCSS(elem, name, ret), 
                type = "number"), null == value || value != value || ("number" === type && (value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px")), 
                support.clearCloneStyle || "" !== value || 0 !== name.indexOf("background") || (style[name] = "inherit"), 
                hooks && "set" in hooks && void 0 === (value = hooks.set(elem, value, extra))) || (isCustomProp ? style.setProperty(name, value) : style[name] = value);
            }
        },
        css: function(elem, name, extra, styles) {
            var val, origName = camelCase(name);
            return rcustomProp.test(name) || (name = finalPropName(origName)), "normal" === (val = void 0 === (val = (origName = jQuery.cssHooks[name] || jQuery.cssHooks[origName]) && "get" in origName ? origName.get(elem, !0, extra) : val) ? curCSS(elem, name, styles) : val) && name in cssNormalTransform && (val = cssNormalTransform[name]), 
            ("" === extra || extra) && (origName = parseFloat(val), !0 === extra || isFinite(origName)) ? origName || 0 : val;
        }
    }), jQuery.each([ "height", "width" ], function(i, dimension) {
        jQuery.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
                if (computed) return !rdisplayswap.test(jQuery.css(elem, "display")) || elem.getClientRects().length && elem.getBoundingClientRect().width ? getWidthOrHeight(elem, dimension, extra) : swap(elem, cssShow, function() {
                    return getWidthOrHeight(elem, dimension, extra);
                });
            },
            set: function(elem, value, extra) {
                var styles = getStyles(elem), isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", !1, styles), extra = extra && boxModelAdjustment(elem, dimension, extra, isBorderBox, styles);
                return isBorderBox && support.scrollboxSize() === styles.position && (extra -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", !1, styles) - .5)), 
                extra && (isBorderBox = rcssNum.exec(value)) && "px" !== (isBorderBox[3] || "px") && (elem.style[dimension] = value, 
                value = jQuery.css(elem, dimension)), setPositiveNumber(0, value, extra);
            }
        };
    }), jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
        if (computed) return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
            marginLeft: 0
        }, function() {
            return elem.getBoundingClientRect().left;
        })) + "px";
    }), jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                for (var i = 0, expanded = {}, parts = "string" == typeof value ? value.split(" ") : [ value ]; i < 4; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                return expanded;
            }
        }, "margin" !== prefix && (jQuery.cssHooks[prefix + suffix].set = setPositiveNumber);
    }), jQuery.fn.extend({
        css: function(name, value) {
            return access(this, function(elem, name, value) {
                var styles, len, map = {}, i = 0;
                if (Array.isArray(name)) {
                    for (styles = getStyles(elem), len = name.length; i < len; i++) map[name[i]] = jQuery.css(elem, name[i], !1, styles);
                    return map;
                }
                return void 0 !== value ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, 1 < arguments.length);
        }
    }), ((jQuery.Tween = Tween).prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem, this.prop = prop, this.easing = easing || jQuery.easing._default, 
            this.options = options, this.start = this.now = this.cur(), this.end = end, 
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return (hooks && hooks.get ? hooks : Tween.propHooks._default).get(this);
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            return this.options.duration ? this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : this.pos = eased = percent, 
            this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            (hooks && hooks.set ? hooks : Tween.propHooks._default).set(this), this;
        }
    }).init.prototype = Tween.prototype, (Tween.propHooks = {
        _default: {
            get: function(tween) {
                return 1 !== tween.elem.nodeType || null != tween.elem[tween.prop] && null == tween.elem.style[tween.prop] ? tween.elem[tween.prop] : (tween = jQuery.css(tween.elem, tween.prop, "")) && "auto" !== tween ? tween : 0;
            },
            set: function(tween) {
                jQuery.fx.step[tween.prop] ? jQuery.fx.step[tween.prop](tween) : 1 !== tween.elem.nodeType || null == tween.elem.style[jQuery.cssProps[tween.prop]] && !jQuery.cssHooks[tween.prop] ? tween.elem[tween.prop] = tween.now : jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
            }
        }
    }).scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            tween.elem.nodeType && tween.elem.parentNode && (tween.elem[tween.prop] = tween.now);
        }
    }, jQuery.easing = {
        linear: function(p) {
            return p;
        },
        swing: function(p) {
            return .5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
    }, jQuery.fx = Tween.prototype.init, jQuery.fx.step = {};
    var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
    function schedule() {
        inProgress && (!1 === document.hidden && window.requestAnimationFrame ? window.requestAnimationFrame(schedule) : window.setTimeout(schedule, jQuery.fx.interval), 
        jQuery.fx.tick());
    }
    function createFxNow() {
        return window.setTimeout(function() {
            fxNow = void 0;
        }), fxNow = Date.now();
    }
    function genFx(type, includeWidth) {
        var which, i = 0, attrs = {
            height: type
        };
        for (includeWidth = includeWidth ? 1 : 0; i < 4; i += 2 - includeWidth) attrs["margin" + (which = cssExpand[i])] = attrs["padding" + which] = type;
        return includeWidth && (attrs.opacity = attrs.width = type), attrs;
    }
    function createTween(value, prop, animation) {
        for (var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length; index < length; index++) if (tween = collection[index].call(animation, prop, value)) return tween;
    }
    function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
        }), tick = function() {
            if (!stopped) {
                for (var currentTime = fxNow || createFxNow(), currentTime = Math.max(0, animation.startTime + animation.duration - currentTime), percent = 1 - (currentTime / animation.duration || 0), index = 0, length = animation.tweens.length; index < length; index++) animation.tweens[index].run(percent);
                if (deferred.notifyWith(elem, [ animation, percent, currentTime ]), 
                percent < 1 && length) return currentTime;
                length || deferred.notifyWith(elem, [ animation, 1, 0 ]), deferred.resolveWith(elem, [ animation ]);
            }
            return !1;
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(!0, {
                specialEasing: {},
                easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
                end = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                return animation.tweens.push(end), end;
            },
            stop: function(gotoEnd) {
                var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                if (!stopped) {
                    for (stopped = !0; index < length; index++) animation.tweens[index].run(1);
                    gotoEnd ? (deferred.notifyWith(elem, [ animation, 1, 0 ]), deferred.resolveWith(elem, [ animation, gotoEnd ])) : deferred.rejectWith(elem, [ animation, gotoEnd ]);
                }
                return this;
            }
        }), props = animation.props;
        for (!function(props, specialEasing) {
            var index, name, easing, value, hooks;
            for (index in props) if (easing = specialEasing[name = camelCase(index)], 
            value = props[index], Array.isArray(value) && (easing = value[1], value = props[index] = value[0]), 
            index !== name && (props[name] = value, delete props[index]), (hooks = jQuery.cssHooks[name]) && "expand" in hooks) for (index in value = hooks.expand(value), 
            delete props[name], value) index in props || (props[index] = value[index], 
            specialEasing[index] = easing); else specialEasing[name] = easing;
        }(props, animation.opts.specialEasing); index < length; index++) if (result = Animation.prefilters[index].call(animation, elem, props, animation.opts)) return isFunction(result.stop) && (jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result)), 
        result;
        return jQuery.map(props, createTween, animation), isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), 
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always), 
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        })), animation;
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
            "*": [ function(prop, value) {
                var tween = this.createTween(prop, value);
                return adjustCSS(tween.elem, prop, rcssNum.exec(value), tween), 
                tween;
            } ]
        },
        tweener: function(props, callback) {
            for (var prop, index = 0, length = (props = isFunction(props) ? (callback = props, 
            [ "*" ]) : props.match(rnothtmlwhite)).length; index < length; index++) prop = props[index], 
            Animation.tweeners[prop] = Animation.tweeners[prop] || [], Animation.tweeners[prop].unshift(callback);
        },
        prefilters: [ function(elem, props, opts) {
            var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
            for (prop in opts.queue || (null == (hooks = jQuery._queueHooks(elem, "fx")).unqueued && (hooks.unqueued = 0, 
            oldfire = hooks.empty.fire, hooks.empty.fire = function() {
                hooks.unqueued || oldfire();
            }), hooks.unqueued++, anim.always(function() {
                anim.always(function() {
                    hooks.unqueued--, jQuery.queue(elem, "fx").length || hooks.empty.fire();
                });
            })), props) if (value = props[prop], rfxtypes.test(value)) {
                if (delete props[prop], toggle = toggle || "toggle" === value, value === (hidden ? "hide" : "show")) {
                    if ("show" !== value || !dataShow || void 0 === dataShow[prop]) continue;
                    hidden = !0;
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
            if ((propTween = !jQuery.isEmptyObject(props)) || !jQuery.isEmptyObject(orig)) for (prop in isBox && 1 === elem.nodeType && (opts.overflow = [ style.overflow, style.overflowX, style.overflowY ], 
            null == (restoreDisplay = dataShow && dataShow.display) && (restoreDisplay = dataPriv.get(elem, "display")), 
            "none" === (isBox = jQuery.css(elem, "display")) && (restoreDisplay ? isBox = restoreDisplay : (showHide([ elem ], !0), 
            restoreDisplay = elem.style.display || restoreDisplay, isBox = jQuery.css(elem, "display"), 
            showHide([ elem ]))), "inline" === isBox || "inline-block" === isBox && null != restoreDisplay) && "none" === jQuery.css(elem, "float") && (propTween || (anim.done(function() {
                style.display = restoreDisplay;
            }), null == restoreDisplay && (isBox = style.display, restoreDisplay = "none" === isBox ? "" : isBox)), 
            style.display = "inline-block"), opts.overflow && (style.overflow = "hidden", 
            anim.always(function() {
                style.overflow = opts.overflow[0], style.overflowX = opts.overflow[1], 
                style.overflowY = opts.overflow[2];
            })), propTween = !1, orig) propTween || (dataShow ? "hidden" in dataShow && (hidden = dataShow.hidden) : dataShow = dataPriv.access(elem, "fxshow", {
                display: restoreDisplay
            }), toggle && (dataShow.hidden = !hidden), hidden && showHide([ elem ], !0), 
            anim.done(function() {
                for (prop in hidden || showHide([ elem ]), dataPriv.remove(elem, "fxshow"), 
                orig) jQuery.style(elem, prop, orig[prop]);
            })), propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim), 
            prop in dataShow || (dataShow[prop] = propTween.start, hidden && (propTween.end = propTween.start, 
            propTween.start = 0));
        } ],
        prefilter: function(callback, prepend) {
            prepend ? Animation.prefilters.unshift(callback) : Animation.prefilters.push(callback);
        }
    }), jQuery.speed = function(speed, easing, fn) {
        var opt = speed && "object" == typeof speed ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
        };
        return jQuery.fx.off ? opt.duration = 0 : "number" != typeof opt.duration && (opt.duration in jQuery.fx.speeds ? opt.duration = jQuery.fx.speeds[opt.duration] : opt.duration = jQuery.fx.speeds._default), 
        null != opt.queue && !0 !== opt.queue || (opt.queue = "fx"), opt.old = opt.complete, 
        opt.complete = function() {
            isFunction(opt.old) && opt.old.call(this), opt.queue && jQuery.dequeue(this, opt.queue);
        }, opt;
    }, jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
            function doAnimation() {
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                (empty || dataPriv.get(this, "finish")) && anim.stop(!0);
            }
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback);
            return doAnimation.finish = doAnimation, empty || !1 === optall.queue ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
            function stopQueue(hooks) {
                var stop = hooks.stop;
                delete hooks.stop, stop(gotoEnd);
            }
            return "string" != typeof type && (gotoEnd = clearQueue, clearQueue = type, 
            type = void 0), clearQueue && !1 !== type && this.queue(type || "fx", []), 
            this.each(function() {
                var dequeue = !0, index = null != type && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                if (index) data[index] && data[index].stop && stopQueue(data[index]); else for (index in data) data[index] && data[index].stop && rrun.test(index) && stopQueue(data[index]);
                for (index = timers.length; index--; ) timers[index].elem !== this || null != type && timers[index].queue !== type || (timers[index].anim.stop(gotoEnd), 
                dequeue = !1, timers.splice(index, 1));
                !dequeue && gotoEnd || jQuery.dequeue(this, type);
            });
        },
        finish: function(type) {
            return !1 !== type && (type = type || "fx"), this.each(function() {
                var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                for (data.finish = !0, jQuery.queue(this, type, []), hooks && hooks.stop && hooks.stop.call(this, !0), 
                index = timers.length; index--; ) timers[index].elem === this && timers[index].queue === type && (timers[index].anim.stop(!0), 
                timers.splice(index, 1));
                for (index = 0; index < length; index++) queue[index] && queue[index].finish && queue[index].finish.call(this);
                delete data.finish;
            });
        }
    }), jQuery.each([ "toggle", "show", "hide" ], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return null == speed || "boolean" == typeof speed ? cssFn.apply(this, arguments) : this.animate(genFx(name, !0), speed, easing, callback);
        };
    }), jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    }), jQuery.timers = [], jQuery.fx.tick = function() {
        var timer, i = 0, timers = jQuery.timers;
        for (fxNow = Date.now(); i < timers.length; i++) (timer = timers[i])() || timers[i] !== timer || timers.splice(i--, 1);
        timers.length || jQuery.fx.stop(), fxNow = void 0;
    }, jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer), jQuery.fx.start();
    }, jQuery.fx.interval = 13, jQuery.fx.start = function() {
        inProgress || (inProgress = !0, schedule());
    }, jQuery.fx.stop = function() {
        inProgress = null;
    }, jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, jQuery.fn.delay = function(time, type) {
        return time = jQuery.fx && jQuery.fx.speeds[time] || time, this.queue(type = type || "fx", function(next, hooks) {
            var timeout = window.setTimeout(next, time);
            hooks.stop = function() {
                window.clearTimeout(timeout);
            };
        });
    }, function() {
        var input = document.createElement("input"), opt = document.createElement("select").appendChild(document.createElement("option"));
        input.type = "checkbox", support.checkOn = "" !== input.value, support.optSelected = opt.selected, 
        (input = document.createElement("input")).value = "t", input.type = "radio", 
        support.radioValue = "t" === input.value;
    }();
    var boolHook, attrHandle = jQuery.expr.attrHandle, rfocusable = (jQuery.fn.extend({
        attr: function(name, value) {
            return access(this, jQuery.attr, name, value, 1 < arguments.length);
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        }
    }), jQuery.extend({
        attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (3 !== nType && 8 !== nType && 2 !== nType) return void 0 === elem.getAttribute ? jQuery.prop(elem, name, value) : (1 === nType && jQuery.isXMLDoc(elem) || (hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0)), 
            void 0 !== value ? null === value ? void jQuery.removeAttr(elem, name) : hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : (elem.setAttribute(name, value + ""), 
            value) : !(hooks && "get" in hooks && null !== (ret = hooks.get(elem, name))) && null == (ret = jQuery.find.attr(elem, name)) ? void 0 : ret);
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    var val;
                    if (!support.radioValue && "radio" === value && nodeName(elem, "input")) return val = elem.value, 
                    elem.setAttribute("type", value), val && (elem.value = val), 
                    value;
                }
            }
        },
        removeAttr: function(elem, value) {
            var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && 1 === elem.nodeType) for (;name = attrNames[i++]; ) elem.removeAttribute(name);
        }
    }), boolHook = {
        set: function(elem, value, name) {
            return !1 === value ? jQuery.removeAttr(elem, name) : elem.setAttribute(name, name), 
            name;
        }
    }, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name, isXML) {
            var ret, handle, lowercaseName = name.toLowerCase();
            return isXML || (handle = attrHandle[lowercaseName], attrHandle[lowercaseName] = ret, 
            ret = null != getter(elem, name, isXML) ? lowercaseName : null, attrHandle[lowercaseName] = handle), 
            ret;
        };
    }), /^(?:input|select|textarea|button)$/i), rclickable = /^(?:a|area)$/i;
    function stripAndCollapse(value) {
        return (value.match(rnothtmlwhite) || []).join(" ");
    }
    function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
    }
    function classesToArray(value) {
        return Array.isArray(value) ? value : "string" == typeof value && value.match(rnothtmlwhite) || [];
    }
    jQuery.fn.extend({
        prop: function(name, value) {
            return access(this, jQuery.prop, name, value, 1 < arguments.length);
        },
        removeProp: function(name) {
            return this.each(function() {
                delete this[jQuery.propFix[name] || name];
            });
        }
    }), jQuery.extend({
        prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (3 !== nType && 8 !== nType && 2 !== nType) return 1 === nType && jQuery.isXMLDoc(elem) || (name = jQuery.propFix[name] || name, 
            hooks = jQuery.propHooks[name]), void 0 !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name];
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), support.optSelected || (jQuery.propHooks.selected = {
        get: function(elem) {
            elem = elem.parentNode;
            return elem && elem.parentNode && elem.parentNode.selectedIndex, null;
        },
        set: function(elem) {
            elem = elem.parentNode;
            elem && (elem.selectedIndex, elem.parentNode) && elem.parentNode.selectedIndex;
        }
    }), jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    }), jQuery.fn.extend({
        addClass: function(value) {
            var classes, elem, cur, clazz, j, curValue, i = 0;
            if (isFunction(value)) return this.each(function(j) {
                jQuery(this).addClass(value.call(this, j, getClass(this)));
            });
            if ((classes = classesToArray(value)).length) for (;elem = this[i++]; ) if (curValue = getClass(elem), 
            cur = 1 === elem.nodeType && " " + stripAndCollapse(curValue) + " ") {
                for (j = 0; clazz = classes[j++]; ) cur.indexOf(" " + clazz + " ") < 0 && (cur += clazz + " ");
                curValue !== (curValue = stripAndCollapse(cur)) && elem.setAttribute("class", curValue);
            }
            return this;
        },
        removeClass: function(value) {
            var classes, elem, cur, clazz, j, curValue, i = 0;
            if (isFunction(value)) return this.each(function(j) {
                jQuery(this).removeClass(value.call(this, j, getClass(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ((classes = classesToArray(value)).length) for (;elem = this[i++]; ) if (curValue = getClass(elem), 
            cur = 1 === elem.nodeType && " " + stripAndCollapse(curValue) + " ") {
                for (j = 0; clazz = classes[j++]; ) for (;-1 < cur.indexOf(" " + clazz + " "); ) cur = cur.replace(" " + clazz + " ", " ");
                curValue !== (curValue = stripAndCollapse(cur)) && elem.setAttribute("class", curValue);
            }
            return this;
        },
        toggleClass: function(value, stateVal) {
            var type = typeof value, isValidValue = "string" == type || Array.isArray(value);
            return "boolean" == typeof stateVal && isValidValue ? stateVal ? this.addClass(value) : this.removeClass(value) : isFunction(value) ? this.each(function(i) {
                jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
            }) : this.each(function() {
                var className, i, self, classNames;
                if (isValidValue) for (i = 0, self = jQuery(this), classNames = classesToArray(value); className = classNames[i++]; ) self.hasClass(className) ? self.removeClass(className) : self.addClass(className); else void 0 !== value && "boolean" != type || ((className = getClass(this)) && dataPriv.set(this, "__className__", className), 
                this.setAttribute && this.setAttribute("class", !className && !1 !== value && dataPriv.get(this, "__className__") || ""));
            });
        },
        hasClass: function(selector) {
            for (var elem, i = 0, className = " " + selector + " "; elem = this[i++]; ) if (1 === elem.nodeType && -1 < (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className)) return !0;
            return !1;
        }
    });
    function stopPropagationCallback(e) {
        e.stopPropagation();
    }
    var rreturn = /\r/g, rfocusMorph = (jQuery.fn.extend({
        val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            return arguments.length ? (valueIsFunction = isFunction(value), this.each(function(i) {
                1 !== this.nodeType || (null == (i = valueIsFunction ? value.call(this, i, jQuery(this).val()) : value) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = jQuery.map(i, function(value) {
                    return null == value ? "" : value + "";
                })), (hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]) && "set" in hooks && void 0 !== hooks.set(this, i, "value")) || (this.value = i);
            })) : elem ? (hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()]) && "get" in hooks && void 0 !== (ret = hooks.get(elem, "value")) ? ret : "string" == typeof (ret = elem.value) ? ret.replace(rreturn, "") : null == ret ? "" : ret : void 0;
        }
    }), jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return null != val ? val : stripAndCollapse(jQuery.text(elem));
                }
            },
            select: {
                get: function(elem) {
                    for (var option, options = elem.options, index = elem.selectedIndex, one = "select-one" === elem.type, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0; i < max; i++) if (((option = options[i]).selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                        if (option = jQuery(option).val(), one) return option;
                        values.push(option);
                    }
                    return values;
                },
                set: function(elem, value) {
                    for (var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length; i--; ) ((option = options[i]).selected = -1 < jQuery.inArray(jQuery.valHooks.option.get(option), values)) && (optionSet = !0);
                    return optionSet || (elem.selectedIndex = -1), values;
                }
            }
        }
    }), jQuery.each([ "radio", "checkbox" ], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                if (Array.isArray(value)) return elem.checked = -1 < jQuery.inArray(jQuery(elem).val(), value);
            }
        }, support.checkOn || (jQuery.valHooks[this].get = function(elem) {
            return null === elem.getAttribute("value") ? "on" : elem.value;
        });
    }), support.focusin = "onfocusin" in window, /^(?:focusinfocus|focusoutblur)$/), location = (jQuery.extend(jQuery.event, {
        trigger: function(event, data, elem, onlyHandlers) {
            var i, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [ elem || document ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [], cur = lastElement = tmp = elem = elem || document;
            if (3 !== elem.nodeType && 8 !== elem.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (-1 < type.indexOf(".") && (type = (namespaces = type.split(".")).shift(), 
            namespaces.sort()), ontype = type.indexOf(":") < 0 && "on" + type, (event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" == typeof event && event)).isTrigger = onlyHandlers ? 2 : 3, 
            event.namespace = namespaces.join("."), event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            event.result = void 0, event.target || (event.target = elem), data = null == data ? [ event ] : jQuery.makeArray(data, [ event ]), 
            special = jQuery.event.special[type] || {}, onlyHandlers || !special.trigger || !1 !== special.trigger.apply(elem, data))) {
                if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                    for (bubbleType = special.delegateType || type, rfocusMorph.test(bubbleType + type) || (cur = cur.parentNode); cur; cur = cur.parentNode) eventPath.push(cur), 
                    tmp = cur;
                    tmp === (elem.ownerDocument || document) && eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                }
                for (i = 0; (cur = eventPath[i++]) && !event.isPropagationStopped(); ) lastElement = cur, 
                event.type = 1 < i ? bubbleType : special.bindType || type, (handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle")) && handle.apply(cur, data), 
                (handle = ontype && cur[ontype]) && handle.apply && acceptData(cur) && (event.result = handle.apply(cur, data), 
                !1 === event.result) && event.preventDefault();
                return event.type = type, onlyHandlers || event.isDefaultPrevented() || special._default && !1 !== special._default.apply(eventPath.pop(), data) || !acceptData(elem) || ontype && isFunction(elem[type]) && !isWindow(elem) && ((tmp = elem[ontype]) && (elem[ontype] = null), 
                jQuery.event.triggered = type, event.isPropagationStopped() && lastElement.addEventListener(type, stopPropagationCallback), 
                elem[type](), event.isPropagationStopped() && lastElement.removeEventListener(type, stopPropagationCallback), 
                jQuery.event.triggered = void 0, tmp) && (elem[ontype] = tmp), event.result;
            }
        },
        simulate: function(type, elem, event) {
            event = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: !0
            });
            jQuery.event.trigger(event, null, elem);
        }
    }), jQuery.fn.extend({
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) return jQuery.event.trigger(type, data, elem, !0);
        }
    }), support.focusin || jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, function(orig, fix) {
        function handler(event) {
            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
        }
        jQuery.event.special[fix] = {
            setup: function() {
                var doc = this.ownerDocument || this, attaches = dataPriv.access(doc, fix);
                attaches || doc.addEventListener(orig, handler, !0), dataPriv.access(doc, fix, (attaches || 0) + 1);
            },
            teardown: function() {
                var doc = this.ownerDocument || this, attaches = dataPriv.access(doc, fix) - 1;
                attaches ? dataPriv.access(doc, fix, attaches) : (doc.removeEventListener(orig, handler, !0), 
                dataPriv.remove(doc, fix));
            }
        };
    }), window.location), nonce = Date.now(), rquery = /\?/, rbracket = (jQuery.parseXML = function(data) {
        var xml;
        if (!data || "string" != typeof data) return null;
        try {
            xml = new window.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
            xml = void 0;
        }
        return xml && !xml.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + data), 
        xml;
    }, /\[\]$/), rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    jQuery.param = function(a, traditional) {
        function add(key, valueOrFunction) {
            valueOrFunction = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction, 
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(null == valueOrFunction ? "" : valueOrFunction);
        }
        var prefix, s = [];
        if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) jQuery.each(a, function() {
            add(this.name, this.value);
        }); else for (prefix in a) !function buildParams(prefix, obj, traditional, add) {
            if (Array.isArray(obj)) jQuery.each(obj, function(i, v) {
                traditional || rbracket.test(prefix) ? add(prefix, v) : buildParams(prefix + "[" + ("object" == typeof v && null != v ? i : "") + "]", v, traditional, add);
            }); else if (traditional || "object" !== toType(obj)) add(prefix, obj); else for (var name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
        }(prefix, a[prefix], traditional, add);
        return s.join("&");
    }, jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type;
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(i, elem) {
                var val = jQuery(this).val();
                return null == val ? null : Array.isArray(val) ? jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                }) : {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document.createElement("a");
    function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
            "string" != typeof dataTypeExpression && (func = dataTypeExpression, 
            dataTypeExpression = "*");
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) for (;dataType = dataTypes[i++]; ) "+" === dataType[0] ? (dataType = dataType.slice(1) || "*", 
            (structure[dataType] = structure[dataType] || []).unshift(func)) : (structure[dataType] = structure[dataType] || []).push(func);
        };
    }
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
            var selected;
            return inspected[dataType] = !0, jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                prefilterOrFactory = prefilterOrFactory(options, originalOptions, jqXHR);
                return "string" != typeof prefilterOrFactory || seekingTransport || inspected[prefilterOrFactory] ? seekingTransport ? !(selected = prefilterOrFactory) : void 0 : (options.dataTypes.unshift(prefilterOrFactory), 
                inspect(prefilterOrFactory), !1);
            }), selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) void 0 !== src[key] && ((flatOptions[key] ? target : deep = deep || {})[key] = src[key]);
        return deep && jQuery.extend(!0, target, deep), target;
    }
    originAnchor.href = location.href, jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(location.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
            "object" == typeof url && (options = url, url = void 0);
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, completed, fireGlobals, i, s = jQuery.ajaxSetup({}, options = options || {}), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
                readyState: 0,
                getResponseHeader: function(key) {
                    var match;
                    if (completed) {
                        if (!responseHeaders) for (responseHeaders = {}; match = rheaders.exec(responseHeadersString); ) responseHeaders[match[1].toLowerCase()] = match[2];
                        match = responseHeaders[key.toLowerCase()];
                    }
                    return null == match ? null : match;
                },
                getAllResponseHeaders: function() {
                    return completed ? responseHeadersString : null;
                },
                setRequestHeader: function(name, value) {
                    return null == completed && (name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name, 
                    requestHeaders[name] = value), this;
                },
                overrideMimeType: function(type) {
                    return null == completed && (s.mimeType = type), this;
                },
                statusCode: function(map) {
                    if (map) if (completed) jqXHR.always(map[jqXHR.status]); else for (var code in map) statusCode[code] = [ statusCode[code], map[code] ];
                    return this;
                },
                abort: function(statusText) {
                    statusText = statusText || strAbort;
                    return transport && transport.abort(statusText), done(0, statusText), 
                    this;
                }
            };
            if (deferred.promise(jqXHR), s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"), 
            s.type = options.method || options.type || s.method || s.type, s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [ "" ], 
            null == s.crossDomain) {
                url = document.createElement("a");
                try {
                    url.href = s.url, url.href = url.href, s.crossDomain = originAnchor.protocol + "//" + originAnchor.host != url.protocol + "//" + url.host;
                } catch (e) {
                    s.crossDomain = !0;
                }
            }
            if (s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), 
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), !completed) {
                for (i in (fireGlobals = jQuery.event && s.global) && 0 == jQuery.active++ && jQuery.event.trigger("ajaxStart"), 
                s.type = s.type.toUpperCase(), s.hasContent = !rnoContent.test(s.type), 
                cacheURL = s.url.replace(rhash, ""), s.hasContent ? s.data && s.processData && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && (s.data = s.data.replace(r20, "+")) : (url = s.url.slice(cacheURL.length), 
                s.data && (s.processData || "string" == typeof s.data) && (cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data, 
                delete s.data), !1 === s.cache && (cacheURL = cacheURL.replace(rantiCache, "$1"), 
                url = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + url), 
                s.url = cacheURL + url), s.ifModified && (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]), 
                jQuery.etag[cacheURL]) && jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]), 
                (s.data && s.hasContent && !1 !== s.contentType || options.contentType) && jqXHR.setRequestHeader("Content-Type", s.contentType), 
                jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]), 
                s.headers) jqXHR.setRequestHeader(i, s.headers[i]);
                if (s.beforeSend && (!1 === s.beforeSend.call(callbackContext, jqXHR, s) || completed)) return jqXHR.abort();
                if (strAbort = "abort", completeDeferred.add(s.complete), jqXHR.done(s.success), 
                jqXHR.fail(s.error), transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
                    if (jqXHR.readyState = 1, fireGlobals && globalEventContext.trigger("ajaxSend", [ jqXHR, s ]), 
                    completed) return jqXHR;
                    s.async && 0 < s.timeout && (timeoutTimer = window.setTimeout(function() {
                        jqXHR.abort("timeout");
                    }, s.timeout));
                    try {
                        completed = !1, transport.send(requestHeaders, done);
                    } catch (e) {
                        if (completed) throw e;
                        done(-1, e);
                    }
                } else done(-1, "No Transport");
            }
            return jqXHR;
            function done(status, nativeStatusText, responses, headers) {
                var success, error, response, statusText = nativeStatusText;
                completed || (completed = !0, timeoutTimer && window.clearTimeout(timeoutTimer), 
                transport = void 0, responseHeadersString = headers || "", jqXHR.readyState = 0 < status ? 4 : 0, 
                headers = 200 <= status && status < 300 || 304 === status, responses && (response = function(s, jqXHR, responses) {
                    for (var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes; "*" === dataTypes[0]; ) dataTypes.shift(), 
                    void 0 === ct && (ct = s.mimeType || jqXHR.getResponseHeader("Content-Type"));
                    if (ct) for (type in contents) if (contents[type] && contents[type].test(ct)) {
                        dataTypes.unshift(type);
                        break;
                    }
                    if (dataTypes[0] in responses) finalDataType = dataTypes[0]; else {
                        for (type in responses) {
                            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                                finalDataType = type;
                                break;
                            }
                            firstDataType = firstDataType || type;
                        }
                        finalDataType = finalDataType || firstDataType;
                    }
                    if (finalDataType) return finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), 
                    responses[finalDataType];
                }(s, jqXHR, responses)), response = function(s, response, jqXHR, isSuccess) {
                    var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
                    if (dataTypes[1]) for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
                    for (current = dataTypes.shift(); current; ) if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), 
                    !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), 
                    prev = current, current = dataTypes.shift()) if ("*" === current) current = prev; else if ("*" !== prev && prev !== current) {
                        if (!(conv = converters[prev + " " + current] || converters["* " + current])) for (conv2 in converters) if ((tmp = conv2.split(" "))[1] === current && (conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]])) {
                            !0 === conv ? conv = converters[conv2] : !0 !== converters[conv2] && (current = tmp[0], 
                            dataTypes.unshift(tmp[1]));
                            break;
                        }
                        if (!0 !== conv) if (conv && s.throws) response = conv(response); else try {
                            response = conv(response);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: conv ? e : "No conversion from " + prev + " to " + current
                            };
                        }
                    }
                    return {
                        state: "success",
                        data: response
                    };
                }(s, response, jqXHR, headers), headers ? (s.ifModified && ((responses = jqXHR.getResponseHeader("Last-Modified")) && (jQuery.lastModified[cacheURL] = responses), 
                responses = jqXHR.getResponseHeader("etag")) && (jQuery.etag[cacheURL] = responses), 
                204 === status || "HEAD" === s.type ? statusText = "nocontent" : 304 === status ? statusText = "notmodified" : (statusText = response.state, 
                success = response.data, headers = !(error = response.error))) : (error = statusText, 
                !status && statusText || (statusText = "error", status < 0 && (status = 0))), 
                jqXHR.status = status, jqXHR.statusText = (nativeStatusText || statusText) + "", 
                headers ? deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]) : deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]), 
                jqXHR.statusCode(statusCode), statusCode = void 0, fireGlobals && globalEventContext.trigger(headers ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, headers ? success : error ]), 
                completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]), 
                fireGlobals && (globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]), 
                --jQuery.active || jQuery.event.trigger("ajaxStop")));
            }
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
            return jQuery.get(url, void 0, callback, "script");
        }
    }), jQuery.each([ "get", "post" ], function(i, method) {
        jQuery[method] = function(url, data, callback, type) {
            return isFunction(data) && (type = type || callback, callback = data, 
            data = void 0), jQuery.ajax(jQuery.extend({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            }, jQuery.isPlainObject(url) && url));
        };
    }), jQuery._evalUrl = function(url) {
        return jQuery.ajax({
            url: url,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        });
    }, jQuery.fn.extend({
        wrapAll: function(html) {
            return this[0] && (isFunction(html) && (html = html.call(this[0])), 
            html = jQuery(html, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && html.insertBefore(this[0]), 
            html.map(function() {
                for (var elem = this; elem.firstElementChild; ) elem = elem.firstElementChild;
                return elem;
            }).append(this)), this;
        },
        wrapInner: function(html) {
            return isFunction(html) ? this.each(function(i) {
                jQuery(this).wrapInner(html.call(this, i));
            }) : this.each(function() {
                var self = jQuery(this), contents = self.contents();
                contents.length ? contents.wrapAll(html) : self.append(html);
            });
        },
        wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function(selector) {
            return this.parent(selector).not("body").each(function() {
                jQuery(this).replaceWith(this.childNodes);
            }), this;
        }
    }), jQuery.expr.pseudos.hidden = function(elem) {
        return !jQuery.expr.pseudos.visible(elem);
    }, jQuery.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    }, jQuery.ajaxSettings.xhr = function() {
        try {
            return new window.XMLHttpRequest();
        } catch (e) {}
    };
    var input, xhrSuccessStatus = {
        0: 200,
        1223: 204
    }, xhrSupported = jQuery.ajaxSettings.xhr(), oldCallbacks = (support.cors = !!xhrSupported && "withCredentials" in xhrSupported, 
    support.ajax = xhrSupported = !!xhrSupported, jQuery.ajaxTransport(function(options) {
        var callback, errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) return {
            send: function(headers, complete) {
                var i, xhr = options.xhr();
                if (xhr.open(options.type, options.url, options.async, options.username, options.password), 
                options.xhrFields) for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
                for (i in options.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(options.mimeType), 
                options.crossDomain || headers["X-Requested-With"] || (headers["X-Requested-With"] = "XMLHttpRequest"), 
                headers) xhr.setRequestHeader(i, headers[i]);
                callback = function(type) {
                    return function() {
                        callback && (callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null, 
                        "abort" === type ? xhr.abort() : "error" === type ? "number" != typeof xhr.status ? complete(0, "error") : complete(xhr.status, xhr.statusText) : complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "text" !== (xhr.responseType || "text") || "string" != typeof xhr.responseText ? {
                            binary: xhr.response
                        } : {
                            text: xhr.responseText
                        }, xhr.getAllResponseHeaders()));
                    };
                }, xhr.onload = callback(), errorCallback = xhr.onerror = xhr.ontimeout = callback("error"), 
                void 0 !== xhr.onabort ? xhr.onabort = errorCallback : xhr.onreadystatechange = function() {
                    4 === xhr.readyState && window.setTimeout(function() {
                        callback && errorCallback();
                    });
                }, callback = callback("abort");
                try {
                    xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                    if (callback) throw e;
                }
            },
            abort: function() {
                callback && callback();
            }
        };
    }), jQuery.ajaxPrefilter(function(s) {
        s.crossDomain && (s.contents.script = !1);
    }), jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(text) {
                return jQuery.globalEval(text), text;
            }
        }
    }), jQuery.ajaxPrefilter("script", function(s) {
        void 0 === s.cache && (s.cache = !1), s.crossDomain && (s.type = "GET");
    }), jQuery.ajaxTransport("script", function(s) {
        var script, callback;
        if (s.crossDomain) return {
            send: function(_, complete) {
                script = jQuery("<script>").prop({
                    charset: s.scriptCharset,
                    src: s.url
                }).on("load error", callback = function(evt) {
                    script.remove(), callback = null, evt && complete("error" === evt.type ? 404 : 200, evt.type);
                }), document.head.appendChild(script[0]);
            },
            abort: function() {
                callback && callback();
            }
        };
    }), []), rjsonp = /(=)\?(?=&|$)|\?\?/, _jQuery = (jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
            return this[callback] = !0, callback;
        }
    }), jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = !1 !== s.jsonp && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
        if (jsonProp || "jsonp" === s.dataTypes[0]) return callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, 
        jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : !1 !== s.jsonp && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), 
        s.converters["script json"] = function() {
            return responseContainer || jQuery.error(callbackName + " was not called"), 
            responseContainer[0];
        }, s.dataTypes[0] = "json", overwritten = window[callbackName], window[callbackName] = function() {
            responseContainer = arguments;
        }, jqXHR.always(function() {
            void 0 === overwritten ? jQuery(window).removeProp(callbackName) : window[callbackName] = overwritten, 
            s[callbackName] && (s.jsonpCallback = originalSettings.jsonpCallback, 
            oldCallbacks.push(callbackName)), responseContainer && isFunction(overwritten) && overwritten(responseContainer[0]), 
            responseContainer = overwritten = void 0;
        }), "script";
    }), support.createHTMLDocument = ((input = document.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 
    2 === input.childNodes.length), jQuery.parseHTML = function(data, context, keepScripts) {
        var base;
        return "string" != typeof data ? [] : ("boolean" == typeof context && (keepScripts = context, 
        context = !1), context || (support.createHTMLDocument ? ((base = (context = document.implementation.createHTMLDocument("")).createElement("base")).href = document.location.href, 
        context.head.appendChild(base)) : context = document), base = !keepScripts && [], 
        (keepScripts = rsingleTag.exec(data)) ? [ context.createElement(keepScripts[1]) ] : (keepScripts = buildFragment([ data ], context, base), 
        base && base.length && jQuery(base).remove(), jQuery.merge([], keepScripts.childNodes)));
    }, jQuery.fn.load = function(url, params, callback) {
        var selector, type, response, self = this, off = url.indexOf(" ");
        return -1 < off && (selector = stripAndCollapse(url.slice(off)), url = url.slice(0, off)), 
        isFunction(params) ? (callback = params, params = void 0) : params && "object" == typeof params && (type = "POST"), 
        0 < self.length && jQuery.ajax({
            url: url,
            type: type || "GET",
            dataType: "html",
            data: params
        }).done(function(responseText) {
            response = arguments, self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
        }).always(callback && function(jqXHR, status) {
            self.each(function() {
                callback.apply(this, response || [ jqXHR.responseText, status, jqXHR ]);
            });
        }), this;
    }, jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
        };
    }), jQuery.expr.pseudos.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
        }).length;
    }, jQuery.offset = {
        setOffset: function(elem, options, i) {
            var curCSSTop, curTop, curOffset, curCSSLeft, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            "static" === position && (elem.style.position = "relative"), curOffset = curElem.offset(), 
            curCSSTop = jQuery.css(elem, "top"), curCSSLeft = jQuery.css(elem, "left"), 
            position = ("absolute" === position || "fixed" === position) && -1 < (curCSSTop + curCSSLeft).indexOf("auto") ? (curTop = (position = curElem.position()).top, 
            position.left) : (curTop = parseFloat(curCSSTop) || 0, parseFloat(curCSSLeft) || 0), 
            null != (options = isFunction(options) ? options.call(elem, i, jQuery.extend({}, curOffset)) : options).top && (props.top = options.top - curOffset.top + curTop), 
            null != options.left && (props.left = options.left - curOffset.left + position), 
            "using" in options ? options.using.call(elem, props) : curElem.css(props);
        }
    }, jQuery.fn.extend({
        offset: function(options) {
            var rect, elem;
            return arguments.length ? void 0 === options ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
            }) : (elem = this[0]) ? elem.getClientRects().length ? (rect = elem.getBoundingClientRect(), 
            elem = elem.ownerDocument.defaultView, {
                top: rect.top + elem.pageYOffset,
                left: rect.left + elem.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0;
        },
        position: function() {
            if (this[0]) {
                var offsetParent, offset, doc, elem = this[0], parentOffset = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === jQuery.css(elem, "position")) offset = elem.getBoundingClientRect(); else {
                    for (offset = this.offset(), doc = elem.ownerDocument, offsetParent = elem.offsetParent || doc.documentElement; offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && "static" === jQuery.css(offsetParent, "position"); ) offsetParent = offsetParent.parentNode;
                    offsetParent && offsetParent !== elem && 1 === offsetParent.nodeType && ((parentOffset = jQuery(offsetParent).offset()).top += jQuery.css(offsetParent, "borderTopWidth", !0), 
                    parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", !0));
                }
                return {
                    top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", !0),
                    left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var offsetParent = this.offsetParent; offsetParent && "static" === jQuery.css(offsetParent, "position"); ) offsetParent = offsetParent.offsetParent;
                return offsetParent || documentElement;
            });
        }
    }), jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
            return access(this, function(elem, method, val) {
                var win;
                if (isWindow(elem) ? win = elem : 9 === elem.nodeType && (win = elem.defaultView), 
                void 0 === val) return win ? win[prop] : elem[method];
                win ? win.scrollTo(top ? win.pageXOffset : val, top ? val : win.pageYOffset) : elem[method] = val;
            }, method, val, arguments.length);
        };
    }), jQuery.each([ "top", "left" ], function(i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            if (computed) return computed = curCSS(elem, prop), rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
        });
    }), jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin), extra = defaultExtra || (!0 === margin || !0 === value ? "margin" : "border");
                return access(this, function(elem, type, value) {
                    var doc;
                    return isWindow(elem) ? 0 === funcName.indexOf("outer") ? elem["inner" + name] : elem.document.documentElement["client" + name] : 9 === elem.nodeType ? (doc = elem.documentElement, 
                    Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === value ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : void 0, chainable);
            };
        });
    }), jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(i, name) {
        jQuery.fn[name] = function(data, fn) {
            return 0 < arguments.length ? this.on(name, null, data, fn) : this.trigger(name);
        };
    }), jQuery.fn.extend({
        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
    }), jQuery.fn.extend({
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
            return 1 === arguments.length ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        }
    }), jQuery.proxy = function(fn, context) {
        var args, tmp;
        if ("string" == typeof context && (tmp = fn[context], context = fn, fn = tmp), 
        isFunction(fn)) return args = slice.call(arguments, 2), (tmp = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
        }).guid = fn.guid = fn.guid || jQuery.guid++, tmp;
    }, jQuery.holdReady = function(hold) {
        hold ? jQuery.readyWait++ : jQuery.ready(!0);
    }, jQuery.isArray = Array.isArray, jQuery.parseJSON = JSON.parse, jQuery.nodeName = nodeName, 
    jQuery.isFunction = isFunction, jQuery.isWindow = isWindow, jQuery.camelCase = camelCase, 
    jQuery.type = toType, jQuery.now = Date.now, jQuery.isNumeric = function(obj) {
        var type = jQuery.type(obj);
        return ("number" === type || "string" === type) && !isNaN(obj - parseFloat(obj));
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return jQuery;
    }), window.jQuery), _$ = window.$;
    return jQuery.noConflict = function(deep) {
        return window.$ === jQuery && (window.$ = _$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), 
        jQuery;
    }, noGlobal || (window.jQuery = window.$ = jQuery), jQuery;
}), !function($) {
    "use strict";
    var escape = /["\\\x00-\x1f\x7f-\x9f]/g, meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, hasOwn = Object.prototype.hasOwnProperty;
    $.toJSON = "object" == typeof JSON && JSON.stringify ? JSON.stringify : function(o) {
        if (null === o) return "null";
        var pairs, k, name, val, month, day, type = $.type(o);
        if ("undefined" !== type) {
            if ("number" === type || "boolean" === type) return String(o);
            if ("string" === type) return $.quoteString(o);
            if ("function" == typeof o.toJSON) return $.toJSON(o.toJSON());
            if ("date" === type) return month = o.getUTCMonth() + 1, day = o.getUTCDate(), 
            '"' + o.getUTCFullYear() + "-" + (month = month < 10 ? "0" + month : month) + "-" + (day = day < 10 ? "0" + day : day) + "T" + (month = (month = o.getUTCHours()) < 10 ? "0" + month : month) + ":" + (day = (day = o.getUTCMinutes()) < 10 ? "0" + day : day) + ":" + (month = (month = o.getUTCSeconds()) < 10 ? "0" + month : month) + "." + (day = (day = (day = o.getUTCMilliseconds()) < 100 ? "0" + day : day) < 10 ? "0" + day : day) + 'Z"';
            if (pairs = [], $.isArray(o)) {
                for (k = 0; k < o.length; k++) pairs.push($.toJSON(o[k]) || "null");
                return "[" + pairs.join(",") + "]";
            }
            if ("object" == typeof o) {
                for (k in o) if (hasOwn.call(o, k)) {
                    if ("number" === (type = typeof k)) name = '"' + k + '"'; else {
                        if ("string" !== type) continue;
                        name = $.quoteString(k);
                    }
                    "function" !== (type = typeof o[k]) && "undefined" !== type && (val = $.toJSON(o[k]), 
                    pairs.push(name + ":" + val));
                }
                return "{" + pairs.join(",") + "}";
            }
        }
    }, $.evalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function(str) {
        return eval("(" + str + ")");
    }, $.secureEvalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function(str) {
        var filtered = str.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "");
        if (/^[\],:{}\s]*$/.test(filtered)) return eval("(" + str + ")");
        throw new SyntaxError("Error parsing JSON, source is not valid.");
    }, $.quoteString = function(str) {
        return str.match(escape) ? '"' + str.replace(escape, function(a) {
            var c = meta[a];
            return "string" == typeof c ? c : (c = a.charCodeAt(), "\\u00" + Math.floor(c / 16).toString(16) + (c % 16).toString(16));
        }) + '"' : '"' + str + '"';
    };
}(jQuery), !function($, doc) {
    function jq_addOutsideEvent(event_name, outside_event_name) {
        outside_event_name = outside_event_name || event_name + "outside";
        var elems = $(), event_namespaced = event_name + "." + outside_event_name + "-special-event";
        function handle_event(event) {
            $(elems).each(function() {
                var elem = $(this);
                this === event.target || elem.has(event.target).length || elem.triggerHandler(outside_event_name, [ event.target ]);
            });
        }
        $.event.special[outside_event_name] = {
            setup: function() {
                1 === (elems = elems.add(this)).length && $(doc).bind(event_namespaced, handle_event);
            },
            teardown: function() {
                0 === (elems = elems.not(this)).length && $(doc).unbind(event_namespaced);
            },
            add: function(handleObj) {
                var old_handler = handleObj.handler;
                handleObj.handler = function(event, elem) {
                    event.target = elem, old_handler.apply(this, arguments);
                };
            }
        };
    }
    $.map("click dblclick mousemove mousedown mouseup mouseover mouseout change select submit keydown keypress keyup".split(" "), function(event_name) {
        jq_addOutsideEvent(event_name);
    }), jq_addOutsideEvent("focusin", "focusoutside"), jq_addOutsideEvent("focusout", "bluroutside"), 
    $.addOutsideEvent = jq_addOutsideEvent;
}(jQuery, document), !function(window, document, $) {
    var placeholder, isInputSupported = "placeholder" in document.createElement("input"), isTextareaSupported = "placeholder" in document.createElement("textarea"), prototype = $.fn, valHooks = $.valHooks, propHooks = $.propHooks;
    function clearPlaceholder(event, value) {
        var $input = $(this);
        if (this.value == $input.attr("placeholder") && $input.hasClass("placeholder")) if ($input.data("placeholder-password")) {
            if ($input = $input.hide().next().show().attr("id", $input.removeAttr("id").data("placeholder-id")), 
            !0 === event) return $input[0].value = value;
            $input.focus();
        } else this.value = "", $input.removeClass("placeholder"), this == document.activeElement && this.select();
    }
    function setPlaceholder() {
        var $replacement, elem, newAttrs, rinlinejQuery, $input = $(this), id = this.id;
        if ("" == this.value) {
            if ("password" == this.type) {
                if (!$input.data("placeholder-textinput")) {
                    try {
                        $replacement = $input.clone().attr({
                            "type": "text"
                        });
                    } catch (e) {
                        $replacement = $("<input>").attr($.extend((elem = this, 
                        newAttrs = {}, rinlinejQuery = /^jQuery\d+$/, $.each(elem.attributes, function(i, attr) {
                            attr.specified && !rinlinejQuery.test(attr.name) && (newAttrs[attr.name] = attr.value);
                        }), newAttrs), {
                            "type": "text"
                        }));
                    }
                    $replacement.removeAttr("name").data({
                        "placeholder-password": $input,
                        "placeholder-id": id
                    }).bind("focus.placeholder", clearPlaceholder), $input.data({
                        "placeholder-textinput": $replacement,
                        "placeholder-id": id
                    }).before($replacement);
                }
                $input = $input.removeAttr("id").hide().prev().attr("id", id).show();
            }
            $input.addClass("placeholder"), $input[0].value = $input.attr("placeholder");
        } else $input.removeClass("placeholder");
    }
    isInputSupported && isTextareaSupported ? (placeholder = prototype.placeholder = function() {
        return this;
    }).input = placeholder.textarea = !0 : ((placeholder = prototype.placeholder = function() {
        return this.filter((isInputSupported ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": clearPlaceholder,
            "blur.placeholder": setPlaceholder
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"), this;
    }).input = isInputSupported, placeholder.textarea = isTextareaSupported, prototype = {
        "get": function(element) {
            var $element = $(element), $passwordInput = $element.data("placeholder-password");
            return $passwordInput ? $passwordInput[0].value : $element.data("placeholder-enabled") && $element.hasClass("placeholder") ? "" : element.value;
        },
        "set": function(element, value) {
            var $element = $(element), $passwordInput = $element.data("placeholder-password");
            return $passwordInput ? $passwordInput[0].value = value : $element.data("placeholder-enabled") ? ("" == value ? (element.value = value, 
            element != document.activeElement && setPlaceholder.call(element)) : $element.hasClass("placeholder") && clearPlaceholder.call(element, !0, value) || (element.value = value), 
            $element) : element.value = value;
        }
    }, isInputSupported || (valHooks.input = prototype, propHooks.value = prototype), 
    isTextareaSupported || (valHooks.textarea = prototype, propHooks.value = prototype), 
    $(function() {
        $(document).delegate("form", "submit.placeholder", function() {
            var $inputs = $(".placeholder", this).each(clearPlaceholder);
            setTimeout(function() {
                $inputs.each(setPlaceholder);
            }, 10);
        });
    }), $(window).bind("beforeunload.placeholder", function() {
        $(".placeholder").each(function() {
            this.value = "";
        });
    }));
}(this, document, jQuery), !function($) {
    var $w = $(window);
    $.fn.visible = function(partial, hidden, direction) {
        var lViz, t, tViz, bViz, vpHeight, $t, compareTop, vpWidth, _bottom;
        if (!(this.length < 1)) return t = ($t = 1 < this.length ? this.eq(0) : this).get(0), 
        vpWidth = $w.width(), vpHeight = $w.height(), direction = direction || "both", 
        hidden = !0 !== hidden || t.offsetWidth * t.offsetHeight, "function" == typeof t.getBoundingClientRect ? (tViz = 0 <= (t = t.getBoundingClientRect()).top && t.top < vpHeight, 
        bViz = 0 < t.bottom && t.bottom <= vpHeight, lViz = 0 <= t.left && t.left < vpWidth, 
        t = 0 < t.right && t.right <= vpWidth, tViz = partial ? tViz || bViz : tViz && bViz, 
        bViz = partial ? lViz : lViz && t, "both" === direction ? hidden && tViz && bViz : "vertical" === direction ? hidden && tViz : "horizontal" === direction ? hidden && bViz : void 0) : (t = (lViz = $w.scrollTop()) + vpHeight, 
        bViz = (tViz = $w.scrollLeft()) + vpWidth, _bottom = (vpWidth = (vpHeight = $t.offset()).top) + $t.height(), 
        $t = (vpHeight = vpHeight.left) + $t.width(), compareTop = !0 === partial ? _bottom : vpWidth, 
        vpWidth = !0 === partial ? vpWidth : _bottom, _bottom = !0 === partial ? $t : vpHeight, 
        partial = !0 === partial ? vpHeight : $t, "both" === direction ? !!hidden && vpWidth <= t && lViz <= compareTop && partial <= bViz && tViz <= _bottom : "vertical" === direction ? !!hidden && vpWidth <= t && lViz <= compareTop : "horizontal" === direction ? !!hidden && partial <= bViz && tViz <= _bottom : void 0);
    };
}(jQuery), !function(global, factory) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define(factory) : global.Popper = factory();
}(this, function() {
    "use strict";
    var isBrowser = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator, timeoutDuration = function() {
        for (var longerTimeoutBrowsers = [ "Edge", "Trident", "Firefox" ], i = 0; i < longerTimeoutBrowsers.length; i += 1) if (isBrowser && 0 <= navigator.userAgent.indexOf(longerTimeoutBrowsers[i])) return 1;
        return 0;
    }();
    var debounce = isBrowser && window.Promise ? function(fn) {
        var called = !1;
        return function() {
            called || (called = !0, window.Promise.resolve().then(function() {
                called = !1, fn();
            }));
        };
    } : function(fn) {
        var scheduled = !1;
        return function() {
            scheduled || (scheduled = !0, setTimeout(function() {
                scheduled = !1, fn();
            }, timeoutDuration));
        };
    };
    function isFunction(functionToCheck) {
        return functionToCheck && "[object Function]" === {}.toString.call(functionToCheck);
    }
    function getStyleComputedProperty(element, property) {
        return 1 !== element.nodeType ? [] : (element = element.ownerDocument.defaultView.getComputedStyle(element, null), 
        property ? element[property] : element);
    }
    function getParentNode(element) {
        return "HTML" === element.nodeName ? element : element.parentNode || element.host;
    }
    function getScrollParent(element) {
        if (!element) return document.body;
        switch (element.nodeName) {
          case "HTML":
          case "BODY":
            return element.ownerDocument.body;

          case "#document":
            return element.body;
        }
        var _getStyleComputedProp = getStyleComputedProperty(element), overflow = _getStyleComputedProp.overflow, overflowX = _getStyleComputedProp.overflowX, _getStyleComputedProp = _getStyleComputedProp.overflowY;
        return /(auto|scroll|overlay)/.test(overflow + _getStyleComputedProp + overflowX) ? element : getScrollParent(getParentNode(element));
    }
    function getReferenceNode(reference) {
        return reference && reference.referenceNode ? reference.referenceNode : reference;
    }
    var isIE11 = isBrowser && !(!window.MSInputMethodContext || !document.documentMode), isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
    function isIE(version) {
        return 11 === version ? isIE11 : 10 !== version && isIE11 || isIE10;
    }
    function getOffsetParent(element) {
        if (!element) return document.documentElement;
        for (var noOffsetParent = isIE(10) ? document.body : null, offsetParent = element.offsetParent || null; offsetParent === noOffsetParent && element.nextElementSibling; ) offsetParent = (element = element.nextElementSibling).offsetParent;
        var nodeName = offsetParent && offsetParent.nodeName;
        return nodeName && "BODY" !== nodeName && "HTML" !== nodeName ? -1 !== [ "TH", "TD", "TABLE" ].indexOf(offsetParent.nodeName) && "static" === getStyleComputedProperty(offsetParent, "position") ? getOffsetParent(offsetParent) : offsetParent : (element ? element.ownerDocument : document).documentElement;
    }
    function getRoot(node) {
        return null !== node.parentNode ? getRoot(node.parentNode) : node;
    }
    function findCommonOffsetParent(element1, element2) {
        var range, start, order;
        return element1 && element1.nodeType && element2 && element2.nodeType ? (start = (order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING) ? element1 : element2, 
        order = order ? element2 : element1, (range = document.createRange()).setStart(start, 0), 
        range.setEnd(order, 0), element1 !== (range = range.commonAncestorContainer) && element2 !== range || start.contains(order) ? "BODY" === (order = (start = range).nodeName) || "HTML" !== order && getOffsetParent(start.firstElementChild) !== start ? getOffsetParent(range) : range : (order = getRoot(element1)).host ? findCommonOffsetParent(order.host, element2) : findCommonOffsetParent(element1, getRoot(element2).host)) : document.documentElement;
    }
    function getScroll(element, argument_1) {
        var argument_1 = "top" === (1 < arguments.length && void 0 !== argument_1 ? argument_1 : "top") ? "scrollTop" : "scrollLeft", nodeName = element.nodeName;
        return ("BODY" === nodeName || "HTML" === nodeName ? (nodeName = element.ownerDocument.documentElement, 
        element.ownerDocument.scrollingElement || nodeName) : element)[argument_1];
    }
    function getBordersSize(styles, axis) {
        var axis = "x" === axis ? "Left" : "Top", sideB = "Left" == axis ? "Right" : "Bottom";
        return parseFloat(styles["border" + axis + "Width"], 10) + parseFloat(styles["border" + sideB + "Width"], 10);
    }
    function getSize(axis, body, html, computedStyle) {
        return Math.max(body["offset" + axis], body["scroll" + axis], html["client" + axis], html["offset" + axis], html["scroll" + axis], isIE(10) ? parseInt(html["offset" + axis]) + parseInt(computedStyle["margin" + ("Height" === axis ? "Top" : "Left")]) + parseInt(computedStyle["margin" + ("Height" === axis ? "Bottom" : "Right")]) : 0);
    }
    function getWindowSizes(document) {
        var body = document.body, document = document.documentElement, computedStyle = isIE(10) && getComputedStyle(document);
        return {
            height: getSize("Height", body, document, computedStyle),
            width: getSize("Width", body, document, computedStyle)
        };
    }
    var createClass = function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), 
        staticProps && defineProperties(Constructor, staticProps), Constructor;
    };
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function defineProperty(obj, key, value) {
        return key in obj ? Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : obj[key] = value, obj;
    }
    var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var key, source = arguments[i];
            for (key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    };
    function getClientRect(offsets) {
        return _extends({}, offsets, {
            right: offsets.left + offsets.width,
            bottom: offsets.top + offsets.height
        });
    }
    function getBoundingClientRect(element) {
        var rect = {};
        try {
            isIE(10) ? (rect = element.getBoundingClientRect(), scrollTop = getScroll(element, "top"), 
            scrollLeft = getScroll(element, "left"), rect.top += scrollTop, rect.left += scrollLeft, 
            rect.bottom += scrollTop, rect.right += scrollLeft) : rect = element.getBoundingClientRect();
        } catch (e) {}
        var scrollTop = {
            left: rect.left,
            top: rect.top,
            width: rect.right - rect.left,
            height: rect.bottom - rect.top
        }, scrollLeft = "HTML" === element.nodeName ? getWindowSizes(element.ownerDocument) : {}, rect = scrollLeft.width || element.clientWidth || scrollTop.width, scrollLeft = scrollLeft.height || element.clientHeight || scrollTop.height, rect = element.offsetWidth - rect, scrollLeft = element.offsetHeight - scrollLeft;
        return (rect || scrollLeft) && (rect -= getBordersSize(element = getStyleComputedProperty(element), "x"), 
        scrollLeft -= getBordersSize(element, "y"), scrollTop.width -= rect, scrollTop.height -= scrollLeft), 
        getClientRect(scrollTop);
    }
    function getOffsetRectRelativeToArbitraryNode(children, parent, argument_2) {
        var argument_2 = 2 < arguments.length && void 0 !== argument_2 && argument_2, isIE10 = isIE(10), isHTML = "HTML" === parent.nodeName, childrenRect = getBoundingClientRect(children), parentRect = getBoundingClientRect(parent), children = getScrollParent(children), styles = getStyleComputedProperty(parent), borderTopWidth = parseFloat(styles.borderTopWidth, 10), borderLeftWidth = parseFloat(styles.borderLeftWidth, 10), parentRect = (argument_2 && isHTML && (parentRect.top = Math.max(parentRect.top, 0), 
        parentRect.left = Math.max(parentRect.left, 0)), getClientRect({
            top: childrenRect.top - parentRect.top - borderTopWidth,
            left: childrenRect.left - parentRect.left - borderLeftWidth,
            width: childrenRect.width,
            height: childrenRect.height
        }));
        return parentRect.marginTop = 0, parentRect.marginLeft = 0, !isIE10 && isHTML && (childrenRect = parseFloat(styles.marginTop, 10), 
        isHTML = parseFloat(styles.marginLeft, 10), parentRect.top -= borderTopWidth - childrenRect, 
        parentRect.bottom -= borderTopWidth - childrenRect, parentRect.left -= borderLeftWidth - isHTML, 
        parentRect.right -= borderLeftWidth - isHTML, parentRect.marginTop = childrenRect, 
        parentRect.marginLeft = isHTML), parentRect = (isIE10 && !argument_2 ? parent.contains(children) : parent === children && "BODY" !== children.nodeName) ? function(rect, element, argument_2) {
            var argument_2 = 2 < arguments.length && void 0 !== argument_2 && argument_2, scrollTop = getScroll(element, "top"), element = getScroll(element, "left"), argument_2 = argument_2 ? -1 : 1;
            return rect.top += scrollTop * argument_2, rect.bottom += scrollTop * argument_2, 
            rect.left += element * argument_2, rect.right += element * argument_2, 
            rect;
        }(parentRect, parent) : parentRect;
    }
    function getFixedPositionOffsetParent(element) {
        if (!element || !element.parentElement || isIE()) return document.documentElement;
        for (var el = element.parentElement; el && "none" === getStyleComputedProperty(el, "transform"); ) el = el.parentElement;
        return el || document.documentElement;
    }
    function getBoundaries(popper, reference, padding, boundariesElement, argument_4) {
        var boundariesNode, argument_4 = 4 < arguments.length && void 0 !== argument_4 && argument_4, boundaries = {
            top: 0,
            left: 0
        }, offsetParent = argument_4 ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference)), offsetParent = ("viewport" === boundariesElement ? boundaries = function(element, argument_1) {
            var argument_1 = 1 < arguments.length && void 0 !== argument_1 && argument_1, html = element.ownerDocument.documentElement, element = getOffsetRectRelativeToArbitraryNode(element, html), width = Math.max(html.clientWidth, window.innerWidth || 0), height = Math.max(html.clientHeight, window.innerHeight || 0), scrollTop = argument_1 ? 0 : getScroll(html), argument_1 = argument_1 ? 0 : getScroll(html, "left");
            return getClientRect({
                top: scrollTop - element.top + element.marginTop,
                left: argument_1 - element.left + element.marginLeft,
                width: width,
                height: height
            });
        }(offsetParent, argument_4) : (boundariesNode = void 0, "scrollParent" === boundariesElement ? "BODY" === (boundariesNode = getScrollParent(getParentNode(reference))).nodeName && (boundariesNode = popper.ownerDocument.documentElement) : boundariesNode = "window" === boundariesElement ? popper.ownerDocument.documentElement : boundariesElement, 
        reference = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, argument_4), 
        "HTML" !== boundariesNode.nodeName || function isFixed(element) {
            var nodeName = element.nodeName;
            return "BODY" !== nodeName && "HTML" !== nodeName && ("fixed" === getStyleComputedProperty(element, "position") || !!(nodeName = getParentNode(element)) && isFixed(nodeName));
        }(offsetParent) ? boundaries = reference : (argument_4 = (boundariesElement = getWindowSizes(popper.ownerDocument)).height, 
        boundariesNode = boundariesElement.width, boundaries.top += reference.top - reference.marginTop, 
        boundaries.bottom = argument_4 + reference.top, boundaries.left += reference.left - reference.marginLeft, 
        boundaries.right = boundariesNode + reference.left)), "number" == typeof (padding = padding || 0));
        return boundaries.left += offsetParent ? padding : padding.left || 0, boundaries.top += offsetParent ? padding : padding.top || 0, 
        boundaries.right -= offsetParent ? padding : padding.right || 0, boundaries.bottom -= offsetParent ? padding : padding.bottom || 0, 
        boundaries;
    }
    function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement, argument_5) {
        var rects, argument_5 = 5 < arguments.length && void 0 !== argument_5 ? argument_5 : 0;
        return -1 === placement.indexOf("auto") ? placement : (reference = getBoundaries(popper, reference, argument_5, boundariesElement), 
        rects = {
            top: {
                width: reference.width,
                height: refRect.top - reference.top
            },
            right: {
                width: reference.right - refRect.right,
                height: reference.height
            },
            bottom: {
                width: reference.width,
                height: reference.bottom - refRect.bottom
            },
            left: {
                width: refRect.left - reference.left,
                height: reference.height
            }
        }, (0 < (boundariesElement = (argument_5 = Object.keys(rects).map(function(key) {
            return _extends({
                key: key
            }, rects[key], {
                area: (key = rects[key]).width * key.height
            });
        }).sort(function(a, b) {
            return b.area - a.area;
        })).filter(function(_ref2) {
            var width = _ref2.width, _ref2 = _ref2.height;
            return width >= popper.clientWidth && _ref2 >= popper.clientHeight;
        })).length ? boundariesElement : argument_5)[0].key + ((refRect = placement.split("-")[1]) ? "-" + refRect : ""));
    }
    function getReferenceOffsets(state, popper, reference, argument_3) {
        argument_3 = 3 < arguments.length && void 0 !== argument_3 ? argument_3 : null;
        return getOffsetRectRelativeToArbitraryNode(reference, argument_3 ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference)), argument_3);
    }
    function getOuterSizes(element) {
        var styles = element.ownerDocument.defaultView.getComputedStyle(element), x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0), styles = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
        return {
            width: element.offsetWidth + styles,
            height: element.offsetHeight + x
        };
    }
    function getOppositePlacement(placement) {
        var hash = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return placement.replace(/left|right|bottom|top/g, function(matched) {
            return hash[matched];
        });
    }
    function getPopperOffsets(popper, referenceOffsets, placement) {
        placement = placement.split("-")[0];
        var popper = getOuterSizes(popper), popperOffsets = {
            width: popper.width,
            height: popper.height
        }, isHoriz = -1 !== [ "right", "left" ].indexOf(placement), mainSide = isHoriz ? "top" : "left", secondarySide = isHoriz ? "left" : "top", measurement = isHoriz ? "height" : "width", isHoriz = isHoriz ? "width" : "height";
        return popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popper[measurement] / 2, 
        popperOffsets[secondarySide] = placement === secondarySide ? referenceOffsets[secondarySide] - popper[isHoriz] : referenceOffsets[getOppositePlacement(secondarySide)], 
        popperOffsets;
    }
    function find(arr, check) {
        return Array.prototype.find ? arr.find(check) : arr.filter(check)[0];
    }
    function runModifiers(modifiers, data, ends) {
        var prop, value;
        return (void 0 === ends ? modifiers : modifiers.slice(0, (modifiers = modifiers, 
        prop = "name", value = ends, Array.prototype.findIndex ? modifiers.findIndex(function(cur) {
            return cur[prop] === value;
        }) : (ends = find(modifiers, function(obj) {
            return obj[prop] === value;
        }), modifiers.indexOf(ends))))).forEach(function(modifier) {
            modifier["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var fn = modifier["function"] || modifier.fn;
            modifier.enabled && isFunction(fn) && (data.offsets.popper = getClientRect(data.offsets.popper), 
            data.offsets.reference = getClientRect(data.offsets.reference), data = fn(data, modifier));
        }), data;
    }
    function isModifierEnabled(modifiers, modifierName) {
        return modifiers.some(function(_ref) {
            var name = _ref.name;
            return _ref.enabled && name === modifierName;
        });
    }
    function getSupportedPropertyName(property) {
        for (var prefixes = [ !1, "ms", "Webkit", "Moz", "O" ], upperProp = property.charAt(0).toUpperCase() + property.slice(1), i = 0; i < prefixes.length; i++) {
            var prefix = prefixes[i], prefix = prefix ? "" + prefix + upperProp : property;
            if (void 0 !== document.body.style[prefix]) return prefix;
        }
        return null;
    }
    function getWindow(element) {
        element = element.ownerDocument;
        return element ? element.defaultView : window;
    }
    function setupEventListeners(reference, options, state, updateBound) {
        state.updateBound = updateBound, getWindow(reference).addEventListener("resize", state.updateBound, {
            passive: !0
        });
        updateBound = getScrollParent(reference);
        return function attachToScrollParents(scrollParent, event, callback, scrollParents) {
            var isBody = "BODY" === scrollParent.nodeName, scrollParent = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
            scrollParent.addEventListener(event, callback, {
                passive: !0
            }), isBody || attachToScrollParents(getScrollParent(scrollParent.parentNode), event, callback, scrollParents), 
            scrollParents.push(scrollParent);
        }(updateBound, "scroll", state.updateBound, state.scrollParents), state.scrollElement = updateBound, 
        state.eventsEnabled = !0, state;
    }
    function disableEventListeners() {
        var reference, state;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), 
        this.state = (reference = this.reference, state = this.state, getWindow(reference).removeEventListener("resize", state.updateBound), 
        state.scrollParents.forEach(function(target) {
            target.removeEventListener("scroll", state.updateBound);
        }), state.updateBound = null, state.scrollParents = [], state.scrollElement = null, 
        state.eventsEnabled = !1, state));
    }
    function isNumeric(n) {
        return "" !== n && !isNaN(parseFloat(n)) && isFinite(n);
    }
    function setStyles(element, styles) {
        Object.keys(styles).forEach(function(prop) {
            var unit = "";
            -1 !== [ "width", "height", "top", "right", "bottom", "left" ].indexOf(prop) && isNumeric(styles[prop]) && (unit = "px"), 
            element.style[prop] = styles[prop] + unit;
        });
    }
    function getRoundedOffsets(data, shouldRound) {
        function noRound(v) {
            return v;
        }
        var _data$offsets = data.offsets, popper = _data$offsets.popper, _data$offsets = _data$offsets.reference, round = Math.round, floor = Math.floor, _data$offsets = round(_data$offsets.width), popperWidth = round(popper.width), isVertical = -1 !== [ "left", "right" ].indexOf(data.placement), data = -1 !== data.placement.indexOf("-"), isVertical = shouldRound ? isVertical || data || _data$offsets % 2 == popperWidth % 2 ? round : floor : noRound, floor = shouldRound ? round : noRound;
        return {
            left: isVertical(_data$offsets % 2 == 1 && popperWidth % 2 == 1 && !data && shouldRound ? popper.left - 1 : popper.left),
            top: floor(popper.top),
            bottom: floor(popper.bottom),
            right: isVertical(popper.right)
        };
    }
    var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
    function isModifierRequired(modifiers, requestingName, requestedName) {
        var _requesting, requesting = find(modifiers, function(_ref) {
            return _ref.name === requestingName;
        }), modifiers = !!requesting && modifiers.some(function(modifier) {
            return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
        });
        return modifiers || (_requesting = "`" + requestingName + "`", console.warn("`" + requestedName + "`" + " modifier is required by " + _requesting + " modifier in order to work, be sure to include it before " + _requesting + "!")), 
        modifiers;
    }
    var placements = [ "auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start" ], validPlacements = placements.slice(3);
    function clockwise(placement, argument_1) {
        argument_1 = 1 < arguments.length && void 0 !== argument_1 && argument_1, 
        placement = validPlacements.indexOf(placement), placement = validPlacements.slice(placement + 1).concat(validPlacements.slice(0, placement));
        return argument_1 ? placement.reverse() : placement;
    }
    var BEHAVIORS_FLIP = "flip", BEHAVIORS_CLOCKWISE = "clockwise", BEHAVIORS_COUNTERCLOCKWISE = "counterclockwise";
    function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
        var offsets = [ 0, 0 ], useHeight = -1 !== [ "right", "left" ].indexOf(basePlacement), basePlacement = offset.split(/(\+|\-)/).map(function(frag) {
            return frag.trim();
        }), offset = basePlacement.indexOf(find(basePlacement, function(frag) {
            return -1 !== frag.search(/,|\s/);
        })), splitRegex = (basePlacement[offset] && -1 === basePlacement[offset].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."), 
        /\s*,\s*|\s+/);
        return (-1 !== offset ? [ basePlacement.slice(0, offset).concat([ basePlacement[offset].split(splitRegex)[0] ]), [ basePlacement[offset].split(splitRegex)[1] ].concat(basePlacement.slice(offset + 1)) ] : [ basePlacement ]).map(function(op, index) {
            var measurement = (1 === index ? !useHeight : useHeight) ? "height" : "width", mergeWithPrevious = !1;
            return op.reduce(function(a, b) {
                return "" === a[a.length - 1] && -1 !== [ "+", "-" ].indexOf(b) ? (a[a.length - 1] = b, 
                mergeWithPrevious = !0, a) : mergeWithPrevious ? (a[a.length - 1] += b, 
                mergeWithPrevious = !1, a) : a.concat(b);
            }, []).map(function(str) {
                return function(str, measurement, popperOffsets, referenceOffsets) {
                    var value = +(split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/))[1], split = split[2];
                    return value ? 0 === split.indexOf("%") ? getClientRect("%p" === split ? popperOffsets : referenceOffsets)[measurement] / 100 * value : "vh" === split || "vw" === split ? ("vh" === split ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * value : value : str;
                }(str, measurement, popperOffsets, referenceOffsets);
            });
        }).forEach(function(op, index) {
            op.forEach(function(frag, index2) {
                isNumeric(frag) && (offsets[index] += frag * ("-" === op[index2 - 1] ? -1 : 1));
            });
        }), offsets;
    }
    var Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(data) {
                    var reference, _data$offsets, measurement, placement = data.placement, basePlacement = placement.split("-")[0];
                    return (placement = placement.split("-")[1]) && (reference = (_data$offsets = data.offsets).reference, 
                    _data$offsets = _data$offsets.popper, measurement = (basePlacement = -1 !== [ "bottom", "top" ].indexOf(basePlacement)) ? "width" : "height", 
                    basePlacement = {
                        start: defineProperty({}, basePlacement = basePlacement ? "left" : "top", reference[basePlacement]),
                        end: defineProperty({}, basePlacement, reference[basePlacement] + reference[measurement] - _data$offsets[measurement])
                    }, data.offsets.popper = _extends({}, _data$offsets, basePlacement[placement])), 
                    data;
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(data, _ref) {
                    var _ref = _ref.offset, placement = data.placement, popper = (_data$offsets = data.offsets).popper, _data$offsets = _data$offsets.reference, placement = placement.split("-")[0], offsets = void 0, offsets = isNumeric(+_ref) ? [ +_ref, 0 ] : parseOffset(_ref, popper, _data$offsets, placement);
                    return "left" === placement ? (popper.top += offsets[0], popper.left -= offsets[1]) : "right" === placement ? (popper.top += offsets[0], 
                    popper.left += offsets[1]) : "top" === placement ? (popper.left += offsets[0], 
                    popper.top -= offsets[1]) : "bottom" === placement && (popper.left += offsets[0], 
                    popper.top += offsets[1]), data.popper = popper, data;
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(data, options) {
                    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper), transformProp = (data.instance.reference === boundariesElement && (boundariesElement = getOffsetParent(boundariesElement)), 
                    getSupportedPropertyName("transform")), popperStyles = data.instance.popper.style, top = popperStyles.top, left = popperStyles.left, transform = popperStyles[transformProp], boundaries = (popperStyles.top = "", 
                    popperStyles.left = "", popperStyles[transformProp] = "", getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed)), boundariesElement = (popperStyles.top = top, 
                    popperStyles.left = left, popperStyles[transformProp] = transform, 
                    options.boundaries = boundaries, options.priority), popper = data.offsets.popper, check = {
                        primary: function(placement) {
                            var value = popper[placement];
                            return popper[placement] < boundaries[placement] && !options.escapeWithReference && (value = Math.max(popper[placement], boundaries[placement])), 
                            defineProperty({}, placement, value);
                        },
                        secondary: function(placement) {
                            var mainSide = "right" === placement ? "left" : "top", value = popper[mainSide];
                            return popper[placement] > boundaries[placement] && !options.escapeWithReference && (value = Math.min(popper[mainSide], boundaries[placement] - ("right" === placement ? popper.width : popper.height))), 
                            defineProperty({}, mainSide, value);
                        }
                    };
                    return boundariesElement.forEach(function(placement) {
                        var side = -1 !== [ "left", "top" ].indexOf(placement) ? "primary" : "secondary";
                        popper = _extends({}, popper, check[side](placement));
                    }), data.offsets.popper = popper, data;
                },
                priority: [ "left", "right", "top", "bottom" ],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(data) {
                    var popper = (_data$offsets = data.offsets).popper, _data$offsets = _data$offsets.reference, placement = data.placement.split("-")[0], floor = Math.floor, side = (placement = -1 !== [ "top", "bottom" ].indexOf(placement)) ? "right" : "bottom", opSide = placement ? "left" : "top", placement = placement ? "width" : "height";
                    return popper[side] < floor(_data$offsets[opSide]) && (data.offsets.popper[opSide] = floor(_data$offsets[opSide]) - popper[placement]), 
                    popper[opSide] > floor(_data$offsets[side]) && (data.offsets.popper[opSide] = floor(_data$offsets[side])), 
                    data;
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(data, options) {
                    if (isModifierRequired(data.instance.modifiers, "arrow", "keepTogether")) {
                        options = options.element;
                        if ("string" == typeof options) {
                            if (!(options = data.instance.popper.querySelector(options))) return data;
                        } else if (!data.instance.popper.contains(options)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), 
                        data;
                        var placement = data.placement.split("-")[0], _data$offsets = data.offsets, popper = _data$offsets.popper, _data$offsets = _data$offsets.reference, placement = -1 !== [ "left", "right" ].indexOf(placement), len = placement ? "height" : "width", sideCapitalized = placement ? "Top" : "Left", side = sideCapitalized.toLowerCase(), altSide = placement ? "left" : "top", placement = placement ? "bottom" : "right", arrowElementSize = getOuterSizes(options)[len], placement = (_data$offsets[placement] - arrowElementSize < popper[side] && (data.offsets.popper[side] -= popper[side] - (_data$offsets[placement] - arrowElementSize)), 
                        _data$offsets[side] + arrowElementSize > popper[placement] && (data.offsets.popper[side] += _data$offsets[side] + arrowElementSize - popper[placement]), 
                        data.offsets.popper = getClientRect(data.offsets.popper), 
                        _data$offsets[side] + _data$offsets[len] / 2 - arrowElementSize / 2), _data$offsets = getStyleComputedProperty(data.instance.popper), popperMarginSide = parseFloat(_data$offsets["margin" + sideCapitalized], 10), _data$offsets = parseFloat(_data$offsets["border" + sideCapitalized + "Width"], 10), sideCapitalized = placement - data.offsets.popper[side] - popperMarginSide - _data$offsets, sideCapitalized = Math.max(Math.min(popper[len] - arrowElementSize, sideCapitalized), 0);
                        data.arrowElement = options, data.offsets.arrow = (defineProperty(placement = {}, side, Math.round(sideCapitalized)), 
                        defineProperty(placement, altSide, ""), placement);
                    }
                    return data;
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(data, options) {
                    if (!(isModifierEnabled(data.instance.modifiers, "inner") || data.flipped && data.placement === data.originalPlacement)) {
                        var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed), placement = data.placement.split("-")[0], placementOpposite = getOppositePlacement(placement), variation = data.placement.split("-")[1] || "", flipOrder = [];
                        switch (options.behavior) {
                          case BEHAVIORS_FLIP:
                            flipOrder = [ placement, placementOpposite ];
                            break;

                          case BEHAVIORS_CLOCKWISE:
                            flipOrder = clockwise(placement);
                            break;

                          case BEHAVIORS_COUNTERCLOCKWISE:
                            flipOrder = clockwise(placement, !0);
                            break;

                          default:
                            flipOrder = options.behavior;
                        }
                        flipOrder.forEach(function(step, index) {
                            if (placement !== step || flipOrder.length === index + 1) return data;
                            placement = data.placement.split("-")[0], placementOpposite = getOppositePlacement(placement);
                            var step = data.offsets.popper, refOffsets = data.offsets.reference, floor = Math.floor, refOffsets = "left" === placement && floor(step.right) > floor(refOffsets.left) || "right" === placement && floor(step.left) < floor(refOffsets.right) || "top" === placement && floor(step.bottom) > floor(refOffsets.top) || "bottom" === placement && floor(step.top) < floor(refOffsets.bottom), overflowsLeft = floor(step.left) < floor(boundaries.left), overflowsRight = floor(step.right) > floor(boundaries.right), overflowsTop = floor(step.top) < floor(boundaries.top), step = floor(step.bottom) > floor(boundaries.bottom), floor = "left" === placement && overflowsLeft || "right" === placement && overflowsRight || "top" === placement && overflowsTop || "bottom" === placement && step, isVertical = -1 !== [ "top", "bottom" ].indexOf(placement), flippedVariationByRef = !!options.flipVariations && (isVertical && "start" === variation && overflowsLeft || isVertical && "end" === variation && overflowsRight || !isVertical && "start" === variation && overflowsTop || !isVertical && "end" === variation && step), overflowsRight = !!options.flipVariationsByContent && (isVertical && "start" === variation && overflowsRight || isVertical && "end" === variation && overflowsLeft || !isVertical && "start" === variation && step || !isVertical && "end" === variation && overflowsTop), overflowsLeft = flippedVariationByRef || overflowsRight;
                            (refOffsets || floor || overflowsLeft) && (data.flipped = !0, 
                            (refOffsets || floor) && (placement = flipOrder[index + 1]), 
                            overflowsLeft && (variation = function(variation) {
                                return "end" === variation ? "start" : "start" === variation ? "end" : variation;
                            }(variation)), data.placement = placement + (variation ? "-" + variation : ""), 
                            data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement)), 
                            data = runModifiers(data.instance.modifiers, data, "flip"));
                        });
                    }
                    return data;
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(data) {
                    var placement = data.placement, basePlacement = placement.split("-")[0], popper = (_data$offsets = data.offsets).popper, _data$offsets = _data$offsets.reference, isHoriz = -1 !== [ "left", "right" ].indexOf(basePlacement), subtractLength = -1 === [ "top", "left" ].indexOf(basePlacement);
                    return popper[isHoriz ? "left" : "top"] = _data$offsets[basePlacement] - (subtractLength ? popper[isHoriz ? "width" : "height"] : 0), 
                    data.placement = getOppositePlacement(placement), data.offsets.popper = getClientRect(popper), 
                    data;
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(data) {
                    if (isModifierRequired(data.instance.modifiers, "hide", "preventOverflow")) {
                        var refRect = data.offsets.reference, bound = find(data.instance.modifiers, function(modifier) {
                            return "preventOverflow" === modifier.name;
                        }).boundaries;
                        if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
                            if (!0 === data.hide) return data;
                            data.hide = !0, data.attributes["x-out-of-boundaries"] = "";
                        } else {
                            if (!1 === data.hide) return data;
                            data.hide = !1, data.attributes["x-out-of-boundaries"] = !1;
                        }
                    }
                    return data;
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(data, options) {
                    var x = options.x, y = options.y, popper = data.offsets.popper, legacyGpuAccelerationOption = (void 0 !== (legacyGpuAccelerationOption = find(data.instance.modifiers, function(modifier) {
                        return "applyStyle" === modifier.name;
                    }).gpuAcceleration) && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"), 
                    void 0 !== legacyGpuAccelerationOption ? legacyGpuAccelerationOption : options.gpuAcceleration), offsetParentRect = getBoundingClientRect(options = getOffsetParent(data.instance.popper)), popper = {
                        position: popper.position
                    }, offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox), x = "bottom" === x ? "top" : "bottom", y = "right" === y ? "left" : "right", prefixedProperty = getSupportedPropertyName("transform"), left = void 0, top = void 0, top = "bottom" == x ? "HTML" === options.nodeName ? -options.clientHeight + offsets.bottom : -offsetParentRect.height + offsets.bottom : offsets.top, left = "right" == y ? "HTML" === options.nodeName ? -options.clientWidth + offsets.right : -offsetParentRect.width + offsets.right : offsets.left, offsetParentRect = (legacyGpuAccelerationOption && prefixedProperty ? (popper[prefixedProperty] = "translate3d(" + left + "px, " + top + "px, 0)", 
                    popper[x] = 0, popper[y] = 0, popper.willChange = "transform") : (options = "right" == y ? -1 : 1, 
                    popper[x] = top * ("bottom" == x ? -1 : 1), popper[y] = left * options, 
                    popper.willChange = x + ", " + y), {
                        "x-placement": data.placement
                    });
                    return data.attributes = _extends({}, offsetParentRect, data.attributes), 
                    data.styles = _extends({}, popper, data.styles), data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles), 
                    data;
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(data) {
                    var element, attributes;
                    return setStyles(data.instance.popper, data.styles), element = data.instance.popper, 
                    attributes = data.attributes, Object.keys(attributes).forEach(function(prop) {
                        !1 !== attributes[prop] ? element.setAttribute(prop, attributes[prop]) : element.removeAttribute(prop);
                    }), data.arrowElement && Object.keys(data.arrowStyles).length && setStyles(data.arrowElement, data.arrowStyles), 
                    data;
                },
                onLoad: function(reference, popper, options, modifierOptions, state) {
                    return state = getReferenceOffsets(state, popper, reference, options.positionFixed), 
                    state = computeAutoPlacement(options.placement, state, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding), 
                    popper.setAttribute("x-placement", state), setStyles(popper, {
                        position: options.positionFixed ? "fixed" : "absolute"
                    }), options;
                },
                gpuAcceleration: void 0
            }
        }
    }, Popper = function() {
        function Popper(reference, popper) {
            var _this = this, options = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, instance = this, Constructor = Popper;
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            this.scheduleUpdate = function() {
                return requestAnimationFrame(_this.update);
            }, this.update = debounce(this.update.bind(this)), this.options = _extends({}, Popper.Defaults, options), 
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            }, this.reference = reference && reference.jquery ? reference[0] : reference, 
            this.popper = popper && popper.jquery ? popper[0] : popper, this.options.modifiers = {}, 
            Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function(name) {
                _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
            }), this.modifiers = Object.keys(this.options.modifiers).map(function(name) {
                return _extends({
                    name: name
                }, _this.options.modifiers[name]);
            }).sort(function(a, b) {
                return a.order - b.order;
            }), this.modifiers.forEach(function(modifierOptions) {
                modifierOptions.enabled && isFunction(modifierOptions.onLoad) && modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
            }), this.update();
            instance = this.options.eventsEnabled;
            instance && this.enableEventListeners(), this.state.eventsEnabled = instance;
        }
        return createClass(Popper, [ {
            key: "update",
            value: function() {
                return function() {
                    var data;
                    this.state.isDestroyed || ((data = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {}
                    }).offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed), 
                    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), 
                    data.originalPlacement = data.placement, data.positionFixed = this.options.positionFixed, 
                    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement), 
                    data.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", 
                    data = runModifiers(this.modifiers, data), this.state.isCreated ? this.options.onUpdate(data) : (this.state.isCreated = !0, 
                    this.options.onCreate(data)));
                }.call(this);
            }
        }, {
            key: "destroy",
            value: function() {
                return function() {
                    return this.state.isDestroyed = !0, isModifierEnabled(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), 
                    this.popper.style.position = "", this.popper.style.top = "", 
                    this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", 
                    this.popper.style.willChange = "", this.popper.style[getSupportedPropertyName("transform")] = ""), 
                    this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), 
                    this;
                }.call(this);
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return function() {
                    this.state.eventsEnabled || (this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate));
                }.call(this);
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return disableEventListeners.call(this);
            }
        } ]), Popper;
    }();
    return Popper.Utils = ("undefined" != typeof window ? window : global).PopperUtils, 
    Popper.placements = placements, Popper.Defaults = Defaults, Popper;
}), !function(global, factory) {
    "object" == typeof exports && "undefined" != typeof module ? factory(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define([ "exports", "jquery", "popper.js" ], factory) : factory((global = global || self).bootstrap = {}, global.jQuery, global.Popper);
}(this, function(exports, $, Popper) {
    "use strict";
    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps);
    }
    function ownKeys(object, enumerableOnly) {
        var symbols, keys = Object.keys(object);
        return Object.getOwnPropertySymbols && (symbols = Object.getOwnPropertySymbols(object), 
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols)), keys;
    }
    function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
                !function(obj, key, value) {
                    key in obj ? Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : obj[key] = value;
                }(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
        return target;
    }
    $ = $ && $.hasOwnProperty("default") ? $["default"] : $, Popper = Popper && Popper.hasOwnProperty("default") ? Popper["default"] : Popper;
    var TRANSITION_END = "transitionend";
    function transitionEndEmulator(duration) {
        var _this = this, called = !1;
        return $(this).one(Util.TRANSITION_END, function() {
            called = !0;
        }), setTimeout(function() {
            called || Util.triggerTransitionEnd(_this);
        }, duration), this;
    }
    var Util = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(prefix) {
            for (;prefix += ~~(1e6 * Math.random()), document.getElementById(prefix); );
            return prefix;
        },
        getSelectorFromElement: function(element) {
            var selector = element.getAttribute("data-target");
            selector && "#" !== selector || (selector = (element = element.getAttribute("href")) && "#" !== element ? element.trim() : "");
            try {
                return document.querySelector(selector) ? selector : null;
            } catch (err) {
                return null;
            }
        },
        getTransitionDurationFromElement: function(element) {
            var transitionDuration, floatTransitionDuration, floatTransitionDelay;
            return element && (transitionDuration = $(element).css("transition-duration"), 
            element = $(element).css("transition-delay"), floatTransitionDuration = parseFloat(transitionDuration), 
            floatTransitionDelay = parseFloat(element), floatTransitionDuration || floatTransitionDelay) ? (transitionDuration = transitionDuration.split(",")[0], 
            element = element.split(",")[0], 1e3 * (parseFloat(transitionDuration) + parseFloat(element))) : 0;
        },
        reflow: function(element) {
            return element.offsetHeight;
        },
        triggerTransitionEnd: function(element) {
            $(element).trigger(TRANSITION_END);
        },
        supportsTransitionEnd: function() {
            return Boolean(TRANSITION_END);
        },
        isElement: function(obj) {
            return (obj[0] || obj).nodeType;
        },
        typeCheckConfig: function(componentName, config, configTypes) {
            for (var property in configTypes) if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
                var expectedTypes = configTypes[property], value = config[property], value = value && Util.isElement(value) ? "element" : {}.toString.call(value).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(expectedTypes).test(value)) throw new Error(componentName.toUpperCase() + ': Option "' + property + '" provided type "' + value + '" but expected type "' + expectedTypes + '".');
            }
        },
        findShadowRoot: function(element) {
            var root;
            return document.documentElement.attachShadow ? "function" == typeof element.getRootNode ? (root = element.getRootNode()) instanceof ShadowRoot ? root : null : element instanceof ShadowRoot ? element : element.parentNode ? Util.findShadowRoot(element.parentNode) : null : null;
        },
        jQueryDetection: function() {
            if (void 0 === $) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var version = $.fn.jquery.split(" ")[0].split(".");
            if (version[0] < 2 && version[1] < 9 || 1 === version[0] && 9 === version[1] && version[2] < 1 || 4 <= version[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
        }
    }, JQUERY_NO_CONFLICT = (Util.jQueryDetection(), $.fn.emulateTransitionEnd = transitionEndEmulator, 
    $.event.special[Util.TRANSITION_END] = {
        bindType: TRANSITION_END,
        delegateType: TRANSITION_END,
        handle: function(event) {
            if ($(event.target).is(this)) return event.handleObj.handler.apply(this, arguments);
        }
    }, $.fn["alert"]), Event = {
        CLOSE: "close.bs.alert",
        CLOSED: "closed.bs.alert",
        CLICK_DATA_API: "click.bs.alert.data-api"
    }, ClassName_ALERT = "alert", ClassName_FADE = "fade", ClassName_SHOW = "show", Alert = function() {
        function Alert(element) {
            this._element = element;
        }
        var _proto = Alert.prototype;
        return _proto.close = function(element) {
            var rootElement = this._element;
            element && (rootElement = this._getRootElement(element)), this._triggerCloseEvent(rootElement).isDefaultPrevented() || this._removeElement(rootElement);
        }, _proto.dispose = function() {
            $.removeData(this._element, "bs.alert"), this._element = null;
        }, _proto._getRootElement = function(element) {
            var selector = Util.getSelectorFromElement(element), parent = !1;
            return parent = (parent = selector ? document.querySelector(selector) : parent) || $(element).closest("." + ClassName_ALERT)[0];
        }, _proto._triggerCloseEvent = function(element) {
            var closeEvent = $.Event(Event.CLOSE);
            return $(element).trigger(closeEvent), closeEvent;
        }, _proto._removeElement = function(element) {
            var transitionDuration, _this = this;
            $(element).removeClass(ClassName_SHOW), $(element).hasClass(ClassName_FADE) ? (transitionDuration = Util.getTransitionDurationFromElement(element), 
            $(element).one(Util.TRANSITION_END, function(event) {
                return _this._destroyElement(element, event);
            }).emulateTransitionEnd(transitionDuration)) : this._destroyElement(element);
        }, _proto._destroyElement = function(element) {
            $(element).detach().trigger(Event.CLOSED).remove();
        }, Alert._jQueryInterface = function(config) {
            return this.each(function() {
                var $element = $(this), data = $element.data("bs.alert");
                data || (data = new Alert(this), $element.data("bs.alert", data)), 
                "close" === config && data[config](this);
            });
        }, Alert._handleDismiss = function(alertInstance) {
            return function(event) {
                event && event.preventDefault(), alertInstance.close(this);
            };
        }, _createClass(Alert, null, [ {
            key: "VERSION",
            get: function() {
                return "4.4.1";
            }
        } ]), Alert;
    }(), JQUERY_NO_CONFLICT$1 = ($(document).on(Event.CLICK_DATA_API, '[data-dismiss="alert"]', Alert._handleDismiss(new Alert())), 
    $.fn["alert"] = Alert._jQueryInterface, $.fn["alert"].Constructor = Alert, $.fn["alert"].noConflict = function() {
        return $.fn["alert"] = JQUERY_NO_CONFLICT, Alert._jQueryInterface;
    }, $.fn["button"]), ClassName$1_ACTIVE = "active", ClassName$1_BUTTON = "btn", ClassName$1_FOCUS = "focus", Selector$1_DATA_TOGGLE_CARROT = '[data-toggle^="button"]', Selector$1_DATA_TOGGLES = '[data-toggle="buttons"]', Selector$1_DATA_TOGGLE = '[data-toggle="button"]', Selector$1_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn', Selector$1_INPUT = 'input:not([type="hidden"])', Selector$1_ACTIVE = ".active", Selector$1_BUTTON = ".btn", Event$1 = {
        CLICK_DATA_API: "click.bs.button.data-api",
        FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api",
        LOAD_DATA_API: "load.bs.button.data-api"
    }, Button = function() {
        function Button(element) {
            this._element = element;
        }
        var _proto = Button.prototype;
        return _proto.toggle = function() {
            var input, triggerChangeEvent = !0, addAriaPressed = !0, rootElement = $(this._element).closest(Selector$1_DATA_TOGGLES)[0];
            rootElement && (input = this._element.querySelector(Selector$1_INPUT)) && ("radio" === input.type ? input.checked && this._element.classList.contains(ClassName$1_ACTIVE) ? triggerChangeEvent = !1 : (rootElement = rootElement.querySelector(Selector$1_ACTIVE)) && $(rootElement).removeClass(ClassName$1_ACTIVE) : ("checkbox" !== input.type || "LABEL" === this._element.tagName && input.checked === this._element.classList.contains(ClassName$1_ACTIVE)) && (triggerChangeEvent = !1), 
            triggerChangeEvent && (input.checked = !this._element.classList.contains(ClassName$1_ACTIVE), 
            $(input).trigger("change")), input.focus(), addAriaPressed = !1), this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (addAriaPressed && this._element.setAttribute("aria-pressed", !this._element.classList.contains(ClassName$1_ACTIVE)), 
            triggerChangeEvent && $(this._element).toggleClass(ClassName$1_ACTIVE));
        }, _proto.dispose = function() {
            $.removeData(this._element, "bs.button"), this._element = null;
        }, Button._jQueryInterface = function(config) {
            return this.each(function() {
                var data = $(this).data("bs.button");
                data || (data = new Button(this), $(this).data("bs.button", data)), 
                "toggle" === config && data[config]();
            });
        }, _createClass(Button, null, [ {
            key: "VERSION",
            get: function() {
                return "4.4.1";
            }
        } ]), Button;
    }(), NAME$2 = ($(document).on(Event$1.CLICK_DATA_API, Selector$1_DATA_TOGGLE_CARROT, function(event) {
        var inputBtn, button = event.target;
        !(button = $(button).hasClass(ClassName$1_BUTTON) ? button : $(button).closest(Selector$1_BUTTON)[0]) || button.hasAttribute("disabled") || button.classList.contains("disabled") || (inputBtn = button.querySelector(Selector$1_INPUT)) && (inputBtn.hasAttribute("disabled") || inputBtn.classList.contains("disabled")) ? event.preventDefault() : Button._jQueryInterface.call($(button), "toggle");
    }).on(Event$1.FOCUS_BLUR_DATA_API, Selector$1_DATA_TOGGLE_CARROT, function(event) {
        var button = $(event.target).closest(Selector$1_BUTTON)[0];
        $(button).toggleClass(ClassName$1_FOCUS, /^focus(in)?$/.test(event.type));
    }), $(window).on(Event$1.LOAD_DATA_API, function() {
        for (var buttons = [].slice.call(document.querySelectorAll(Selector$1_DATA_TOGGLES_BUTTONS)), i = 0, len = buttons.length; i < len; i++) {
            var button = buttons[i], input = button.querySelector(Selector$1_INPUT);
            input.checked || input.hasAttribute("checked") ? button.classList.add(ClassName$1_ACTIVE) : button.classList.remove(ClassName$1_ACTIVE);
        }
        for (var _i = 0, _len = (buttons = [].slice.call(document.querySelectorAll(Selector$1_DATA_TOGGLE))).length; _i < _len; _i++) {
            var _button = buttons[_i];
            "true" === _button.getAttribute("aria-pressed") ? _button.classList.add(ClassName$1_ACTIVE) : _button.classList.remove(ClassName$1_ACTIVE);
        }
    }), $.fn["button"] = Button._jQueryInterface, $.fn["button"].Constructor = Button, 
    $.fn["button"].noConflict = function() {
        return $.fn["button"] = JQUERY_NO_CONFLICT$1, Button._jQueryInterface;
    }, "carousel"), EVENT_KEY$2 = ".bs.carousel", JQUERY_NO_CONFLICT$2 = $.fn[NAME$2], Default = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }, DefaultType = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }, Direction_NEXT = "next", Direction_PREV = "prev", Direction_LEFT = "left", Direction_RIGHT = "right", Event$2 = {
        SLIDE: "slide.bs.carousel",
        SLID: "slid.bs.carousel",
        KEYDOWN: "keydown.bs.carousel",
        MOUSEENTER: "mouseenter.bs.carousel",
        MOUSELEAVE: "mouseleave.bs.carousel",
        TOUCHSTART: "touchstart.bs.carousel",
        TOUCHMOVE: "touchmove.bs.carousel",
        TOUCHEND: "touchend.bs.carousel",
        POINTERDOWN: "pointerdown.bs.carousel",
        POINTERUP: "pointerup.bs.carousel",
        DRAG_START: "dragstart.bs.carousel",
        LOAD_DATA_API: "load.bs.carousel.data-api",
        CLICK_DATA_API: "click.bs.carousel.data-api"
    }, ClassName$2_CAROUSEL = "carousel", ClassName$2_ACTIVE = "active", ClassName$2_SLIDE = "slide", ClassName$2_RIGHT = "carousel-item-right", ClassName$2_LEFT = "carousel-item-left", ClassName$2_NEXT = "carousel-item-next", ClassName$2_PREV = "carousel-item-prev", ClassName$2_POINTER_EVENT = "pointer-event", Selector$2_ACTIVE = ".active", Selector$2_ACTIVE_ITEM = ".active.carousel-item", Selector$2_ITEM = ".carousel-item", Selector$2_ITEM_IMG = ".carousel-item img", Selector$2_NEXT_PREV = ".carousel-item-next, .carousel-item-prev", Selector$2_INDICATORS = ".carousel-indicators", Selector$1_DATA_TOGGLE_CARROT = "[data-slide], [data-slide-to]", Selector$2_DATA_RIDE = '[data-ride="carousel"]', PointerType = {
        TOUCH: "touch",
        PEN: "pen"
    }, Carousel = function() {
        function Carousel(element, config) {
            this._items = null, this._interval = null, this._activeElement = null, 
            this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, 
            this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(config), 
            this._element = element, this._indicatorsElement = this._element.querySelector(Selector$2_INDICATORS), 
            this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, 
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), 
            this._addEventListeners();
        }
        var _proto = Carousel.prototype;
        return _proto.next = function() {
            this._isSliding || this._slide(Direction_NEXT);
        }, _proto.nextWhenVisible = function() {
            !document.hidden && $(this._element).is(":visible") && "hidden" !== $(this._element).css("visibility") && this.next();
        }, _proto.prev = function() {
            this._isSliding || this._slide(Direction_PREV);
        }, _proto.pause = function(event) {
            event || (this._isPaused = !0), this._element.querySelector(Selector$2_NEXT_PREV) && (Util.triggerTransitionEnd(this._element), 
            this.cycle(!0)), clearInterval(this._interval), this._interval = null;
        }, _proto.cycle = function(event) {
            event || (this._isPaused = !1), this._interval && (clearInterval(this._interval), 
            this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
        }, _proto.to = function(index) {
            var _this = this, activeIndex = (this._activeElement = this._element.querySelector(Selector$2_ACTIVE_ITEM), 
            this._getItemIndex(this._activeElement));
            index > this._items.length - 1 || index < 0 || (this._isSliding ? $(this._element).one(Event$2.SLID, function() {
                return _this.to(index);
            }) : activeIndex === index ? (this.pause(), this.cycle()) : (activeIndex = activeIndex < index ? Direction_NEXT : Direction_PREV, 
            this._slide(activeIndex, this._items[index])));
        }, _proto.dispose = function() {
            $(this._element).off(EVENT_KEY$2), $.removeData(this._element, "bs.carousel"), 
            this._items = null, this._config = null, this._element = null, this._interval = null, 
            this._isPaused = null, this._isSliding = null, this._activeElement = null, 
            this._indicatorsElement = null;
        }, _proto._getConfig = function(config) {
            return config = _objectSpread2({}, Default, {}, config), Util.typeCheckConfig(NAME$2, config, DefaultType), 
            config;
        }, _proto._handleSwipe = function() {
            var absDeltax = Math.abs(this.touchDeltaX);
            absDeltax <= 40 || (absDeltax = absDeltax / this.touchDeltaX, (this.touchDeltaX = 0) < absDeltax && this.prev(), 
            absDeltax < 0 && this.next());
        }, _proto._addEventListeners = function() {
            var _this2 = this;
            this._config.keyboard && $(this._element).on(Event$2.KEYDOWN, function(event) {
                return _this2._keydown(event);
            }), "hover" === this._config.pause && $(this._element).on(Event$2.MOUSEENTER, function(event) {
                return _this2.pause(event);
            }).on(Event$2.MOUSELEAVE, function(event) {
                return _this2.cycle(event);
            }), this._config.touch && this._addTouchEventListeners();
        }, _proto._addTouchEventListeners = function() {
            var start, end, _this3 = this;
            this._touchSupported && (start = function(event) {
                _this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()] ? _this3.touchStartX = event.originalEvent.clientX : _this3._pointerEvent || (_this3.touchStartX = event.originalEvent.touches[0].clientX);
            }, end = function(event) {
                _this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()] && (_this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX), 
                _this3._handleSwipe(), "hover" === _this3._config.pause && (_this3.pause(), 
                _this3.touchTimeout && clearTimeout(_this3.touchTimeout), _this3.touchTimeout = setTimeout(function(event) {
                    return _this3.cycle(event);
                }, 500 + _this3._config.interval));
            }, $(this._element.querySelectorAll(Selector$2_ITEM_IMG)).on(Event$2.DRAG_START, function(e) {
                return e.preventDefault();
            }), this._pointerEvent ? ($(this._element).on(Event$2.POINTERDOWN, start), 
            $(this._element).on(Event$2.POINTERUP, end), this._element.classList.add(ClassName$2_POINTER_EVENT)) : ($(this._element).on(Event$2.TOUCHSTART, start), 
            $(this._element).on(Event$2.TOUCHMOVE, function(event) {
                event.originalEvent.touches && 1 < event.originalEvent.touches.length ? _this3.touchDeltaX = 0 : _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
            }), $(this._element).on(Event$2.TOUCHEND, end)));
        }, _proto._keydown = function(event) {
            if (!/input|textarea/i.test(event.target.tagName)) switch (event.which) {
              case 37:
                event.preventDefault(), this.prev();
                break;

              case 39:
                event.preventDefault(), this.next();
            }
        }, _proto._getItemIndex = function(element) {
            return this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$2_ITEM)) : [], 
            this._items.indexOf(element);
        }, _proto._getItemByDirection = function(direction, activeElement) {
            var isNextDirection = direction === Direction_NEXT, isPrevDirection = direction === Direction_PREV, activeIndex = this._getItemIndex(activeElement), lastItemIndex = this._items.length - 1;
            return (isPrevDirection && 0 === activeIndex || isNextDirection && activeIndex === lastItemIndex) && !this._config.wrap ? activeElement : -1 == (isPrevDirection = (activeIndex + (direction === Direction_PREV ? -1 : 1)) % this._items.length) ? this._items[this._items.length - 1] : this._items[isPrevDirection];
        }, _proto._triggerSlideEvent = function(relatedTarget, eventDirectionName) {
            var targetIndex = this._getItemIndex(relatedTarget), fromIndex = this._getItemIndex(this._element.querySelector(Selector$2_ACTIVE_ITEM)), relatedTarget = $.Event(Event$2.SLIDE, {
                relatedTarget: relatedTarget,
                direction: eventDirectionName,
                from: fromIndex,
                to: targetIndex
            });
            return $(this._element).trigger(relatedTarget), relatedTarget;
        }, _proto._setActiveIndicatorElement = function(element) {
            var indicators;
            this._indicatorsElement && (indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector$2_ACTIVE)), 
            $(indicators).removeClass(ClassName$2_ACTIVE), indicators = this._indicatorsElement.children[this._getItemIndex(element)]) && $(indicators).addClass(ClassName$2_ACTIVE);
        }, _proto._slide = function(direction, element) {
            var directionalClassName, orderClassName, slidEvent, _this4 = this, activeElement = this._element.querySelector(Selector$2_ACTIVE_ITEM), activeElementIndex = this._getItemIndex(activeElement), nextElement = element || activeElement && this._getItemByDirection(direction, activeElement), element = this._getItemIndex(nextElement), isCycling = Boolean(this._interval), direction = direction === Direction_NEXT ? (directionalClassName = ClassName$2_LEFT, 
            orderClassName = ClassName$2_NEXT, Direction_LEFT) : (directionalClassName = ClassName$2_RIGHT, 
            orderClassName = ClassName$2_PREV, Direction_RIGHT);
            nextElement && $(nextElement).hasClass(ClassName$2_ACTIVE) ? this._isSliding = !1 : this._triggerSlideEvent(nextElement, direction).isDefaultPrevented() || activeElement && nextElement && (this._isSliding = !0, 
            isCycling && this.pause(), this._setActiveIndicatorElement(nextElement), 
            slidEvent = $.Event(Event$2.SLID, {
                relatedTarget: nextElement,
                direction: direction,
                from: activeElementIndex,
                to: element
            }), $(this._element).hasClass(ClassName$2_SLIDE) ? ($(nextElement).addClass(orderClassName), 
            Util.reflow(nextElement), $(activeElement).addClass(directionalClassName), 
            $(nextElement).addClass(directionalClassName), (direction = parseInt(nextElement.getAttribute("data-interval"), 10)) ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, 
            this._config.interval = direction) : this._config.interval = this._config.defaultInterval || this._config.interval, 
            activeElementIndex = Util.getTransitionDurationFromElement(activeElement), 
            $(activeElement).one(Util.TRANSITION_END, function() {
                $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName$2_ACTIVE), 
                $(activeElement).removeClass(ClassName$2_ACTIVE + " " + orderClassName + " " + directionalClassName), 
                _this4._isSliding = !1, setTimeout(function() {
                    return $(_this4._element).trigger(slidEvent);
                }, 0);
            }).emulateTransitionEnd(activeElementIndex)) : ($(activeElement).removeClass(ClassName$2_ACTIVE), 
            $(nextElement).addClass(ClassName$2_ACTIVE), this._isSliding = !1, $(this._element).trigger(slidEvent)), 
            isCycling) && this.cycle();
        }, Carousel._jQueryInterface = function(config) {
            return this.each(function() {
                var data = $(this).data("bs.carousel"), _config = _objectSpread2({}, Default, {}, $(this).data()), action = ("object" == typeof config && (_config = _objectSpread2({}, _config, {}, config)), 
                "string" == typeof config ? config : _config.slide);
                if (data || (data = new Carousel(this, _config), $(this).data("bs.carousel", data)), 
                "number" == typeof config) data.to(config); else if ("string" == typeof action) {
                    if (void 0 === data[action]) throw new TypeError('No method named "' + action + '"');
                    data[action]();
                } else _config.interval && _config.ride && (data.pause(), data.cycle());
            });
        }, Carousel._dataApiClickHandler = function(event) {
            var config, slideIndex, selector = Util.getSelectorFromElement(this);
            selector && (selector = $(selector)[0]) && $(selector).hasClass(ClassName$2_CAROUSEL) && (config = _objectSpread2({}, $(selector).data(), {}, $(this).data()), 
            (slideIndex = this.getAttribute("data-slide-to")) && (config.interval = !1), 
            Carousel._jQueryInterface.call($(selector), config), slideIndex && $(selector).data("bs.carousel").to(slideIndex), 
            event.preventDefault());
        }, _createClass(Carousel, null, [ {
            key: "VERSION",
            get: function() {
                return "4.4.1";
            }
        }, {
            key: "Default",
            get: function() {
                return Default;
            }
        } ]), Carousel;
    }(), NAME$3 = ($(document).on(Event$2.CLICK_DATA_API, Selector$1_DATA_TOGGLE_CARROT, Carousel._dataApiClickHandler), 
    $(window).on(Event$2.LOAD_DATA_API, function() {
        for (var carousels = [].slice.call(document.querySelectorAll(Selector$2_DATA_RIDE)), i = 0, len = carousels.length; i < len; i++) {
            var $carousel = $(carousels[i]);
            Carousel._jQueryInterface.call($carousel, $carousel.data());
        }
    }), $.fn[NAME$2] = Carousel._jQueryInterface, $.fn[NAME$2].Constructor = Carousel, 
    $.fn[NAME$2].noConflict = function() {
        return $.fn[NAME$2] = JQUERY_NO_CONFLICT$2, Carousel._jQueryInterface;
    }, "collapse"), JQUERY_NO_CONFLICT$3 = $.fn[NAME$3], Default$1 = {
        toggle: !0,
        parent: ""
    }, DefaultType$1 = {
        toggle: "boolean",
        parent: "(string|element)"
    }, Event$3 = {
        SHOW: "show.bs.collapse",
        SHOWN: "shown.bs.collapse",
        HIDE: "hide.bs.collapse",
        HIDDEN: "hidden.bs.collapse",
        CLICK_DATA_API: "click.bs.collapse.data-api"
    }, ClassName$3_SHOW = "show", ClassName$3_COLLAPSE = "collapse", ClassName$3_COLLAPSING = "collapsing", ClassName$3_COLLAPSED = "collapsed", Dimension_WIDTH = "width", Dimension_HEIGHT = "height", Selector$3_ACTIVES = ".show, .collapsing", Selector$3_DATA_TOGGLE = '[data-toggle="collapse"]', Collapse = function() {
        function Collapse(element, config) {
            this._isTransitioning = !1, this._element = element, this._config = this._getConfig(config), 
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + element.id + '"],[data-toggle="collapse"][data-target="#' + element.id + '"]'));
            for (var toggleList = [].slice.call(document.querySelectorAll(Selector$3_DATA_TOGGLE)), i = 0, len = toggleList.length; i < len; i++) {
                var elem = toggleList[i], selector = Util.getSelectorFromElement(elem), filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function(foundElem) {
                    return foundElem === element;
                });
                null !== selector && 0 < filterElement.length && (this._selector = selector, 
                this._triggerArray.push(elem));
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), 
            this._config.toggle && this.toggle();
        }
        var _proto = Collapse.prototype;
        return _proto.toggle = function() {
            $(this._element).hasClass(ClassName$3_SHOW) ? this.hide() : this.show();
        }, _proto.show = function() {
            var actives, dimension, startEvent, activesData, _this = this;
            this._isTransitioning || $(this._element).hasClass(ClassName$3_SHOW) || (actives = this._parent && 0 === (actives = [].slice.call(this._parent.querySelectorAll(Selector$3_ACTIVES)).filter(function(elem) {
                return "string" == typeof _this._config.parent ? elem.getAttribute("data-parent") === _this._config.parent : elem.classList.contains(ClassName$3_COLLAPSE);
            })).length ? null : actives) && (activesData = $(actives).not(this._selector).data("bs.collapse")) && activesData._isTransitioning || (startEvent = $.Event(Event$3.SHOW), 
            $(this._element).trigger(startEvent), startEvent.isDefaultPrevented()) || (actives && (Collapse._jQueryInterface.call($(actives).not(this._selector), "hide"), 
            activesData || $(actives).data("bs.collapse", null)), dimension = this._getDimension(), 
            $(this._element).removeClass(ClassName$3_COLLAPSE).addClass(ClassName$3_COLLAPSING), 
            this._element.style[dimension] = 0, this._triggerArray.length && $(this._triggerArray).removeClass(ClassName$3_COLLAPSED).attr("aria-expanded", !0), 
            this.setTransitioning(!0), startEvent = "scroll" + (dimension[0].toUpperCase() + dimension.slice(1)), 
            activesData = Util.getTransitionDurationFromElement(this._element), 
            $(this._element).one(Util.TRANSITION_END, function() {
                $(_this._element).removeClass(ClassName$3_COLLAPSING).addClass(ClassName$3_COLLAPSE).addClass(ClassName$3_SHOW), 
                _this._element.style[dimension] = "", _this.setTransitioning(!1), 
                $(_this._element).trigger(Event$3.SHOWN);
            }).emulateTransitionEnd(activesData), this._element.style[dimension] = this._element[startEvent] + "px");
        }, _proto.hide = function() {
            var _this2 = this;
            if (!this._isTransitioning && $(this._element).hasClass(ClassName$3_SHOW)) {
                var startEvent = $.Event(Event$3.HIDE);
                if ($(this._element).trigger(startEvent), !startEvent.isDefaultPrevented()) {
                    var startEvent = this._getDimension(), triggerArrayLength = (this._element.style[startEvent] = this._element.getBoundingClientRect()[startEvent] + "px", 
                    Util.reflow(this._element), $(this._element).addClass(ClassName$3_COLLAPSING).removeClass(ClassName$3_COLLAPSE).removeClass(ClassName$3_SHOW), 
                    this._triggerArray.length);
                    if (0 < triggerArrayLength) for (var i = 0; i < triggerArrayLength; i++) {
                        var trigger = this._triggerArray[i], selector = Util.getSelectorFromElement(trigger);
                        null === selector || $([].slice.call(document.querySelectorAll(selector))).hasClass(ClassName$3_SHOW) || $(trigger).addClass(ClassName$3_COLLAPSED).attr("aria-expanded", !1);
                    }
                    this.setTransitioning(!0);
                    this._element.style[startEvent] = "";
                    startEvent = Util.getTransitionDurationFromElement(this._element);
                    $(this._element).one(Util.TRANSITION_END, function() {
                        _this2.setTransitioning(!1), $(_this2._element).removeClass(ClassName$3_COLLAPSING).addClass(ClassName$3_COLLAPSE).trigger(Event$3.HIDDEN);
                    }).emulateTransitionEnd(startEvent);
                }
            }
        }, _proto.setTransitioning = function(isTransitioning) {
            this._isTransitioning = isTransitioning;
        }, _proto.dispose = function() {
            $.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, 
            this._element = null, this._triggerArray = null, this._isTransitioning = null;
        }, _proto._getConfig = function(config) {
            return (config = _objectSpread2({}, Default$1, {}, config)).toggle = Boolean(config.toggle), 
            Util.typeCheckConfig(NAME$3, config, DefaultType$1), config;
        }, _proto._getDimension = function() {
            return $(this._element).hasClass(Dimension_WIDTH) ? Dimension_WIDTH : Dimension_HEIGHT;
        }, _proto._getParent = function() {
            var parent, _this3 = this, selector = (Util.isElement(this._config.parent) ? (parent = this._config.parent, 
            void 0 !== this._config.parent.jquery && (parent = this._config.parent[0])) : parent = document.querySelector(this._config.parent), 
            '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'), selector = [].slice.call(parent.querySelectorAll(selector));
            return $(selector).each(function(i, element) {
                _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [ element ]);
            }), parent;
        }, _proto._addAriaAndCollapsedClass = function(element, triggerArray) {
            element = $(element).hasClass(ClassName$3_SHOW);
            triggerArray.length && $(triggerArray).toggleClass(ClassName$3_COLLAPSED, !element).attr("aria-expanded", element);
        }, Collapse._getTargetFromElement = function(element) {
            element = Util.getSelectorFromElement(element);
            return element ? document.querySelector(element) : null;
        }, Collapse._jQueryInterface = function(config) {
            return this.each(function() {
                var $this = $(this), data = $this.data("bs.collapse"), _config = _objectSpread2({}, Default$1, {}, $this.data(), {}, "object" == typeof config && config ? config : {});
                if (!data && _config.toggle && /show|hide/.test(config) && (_config.toggle = !1), 
                data || (data = new Collapse(this, _config), $this.data("bs.collapse", data)), 
                "string" == typeof config) {
                    if (void 0 === data[config]) throw new TypeError('No method named "' + config + '"');
                    data[config]();
                }
            });
        }, _createClass(Collapse, null, [ {
            key: "VERSION",
            get: function() {
                return "4.4.1";
            }
        }, {
            key: "Default",
            get: function() {
                return Default$1;
            }
        } ]), Collapse;
    }(), NAME$4 = ($(document).on(Event$3.CLICK_DATA_API, Selector$3_DATA_TOGGLE, function(event) {
        "A" === event.currentTarget.tagName && event.preventDefault();
        var $trigger = $(this), event = Util.getSelectorFromElement(this), event = [].slice.call(document.querySelectorAll(event));
        $(event).each(function() {
            var $target = $(this), config = $target.data("bs.collapse") ? "toggle" : $trigger.data();
            Collapse._jQueryInterface.call($target, config);
        });
    }), $.fn[NAME$3] = Collapse._jQueryInterface, $.fn[NAME$3].Constructor = Collapse, 
    $.fn[NAME$3].noConflict = function() {
        return $.fn[NAME$3] = JQUERY_NO_CONFLICT$3, Collapse._jQueryInterface;
    }, "dropdown"), JQUERY_NO_CONFLICT$4 = $.fn[NAME$4], REGEXP_KEYDOWN = new RegExp("38|40|27"), Event$4 = {
        HIDE: "hide.bs.dropdown",
        HIDDEN: "hidden.bs.dropdown",
        SHOW: "show.bs.dropdown",
        SHOWN: "shown.bs.dropdown",
        CLICK: "click.bs.dropdown",
        CLICK_DATA_API: "click.bs.dropdown.data-api",
        KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
        KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
    }, ClassName$4_DISABLED = "disabled", ClassName$4_SHOW = "show", ClassName$4_DROPUP = "dropup", ClassName$4_DROPRIGHT = "dropright", ClassName$4_DROPLEFT = "dropleft", ClassName$4_MENURIGHT = "dropdown-menu-right", ClassName$4_POSITION_STATIC = "position-static", Selector$4_DATA_TOGGLE = '[data-toggle="dropdown"]', Event$1 = ".dropdown form", Selector$4_MENU = ".dropdown-menu", Selector$4_NAVBAR_NAV = ".navbar-nav", Selector$4_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", AttachmentMap_TOP = "top-start", AttachmentMap_TOPEND = "top-end", AttachmentMap_BOTTOM = "bottom-start", AttachmentMap_BOTTOMEND = "bottom-end", AttachmentMap_RIGHT = "right-start", AttachmentMap_LEFT = "left-start", Default$2 = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }, DefaultType$2 = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    }, Dropdown = function() {
        function Dropdown(element, config) {
            this._element = element, this._popper = null, this._config = this._getConfig(config), 
            this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), 
            this._addEventListeners();
        }
        var _proto = Dropdown.prototype;
        return _proto.toggle = function() {
            var isActive;
            this._element.disabled || $(this._element).hasClass(ClassName$4_DISABLED) || (isActive = $(this._menu).hasClass(ClassName$4_SHOW), 
            Dropdown._clearMenus(), isActive) || this.show(!0);
        }, _proto.show = function(usePopper) {
            if (void 0 === usePopper && (usePopper = !1), !(this._element.disabled || $(this._element).hasClass(ClassName$4_DISABLED) || $(this._menu).hasClass(ClassName$4_SHOW))) {
                var relatedTarget = {
                    relatedTarget: this._element
                }, showEvent = $.Event(Event$4.SHOW, relatedTarget), parent = Dropdown._getParentFromElement(this._element);
                if ($(parent).trigger(showEvent), !showEvent.isDefaultPrevented()) {
                    if (!this._inNavbar && usePopper) {
                        if (void 0 === Popper) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                        showEvent = this._element;
                        "parent" === this._config.reference ? showEvent = parent : Util.isElement(this._config.reference) && (showEvent = this._config.reference, 
                        void 0 !== this._config.reference.jquery) && (showEvent = this._config.reference[0]), 
                        "scrollParent" !== this._config.boundary && $(parent).addClass(ClassName$4_POSITION_STATIC), 
                        this._popper = new Popper(showEvent, this._menu, this._getPopperConfig());
                    }
                    "ontouchstart" in document.documentElement && 0 === $(parent).closest(Selector$4_NAVBAR_NAV).length && $(document.body).children().on("mouseover", null, $.noop), 
                    this._element.focus(), this._element.setAttribute("aria-expanded", !0), 
                    $(this._menu).toggleClass(ClassName$4_SHOW), $(parent).toggleClass(ClassName$4_SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
                }
            }
        }, _proto.hide = function() {
            var relatedTarget, hideEvent, parent;
            this._element.disabled || $(this._element).hasClass(ClassName$4_DISABLED) || !$(this._menu).hasClass(ClassName$4_SHOW) || (relatedTarget = {
                relatedTarget: this._element
            }, hideEvent = $.Event(Event$4.HIDE, relatedTarget), parent = Dropdown._getParentFromElement(this._element), 
            $(parent).trigger(hideEvent), hideEvent.isDefaultPrevented()) || (this._popper && this._popper.destroy(), 
            $(this._menu).toggleClass(ClassName$4_SHOW), $(parent).toggleClass(ClassName$4_SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget)));
        }, _proto.dispose = function() {
            $.removeData(this._element, "bs.dropdown"), $(this._element).off(".bs.dropdown"), 
            this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), 
            this._popper = null);
        }, _proto.update = function() {
            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
        }, _proto._addEventListeners = function() {
            var _this = this;
            $(this._element).on(Event$4.CLICK, function(event) {
                event.preventDefault(), event.stopPropagation(), _this.toggle();
            });
        }, _proto._getConfig = function(config) {
            return config = _objectSpread2({}, this.constructor.Default, {}, $(this._element).data(), {}, config), 
            Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType), 
            config;
        }, _proto._getMenuElement = function() {
            var parent;
            return this._menu || (parent = Dropdown._getParentFromElement(this._element)) && (this._menu = parent.querySelector(Selector$4_MENU)), 
            this._menu;
        }, _proto._getPlacement = function() {
            var $parentDropdown = $(this._element.parentNode), placement = AttachmentMap_BOTTOM;
            return $parentDropdown.hasClass(ClassName$4_DROPUP) ? (placement = AttachmentMap_TOP, 
            $(this._menu).hasClass(ClassName$4_MENURIGHT) && (placement = AttachmentMap_TOPEND)) : $parentDropdown.hasClass(ClassName$4_DROPRIGHT) ? placement = AttachmentMap_RIGHT : $parentDropdown.hasClass(ClassName$4_DROPLEFT) ? placement = AttachmentMap_LEFT : $(this._menu).hasClass(ClassName$4_MENURIGHT) && (placement = AttachmentMap_BOTTOMEND), 
            placement;
        }, _proto._detectNavbar = function() {
            return 0 < $(this._element).closest(".navbar").length;
        }, _proto._getOffset = function() {
            var _this2 = this, offset = {};
            return "function" == typeof this._config.offset ? offset.fn = function(data) {
                return data.offsets = _objectSpread2({}, data.offsets, {}, _this2._config.offset(data.offsets, _this2._element) || {}), 
                data;
            } : offset.offset = this._config.offset, offset;
        }, _proto._getPopperConfig = function() {
            var popperConfig = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (popperConfig.modifiers.applyStyle = {
                enabled: !1
            }), _objectSpread2({}, popperConfig, {}, this._config.popperConfig);
        }, Dropdown._jQueryInterface = function(config) {
            return this.each(function() {
                var data = $(this).data("bs.dropdown");
                if (data || (data = new Dropdown(this, "object" == typeof config ? config : null), 
                $(this).data("bs.dropdown", data)), "string" == typeof config) {
                    if (void 0 === data[config]) throw new TypeError('No method named "' + config + '"');
                    data[config]();
                }
            });
        }, Dropdown._clearMenus = function(event) {
            if (!event || 3 !== event.which && ("keyup" !== event.type || 9 === event.which)) for (var toggles = [].slice.call(document.querySelectorAll(Selector$4_DATA_TOGGLE)), i = 0, len = toggles.length; i < len; i++) {
                var dropdownMenu, hideEvent, parent = Dropdown._getParentFromElement(toggles[i]), context = $(toggles[i]).data("bs.dropdown"), relatedTarget = {
                    relatedTarget: toggles[i]
                };
                event && "click" === event.type && (relatedTarget.clickEvent = event), 
                context && (dropdownMenu = context._menu, !$(parent).hasClass(ClassName$4_SHOW) || event && ("click" === event.type && /input|textarea/i.test(event.target.tagName) || "keyup" === event.type && 9 === event.which) && $.contains(parent, event.target) || (hideEvent = $.Event(Event$4.HIDE, relatedTarget), 
                $(parent).trigger(hideEvent), hideEvent.isDefaultPrevented()) || ("ontouchstart" in document.documentElement && $(document.body).children().off("mouseover", null, $.noop), 
                toggles[i].setAttribute("aria-expanded", "false"), context._popper && context._popper.destroy(), 
                $(dropdownMenu).removeClass(ClassName$4_SHOW), $(parent).removeClass(ClassName$4_SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget))));
            }
        }, Dropdown._getParentFromElement = function(element) {
            var parent, selector = Util.getSelectorFromElement(element);
            return (parent = selector ? document.querySelector(selector) : parent) || element.parentNode;
        }, Dropdown._dataApiKeydownHandler = function(event) {
            var parent, isActive, index;
            (/input|textarea/i.test(event.target.tagName) ? 32 === event.which || 27 !== event.which && (40 !== event.which && 38 !== event.which || $(event.target).closest(Selector$4_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) || (event.preventDefault(), 
            event.stopPropagation(), this.disabled) || $(this).hasClass(ClassName$4_DISABLED) || (parent = Dropdown._getParentFromElement(this), 
            !(isActive = $(parent).hasClass(ClassName$4_SHOW)) && 27 === event.which) || (isActive && 27 !== event.which && 32 !== event.which ? 0 !== (isActive = [].slice.call(parent.querySelectorAll(Selector$4_VISIBLE_ITEMS)).filter(function(item) {
                return $(item).is(":visible");
            })).length && (index = isActive.indexOf(event.target), 38 === event.which && 0 < index && index--, 
            40 === event.which && index < isActive.length - 1 && index++, isActive[index = index < 0 ? 0 : index].focus()) : (27 === event.which && (isActive = parent.querySelector(Selector$4_DATA_TOGGLE), 
            $(isActive).trigger("focus")), $(this).trigger("click")));
        }, _createClass(Dropdown, null, [ {
            key: "VERSION",
            get: function() {
                return "4.4.1";
            }
        }, {
            key: "Default",
            get: function() {
                return Default$2;
            }
        }, {
            key: "DefaultType",
            get: function() {
                return DefaultType$2;
            }
        } ]), Dropdown;
    }(), JQUERY_NO_CONFLICT$5 = ($(document).on(Event$4.KEYDOWN_DATA_API, Selector$4_DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event$4.KEYDOWN_DATA_API, Selector$4_MENU, Dropdown._dataApiKeydownHandler).on(Event$4.CLICK_DATA_API + " " + Event$4.KEYUP_DATA_API, Dropdown._clearMenus).on(Event$4.CLICK_DATA_API, Selector$4_DATA_TOGGLE, function(event) {
        event.preventDefault(), event.stopPropagation(), Dropdown._jQueryInterface.call($(this), "toggle");
    }).on(Event$4.CLICK_DATA_API, Event$1, function(e) {
        e.stopPropagation();
    }), $.fn[NAME$4] = Dropdown._jQueryInterface, $.fn[NAME$4].Constructor = Dropdown, 
    $.fn[NAME$4].noConflict = function() {
        return $.fn[NAME$4] = JQUERY_NO_CONFLICT$4, Dropdown._jQueryInterface;
    }, $.fn["modal"]), Default$3 = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }, DefaultType$3 = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }, Event$5 = {
        HIDE: "hide.bs.modal",
        HIDE_PREVENTED: "hidePrevented.bs.modal",
        HIDDEN: "hidden.bs.modal",
        SHOW: "show.bs.modal",
        SHOWN: "shown.bs.modal",
        FOCUSIN: "focusin.bs.modal",
        RESIZE: "resize.bs.modal",
        CLICK_DISMISS: "click.dismiss.bs.modal",
        KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
        MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
        MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
        CLICK_DATA_API: "click.bs.modal.data-api"
    }, ClassName$5_SCROLLABLE = "modal-dialog-scrollable", ClassName$5_SCROLLBAR_MEASURER = "modal-scrollbar-measure", ClassName$5_BACKDROP = "modal-backdrop", ClassName$5_OPEN = "modal-open", ClassName$5_FADE = "fade", ClassName$5_SHOW = "show", ClassName$5_STATIC = "modal-static", Selector$5_DIALOG = ".modal-dialog", Selector$5_MODAL_BODY = ".modal-body", Selector$1_DATA_TOGGLE_CARROT = '[data-toggle="modal"]', Selector$5_DATA_DISMISS = '[data-dismiss="modal"]', Selector$5_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Selector$5_STICKY_CONTENT = ".sticky-top", Modal = function() {
        function Modal(element, config) {
            this._config = this._getConfig(config), this._element = element, this._dialog = element.querySelector(Selector$5_DIALOG), 
            this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, 
            this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
        }
        var _proto = Modal.prototype;
        return _proto.toggle = function(relatedTarget) {
            return this._isShown ? this.hide() : this.show(relatedTarget);
        }, _proto.show = function(relatedTarget) {
            var showEvent, _this = this;
            this._isShown || this._isTransitioning || ($(this._element).hasClass(ClassName$5_FADE) && (this._isTransitioning = !0), 
            showEvent = $.Event(Event$5.SHOW, {
                relatedTarget: relatedTarget
            }), $(this._element).trigger(showEvent), this._isShown) || showEvent.isDefaultPrevented() || (this._isShown = !0, 
            this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), 
            this._setEscapeEvent(), this._setResizeEvent(), $(this._element).on(Event$5.CLICK_DISMISS, Selector$5_DATA_DISMISS, function(event) {
                return _this.hide(event);
            }), $(this._dialog).on(Event$5.MOUSEDOWN_DISMISS, function() {
                $(_this._element).one(Event$5.MOUSEUP_DISMISS, function(event) {
                    $(event.target).is(_this._element) && (_this._ignoreBackdropClick = !0);
                });
            }), this._showBackdrop(function() {
                return _this._showElement(relatedTarget);
            }));
        }, _proto.hide = function(event) {
            var _this2 = this;
            event && event.preventDefault(), this._isShown && !this._isTransitioning && (event = $.Event(Event$5.HIDE), 
            $(this._element).trigger(event), this._isShown) && !event.isDefaultPrevented() && (this._isShown = !1, 
            (event = $(this._element).hasClass(ClassName$5_FADE)) && (this._isTransitioning = !0), 
            this._setEscapeEvent(), this._setResizeEvent(), $(document).off(Event$5.FOCUSIN), 
            $(this._element).removeClass(ClassName$5_SHOW), $(this._element).off(Event$5.CLICK_DISMISS), 
            $(this._dialog).off(Event$5.MOUSEDOWN_DISMISS), event ? (event = Util.getTransitionDurationFromElement(this._element), 
            $(this._element).one(Util.TRANSITION_END, function(event) {
                return _this2._hideModal(event);
            }).emulateTransitionEnd(event)) : this._hideModal());
        }, _proto.dispose = function() {
            [ window, this._element, this._dialog ].forEach(function(htmlElement) {
                return $(htmlElement).off(".bs.modal");
            }), $(document).off(Event$5.FOCUSIN), $.removeData(this._element, "bs.modal"), 
            this._config = null, this._element = null, this._dialog = null, this._backdrop = null, 
            this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, 
            this._isTransitioning = null, this._scrollbarWidth = null;
        }, _proto.handleUpdate = function() {
            this._adjustDialog();
        }, _proto._getConfig = function(config) {
            return config = _objectSpread2({}, Default$3, {}, config), Util.typeCheckConfig("modal", config, DefaultType$3), 
            config;
        }, _proto._triggerBackdropTransition = function() {
            var hideEventPrevented, _this3 = this;
            "static" === this._config.backdrop ? (hideEventPrevented = $.Event(Event$5.HIDE_PREVENTED), 
            $(this._element).trigger(hideEventPrevented), hideEventPrevented.defaultPrevented || (this._element.classList.add(ClassName$5_STATIC), 
            hideEventPrevented = Util.getTransitionDurationFromElement(this._element), 
            $(this._element).one(Util.TRANSITION_END, function() {
                _this3._element.classList.remove(ClassName$5_STATIC);
            }).emulateTransitionEnd(hideEventPrevented), this._element.focus())) : this.hide();
        }, _proto._showElement = function(relatedTarget) {
            function transitionComplete() {
                _this4._config.focus && _this4._element.focus(), _this4._isTransitioning = !1, 
                $(_this4._element).trigger(shownEvent);
            }
            var _this4 = this, transition = $(this._element).hasClass(ClassName$5_FADE), modalBody = this._dialog ? this._dialog.querySelector(Selector$5_MODAL_BODY) : null, shownEvent = (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), 
            this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), 
            this._element.setAttribute("aria-modal", !0), $(this._dialog).hasClass(ClassName$5_SCROLLABLE) && modalBody ? modalBody.scrollTop = 0 : this._element.scrollTop = 0, 
            transition && Util.reflow(this._element), $(this._element).addClass(ClassName$5_SHOW), 
            this._config.focus && this._enforceFocus(), $.Event(Event$5.SHOWN, {
                relatedTarget: relatedTarget
            }));
            transition ? (modalBody = Util.getTransitionDurationFromElement(this._dialog), 
            $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(modalBody)) : transitionComplete();
        }, _proto._enforceFocus = function() {
            var _this5 = this;
            $(document).off(Event$5.FOCUSIN).on(Event$5.FOCUSIN, function(event) {
                document !== event.target && _this5._element !== event.target && 0 === $(_this5._element).has(event.target).length && _this5._element.focus();
            });
        }, _proto._setEscapeEvent = function() {
            var _this6 = this;
            this._isShown && this._config.keyboard ? $(this._element).on(Event$5.KEYDOWN_DISMISS, function(event) {
                27 === event.which && _this6._triggerBackdropTransition();
            }) : this._isShown || $(this._element).off(Event$5.KEYDOWN_DISMISS);
        }, _proto._setResizeEvent = function() {
            var _this7 = this;
            this._isShown ? $(window).on(Event$5.RESIZE, function(event) {
                return _this7.handleUpdate(event);
            }) : $(window).off(Event$5.RESIZE);
        }, _proto._hideModal = function() {
            var _this8 = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), 
            this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, 
            this._showBackdrop(function() {
                $(document.body).removeClass(ClassName$5_OPEN), _this8._resetAdjustments(), 
                _this8._resetScrollbar(), $(_this8._element).trigger(Event$5.HIDDEN);
            });
        }, _proto._removeBackdrop = function() {
            this._backdrop && ($(this._backdrop).remove(), this._backdrop = null);
        }, _proto._showBackdrop = function(callback) {
            var _backdropTransitionDuration, _this9 = this, animate = $(this._element).hasClass(ClassName$5_FADE) ? ClassName$5_FADE : "";
            this._isShown && this._config.backdrop ? (this._backdrop = document.createElement("div"), 
            this._backdrop.className = ClassName$5_BACKDROP, animate && this._backdrop.classList.add(animate), 
            $(this._backdrop).appendTo(document.body), $(this._element).on(Event$5.CLICK_DISMISS, function(event) {
                _this9._ignoreBackdropClick ? _this9._ignoreBackdropClick = !1 : event.target === event.currentTarget && _this9._triggerBackdropTransition();
            }), animate && Util.reflow(this._backdrop), $(this._backdrop).addClass(ClassName$5_SHOW), 
            callback && (animate ? (animate = Util.getTransitionDurationFromElement(this._backdrop), 
            $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(animate)) : callback())) : !this._isShown && this._backdrop ? ($(this._backdrop).removeClass(ClassName$5_SHOW), 
            animate = function() {
                _this9._removeBackdrop(), callback && callback();
            }, $(this._element).hasClass(ClassName$5_FADE) ? (_backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop), 
            $(this._backdrop).one(Util.TRANSITION_END, animate).emulateTransitionEnd(_backdropTransitionDuration)) : animate()) : callback && callback();
        }, _proto._adjustDialog = function() {
            var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && isModalOverflowing && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), 
            this._isBodyOverflowing && !isModalOverflowing && (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }, _proto._resetAdjustments = function() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }, _proto._checkScrollbar = function() {
            var rect = document.body.getBoundingClientRect();
            this._isBodyOverflowing = rect.left + rect.right < window.innerWidth, 
            this._scrollbarWidth = this._getScrollbarWidth();
        }, _proto._setScrollbar = function() {
            var fixedContent, stickyContent, _this10 = this;
            this._isBodyOverflowing && (fixedContent = [].slice.call(document.querySelectorAll(Selector$5_FIXED_CONTENT)), 
            stickyContent = [].slice.call(document.querySelectorAll(Selector$5_STICKY_CONTENT)), 
            $(fixedContent).each(function(index, element) {
                var actualPadding = element.style.paddingRight, calculatedPadding = $(element).css("padding-right");
                $(element).data("padding-right", actualPadding).css("padding-right", parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
            }), $(stickyContent).each(function(index, element) {
                var actualMargin = element.style.marginRight, calculatedMargin = $(element).css("margin-right");
                $(element).data("margin-right", actualMargin).css("margin-right", parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
            }), fixedContent = document.body.style.paddingRight, stickyContent = $(document.body).css("padding-right"), 
            $(document.body).data("padding-right", fixedContent).css("padding-right", parseFloat(stickyContent) + this._scrollbarWidth + "px")), 
            $(document.body).addClass(ClassName$5_OPEN);
        }, _proto._resetScrollbar = function() {
            var fixedContent = [].slice.call(document.querySelectorAll(Selector$5_FIXED_CONTENT)), fixedContent = ($(fixedContent).each(function(index, element) {
                var padding = $(element).data("padding-right");
                $(element).removeData("padding-right"), element.style.paddingRight = padding || "";
            }), [].slice.call(document.querySelectorAll("" + Selector$5_STICKY_CONTENT))), fixedContent = ($(fixedContent).each(function(index, element) {
                var margin = $(element).data("margin-right");
                void 0 !== margin && $(element).css("margin-right", margin).removeData("margin-right");
            }), $(document.body).data("padding-right"));
            $(document.body).removeData("padding-right"), document.body.style.paddingRight = fixedContent || "";
        }, _proto._getScrollbarWidth = function() {
            var scrollDiv = document.createElement("div"), scrollbarWidth = (scrollDiv.className = ClassName$5_SCROLLBAR_MEASURER, 
            document.body.appendChild(scrollDiv), scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth);
            return document.body.removeChild(scrollDiv), scrollbarWidth;
        }, Modal._jQueryInterface = function(config, relatedTarget) {
            return this.each(function() {
                var data = $(this).data("bs.modal"), _config = _objectSpread2({}, Default$3, {}, $(this).data(), {}, "object" == typeof config && config ? config : {});
                if (data || (data = new Modal(this, _config), $(this).data("bs.modal", data)), 
                "string" == typeof config) {
                    if (void 0 === data[config]) throw new TypeError('No method named "' + config + '"');
                    data[config](relatedTarget);
                } else _config.show && data.show(relatedTarget);
            });
        }, _createClass(Modal, null, [ {
            key: "VERSION",
            get: function() {
                return "4.4.1";
            }
        }, {
            key: "Default",
            get: function() {
                return Default$3;
            }
        } ]), Modal;
    }(), uriAttrs = ($(document).on(Event$5.CLICK_DATA_API, Selector$1_DATA_TOGGLE_CARROT, function(event) {
        var target, _this11 = this, selector = Util.getSelectorFromElement(this), selector = (selector && (target = document.querySelector(selector)), 
        $(target).data("bs.modal") ? "toggle" : _objectSpread2({}, $(target).data(), {}, $(this).data())), $target = ("A" !== this.tagName && "AREA" !== this.tagName || event.preventDefault(), 
        $(target).one(Event$5.SHOW, function(showEvent) {
            showEvent.isDefaultPrevented() || $target.one(Event$5.HIDDEN, function() {
                $(_this11).is(":visible") && _this11.focus();
            });
        }));
        Modal._jQueryInterface.call($(target), selector, this);
    }), $.fn["modal"] = Modal._jQueryInterface, $.fn["modal"].Constructor = Modal, 
    $.fn["modal"].noConflict = function() {
        return $.fn["modal"] = JQUERY_NO_CONFLICT$5, Modal._jQueryInterface;
    }, [ "background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href" ]), Event$1 = {
        "*": [ "class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i ],
        a: [ "target", "href", "title", "rel" ],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: [ "src", "alt", "title", "width", "height" ],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }, SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi, DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
        if (0 === unsafeHtml.length) return unsafeHtml;
        if (sanitizeFn && "function" == typeof sanitizeFn) return sanitizeFn(unsafeHtml);
        for (var sanitizeFn = new window.DOMParser().parseFromString(unsafeHtml, "text/html"), whitelistKeys = Object.keys(whiteList), elements = [].slice.call(sanitizeFn.body.querySelectorAll("*")), _loop = function(i, len) {
            var el = elements[i], i = el.nodeName.toLowerCase();
            if (-1 === whitelistKeys.indexOf(el.nodeName.toLowerCase())) return el.parentNode.removeChild(el), 
            "continue";
            var attributeList = [].slice.call(el.attributes), whitelistedAttributes = [].concat(whiteList["*"] || [], whiteList[i] || []);
            attributeList.forEach(function(attr) {
                !function(attr, allowedAttributeList) {
                    var attrName = attr.nodeName.toLowerCase();
                    if (-1 !== allowedAttributeList.indexOf(attrName)) return -1 === uriAttrs.indexOf(attrName) || Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
                    for (var regExp = allowedAttributeList.filter(function(attrRegex) {
                        return attrRegex instanceof RegExp;
                    }), i = 0, l = regExp.length; i < l; i++) if (attrName.match(regExp[i])) return 1;
                }(attr, whitelistedAttributes) && el.removeAttribute(attr.nodeName);
            });
        }, i = 0, len = elements.length; i < len; i++) _loop(i);
        return sanitizeFn.body.innerHTML;
    }
    var NAME$6 = "tooltip", JQUERY_NO_CONFLICT$6 = $.fn["tooltip"], BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), DISALLOWED_ATTRIBUTES = [ "sanitize", "whiteList", "sanitizeFn" ], DefaultType$4 = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)"
    }, AttachmentMap$1 = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }, Default$4 = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: Event$1,
        popperConfig: null
    }, HoverState_SHOW = "show", HoverState_OUT = "out", Event$6 = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }, ClassName$6_FADE = "fade", ClassName$6_SHOW = "show", Selector$6_TOOLTIP_INNER = ".tooltip-inner", Selector$6_ARROW = ".arrow", Trigger_HOVER = "hover", Trigger_FOCUS = "focus", Trigger_CLICK = "click", Trigger_MANUAL = "manual", Tooltip = function() {
        function Tooltip(element, config) {
            if (void 0 === Popper) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, 
            this._popper = null, this.element = element, this.config = this._getConfig(config), 
            this.tip = null, this._setListeners();
        }
        var _proto = Tooltip.prototype;
        return _proto.enable = function() {
            this._isEnabled = !0;
        }, _proto.disable = function() {
            this._isEnabled = !1;
        }, _proto.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled;
        }, _proto.toggle = function(event) {
            var dataKey, context;
            this._isEnabled && (event ? (dataKey = this.constructor.DATA_KEY, (context = $(event.currentTarget).data(dataKey)) || (context = new this.constructor(event.currentTarget, this._getDelegateConfig()), 
            $(event.currentTarget).data(dataKey, context)), context._activeTrigger.click = !context._activeTrigger.click, 
            context._isWithActiveTrigger() ? context._enter(null, context) : context._leave(null, context)) : $(this.getTipElement()).hasClass(ClassName$6_SHOW) ? this._leave(null, this) : this._enter(null, this));
        }, _proto.dispose = function() {
            clearTimeout(this._timeout), $.removeData(this.element, this.constructor.DATA_KEY), 
            $(this.element).off(this.constructor.EVENT_KEY), $(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), 
            this.tip && $(this.tip).remove(), this._isEnabled = null, this._timeout = null, 
            this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), 
            this._popper = null, this.element = null, this.config = null, this.tip = null;
        }, _proto.show = function() {
            var _this = this;
            if ("none" === $(this.element).css("display")) throw new Error("Please use show on visible elements");
            var container, shadowRoot, showEvent = $.Event(this.constructor.Event.SHOW);
            this.isWithContent() && this._isEnabled && ($(this.element).trigger(showEvent), 
            shadowRoot = Util.findShadowRoot(this.element), shadowRoot = $.contains(null !== shadowRoot ? shadowRoot : this.element.ownerDocument.documentElement, this.element), 
            !showEvent.isDefaultPrevented()) && shadowRoot && (showEvent = this.getTipElement(), 
            shadowRoot = Util.getUID(this.constructor.NAME), showEvent.setAttribute("id", shadowRoot), 
            this.element.setAttribute("aria-describedby", shadowRoot), this.setContent(), 
            this.config.animation && $(showEvent).addClass(ClassName$6_FADE), shadowRoot = "function" == typeof this.config.placement ? this.config.placement.call(this, showEvent, this.element) : this.config.placement, 
            shadowRoot = this._getAttachment(shadowRoot), this.addAttachmentClass(shadowRoot), 
            container = this._getContainer(), $(showEvent).data(this.constructor.DATA_KEY, this), 
            $.contains(this.element.ownerDocument.documentElement, this.tip) || $(showEvent).appendTo(container), 
            $(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Popper(this.element, showEvent, this._getPopperConfig(shadowRoot)), 
            $(showEvent).addClass(ClassName$6_SHOW), "ontouchstart" in document.documentElement && $(document.body).children().on("mouseover", null, $.noop), 
            container = function() {
                _this.config.animation && _this._fixTransition();
                var prevHoverState = _this._hoverState;
                _this._hoverState = null, $(_this.element).trigger(_this.constructor.Event.SHOWN), 
                prevHoverState === HoverState_OUT && _this._leave(null, _this);
            }, $(this.tip).hasClass(ClassName$6_FADE) ? (shadowRoot = Util.getTransitionDurationFromElement(this.tip), 
            $(this.tip).one(Util.TRANSITION_END, container).emulateTransitionEnd(shadowRoot)) : container());
        }, _proto.hide = function(callback) {
            function complete() {
                _this2._hoverState !== HoverState_SHOW && tip.parentNode && tip.parentNode.removeChild(tip), 
                _this2._cleanTipClass(), _this2.element.removeAttribute("aria-describedby"), 
                $(_this2.element).trigger(_this2.constructor.Event.HIDDEN), null !== _this2._popper && _this2._popper.destroy(), 
                callback && callback();
            }
            var _this2 = this, tip = this.getTipElement(), hideEvent = $.Event(this.constructor.Event.HIDE);
            $(this.element).trigger(hideEvent), hideEvent.isDefaultPrevented() || ($(tip).removeClass(ClassName$6_SHOW), 
            "ontouchstart" in document.documentElement && $(document.body).children().off("mouseover", null, $.noop), 
            this._activeTrigger[Trigger_CLICK] = !1, this._activeTrigger[Trigger_FOCUS] = !1, 
            this._activeTrigger[Trigger_HOVER] = !1, $(this.tip).hasClass(ClassName$6_FADE) ? (hideEvent = Util.getTransitionDurationFromElement(tip), 
            $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(hideEvent)) : complete(), 
            this._hoverState = "");
        }, _proto.update = function() {
            null !== this._popper && this._popper.scheduleUpdate();
        }, _proto.isWithContent = function() {
            return Boolean(this.getTitle());
        }, _proto.addAttachmentClass = function(attachment) {
            $(this.getTipElement()).addClass("bs-tooltip-" + attachment);
        }, _proto.getTipElement = function() {
            return this.tip = this.tip || $(this.config.template)[0], this.tip;
        }, _proto.setContent = function() {
            var tip = this.getTipElement();
            this.setElementContent($(tip.querySelectorAll(Selector$6_TOOLTIP_INNER)), this.getTitle()), 
            $(tip).removeClass(ClassName$6_FADE + " " + ClassName$6_SHOW);
        }, _proto.setElementContent = function($element, content) {
            "object" == typeof content && (content.nodeType || content.jquery) ? this.config.html ? $(content).parent().is($element) || $element.empty().append(content) : $element.text($(content).text()) : this.config.html ? (this.config.sanitize && (content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn)), 
            $element.html(content)) : $element.text(content);
        }, _proto.getTitle = function() {
            return this.element.getAttribute("data-original-title") || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title);
        }, _proto._getPopperConfig = function(attachment) {
            var _this3 = this;
            return _objectSpread2({}, {
                placement: attachment,
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        behavior: this.config.fallbackPlacement
                    },
                    arrow: {
                        element: Selector$6_ARROW
                    },
                    preventOverflow: {
                        boundariesElement: this.config.boundary
                    }
                },
                onCreate: function(data) {
                    data.originalPlacement !== data.placement && _this3._handlePopperPlacementChange(data);
                },
                onUpdate: function(data) {
                    return _this3._handlePopperPlacementChange(data);
                }
            }, {}, this.config.popperConfig);
        }, _proto._getOffset = function() {
            var _this4 = this, offset = {};
            return "function" == typeof this.config.offset ? offset.fn = function(data) {
                return data.offsets = _objectSpread2({}, data.offsets, {}, _this4.config.offset(data.offsets, _this4.element) || {}), 
                data;
            } : offset.offset = this.config.offset, offset;
        }, _proto._getContainer = function() {
            return !1 === this.config.container ? document.body : Util.isElement(this.config.container) ? $(this.config.container) : $(document).find(this.config.container);
        }, _proto._getAttachment = function(placement) {
            return AttachmentMap$1[placement.toUpperCase()];
        }, _proto._setListeners = function() {
            var _this5 = this;
            this.config.trigger.split(" ").forEach(function(trigger) {
                var eventIn;
                "click" === trigger ? $(_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function(event) {
                    return _this5.toggle(event);
                }) : trigger !== Trigger_MANUAL && (eventIn = trigger === Trigger_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN, 
                trigger = trigger === Trigger_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT, 
                $(_this5.element).on(eventIn, _this5.config.selector, function(event) {
                    return _this5._enter(event);
                }).on(trigger, _this5.config.selector, function(event) {
                    return _this5._leave(event);
                }));
            }), this._hideModalHandler = function() {
                _this5.element && _this5.hide();
            }, $(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), 
            this.config.selector ? this.config = _objectSpread2({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle();
        }, _proto._fixTitle = function() {
            var titleType = typeof this.element.getAttribute("data-original-title");
            !this.element.getAttribute("title") && "string" == titleType || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), 
            this.element.setAttribute("title", ""));
        }, _proto._enter = function(event, context) {
            var dataKey = this.constructor.DATA_KEY;
            (context = context || $(event.currentTarget).data(dataKey)) || (context = new this.constructor(event.currentTarget, this._getDelegateConfig()), 
            $(event.currentTarget).data(dataKey, context)), event && (context._activeTrigger["focusin" === event.type ? Trigger_FOCUS : Trigger_HOVER] = !0), 
            $(context.getTipElement()).hasClass(ClassName$6_SHOW) || context._hoverState === HoverState_SHOW ? context._hoverState = HoverState_SHOW : (clearTimeout(context._timeout), 
            context._hoverState = HoverState_SHOW, context.config.delay && context.config.delay.show ? context._timeout = setTimeout(function() {
                context._hoverState === HoverState_SHOW && context.show();
            }, context.config.delay.show) : context.show());
        }, _proto._leave = function(event, context) {
            var dataKey = this.constructor.DATA_KEY;
            (context = context || $(event.currentTarget).data(dataKey)) || (context = new this.constructor(event.currentTarget, this._getDelegateConfig()), 
            $(event.currentTarget).data(dataKey, context)), event && (context._activeTrigger["focusout" === event.type ? Trigger_FOCUS : Trigger_HOVER] = !1), 
            context._isWithActiveTrigger() || (clearTimeout(context._timeout), context._hoverState = HoverState_OUT, 
            context.config.delay && context.config.delay.hide ? context._timeout = setTimeout(function() {
                context._hoverState === HoverState_OUT && context.hide();
            }, context.config.delay.hide) : context.hide());
        }, _proto._isWithActiveTrigger = function() {
            for (var trigger in this._activeTrigger) if (this._activeTrigger[trigger]) return !0;
            return !1;
        }, _proto._getConfig = function(config) {
            var dataAttributes = $(this.element).data();
            return Object.keys(dataAttributes).forEach(function(dataAttr) {
                -1 !== DISALLOWED_ATTRIBUTES.indexOf(dataAttr) && delete dataAttributes[dataAttr];
            }), "number" == typeof (config = _objectSpread2({}, this.constructor.Default, {}, dataAttributes, {}, "object" == typeof config && config ? config : {})).delay && (config.delay = {
                show: config.delay,
                hide: config.delay
            }), "number" == typeof config.title && (config.title = config.title.toString()), 
            "number" == typeof config.content && (config.content = config.content.toString()), 
            Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType), 
            config.sanitize && (config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn)), 
            config;
        }, _proto._getDelegateConfig = function() {
            var config = {};
            if (this.config) for (var key in this.config) this.constructor.Default[key] !== this.config[key] && (config[key] = this.config[key]);
            return config;
        }, _proto._cleanTipClass = function() {
            var $tip = $(this.getTipElement()), tabClass = $tip.attr("class").match(BSCLS_PREFIX_REGEX);
            null !== tabClass && tabClass.length && $tip.removeClass(tabClass.join(""));
        }, _proto._handlePopperPlacementChange = function(popperData) {
            var popperInstance = popperData.instance;
            this.tip = popperInstance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(popperData.placement));
        }, _proto._fixTransition = function() {
            var tip = this.getTipElement(), initConfigAnimation = this.config.animation;
            null === tip.getAttribute("x-placement") && ($(tip).removeClass(ClassName$6_FADE), 
            this.config.animation = !1, this.hide(), this.show(), this.config.animation = initConfigAnimation);
        }, Tooltip._jQueryInterface = function(config) {
            return this.each(function() {
                var data = $(this).data("bs.tooltip"), _config = "object" == typeof config && config;
                if ((data || !/dispose|hide/.test(config)) && (data || (data = new Tooltip(this, _config), 
                $(this).data("bs.tooltip", data)), "string" == typeof config)) {
                    if (void 0 === data[config]) throw new TypeError('No method named "' + config + '"');
                    data[config]();
                }
            });
        }, _createClass(Tooltip, null, [ {
            key: "VERSION",
            get: function() {
                return "4.4.1";
            }
        }, {
            key: "Default",
            get: function() {
                return Default$4;
            }
        }, {
            key: "NAME",
            get: function() {
                return NAME$6;
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.tooltip";
            }
        }, {
            key: "Event",
            get: function() {
                return Event$6;
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.tooltip";
            }
        }, {
            key: "DefaultType",
            get: function() {
                return DefaultType$4;
            }
        } ]), Tooltip;
    }(), NAME$7 = ($.fn["tooltip"] = Tooltip._jQueryInterface, $.fn["tooltip"].Constructor = Tooltip, 
    $.fn["tooltip"].noConflict = function() {
        return $.fn["tooltip"] = JQUERY_NO_CONFLICT$6, Tooltip._jQueryInterface;
    }, "popover"), JQUERY_NO_CONFLICT$7 = $.fn["popover"], BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)bs-popover\\S+", "g"), Default$5 = _objectSpread2({}, Tooltip.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }), DefaultType$5 = _objectSpread2({}, Tooltip.DefaultType, {
        content: "(string|element|function)"
    }), ClassName$7_FADE = "fade", ClassName$7_SHOW = "show", Selector$7_TITLE = ".popover-header", Selector$7_CONTENT = ".popover-body", Event$7 = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    }, Popover = function(_Tooltip) {
        var superClass;
        function Popover() {
            return _Tooltip.apply(this, arguments) || this;
        }
        superClass = _Tooltip, (subClass = Popover).prototype = Object.create(superClass.prototype), 
        (subClass.prototype.constructor = subClass).__proto__ = superClass;
        var subClass = Popover.prototype;
        return subClass.isWithContent = function() {
            return this.getTitle() || this._getContent();
        }, subClass.addAttachmentClass = function(attachment) {
            $(this.getTipElement()).addClass("bs-popover-" + attachment);
        }, subClass.getTipElement = function() {
            return this.tip = this.tip || $(this.config.template)[0], this.tip;
        }, subClass.setContent = function() {
            var $tip = $(this.getTipElement()), content = (this.setElementContent($tip.find(Selector$7_TITLE), this.getTitle()), 
            this._getContent());
            "function" == typeof content && (content = content.call(this.element)), 
            this.setElementContent($tip.find(Selector$7_CONTENT), content), $tip.removeClass(ClassName$7_FADE + " " + ClassName$7_SHOW);
        }, subClass._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content;
        }, subClass._cleanTipClass = function() {
            var $tip = $(this.getTipElement()), tabClass = $tip.attr("class").match(BSCLS_PREFIX_REGEX$1);
            null !== tabClass && 0 < tabClass.length && $tip.removeClass(tabClass.join(""));
        }, Popover._jQueryInterface = function(config) {
            return this.each(function() {
                var data = $(this).data("bs.popover"), _config = "object" == typeof config ? config : null;
                if ((data || !/dispose|hide/.test(config)) && (data || (data = new Popover(this, _config), 
                $(this).data("bs.popover", data)), "string" == typeof config)) {
                    if (void 0 === data[config]) throw new TypeError('No method named "' + config + '"');
                    data[config]();
                }
            });
        }, _createClass(Popover, null, [ {
            key: "VERSION",
            get: function() {
                return "4.4.1";
            }
        }, {
            key: "Default",
            get: function() {
                return Default$5;
            }
        }, {
            key: "NAME",
            get: function() {
                return NAME$7;
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.popover";
            }
        }, {
            key: "Event",
            get: function() {
                return Event$7;
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.popover";
            }
        }, {
            key: "DefaultType",
            get: function() {
                return DefaultType$5;
            }
        } ]), Popover;
    }(Tooltip), NAME$8 = ($.fn["popover"] = Popover._jQueryInterface, $.fn["popover"].Constructor = Popover, 
    $.fn["popover"].noConflict = function() {
        return $.fn["popover"] = JQUERY_NO_CONFLICT$7, Popover._jQueryInterface;
    }, "scrollspy"), JQUERY_NO_CONFLICT$8 = $.fn[NAME$8], Default$6 = {
        offset: 10,
        method: "auto",
        target: ""
    }, DefaultType$6 = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }, Event$8 = {
        ACTIVATE: "activate.bs.scrollspy",
        SCROLL: "scroll.bs.scrollspy",
        LOAD_DATA_API: "load.bs.scrollspy.data-api"
    }, ClassName$8_DROPDOWN_ITEM = "dropdown-item", ClassName$8_ACTIVE = "active", Selector$8_DATA_SPY = '[data-spy="scroll"]', Selector$8_NAV_LIST_GROUP = ".nav, .list-group", Selector$8_NAV_LINKS = ".nav-link", Selector$8_NAV_ITEMS = ".nav-item", Selector$8_LIST_ITEMS = ".list-group-item", Selector$8_DROPDOWN = ".dropdown", Selector$8_DROPDOWN_ITEMS = ".dropdown-item", Selector$8_DROPDOWN_TOGGLE = ".dropdown-toggle", OffsetMethod_OFFSET = "offset", OffsetMethod_POSITION = "position", ScrollSpy = function() {
        function ScrollSpy(element, config) {
            var _this = this;
            this._element = element, this._scrollElement = "BODY" === element.tagName ? window : element, 
            this._config = this._getConfig(config), this._selector = this._config.target + " " + Selector$8_NAV_LINKS + "," + this._config.target + " " + Selector$8_LIST_ITEMS + "," + this._config.target + " " + Selector$8_DROPDOWN_ITEMS, 
            this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, 
            $(this._scrollElement).on(Event$8.SCROLL, function(event) {
                return _this._process(event);
            }), this.refresh(), this._process();
        }
        var _proto = ScrollSpy.prototype;
        return _proto.refresh = function() {
            var _this2 = this, autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod_OFFSET : OffsetMethod_POSITION, offsetMethod = "auto" === this._config.method ? autoMethod : this._config.method, offsetBase = offsetMethod === OffsetMethod_POSITION ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), 
            [].slice.call(document.querySelectorAll(this._selector)).map(function(element) {
                var target, element = Util.getSelectorFromElement(element);
                if (target = element ? document.querySelector(element) : target) {
                    var targetBCR = target.getBoundingClientRect();
                    if (targetBCR.width || targetBCR.height) return [ $(target)[offsetMethod]().top + offsetBase, element ];
                }
                return null;
            }).filter(function(item) {
                return item;
            }).sort(function(a, b) {
                return a[0] - b[0];
            }).forEach(function(item) {
                _this2._offsets.push(item[0]), _this2._targets.push(item[1]);
            });
        }, _proto.dispose = function() {
            $.removeData(this._element, "bs.scrollspy"), $(this._scrollElement).off(".bs.scrollspy"), 
            this._element = null, this._scrollElement = null, this._config = null, 
            this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, 
            this._scrollHeight = null;
        }, _proto._getConfig = function(config) {
            var id;
            return "string" != typeof (config = _objectSpread2({}, Default$6, {}, "object" == typeof config && config ? config : {})).target && ((id = $(config.target).attr("id")) || (id = Util.getUID(NAME$8), 
            $(config.target).attr("id", id)), config.target = "#" + id), Util.typeCheckConfig(NAME$8, config, DefaultType$6), 
            config;
        }, _proto._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        }, _proto._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }, _proto._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        }, _proto._process = function() {
            var scrollTop = this._getScrollTop() + this._config.offset, scrollHeight = this._getScrollHeight(), maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();
            if (this._scrollHeight !== scrollHeight && this.refresh(), maxScroll <= scrollTop) scrollHeight = this._targets[this._targets.length - 1], 
            this._activeTarget !== scrollHeight && this._activate(scrollHeight); else if (this._activeTarget && scrollTop < this._offsets[0] && 0 < this._offsets[0]) this._activeTarget = null, 
            this._clear(); else for (var i = this._offsets.length; i--; ) this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (void 0 === this._offsets[i + 1] || scrollTop < this._offsets[i + 1]) && this._activate(this._targets[i]);
        }, _proto._activate = function(target) {
            this._activeTarget = target, this._clear();
            var queries = this._selector.split(",").map(function(selector) {
                return selector + '[data-target="' + target + '"],' + selector + '[href="' + target + '"]';
            }), queries = $([].slice.call(document.querySelectorAll(queries.join(","))));
            (queries.hasClass(ClassName$8_DROPDOWN_ITEM) ? (queries.closest(Selector$8_DROPDOWN).find(Selector$8_DROPDOWN_TOGGLE).addClass(ClassName$8_ACTIVE), 
            queries) : (queries.addClass(ClassName$8_ACTIVE), queries.parents(Selector$8_NAV_LIST_GROUP).prev(Selector$8_NAV_LINKS + ", " + Selector$8_LIST_ITEMS).addClass(ClassName$8_ACTIVE), 
            queries.parents(Selector$8_NAV_LIST_GROUP).prev(Selector$8_NAV_ITEMS).children(Selector$8_NAV_LINKS))).addClass(ClassName$8_ACTIVE), 
            $(this._scrollElement).trigger(Event$8.ACTIVATE, {
                relatedTarget: target
            });
        }, _proto._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(node) {
                return node.classList.contains(ClassName$8_ACTIVE);
            }).forEach(function(node) {
                return node.classList.remove(ClassName$8_ACTIVE);
            });
        }, ScrollSpy._jQueryInterface = function(config) {
            return this.each(function() {
                var data = $(this).data("bs.scrollspy");
                if (data || (data = new ScrollSpy(this, "object" == typeof config && config), 
                $(this).data("bs.scrollspy", data)), "string" == typeof config) {
                    if (void 0 === data[config]) throw new TypeError('No method named "' + config + '"');
                    data[config]();
                }
            });
        }, _createClass(ScrollSpy, null, [ {
            key: "VERSION",
            get: function() {
                return "4.4.1";
            }
        }, {
            key: "Default",
            get: function() {
                return Default$6;
            }
        } ]), ScrollSpy;
    }(), JQUERY_NO_CONFLICT$9 = ($(window).on(Event$8.LOAD_DATA_API, function() {
        for (var scrollSpys = [].slice.call(document.querySelectorAll(Selector$8_DATA_SPY)), i = scrollSpys.length; i--; ) {
            var $spy = $(scrollSpys[i]);
            ScrollSpy._jQueryInterface.call($spy, $spy.data());
        }
    }), $.fn[NAME$8] = ScrollSpy._jQueryInterface, $.fn[NAME$8].Constructor = ScrollSpy, 
    $.fn[NAME$8].noConflict = function() {
        return $.fn[NAME$8] = JQUERY_NO_CONFLICT$8, ScrollSpy._jQueryInterface;
    }, $.fn["tab"]), Event$9 = {
        HIDE: "hide.bs.tab",
        HIDDEN: "hidden.bs.tab",
        SHOW: "show.bs.tab",
        SHOWN: "shown.bs.tab",
        CLICK_DATA_API: "click.bs.tab.data-api"
    }, ClassName$9_DROPDOWN_MENU = "dropdown-menu", ClassName$9_ACTIVE = "active", ClassName$9_DISABLED = "disabled", ClassName$9_FADE = "fade", ClassName$9_SHOW = "show", Selector$9_DROPDOWN = ".dropdown", Selector$9_NAV_LIST_GROUP = ".nav, .list-group", Selector$9_ACTIVE = ".active", Selector$9_ACTIVE_UL = "> li > .active", Selector$1_DATA_TOGGLE_CARROT = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Selector$9_DROPDOWN_TOGGLE = ".dropdown-toggle", Selector$9_DROPDOWN_ACTIVE_CHILD = "> .dropdown-menu .active", Tab = function() {
        function Tab(element) {
            this._element = element;
        }
        var _proto = Tab.prototype;
        return _proto.show = function() {
            var target, listElement, selector, previous, itemSelector, showEvent, _this = this;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName$9_ACTIVE) || $(this._element).hasClass(ClassName$9_DISABLED) || (listElement = $(this._element).closest(Selector$9_NAV_LIST_GROUP)[0], 
            selector = Util.getSelectorFromElement(this._element), listElement && (itemSelector = "UL" === listElement.nodeName || "OL" === listElement.nodeName ? Selector$9_ACTIVE_UL : Selector$9_ACTIVE, 
            previous = (previous = $.makeArray($(listElement).find(itemSelector)))[previous.length - 1]), 
            itemSelector = $.Event(Event$9.HIDE, {
                relatedTarget: this._element
            }), showEvent = $.Event(Event$9.SHOW, {
                relatedTarget: previous
            }), previous && $(previous).trigger(itemSelector), $(this._element).trigger(showEvent), 
            showEvent.isDefaultPrevented()) || itemSelector.isDefaultPrevented() || (selector && (target = document.querySelector(selector)), 
            this._activate(this._element, listElement), showEvent = function() {
                var hiddenEvent = $.Event(Event$9.HIDDEN, {
                    relatedTarget: _this._element
                }), shownEvent = $.Event(Event$9.SHOWN, {
                    relatedTarget: previous
                });
                $(previous).trigger(hiddenEvent), $(_this._element).trigger(shownEvent);
            }, target ? this._activate(target, target.parentNode, showEvent) : showEvent());
        }, _proto.dispose = function() {
            $.removeData(this._element, "bs.tab"), this._element = null;
        }, _proto._activate = function(element, container, callback) {
            function complete() {
                return _this2._transitionComplete(element, active, callback);
            }
            var _this2 = this, active = (!container || "UL" !== container.nodeName && "OL" !== container.nodeName ? $(container).children(Selector$9_ACTIVE) : $(container).find(Selector$9_ACTIVE_UL))[0], container = callback && active && $(active).hasClass(ClassName$9_FADE);
            active && container ? (container = Util.getTransitionDurationFromElement(active), 
            $(active).removeClass(ClassName$9_SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(container)) : complete();
        }, _proto._transitionComplete = function(element, active, callback) {
            var dropdownChild;
            active && ($(active).removeClass(ClassName$9_ACTIVE), (dropdownChild = $(active.parentNode).find(Selector$9_DROPDOWN_ACTIVE_CHILD)[0]) && $(dropdownChild).removeClass(ClassName$9_ACTIVE), 
            "tab" === active.getAttribute("role")) && active.setAttribute("aria-selected", !1), 
            $(element).addClass(ClassName$9_ACTIVE), "tab" === element.getAttribute("role") && element.setAttribute("aria-selected", !0), 
            Util.reflow(element), element.classList.contains(ClassName$9_FADE) && element.classList.add(ClassName$9_SHOW), 
            element.parentNode && $(element.parentNode).hasClass(ClassName$9_DROPDOWN_MENU) && ((dropdownChild = $(element).closest(Selector$9_DROPDOWN)[0]) && (active = [].slice.call(dropdownChild.querySelectorAll(Selector$9_DROPDOWN_TOGGLE)), 
            $(active).addClass(ClassName$9_ACTIVE)), element.setAttribute("aria-expanded", !0)), 
            callback && callback();
        }, Tab._jQueryInterface = function(config) {
            return this.each(function() {
                var $this = $(this), data = $this.data("bs.tab");
                if (data || (data = new Tab(this), $this.data("bs.tab", data)), 
                "string" == typeof config) {
                    if (void 0 === data[config]) throw new TypeError('No method named "' + config + '"');
                    data[config]();
                }
            });
        }, _createClass(Tab, null, [ {
            key: "VERSION",
            get: function() {
                return "4.4.1";
            }
        } ]), Tab;
    }(), JQUERY_NO_CONFLICT$a = ($(document).on(Event$9.CLICK_DATA_API, Selector$1_DATA_TOGGLE_CARROT, function(event) {
        event.preventDefault(), Tab._jQueryInterface.call($(this), "show");
    }), $.fn["tab"] = Tab._jQueryInterface, $.fn["tab"].Constructor = Tab, $.fn["tab"].noConflict = function() {
        return $.fn["tab"] = JQUERY_NO_CONFLICT$9, Tab._jQueryInterface;
    }, $.fn["toast"]), Event$a = {
        CLICK_DISMISS: "click.dismiss.bs.toast",
        HIDE: "hide.bs.toast",
        HIDDEN: "hidden.bs.toast",
        SHOW: "show.bs.toast",
        SHOWN: "shown.bs.toast"
    }, ClassName$a_FADE = "fade", ClassName$a_HIDE = "hide", ClassName$a_SHOW = "show", ClassName$a_SHOWING = "showing", DefaultType$7 = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, Default$7 = {
        animation: !0,
        autohide: !0,
        delay: 500
    }, Selector$a_DATA_DISMISS = '[data-dismiss="toast"]', Toast = function() {
        function Toast(element, config) {
            this._element = element, this._config = this._getConfig(config), this._timeout = null, 
            this._setListeners();
        }
        var _proto = Toast.prototype;
        return _proto.show = function() {
            var transitionDuration, _this = this, showEvent = $.Event(Event$a.SHOW);
            $(this._element).trigger(showEvent), showEvent.isDefaultPrevented() || (this._config.animation && this._element.classList.add(ClassName$a_FADE), 
            showEvent = function() {
                _this._element.classList.remove(ClassName$a_SHOWING), _this._element.classList.add(ClassName$a_SHOW), 
                $(_this._element).trigger(Event$a.SHOWN), _this._config.autohide && (_this._timeout = setTimeout(function() {
                    _this.hide();
                }, _this._config.delay));
            }, this._element.classList.remove(ClassName$a_HIDE), Util.reflow(this._element), 
            this._element.classList.add(ClassName$a_SHOWING), this._config.animation ? (transitionDuration = Util.getTransitionDurationFromElement(this._element), 
            $(this._element).one(Util.TRANSITION_END, showEvent).emulateTransitionEnd(transitionDuration)) : showEvent());
        }, _proto.hide = function() {
            var hideEvent;
            this._element.classList.contains(ClassName$a_SHOW) && (hideEvent = $.Event(Event$a.HIDE), 
            $(this._element).trigger(hideEvent), hideEvent.isDefaultPrevented() || this._close());
        }, _proto.dispose = function() {
            clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(ClassName$a_SHOW) && this._element.classList.remove(ClassName$a_SHOW), 
            $(this._element).off(Event$a.CLICK_DISMISS), $.removeData(this._element, "bs.toast"), 
            this._element = null, this._config = null;
        }, _proto._getConfig = function(config) {
            return config = _objectSpread2({}, Default$7, {}, $(this._element).data(), {}, "object" == typeof config && config ? config : {}), 
            Util.typeCheckConfig("toast", config, this.constructor.DefaultType), 
            config;
        }, _proto._setListeners = function() {
            var _this2 = this;
            $(this._element).on(Event$a.CLICK_DISMISS, Selector$a_DATA_DISMISS, function() {
                return _this2.hide();
            });
        }, _proto._close = function() {
            function complete() {
                _this3._element.classList.add(ClassName$a_HIDE), $(_this3._element).trigger(Event$a.HIDDEN);
            }
            var transitionDuration, _this3 = this;
            this._element.classList.remove(ClassName$a_SHOW), this._config.animation ? (transitionDuration = Util.getTransitionDurationFromElement(this._element), 
            $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration)) : complete();
        }, Toast._jQueryInterface = function(config) {
            return this.each(function() {
                var $element = $(this), data = $element.data("bs.toast");
                if (data || (data = new Toast(this, "object" == typeof config && config), 
                $element.data("bs.toast", data)), "string" == typeof config) {
                    if (void 0 === data[config]) throw new TypeError('No method named "' + config + '"');
                    data[config](this);
                }
            });
        }, _createClass(Toast, null, [ {
            key: "VERSION",
            get: function() {
                return "4.4.1";
            }
        }, {
            key: "DefaultType",
            get: function() {
                return DefaultType$7;
            }
        }, {
            key: "Default",
            get: function() {
                return Default$7;
            }
        } ]), Toast;
    }();
    $.fn["toast"] = Toast._jQueryInterface, $.fn["toast"].Constructor = Toast, $.fn["toast"].noConflict = function() {
        return $.fn["toast"] = JQUERY_NO_CONFLICT$a, Toast._jQueryInterface;
    }, exports.Alert = Alert, exports.Button = Button, exports.Carousel = Carousel, 
    exports.Collapse = Collapse, exports.Dropdown = Dropdown, exports.Modal = Modal, 
    exports.Popover = Popover, exports.Scrollspy = ScrollSpy, exports.Tab = Tab, 
    exports.Toast = Toast, exports.Tooltip = Tooltip, exports.Util = Util, Object.defineProperty(exports, "__esModule", {
        value: !0
    });
}), !function(window, undefined) {
    var hasDontEnumBug, hasEnumPrototype, iteratesOwnLast, freeExports = "object" == typeof exports && exports, freeModule = "object" == typeof module && module && module.exports == freeExports && module, freeGlobal = "object" == typeof global && global, arrayRef = [], objectRef = {}, idCounter = 0, indicatorObject = objectRef, largeArraySize = 30, oldDash = (window = freeGlobal.global === freeGlobal ? freeGlobal : window)._, reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g, reFlags = /\w*$/, freeGlobal = RegExp("^" + (objectRef.valueOf + "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$"), reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, reInterpolate = /<%=([\s\S]+?)%>/g, reNoMatch = /($^)/, reUnescapedHtml = /[&<>"']/g, reUnescapedString = /['\n\r\t\u2028\u2029\\]/g, shadowed = [ "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ], templateCounter = 0, ceil = Math.ceil, concat = arrayRef.concat, floor = Math.floor, getPrototypeOf = freeGlobal.test(getPrototypeOf = Object.getPrototypeOf) && getPrototypeOf, hasOwnProperty = objectRef.hasOwnProperty, push = arrayRef.push, toString = objectRef.toString, nativeBind = freeGlobal.test(nativeBind = slice.bind) && nativeBind, objectRef = freeGlobal.test(objectRef = Array.isArray) && objectRef, nativeIsFinite = window.isFinite, nativeIsNaN = window.isNaN, nativeKeys = freeGlobal.test(nativeKeys = Object.keys) && nativeKeys, nativeMax = Math.max, nativeMin = Math.min, nativeRandom = Math.random, argsClass = "[object Arguments]", arrayClass = "[object Array]", boolClass = "[object Boolean]", dateClass = "[object Date]", numberClass = "[object Number]", objectClass = "[object Object]", regexpClass = "[object RegExp]", stringClass = "[object String]", freeGlobal = !!window.attachEvent, isV8 = nativeBind && !/\n|true/.test(nativeBind + freeGlobal), isBindFast = nativeBind && !isV8, isKeysFast = nativeKeys && (freeGlobal || isV8), freeGlobal = (arrayRef.splice.call(freeGlobal = {
        "0": 1,
        "length": 1
    }, 0, 1), freeGlobal[0]), nonEnumArgs = !0, argsAreObjects = (!function() {
        var prop, props = [];
        function ctor() {
            this.x = 1;
        }
        for (prop in ctor.prototype = {
            "valueOf": 1,
            "y": 1
        }, new ctor()) props.push(prop);
        for (prop in arguments) nonEnumArgs = !prop;
        hasDontEnumBug = !/valueOf/.test(props), hasEnumPrototype = ctor.propertyIsEnumerable("prototype"), 
        iteratesOwnLast = "x" != props[0];
    }(1), arguments.constructor == Object), noArgsClass = !isArguments(arguments), noCharByIndex = "x"[0] + Object("x")[0] != "xx";
    try {
        var noNodeClass = toString.call(document) == objectClass && !({
            "toString": 0
        } + "");
    } catch (e) {}
    var cloneableClasses = {
        "[object Function]": !1
    }, ctorByClass = (cloneableClasses[argsClass] = cloneableClasses[arrayClass] = cloneableClasses[boolClass] = cloneableClasses[dateClass] = cloneableClasses[numberClass] = cloneableClasses[objectClass] = cloneableClasses[regexpClass] = cloneableClasses[stringClass] = !0, 
    {}), objectTypes = (ctorByClass[arrayClass] = Array, ctorByClass[boolClass] = Boolean, 
    ctorByClass[dateClass] = Date, ctorByClass[objectClass] = Object, ctorByClass[numberClass] = Number, 
    ctorByClass[regexpClass] = RegExp, ctorByClass[stringClass] = String, {
        "boolean": !1,
        "function": !0,
        "object": !0,
        "number": !1,
        "string": !1,
        "undefined": !1
    }), stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\t": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    };
    function lodash(value) {
        return value && "object" == typeof value && value.__wrapped__ ? value : this instanceof lodash ? void (this.__wrapped__ = value) : new lodash(value);
    }
    lodash.templateSettings = {
        "escape": /<%-([\s\S]+?)%>/g,
        "evaluate": /<%([\s\S]+?)%>/g,
        "interpolate": reInterpolate,
        "variable": "",
        "imports": {
            "_": lodash
        }
    };
    var iteratorTemplate = template("var index, iterable = <%= firstArg %>, result = iterable;\nif (!iterable) return result;\n<%= top %>;\n<% if (arrays) { %>var length = iterable.length; index = -1;\nif (<%= arrays %>) {  <% if (noCharByIndex) { %>\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  <% } %>\n  while (++index < length) {\n    <%= loop %>\n  }\n}\nelse {  <%  } else if (nonEnumArgs) { %>\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      <%= loop %>\n    }\n  } else {  <% } %>  <% if (hasEnumPrototype) { %>\n  var skipProto = typeof iterable == 'function';\n  <% } %>  <% if (isKeysFast && useHas) { %>\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] ? nativeKeys(iterable) : [],\n      length = ownProps.length;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n    <% if (hasEnumPrototype) { %>if (!(skipProto && index == 'prototype')) {\n  <% } %>    <%= loop %>\n    <% if (hasEnumPrototype) { %>}\n<% } %>  }  <% } else { %>\n  for (index in iterable) {<%    if (hasEnumPrototype || useHas) { %>\n    if (<%      if (hasEnumPrototype) { %>!(skipProto && index == 'prototype')<% }      if (hasEnumPrototype && useHas) { %> && <% }      if (useHas) { %>hasOwnProperty.call(iterable, index)<% }    %>) {    <% } %>\n    <%= loop %>;    <% if (hasEnumPrototype || useHas) { %>\n    }<% } %>\n  }  <% } %>  <% if (hasDontEnumBug) { %>\n\n  var ctor = iterable.constructor;\n    <% for (var k = 0; k < 7; k++) { %>\n  index = '<%= shadowed[k] %>';\n  if (<%      if (shadowed[k] == 'constructor') {        %>!(ctor && ctor.prototype === iterable) && <%      } %>hasOwnProperty.call(iterable, index)) {\n    <%= loop %>\n  }    <% } %>  <% } %>  <% if (arrays || nonEnumArgs) { %>\n}<% } %>\n<%= bottom %>;\nreturn result"), defaultsIteratorOptions = {
        "args": "object, source, guard",
        "top": "var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",
        "loop": "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
        "bottom": "  }\n}"
    }, eachIteratorOptions = {
        "args": "collection, callback, thisArg",
        "top": "callback = callback && typeof thisArg == 'undefined' ? callback : createCallback(callback, thisArg)",
        "arrays": "typeof length == 'number'",
        "loop": "if (callback(iterable[index], index, collection) === false) return result"
    }, forOwnIteratorOptions = {
        "top": "if (!objectTypes[typeof iterable]) return result;\n" + eachIteratorOptions.top,
        "arrays": !1
    };
    function cachedContains(array, fromIndex, largeSize) {
        fromIndex = fromIndex || 0;
        var length = array.length, isLarge = (largeSize || largeArraySize) <= length - fromIndex;
        if (isLarge) for (var cache = {}, index = fromIndex - 1; ++index < length; ) {
            var key = array[index] + "";
            (hasOwnProperty.call(cache, key) ? cache[key] : cache[key] = []).push(array[index]);
        }
        return function(value) {
            var key;
            return isLarge ? hasOwnProperty.call(cache, key = value + "") && -1 < indexOf(cache[key], value) : -1 < indexOf(array, value, fromIndex);
        };
    }
    function charAtCallback(value) {
        return value.charCodeAt(0);
    }
    function compareAscending(a, b) {
        var ai = a.index, bi = b.index;
        if ((a = a.criteria) !== (b = b.criteria)) {
            if (b < a || void 0 === a) return 1;
            if (a < b || void 0 === b) return -1;
        }
        return ai < bi ? -1 : 1;
    }
    function createBound(func, thisArg, partialArgs, rightIndicator) {
        var isFunc = isFunction(func), isPartial = !partialArgs, key = thisArg;
        return isPartial && (partialArgs = thisArg), isFunc || (thisArg = func), 
        function bound() {
            var result, args = arguments, thisBinding = isPartial ? this : thisArg;
            return isFunc || (func = thisArg[key]), partialArgs.length && (args = args.length ? (args = slice(args), 
            rightIndicator ? args.concat(partialArgs) : partialArgs.concat(args)) : partialArgs), 
            this instanceof bound ? (noop.prototype = func.prototype, thisBinding = new noop(), 
            noop.prototype = null, isObject(result = func.apply(thisBinding, args)) ? result : thisBinding) : func.apply(thisBinding, args);
        };
    }
    function createCallback(func, thisArg, argCount) {
        var type, props;
        return null == func ? identity : "function" != (type = typeof func) ? "object" != type ? function(object) {
            return object[func];
        } : (props = keys(func), function(object) {
            for (var length = props.length, result = !1; length-- && (result = isEqual(object[props[length]], func[props[length]], indicatorObject)); );
            return result;
        }) : void 0 !== thisArg ? 1 === argCount ? function(value) {
            return func.call(thisArg, value);
        } : 2 === argCount ? function(a, b) {
            return func.call(thisArg, a, b);
        } : 4 === argCount ? function(accumulator, value, index, object) {
            return func.call(thisArg, accumulator, value, index, object);
        } : function(value, index, object) {
            return func.call(thisArg, value, index, object);
        } : func;
    }
    function createIterator() {
        for (var object, data = {
            "hasDontEnumBug": hasDontEnumBug,
            "hasEnumPrototype": hasEnumPrototype,
            "isKeysFast": isKeysFast,
            "nonEnumArgs": nonEnumArgs,
            "noCharByIndex": noCharByIndex,
            "shadowed": shadowed,
            "arrays": "isArray(iterable)",
            "bottom": "",
            "loop": "",
            "top": "",
            "useHas": !0
        }, index = 0; object = arguments[index]; index++) for (var key in object) data[key] = object[key];
        var args = data.args;
        return data.firstArg = /^[^,]+/.exec(args)[0], Function("createCallback, hasOwnProperty, isArguments, isArray, isString, objectTypes, nativeKeys", "return function(" + args + ") {\n" + iteratorTemplate(data) + "\n}")(createCallback, hasOwnProperty, isArguments, isArray, isString, objectTypes, nativeKeys);
    }
    var each = createIterator(eachIteratorOptions);
    function escapeStringChar(match) {
        return "\\" + stringEscapes[match];
    }
    function escapeHtmlChar(match) {
        return htmlEscapes[match];
    }
    function isNode(value) {
        return "function" != typeof value.toString && "string" == typeof (value + "");
    }
    function noop() {}
    function slice(array, start, end) {
        for (var index = -1, length = (end = void 0 === end ? array ? array.length : 0 : end) - (start = start || 0) || 0, result = Array(length < 0 ? 0 : length); ++index < length; ) result[index] = array[start + index];
        return result;
    }
    function unescapeHtmlChar(match) {
        return htmlUnescapes[match];
    }
    function isArguments(value) {
        return toString.call(value) == argsClass;
    }
    noArgsClass && (isArguments = function(value) {
        return !!value && hasOwnProperty.call(value, "callee");
    });
    var forIn = createIterator(eachIteratorOptions, forOwnIteratorOptions, {
        "useHas": !1
    }), forOwn = createIterator(eachIteratorOptions, forOwnIteratorOptions), isArray = objectRef || function(value) {
        return argsAreObjects && value instanceof Array || toString.call(value) == arrayClass;
    }, keys = nativeKeys ? function(object) {
        return isObject(object) ? (hasEnumPrototype && "function" == typeof object || nonEnumArgs && object.length && isArguments(object) ? shimKeys : nativeKeys)(object) : [];
    } : shimKeys;
    function shimIsPlainObject(value) {
        var ctor, result = !1;
        return value && "object" == typeof value && !isArguments(value) && (!isFunction(ctor = value.constructor) && (!noNodeClass || !isNode(value)) || ctor instanceof ctor) ? iteratesOwnLast ? (forIn(value, function(value, key, object) {
            return result = !hasOwnProperty.call(object, key), !1;
        }), !1 === result) : (forIn(value, function(value, key) {
            result = key;
        }), !1 === result || hasOwnProperty.call(value, result)) : result;
    }
    function shimKeys(object) {
        var result = [];
        return forOwn(object, function(value, key) {
            result.push(key);
        }), result;
    }
    var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }, htmlUnescapes = invert(htmlEscapes), assign = createIterator(defaultsIteratorOptions, {
        "top": defaultsIteratorOptions.top.replace(";", ";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = createCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),
        "loop": "result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"
    });
    function clone(value, deep, callback, thisArg, stackA, stackB) {
        var done, result = value, thisArg = ("function" == typeof deep && (thisArg = callback, 
        callback = deep, deep = !1), isObject(result = "function" != typeof callback || (callback = void 0 === thisArg ? callback : createCallback(callback, thisArg, 1), 
        done = void 0 !== (result = callback(result))) ? result : value));
        if (thisArg) {
            var className = toString.call(result);
            if (!cloneableClasses[className] || noNodeClass && isNode(result)) return result;
            var isArr = isArray(result);
        }
        if (!thisArg || !deep) return thisArg && !done ? isArr ? slice(result) : assign({}, result) : result;
        var ctor = ctorByClass[className];
        switch (className) {
          case boolClass:
          case dateClass:
            return done ? result : new ctor(+result);

          case numberClass:
          case stringClass:
            return done ? result : new ctor(result);

          case regexpClass:
            return done ? result : ctor(result.source, reFlags.exec(result));
        }
        stackB = stackB || [];
        for (var length = (stackA = stackA || []).length; length--; ) if (stackA[length] == value) return stackB[length];
        return done || (result = isArr ? ctor(result.length) : {}, isArr && (hasOwnProperty.call(value, "index") && (result.index = value.index), 
        hasOwnProperty.call(value, "input")) && (result.input = value.input)), stackA.push(value), 
        stackB.push(result), (isArr ? forEach : forOwn)(done ? result : value, function(objValue, key) {
            result[key] = clone(objValue, deep, callback, undefined, stackA, stackB);
        }), result;
    }
    var defaults = createIterator(defaultsIteratorOptions);
    function functions(object) {
        var result = [];
        return forIn(object, function(value, key) {
            isFunction(value) && result.push(key);
        }), result.sort();
    }
    function invert(object) {
        for (var index = -1, props = keys(object), length = props.length, result = {}; ++index < length; ) {
            var key = props[index];
            result[object[key]] = key;
        }
        return result;
    }
    function isEqual(a, b, callback, thisArg, stackA, stackB) {
        var whereIndicator = callback === indicatorObject;
        if (callback && !whereIndicator) {
            var result = (callback = void 0 === thisArg ? callback : createCallback(callback, thisArg, 2))(a, b);
            if (void 0 !== result) return !!result;
        }
        if (a === b) return 0 !== a || 1 / a == 1 / b;
        var type = typeof a, otherType = typeof b;
        if (a == a && (!a || "function" != type && "object" != type) && (!b || "function" != otherType && "object" != otherType)) return !1;
        if (null == a || null == b) return a === b;
        type = toString.call(a), otherType = toString.call(b);
        if ((type = type == argsClass ? objectClass : type) != (otherType = otherType == argsClass ? objectClass : otherType)) return !1;
        switch (type) {
          case boolClass:
          case dateClass:
            return +a == +b;

          case numberClass:
            return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;

          case regexpClass:
          case stringClass:
            return a == b + "";
        }
        otherType = type == arrayClass;
        if (!otherType) {
            if (a.__wrapped__ || b.__wrapped__) return isEqual(a.__wrapped__ || a, b.__wrapped__ || b, callback, thisArg, stackA, stackB);
            if (type != objectClass || noNodeClass && (isNode(a) || isNode(b))) return !1;
            var type = !argsAreObjects && isArguments(a) ? Object : a.constructor, ctorB = !argsAreObjects && isArguments(b) ? Object : b.constructor;
            if (type != ctorB && !(isFunction(type) && type instanceof type && isFunction(ctorB) && ctorB instanceof ctorB)) return !1;
        }
        stackB = stackB || [];
        for (var length = (stackA = stackA || []).length; length--; ) if (stackA[length] == a) return stackB[length] == b;
        var size = 0, result = !0;
        if (stackA.push(a), stackB.push(b), otherType) {
            if (length = a.length, size = b.length, (result = size == a.length) || whereIndicator) for (;size--; ) {
                var index = length, value = b[size];
                if (whereIndicator) for (;index-- && !(result = isEqual(a[index], value, callback, thisArg, stackA, stackB)); ); else if (!(result = isEqual(a[size], value, callback, thisArg, stackA, stackB))) break;
            }
        } else forIn(b, function(value, key, b) {
            if (hasOwnProperty.call(b, key)) return size++, result = hasOwnProperty.call(a, key) && isEqual(a[key], value, callback, thisArg, stackA, stackB);
        }), result && !whereIndicator && forIn(a, function(value, key, a) {
            if (hasOwnProperty.call(a, key)) return result = -1 < --size;
        });
        return result;
    }
    function isFunction(value) {
        return "function" == typeof value;
    }
    function isObject(value) {
        return !!value && objectTypes[typeof value];
    }
    function isNumber(value) {
        return "number" == typeof value || toString.call(value) == numberClass;
    }
    isFunction(/x/) && (isFunction = function(value) {
        return value instanceof Function || "[object Function]" == toString.call(value);
    });
    var isPlainObject = getPrototypeOf ? function(value) {
        var valueOf, objProto;
        return !(!value || "object" != typeof value) && ((objProto = "function" == typeof (valueOf = value.valueOf) && (objProto = getPrototypeOf(valueOf)) && getPrototypeOf(objProto)) ? value == objProto || getPrototypeOf(value) == objProto && !isArguments(value) : shimIsPlainObject(value));
    } : shimIsPlainObject;
    function isString(value) {
        return "string" == typeof value || toString.call(value) == stringClass;
    }
    function values(object) {
        for (var index = -1, props = keys(object), length = props.length, result = Array(length); ++index < length; ) result[index] = object[props[index]];
        return result;
    }
    function contains(collection, target, fromIndex) {
        var index = -1, length = collection ? collection.length : 0, result = !1;
        return fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex) || 0, 
        "number" == typeof length ? result = -1 < (isString(collection) ? collection.indexOf(target, fromIndex) : indexOf(collection, target, fromIndex)) : each(collection, function(value) {
            if (++index >= fromIndex) return !(result = value === target);
        }), result;
    }
    function every(collection, callback, thisArg) {
        var result = !0;
        if (callback = createCallback(callback, thisArg), isArray(collection)) for (var index = -1, length = collection.length; ++index < length && (result = !!callback(collection[index], index, collection)); ); else each(collection, function(value, index, collection) {
            return result = !!callback(value, index, collection);
        });
        return result;
    }
    function filter(collection, callback, thisArg) {
        var result = [];
        if (callback = createCallback(callback, thisArg), isArray(collection)) for (var index = -1, length = collection.length; ++index < length; ) {
            var value = collection[index];
            callback(value, index, collection) && result.push(value);
        } else each(collection, function(value, index, collection) {
            callback(value, index, collection) && result.push(value);
        });
        return result;
    }
    function find(collection, callback, thisArg) {
        var result;
        return callback = createCallback(callback, thisArg), forEach(collection, function(value, index, collection) {
            if (callback(value, index, collection)) return result = value, !1;
        }), result;
    }
    function forEach(collection, callback, thisArg) {
        if (callback && void 0 === thisArg && isArray(collection)) for (var index = -1, length = collection.length; ++index < length && !1 !== callback(collection[index], index, collection); ); else each(collection, callback, thisArg);
        return collection;
    }
    function map(collection, callback, thisArg) {
        var index = -1, length = collection ? collection.length : 0, result = Array("number" == typeof length ? length : 0);
        if (callback = createCallback(callback, thisArg), isArray(collection)) for (;++index < length; ) result[index] = callback(collection[index], index, collection); else each(collection, function(value, key, collection) {
            result[++index] = callback(value, key, collection);
        });
        return result;
    }
    function max(collection, callback, thisArg) {
        var computed = -1 / 0, result = computed;
        if (!callback && isArray(collection)) for (var index = -1, length = collection.length; ++index < length; ) {
            var value = collection[index];
            result < value && (result = value);
        } else callback = !callback && isString(collection) ? charAtCallback : createCallback(callback, thisArg), 
        each(collection, function(value, index, collection) {
            index = callback(value, index, collection);
            computed < index && (computed = index, result = value);
        });
        return result;
    }
    var pluck = map;
    function reduce(collection, callback, accumulator, thisArg) {
        var noaccum = arguments.length < 3;
        if (callback = createCallback(callback, thisArg, 4), isArray(collection)) {
            var index = -1, length = collection.length;
            for (noaccum && (accumulator = collection[++index]); ++index < length; ) accumulator = callback(accumulator, collection[index], index, collection);
        } else each(collection, function(value, index, collection) {
            accumulator = noaccum ? (noaccum = !1, value) : callback(accumulator, value, index, collection);
        });
        return accumulator;
    }
    function reduceRight(collection, callback, accumulator, thisArg) {
        var props, iterable = collection, length = collection ? collection.length : 0, noaccum = arguments.length < 3;
        return "number" != typeof length ? (props = keys(collection), length = props.length) : noCharByIndex && isString(collection) && (iterable = collection.split("")), 
        callback = createCallback(callback, thisArg, 4), forEach(collection, function(value, index, collection) {
            index = props ? props[--length] : --length, accumulator = noaccum ? (noaccum = !1, 
            iterable[index]) : callback(accumulator, iterable[index], index, collection);
        }), accumulator;
    }
    function some(collection, callback, thisArg) {
        var result;
        if (callback = createCallback(callback, thisArg), isArray(collection)) for (var index = -1, length = collection.length; ++index < length && !(result = callback(collection[index], index, collection)); ); else each(collection, function(value, index, collection) {
            return !(result = callback(value, index, collection));
        });
        return !!result;
    }
    eachIteratorOptions = filter;
    function first(array, callback, thisArg) {
        if (array) {
            var n = 0, length = array.length;
            if ("number" != typeof callback && null != callback) {
                var index = -1;
                for (callback = createCallback(callback, thisArg); ++index < length && callback(array[index], index, array); ) n++;
            } else if (null == (n = callback) || thisArg) return array[0];
            return slice(array, 0, nativeMin(nativeMax(0, n), length));
        }
    }
    function indexOf(array, value, fromIndex) {
        var index = -1, length = array ? array.length : 0;
        if ("number" == typeof fromIndex) index = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex || 0) - 1; else if (fromIndex) return array[index = sortedIndex(array, value)] === value ? index : -1;
        for (;++index < length; ) if (array[index] === value) return index;
        return -1;
    }
    function rest(array, callback, thisArg) {
        if ("number" != typeof callback && null != callback) {
            var n = 0, index = -1, length = array ? array.length : 0;
            for (callback = createCallback(callback, thisArg); ++index < length && callback(array[index], index, array); ) n++;
        } else n = null == callback || thisArg ? 1 : nativeMax(0, callback);
        return slice(array, n);
    }
    function sortedIndex(array, value, callback, thisArg) {
        var low = 0, high = array ? array.length : low;
        for (value = (callback = callback ? createCallback(callback, thisArg, 1) : identity)(value); low < high; ) {
            var mid = low + high >>> 1;
            callback(array[mid]) < value ? low = 1 + mid : high = mid;
        }
        return low;
    }
    function uniq(array, isSorted, callback, thisArg) {
        var cache, index = -1, length = array ? array.length : 0, result = [], seen = result, isLarge = ("function" == typeof isSorted && (thisArg = callback, 
        callback = isSorted, isSorted = !1), !isSorted && 75 <= length);
        for (isLarge && (cache = {}), callback && (seen = [], callback = createCallback(callback, thisArg)); ++index < length; ) {
            var key, value = array[index], computed = callback ? callback(value, index, array) : value;
            isLarge && (key = hasOwnProperty.call(cache, key = computed + "") ? !(seen = cache[key]) : seen = cache[key] = []), 
            (isSorted ? !index || seen[seen.length - 1] !== computed : key || indexOf(seen, computed) < 0) && ((callback || isLarge) && seen.push(computed), 
            result.push(value));
        }
        return result;
    }
    function bind(func, thisArg) {
        return isBindFast || nativeBind && 2 < arguments.length ? nativeBind.call.apply(nativeBind, arguments) : createBound(func, thisArg, slice(arguments, 2));
    }
    function defer(func) {
        var args = slice(arguments, 1);
        return setTimeout(function() {
            func.apply(undefined, args);
        }, 1);
    }
    function identity(value) {
        return value;
    }
    function mixin(object) {
        forEach(functions(object), function(methodName) {
            var func = lodash[methodName] = object[methodName];
            lodash.prototype[methodName] = function() {
                var args = [ this.__wrapped__ ];
                return push.apply(args, arguments), new lodash(func.apply(lodash, args));
            };
        });
    }
    function template(text, data, options) {
        var isEvaluating, settings = lodash.templateSettings, settings = (text = text || "", 
        options = iteratorTemplate ? defaults({}, options, settings) : settings, 
        iteratorTemplate && defaults({}, options.imports, settings.imports)), importsKeys = iteratorTemplate ? keys(settings) : [ "_" ], settings = iteratorTemplate ? values(settings) : [ lodash ], index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '", interpolate = RegExp((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g"), interpolate = (text.replace(interpolate, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            return interpolateValue = interpolateValue || esTemplateValue, source += text.slice(index, offset).replace(reUnescapedString, escapeStringChar), 
            escapeValue && (source += "' +\n__e(" + escapeValue + ") +\n'"), evaluateValue && (isEvaluating = !0, 
            source += "';\n" + evaluateValue + ";\n__p += '"), interpolateValue && (source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'"), 
            index = offset + match.length, match;
        }), source += "';\n", options.variable), hasVariable = interpolate, hasVariable = (hasVariable || (source = "with (" + (interpolate = "obj") + ") {\n" + source + "\n}\n"), 
        source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;"), 
        source = "function(" + interpolate + ") {\n" + (hasVariable ? "" : interpolate + " || (" + interpolate + " = {});\n") + "var __t, __p = '', __e = _.escape" + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}", 
        "\n/*\n//@ sourceURL=" + (options.sourceURL || "/lodash/template/source[" + templateCounter++ + "]") + "\n*/");
        try {
            var result = Function(importsKeys, "return " + source + hasVariable).apply(undefined, settings);
        } catch (e) {
            throw e.source = source, e;
        }
        return data ? result(data) : (result.source = source, result);
    }
    function wrapperValueOf() {
        return this.__wrapped__;
    }
    isV8 && freeModule && "function" == typeof setImmediate && (defer = bind(setImmediate, window)), 
    lodash.after = function(n, func) {
        return n < 1 ? func() : function() {
            if (--n < 1) return func.apply(this, arguments);
        };
    }, lodash.assign = assign, lodash.at = function(collection) {
        var index = -1, props = concat.apply(arrayRef, slice(arguments, 1)), length = props.length, result = Array(length);
        for (noCharByIndex && isString(collection) && (collection = collection.split("")); ++index < length; ) result[index] = collection[props[index]];
        return result;
    }, lodash.bind = bind, lodash.bindAll = function(object) {
        for (var funcs = concat.apply(arrayRef, arguments), index = 1 < funcs.length ? 0 : (funcs = functions(object), 
        -1), length = funcs.length; ++index < length; ) {
            var key = funcs[index];
            object[key] = bind(object[key], object);
        }
        return object;
    }, lodash.bindKey = function(object, key) {
        return createBound(object, key, slice(arguments, 2));
    }, lodash.compact = function(array) {
        for (var index = -1, length = array ? array.length : 0, result = []; ++index < length; ) {
            var value = array[index];
            value && result.push(value);
        }
        return result;
    }, lodash.compose = function() {
        var funcs = arguments;
        return function() {
            for (var args = arguments, length = funcs.length; length--; ) args = [ funcs[length].apply(this, args) ];
            return args[0];
        };
    }, lodash.countBy = function(collection, callback, thisArg) {
        var result = {};
        return callback = createCallback(callback, thisArg), forEach(collection, function(value, key, collection) {
            key = callback(value, key, collection) + "", hasOwnProperty.call(result, key) ? result[key]++ : result[key] = 1;
        }), result;
    }, lodash.debounce = function(func, wait, immediate) {
        var args, result, thisArg, timeoutId;
        function delayed() {
            timeoutId = null, immediate || (result = func.apply(thisArg, args));
        }
        return function() {
            var isImmediate = immediate && !timeoutId;
            return args = arguments, thisArg = this, clearTimeout(timeoutId), timeoutId = setTimeout(delayed, wait), 
            result = isImmediate ? func.apply(thisArg, args) : result;
        };
    }, lodash.defaults = defaults, lodash.defer = defer, lodash.delay = function(func, wait) {
        var args = slice(arguments, 2);
        return setTimeout(function() {
            func.apply(undefined, args);
        }, wait);
    }, lodash.difference = function(array) {
        for (var index = -1, length = array ? array.length : 0, contains = cachedContains(concat.apply(arrayRef, arguments), length), result = []; ++index < length; ) {
            var value = array[index];
            contains(value) || result.push(value);
        }
        return result;
    }, lodash.filter = filter, lodash.flatten = function flatten(array, shallow) {
        for (var index = -1, length = array ? array.length : 0, result = []; ++index < length; ) {
            var value = array[index];
            isArray(value) ? push.apply(result, shallow ? value : flatten(value)) : result.push(value);
        }
        return result;
    }, lodash.forEach = forEach, lodash.forIn = forIn, lodash.forOwn = forOwn, lodash.functions = functions, 
    lodash.groupBy = function(collection, callback, thisArg) {
        var result = {};
        return callback = createCallback(callback, thisArg), forEach(collection, function(value, key, collection) {
            key = callback(value, key, collection) + "", (hasOwnProperty.call(result, key) ? result[key] : result[key] = []).push(value);
        }), result;
    }, lodash.initial = function(array, callback, thisArg) {
        if (!array) return [];
        var n = 0, length = array.length;
        if ("number" != typeof callback && null != callback) {
            var index = length;
            for (callback = createCallback(callback, thisArg); index-- && callback(array[index], index, array); ) n++;
        } else n = null == callback || thisArg ? 1 : callback || n;
        return slice(array, 0, nativeMin(nativeMax(0, length - n), length));
    }, lodash.intersection = function(array) {
        var args = arguments, argsLength = args.length, cache = {
            "0": {}
        }, index = -1, length = array ? array.length : 0, isLarge = 100 <= length, result = [], seen = result;
        outer: for (;++index < length; ) {
            var key, inited, value = array[index];
            if ((inited = isLarge ? hasOwnProperty.call(cache[0], key = value + "") ? !(seen = cache[0][key]) : seen = cache[0][key] = [] : inited) || indexOf(seen, value) < 0) {
                isLarge && seen.push(value);
                for (var argsIndex = argsLength; --argsIndex; ) if (!(cache[argsIndex] || (cache[argsIndex] = cachedContains(args[argsIndex], 0, 100)))(value)) continue outer;
                result.push(value);
            }
        }
        return result;
    }, lodash.invert = invert, lodash.invoke = function(collection, methodName) {
        var args = slice(arguments, 2), index = -1, isFunc = "function" == typeof methodName, length = collection ? collection.length : 0, result = Array("number" == typeof length ? length : 0);
        return forEach(collection, function(value) {
            result[++index] = (isFunc ? methodName : value[methodName]).apply(value, args);
        }), result;
    }, lodash.keys = keys, lodash.map = map, lodash.max = max, lodash.memoize = function(func, resolver) {
        var cache = {};
        return function() {
            var key = (resolver ? resolver.apply(this, arguments) : arguments[0]) + "";
            return hasOwnProperty.call(cache, key) ? cache[key] : cache[key] = func.apply(this, arguments);
        };
    }, lodash.merge = function merge(object, source, deepIndicator) {
        var callback, stackA, stackB, args = arguments, index = 0, length = 2;
        if (isObject(object)) for (deepIndicator === indicatorObject ? (callback = args[3], 
        stackA = args[4], stackB = args[5]) : (stackA = [], stackB = [], 3 < (length = "number" != typeof deepIndicator ? args.length : length) && "function" == typeof args[length - 2] ? callback = createCallback(args[--length - 1], args[length--], 2) : 2 < length && "function" == typeof args[length - 1] && (callback = args[--length])); ++index < length; ) (isArray(args[index]) ? forEach : forOwn)(args[index], function(source, key) {
            var found, isArr, result = source, value = object[key];
            if (source && ((isArr = isArray(source)) || isPlainObject(source))) {
                for (var stackLength = stackA.length; stackLength--; ) if (found = stackA[stackLength] == source) {
                    value = stackB[stackLength];
                    break;
                }
                found || (value = isArr ? isArray(value) ? value : [] : isPlainObject(value) ? value : {}, 
                callback && void 0 !== (result = callback(value, source)) && (value = result), 
                stackA.push(source), stackB.push(value), callback) || (value = merge(value, source, indicatorObject, callback, stackA, stackB));
            } else void 0 !== (result = callback && void 0 === (result = callback(value, source)) ? source : result) && (value = result);
            object[key] = value;
        });
        return object;
    }, lodash.min = function(collection, callback, thisArg) {
        var computed = 1 / 0, result = computed;
        if (!callback && isArray(collection)) for (var index = -1, length = collection.length; ++index < length; ) {
            var value = collection[index];
            value < result && (result = value);
        } else callback = !callback && isString(collection) ? charAtCallback : createCallback(callback, thisArg), 
        each(collection, function(value, index, collection) {
            index = callback(value, index, collection);
            index < computed && (computed = index, result = value);
        });
        return result;
    }, lodash.object = function(keys, values) {
        for (var index = -1, length = keys ? keys.length : 0, result = {}; ++index < length; ) {
            var key = keys[index];
            values ? result[key] = values[index] : result[key[0]] = key[1];
        }
        return result;
    }, lodash.omit = function(object, callback, thisArg) {
        var props, isFunc = "function" == typeof callback, result = {};
        return isFunc ? callback = createCallback(callback, thisArg) : props = concat.apply(arrayRef, arguments), 
        forIn(object, function(value, key, object) {
            (isFunc ? !callback(value, key, object) : indexOf(props, key, 1) < 0) && (result[key] = value);
        }), result;
    }, lodash.once = function(func) {
        var ran, result;
        return function() {
            return ran || (ran = !0, result = func.apply(this, arguments), func = null), 
            result;
        };
    }, lodash.pairs = function(object) {
        for (var index = -1, props = keys(object), length = props.length, result = Array(length); ++index < length; ) {
            var key = props[index];
            result[index] = [ key, object[key] ];
        }
        return result;
    }, lodash.partial = function(func) {
        return createBound(func, slice(arguments, 1));
    }, lodash.partialRight = function(func) {
        return createBound(func, slice(arguments, 1), null, indicatorObject);
    }, lodash.pick = function(object, callback, thisArg) {
        var result = {};
        if ("function" != typeof callback) for (var index = 0, props = concat.apply(arrayRef, arguments), length = isObject(object) ? props.length : 0; ++index < length; ) {
            var key = props[index];
            key in object && (result[key] = object[key]);
        } else callback = createCallback(callback, thisArg), forIn(object, function(value, key, object) {
            callback(value, key, object) && (result[key] = value);
        });
        return result;
    }, lodash.pluck = pluck, lodash.range = function(start, end, step) {
        start = +start || 0, null == end && (end = start, start = 0);
        for (var index = -1, length = nativeMax(0, ceil((end - start) / (step = +step || 1))), result = Array(length); ++index < length; ) result[index] = start, 
        start += step;
        return result;
    }, lodash.reject = function(collection, callback, thisArg) {
        return callback = createCallback(callback, thisArg), filter(collection, function(value, index, collection) {
            return !callback(value, index, collection);
        });
    }, lodash.rest = rest, lodash.shuffle = function(collection) {
        var index = -1, length = collection ? collection.length : 0, result = Array("number" == typeof length ? length : 0);
        return forEach(collection, function(value) {
            var rand = floor(nativeRandom() * (++index + 1));
            result[index] = result[rand], result[rand] = value;
        }), result;
    }, lodash.sortBy = function(collection, callback, thisArg) {
        var index = -1, length = collection ? collection.length : 0, result = Array("number" == typeof length ? length : 0);
        for (callback = createCallback(callback, thisArg), forEach(collection, function(value, key, collection) {
            result[++index] = {
                "criteria": callback(value, key, collection),
                "index": index,
                "value": value
            };
        }), length = result.length, result.sort(compareAscending); length--; ) result[length] = result[length].value;
        return result;
    }, lodash.tap = function(value, interceptor) {
        return interceptor(value), value;
    }, lodash.throttle = function(func, wait) {
        var args, result, thisArg, timeoutId, lastCalled = 0;
        function trailingCall() {
            lastCalled = new Date(), timeoutId = null, result = func.apply(thisArg, args);
        }
        return function() {
            var now = new Date(), remaining = wait - (now - lastCalled);
            return args = arguments, thisArg = this, remaining <= 0 ? (clearTimeout(timeoutId), 
            timeoutId = null, lastCalled = now, result = func.apply(thisArg, args)) : timeoutId = timeoutId || setTimeout(trailingCall, remaining), 
            result;
        };
    }, lodash.times = function(n, callback, thisArg) {
        n = +n || 0;
        for (var index = -1, result = Array(n); ++index < n; ) result[index] = callback.call(thisArg, index);
        return result;
    }, lodash.toArray = function(collection) {
        return collection && "number" == typeof collection.length ? noCharByIndex && isString(collection) ? collection.split("") : slice(collection) : values(collection);
    }, lodash.union = function() {
        return uniq(concat.apply(arrayRef, arguments));
    }, lodash.uniq = uniq, lodash.values = values, lodash.where = eachIteratorOptions, 
    lodash.without = function(array) {
        for (var index = -1, length = array ? array.length : 0, contains = cachedContains(arguments, 1), result = []; ++index < length; ) {
            var value = array[index];
            contains(value) || result.push(value);
        }
        return result;
    }, lodash.wrap = function(value, wrapper) {
        return function() {
            var args = [ value ];
            return push.apply(args, arguments), wrapper.apply(this, args);
        };
    }, lodash.zip = function(array) {
        for (var index = -1, length = array ? max(pluck(arguments, "length")) : 0, result = Array(length); ++index < length; ) result[index] = pluck(arguments, index);
        return result;
    }, lodash.collect = map, lodash.drop = rest, lodash.each = forEach, lodash.extend = assign, 
    lodash.methods = functions, lodash.select = filter, lodash.tail = rest, lodash.unique = uniq, 
    mixin(lodash), lodash.clone = clone, lodash.cloneDeep = function(value, callback, thisArg) {
        return clone(value, !0, callback, thisArg);
    }, lodash.contains = contains, lodash.escape = function(string) {
        return null == string ? "" : (string + "").replace(reUnescapedHtml, escapeHtmlChar);
    }, lodash.every = every, lodash.find = find, lodash.has = function(object, property) {
        return !!object && hasOwnProperty.call(object, property);
    }, lodash.identity = identity, lodash.indexOf = indexOf, lodash.isArguments = isArguments, 
    lodash.isArray = isArray, lodash.isBoolean = function(value) {
        return !0 === value || !1 === value || toString.call(value) == boolClass;
    }, lodash.isDate = function(value) {
        return value instanceof Date || toString.call(value) == dateClass;
    }, lodash.isElement = function(value) {
        return !!value && 1 === value.nodeType;
    }, lodash.isEmpty = function(value) {
        var result = !0;
        if (value) {
            var className = toString.call(value), length = value.length;
            if (className == arrayClass || className == stringClass || className == argsClass || noArgsClass && isArguments(value) || className == objectClass && "number" == typeof length && isFunction(value.splice)) return !length;
            forOwn(value, function() {
                return result = !1;
            });
        }
        return result;
    }, lodash.isEqual = isEqual, lodash.isFinite = function(value) {
        return nativeIsFinite(value) && !nativeIsNaN(parseFloat(value));
    }, lodash.isFunction = isFunction, lodash.isNaN = function(value) {
        return isNumber(value) && value != +value;
    }, lodash.isNull = function(value) {
        return null === value;
    }, lodash.isNumber = isNumber, lodash.isObject = isObject, lodash.isPlainObject = isPlainObject, 
    lodash.isRegExp = function(value) {
        return value instanceof RegExp || toString.call(value) == regexpClass;
    }, lodash.isString = isString, lodash.isUndefined = function(value) {
        return void 0 === value;
    }, lodash.lastIndexOf = function(array, value, fromIndex) {
        var index = array ? array.length : 0;
        for ("number" == typeof fromIndex && (index = (fromIndex < 0 ? nativeMax(0, index + fromIndex) : nativeMin(fromIndex, index - 1)) + 1); index--; ) if (array[index] === value) return index;
        return -1;
    }, lodash.mixin = mixin, lodash.noConflict = function() {
        return window._ = oldDash, this;
    }, lodash.random = function(min, max) {
        return null == min && null == max && (max = 1), min = +min || 0, null == max && (max = min, 
        min = 0), min + floor(nativeRandom() * ((+max || 0) - min + 1));
    }, lodash.reduce = reduce, lodash.reduceRight = reduceRight, lodash.result = function(object, property) {
        var value = object ? object[property] : undefined;
        return isFunction(value) ? object[property]() : value;
    }, lodash.size = function(collection) {
        var length = collection ? collection.length : 0;
        return "number" == typeof length ? length : keys(collection).length;
    }, lodash.some = some, lodash.sortedIndex = sortedIndex, lodash.template = template, 
    lodash.unescape = function(string) {
        return null == string ? "" : (string + "").replace(reEscapedHtml, unescapeHtmlChar);
    }, lodash.uniqueId = function(prefix) {
        return (null == prefix ? "" : prefix + "") + ++idCounter;
    }, lodash.all = every, lodash.any = some, lodash.detect = find, lodash.foldl = reduce, 
    lodash.foldr = reduceRight, lodash.include = contains, lodash.inject = reduce, 
    forOwn(lodash, function(func, methodName) {
        lodash.prototype[methodName] || (lodash.prototype[methodName] = function() {
            var args = [ this.__wrapped__ ];
            return push.apply(args, arguments), func.apply(lodash, args);
        });
    }), lodash.first = first, lodash.last = function(array, callback, thisArg) {
        if (array) {
            var n = 0, length = array.length;
            if ("number" != typeof callback && null != callback) {
                var index = length;
                for (callback = createCallback(callback, thisArg); index-- && callback(array[index], index, array); ) n++;
            } else if (null == (n = callback) || thisArg) return array[length - 1];
            return slice(array, nativeMax(0, length - n));
        }
    }, lodash.take = first, lodash.head = first, forOwn(lodash, function(func, methodName) {
        lodash.prototype[methodName] || (lodash.prototype[methodName] = function(callback, thisArg) {
            var result = func(this.__wrapped__, callback, thisArg);
            return null == callback || thisArg && "function" != typeof callback ? result : new lodash(result);
        });
    }), lodash.VERSION = "1.0.1", lodash.prototype.toString = function() {
        return this.__wrapped__ + "";
    }, lodash.prototype.value = wrapperValueOf, lodash.prototype.valueOf = wrapperValueOf, 
    each([ "join", "pop", "shift" ], function(methodName) {
        var func = arrayRef[methodName];
        lodash.prototype[methodName] = function() {
            return func.apply(this.__wrapped__, arguments);
        };
    }), each([ "push", "reverse", "sort", "unshift" ], function(methodName) {
        var func = arrayRef[methodName];
        lodash.prototype[methodName] = function() {
            return func.apply(this.__wrapped__, arguments), this;
        };
    }), each([ "concat", "slice", "splice" ], function(methodName) {
        var func = arrayRef[methodName];
        lodash.prototype[methodName] = function() {
            return new lodash(func.apply(this.__wrapped__, arguments));
        };
    }), freeGlobal && each([ "pop", "shift", "splice" ], function(methodName) {
        var func = arrayRef[methodName], isSplice = "splice" == methodName;
        lodash.prototype[methodName] = function() {
            var value = this.__wrapped__, result = func.apply(value, arguments);
            return 0 === value.length && delete value[0], isSplice ? new lodash(result) : result;
        };
    }), lodash._each = each, lodash._iteratorTemplate = iteratorTemplate, "function" == typeof define && "object" == typeof define.amd && define.amd ? (window._ = lodash, 
    define(function() {
        return lodash;
    })) : freeExports ? freeModule ? (freeModule.exports = lodash)._ = lodash : freeExports._ = lodash : window._ = lodash;
}(this), !function(factory) {
    "function" == typeof define && define.amd ? define([ "jquery" ], factory) : factory(window.jQuery || window.Zepto);
}(function($) {
    "use strict";
    function Mask(el, mask, options) {
        var old_value, jMask = this, p = (el = $(el), mask = "function" == typeof mask ? mask(el.val(), void 0, el, options) : mask, 
        jMask.init = function() {
            options = options || {}, jMask.byPassKeys = [ 9, 16, 17, 18, 36, 37, 38, 39, 40, 91 ], 
            jMask.translation = {
                "0": {
                    pattern: /\d/
                },
                "9": {
                    pattern: /\d/,
                    optional: !0
                },
                "#": {
                    pattern: /\d/,
                    recursive: !0
                },
                "A": {
                    pattern: /[a-zA-Z0-9]/
                },
                "S": {
                    pattern: /[a-zA-Z]/
                }
            }, jMask.translation = $.extend({}, jMask.translation, options.translation), 
            jMask = $.extend(!0, {}, jMask, options), el.each(function() {
                !1 !== options.maxlength && el.attr("maxlength", mask.length), el.attr("autocomplete", "off"), 
                p.destroyEvents(), p.events();
                var caret = p.getCaret(), maskedCharacterCountBefore = p.getMaskCharactersBeforeCount(caret, !0);
                p.val(p.getMasked()), p.setCaret(caret + maskedCharacterCountBefore);
            });
        }, {
            getCaret: function() {
                var pos = 0, ctrl = el.get(0), dSel = document.selection, cSelStart = ctrl.selectionStart;
                return el.is(":focus") && (dSel && !~navigator.appVersion.indexOf("MSIE 10") ? (ctrl.focus(), 
                (ctrl = dSel.createRange()).moveStart("character", el.is("input") ? -el.val().length : -el.text().length), 
                pos = ctrl.text.length) : !cSelStart && "0" !== cSelStart || (pos = cSelStart)), 
                pos;
            },
            setCaret: function(pos) {
                var ctrl;
                el.is(":focus") && ((ctrl = el.get(0)).setSelectionRange ? (ctrl.focus(), 
                ctrl.setSelectionRange(pos, pos)) : ctrl.createTextRange && ((ctrl = ctrl.createTextRange()).collapse(!0), 
                ctrl.moveEnd("character", pos), ctrl.moveStart("character", pos), 
                ctrl.select()));
            },
            events: function() {
                el.on("keydown.mask", function() {
                    old_value = p.val();
                }), el.on("keyup.mask", p.behaviour), el.on("paste.mask drop.mask", function() {
                    setTimeout(function() {
                        el.keydown().keyup();
                    }, 100);
                }), el.on("change.mask", function() {
                    el.data("changeCalled", !0);
                }), el.on("blur.mask", function(e) {
                    e = $(e.target);
                    e.prop("defaultValue") != e.val() && (e.prop("defaultValue", e.val()), 
                    e.data("changeCalled") || e.trigger("change")), e.data("changeCalled", !1);
                });
            },
            destroyEvents: function() {
                el.off("keydown.mask keyup.mask paste.mask drop.mask change.mask blur.mask").removeData("changeCalled");
            },
            val: function(v) {
                var isInput = el.is("input");
                return 0 < arguments.length ? isInput ? el.val(v) : el.text(v) : isInput ? el.val() : el.text();
            },
            getMaskCharactersBeforeCount: function(index, onCleanVal) {
                for (var count = 0, i = 0, maskL = mask.length; i < maskL && i < index; i++) jMask.translation[mask.charAt(i)] || (count++, 
                index = onCleanVal ? index + 1 : index);
                return count;
            },
            determineCaretPos: function(originalCaretPos, oldLength, newLength, maskDif) {
                return jMask.translation[mask.charAt(Math.min(originalCaretPos - 1, mask.length - 1))] ? Math.min(originalCaretPos + newLength - oldLength - maskDif, newLength) : p.determineCaretPos(originalCaretPos + 1, oldLength, newLength, maskDif);
            },
            behaviour: function(e) {
                var caretPos, currVal, currValL, changeCaret, newVal, newValL, maskDif, keyCode = (e = e || window.event).keyCode || e.which;
                if (-1 === $.inArray(keyCode, jMask.byPassKeys)) return changeCaret = (caretPos = p.getCaret()) < (currValL = (currVal = p.val()).length), 
                newValL = (newVal = p.getMasked()).length, maskDif = p.getMaskCharactersBeforeCount(newValL - 1) - p.getMaskCharactersBeforeCount(currValL - 1), 
                newVal !== currVal && p.val(newVal), !changeCaret || 65 === keyCode && e.ctrlKey || (8 !== keyCode && 46 !== keyCode && (caretPos = p.determineCaretPos(caretPos, currValL, newValL, maskDif)), 
                p.setCaret(caretPos)), p.callbacks(e);
            },
            getMasked: function(skipMaskChars) {
                for (var lastMaskChar, buf = [], value = p.val(), m = 0, maskLen = mask.length, v = 0, valLen = value.length, offset = 1, addMethod = "push", resetPos = -1, check = options.reverse ? (addMethod = "unshift", 
                offset = -1, lastMaskChar = 0, m = maskLen - 1, v = valLen - 1, 
                function() {
                    return -1 < m && -1 < v;
                }) : (lastMaskChar = maskLen - 1, function() {
                    return m < maskLen && v < valLen;
                }); check(); ) {
                    var maskDigit = mask.charAt(m), valDigit = value.charAt(v), translation = jMask.translation[maskDigit];
                    translation ? (valDigit.match(translation.pattern) ? (buf[addMethod](valDigit), 
                    translation.recursive && (-1 === resetPos ? resetPos = m : m === lastMaskChar && (m = resetPos - offset), 
                    lastMaskChar === resetPos) && (m -= offset), m += offset) : translation.optional && (m += offset, 
                    v -= offset), v += offset) : (skipMaskChars || buf[addMethod](maskDigit), 
                    valDigit === maskDigit && (v += offset), m += offset);
                }
                var lastMaskCharDigit = mask.charAt(lastMaskChar);
                return maskLen !== valLen + 1 || jMask.translation[lastMaskCharDigit] || buf.push(lastMaskCharDigit), 
                buf.join("");
            },
            callbacks: function(e) {
                var val = p.val(), changed = p.val() !== old_value;
                !0 == changed && "function" == typeof options.onChange && options.onChange(val, e, el, options), 
                !0 == changed && "function" == typeof options.onKeyPress && options.onKeyPress(val, e, el, options), 
                "function" == typeof options.onComplete && val.length === mask.length && options.onComplete(val, e, el, options);
            }
        });
        jMask.remove = function() {
            var caret = p.getCaret(), maskedCharacterCountBefore = p.getMaskCharactersBeforeCount(caret);
            p.destroyEvents(), p.val(jMask.getCleanVal()).removeAttr("maxlength"), 
            p.setCaret(caret - maskedCharacterCountBefore);
        }, jMask.getCleanVal = function() {
            return p.getMasked(!0);
        }, jMask.init();
    }
    $.fn.mask = function(mask, options) {
        return this.unmask(), this.each(function() {
            $(this).data("mask", new Mask(this, mask, options));
        });
    }, $.fn.unmask = function() {
        return this.each(function() {
            try {
                $(this).data("mask").remove();
            } catch (e) {}
        });
    }, $.fn.cleanVal = function() {
        return $(this).data("mask").getCleanVal();
    }, $("*[data-mask]").each(function() {
        var input = $(this), options = {};
        "true" === input.attr("data-mask-reverse") && (options.reverse = !0), "false" === input.attr("data-mask-maxlength") && (options.maxlength = !1), 
        input.mask(input.attr("data-mask"), options);
    });
});

var CryptoJS = CryptoJS || function(s) {
    function n() {}
    var m = {}, l = m.lib = {}, r = l.Base = {
        extend: function(b) {
            n.prototype = this;
            var h = new n();
            return b && h.mixIn(b), h.hasOwnProperty("init") || (h.init = function() {
                h.$super.init.apply(this, arguments);
            }), (h.init.prototype = h).$super = this, h;
        },
        create: function() {
            var b = this.extend();
            return b.init.apply(b, arguments), b;
        },
        init: function() {},
        mixIn: function(b) {
            for (var h in b) b.hasOwnProperty(h) && (this[h] = b[h]);
            b.hasOwnProperty("toString") && (this.toString = b.toString);
        },
        clone: function() {
            return this.init.prototype.extend(this);
        }
    }, q = l.WordArray = r.extend({
        init: function(b, h) {
            b = this.words = b || [], this.sigBytes = null != h ? h : 4 * b.length;
        },
        toString: function(b) {
            return (b || t).stringify(this);
        },
        concat: function(b) {
            var h = this.words, a = b.words, j = this.sigBytes;
            if (b = b.sigBytes, this.clamp(), j % 4) for (var g = 0; g < b; g++) h[j + g >>> 2] |= (a[g >>> 2] >>> 24 - g % 4 * 8 & 255) << 24 - (j + g) % 4 * 8; else if (65535 < a.length) for (g = 0; g < b; g += 4) h[j + g >>> 2] = a[g >>> 2]; else h.push.apply(h, a);
            return this.sigBytes += b, this;
        },
        clamp: function() {
            var b = this.words, h = this.sigBytes;
            b[h >>> 2] &= 4294967295 << 32 - h % 4 * 8, b.length = s.ceil(h / 4);
        },
        clone: function() {
            var b = r.clone.call(this);
            return b.words = this.words.slice(0), b;
        },
        random: function(b) {
            for (var h = [], a = 0; a < b; a += 4) h.push(4294967296 * s.random() | 0);
            return new q.init(h, b);
        }
    }), v = m.enc = {}, t = v.Hex = {
        stringify: function(b) {
            var a = b.words;
            b = b.sigBytes;
            for (var g = [], j = 0; j < b; j++) {
                var k = a[j >>> 2] >>> 24 - j % 4 * 8 & 255;
                g.push((k >>> 4).toString(16)), g.push((15 & k).toString(16));
            }
            return g.join("");
        },
        parse: function(b) {
            for (var a = b.length, g = [], j = 0; j < a; j += 2) g[j >>> 3] |= parseInt(b.substr(j, 2), 16) << 24 - j % 8 * 4;
            return new q.init(g, a / 2);
        }
    }, a = v.Latin1 = {
        stringify: function(b) {
            var a = b.words;
            b = b.sigBytes;
            for (var g = [], j = 0; j < b; j++) g.push(String.fromCharCode(a[j >>> 2] >>> 24 - j % 4 * 8 & 255));
            return g.join("");
        },
        parse: function(b) {
            for (var a = b.length, g = [], j = 0; j < a; j++) g[j >>> 2] |= (255 & b.charCodeAt(j)) << 24 - j % 4 * 8;
            return new q.init(g, a);
        }
    }, u = v.Utf8 = {
        stringify: function(b) {
            try {
                return decodeURIComponent(escape(a.stringify(b)));
            } catch (g) {
                throw Error("Malformed UTF-8 data");
            }
        },
        parse: function(b) {
            return a.parse(unescape(encodeURIComponent(b)));
        }
    }, g = l.BufferedBlockAlgorithm = r.extend({
        reset: function() {
            this._data = new q.init(), this._nDataBytes = 0;
        },
        _append: function(b) {
            "string" == typeof b && (b = u.parse(b)), this._data.concat(b), this._nDataBytes += b.sigBytes;
        },
        _process: function(b) {
            var a = this._data, g = a.words, j = a.sigBytes, k = this.blockSize, m = j / (4 * k), m = b ? s.ceil(m) : s.max((0 | m) - this._minBufferSize, 0), j = s.min(4 * (b = m * k), j);
            if (b) {
                for (var l = 0; l < b; l += k) this._doProcessBlock(g, l);
                l = g.splice(0, b), a.sigBytes -= j;
            }
            return new q.init(l, j);
        },
        clone: function() {
            var b = r.clone.call(this);
            return b._data = this._data.clone(), b;
        },
        _minBufferSize: 0
    }), k = (l.Hasher = g.extend({
        cfg: r.extend(),
        init: function(b) {
            this.cfg = this.cfg.extend(b), this.reset();
        },
        reset: function() {
            g.reset.call(this), this._doReset();
        },
        update: function(b) {
            return this._append(b), this._process(), this;
        },
        finalize: function(b) {
            return b && this._append(b), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function(b) {
            return function(a, g) {
                return new b.init(g).finalize(a);
            };
        },
        _createHmacHelper: function(b) {
            return function(a, g) {
                return new k.HMAC.init(b, g).finalize(a);
            };
        }
    }), m.algo = {});
    return m;
}(Math);

!function(s) {
    function p(a, k, b, h, l, j, m) {
        return ((a = a + (k & b | ~k & h) + l + m) << j | a >>> 32 - j) + k;
    }
    function m(a, k, b, h, l, j, m) {
        return ((a = a + (k & h | b & ~h) + l + m) << j | a >>> 32 - j) + k;
    }
    function l(a, k, b, h, l, j, m) {
        return ((a = a + (k ^ b ^ h) + l + m) << j | a >>> 32 - j) + k;
    }
    function n(a, k, b, h, l, j, m) {
        return ((a = a + (b ^ (k | ~h)) + l + m) << j | a >>> 32 - j) + k;
    }
    for (var r = CryptoJS, v = (q = r.lib).WordArray, t = q.Hasher, q = r.algo, a = [], u = 0; u < 64; u++) a[u] = 4294967296 * s.abs(s.sin(u + 1)) | 0;
    q = q.MD5 = t.extend({
        _doReset: function() {
            this._hash = new v.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
        },
        _doProcessBlock: function(g, k) {
            for (var b = 0; b < 16; b++) {
                var w = g[h = k + b];
                g[h] = 16711935 & (w << 8 | w >>> 24) | 4278255360 & (w << 24 | w >>> 8);
            }
            var b = this._hash.words, h = g[k + 0], w = g[k + 1], j = g[k + 2], q = g[k + 3], r = g[k + 4], s = g[k + 5], t = g[k + 6], u = g[k + 7], v = g[k + 8], x = g[k + 9], y = g[k + 10], z = g[k + 11], A = g[k + 12], B = g[k + 13], C = g[k + 14], D = g[k + 15], c = p(b[0], d = b[1], e = b[2], f = b[3], h, 7, a[0]), f = p(f, c, d, e, w, 12, a[1]), e = p(e, f, c, d, j, 17, a[2]), d = p(d, e, f, c, q, 22, a[3]), c = p(c, d, e, f, r, 7, a[4]), f = p(f, c, d, e, s, 12, a[5]), e = p(e, f, c, d, t, 17, a[6]), d = p(d, e, f, c, u, 22, a[7]), c = p(c, d, e, f, v, 7, a[8]), f = p(f, c, d, e, x, 12, a[9]), e = p(e, f, c, d, y, 17, a[10]), d = p(d, e, f, c, z, 22, a[11]), c = p(c, d, e, f, A, 7, a[12]), f = p(f, c, d, e, B, 12, a[13]), e = p(e, f, c, d, C, 17, a[14]), c = m(c, d = p(d, e, f, c, D, 22, a[15]), e, f, w, 5, a[16]), f = m(f, c, d, e, t, 9, a[17]), e = m(e, f, c, d, z, 14, a[18]), d = m(d, e, f, c, h, 20, a[19]), c = m(c, d, e, f, s, 5, a[20]), f = m(f, c, d, e, y, 9, a[21]), e = m(e, f, c, d, D, 14, a[22]), d = m(d, e, f, c, r, 20, a[23]), c = m(c, d, e, f, x, 5, a[24]), f = m(f, c, d, e, C, 9, a[25]), e = m(e, f, c, d, q, 14, a[26]), d = m(d, e, f, c, v, 20, a[27]), c = m(c, d, e, f, B, 5, a[28]), f = m(f, c, d, e, j, 9, a[29]), e = m(e, f, c, d, u, 14, a[30]), c = l(c, d = m(d, e, f, c, A, 20, a[31]), e, f, s, 4, a[32]), f = l(f, c, d, e, v, 11, a[33]), e = l(e, f, c, d, z, 16, a[34]), d = l(d, e, f, c, C, 23, a[35]), c = l(c, d, e, f, w, 4, a[36]), f = l(f, c, d, e, r, 11, a[37]), e = l(e, f, c, d, u, 16, a[38]), d = l(d, e, f, c, y, 23, a[39]), c = l(c, d, e, f, B, 4, a[40]), f = l(f, c, d, e, h, 11, a[41]), e = l(e, f, c, d, q, 16, a[42]), d = l(d, e, f, c, t, 23, a[43]), c = l(c, d, e, f, x, 4, a[44]), f = l(f, c, d, e, A, 11, a[45]), e = l(e, f, c, d, D, 16, a[46]), c = n(c, d = l(d, e, f, c, j, 23, a[47]), e, f, h, 6, a[48]), f = n(f, c, d, e, u, 10, a[49]), e = n(e, f, c, d, C, 15, a[50]), d = n(d, e, f, c, s, 21, a[51]), c = n(c, d, e, f, A, 6, a[52]), f = n(f, c, d, e, q, 10, a[53]), e = n(e, f, c, d, y, 15, a[54]), d = n(d, e, f, c, w, 21, a[55]), c = n(c, d, e, f, v, 6, a[56]), f = n(f, c, d, e, D, 10, a[57]), e = n(e, f, c, d, t, 15, a[58]), d = n(d, e, f, c, B, 21, a[59]), c = n(c, d, e, f, r, 6, a[60]), f = n(f, c, d, e, z, 10, a[61]), e = n(e, f, c, d, j, 15, a[62]), d = n(d, e, f, c, x, 21, a[63]);
            b[0] = b[0] + c | 0, b[1] = b[1] + d | 0, b[2] = b[2] + e | 0, b[3] = b[3] + f | 0;
        },
        _doFinalize: function() {
            var a = this._data, k = a.words, b = 8 * this._nDataBytes, h = 8 * a.sigBytes, l = (k[h >>> 5] |= 128 << 24 - h % 32, 
            s.floor(b / 4294967296));
            for (k[15 + (64 + h >>> 9 << 4)] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8), 
            k[14 + (64 + h >>> 9 << 4)] = 16711935 & (b << 8 | b >>> 24) | 4278255360 & (b << 24 | b >>> 8), 
            a.sigBytes = 4 * (k.length + 1), this._process(), k = (a = this._hash).words, 
            b = 0; b < 4; b++) h = k[b], k[b] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);
            return a;
        },
        clone: function() {
            var a = t.clone.call(this);
            return a._hash = this._hash.clone(), a;
        }
    }), r.MD5 = t._createHelper(q), r.HmacMD5 = t._createHmacHelper(q);
}(Math);