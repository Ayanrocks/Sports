const proxy = require("http-proxy-middleware");


module.exports = (app) => {
    app.use(proxy("/auth/google", { target: "http://localhost:5000/" }));
    app.use(proxy("/auth/facebook", { target: "http://localhost:5000/" }));
    app.use(proxy("/api/", { target: "http://localhost:5000/" }));
    app.use(proxy("/profile/data", { target: "http://localhost:5000/" }));
    app.use(proxy("/profile/delete", { target: "http://localhost:5000/" }));
    app.use(proxy("/logout", { target: "http://localhost:5000/" }));
    app.use(proxy("/contact/data", { target: "http://localhost:5000/" }));
}