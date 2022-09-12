// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Card = require('./Card')


const syncAndSeed = async () => {
    await db.sync({ force: true });

    await Card.create({
      name: "angry",
      color: "red",
      front: "angryfront.png",
      back: "angryback.png",
    })
    
    await Card.create({
      name: "offended",
      color: "red",
      front: "offendedfront.png",
      back: "offendedback.png",
    })
    
    await Card.create({
      name: "irritable",
      color: "red",
      front: "irritablefront.png",
      back: "irritableback.png",
    })
    
    await Card.create({
      name: "jealous",
      color: "red",
      front: "jealousfront.png",
      back: "jealousback.png",
    })
    
    await Card.create({
      name: "frustrated",
      color: "red",
      front: "frustratedfront.png",
      back: "frustratedback.png",
    })
    
    await Card.create({
      name: "disgusted",
      color: "red",
      front: "disgustedfront.png",
      back: "disgustedback.png",
    })
    
    await Card.create({
      name: "excited",
      color: "yellow",
      front: "excitedfront.png",
      back: "excitedback.png",
    })
    
    await Card.create({
      name: "confident",
      color: "yellow",
      front: "confidentfront.png",
      back: "confidentback.png",
    })
    
    await Card.create({
      name: "happy",
      color: "yellow",
      front: "happyfront.png",
      back: "happyback.png",
    })
    
    await Card.create({
      name: "hopeful",
      color: "yellow",
      front: "hopefulfront.png",
      back: "hopefulback.png",
    })
    
    await Card.create({
      name: "loved",
      color: "yellow",
      front: "lovedfront.png",
      back: "lovedback.png",
    })
    
    await Card.create({
      name: "grateful",
      color: "yellow",
      front: "gratefulfront.png",
      back: "gratefulback.png",
    })
    
    await Card.create({
      name: "affectionate",
      color: "yellow",
      front: "affectionatefront.png",
      back: "affectionateback.png",
    })
    
    await Card.create({
      name: "proud",
      color: "yellow",
      front: "proudfront.png",
      back: "proudback.png",
    })
    
    await Card.create({
      name: "suspicious",
      color: "purple",
      front: "suspiciousfront.png",
      back: "suspiciousback.png",
    })
      
    await Card.create({
      name: "worried",
      color: "purple",
      front: "worriedfront.png",
      back: "worriedback.png",
    })
    
    await Card.create({
      name: "scared",
      color: "purple",
      front: "scaredfront.png",
      back: "scaredback.png",
    })
    
    await Card.create({
      name: "nervous",
      color: "purple",
      front: "nervousfront.png",
      back: "nervousback.png",
    })
    
    await Card.create({
      name: "shy",
      color: "purple",
      front: "shyfront.png",
      back: "shyback.png",
    })
    
    await Card.create({
      name: "insecure",
      color: "purple",
      front: "insecurefront.png",
      back: "insecureback.png",
    })
    
    await Card.create({
      name: "anxious",
      color: "purple",
      front: "anxiousfront.png",
      back: "anxiousback.png",
    })
    
    await Card.create({
      name: "surprised",
      color: "purple",
      front: "surprisedfront.png",
      back: "surprisedback.png",
    })
    
    await Card.create({
      name: "rejected",
      color: "aqua",
      front: "rejectedfront.png",
      back: "rejectedback.png",
    })
    
    await Card.create({
      name: "disappointed",
      color: "aqua",
      front: "disappointedfront.png",
      back: "disappointedback.png",
    })
    
    await Card.create({
      name: "sad",
      color: "aqua",
      front: "sadfront.png",
      back: "sadback.png",
    })
    
    await Card.create({
      name: "bored",
      color: "aqua",
      front: "boredfront.png",
      back: "boredback.png",
    })
    
    await Card.create({
      name: "hurt",
      color: "aqua",
      front: "hurtfront.png",
      back: "hurtback.png",
    })
    
    await Card.create({
      name: "lonely",
      color: "aqua",
      front: "lonelyfront.png",
      back: "lonelyback.png",
    })
    
    await Card.create({
      name: "guilty",
      color: "aqua",
      front: "guiltyfront.png",
      back: "guiltyback.png",
    })
    
    await Card.create({
      name: "embarrassed",
      color: "aqua",
      front: "embarrassedfront.png",
      back: "embarrassedback.png",
    })

    console.log(`
    Seeding successful!
    Time for school!
  `);
};



module.exports = {
  db,
  syncAndSeed,
  Card,

}