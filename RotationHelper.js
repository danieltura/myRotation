const Rotation = require("./Rotation");
const rotationFile = require("./test_rotation.json");

class RotationHelper extends Rotation {
  constructor(rotation) {
    super(rotation);
  }

  getRotationByMonth() {}

  generateRotation(num_of_days = 30) {
    const keys = Object.keys(this.get_rotation());
    let start_date = this.get_rotation_start_date();
    let format = "MMMM dd, yyyy";
    let day = 0;
    let key = 0;

    while (day < num_of_days) {
      let index = key % keys.length; //rotation detection
      let shifts = this.rotation[keys[index]];
      let type = shifts.shift_type;

      //loop over same shift type days
      for (let shift = 0; shift < shifts.days; shift++) {
        if (day >= num_of_days) break;
        let current_day = start_date.plus({ days: day });
        console.log(type + "--> " + current_day.toFormat(format));
        day++;
      }
      key++;
    }
  }
}

const r = new RotationHelper(rotationFile);
r.generateRotation();

module.exports = RotationHelper;
