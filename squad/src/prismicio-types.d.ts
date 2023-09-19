// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice = SquadASlice | SquadBSlice | RichTextSlice;

/**
 * Content for HomePage documents
 */
interface PageDocumentData {
	/**
	 * Title field in *HomePage*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Slice Zone field in *HomePage*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice>
	/**
	 * Meta Title field in *HomePage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *HomePage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *HomePage*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * HomePage document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<PageDocumentData>,
	'page',
	Lang
>;

type SquadaDocumentDataSlicesSlice = SquadADetailPageSlice;

type SquadaDocumentDataSlices1Slice = SquadADetailPageSlice;

/**
 * Content for SquadA documents
 */
interface SquadaDocumentData {
	/**
	 * Title field in *SquadA*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squada.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.RichTextField;

	/**
	 * Slice Zone field in *SquadA*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squada.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<SquadaDocumentDataSlicesSlice>
	/**
	 * Meta Description field in *SquadA*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: squada.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *SquadA*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squada.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;

	/**
	 * Meta Title field in *SquadA*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: squada.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_title: prismic.KeyTextField;

	/**
	 * Slice Zone field in *SquadA*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squada.slices1[]
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices1: prismic.SliceZone<SquadaDocumentDataSlices1Slice>;
}

/**
 * SquadA document from Prismic
 *
 * - **API ID**: `squada`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SquadaDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<SquadaDocumentData>,
	'squada',
	Lang
>;

type SquadbDocumentDataSlicesSlice = SquadBDetailPageSlice;

/**
 * Content for SquadB documents
 */
interface SquadbDocumentData {
	/**
	 * Slice Zone field in *SquadB*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squadb.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<SquadbDocumentDataSlicesSlice>
	/**
	 * Meta Description field in *SquadB*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: squadb.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *SquadB*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squadb.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;

	/**
	 * Meta Title field in *SquadB*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: squadb.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_title: prismic.KeyTextField;
}

/**
 * SquadB document from Prismic
 *
 * - **API ID**: `squadb`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SquadbDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<SquadbDocumentData>,
	'squadb',
	Lang
>;

export type AllDocumentTypes = PageDocument | SquadaDocument | SquadbDocument;

/**
 * Primary content in *HeroSection → Primary*
 */
export interface RichTextSliceDefaultPrimary {
	/**
	 * Title field in *HeroSection → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: rich_text.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.RichTextField;

	/**
	 * Content field in *HeroSection → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Lorem ipsum...
	 * - **API ID Path**: rich_text.primary.content
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	content: prismic.RichTextField;

	/**
	 * hero img field in *HeroSection → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: rich_text.primary.hero_img
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	hero_img: prismic.ImageField<never>;

	/**
	 * squads field in *HeroSection → Primary*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: rich_text.primary.squads
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	squads: prismic.ContentRelationshipField;
}

/**
 * Primary content in *HeroSection → Items*
 */
export interface RichTextSliceDefaultItem {
	/**
	 * Image field in *HeroSection → Items*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: rich_text.items[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Name field in *HeroSection → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: rich_text.items[].name
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	name: prismic.KeyTextField;

	/**
	 * GitHub tag field in *HeroSection → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: rich_text.items[].github_tag
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	github_tag: prismic.KeyTextField;

	/**
	 * GitHub link field in *HeroSection → Items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: rich_text.items[].github_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	github_link: prismic.LinkField;
}

/**
 * Default variation for HeroSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<RichTextSliceDefaultPrimary>,
	Simplify<RichTextSliceDefaultItem>
>;

/**
 * Slice variation for *HeroSection*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * HeroSection Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<'rich_text', RichTextSliceVariation>;

/**
 * Primary content in *SquadA → Primary*
 */
export interface SquadASliceDefaultPrimary {
	/**
	 * Content field in *SquadA → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squad_a.primary.contenta
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	contenta: prismic.RichTextField;

	/**
	 * Title field in *SquadA → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squad_a.primary.titlea
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	titlea: prismic.RichTextField;

	/**
	 * saturnus field in *SquadA → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squad_a.primary.saturnusa
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	saturnusa: prismic.ImageField<never>;

	/**
	 * squad a field in *SquadA → Primary*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squad_a.primary.squad_aa
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	squad_aa: prismic.ContentRelationshipField;
}

/**
 * Default variation for SquadA Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SquadASliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<SquadASliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *SquadA*
 */
type SquadASliceVariation = SquadASliceDefault;

/**
 * SquadA Shared Slice
 *
 * - **API ID**: `squad_a`
 * - **Description**: SquadA
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SquadASlice = prismic.SharedSlice<'squad_a', SquadASliceVariation>;

/**
 * Primary content in *SquadADetailPage → Primary*
 */
export interface SquadADetailPageSliceDefaultPrimary {
	/**
	 * Image field in *SquadADetailPage → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squad_a_detail_page.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Name field in *SquadADetailPage → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squad_a_detail_page.primary.name
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	name: prismic.KeyTextField;

	/**
	 * GitHub tag field in *SquadADetailPage → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squad_a_detail_page.primary.github_tag
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	github_tag: prismic.KeyTextField;

	/**
	 * GitHub link field in *SquadADetailPage → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squad_a_detail_page.primary.github_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	github_link: prismic.LinkField;
}

/**
 * Primary content in *SquadADetailPage → Items*
 */
export interface SquadADetailPageSliceDefaultItem {
	/**
	 * Image field in *SquadADetailPage → Items*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squad_a_detail_page.items[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Name field in *SquadADetailPage → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squad_a_detail_page.items[].name
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	name: prismic.KeyTextField;

	/**
	 * GitHub tag field in *SquadADetailPage → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squad_a_detail_page.items[].github_tag
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	github_tag: prismic.KeyTextField;

	/**
	 * GitHub link field in *SquadADetailPage → Items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squad_a_detail_page.items[].github_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	github_link: prismic.LinkField;
}

/**
 * Default variation for SquadADetailPage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SquadADetailPageSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<SquadADetailPageSliceDefaultPrimary>,
	Simplify<SquadADetailPageSliceDefaultItem>
>;

/**
 * Slice variation for *SquadADetailPage*
 */
type SquadADetailPageSliceVariation = SquadADetailPageSliceDefault;

/**
 * SquadADetailPage Shared Slice
 *
 * - **API ID**: `squad_a_detail_page`
 * - **Description**: SquadADetailPage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SquadADetailPageSlice = prismic.SharedSlice<
	'squad_a_detail_page',
	SquadADetailPageSliceVariation
>;

/**
 * Primary content in *SquadB → Primary*
 */
export interface SquadBSliceDefaultPrimary {
	/**
	 * Title field in *SquadB → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squad_b.primary.titleb
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	titleb: prismic.RichTextField;

	/**
	 * Content field in *SquadB → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squad_b.primary.contentb
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	contentb: prismic.RichTextField;

	/**
	 * Earth field in *SquadB → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squad_b.primary.earthb
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	earthb: prismic.ImageField<never>;

	/**
	 * SquadB field in *SquadB → Primary*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squad_b.primary.squadbb
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	squadbb: prismic.ContentRelationshipField;
}

/**
 * Default variation for SquadB Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SquadBSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<SquadBSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *SquadB*
 */
type SquadBSliceVariation = SquadBSliceDefault;

/**
 * SquadB Shared Slice
 *
 * - **API ID**: `squad_b`
 * - **Description**: SquadB
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SquadBSlice = prismic.SharedSlice<'squad_b', SquadBSliceVariation>;

/**
 * Default variation for SquadBDetailPage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SquadBDetailPageSliceDefault = prismic.SharedSliceVariation<
	'default',
	Record<string, never>,
	never
>;

/**
 * Slice variation for *SquadBDetailPage*
 */
type SquadBDetailPageSliceVariation = SquadBDetailPageSliceDefault;

/**
 * SquadBDetailPage Shared Slice
 *
 * - **API ID**: `squad_b_detail_page`
 * - **Description**: SquadBDetailPage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SquadBDetailPageSlice = prismic.SharedSlice<
	'squad_b_detail_page',
	SquadBDetailPageSliceVariation
>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			SquadaDocument,
			SquadaDocumentData,
			SquadaDocumentDataSlicesSlice,
			SquadaDocumentDataSlices1Slice,
			SquadbDocument,
			SquadbDocumentData,
			SquadbDocumentDataSlicesSlice,
			AllDocumentTypes,
			RichTextSlice,
			RichTextSliceDefaultPrimary,
			RichTextSliceDefaultItem,
			RichTextSliceVariation,
			RichTextSliceDefault,
			SquadASlice,
			SquadASliceDefaultPrimary,
			SquadASliceVariation,
			SquadASliceDefault,
			SquadADetailPageSlice,
			SquadADetailPageSliceDefaultPrimary,
			SquadADetailPageSliceDefaultItem,
			SquadADetailPageSliceVariation,
			SquadADetailPageSliceDefault,
			SquadBSlice,
			SquadBSliceDefaultPrimary,
			SquadBSliceVariation,
			SquadBSliceDefault,
			SquadBDetailPageSlice,
			SquadBDetailPageSliceVariation,
			SquadBDetailPageSliceDefault
		};
	}
}
