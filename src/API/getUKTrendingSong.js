function UkTrendingSongs(){    let url = "https://api.napster.com/v2.2/tracks/top";    const authObj={        headers:{            apikey:  "YWNlNDU2ZWYtNGI3My00YWEwLTg2ZjAtNTljMDE5NjNmZmI0"        }    };    fetch(url,authObj)        .then(function(response) {            return response.json();        })        .then(function(text) {            console.log('Request successful top Ten', text);        })        .catch(function(error) {            console.log('Request failed', error)        });}export default UkTrendingSongs;