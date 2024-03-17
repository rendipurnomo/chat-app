import User from "../models/user.model.js"


export const getUserForSidebar = async(req, res) => {
  try {
    const loggedInUserId = req.user._id
    const filteredUsers = await User.find({
      _id: {
        $ne: loggedInUserId
      }
    }).select("-password")
    res.status(200).json(filteredUsers)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Something went wrong" })
  }
}

export const updateUser = async(req, res) => {
  try {
    const {id} = req.params
    const {fullName, username, profilePicture} = req.body
    const user = await User.findByIdAndUpdate(id, {fullName, username, profilePicture}, {new: true})
    res.status(200).json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Something went wrong" })
  }
}