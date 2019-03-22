/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { global } from '../../util/global';
/**
 * Returns whether the values are different from a change detection stand point.
 *
 * Constraints are relaxed in checkNoChanges mode. See `devModeEqual` for details.
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
export function isDifferent(a, b) {
    // NaN is the only value that is not equal to itself so the first
    // test checks if both a and b are not NaN
    return !(a !== a && b !== b) && a !== b;
}
/**
 * Used for stringify render output in Ivy.
 * @param {?} value
 * @return {?}
 */
export function renderStringify(value) {
    if (typeof value == 'function')
        return value.name || value;
    if (typeof value == 'string')
        return value;
    if (value == null)
        return '';
    if (typeof value == 'object' && typeof value.type == 'function')
        return value.type.name || value.type;
    return '' + value;
}
/** @type {?} */
export const defaultScheduler = (typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame || // browser only
    setTimeout // everything else
).bind(global);
/**
 * @param {?} element
 * @return {?}
 */
export function resolveWindow(element) {
    return { name: 'window', target: element.ownerDocument.defaultView };
}
/**
 * @param {?} element
 * @return {?}
 */
export function resolveDocument(element) {
    return { name: 'document', target: element.ownerDocument };
}
/**
 * @param {?} element
 * @return {?}
 */
export function resolveBody(element) {
    return { name: 'body', target: element.ownerDocument.body };
}
/**
 * The special delimiter we use to separate property names, prefixes, and suffixes
 * in property binding metadata. See storeBindingMetadata().
 *
 * We intentionally use the Unicode "REPLACEMENT CHARACTER" (U+FFFD) as a delimiter
 * because it is a very uncommon character that is unlikely to be part of a user's
 * property names or interpolation strings. If it is in fact used in a property
 * binding, DebugElement.properties will not return the correct value for that
 * binding. However, there should be no runtime effect for real applications.
 *
 * This character is typically rendered as a question mark inside of a diamond.
 * See https://en.wikipedia.org/wiki/Specials_(Unicode_block)
 *
 * @type {?}
 */
export const INTERPOLATION_DELIMITER = `�`;
/**
 * Determines whether or not the given string is a property metadata string.
 * See storeBindingMetadata().
 * @param {?} str
 * @return {?}
 */
export function isPropMetadataString(str) {
    return str.indexOf(INTERPOLATION_DELIMITER) >= 0;
}
/**
 * Unwrap a value which might be behind a closure (for forward declaration reasons).
 * @template T
 * @param {?} value
 * @return {?}
 */
