import { user } from "@/utlis/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = await params;
    const userData = user.filter((item) => item.id == id);
    return NextResponse.json(
        userData.length==0?{result:"No Data Found", success:false}:{result:userData[0], success:true},{ status: 200 });
}