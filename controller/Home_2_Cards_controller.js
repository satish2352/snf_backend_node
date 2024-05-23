// controller.js
const Home_2_Cards_Model = require('../model/Home_2_Cards_model');
const upload = require('../multer');

// Express middleware to handle file uploads
const post_Home_2_Cards = (req, res) => {
  const newItem = new Home_2_Cards_Model({
    name2: req.body.name2,
    para2: req.body.para2,
    imageUrl: req.file.filename
  });
  newItem.save();
  res.status(200).send({ info: "Save Data", Data: newItem });
};


// Fetch items
const get_Home_2_Cards = async (req, res) => {
  try {
    const items = await Home_2_Cards_Model.find({}).exec();
    res.status(200).json(items);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

// const update_Home_2_Cards = async (req, res) => {
//   try {
//     const { id } = req.params;
//     // Find the existing item
//     const existingItem = await Home_2_Cards_Model.findById(id);

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


// const update_Home_2_Cards = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedData = await Home_2_Cards_Model.findByIdAndUpdate(id, {
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
const update_Home_2_Cards = async (req, res) => {
  try {
    const { id } = req.params;
    const updateFields = {};

    // Update name if provided
    if (req.body.name2) {
      updateFields.name2 = req.body.name2;
    }

    if (req.body.para2) {
      updateFields.para2 = req.body.para2;
    }

    // Update imageUrl if file is uploaded
    if (req.file) {
      updateFields.imageUrl = req.file.filename;
      // updateFields.imageUrl = `uploads/${req.file.filename}`;
    }

    // Perform the update
    const updatedData = await Home_2_Cards_Model.findByIdAndUpdate(id, updateFields, { new: true });

    if (!updatedData) {
      return res.status(404).json({ error: "Data not found" });
    }

    res.status(200).json({ info: "Item Updated Successfully", Data: updatedData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


const delete_Home_2_Cards = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Home_2_Cards_Model.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ error: "Data not found" });
    }

    res.status(200).json({ info: "Item deleted successfully", Data: deletedItem });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { post_Home_2_Cards, get_Home_2_Cards, update_Home_2_Cards, delete_Home_2_Cards };




