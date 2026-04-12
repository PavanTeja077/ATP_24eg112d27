const mongoose = require("mongoose");
const Employee = require("./models/Employee");
require("dotenv").config();
const fs = require('fs');

async function seedData() {
  try {
    console.log("Connecting to MongoDB at", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to MongoDB.");

    // Create a new employee
    const newEmployee = new Employee({
      name: "Alice Smith",
      email: "alice.smith@example.com",
      mobile: "1231231234",
      designation: "Frontend Developer",
      companyName: "Tech Innovations"
    });

    const savedEmployee = await newEmployee.save();
    console.log("-----------------------------------------");
    console.log("Created Employee Data in MongoDB:");
    console.log(savedEmployee);
    console.log("-----------------------------------------");

    const empId = savedEmployee._id.toString();

    // Now, update req.http to contain the actual ID for PUT and DELETE requests
    let reqContent = fs.readFileSync('req.http', 'utf-8');
    
    // Replace the PUT request ID 
    reqContent = reqContent.replace(/PUT\s+http:\/\/localhost:5000\/api\/employees\/update\/[^\n\r]*/, `PUT http://localhost:5000/api/employees/update/${empId}`);
    
    // Replace the DELETE request ID
    reqContent = reqContent.replace(/DELETE\s+http:\/\/localhost:5000\/api\/employees\/delete\/[^\n\r]*/, `DELETE http://localhost:5000/api/employees/delete/${empId}`);

    fs.writeFileSync('req.http', reqContent);
    console.log("Successfully updated req.http to include the new active Employee ID:", empId);

  } catch (error) {
    console.error("❌ Error running script:", error.message);
  } finally {
    console.log("Disconnecting from MongoDB...");
    await mongoose.disconnect();
  }
}

seedData();
