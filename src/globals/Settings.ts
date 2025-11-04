import type { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  label: 'Site Settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              name: 'siteName',
              type: 'text',
              required: true,
              label: 'Site Name',
            },
            {
              name: 'siteDescription',
              type: 'textarea',
              label: 'Site Description',
            },
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              label: 'Site Logo',
            },
            {
              name: 'favicon',
              type: 'upload',
              relationTo: 'media',
              label: 'Favicon',
            },
          ],
        },
        {
          label: 'Contact',
          fields: [
            {
              name: 'email',
              type: 'email',
              label: 'Contact Email',
            },
            {
              name: 'phone',
              type: 'text',
              label: 'Contact Phone',
            },
            {
              name: 'address',
              type: 'textarea',
              label: 'Physical Address',
            },
          ],
        },
        {
          label: 'Social Media',
          fields: [
            {
              name: 'socialMedia',
              type: 'group',
              label: 'Social Media Links',
              fields: [
                {
                  name: 'facebook',
                  type: 'text',
                  label: 'Facebook URL',
                },
                {
                  name: 'twitter',
                  type: 'text',
                  label: 'Twitter URL',
                },
                {
                  name: 'instagram',
                  type: 'text',
                  label: 'Instagram URL',
                },
                {
                  name: 'linkedin',
                  type: 'text',
                  label: 'LinkedIn URL',
                },
                {
                  name: 'youtube',
                  type: 'text',
                  label: 'YouTube URL',
                },
              ],
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'defaultMetaTitle',
              type: 'text',
              label: 'Default Meta Title',
            },
            {
              name: 'defaultMetaDescription',
              type: 'textarea',
              label: 'Default Meta Description',
            },
            {
              name: 'ogImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Default OG Image',
              admin: {
                description: 'Default image for social media sharing',
              },
            },
          ],
        },
      ],
    },
  ],
}
