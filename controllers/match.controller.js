const Match = require('../models/match.model');

const getMatch = async (req, res) => {
    try {
    console.log('CHEGOU AQ')
        const dogs = await Match.findAll(); 
        res.status(200).json(dogs); 
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
        res.status(500).json({ message: 'Erro ao buscar os dados dos match' });
    }
};


const postMatch = async (req, res) => {
    try {
      const {
        name,
        description,
        years,
        contact,
        address,
        gender,
        image,
        size
      } = req.body;
  
      if (!name || !description || !years || !contact || !address || !gender || !image || !size) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
      }
  
      const match = await Match.create({
        name,
        description,
        years,
        contact,
        address,
        gender,
        image,
        size
      });
  
      // Retorna o registro criado
      res.status(201).json(match);
    } catch (error) {
      console.error('Erro ao criar registro:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
}

module.exports = { getMatch, postMatch };

