import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

import dotenv from "dotenv";
dotenv.config();

async function main() {
  const bundleModuleAddress = process.env.BUNDLE_MODULE;
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  console.log('Creating NFT batch...');

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: 'Fire',
        description: 'Some Fire!',
        image: readFileSync('./assets/fire.jpg'),
        properties: {
          rarity: 'common',
          type: 'fire',
        }
      },
      supply: 50,
    },
    {
        metadata: {
          name: 'Water',
          description: 'Some Water!',
          image: readFileSync('./assets/water.jpg'),
          properties: {
            rarity: 'common',
            type: 'water',
          }
        },
        supply: 50,
      },
      {
        metadata: {
          name: 'Grass',
          description: 'Some Grass!',
          image: readFileSync('./assets/grass.jpg'),
          properties: {
            rarity: 'common',
            type: 'grass',
          }
        },
        supply: 50,
      },
      {
        metadata: {
          name: 'Earth',
          description: 'Some Earth!',
          image: readFileSync('./assets/earth.jpg'),
          properties: {
            rarity: 'uncommon',
            type: 'earth',
          }
        },
        supply: 25,
      },
      {
        metadata: {
          name: 'Light',
          description: 'Some Light!',
          image: readFileSync('./assets/light.jpg'),
          properties: {
            rarity: 'rare',
            type: 'light',
          }
        },
        supply: 10,
      },
      {
        metadata: {
          name: 'Dark',
          description: 'Some Dark!',
          image: readFileSync('./assets/dark.jpg'),
          properties: {
            rarity: 'rare',
            type: 'dark',
          }
        },
        supply: 10,
      }
  ]);

  console.log('NFTs created!')
  console.log(JSON.stringify(created, null, 2));
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}