/**
 * @param {object} vnode the vnode to clone
 * @returns {object} the cloned vnode
 */
export function cloneVNode(vnode) {
  const cloned = new vnode.constructor(
    vnode.tag,
    vnode.data,
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  )
  cloned.ns = vnode.ns
  cloned.isStatic = vnode.isStatic
  cloned.key = vnode.key
  cloned.isComment = vnode.isComment
  cloned.fnContext = vnode.fnContext
  cloned.fnOptions = vnode.fnOptions
  cloned.fnScopeId = vnode.fnScopeId
  cloned.asyncMeta = vnode.asyncMeta
  cloned.isCloned = true
  return cloned
}

/**
 * Turns first character of a string to a capital version
 *
 * @param {string} string to capitalize
 * @returns {string} capitalised string
 */
export function capitaliseFirstLetter(string) {
  if (typeof string !== 'string') return ''
  return string.charAt(0).toUpperCase() + string.slice(1)
}
