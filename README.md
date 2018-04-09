We are making changes to the app.js
* There are two objects. Eneny and Player. 
	-Enemy is the bug you are trying to avoid.
	-Player is you. The boy.

* Enemy takes two parameters x and y. And is given a random speed for every Enemy through the object oriented consept

* Through the prototype function, we can use update function for enemy which updates every enemy through a parameter dt. 'this' keyword is used to use the object oriented consept for every new enemy there is. 

* Player object is also given its x and y cordinates through a parameter. 

* The function handel input gets a parameter form action listener which triggers the update function. This allows the player object to move which is specified by the update function. 

* CheckCollision function loops through the enemy objects in order to see if there is a collision with a player to one of the enemy. 
	- If it hits the enemy or hits the top most part then the player comes to its initial position.



