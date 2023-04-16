// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require("./database");
const Card = require("./Card");

const syncAndSeed = async () => {
  await db.sync({ force: true });

  const cards = [
    {
      name: "angry",
      color: "red",
      front: "svgs/front/angry.svg",
      back: "svgs/back/angry.svg",
    },

    {
      name: "offended",
      color: "red",
      front: "svgs/front/offended.svg",
      back: "svgs/back/offended.svg",
    },

    {
      name: "irritable",
      color: "red",
      front: "svgs/front/irritable.svg",
      back: "svgs/back/irritable.svg",
    },

    {
      name: "jealous",
      color: "red",
      front: "svgs/front/jealous.svg",
      back: "svgs/back/jealous.svg",
    },

    {
      name: "frustrated",
      color: "red",
      front: "svgs/front/frustrated.svg",
      back: "svgs/back/frustrated.svg",
    },

    {
      name: "disgusted",
      color: "red",
      front: "svgs/front/disgusted.svg",
      back: "svgs/back/disgusted.svg",
    },

    {
      name: "excited",
      color: "yellow",
      front: "svgs/front/excited.svg",
      back: "svgs/back/excited.svg",
    },

    {
      name: "confident",
      color: "yellow",
      front: "svgs/front/confident.svg",
      back: "svgs/back/confident.svg",
    },

    {
      name: "happy",
      color: "yellow",
      front: "svgs/front/happy.svg",
      back: "svgs/back/happy.svg",
    },

    {
      name: "hopeful",
      color: "yellow",
      front: "svgs/front/hopeful.svg",
      back: "svgs/back/hopeful.svg",
    },

    {
      name: "loved",
      color: "yellow",
      front: "svgs/front/loved.svg",
      back: "svgs/back/loved.svg",
    },

    {
      name: "grateful",
      color: "yellow",
      front: "svgs/front/grateful.svg",
      back: "svgs/back/grateful.svg",
    },

    {
      name: "affectionate",
      color: "yellow",
      front: "svgs/front/affectionate.svg",
      back: "svgs/back/affectionate.svg",
    },

    {
      name: "proud",
      color: "yellow",
      front: "svgs/front/proud.svg",
      back: "svgs/back/proud.svg",
    },

    {
      name: "suspicious",
      color: "purple",
      front: "svgs/front/suspicious.svg",
      back: "svgs/back/suspicious.svg",
    },

    {
      name: "worried",
      color: "purple",
      front: "svgs/front/worried.svg",
      back: "svgs/back/worried.svg",
    },

    {
      name: "scared",
      color: "purple",
      front: "svgs/front/scared.svg",
      back: "svgs/back/scared.svg",
    },

    {
      name: "nervous",
      color: "purple",
      front: "svgs/front/nervous.svg",
      back: "svgs/back/nervous.svg",
    },

    {
      name: "shy",
      color: "purple",
      front: "svgs/front/shy.svg",
      back: "svgs/back/shy.svg",
    },

    {
      name: "insecure",
      color: "purple",
      front: "svgs/front/insecure.svg",
      back: "svgs/back/insecure.svg",
    },

    {
      name: "anxious",
      color: "purple",
      front: "svgs/front/anxious.svg",
      back: "svgs/back/anxious.svg",
    },

    {
      name: "surprised",
      color: "purple",
      front: "svgs/front/surprised.svg",
      back: "svgs/back/surprised.svg",
    },

    {
      name: "rejected",
      color: "aqua",
      front: "svgs/front/rejected.svg",
      back: "svgs/back/rejected.svg",
    },

    {
      name: "disappointed",
      color: "aqua",
      front: "svgs/front/disappointed.svg",
      back: "svgs/back/disappointed.svg",
    },

    {
      name: "sad",
      color: "aqua",
      front: "svgs/front/sad.svg",
      back: "svgs/back/sad.svg",
    },

    {
      name: "bored",
      color: "aqua",
      front: "svgs/front/bored.svg",
      back: "svgs/back/bored.svg",
    },

    {
      name: "hurt",
      color: "aqua",
      front: "svgs/front/hurt.svg",
      back: "svgs/back/hurt.svg",
    },

    {
      name: "lonely",
      color: "aqua",
      front: "svgs/front/lonely.svg",
      back: "svgs/back/lonely.svg",
    },

    {
      name: "guilty",
      color: "aqua",
      front: "svgs/front/guilty.svg",
      back: "svgs/back/guilty.svg",
    },

    {
      name: "embarrassed",
      color: "aqua",
      front: "svgs/front/embarrassed.svg",
      back: "svgs/back/embarrassed.svg",
    },
  ];

  const card = await Card.bulkCreate(cards);
  console.log(`
    Seeding successful!
    Time for school!
  `);
};

module.exports = {
  db,
  syncAndSeed,
  Card,
};
