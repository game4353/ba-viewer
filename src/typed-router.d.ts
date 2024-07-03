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
    '/currency/[[id]]': RouteRecordInfo<'/currency/[[id]]', '/currency/:id?', { id?: ParamValueZeroOrOne<true> }, { id?: ParamValueZeroOrOne<false> }>,
    '/data/': RouteRecordInfo<'/data/', '/data', Record<never, never>, Record<never, never>>,
    '/equipment/[[id]]': RouteRecordInfo<'/equipment/[[id]]', '/equipment/:id?', { id?: ParamValueZeroOrOne<true> }, { id?: ParamValueZeroOrOne<false> }>,
    '/event/': RouteRecordInfo<'/event/', '/event', Record<never, never>, Record<never, never>>,
    '/event/[id]/': RouteRecordInfo<'/event/[id]/', '/event/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/event/[id]/bonus': RouteRecordInfo<'/event/[id]/bonus', '/event/:id/bonus', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/event/[id]/reward': RouteRecordInfo<'/event/[id]/reward', '/event/:id/reward', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/event/[id]/shop': RouteRecordInfo<'/event/[id]/shop', '/event/:id/shop', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/event/[id]/stage': RouteRecordInfo<'/event/[id]/stage', '/event/:id/stage', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/furniture/[[id]]': RouteRecordInfo<'/furniture/[[id]]', '/furniture/:id?', { id?: ParamValueZeroOrOne<true> }, { id?: ParamValueZeroOrOne<false> }>,
    '/gacha/': RouteRecordInfo<'/gacha/', '/gacha', Record<never, never>, Record<never, never>>,
    '/gift/': RouteRecordInfo<'/gift/', '/gift', Record<never, never>, Record<never, never>>,
    '/grandassault/': RouteRecordInfo<'/grandassault/', '/grandassault', Record<never, never>, Record<never, never>>,
    '/guide/': RouteRecordInfo<'/guide/', '/guide', Record<never, never>, Record<never, never>>,
    '/guide/[id]/': RouteRecordInfo<'/guide/[id]/', '/guide/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/item/[[id]]': RouteRecordInfo<'/item/[[id]]', '/item/:id?', { id?: ParamValueZeroOrOne<true> }, { id?: ParamValueZeroOrOne<false> }>,
    '/jointfiringdrill/': RouteRecordInfo<'/jointfiringdrill/', '/jointfiringdrill', Record<never, never>, Record<never, never>>,
    '/message/': RouteRecordInfo<'/message/', '/message', Record<never, never>, Record<never, never>>,
    '/mission/': RouteRecordInfo<'/mission/', '/mission', Record<never, never>, Record<never, never>>,
    '/multifloor/': RouteRecordInfo<'/multifloor/', '/multifloor', Record<never, never>, Record<never, never>>,
    '/party/': RouteRecordInfo<'/party/', '/party', Record<never, never>, Record<never, never>>,
    '/scrimmage/': RouteRecordInfo<'/scrimmage/', '/scrimmage', Record<never, never>, Record<never, never>>,
    '/shop/': RouteRecordInfo<'/shop/', '/shop', Record<never, never>, Record<never, never>>,
    '/student/': RouteRecordInfo<'/student/', '/student', Record<never, never>, Record<never, never>>,
    '/student/[id]/': RouteRecordInfo<'/student/[id]/', '/student/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/test/[...path]': RouteRecordInfo<'/test/[...path]', '/test/:path(.*)', { path: ParamValue<true> }, { path: ParamValue<false> }>,
    '/totalassault/': RouteRecordInfo<'/totalassault/', '/totalassault', Record<never, never>, Record<never, never>>,
  }
}
