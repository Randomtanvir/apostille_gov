import { NextResponse } from "next/server";
import { uploadToCloudinary } from "@/utils/cloudinary";
import connectMongo from "@/db/db";
import Application from "@/model/data.model";

export async function POST(request) {
  try {
    await connectMongo();
    console.log("✅ Connected to MongoDB");
    const body = await request.formData();

    // Optional QR code upload
    let QRcodeUrl = "";
    const qrCodeFile = body.get("QRcode");
    if (qrCodeFile && typeof qrCodeFile === "object" && qrCodeFile.size > 0) {
      QRcodeUrl = await uploadToCloudinary(qrCodeFile, "QRcode");
    }

    // Multiple images upload — only if files exist
    const imageFiles = body
      .getAll("image")
      .filter((file) => typeof file === "object" && file.size > 0);

    const imageArray = await Promise.all(
      imageFiles.map(async (file) => {
        const url = await uploadToCloudinary(file, "Application");
        return url;
      })
    );

    // Build application data
    const applicationData = {
      country: body.get("country") || "",
      signed: body.get("signed") || "",
      capacity: body.get("capacity") || "",
      stamp: body.get("stamp") || "",
      date: body.get("date") || "",
      signDate: body.get("signDate") || "",
      QRcode: QRcodeUrl, // if no QR uploaded, remains empty string
      image: imageArray, // if no images, empty array
    };

    // Save to DB
    const application = new Application(applicationData);
    await application.save();

    return NextResponse.json(
      { message: "✅ Application saved successfully", application },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Error in POST /applications:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(_request) {
  try {
    await connectMongo();
    const applications = await Application.find({});
    return NextResponse.json(
      { message: "✅ Applications fetched successfully", applications },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error in GET /applications:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
