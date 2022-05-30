import PostMessage from "../model/postMessage.js";

export const getPosts = async (req, res) => {
    try{
      const postMessages = await postMessage.find();
      console.log(postMessage);
      res.status(200).json(postMessages);
    }catch (error){
      res.status(404).json({message: error.message});
    }
//   res.send("THIS WORKS");
};

export const createPosts = async (req, res) => {
    const body = req.body;
    const newPost = new PostMessage(post);

    try{
     await newPost.save();

     res.status(201).json(newPost);
    }catch (error){
     res.status(409).json({message: error.message});
    }
    // res.send('Post Creation');
}


