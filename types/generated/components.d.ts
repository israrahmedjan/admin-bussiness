import type { Schema, Struct } from '@strapi/strapi';

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
    content: Schema.Attribute.Text;
    heading: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    image: Schema.Attribute.Media<'files' | 'images'>;
    imageLilnk: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.row2': HomeRow2;
      'home.section1': HomeSection1;
    }
  }
}
