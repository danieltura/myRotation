const { DateTime } = require("luxon");

class Rotation {
  constructor(rotationJson) {
    this.first_name = rotationJson.first_name;
    this.last_name = rotationJson.last_name;
    this.rotation_start_date = DateTime.fromISO(
      rotationJson.rotation_start_date
    );
    this.rotation = rotationJson.rotation;
  }

  get_first_name() {
    return this.first_name;
  }

  get_last_name() {
    return this.last_name;
  }

  get_rotation_start_date() {
    return this.rotation_start_date;
  }

  get_rotation() {
    return this.rotation;
  }

  set_rotation(rotation) {
    this.rotation = rotation;
  }

  set_rotation_start_date(rotation_start_date) {
    this.rotation_start_date = rotation_start_date;
  }
}

module.exports = Rotation;
