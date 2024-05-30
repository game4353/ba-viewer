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
    '/data/': RouteRecordInfo<'/data/', '/data', Record<never, never>, Record<never, never>>,
    '/event/': RouteRecordInfo<'/event/', '/event', Record<never, never>, Record<never, never>>,
    '/event/[id]/': RouteRecordInfo<'/event/[id]/', '/event/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/event/[id]/bonus': RouteRecordInfo<'/event/[id]/bonus', '/event/:id/bonus', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/event/[id]/challenge': RouteRecordInfo<'/event/[id]/challenge', '/event/:id/challenge', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/event/[id]/quest': RouteRecordInfo<'/event/[id]/quest', '/event/:id/quest', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/event/[id]/shop': RouteRecordInfo<'/event/[id]/shop', '/event/:id/shop', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/event/[id]/story': RouteRecordInfo<'/event/[id]/story', '/event/:id/story', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/student/': RouteRecordInfo<'/student/', '/student', Record<never, never>, Record<never, never>>,
    '/student/[id]/': RouteRecordInfo<'/student/[id]/', '/student/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
  }
}
