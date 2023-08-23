/**
 * publisher.js
 * MQTTにおける送信者
 */
var mqtt = require('mqtt');
// var client = mqtt.connect('mqtt://mosquitto.org');
var client = mqtt.connect({
    host: 'localhost',
    port: 1883,
    clientId: 'mqtt.publisher',
});

/**
 * brokerへ接続
 */
client.on('connect', function(){
    console.log('publisher.connected.');
});

client.publish('G800001-a01', "aaaaa");
client.publish('G800001-a02', "aaaaa");

/**
 * 10sごとに配信を行う
 */
// setInterval(function(){
//     var message = Date.now().toString();
//     client.publish('topic0', message);
//     console.log('publisher.publish:', message);
// }, 10000);
