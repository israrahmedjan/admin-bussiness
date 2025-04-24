import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralFooter extends Struct.ComponentSchema {
  collectionName: 'components_general_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    copyright: Schema.Attribute.Text;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GeneralHeader extends Struct.ComponentSchema {
  collectionName: 'components_general_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    faviconIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    siteDescription: Schema.Attribute.Text;
    siteName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Enter Project Name'>;
  };
}

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
    description: '';
    displayName: 'Row2';
  };
  attributes: {
    btn: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Get a Ride'>;
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    icon1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon1Data: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'over 2000 years old. Richard McClintoc It is a long established'>;
    icon2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon2Data: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'over 2000 years old. Richard McClintoc It is a long established'>;
    icon3: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    icon3Data: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'over 2000 years old. Richard McClintoc It is a long established'>;
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

export interface PaymentModelRow1 extends Struct.ComponentSchema {
  collectionName: 'components_payment_model_row1s';
  info: {
    displayName: 'Row1';
  };
  attributes: {
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<' Why do we use it?'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface UserRow1 extends Struct.ComponentSchema {
  collectionName: 'components_user_row1s';
  info: {
    displayName: 'Row1';
  };
  attributes: {
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it?'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface UserRow2 extends Struct.ComponentSchema {
  collectionName: 'components_user_row2s';
  info: {
    displayName: 'Row2';
  };
  attributes: {
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it?'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.footer': GeneralFooter;
      'general.header': GeneralHeader;
      'general.seo': GeneralSeo;
      'home.row2': HomeRow2;
      'home.section1': HomeSection1;
      'payment-model.row1': PaymentModelRow1;
      'user.row1': UserRow1;
      'user.row2': UserRow2;
    }
  }
}
