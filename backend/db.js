
import mongoose from 'mongoose';

const mongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://rajukottari15:rajudon@cluster0.s8fjvyd.mongodb.net/ShoppingWeb?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");

    const clothCollection = mongoose.connection.db.collection("cloth_items");
    const categoryCollection = mongoose.connection.db.collection("Categories");

    const clothData = await clothCollection.find({}).toArray();
    const categoryData = await categoryCollection.find({}).toArray();

    return { clothData, categoryData };
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
};

export default mongoDB;
