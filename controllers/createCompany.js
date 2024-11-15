import Company from "../Models/company.js";

export const createCompany = async (req, res) => {
  try {
    const { name, location, industry, email } = req.body;
    const company = new Company({
      name,
      location,
      industry,
      email,
    });
    const savedCompany = await company.save();
    res
      .status(201)
      .json({ company: savedCompany, message: "company created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error while creating company" });
  }
};
export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find().populate("reviews").exec();
    res.json({
      companies,
    });
  } catch (error) {
    return res.status(400).json({
      error: "error while fetching post",
    });
  }
};
export const getCompany = async (req, res) => {
  try {
    const getCompany = await userModel.find();
    res.json({
      getCompany,
    });
  } catch (error) {
    res.json({
      error: "Cannot Fetch Data",
    });
  }
};
