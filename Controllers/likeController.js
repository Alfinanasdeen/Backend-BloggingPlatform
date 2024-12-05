import Like from "../Models/Like.js";

/* ADD LIKE */
export const addLike = async (req, res) => {
  try {
    const { blogId, user } = req.body;
    const existingLike = await Like.findOne({ blogId, user });
    if (existingLike) return res.status(400).json({ message: "Already liked." });

    const newLike = new Like({ blogId, user });
    const savedLike = await newLike.save();
    res.status(201).json(savedLike);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* REMOVE LIKE */
export const removeLike = async (req, res) => {
  try {
    const { blogId, user } = req.body;
    await Like.findOneAndDelete({ blogId, user });
    res.status(200).json({ message: "Like removed successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
