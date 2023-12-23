// Import necessary modules...
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';
import Carousel from '../../../../components/Carousel';
import getResults from '../../../../utils/cachedImages';
import cloudinary from '../../../../utils/cloudinary';
import getBase64ImageUrl from '../../../../utils/generateBlurPlaceholder';
import type { ImageProps } from '../../../../utils/types';
import { getSiteWorkspace } from '../../../../../prisma/services/workspace';
import { useRouter } from 'next/router';

const PhotoPage: NextPage<{ currentPhoto: ImageProps }> = ({ currentPhoto }) => {
  const router = useRouter();
  const { photoId } = router.query;
  const index = Number(photoId);

  const currentPhotoUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2560/${currentPhoto.public_id}.${currentPhoto.format}`;

  return (
    <>
      <Head>
        <title>Next.js Conf 2022 Photos</title>
        <meta property="og:image" content={currentPhotoUrl} />
        <meta name="twitter:image" content={currentPhotoUrl} />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">
        <Carousel currentPhoto={currentPhoto} index={index} />
      </main>
    </>
  );
};

export default PhotoPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const results = await getResults();

  const reducedResults: ImageProps[] = results.resources.map((result, i) => ({
    id: i,
    height: result.height,
    width: result.width,
    public_id: result.public_id,
    format: result.format,
  }));

  const { site, photoId } = context.params;
  const siteWorkspace = await getSiteWorkspace(site, site.includes('.'));

  const requestedIndex = Number(photoId);
  if (isNaN(requestedIndex) || requestedIndex < 0 || requestedIndex >= reducedResults.length) {
    // Handle the case when `context.params.photoId` is not a valid index
    return {
      notFound: true,
    };
  }

  const currentPhoto = reducedResults.find((img) => img.id === requestedIndex);
  currentPhoto.blurDataUrl = await getBase64ImageUrl(currentPhoto);

  return {
    props: {
      currentPhoto,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const site = "your-site"; // replace with your default site
  const siteWorkspace = await getSiteWorkspace(site, site.includes('.'));

  const results = await cloudinary.v2.search
    .expression(`folder:${siteWorkspace.slug}/*`)
    .sort_by('public_id', 'desc')
    .max_results(400)
    .execute();

  let fullPaths = [];
  for (let i = 0; i < results.resources.length; i++) {
    fullPaths.push({ params: { photoId: i.toString() } });
  }

  return {
    paths: fullPaths,
    fallback: false,
  };
};
