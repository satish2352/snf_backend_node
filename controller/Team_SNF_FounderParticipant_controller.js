// controller.js
const FounderParticipantsModel = require('../model/Team_SNF_FounderParticipant_model');
const upload = require('../multer');

// Express middleware to handle file uploads
const postFounderParticipants = (req, res) => {
  const newItem = new FounderParticipantsModel({
    name: req.body.name,
    imageUrl: req.file.filename
  });
  newItem.save();
  res.status(200).send({ info: "Save Data", Data: newItem });
};


// Fetch items
const getFounderParticipants = async (req, res) => {
  try {
    const items = await FounderParticipantsModel.find({}).exec();
    res.status(200).json(items);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

// const updateFounderParticipants = async (req, res) => {
//   try {
//     const { id } = req.params;
//     // Find the existing item
//     const existingItem = await FounderParticipantsModel.findById(id);

//     if (!existingItem) {
//       return res.status(404).json({ error: "Data not found" });
//     }

//     else{
//  // Update name and image
//  existingItem.name = req.body.name;
//  existingItem.imageUrl = req.file ? req.file.filename : existingItem.imageUrl;

//  // Save the updated item
//  const updatedData = await existingItem.save();

//  res.status(200).json({ info: "Name and ImageUrl Updated Successfully...!", Data: updatedData });
//     }

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };


// const updateFounderParticipants = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedData = await FounderParticipantsModel.findByIdAndUpdate(id, {
//       name : req.body.name,
//       imageUrl: req.file ? `uploads/${req.file.filename }`: undefined,
//     }, { new: true });

//     if (!updatedData) {
//       return res.status(404).json({ error: "Data not found" });
//     }

//     res.status(200).json({ info: "Image Updated Successfully...!", Data: updatedData });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
const updateFounderParticipants = async (req, res) => {
  try {
    const { id } = req.params;
    const updateFields = {};

    // Update name if provided
    if (req.body.name) {
      updateFields.name = req.body.name;
    }

    // Update imageUrl if file is uploaded
    if (req.file) {
      updateFields.imageUrl = req.file.filename;
      // updateFields.imageUrl = `uploads/${req.file.filename}`;
    }

    // Perform the update
    const updatedData = await FounderParticipantsModel.findByIdAndUpdate(id, updateFields, { new: true });

    if (!updatedData) {
      return res.status(404).json({ error: "Data not found" });
    }

    res.status(200).json({ info: "Item Updated Successfully", Data: updatedData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


const deleteFounderParticipants = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await FounderParticipantsModel.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ error: "Data not found" });
    }

    res.status(200).json({ info: "Item deleted successfully", Data: deletedItem });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { postFounderParticipants, getFounderParticipants, updateFounderParticipants, deleteFounderParticipants };




