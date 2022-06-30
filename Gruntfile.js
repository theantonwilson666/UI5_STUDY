module.exports = function(grunt) {
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-openui5");
    grunt.loadNpmTasks("grunt-connect-proxy");

    grunt.initConfig({
        zip: {
            "src.zip": ["src/**/*.*", "Gruntfile.js"],
        },

        unzip: {
            "./": "src.zip",
        },

        clean: ["src/dist"],

        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: "localhost",
                    livereload: false,
                    keepalive: true,
                    middleware: function(connect, options, middlewares) {
                        middlewares.unshift(
                            require("grunt-connect-proxy/lib/utils").proxyRequest
                        );
                        return middlewares;
                    },
                },
                proxies: [

                    {
                        context: "/sap/",
                        host: "10.11.12.4",
                        port: 8000,
                        secure: false,
                        https: false,
                        header: "Basic " + new Buffer.from("VILSONAYU:QAZwsx123!"),
                    },
                ],
            },
        },

        openui5_connect: {
            server: {
                options: {
                    appresources: "src",
                    resources: "C:/work/ui5_resources/sap-ui5-1.71.44/resources",
                    testresources: "C:/work/ui5_resources/sap-ui5-1.71.44/test-resources",

                    proxypath: "proxy",
                },
            },
        }
    });


    grunt.registerTask("serve", function() {
        grunt.task.run(["configureProxies:server", "openui5_connect:server"]);
    });


};