const validateMovie = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;

  let yearString = year.toString();

  const isValidURL = (url) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    return res.status(400).json({
      error: "Faltan propiedades OBLIGATORIAS",
    });
  }
  if (yearString.length !== 4) {
    return res.status(401).json({
      error: "El año tiene que tener 4 digitos",
    });
  }
  if (rate > 10 || 0 > rate) {
    return res.status(402).json({
      error: "La clasificación tiene que ser entre 0 y 10",
    });
  }

  if (!isValidURL(poster)) {
    return res.status(403).json({
      error: "El poster tiene que ser una URL valida",
    });
  } else {
    next();
  }
};

module.exports = validateMovie;
