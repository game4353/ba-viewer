/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...path]': RouteRecordInfo<'/[...path]', '/:path(.*)', { path: ParamValue<true> }, { path: ParamValue<false> }>,
    '/bounty/': RouteRecordInfo<'/bounty/', '/bounty', Record<never, never>, Record<never, never>>,
    '/commissions/': RouteRecordInfo<'/commissions/', '/commissions', Record<never, never>, Record<never, never>>,
    '/craft/': RouteRecordInfo<'/craft/', '/craft', Record<never, never>, Record<never, never>>,
    '/data/': RouteRecordInfo<'/data/', '/data', Record<never, never>, Record<never, never>>,
    '/event/': RouteRecordInfo<'/event/', '/event', Record<never, never>, Record<never, never>>,
    '/event/[id]/[[tab]]': RouteRecordInfo<'/event/[id]/[[tab]]', '/event/:id/:tab?', { id: ParamValue<true>, tab?: ParamValueZeroOrOne<true> }, { id: ParamValue<false>, tab?: ParamValueZeroOrOne<false> }>,
    '/gacha/': RouteRecordInfo<'/gacha/', '/gacha', Record<never, never>, Record<never, never>>,
    '/gift/': RouteRecordInfo<'/gift/', '/gift', Record<never, never>, Record<never, never>>,
    '/grandassault/': RouteRecordInfo<'/grandassault/', '/grandassault', Record<never, never>, Record<never, never>>,
    '/guide/': RouteRecordInfo<'/guide/', '/guide', Record<never, never>, Record<never, never>>,
    '/guide/[id]/': RouteRecordInfo<'/guide/[id]/', '/guide/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/jointfiringdrill/': RouteRecordInfo<'/jointfiringdrill/', '/jointfiringdrill', Record<never, never>, Record<never, never>>,
    '/l2d/': RouteRecordInfo<'/l2d/', '/l2d', Record<never, never>, Record<never, never>>,
    '/l2d/query/': RouteRecordInfo<'/l2d/query/', '/l2d/query', Record<never, never>, Record<never, never>>,
    '/message/': RouteRecordInfo<'/message/', '/message', Record<never, never>, Record<never, never>>,
    '/mission/': RouteRecordInfo<'/mission/', '/mission', Record<never, never>, Record<never, never>>,
    '/multifloor/': RouteRecordInfo<'/multifloor/', '/multifloor', Record<never, never>, Record<never, never>>,
    '/parcel/character/[[id]]': RouteRecordInfo<'/parcel/character/[[id]]', '/parcel/character/:id?', { id?: ParamValueZeroOrOne<true> }, { id?: ParamValueZeroOrOne<false> }>,
    '/parcel/currency/[[id]]': RouteRecordInfo<'/parcel/currency/[[id]]', '/parcel/currency/:id?', { id?: ParamValueZeroOrOne<true> }, { id?: ParamValueZeroOrOne<false> }>,
    '/parcel/emblem/[[id]]': RouteRecordInfo<'/parcel/emblem/[[id]]', '/parcel/emblem/:id?', { id?: ParamValueZeroOrOne<true> }, { id?: ParamValueZeroOrOne<false> }>,
    '/parcel/equipment/[[id]]': RouteRecordInfo<'/parcel/equipment/[[id]]', '/parcel/equipment/:id?', { id?: ParamValueZeroOrOne<true> }, { id?: ParamValueZeroOrOne<false> }>,
    '/parcel/furniture/[[id]]': RouteRecordInfo<'/parcel/furniture/[[id]]', '/parcel/furniture/:id?', { id?: ParamValueZeroOrOne<true> }, { id?: ParamValueZeroOrOne<false> }>,
    '/parcel/item/[[id]]': RouteRecordInfo<'/parcel/item/[[id]]', '/parcel/item/:id?', { id?: ParamValueZeroOrOne<true> }, { id?: ParamValueZeroOrOne<false> }>,
    '/parcel/recipe/[id]': RouteRecordInfo<'/parcel/recipe/[id]', '/parcel/recipe/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/party/': RouteRecordInfo<'/party/', '/party', Record<never, never>, Record<never, never>>,
    '/scrimmage/': RouteRecordInfo<'/scrimmage/', '/scrimmage', Record<never, never>, Record<never, never>>,
    '/shop/': RouteRecordInfo<'/shop/', '/shop', Record<never, never>, Record<never, never>>,
    '/student/': RouteRecordInfo<'/student/', '/student', Record<never, never>, Record<never, never>>,
    '/student/[id]/': RouteRecordInfo<'/student/[id]/', '/student/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/test/[...path]': RouteRecordInfo<'/test/[...path]', '/test/:path(.*)', { path: ParamValue<true> }, { path: ParamValue<false> }>,
    '/totalassault/': RouteRecordInfo<'/totalassault/', '/totalassault', Record<never, never>, Record<never, never>>,
    '/totalassault/[id]/': RouteRecordInfo<'/totalassault/[id]/', '/totalassault/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
  }
}
