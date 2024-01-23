const express =require("express")
const router = express.Router()
const storeCtl = require("../controllers/store.control")
const {authorizeAdmin} =require("../services/authenticate.service")
const {imageUpload} =require("../services/file-upload")
const {validate , validateParamsId} = require("../services/validate.service")
const {addStore} =require("../validations/store.validate")

router.post("/add-store",imageUpload.single("logo") , authorizeAdmin, validate(addStore) ,storeCtl.addStore )
router.delete("/:id" , authorizeAdmin , validateParamsId,storeCtl.deleteStore)

module.exports = router