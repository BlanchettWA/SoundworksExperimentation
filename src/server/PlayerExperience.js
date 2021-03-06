import { Experience } from 'soundworks/server';



// server-side 'player' experience.
export default class PlayerExperience extends Experience {
  constructor(clientType) {
    super(clientType);

    this.checkin = this.require('checkin');
    this.sharedConfig = this.require('shared-config');


  }


  // if anything needs to append when the experience starts
  start() {}

  // if anything needs to happen when a client enters the performance (*i.e.*
  // starts the experience on the client side), write it in the `enter` method
  enter(client) {
    super.enter(client);
    // send a message to all the other clients of the same type
    //Play a sound when another client enters
      this.broadcast(client.type, client, 'play');

      //Import the Javascript OSC libraries as written here: https://github.com/TheAlphaNerd/node-osc
      var osc = require('node-osc');

      //Listen for new OSC messages
      var oscServer = new osc.Server(57110, '127.0.0.1');

      console.log('OSC Server created successfully!');

      //Listen for new OSC messages, and display their parameters
      oscServer.on('message', function(msg, rinfo) {
        console.log('Check out what just came in:' + msg + ' and ' + rinfo);

        //Create a new instance of the PlayerExperience object so it can be used
        // to broadcast messages to clients.
        var tesel = new PlayerExperience('player');

        tesel.broadcast(client,client,'gameover');
        tesel.send(client,'gameover');
        console.log('Client should be responding');
      });

//Recieve from a player that the srcreen has been Touched
//Then tell the phone to play a sound!
    this.receive(client,'taptime', () =>
  {
    console.log('player has tapped the screen');
    this.broadcast(client, client, 'tapplay');
    console.log(client);
    this.send(client,'tapplay');
  });
  }

  exit(client) {
    //Play an exit sound, just for fun (and experimentation)
    this.broadcast(client, client, 'gameover');
    super.exit(client);
    // ...
  }
}
