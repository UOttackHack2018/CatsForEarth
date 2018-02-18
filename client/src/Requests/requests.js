

class Requests{
    constructor(){
    }

    get(url, callback){
        fetch(url, {
            method: 'GET'
        }).then( response => response.json()).then(json => {
            callback(json);
        }).catch(error => {
            console.log(error);
        });

    }

    post(url, callback){
        fetch(url, {
            method: "POST"

        }).then(response => {
            callback(response);
        })

    }
}

export default Requests;
