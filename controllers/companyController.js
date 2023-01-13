const Company = require("../models/company");

exports.index = async (req, res, next) => {
  //   res.send("company data");

  const company = await Company.findOne();

  res.status(200).json({
    data: company,
  });
};
