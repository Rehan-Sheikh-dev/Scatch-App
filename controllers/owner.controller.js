import ownerModel from '../models/owner.model.js';
import bcrypt from "bcrypt"
import generateToken from '../utils/generateToken.js';

const ownerController = async (req, res) => {

  const owners = await ownerModel.find();
  if (owners.length > 0) {
    return res.status(500).send({ message: "You don't have permission to create more than one owner" });
  }
  const { fullname, email, password } = req.body;
   bcrypt.genSalt(12, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      const createdOwner = await ownerModel.create({
        fullname,
        email,
        password: hash,
      })
      const token = generateToken(createdOwner);
      res.cookie("token", token);
      res.status(200).send({
        message: "Owner created successfully", data: createdOwner
      })
    })
  })
}

export default ownerController;