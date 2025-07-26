import Profile from './_components/Profile';
import { getProfile } from '../../../../actions/onboarding';

async function Page() {
  const profile = await getProfile();
  if(!profile) console.log("Error Fetching user Profile");
  return (
    <div>
      {profile && <Profile profile={profile} />}
    </div>
  )
}

export default Page
