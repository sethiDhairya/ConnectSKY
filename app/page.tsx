import WhatsAppChat from '@/components/WhatsAppChat';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#0b141a]">
      {!user && (
        // <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl h-[80vh]">
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-full p-8">
            <h2 className="text-2xl font-semibold text-[#075e54] mb-6">To use ConnectSKY on your computer:</h2>
            <ul className="text-white mb-8 list-disc pl-5 space-y-2">
              <li>Login to use your account </li>
            </ul>
            <Link
              href="/login"
              className="py-2 px-8 rounded-md bg-[#00a884] hover:bg-[#25d366] text-white font-bold transition"
            >
              Login
            </Link>
          </div>
        // </div>
      )}
      {/* {user && <WhatsAppChat user={user} />} */}
    </div>
  );
}