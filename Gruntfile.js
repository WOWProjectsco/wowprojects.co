module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        ///* Development tasks
        ///* ~·~ ~·~ ~·~ ~·~ ~·~

        // Compila codigo stylus a css
        stylus:{
            compile:{
                options:{ 'compress': false },
                files:{
                    'css/style.css' : 'css/style.styl',
                    'css/header.css' : 'css/header.styl',
                    'css/aboutus.css' : 'css/aboutus.styl',
                    'css/whywedoit.css' : 'css/whywedoit.styl',
                    'css/beingwow.css' : 'css/beingwow.styl',
                    'css/howwework.css' : 'css/howwework.styl',
                    'css/ourteamdna.css' : 'css/ourteamdna.styl',
                    'css/ourclients.css' : 'css/ourclients.styl',
                }
            }
        },

        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        ///* Deployment tasks
        ///* ~·~ ~·~ ~·~ ~·~ ~·~

        // Concatena hojas de estilo
        concat: {
            main: {
                src:['css/style.css',
                'css/header.css',
                'css/aboutus.css',
                'css/whywedoit.css',
                'css/beingwow.css' ,
                'css/howwework.css',
                'css/ourteamdna.css',
                'css/ourclients.css' ],
                dest:'css/style.full.css'
            }
        },

        // MInifica hojas de estilo
        cssmin: {
            main: { src: 'css/style.full.css',
            dest: 'css/style.min.css' }
        },

        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        ///* Watcher tasks
        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        watch: {
            stylus:{
                files: ['css/style.styl',
                'css/header.styl',
                'css/aboutus.styl',
                'css/whywedoit.styl',
                'css/beingwow.styl',
                'css/howwework.styl',
                'css/ourteamdna.styl',
                'css/ourclients.styl' ],
                tasks: ['stylus:compile','concat:main','cssmin:main']
            },
        },

    });

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Including plugins and dependencies
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Running/defining deployment tasks
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('deploy', ['stylus:compile','concat:main','cssmin:main']);

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Running/defining Development tasks
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('dev',['stylus:compile']);

};
