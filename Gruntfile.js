module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bowercopy: {
            options: {
                clean: true
            },
            angular: {
                options: {
                    destPrefix: 'Scripts/_dsFramework/dependencies'
                },
                files: {
                    'angular.js': 'angular/angular.js',
                    'angular-mocks.js': 'angular-mocks/angular-mocks.js',
                    'angular-route.js': 'angular-route/angular-route.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bowercopy');

    grunt.registerTask('default', ['bowercopy']);
}