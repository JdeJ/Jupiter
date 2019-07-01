# Jupiter

## Description
A terminal based simulator of an explorer robot on Jupiter. The project includes TDD with Jest on NodeJs.

## Simulator
The terminal will ask the user for the initial simulator configuration:

- Grid: the user will set the area to explore for Jupiter, ie **(10 10)**.
  
- Initial position: the user have to set a initial position of the Jupiter on the Grid, and say where is it face to, ie **(0 0 'N')**.
  
- Orders: user can send a stream of orders to Jupiter, ie **("RMMLMRRMLLLMM")**.
  
- When the Jupiter finalize the orders, it will response with its actual position, ie **("The Jupiter explorer is facing to W on {2,8}")**.
  
- Finally typing **exit** on prompt, the simulator will be closed.

## Data structure
- Explorer: The entry point of the app, creates a Jupiter explorer and set it with the user inputs. Ends simulator when user types **exit** like order input.

- Class Jupiter: Describes the properties and methods of the explorator:
  - Properties:
    - Grid: an Array with the area the Jupiter will explore. Format **[Number Number]**.
    - Position: an Object that stores the actual position of the explorer. Format: **{x:Number, y:Number}**.
    - Direction: a character that represents the direccion of Jupiter move. Format: **N** or **E** or **S** or **W**.
  - Methods:
    - Getters (grid, position, direction): return the actual values of Jupiter.
    - setGrid(Number, Number): creates the area, acepts only numbers. Returns the Grid size like **[Number, Number]**
    - setPosition(Number, Number): sets jupiter position, acepts only numbers. Returns the the actual position of the Jupiter like **{x:Number, y:Number}**.
    - setDirection(String): creates the area, acepts only one character, if recives a string, it will only take the first. Returns the actual direction of Jupiter like **N or E or S or W**.
    - changeDirection(String): updates the direction of the Jupiter using Direction helper. Returns the the actual position of the Jupiter like **{x:Number, y:Number}**.
    - moveForward(): move Jupiter one step forward. If the movement implies get out of the grid, the Jupiter will stays still. Returns the the actual position of the Jupiter like **{x:Number, y:Number}**.
    - getStatus(): returns the Jupiter actual position. Format: **"The Jupiter explorer is facing to [N or E or S or W] on {Number, Number}"**.
    - task(string): the string will be split in to characters. Returns the Jupiter actual position like **"The Jupiter explorer is facing to [N or E or S or W] on {Number, Number}"**. For each character will evaluates: 
      - **M**: Jupiter will move forward.
      - **L**: Jupiter will turn left without move.
      - **R**: Jupiter will turn right without move.
      - **Other value**: will be obviated.

- Class Direction:
  - Properties:
    - vectors: an Array with all the posibles directions (**[N,E,S,W]**).
  - Methods:
    - getVectors(): returns the posible directions like **[N,E,S,W]**.
    - changeVector(String, String): returns the new direction of the Jupiter based on the actual position like **W**. Posible values:
      - **L**: turns left.
      - **R**: turns right.
