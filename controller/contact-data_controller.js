const contactdataModel = require('../model/contact-data_model')
const { ObjectID } = require('mongodb');
const addContactData = async (req, res) => {
    const { name, email, contact, subject, message } = req.body;

    try {
        // Check if the email already exists in the database
        const existingNote = await contactdataModel.findOne({ email });

        if (existingNote) {
            // Email already in use, return a 409 Conflict status
            return res.status(409).json({ message: 'Email is already in use' });
        }

        // If the email is unique, proceed with adding the data to the database
        const newNote = new contactdataModel({
            name,
            email,
            contact,
            subject,
            // enquiryType,
            message,
        });

        await newNote.save();
        res.status(201).json(newNote);
    } catch (err) {
        console.log(err);
        res.status(500).json({ mess: 'Something went wrong' });
    }
};

// const addContactData = async (req, res) => {
//     const { name, email, contact, subject, enquiryType, message } = req.body;
//     const newNote = new contactdataModel({
//         name: name,
//         email: email,
//         contact: contact,
//         subject:subject,
//         enquiryType:enquiryType,
//         message:message
//     });
//     try {
//         await newNote.save();
//         res.status(201).json(newNote);
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ mess: "Something went wrong" });
//     }
// }
const getContactData = async (req, res) => {
    try {
        const notes = await contactdataModel.find({ userId: req.userId });
        res.status(200).json(notes);
    } catch (err) {
        console.log(err);
        res.status(500).json({ mess: "Something went wrong" });
    }
}

const deleteContactForm = async (req, res) => {
    try {
        const productId = req.params.id;
        console.log("Deleting record with ID:", productId);

        const deletedDetails = await contactdataModel.findByIdAndDelete(productId);

        if (!deletedDetails) {
            return res.status(404).json({ error: 'Data not found' });
        }

        console.log("Record deleted:", deletedDetails);
        res.status(200).json({ info: " Delete Data ", Data: deletedDetails });
    } catch (error) {
        console.error("Error deleting record:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



//   const updateContactData = async (req, res) => {
//     try {
//       const productId = req.params._id; // Assuming you have a parameter named 'id' in your route
//       const updateData = {
//         name: req.body.imageName,
//         email: req.body.text,
//         contact: req.body.text,
//         subject: req.body.text,
//         enquiryType: req.body.text,
//         message: req.body.text
//         // const { name, email, contact, subject, enquiryType, message } = req.body;

//         // Cover_Letter: req.files.Cover_Letter[0].filename,
//         // CV: req.files.CV[0].filename
//       };
//       const updatedDetails = await contactdataModel.findByIdAndUpdate(
//         productId,
//         updateData,
//         { new: true }
//       );
//       res.status(200).send({ info: "Update Data", updatedDetails },);
//     } catch (error) {
//       console.log(error);
//     }
//   };
const updateContactData = async (req, res) => {
    try {
        const productId = req.params._id;
        const updatedData = req.body; // Assuming the updated data is sent in the request body

        // Use findByIdAndUpdate to update the data
        const updatedDetails = await contactdataModel.findByIdAndUpdate(productId, updatedData, { new: true });

        if (!updatedDetails) {
            return res.status(404).json({ error: 'Data not found' });
        }

        res.status(200).json({ info: 'Update successful', Data: updatedDetails });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
module.exports = { addContactData, getContactData, deleteContactForm, updateContactData }