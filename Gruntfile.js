/**
 * grunt打包脚本
 * 模板文件由gexiaowei<ganxiaowei@gmail.com>提供
 */

var banner = '/**\n * jquery.<%=pkg.name%>.js\n * @author <%=pkg.author%>\n * @version <%=pkg.version%>\n * copyright 2014-2015, gandxiaowei@gmail.com. all rights reserved.\n */\n';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['src/**.js']
        },
        clean: {
            all: ['dist/']
        },
        uglify: {
            all: {
                options: {
                    banner: banner,
                    sourceMap: true
                },
                files: [{
                    'dist/jhss.params.js':['src/jhss.params.js']
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['jshint', 'clean', 'uglify:all']);
};