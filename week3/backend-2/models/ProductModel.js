import { Schema, model } from "mongoose"

// create product schema
const productSchema = new Schema(
  {
    productID: {
      type: Number,
      required: [true, "product id is required"]
    },
    productName: {
      type: String,
      required: [true, "Product name is required"]
    },
    price: {
      type: Number,
      min: [10000, "Min price is 10k"],
      max: [50000, "max price is 50k"]
    },
    brand: {
      type: String,
      required: [true, "Brand is required"]
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

export const ProductModel = model("product", productSchema)