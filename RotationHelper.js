const { DateTime } = require("luxon");
const Rotation = require("./Rotation");
const rotationFile = require("./test_rotation.json");

class RotationHelper extends Rotation {
  constructor(rotation) {
    super(rotation);
  }

  getRotationByMonth() {}

  generateRotation(num_of_days = 30) {
    const keys = Object.keys(this.rotation);
    let start_date = DateTime.fromISO("2023-07-03");
    let format = "MMMM dd, yyyy";

    for (const key of keys) {
      for (const shift of this.rotation[key]) {
        let type = shift.shift_type;
        for (let index = 0; index < shift.days; index++) {
          console.log(type + "--> " + start_date.toFormat(format));
          start_date = start_date.plus({ days: 1 });
        }
      }
    }
  }
}

const r = new RotationHelper(rotationFile);
r.generateRotation();

module.exports = RotationHelper;
