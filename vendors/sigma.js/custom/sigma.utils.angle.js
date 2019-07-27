
sigma.utils.getAngle = function(sX, sY, tX, tY) {
    var angle = Math.atan2((tY - sY), (tX - sX)) + 90   //radians
    // you need to devide by PI, and MULTIPLY by 180:
    var degrees = 180*angle/Math.PI;  //degrees
    if (degrees < 0) {
      degrees = degrees + 360
    }
    return (360+Math.round(degrees))%360; //round number, avoid decimal fragments
}

/**
 * 30~150: x + w/2
 * 210~330: x - w/2
 */
sigma.utils.adjustTargetXbyAngle = function(sX, sY, tX, tY) {
  let adjust = 0
  let angle = this.getAngle(sX, sY, tX, tY)
  if (angle > 30 && angle < 150) {
    adjust = 1
  }
  else if (angle > 210 && angle < 330) {
    adjust = -1
  }
  return adjust
}

// 