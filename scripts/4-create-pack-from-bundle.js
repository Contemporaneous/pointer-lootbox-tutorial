import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

import dotenv from "dotenv";
dotenv.config();

async function main() {
  const bundleModuleAddress = process.env.BUNDLE_MODULE; 
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  const packModuleAddress = process.env.PACK_MODULE;
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Getting all NFTs from bundle...');
  const nftsInBundle = await bundleModule.getAll();

  console.log('NFTs in bundle:');
  console.log(nftsInBundle);

  console.log('Creating a pack containing the NFTs from bundle...');
  const created = await packModule.create({
    assetContract: bundleModuleAddress,
    metadata: {
      name: 'Dope Types Pack!',
      image: readFileSync('./assets/colours.jpg'),
    },
    assets: nftsInBundle.map(nft => ({
      tokenId: nft.metadata.id,
      amount: nft.supply,
    })),
    rewardsPerOpen: 5,
  });

  console.log('Pack created!')
  console.log(created);
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}