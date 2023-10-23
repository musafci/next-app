import { NextRequest, NextResponse } from "next/server";

// interface PropsData {
//     params: {id: number}
// }

// export function GET(request: NextRequest, {params}: PropsData) { // we can use props this way, but below we use inline way
export function GET(request: NextRequest, { params }: { params: {id: number} }) {
    if (params.id > 10)
        return NextResponse.json({error : 'User not found'}, {status: 404})
    return NextResponse.json({id: params.id, name: 'musa'});
}