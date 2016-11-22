#(Modified) Soundworks Application


>The Soundworks framework is an amazing set of services and a great framework to build upon. This is an attempt to build upon that framework to create interesting experiences.
> This is derived from the template for developing [*Soundworks*](https://github.com/collective-soundworks/soundworks/) applications.  
> Most of the original template code is intact, including comprehensive comments in the source files.

[//]: # (For a complete documentation of the *Soundworks* framework, please refer to http://collective-soundworks.github.io/soundworks/.)

##Helpful Links and Resources

https://libraries.io/github/collective-soundworks/soundworks
>This is an API of the Soundworks framework. I found it extremely helpful when debugging and trying to understand how things work

https://github.com/collective-soundworks/soundworks-template
>This is the original Soundworks Template project that I forked off of. If anyone from [*collective-soundworks*](https://github.com/collective-soundworks) is reading this, I apologize for any random pull requests.

https://github.com/TheAlphaNerd/node-osc
>This is the OSC Library that I imported and used for the facilitation of message recieving. Much thanks to [*TheAlphaNerd*](https://github.com/TheAlphaNerd))!




## Running the Application

To start the *Soundworks* application, use these commands:

```sh
$ npm install
$ npm run watch
```

##Current Project Capabilities (And their purpose for existing)
1. Play a snippet of Bird's Lament by Moondog when a client connects to the server
>Exists to test changing sounds from the templete application and to create functions that will work in the framework

2. Play the beginning of the Bird's Lament sample on all connected clients when any other client connects to the server
>Exists to experiment with random function and time delay

3. Play a random note sample when clients tap their phone screen (Sounds taken from [*Drops*](https://github.com/collective-soundworks/soundworks-drops))
>More extensive Random testing, creating custom send/recieve messages. Also adapting the touch capibilities of Drops into another program.

4. Play the Super Mario World Game Over theme when a client disconnects from the server on every other client.
>Mostly for fun

5. Play the Super Mario World Game Over theme when the server receieves an OSC message (currently on port 57110).
>To extend capability with other programs or projects.


##Future Direction:
Let it be a surprise and hang on for the ride. I'm going with the flow and learning as I go.
