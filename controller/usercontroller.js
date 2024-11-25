import usermodel from "../models/usermodel.js";

export const User = async (req, res) => {
    try {
        // Create a new user instance with the request body
        const userData = new usermodel(req.body);
        const { email } = req.body;

        // Check if the user already exists in the database
        const userExist = await usermodel.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Save the new user data
        const savedData = await userData.save();

        // Send a success response with the saved data
        res.status(201).json(savedData);
    } catch (error) {
        console.error('Error creating user:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};





 

export const fetch = async (req, res) => {
    try {
        // Retrieve all user records from the database
        const users = await usermodel.find();

        // Check if no users are found
        if (users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }

        // Send a success response with the retrieved users
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};



export const update = async (req, res) => {
    try {
        // Get ID from request parameters
        const id = req.params.id;

        // Check if the user exists
        const userExist = await usermodel.findOne({ _id: id });
        if (!userExist) {
            return res.status(404).json({ message: "User does not exist" });
        }

        // Update the user
        const updatedUser = await usermodel.findByIdAndUpdate(id, req.body, { new: true });

        // Send the updated user data in the response
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};



export const remove = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await usermodel.findOne({ _id: id });
        if (!userExist) {
            return res.status(404).json({ message: "User does not exist" });
        }

        await usermodel.findByIdAndDelete(id)

        res.status(201).json({message:"deleted sucessfully"})


        
    } catch (error) {
        console.error('Error updating user:', error.message);
        res.status(500).json({ error: 'Internal server error' });
        
    }
}