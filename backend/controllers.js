const square = (req, res) => {
  const { n } = req.body;

  if (n === undefined || Number.isNaN(Number(n))) {
    res.status(400).json({ err: 'must be a number' });
  } else {
    const nInt = Number(n);
    res.status(200).json({ n: nInt, n2: nInt * nInt });
  }
};

module.exports = { square };
