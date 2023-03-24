import { ExternalLinkIcon } from '@heroicons/react/outline';
import DefaultErrorPage from 'next/error';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Meta from '@/components/Meta';
import {
  getSiteWorkspace,
  getWorkspacePaths,
} from '@/prisma/services/workspace';
import { jitsuClient } from '@jitsu/sdk-js'

const Site = ({ workspace }) => {
  const router = useRouter();
  const jitsu = jitsuClient({
    key: "js.y8cs68u245tm88812ogjbx.lexjddoo45eoapayedi1ob",
    tracking_host: "https://api.unlimitednow.site"
  });

  jitsu.id({
  });
  //track page views
  jitsu.track('mysite-spaces');

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return workspace ? (


    <>      <main className="relative flex flex-col items-center justify-center space-y-10 text-gray-800 bg-gray-50">


      <Meta title="Unlimited Now" />
      <section>
        <div className="flex flex-col justify-center flex-1 px-8 py-8 lg:py-36 md:px-12 lg:flex-none lg:px-24">
          <div>
            <div className="relative items-center gap-12 mx-auto">
              <div className="max-w-xl mx-auto text-center">
                <div>

                  <p className="text-5xl tracking-tighter text-black ">
                    I am a short heading
                  </p>
                </div>
                <div className="flex items-center justify-center w-full pt-8 mx-auto md:pt-6">
                  <form className="flex flex-col items-center justify-center max-w-sm mx-auto" action="">
                    <div className="flex flex-col w-full gap-1 mt-3 sm:flex-row">
                      <input name="email" type="email" className="block w-full px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full font-spline focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600/50 disabled:opacity-50" placeholder="Enter your email..." required=""></input>
                      <input name="site" type="hidden" value={workspace.id} className="block w-full px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full font-spline focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600/50 disabled:opacity-50" placeholder="Enter your email..." required=""></input>
                      <input name="fingerprint" type="hidden" value={workspace.hostname} className="block w-full px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full font-spline focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600/50 disabled:opacity-50" placeholder="Enter your email..." required=""></input>
                      <button type="button" className="items-center inline-flex  justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
                        <div style="position: relative"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-4 h-auto ml-2">
                          <path fillrule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" cliprule="evenodd"></path>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="justify-center mx-auto sm:max-w-lg sm:flex">
              <p className="mt-6 text-xs text-gray-500">
                By subscribing, you agree with Unwrapped’s
                <a className="text-blue-600 hover:text-black unerline" target="_blank" href="#">Terms of Service</a>
                and
                <a className="text-blue-600 hover:text-black" target="_blank" href="#">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </section>


    </main></>

  ) : (
    <>
      <Meta noIndex />
      <DefaultErrorPage statusCode={404} />
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = await getWorkspacePaths();
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { site } = params;
  const siteWorkspace = await getSiteWorkspace(site, site.includes('.'));
  let workspace = null;

  if (siteWorkspace) {
    const { host } = new URL(process.env.APP_URL);
    workspace = {
      domains: siteWorkspace.domains,
      name: siteWorkspace.name,
      hostname: `${siteWorkspace.slug}.${host}`,
    };
  }

  return {
    props: { workspace },
    revalidate: 10,
  };
};

export default Site;
