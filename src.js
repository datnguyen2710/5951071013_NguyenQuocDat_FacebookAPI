axios.get('https://graph.facebook.com/utc2hcmc/posts?access_token=EAAAAZAw4FxQIBAHefVFzh4p3toZCGD6QIBG5b7hZAutEx3dWl7MjxPEZBzC2LoLIy')
    .then(response => {
        var output = "";
        output += response.data.data[0].message + "<br><br>" + response.data.data[1].message + "<br><br>" + response.data.data[2].message;
        document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.error(error))