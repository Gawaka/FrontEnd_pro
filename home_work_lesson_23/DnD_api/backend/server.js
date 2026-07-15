const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Character = require('./models/Character');

const app = express();
const PORT = 5000;

app.use(cors()); 
app.use(express.json()); 

const MONGO_URI = 'mongodb+srv://paskm001_db_user:kL5Z033DMOCyeEFA@cluster0.0eij0ki.mongodb.net/dnd_db?appName=Cluster0';
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('✅ Базу даних MongoDB успішно підключено!');
    })
    .catch((error) => {
        console.error('❌ Помилка підключення до MongoDB:', error);
    });

app.get('/', (req, res) => {
    res.send('Привіт, мандрівнику! Твій D&D сервер успішно працює!');
});

app.post('/api/characters', async (req, res) => {
    try {
        const newCharacter = new Character(req.body);
        const savedCharacter = await newCharacter.save();
        res.status(201).json(savedCharacter);
        
    } catch (error) {
        console.error('Помилка збереження:', error);
        res.status(400).json({ message: 'Помилка при створенні персонажа', error: error.message });
    }
});

app.get('/api/characters', async (req, res) => {
    try {
        const characters = await Character.find();
        
        res.status(200).json(characters);
        
    } catch (error) {
        console.error('Помилка отримання даних:', error);
        res.status(500).json({ message: 'Помилка сервера при отриманні персонажів' });
    }
});

app.put('/api/characters/:id', async (req, res) => {
    try {
        const characterId = req.params.id; 
        const updates = req.body; 

        const updatedCharacter = await Character.findByIdAndUpdate(
            characterId, 
            updates, 
            { new: true }
        );

        if (!updatedCharacter) {
            return res.status(404).json({ message: 'Персонажа не знайдено' });
        }

        res.status(200).json(updatedCharacter);
        
    } catch (error) {
        console.error('Помилка оновлення:', error);
        res.status(500).json({ message: 'Помилка при оновленні персонажа' });
    }
});

app.delete('/api/characters/:id', async (req, res) => {
    try {
        const characterId = req.params.id;
        
        const deletedCharacter = await Character.findByIdAndDelete(characterId);

        if (!deletedCharacter) {
            return res.status(404).json({ message: 'Персонажа не знайдено' });
        }

        res.status(200).json({ message: 'Персонажа успішно видалено' });
        
    } catch (error) {
        console.error('Помилка видалення:', error);
        res.status(500).json({ message: 'Помилка при видаленні персонажа' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Сервер запущено. Порт: ${PORT}`);
});