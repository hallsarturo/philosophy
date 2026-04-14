import ProfileHeading from '@/components/profile-page/ProfileHeading';
import ProfileStats from '@/components/profile-page/ProfileStats';

export default function ProfilePage() {
    return (
        <div className="min-h-screen mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className="flex flex-col gap-8 mx-auto max-w-4xl">
                <ProfileHeading />
                <ProfileStats />
            </div>
        </div>
    );
}
