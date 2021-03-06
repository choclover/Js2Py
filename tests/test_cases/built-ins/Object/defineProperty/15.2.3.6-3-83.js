// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-3-83
description: >
    Object.defineProperty - 'configurable' property in 'Attributes' is
    own accessor property without a get function (8.10.5 step 4.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { };

        var attr = {};
        Object.defineProperty(attr, "configurable", {
            set : function () { }
        });

        Object.defineProperty(obj, "property", attr);

        var beforeDeleted = obj.hasOwnProperty("property");

        delete obj.property;

        var afterDeleted = obj.hasOwnProperty("property") && typeof (obj.property) === "undefined";

        return beforeDeleted === true && afterDeleted === true;
    }
runTestCase(testcase);
