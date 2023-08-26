/**
 * publisher.js
 * MQTTにおける送信者
 */
const mqtt = require('mqtt');
// var client = mqtt.connect('mqtt://mosquitto.org');
const client = mqtt.connect({
    host: 'localhost',
    port: 1883,
    clientId: 'mqtt.publisher',
});

/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
const express = require("express");
// 読み込んだexpressモジュールを実体化してインスタンス
const app = express();

/**
 * brokerへ接続
 */
client.on('connect', function(){
    console.log('publisher.connected.');
});

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
const server = app.listen(3001, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

// publishする
app.get("/api/publish/a01", function(req, res, next){
    console.log("publish a01");
    client.publish('G800001-a01', "aaaaa");
});

// publishする
app.get("/api/publish/a02", function(req, res, next){
    console.log("publish a02");
    client.publish('G800001-a02', "bbbb");
});

// client.publish('G800001-a01', "aaaaa");
// client.publish('G800001-a02', "aaaaa");

/**
 * 10sごとに配信を行う
 */
// setInterval(function(){
//     var message = Date.now().toString();
//     client.publish('topic0', message);
//     console.log('publisher.publish:', message);
// }, 10000);
