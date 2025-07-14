import userModel from '../models/userModel.js';

export const getUserData = async (req, res) => {
  try {
    const userId = req.user;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.json({
      success: true,
      userData: {
        name: user.name,
        email: user.email,
        isAccountVerifired: user.isAccountVerifired
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