export function maybeUnwrapFn(value) {
    if (value instanceof Function) {
        return value();
    }
    else {
        return value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY191dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvdXRpbC9taXNjX3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7QUFVekMsTUFBTSxVQUFVLFdBQVcsQ0FBQyxDQUFNLEVBQUUsQ0FBTTtJQUN4QyxpRUFBaUU7SUFDakUsMENBQTBDO0lBQzFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDMUMsQ0FBQzs7Ozs7O0FBS0QsTUFBTSxVQUFVLGVBQWUsQ0FBQyxLQUFVO0lBQ3hDLElBQUksT0FBTyxLQUFLLElBQUksVUFBVTtRQUFFLE9BQU8sS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUM7SUFDM0QsSUFBSSxPQUFPLEtBQUssSUFBSSxRQUFRO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDM0MsSUFBSSxLQUFLLElBQUksSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzdCLElBQUksT0FBTyxLQUFLLElBQUksUUFBUSxJQUFJLE9BQU8sS0FBSyxDQUFDLElBQUksSUFBSSxVQUFVO1FBQzdELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQztJQUN2QyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUM7QUFDcEIsQ0FBQzs7QUFHRCxNQUFNLE9BQU8sZ0JBQWdCLEdBQ3pCLENBQUMsT0FBTyxxQkFBcUIsS0FBSyxXQUFXLElBQUkscUJBQXFCLElBQUssZUFBZTtJQUN6RixVQUFVLENBQWdFLGtCQUFrQjtDQUMzRixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Ozs7O0FBRW5CLE1BQU0sVUFBVSxhQUFhLENBQUMsT0FBNkM7SUFDekUsT0FBTyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFDLENBQUM7QUFDckUsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLE9BQTZDO0lBQzNFLE9BQU8sRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsYUFBYSxFQUFDLENBQUM7QUFDM0QsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLE9BQTZDO0lBQ3ZFLE9BQU8sRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksRUFBQyxDQUFDO0FBQzVELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkQsTUFBTSxPQUFPLHVCQUF1QixHQUFHLEdBQUc7Ozs7Ozs7QUFNMUMsTUFBTSxVQUFVLG9CQUFvQixDQUFDLEdBQVc7SUFDOUMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25ELENBQUM7Ozs7Ozs7QUFLRCxNQUFNLFVBQVUsYUFBYSxDQUFJLEtBQW9CO0lBQ25ELElBQUksS0FBSyxZQUFZLFFBQVEsRUFBRTtRQUM3QixPQUFPLEtBQUssRUFBRSxDQUFDO0tBQ2hCO1NBQU07UUFDTCxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHthc3NlcnREZWZpbmVkfSBmcm9tICcuLi8uLi91dGlsL2Fzc2VydCc7XG5pbXBvcnQge2dsb2JhbH0gZnJvbSAnLi4vLi4vdXRpbC9nbG9iYWwnO1xuaW1wb3J0IHtSRWxlbWVudH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9yZW5kZXJlcic7XG5pbXBvcnQge0NPTlRFWFQsIExWaWV3LCBSb290Q29udGV4dH0gZnJvbSAnLi4vaW50ZXJmYWNlcy92aWV3JztcbmltcG9ydCB7Z2V0Um9vdFZpZXd9IGZyb20gJy4vdmlld190cmF2ZXJzYWxfdXRpbHMnO1xuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciB0aGUgdmFsdWVzIGFyZSBkaWZmZXJlbnQgZnJvbSBhIGNoYW5nZSBkZXRlY3Rpb24gc3RhbmQgcG9pbnQuXG4gKlxuICogQ29uc3RyYWludHMgYXJlIHJlbGF4ZWQgaW4gY2hlY2tOb0NoYW5nZXMgbW9kZS4gU2VlIGBkZXZNb2RlRXF1YWxgIGZvciBkZXRhaWxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNEaWZmZXJlbnQoYTogYW55LCBiOiBhbnkpOiBib29sZWFuIHtcbiAgLy8gTmFOIGlzIHRoZSBvbmx5IHZhbHVlIHRoYXQgaXMgbm90IGVxdWFsIHRvIGl0c2VsZiBzbyB0aGUgZmlyc3RcbiAgLy8gdGVzdCBjaGVja3MgaWYgYm90aCBhIGFuZCBiIGFyZSBub3QgTmFOXG4gIHJldHVybiAhKGEgIT09IGEgJiYgYiAhPT0gYikgJiYgYSAhPT0gYjtcbn1cblxuLyoqXG4gKiBVc2VkIGZvciBzdHJpbmdpZnkgcmVuZGVyIG91dHB1dCBpbiBJdnkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTdHJpbmdpZnkodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlLm5hbWUgfHwgdmFsdWU7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHJldHVybiB2YWx1ZTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiAnJztcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUudHlwZSA9PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB2YWx1ZS50eXBlLm5hbWUgfHwgdmFsdWUudHlwZTtcbiAgcmV0dXJuICcnICsgdmFsdWU7XG59XG5cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTY2hlZHVsZXIgPVxuICAgICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJyAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgIC8vIGJyb3dzZXIgb25seVxuICAgICBzZXRUaW1lb3V0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZWxzZVxuICAgICApLmJpbmQoZ2xvYmFsKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVXaW5kb3coZWxlbWVudDogUkVsZW1lbnQgJiB7b3duZXJEb2N1bWVudDogRG9jdW1lbnR9KSB7XG4gIHJldHVybiB7bmFtZTogJ3dpbmRvdycsIHRhcmdldDogZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVEb2N1bWVudChlbGVtZW50OiBSRWxlbWVudCAmIHtvd25lckRvY3VtZW50OiBEb2N1bWVudH0pIHtcbiAgcmV0dXJuIHtuYW1lOiAnZG9jdW1lbnQnLCB0YXJnZXQ6IGVsZW1lbnQub3duZXJEb2N1bWVudH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQm9keShlbGVtZW50OiBSRWxlbWVudCAmIHtvd25lckRvY3VtZW50OiBEb2N1bWVudH0pIHtcbiAgcmV0dXJuIHtuYW1lOiAnYm9keScsIHRhcmdldDogZWxlbWVudC5vd25lckRvY3VtZW50LmJvZHl9O1xufVxuXG4vKipcbiAqIFRoZSBzcGVjaWFsIGRlbGltaXRlciB3ZSB1c2UgdG8gc2VwYXJhdGUgcHJvcGVydHkgbmFtZXMsIHByZWZpeGVzLCBhbmQgc3VmZml4ZXNcbiAqIGluIHByb3BlcnR5IGJpbmRpbmcgbWV0YWRhdGEuIFNlZSBzdG9yZUJpbmRpbmdNZXRhZGF0YSgpLlxuICpcbiAqIFdlIGludGVudGlvbmFsbHkgdXNlIHRoZSBVbmljb2RlIFwiUkVQTEFDRU1FTlQgQ0hBUkFDVEVSXCIgKFUrRkZGRCkgYXMgYSBkZWxpbWl0ZXJcbiAqIGJlY2F1c2UgaXQgaXMgYSB2ZXJ5IHVuY29tbW9uIGNoYXJhY3RlciB0aGF0IGlzIHVubGlrZWx5IHRvIGJlIHBhcnQgb2YgYSB1c2VyJ3NcbiAqIHByb3BlcnR5IG5hbWVzIG9yIGludGVycG9sYXRpb24gc3RyaW5ncy4gSWYgaXQgaXMgaW4gZmFjdCB1c2VkIGluIGEgcHJvcGVydHlcbiAqIGJpbmRpbmcsIERlYnVnRWxlbWVudC5wcm9wZXJ0aWVzIHdpbGwgbm90IHJldHVybiB0aGUgY29ycmVjdCB2YWx1ZSBmb3IgdGhhdFxuICogYmluZGluZy4gSG93ZXZlciwgdGhlcmUgc2hvdWxkIGJlIG5vIHJ1bnRpbWUgZWZmZWN0IGZvciByZWFsIGFwcGxpY2F0aW9ucy5cbiAqXG4gKiBUaGlzIGNoYXJhY3RlciBpcyB0eXBpY2FsbHkgcmVuZGVyZWQgYXMgYSBxdWVzdGlvbiBtYXJrIGluc2lkZSBvZiBhIGRpYW1vbmQuXG4gKiBTZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbHNfKFVuaWNvZGVfYmxvY2spXG4gKlxuICovXG5leHBvcnQgY29uc3QgSU5URVJQT0xBVElPTl9ERUxJTUlURVIgPSBg77+9YDtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBnaXZlbiBzdHJpbmcgaXMgYSBwcm9wZXJ0eSBtZXRhZGF0YSBzdHJpbmcuXG4gKiBTZWUgc3RvcmVCaW5kaW5nTWV0YWRhdGEoKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvcE1ldGFkYXRhU3RyaW5nKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBzdHIuaW5kZXhPZihJTlRFUlBPTEFUSU9OX0RFTElNSVRFUikgPj0gMDtcbn1cblxuLyoqXG4gKiBVbndyYXAgYSB2YWx1ZSB3aGljaCBtaWdodCBiZSBiZWhpbmQgYSBjbG9zdXJlIChmb3IgZm9yd2FyZCBkZWNsYXJhdGlvbiByZWFzb25zKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1heWJlVW53cmFwRm48VD4odmFsdWU6IFQgfCAoKCkgPT4gVCkpOiBUIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gdmFsdWUoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbiJdfQ==