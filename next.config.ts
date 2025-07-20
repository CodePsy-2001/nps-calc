import type { NextConfig } from 'next'
import { MoniconPlugin } from '@monicon/webpack'
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new MoniconPlugin({
        collections: ['radix-icons'],
      }),
    )

    return config
  },
}

export default withBundleAnalyzer(nextConfig)
