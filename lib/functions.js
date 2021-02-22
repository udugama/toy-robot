/********************************************
 * facing ['NORTH', 'SOUTH', 'EAST', 'WEST']
 ********************************************/

let facing;
let xAxis = 0;
let yAxis = 0;

/**
 * PLACE X,Y,FACING
 * 
 * @param {*} x_axis 
 * @param {*} y_axis 
 * @param {*} direction 
 */
export const place = (x_axis, y_axis, direction) => {
  setDirection(direction)
  relocateRobot(x_axis, y_axis)
}

/**
 * MOVE
 */
export const move = () => {
  
  switch(facing) {
    case 'NORTH':
      relocateRobot(xAxis, yAxis+1)
      break;
    case 'SOUTH':
      relocateRobot(xAxis, yAxis-1)
      break;
    case 'EAST':
      relocateRobot(xAxis+1, yAxis)
      break;
    case 'WEST':
      relocateRobot(xAxis-1, yAxis)
      break;
    default:
      break;
  }
}

/**
 * LEFT
 */
export const left = () => {
  switch (facing) {
    case 'NORTH':
      facing = 'WEST';
    case 'SOUTH':
      facing = 'EAST';
      break;
    case 'EAST':
      facing = 'NORTH';
      break;
    case 'WEST':
      facing = 'SOUTH';
      break;
    default:
      break;
  }
}

/**
 * RIGHT
 */
export const right = () => {
  switch (facing) {
    case 'NORTH':
      facing = 'EAST';
      break;
    case 'SOUTH':
      facing = 'WEST';
      break;
    case 'EAST':
      facing = 'SOUTH';
      break;
    case 'WEST':
      facing = 'NORTH';
      break;
    default:
      break;
  }
}

/**
 * REPORT
 */
export const report = () => {
  return `Output: ${xAxis}, ${yAxis}, ${facing}`
}

/**
 * 
 * @param {*} x_axis 
 * @param {*} y_axis 
 */
export const relocateRobot = (x_axis, y_axis) => {
  if (validateBoundary(x_axis, y_axis)) {
    xAxis = x_axis;
    yAxis = y_axis;
    // console.log('robot moved')
  }

}

/**
 *
 * @param {*} direction 
 */
const setDirection = (direction) => {
  facing = direction
}

/**
 * check table boundary
 * 
 * @param {*} x_axis 
 * @param {*} y_axis 
 * 
 */
export const validateBoundary = (x_axis, y_axis) => {
  const x_min = 0
  const x_max = 5
  const y_min = 0
  const y_max = 5

  if (x_axis < x_min || x_axis > x_max || y_axis < y_min || y_axis > y_max) {
    console.log('invalid destination cordinate.')
    return false
  }

  return true
}
