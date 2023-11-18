var express = require("express");
var router = express.Router();
var Helper = require('./helpers/index')

const csurf = require('csurf');
const extractCsrfToken = (req) => {
    const headerToken = req.get('X-CSRF-Token');
    return headerToken;
};

const csrfProtection = csurf({
    cookie: false, ignoreMethods: [], value: extractCsrfToken
});
const csrfProtection2 = csurf({ cookie: false, ignoreMethods: ['GET'], value: extractCsrfToken });
router.use('/getCsrfToken', csrfProtection2);

router.get('/getCsrfToken', (req, res) => {
    res.cookie('csrfToken', Helper.encode({ key: req.csrfToken() }));
    res.json({ csrfToken: Helper.encode({ key: req.csrfToken() }) });
});
router.get("/health", (req, res) => {
    res.send("OK");
});

router.use('/chat', csrfProtection);
//apply middleware
const Auth = require("./middleware/PostToken");
const JoinController = require("./controllers/JoinController")
router.use("/chat", [csrfProtection, Auth.postToken], JoinController)

module.exports = router; 
