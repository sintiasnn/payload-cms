import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Page Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug',
      admin: {
        description: 'URL-friendly version of the title (e.g., about-us, contact)',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Page Content',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Featured Image',
    },
    {
      name: 'metaTitle',
      type: 'text',
      label: 'Meta Title (SEO)',
      admin: {
        description: 'Override the page title for SEO purposes',
      },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'Meta Description (SEO)',
      admin: {
        description: 'Brief description for search engines (150-160 characters)',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
    },
  ],
}
