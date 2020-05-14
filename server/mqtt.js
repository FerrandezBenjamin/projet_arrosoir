const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.hivemq.com");

client.on("connect", () => {
  client.subscribe("campusnum/jardin", () => {
    client.publish("campusnum/jardin", "MQTT connecté !");
  });
});

client.on("message", function (topic, msg) {
  console.log(msg.toString());
  client.emit("data", msg.toString());
});
