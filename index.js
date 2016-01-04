'use strict';

const ForbiddenError = require('./forbidden-error');

module.exports = roles => {
    return (req, res, next) => {
        if (!roles) {
            return next();
        }

        if (typeof roles === 'string') {
            roles = [roles];
        }

        if (!req.user || !req.user.roles) {
            return next();
        }

        const userRoles = req.user.roles;
        const foundRoles = roles.filter(r => userRoles.some(ur => ur === r));

        if (!foundRoles.length) {
            return next(new ForbiddenError('Forbidden'));
        }

        next();
    };
};
