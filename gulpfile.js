var gulp = require("gulp");
var multiDest = require('gulp-multi-dest');

var src = ['.npmignore', 'CHANGELOG.md', 'CONTRIBUTING.md', 'LICENSE.md'];
var modules = [
    './packages/core',
    './packages/transmission'
];

gulp.task("copy", copy);

function copy() {
    gulp.src(src)
        .pipe(multiDest(modules, {}));
}