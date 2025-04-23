import type { Schema, Struct } from '@strapi/strapi';

export interface HomeSections extends Struct.ComponentSchema {
  collectionName: 'components_home_sections';
  info: {
    description: '';
    displayName: 'Sections';
  };
  attributes: {
    content: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    imageLink: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.sections': HomeSections;
    }
  }
}
