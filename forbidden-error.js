'use strict';

module.exports = function ForbiddenError(message) {
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message;
    this.status = 403;
}

require('util').inherits(module.exports, Error);
