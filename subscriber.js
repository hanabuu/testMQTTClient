/**
 * subscriber.js
 * MQTTにおける受信者
 */
var mqtt = require('mqtt');
// var client = mqtt.connect('mqtt://mosquitto.org');
var client = mqtt.connect({
    host: 'localhost',
    port: 1883,
    clientId: 'mqtt.subscriber',
});

/**
 * brokerへ接続
 */
client.on('connect', function(){
    console.log('subscriber.connected.');
});

/**
 * 購読要求
 * このメッセージを読みたい
 */
client.subscribe('topic0', function(err, granted){
    console.log('subscriber.subscribed.');
});

/**
 * 配信された際の処理
 */
client.on('message', function(topic, message){
    console.log('subscriber.on.message', 'topic:', topic, 'message:', message.toString());
});

