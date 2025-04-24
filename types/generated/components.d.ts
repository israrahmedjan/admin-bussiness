import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralSeo extends Struct.ComponentSchema {
  collectionName: 'components_general_seos';
  info: {
    description: '';
    displayName: 'SEO';
  };
  attributes: {
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
  };
}

export interface HomeRow2 extends Struct.ComponentSchema {
  collectionName: 'components_home_row2s';
  info: {
    displayName: 'Row2';
  };
  attributes: {
    btn: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Get a Ride'>;
    content: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeSection1 extends Struct.ComponentSchema {
  collectionName: 'components_home_section1s';
  info: {
    description: '';
    displayName: 'Row1';
  };
  attributes: {
    btn: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Get a Ride'>;
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }> &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    image: Schema.Attribute.Media<'files' | 'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.seo': GeneralSeo;
      'home.row2': HomeRow2;
      'home.section1': HomeSection1;
    }
  }
}
