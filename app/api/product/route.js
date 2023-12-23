import connectDB from "@/db/Database";
import ClothingProduct from "@/models/Product";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  await connectDB();
  const { name, price, description, category, mainImage } = await req.json();
  const clothingProduct = await ClothingProduct.create({
    name,
    price,
    description,
    category,
    mainImage,
  });
  return NextResponse.json({
    status: 201,
    message: "Product created successfully",
    data: clothingProduct,
  });
};