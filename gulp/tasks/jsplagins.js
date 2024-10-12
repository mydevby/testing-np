export const jsPlagins = () => {
    return app.gulp.src(app.path.src.jsPlagins)
        .pipe(app.gulp.dest(app.path.build.jsPlagins))
}