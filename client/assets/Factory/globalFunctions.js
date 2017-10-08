//THIS IS WHERE ALL THE GLOBAL FUNCTIONS OF THE CLIENT SIDE

app.factory('globalFunctions', function() {
    return {
        errorResponse: (data) => {
            data.runFunc = eval(data.runFunc);
            alert(data.message);
            data.runFunc();
        }
    }
})