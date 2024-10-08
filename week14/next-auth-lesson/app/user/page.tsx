import { Appbar } from "@/components/Appbar";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/auth";

export default async function() {
    const session = await getServerSession(NEXT_AUTH);
    return (
        <div>
            <Appbar />
            <div className="justify-content text-center">
                User component
            </div>
            {JSON.stringify(getServerSession)}
        </div>
    )
}