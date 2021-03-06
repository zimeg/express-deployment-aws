// TODO: replace types with the req/res types from AWS and express
const square = (req: any, res: any) => {
  const { n } = req.params;
  if (Number.isNaN(n)) res.status(400).json({ err: 'must be a number' });
  else {
    const nInt = Number(n);
    res.status(200).json({ n: nInt, 'n^2': nInt * nInt });
  }
};

module.exports = { square };
