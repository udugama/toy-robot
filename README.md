# Toy Robot Simulator

### Name: Prasad Udugama
### Email: udugama@gmail.com
### Node version: 12 or later version
### Setup:
 - npm install -g yarn
 - yarn
### Run sample script to test toy robot movement: 
 - yarn run
### Tests and test coverage: 
  - yarn test
### Lint: 
  - yarn lint
  
### Posible improvements: 
  - add command line ability to run robot commands posibly using `commander.js` or similer package.
  - improve the test coverage

### Thanks and hope to hear the feedback :)

## Description:
- The application is a simulation of a toy robot moving on a square tabletop
- The table top should have dimensions of 5 units x 5 units
- There are no obstructions on the table surface
- The robot is free to roam around the surface of the table, but must be prevented from falling to destruction
- Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed

Create an application that can read in commands of the following form:
- PLACE X,Y,FACING
- MOVE
- LEFT
- RIGHT
- REPORT

**PLACE** will put the toy robot on the table in position X, Y and facing NORTH, SOUTH, EAST or WEST.
- The origin (0,0) can be considered to be the SOUTH WEST most corner
- The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command
- The application should discard all commands in the sequence until a valid PLACE command has been executed

**MOVE** will move the toy robot one unit forward in the direction it is currently facing.

**LEFT** and **RIGHT** will rotate the robot 90 degrees in the specified direction without changing the position of the robot. Ie. the facing should change but the position should not.

**REPORT** will announce the X, Y and FACING of the robot. This can be in any form, but standard output is sufficient.

- A robot that is not on the table can choose to ignore the MOVE, LEFT, RIGHT and REPORT commands
- Input can be from a file, or from standard input, as the developer chooses
- Provide test data to exercise the application

## Constraints:
The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot.
Any move that would cause the robot to be outside of the bounds of the table should be prevented or ignored.

**Example Input and Output:**
a)
PLACE 0, 0, NORTH
MOVE
REPORT
Output: 0, 1, NORTH

b)
PLACE 0, 0, NORTH
LEFT
REPORT
Output: 0, 0, WEST

c)
PLACE 1, 2, EAST
MOVE
MOVE
LEFT
MOVE
REPORT
Output: 3, 3, NORTH