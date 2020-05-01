const https = require('https');


https.get('https://api-ratp.pierre-grimaud.fr/v3/schedules/metros/7/le+kremlin-bicetre/R', (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
        data += chunk;
    });

    resp.on('end', () => {
        // console.log(JSON.parse(data).result);
        let busListTime = new Array();
        for (i = 0; i < JSON.parse(data).result.schedules.length; i++) {
            busListTime.push(JSON.parse(data).result.schedules[i].message)
            console.log(busListTime[i]);
        }
        // let premierBus = JSON.parse(data).result.schedules[0].message;
        // let secondBus = JSON.parse(data).result.schedules[1].message;
        // console.log(premierBus);
        // console.log(secondBus);
    })
})