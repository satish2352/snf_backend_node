// controller.js
const Important_SNF_Project_para_Model = require('../model/Important_SNF_Project_para_model');

const post_Important_SNF_Project_para = async (req, res) => {
  try {
    const { para } = req.body;
    const newItem = new Important_SNF_Project_para_Model({ para });
    await newItem.save();
    res.status(200).send({ info: "Data Saved", Data: newItem });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const get_Important_SNF_Project_para = async (req, res) => {
  try {
    const items = await Important_SNF_Project_para_Model.find({}, 'para');
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const update_Important_SNF_Project_para = async (req, res) => {
  try {
    const { id } = req.params;
    const { para } = req.body;
    const updatedData = await Important_SNF_Project_para_Model.findByIdAndUpdate(id, { para }, { new: true });

    if (!updatedData) {
      return res.status(404).json({ error: "Data not found" });
    }

    res.status(200).json({ info: "Data Updated Successfully", Data: updatedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const delete_Important_SNF_Project_para = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Important_SNF_Project_para_Model.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ error: "Data not found" });
    }

    res.status(200).json({ info: "Data deleted successfully", Data: deletedItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { post_Important_SNF_Project_para, get_Important_SNF_Project_para, update_Important_SNF_Project_para, delete_Important_SNF_Project_para };
