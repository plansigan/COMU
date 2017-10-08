var errorFunction = {}

errorFunction.error404 = {
    error: '404',
    message: 'Cannot find item',
    runFunc: "() => {}"
};

errorFunction.error441 = {
    error: '441',
    message: 'You are not logged in',
    runFunc: "() => { window.location = '/login' }"
};

module.exports = errorFunction;