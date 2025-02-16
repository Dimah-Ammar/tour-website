import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config(); // Load environment variables

const app = express();
//const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection Function (With dbName)
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/", {
      dbName: "tourBooking", // Include the database name
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" Connected to 'tourBooking' database");
  } catch (error) {
    console.error(" MongoDB connection error:", error.message);
    process.exit(1); // Stop the server if connection fails
  }
};

// Call the database connection function before starting the server
connectDB().then(() => {
  app.listen(5000, '0.0.0.0', () => {
    console.log("Server running on port 5000");
  });
});

// Define Schema & Model
const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
    match: /^[a-zA-Z\s]+$/, // Only letters and spaces
  },
  email: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  phone: {
    type: Number,
    required: true,
    match: /^\d{11}$/, // Exactly 11 digits
  },
  adults: {
    type: Number,
    required: true,
    min: 1,
    max: 9,
  },
  children: {
    type: Number,
    default: 0,
    min: 0,
    max: 9,
  },
  payment: {
    type: String,
    required: true,
    enum: ["mastercard", "visa"], // Only these two values allowed
  },
  tour: {
    type: String,
    required: true,
    enum: ["perez", "hardrock", "matheson"], // Only these three values allowed
  },
});

const Book = mongoose.model("books", BookingSchema);
Book.createIndexes();

const TourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  facilities: [{ type: String, required: true }],
});
const Tour = mongoose.model("tours", TourSchema);

const ExploreSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  priceRange: {
    type: String,
    required: true,
  },
});

const Explore = mongoose.model("search", ExploreSchema);
//Explore.createIndexes();
// Test Route
app.get("/", (req, res) => {
  res.send("App is Working");
});

app.post("/book-tour", async (req, res) => {
  try {
    const { name, email, phone, adults, children, payment, tour } = req.body;

    // Check if all required fields are provided
    if (!name || !email || !phone || !adults || !payment || !children || !tour) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save Booking to Database
    const newBooking = new Book({ name, email, phone, adults, children, payment, tour});
    let result = await newBooking.save();
    result = result.toObject();

    res.status(201).json({
      message: "Booking successful",
      booking: result,
    });

    console.log("New booking:", result);
  } catch (e) {
    res.send("Something Went Wrong");
  }
});

app.put("/update-booking/:email", async (req, res) => {
  try {
    const { email } = req.params; 
    const updatedData = req.body; 

    // Find and update the booking using email
    const updatedBooking = await Book.findOneAndUpdate(
      { email }, // Find by email
      updatedData, // New data to update
      { new: true } // Return updated document
    );

    // If no booking found, return error
    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found for this email" });
    }

    res.status(200).json({
      message: "Booking updated successfully",
      updatedBooking,
    });

  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
});

const tours = [
  {
    name: "Perez Art Museum",
    city: "Miami",
    description: "Explore Perez Art Museum officially known as Jorge M. Perez Art Museum....",
    price: "$50 - $200",
    duration: "3 days",
    startDate: "2025-05-10",
    endDate: "2025-05-12",
    facilities: ["Guide", "Meals", "Transport"]
  },
  {
    name: "Hard Rock Stadium",
    city: "Miami",
    description: "Hard Rock Stadium is a multi-purpose stadium located in Miami Gardens,.....",
    price: "$50 - $80",
    duration: "1 day",
    startDate: "2025-06-01",
    endDate: "2025-06-01",
    facilities: ["Transport", "Meal"]
  },
  {
    name: "Matheson Hammock Park",
    city: "Miami",
    description: "Matheson Hammock Park is a 630 acres urban park in metropolitan Miami.....",
    price: "$50 - $200",
    duration: "3 days",
    startDate: "2025-07-15",
    endDate: "2025-07-17",
    facilities: ["Resort", "Transport", "Meals"]
  }
];

// Insert data into MongoDB
const insertData = async () => {
  try {
    const existingTours = await Tour.countDocuments();
    if (existingTours === 0) {
      await Tour.insertMany(tours);
      console.log("Sample tours added to database!");
    } else {
      console.log("Tours already exist in the database. Skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting tours:", error);
  }
};

insertData();

app.get("/get-tours/:city", async(req, res) =>{
  try{
    const{city}= req.params;
  
  const fetchedTours = await Tour.find(
    {city},
  );
  if(fetchedTours.length === 0)
  {
    return res.status(404).json({message: "No matched tour found for City"});
  }
  res.status(200).json(fetchedTours);
}
catch(error){
  res.status(500).json({message:"Something went wrong", error: error.message});
}
});

app.post("/explore-tour", async(req, res)=>{
  try{
    const { location, date, priceRange} = req.body;

    // Check if all required fields are provided
    if (!location || !date || !priceRange) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newExplore = new Explore({ location, date, priceRange});
    let result = await newExplore.save();
    result = result.toObject();

    res.status(201).json({
      message: "Explore successful",
      explore: result,
    });

    console.log("New Explore:", result);
  } catch (e) {
    res.send("Something Went Wrong");
  }
})


