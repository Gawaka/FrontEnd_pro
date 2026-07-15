const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, default: '' },
    level: { type: Number, default: 1 },
    
    race: {
        id: { type: String },
        name: { type: String },
        bonuses: {
            strength: { type: Number, default: 0 },
            dexterity: { type: Number, default: 0 },
            constitution: { type: Number, default: 0 },
            intelligence: { type: Number, default: 0 },
            wisdom: { type: Number, default: 0 },
            charisma: { type: Number, default: 0 }
        }
    },
    charClass: {
        id: { type: String },
        name: { type: String },
        hitDie: { type: Number },
        icon: { type: String }
    },
    stats: {
        strength: { type: Number, required: true },
        dexterity: { type: Number, required: true },
        constitution: { type: Number, required: true },
        intelligence: { type: Number, required: true },
        wisdom: { type: Number, required: true },
        charisma: { type: Number, required: true }
    },
    bio: { type: String },
    nature: { type: String },
    goal: { type: String },
    worldview: { type: String },
    
    skills: [{ type: String }],
    features: [{ type: String }],
    inventory: [{ type: String }]
});

module.exports = mongoose.model('Character', characterSchema);