import type { Schema, Struct } from '@strapi/strapi';

export interface HomeSection1 extends Struct.ComponentSchema {
  collectionName: 'components_home_section1s';
  info: {
    description: '';
    displayName: 'Section1';
  };
  attributes: {
    content: Schema.Attribute.Text;
    heading: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    imageLilnk: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.section1': HomeSection1;
    }
  }
}
