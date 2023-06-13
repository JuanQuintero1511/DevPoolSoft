// const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

const postJob = async ({ name, difficulty, duration, season, country, }) => {
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
    country,
  });
  for (const countryId of country) {
    let countryObj = await Country.findByPk(countryId);
    if (countryObj) {
      newActivity.addCountry(countryObj);
    }
  }
  return newActivity;
};

const getActivities = async () => {
  const activity = await Activity.findAll({
    include: [{ model: Country, attributes: ["name"] }],
  });
  return activity;
};

const getActivityByName = async (name) => {
  return await Activity.findOne({
    where: { name: { [Op.iLike]: `%${name}%` } },
  });
};


//?Controller para borrar actividades
const activityDeleteAll = () => {
  Activity.destroy({ where: {} });
};

const activityDeleteById = (id) => {
  Activity.destroy({ where: { id } });
};

module.exports = {
  getActivities,
  postActivity,
  getActivityByName,
  activityDeleteAll,
  activityDeleteById,
};