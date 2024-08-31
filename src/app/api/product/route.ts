import { productData } from "@/constants/data"
import { NextResponse } from "next/server"


export const GET = () => {
      return NextResponse.json({
            name: productData,
            status: "success",
            message: "allow"
      })
}