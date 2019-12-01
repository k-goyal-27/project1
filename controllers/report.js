const reportRoute = {};
const axios = require("axios");
//exportin rport controller
reportRoute.loadPage = function(req, res, next) {
    axios
        .get(
            "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=100&tsym=USD"
        )
        .then(response => {
            var data = response.data;
            res.render("report", {
                username: req.session.user.username,
                result: data.Data
            });
        });
};
module.exports = reportRoute;