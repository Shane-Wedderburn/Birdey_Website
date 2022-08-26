module.exports = function (grunt) {
  grunt.initConfig({
    ftp_push: {
      your_target: {
        options: {
          authKey: "key",
          host: "192.168.1.10",
          dest: "/var/www/",
          port: 21,
          debug: true,
          incrementalUpdates: true,
        },
        files: [
          {
            expand: true,
            cwd: ".",
            src: ["./html/**"],
          },
        ],
      },
    },
  });

  grunt.loadNpmTasks("grunt-ftp-push");
};
