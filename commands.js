// JASKIS
// paste the MongoDB commands you use underneath each prompt

db.bouties.find({ location: 'Grasslands'});

db.bounties.find({ $gte { reward: 10000 }});

db.bounties.find({}, {client: 0});

db.bounties.find({ $and: [{species: 'Groundhog'}, { location: 'Woodlands'}] } );

db.bounties.updateOne(
    { name:'Polarwind' },
    {$set:{ bounty: '$10000'}});

db.bounties.deleteOne({name:'Lokinkajou'});

db.bounties.deleteMany({client:'Songbird'});

db.bounties.updateMany(
    { captured:false },
    {$set:{ captured: true}});


// GETTING STARTED
// 1. Create a database called jaskis


// 2. Create a collection called bounties


// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object


// 2. Query for all bounties in the bounties collection


// 3. Insert many bounties at once using the given objects

// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands

// 2. Query for all bounties with a reward worth 10000 or more

// 3. Query for all bounties, but exclude the client attribute from being shown

// 4. Query for a Groundhog in the Woodlands

// Update and Delete
// 1. Update the reward for Polarwind to 10000

// 2. Remove Lokinkajou

// 3. Delete all bounties sent by Songbird

// 4. Update all captured statuses to true