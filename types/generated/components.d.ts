import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralBtn extends Struct.ComponentSchema {
  collectionName: 'components_general_btns';
  info: {
    description: '';
    displayName: 'btn';
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#0c0b31'>;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.Text & Schema.Attribute.DefaultTo<'GET a Ride'>;
    link: Schema.Attribute.Text & Schema.Attribute.DefaultTo<'#'>;
  };
}

export interface GeneralFooter extends Struct.ComponentSchema {
  collectionName: 'components_general_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    heading: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GeneralFooterListing extends Struct.ComponentSchema {
  collectionName: 'components_general_footer_listings';
  info: {
    displayName: 'FooterListing';
  };
  attributes: {
    btnAction: Schema.Attribute.String;
    btnLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'More About It'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface GeneralListing extends Struct.ComponentSchema {
  collectionName: 'components_general_listings';
  info: {
    description: '';
    displayName: 'Listing';
  };
  attributes: {
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,'>;
    contentShort: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that over 2000 years old. Richard McClintoc It is a long established'>;
    heading: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    headingSmall: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GeneralSeo extends Struct.ComponentSchema {
  collectionName: 'components_general_seos';
  info: {
    description: '';
    displayName: 'SEO';
  };
  attributes: {
    keywords: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'home,services,about us'>;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Website Descriptions'>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'My Website'>;
  };
}

export interface HomeRow2 extends Struct.ComponentSchema {
  collectionName: 'components_home_row2s';
  info: {
    description: '';
    displayName: 'Row2';
  };
  attributes: {
    btnAction: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    btnLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Get a Ride'>;
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,'>;
    contentSmall: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    headingSmall: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeRow2Listing extends Struct.ComponentSchema {
  collectionName: 'components_home_row2_listings';
  info: {
    description: '';
    displayName: 'Row2Listing';
  };
  attributes: {
    btnAction: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    btnLabel: Schema.Attribute.String;
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    contentSmall: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    headingSmall: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeRow3 extends Struct.ComponentSchema {
  collectionName: 'components_home_row3s';
  info: {
    description: '';
    displayName: 'Row3';
  };
  attributes: {
    btnAction: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    btnLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Get a Ride'>;
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    contentSmall: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    headingSmall: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeRow3Team extends Struct.ComponentSchema {
  collectionName: 'components_home_row3_teams';
  info: {
    description: '';
    displayName: 'Row3Listing';
  };
  attributes: {
    btnLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'More About It'>;
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    ContentSmall: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    headingSmall: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeRow4 extends Struct.ComponentSchema {
  collectionName: 'components_home_row4s';
  info: {
    description: '';
    displayName: 'Row4';
  };
  attributes: {
    btnAction: Schema.Attribute.String;
    btnLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'More About It'>;
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    contentSmall: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    headingSmall: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeRow4Listing extends Struct.ComponentSchema {
  collectionName: 'components_home_row4_listings';
  info: {
    description: '';
    displayName: 'Row4Listing';
  };
  attributes: {
    btnAction: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    btnLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'More About It'>;
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    contentSmall: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    headingSmall: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeRow5 extends Struct.ComponentSchema {
  collectionName: 'components_home_row5s';
  info: {
    description: '';
    displayName: 'Row5';
  };
  attributes: {
    btnAction: Schema.Attribute.String;
    btnLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'More About It'>;
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    contentSmall: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    headingSmall: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeRow5Listing extends Struct.ComponentSchema {
  collectionName: 'components_home_row5_listings';
  info: {
    displayName: 'Row5Listing';
  };
  attributes: {
    btnAction: Schema.Attribute.String;
    btnLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'More About It'>;
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    contentSmall: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    headingSmall: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeRow6 extends Struct.ComponentSchema {
  collectionName: 'components_home_row6s';
  info: {
    displayName: 'Row6';
  };
  attributes: {
    btnAction: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    btnLabel: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'More About It'>;
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    contentSmall: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    headingSmall: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeRow6Listing extends Struct.ComponentSchema {
  collectionName: 'components_home_row6_listings';
  info: {
    description: '';
    displayName: 'Row6Listing';
  };
  attributes: {
    btnAction: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    btnLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'More About It'>;
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    contentSmall: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    headingSmall: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeRow7 extends Struct.ComponentSchema {
  collectionName: 'components_home_row7s';
  info: {
    displayName: 'Row7';
  };
  attributes: {
    btnAction: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    btnLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    contentSmall: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    headingSmall: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface HomeRow7Listing extends Struct.ComponentSchema {
  collectionName: 'components_home_row7_listings';
  info: {
    displayName: 'Row7Listing';
  };
  attributes: {
    btnAction: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    btnLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'More About It'>;
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    contentSmall: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    headingSmall: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeRow8 extends Struct.ComponentSchema {
  collectionName: 'components_home_row8s';
  info: {
    displayName: 'Row8';
  };
  attributes: {
    btnAction: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    btnLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'More About It'>;
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    contentSmall: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    headingSmall: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeRow8Listing extends Struct.ComponentSchema {
  collectionName: 'components_home_row8_listings';
  info: {
    displayName: 'Row8Listing';
  };
  attributes: {
    btnAction: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    btnLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'More About It'>;
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    contentSmall: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    headingSmall: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
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
    btnAction: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    btnlabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Get a Ride'>;
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    contentSmall: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }> &
      Schema.Attribute.DefaultTo<'Why do we use it'>;
    headingSmall: Schema.Attribute.String &
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
      'general.btn': GeneralBtn;
      'general.footer': GeneralFooter;
      'general.footer-listing': GeneralFooterListing;
      'general.header': GeneralHeader;
      'general.listing': GeneralListing;
      'general.seo': GeneralSeo;
      'home.row2': HomeRow2;
      'home.row2-listing': HomeRow2Listing;
      'home.row3': HomeRow3;
      'home.row3-team': HomeRow3Team;
      'home.row4': HomeRow4;
      'home.row4-listing': HomeRow4Listing;
      'home.row5': HomeRow5;
      'home.row5-listing': HomeRow5Listing;
      'home.row6': HomeRow6;
      'home.row6-listing': HomeRow6Listing;
      'home.row7': HomeRow7;
      'home.row7-listing': HomeRow7Listing;
      'home.row8': HomeRow8;
      'home.row8-listing': HomeRow8Listing;
      'home.section1': HomeSection1;
      'payment-model.row1': PaymentModelRow1;
      'user.row1': UserRow1;
      'user.row2': UserRow2;
    }
  }
}
