const Rotation = require("./Rotation");
const rotationFile = require("./test_rotation.json");

class RotationHelper extends Rotation {
  constructor(rotation) {
    super(rotation);
  }

  getRotationByMonth() {}
}

const r = new RotationHelper(rotationFile);
console.log(r.get_first_name());
console.log(r.get_last_name());
console.log(r.get_rotation_start_date());
module.exports = RotationHelper;
