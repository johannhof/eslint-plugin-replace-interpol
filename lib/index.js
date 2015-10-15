/**
 * @fileoverview Replace <% ... %> in your code before linting
 * @author Johann Hofmann
 * @copyright 2015 Johann Hofmann. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import processors
module.exports.processors = {
    ".js": {
        preprocess: function(text, filename) {
            return [text.replace(/<%.*?%>/, 'undefined')];
        }
    }
};

