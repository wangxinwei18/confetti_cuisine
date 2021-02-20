const httpStatus = require("http-status-codes"),
    contentTypes = require("./contentTypes"),
    utils = require("./utils");

const routes = {
        "GET": {},
        "POST": {}
    };

exports.handle = (req, res) => {
    try {
         routes[req.method][req.url](req, res);
    } catch (e) {
        res.writeHead(httpStatus.OK, contentTypes.html);
        utils.getFile("views/error.html", res);
    }
};

exports.get = (url, action) => {
    let GETS = "GET";
    routes[GETS][url] = action;
};
exports.post = (url, action) => {
    let POSTS = "POST";
    routes[POSTS][url] = action;
};
