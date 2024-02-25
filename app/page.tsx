import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Learn more"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/bafybeigoomwtaqaul2ebswxtg7nfh6jxqkcvczyn3pmieeuidhlpufimke`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Senchat',
  description: 'A frame telling the story of Senchat',
  openGraph: {
    title: 'Senchat',
    description: 'A frame telling the story of Senchat',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/bafybeibvho6mxjoitfxlbnecyq5e57mui4gkureflpsvw2zltnwxjtw27q/senchatlogo.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Senchat</h1>
    </>
  );
}
