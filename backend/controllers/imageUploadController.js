const cloudinary = require("cloudinary").v2;
const User = require("../models/User");
const Company = require("../models/Company");
const catchAsync = require("../utils/catchAsync");

function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}


// function to upload cloudinary 
async function uploadFileToCloudinary(file, folder, quality) {
    const options = {
        folder: folder,
        resource_type: "auto",

        // these 3 lines will help to keep the original filename in the database
        public_id: file.name,
        use_filename: true,
        unique_filename: false
    };

    console.log("temp file path", file.tempFilePath);

    if (quality) {
        options.quality = quality;
    }

    return await cloudinary.uploader.upload(file.tempFilePath, options); // main code for uploading
}

exports.imageUpload = catchAsync(async (req, res, next) => {
    let Model = "";
    if (req.user.role === "recruiter") {
        Model = Company;
    } else {
        Model = User;
    }
    // Check if file is present
    if (!req.files.imageFile) {
        return res.status(400).json({
            success: false,
            message: "No file uploaded",
        });
    }

    const file = req.files.imageFile;


    const supportedTypes = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".")[1].toLowerCase();

    if (!isFileTypeSupported(fileType, supportedTypes)) {
        return res.status(400).json({
            success: false,
            message: "File format not supported",
        });
    }

    // Uploading to Cloudinary
    console.log("Uploading to Cloudinary");
    const response = await uploadFileToCloudinary(file, "FindIntern");
    console.log(response);

    // Update profileImgUrl for the user
    const updatedUser = await Model.findByIdAndUpdate(
        req.user.id,
        { profileImgUrl: response.secure_url },
        { new: true }
    );

    res.json({
        success: true,
        imageUrl: response.secure_url,
        message: "Image Successfully Uploaded and User Profile Updated",
        user: updatedUser,
    });
});
