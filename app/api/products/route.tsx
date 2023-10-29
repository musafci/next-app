import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// data fetching
export async function GET(request: NextRequest) {
    const products = await prisma.products.findMany()
    return NextResponse.json(products);
}


// data store
export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400})

    const product = await prisma.products.create({
        data: {
            name : body.name,
            category: body.category,
        }
    })

    return NextResponse.json(product, {status: 201})
}
