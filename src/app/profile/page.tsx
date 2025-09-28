import { getAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import ProfileForm from "@/components/profile-form";

export default async function ProfilePage() {
    const user = await getAuth();

    if (!user) {
        redirect('/login');
    }

    return <ProfileForm user={user} />;
}
