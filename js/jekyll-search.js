! function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = "function" == typeof require && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                throw new Error("Cannot find module '" + o + "'")
            }
            var f = n[o] = {
                exports: {}
            };
            t[o][0].call(f.exports, function (e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, f, f.exports, e, t, n, r)
        }
        return n[o].exports
    }
    for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) s(r[o]);
    return s
}({
    1: [function (require, module, exports) {
        function load(location, callback) {
            var xhr = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            xhr.open("GET", location, !0), xhr.onreadystatechange = function () {
                if (200 == xhr.status && 4 == xhr.readyState) try {
                    callback(null, JSON.parse(xhr.responseText))
                } catch (err) {
                    callback(err, null)
                }
            }, xhr.send()
        }
        module.exports = {
            load: load
        }
    }, {}],
    2: [function (require, module, exports) {
        function FuzzySearchStrategy() {
            function fuzzyRegexFromString(string) {
                return new RegExp(string.split("").join(".*?"), "gi")
            }
            this.matches = function (string, crit) {
                return "string" != typeof string ? !1 : (string = string.trim(), !!fuzzyRegexFromString(crit).test(string))
            }
        }
        module.exports = new FuzzySearchStrategy
    }, {}],
    3: [function (require, module, exports) {
        function LiteralSearchStrategy() {
            this.matches = function (string, crit) {
                return "string" != typeof string ? !1 : (string = string.trim(), string.toLowerCase().indexOf(crit.toLowerCase()) >= 0)
            }
        }
        module.exports = new LiteralSearchStrategy
    }, {}],
    4: [function (require, module, exports) {
        function search(data, crit) {
            return crit ? findMatches(data, crit, opt.searchStrategy, opt) : []
        }

        function setOptions(_opt) {
            opt = _opt || {}, opt.fuzzy = _opt.fuzzy || !1, opt.limit = _opt.limit || 10, opt.searchStrategy = require(_opt.fuzzy ? "./SearchStrategies/fuzzy" : "./SearchStrategies/literal")
        }

        function findMatches(store, crit, strategy, opt) {
            for (var matches = [], data = store.get(), i = 0; i < data.length && matches.length < opt.limit; i++) {
                var match = findMatchesInObject(data[i], crit, strategy, opt);
                match && matches.push(match)
            }
            return matches
        }

        function findMatchesInObject(obj, crit, strategy, opt) {
            for (var key in obj)
                if (!isExcluded(obj[key], opt.exclude) && strategy.matches(obj[key], crit)) return obj
        }

        function isExcluded(term, excludedTerms) {
            var excluded = !1;
            excludedTerms = excludedTerms || [];
            for (var i = 0; i < excludedTerms.length; i++) {
                var excludedTerm = excludedTerms[i];
                !excluded && new RegExp(term).test(excludedTerm) && (excluded = !0)
            }
            return excluded
        }
        var opt = {};
        opt.fuzzy = !1, opt.limit = 10, opt.searchStrategy = require(opt.fuzzy ? "./SearchStrategies/fuzzy" : "./SearchStrategies/literal"), module.exports = {
            search: search,
            setOptions: setOptions
        }
    }, {
        "./SearchStrategies/fuzzy": 2,
        "./SearchStrategies/literal": 3
    }],
    5: [function (require, module, exports) {
        function put(data) {
            return isObject(data) ? addObject(data) : isArray(data) ? addArray(data) : void 0
        }

        function clear() {
            return store.length = 0, store
        }

        function get() {
            return store
        }

        function isObject(obj) {
            return !!obj && "[object Object]" == Object.prototype.toString.call(obj)
        }

        function isArray(obj) {
            return !!obj && "[object Array]" == Object.prototype.toString.call(obj)
        }

        function addObject(data) {
            return store.push(data), data
        }

        function addArray(data) {
            for (var added = [], i = 0; i < data.length; i++) isObject(data[i]) && added.push(addObject(data[i]));
            return added
        }
        module.exports = {
            put: put,
            clear: clear,
            get: get
        };
        var store = []
    }, {}],
    6: [function (require, module, exports) {
        function setOptions(_opt) {
            opt = _opt || {}, opt.templatePattern = _opt.templatePattern || /\{(.*?)\}/g
        }

        function render(t, data) {
            return t.replace(opt.templatePattern, function (match, prop) {
                return data[prop] || match
            })
        }
        module.exports = {
            render: render,
            setOptions: setOptions
        };
        var opt = {};
        opt.templatePattern = /\{(.*?)\}/g
    }, {}],
    7: [function (require, module, exports) {
        ! function (window, document, undefined) {
            "use strict";

            function initWithJSON(json) {
                store.put(opt.json), registerInput()
            }

            function initWithURL(url) {
                jsonLoader.load(url, function (err, json) {
                    err ? throwError("failed to get JSON (" + url + ")") : (store.put(json), registerInput())
                })
            }

            function throwError(message) {
                throw new Error("SimpleJekyllSearch --- " + message)
            }

            function validateOptions(_opt) {
                for (var i = 0; i < requiredOptions.length; i++) {
                    var req = requiredOptions[i];
                    _opt[req] || throwError("You must specify a " + req)
                }
                var ret = _opt;
                for (var option in opt) ret[option] = _opt[option] || opt[option];
                return ret
            }

            function isJSON(json) {
                try {
                    return json instanceof Object && JSON.parse(JSON.stringify(json))
                } catch (e) {
                    return !1
                }
            }

            function emptyResultsContainer() {
                opt.resultsContainer.innerHTML = ""
            }

            function appendToResultsContainer(text) {
                opt.resultsContainer.innerHTML += text
            }

            function registerInput() {
                opt.searchInput.addEventListener("keyup", function (e) {
                    return 0 == e.target.value.length ? void emptyResultsContainer() : void render(searcher.search(store, e.target.value))
                })
            }

            function render(results) {
                if (emptyResultsContainer(), 0 == results.length) return appendToResultsContainer(opt.noResultsText);
                for (var i = 0; i < results.length; i++) appendToResultsContainer(templater.render(opt.searchResultTemplate, results[i]))
            }
            var searcher = require("./Searcher"),
                templater = require("./Templater"),
                store = require("./Repository"),
                jsonLoader = require("./JSONLoader"),
                requiredOptions = ["searchInput", "resultsContainer", "json"],
                opt = {
                    searchInput: null,
                    resultsContainer: null,
                    json: [],
                    searchResultTemplate: '<li class="ls-none"><a href="{url}" title="{desc}">{title}</a></li>',
                    noResultsText: "No results found",
                    limit: 10,
                    fuzzy: !1,
                    exclude: []
                };
            window.SimpleJekyllSearch = function (_opt) {
                opt = validateOptions(_opt), searcher.setOptions(_opt), isJSON(opt.json) ? initWithJSON(opt.json) : initWithURL(opt.json)
            }, window.SimpleJekyllSearch.init = window.SimpleJekyllSearch
        }(window, document)
    }, {
        "./JSONLoader": 1,
        "./Searcher": 4,
        "./Repository": 5,
        "./Templater": 6
    }]
}, {}, [7]);
