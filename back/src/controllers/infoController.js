const infoService = require("../services/infoServices");

const getInfo = async (req, res) => {
  const info = await infoService.getAllInfo();
  res.status(200).json(info);
};

const createAllInfo = async (req, res) => {
  const { oscar, description, streaming, posterInfo, saga } = req.body;

  try {
    await infoService.createInfo({
      oscar,
      description,
      streaming,
      posterInfo,
      saga,
    });
    res.status(201).json({
      message: "Información creada correctamente",
    });
  } catch (error) {
    return res.status(401).json({
      error: "Error al cargar la informacion",
    });
  }
};

module.exports = { getInfo, createAllInfo };
