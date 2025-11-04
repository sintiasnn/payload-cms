import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'category', 'status', 'publishedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Post Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug',
      admin: {
        description: 'URL-friendly version of the title',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Excerpt',
      admin: {
        description: 'Short summary of the post (for previews)',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Post Content',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Featured Image',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      label: 'Author',
      admin: {
        description: 'The author of this post',
      },
    },
    {
      name: 'category',
      type: 'select',
      options: [
        {
          label: 'News',
          value: 'news',
        },
        {
          label: 'Tutorial',
          value: 'tutorial',
        },
        {
          label: 'Product',
          value: 'product',
        },
        {
          label: 'Technology',
          value: 'technology',
        },
      ],
      label: 'Category',
    },
    {
      name: 'tags',
      type: 'text',
      label: 'Tags',
      admin: {
        description: 'Comma-separated tags (e.g., react, javascript, tutorial)',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Published Date',
      admin: {
        description: 'When this post was/will be published',
      },
    },
    {
      name: 'metaTitle',
      type: 'text',
      label: 'Meta Title (SEO)',
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'Meta Description (SEO)',
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
