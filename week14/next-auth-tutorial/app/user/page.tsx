import { getServerSession } from "next-auth"


export default async function () {
    const session = await getServerSession();
    return (
        <div>
            User Component. Test
            {JSON.stringify(session)}
        </div>
    )
}