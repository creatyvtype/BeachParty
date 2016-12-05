# BeachParty
Click the balls, it's a party!

For the deployed version, [join the party](http://beach-party.herokuapp.com)  

To run locally:
You may change the api/index base_url to point to the production API (beach-api.herokuap.com). Otherwise, clone the [Beach Party API](https://github.com/creatyvtype/BeachPartyApi) and run locally. Instructions are there.

`npm install`  
`npm start`

*Discuss how this could work if you wanted to update the same circle, multiple times, and ensure that you have the latest (and correct) transformation.  How would your solution scale?  Are there ways of making it more optimal?*
It takes a long time, but they are currently queued. One image loads, then it automatically is queued to load any additional clicks. My solution keeps the requests pending until the top request is complete, so it wouldn't clog anything. That being said...

I'm not sure about how the request queue was implemented. It seems that axios defaults to only letting one in one out for a particular request, but I'm not sure how. It could be the "cancelPreviousRequest" flag, but it would be misnamed. This would require more research on my part, especially if I wanted to remove something from the middle of the queue, say, if clicking on a loading beach ball should cancel the previous request to improve the user experience.

Personal critiques / points of improvement:  
1) Unsure about request queues. Research this.  
2) Architecture is still shaky. I feel that the Ball object may know too much, and my be in the wrong place.

A note about the freamwork:  
I created this ongoing bootstrapped framework from a combination of tutorials and personal sweat and tears for a different project. I held onto the basics of it so that I could reuse it at will. The repo can be found [here](https://github.com/creatyvtype/react-redux-framework)

(UPDATE): I got the deployed version to work. Seemed to do with the node_modules/ folder being ignored. Will look into that. In deployment it seems I failed the portion where the async calls are queued one after another. This appeared to work as desired locally, but as I said before, I didn't know how it worked, and that caused the problem in production. Future steps would be to research a solution using axios or attempt a different library. If nothing came to fruition, I would have to build my own structure to queue the calls.
