module.exports = function(grunt) {

    grunt.initConfig({
        /*jshint: {
            files: ['Gruntfile.js', 'src/!**!/!*.js', 'test/!**!/!*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }*/

        uglify: {
            scripts: {
                options: {
                    sourceMap: true,
                    sourceMapName: '_/js/script.map'
                },
                files: {
                    '_/js/script.js': ['_/components/js/*.js']
                }
            }
        },
        compass: {
            dev: {
                options: {
                    sassDir: '_/components/sass',
                    cssDir: '_/css',
                    outputStyle: 'expanded'
                }
            },
            prod: {
                options: {
                    sassDir: '_/components/sass',
                    cssDir: '_/css',
                    outputStyle: 'compressed',
                    require: ['susy']
                }
            },
        },
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: ['_/components/js/*.js'],
                tasks: ['uglify']
            },
            sass: {
                files: ['_/components/sass/**/*.scss'],
                tasks: ['compass:dev']
            },
            html: {
                files: ['./*.html'],
            }
        },
    });

    //grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.registerTask('default', ['jshint']);

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', 'watch');
};