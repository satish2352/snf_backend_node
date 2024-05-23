const express = require("express");
const contactDataRouter = express.Router();
const { addContactData, getContactData, deleteContactForm, updateContactData } = require("../controller/contact-data_controller")

contactDataRouter.post("/contact-data", addContactData);
contactDataRouter.get("/get-contact-data", getContactData);
contactDataRouter.delete('/delete/:id', deleteContactForm);
contactDataRouter.put('/update/:_id', updateContactData);

module.exports = contactDataRouter;
