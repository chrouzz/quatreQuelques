/**
 * Frontend application access level constant definitions. These are used to to
 * restrict access to certain routes in application.
 *
 * Note that actual access check is done by currently signed in user.
 *
 * @todo    Add 'admin' level
 */
(function() {
    'use strict';

    angular.module('barmaddenApp')
        .constant('AccessLevels', {
            anon: 0,
            user: 1
        });
}());