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
import { isDevMode } from '../util/is_dev_mode';
import { InertBodyHelper } from './inert_body';
import { _sanitizeUrl, sanitizeSrcset } from './url_sanitizer';
/**
 * @param {?} tags
 * @return {?}
 */
function tagSet(tags) {
    /** @type {?} */
    const res = {};
    for (const t of tags.split(','))
        res[t] = true;
    return res;
}
/**
 * @param {...?} sets
 * @return {?}
 */
function merge(...sets) {
    /** @type {?} */
    const res = {};
    for (const s of sets) {
        for (const v in s) {
            if (s.hasOwnProperty(v))
                res[v] = true;
        }
    }
    return res;
}
// Good source of info about elements and attributes
// http://dev.w3.org/html5/spec/Overview.html#semantics
// http://simon.html5.org/html-elements
// Safe Void Elements - HTML5
// http://dev.w3.org/html5/spec/Overview.html#void-elements
/** @type {?} */
const VOID_ELEMENTS = tagSet('area,br,col,hr,img,wbr');
// Elements that you can, intentionally, leave open (and which close themselves)
// http://dev.w3.org/html5/spec/Overview.html#optional-tags
/** @type {?} */
const OPTIONAL_END_TAG_BLOCK_ELEMENTS = tagSet('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr');
/** @type {?} */
const OPTIONAL_END_TAG_INLINE_ELEMENTS = tagSet('rp,rt');
/** @type {?} */
const OPTIONAL_END_TAG_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, OPTIONAL_END_TAG_BLOCK_ELEMENTS);
// Safe Block Elements - HTML5
/** @type {?} */
const BLOCK_ELEMENTS = merge(OPTIONAL_END_TAG_BLOCK_ELEMENTS, tagSet('address,article,' +
    'aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,' +
    'h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'));
// Inline Elements - HTML5
/** @type {?} */
const INLINE_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, tagSet('a,abbr,acronym,audio,b,' +
    'bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,' +
    'samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'));
/** @type {?} */
export const VALID_ELEMENTS = merge(VOID_ELEMENTS, BLOCK_ELEMENTS, INLINE_ELEMENTS, OPTIONAL_END_TAG_ELEMENTS);
// Attributes that have href and hence need to be sanitized
/** @type {?} */
export const URI_ATTRS = tagSet('background,cite,href,itemtype,longdesc,poster,src,xlink:href');
// Attributes that have special href set hence need to be sanitized
/** @type {?} */
export const SRCSET_ATTRS = tagSet('srcset');
/** @type {?} */
const HTML_ATTRS = tagSet('abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,' +
    'compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,' +
    'ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,' +
    'scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,' +
    'valign,value,vspace,width');
// NB: This currently consciously doesn't support SVG. SVG sanitization has had several security
// issues in the past, so it seems safer to leave it out if possible. If support for binding SVG via
// innerHTML is required, SVG attributes should be added here.
// NB: Sanitization does not allow <form> elements or other active elements (<button> etc). Those
// can be sanitized, but they increase security surface area without a legitimate use case, so they
// are left out here.
/** @type {?} */
export const VALID_ATTRS = merge(URI_ATTRS, SRCSET_ATTRS, HTML_ATTRS);
// Elements whose content should not be traversed/preserved, if the elements themselves are invalid.
//
// Typically, `<invalid>Some content</invalid>` would traverse (and in this case preserve)
// `Some content`, but strip `invalid-element` opening/closing tags. For some elements, though, we
// don't want to preserve the content, if the elements themselves are going to be removed.
/** @type {?} */
const SKIP_TRAVERSING_CONTENT_IF_INVALID_ELEMENTS = tagSet('script,style,template');
/**
 * SanitizingHtmlSerializer serializes a DOM fragment, stripping out any unsafe elements and unsafe
 * attributes.
 */
class SanitizingHtmlSerializer {
    constructor() {
        // Explicitly track if something was stripped, to avoid accidentally warning of sanitization just
        // because characters were re-encoded.
        this.sanitizedSomething = false;
        this.buf = [];
    }
    /**
     * @param {?} el
     * @return {?}
     */
    sanitizeChildren(el) {
        // This cannot use a TreeWalker, as it has to run on Angular's various DOM adapters.
        // However this code never accesses properties off of `document` before deleting its contents
        // again, so it shouldn't be vulnerable to DOM clobbering.
        /** @type {?} */
        let current = (/** @type {?} */ (el.firstChild));
        /** @type {?} */
        let traverseContent = true;
        while (current) {
            if (current.nodeType === Node.ELEMENT_NODE) {
                traverseContent = this.startElement((/** @type {?} */ (current)));
            }
            else if (current.nodeType === Node.TEXT_NODE) {
                this.chars((/** @type {?} */ (current.nodeValue)));
            }
            else {
                // Strip non-element, non-text nodes.
                this.sanitizedSomething = true;
            }
            if (traverseContent && current.firstChild) {
                current = (/** @type {?} */ (current.firstChild));
                continue;
            }
            while (current) {
                // Leaving the element. Walk up and to the right, closing tags as we go.
                if (current.nodeType === Node.ELEMENT_NODE) {
                    this.endElement((/** @type {?} */ (current)));
                }
                /** @type {?} */
                let next = this.checkClobberedElement(current, (/** @type {?} */ (current.nextSibling)));
                if (next) {
                    current = next;
                    break;
                }
                current = this.checkClobberedElement(current, (/** @type {?} */ (current.parentNode)));
            }
        }
        return this.buf.join('');
    }
    /**
     * Sanitizes an opening element tag (if valid) and returns whether the element's contents should
     * be traversed. Element content must always be traversed (even if the element itself is not
     * valid/safe), unless the element is one of `SKIP_TRAVERSING_CONTENT_IF_INVALID_ELEMENTS`.
     *
     * @private
     * @param {?} element The element to sanitize.
     * @return {?} True if the element's contents should be traversed.
     */
    startElement(element) {
        /** @type {?} */
        const tagName = element.nodeName.toLowerCase();
        if (!VALID_ELEMENTS.hasOwnProperty(tagName)) {
            this.sanitizedSomething = true;
            return !SKIP_TRAVERSING_CONTENT_IF_INVALID_ELEMENTS.hasOwnProperty(tagName);
        }
        this.buf.push('<');
        this.buf.push(tagName);
        /** @type {?} */
        const elAttrs = element.attributes;
        for (let i = 0; i < elAttrs.length; i++) {
            /** @type {?} */
            const elAttr = elAttrs.item(i);
            /** @type {?} */
            const attrName = (/** @type {?} */ (elAttr)).name;
            /** @type {?} */
            const lower = attrName.toLowerCase();
            if (!VALID_ATTRS.hasOwnProperty(lower)) {
                this.sanitizedSomething = true;
                continue;
            }
            /** @type {?} */
            let value = (/** @type {?} */ (elAttr)).value;
            // TODO(martinprobst): Special case image URIs for data:image/...
            if (URI_ATTRS[lower])
                value = _sanitizeUrl(value);
            if (SRCSET_ATTRS[lower])
                value = sanitizeSrcset(value);
            this.buf.push(' ', attrName, '="', encodeEntities(value), '"');
        }
        this.buf.push('>');
        return true;
    }
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    endElement(current) {
        /** @type {?} */
        const tagName = current.nodeName.toLowerCase();
        if (VALID_ELEMENTS.hasOwnProperty(tagName) && !VOID_ELEMENTS.hasOwnProperty(tagName)) {
            this.buf.push('</');
            this.buf.push(tagName);
            this.buf.push('>');
        }
    }
    /**
     * @private
     * @param {?} chars
     * @return {?}
     */
    chars(chars) { this.buf.push(encodeEntities(chars)); }
    /**
     * @param {?} node
     * @param {?} nextNode
     * @return {?}
     */
    checkClobberedElement(node, nextNode) {
        if (nextNode &&
            (node.compareDocumentPosition(nextNode) &
                Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) {
            throw new Error(`Failed to sanitize html because the element is clobbered: ${((/** @type {?} */ (node))).outerHTML}`);
        }
        return nextNode;
    }
}
if (false) {
    /** @type {?} */
    SanitizingHtmlSerializer.prototype.sanitizedSomething;
    /**
     * @type {?}
     * @private
     */
    SanitizingHtmlSerializer.prototype.buf;
}
// Regular Expressions for parsing tags and attributes
/** @type {?} */
const SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
// ! to ~ is the ASCII range.
/** @type {?} */
const NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
/**
 * Escapes all potentially dangerous characters, so that the
 * resulting string can be safely inserted into attribute or
 * element text.
 * @param {?} value
 * @return {?}
 */
function encodeEntities(value) {
    return value.replace(/&/g, '&amp;')
        .replace(SURROGATE_PAIR_REGEXP, (/**
     * @param {?} match
     * @return {?}
     */
    function (match) {
        /** @type {?} */
        const hi = match.charCodeAt(0);
        /** @type {?} */
        const low = match.charCodeAt(1);
        return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
    }))
        .replace(NON_ALPHANUMERIC_REGEXP, (/**
     * @param {?} match
     * @return {?}
     */
    function (match) { return '&#' + match.charCodeAt(0) + ';'; }))
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
/** @type {?} */
let inertBodyHelper;
/**
 * Sanitizes the given unsafe, untrusted HTML fragment, and returns HTML text that is safe to add to
 * the DOM in a browser environment.
 * @param {?} defaultDoc
 * @param {?} unsafeHtmlInput
 * @return {?}
 */
export function _sanitizeHtml(defaultDoc, unsafeHtmlInput) {
    /** @type {?} */
    let inertBodyElement = null;
    try {
        inertBodyHelper = inertBodyHelper || new InertBodyHelper(defaultDoc);
        // Make sure unsafeHtml is actually a string (TypeScript types are not enforced at runtime).
        /** @type {?} */
        let unsafeHtml = unsafeHtmlInput ? String(unsafeHtmlInput) : '';
        inertBodyElement = inertBodyHelper.getInertBodyElement(unsafeHtml);
        // mXSS protection. Repeatedly parse the document to make sure it stabilizes, so that a browser
        // trying to auto-correct incorrect HTML cannot cause formerly inert HTML to become dangerous.
        /** @type {?} */
        let mXSSAttempts = 5;
        /** @type {?} */
        let parsedHtml = unsafeHtml;
        do {
            if (mXSSAttempts === 0) {
                throw new Error('Failed to sanitize html because the input is unstable');
            }
            mXSSAttempts--;
            unsafeHtml = parsedHtml;
            parsedHtml = (/** @type {?} */ (inertBodyElement)).innerHTML;
            inertBodyElement = inertBodyHelper.getInertBodyElement(unsafeHtml);
        } while (unsafeHtml !== parsedHtml);
        /** @type {?} */
        const sanitizer = new SanitizingHtmlSerializer();
        /** @type {?} */
        const safeHtml = sanitizer.sanitizeChildren((/** @type {?} */ (getTemplateContent((/** @type {?} */ (inertBodyElement))))) || inertBodyElement);
        if (isDevMode() && sanitizer.sanitizedSomething) {
            console.warn('WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss');
        }
        return safeHtml;
    }
    finally {
        // In case anything goes wrong, clear out inertElement to reset the entire DOM structure.
        if (inertBodyElement) {
            /** @type {?} */
            const parent = getTemplateContent(inertBodyElement) || inertBodyElement;
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }
    }
}
/**
 * @param {?} el
 * @return {?}
 */
export function getTemplateContent(el) {
    return 'content' in ((/** @type {?} */ (el))) && isTemplateElement(el) ?
        el.content :
        null;
}
/**
 * @param {?} el
 * @return {?}
 */
function isTemplateElement(el) {
    return el.nodeType === Node.ELEMENT_NODE && el.nodeName === 'TEMPLATE';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbF9zYW5pdGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vaHRtbF9zYW5pdGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUM3QyxPQUFPLEVBQUMsWUFBWSxFQUFFLGNBQWMsRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7OztBQUU3RCxTQUFTLE1BQU0sQ0FBQyxJQUFZOztVQUNwQixHQUFHLEdBQTJCLEVBQUU7SUFDdEMsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDL0MsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDOzs7OztBQUVELFNBQVMsS0FBSyxDQUFDLEdBQUcsSUFBOEI7O1VBQ3hDLEdBQUcsR0FBMkIsRUFBRTtJQUN0QyxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRTtRQUNwQixLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDeEM7S0FDRjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQzs7Ozs7OztNQVFLLGFBQWEsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUM7Ozs7TUFJaEQsK0JBQStCLEdBQUcsTUFBTSxDQUFDLGdEQUFnRCxDQUFDOztNQUMxRixnQ0FBZ0MsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDOztNQUNsRCx5QkFBeUIsR0FDM0IsS0FBSyxDQUFDLGdD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UUFBUSxLQUFLLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLFFBQVEsS0FBSyxVQUFVLENBQUM7QUFDekUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtpc0Rldk1vZGV9IGZyb20gJy4uL3V0aWwvaXNfZGV2X21vZGUnO1xuaW1wb3J0IHtJbmVydEJvZHlIZWxwZXJ9IGZyb20gJy4vaW5lcnRfYm9keSc7XG5pbXBvcnQge19zYW5pdGl6ZVVybCwgc2FuaXRpemVTcmNzZXR9IGZyb20gJy4vdXJsX3Nhbml0aXplcic7XG5cbmZ1bmN0aW9uIHRhZ1NldCh0YWdzOiBzdHJpbmcpOiB7W2s6IHN0cmluZ106IGJvb2xlYW59IHtcbiAgY29uc3QgcmVzOiB7W2s6IHN0cmluZ106IGJvb2xlYW59ID0ge307XG4gIGZvciAoY29uc3QgdCBvZiB0YWdzLnNwbGl0KCcsJykpIHJlc1t0XSA9IHRydWU7XG4gIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIG1lcmdlKC4uLnNldHM6IHtbazogc3RyaW5nXTogYm9vbGVhbn1bXSk6IHtbazogc3RyaW5nXTogYm9vbGVhbn0ge1xuICBjb25zdCByZXM6IHtbazogc3RyaW5nXTogYm9vbGVhbn0gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIHNldHMpIHtcbiAgICBmb3IgKGNvbnN0IHYgaW4gcykge1xuICAgICAgaWYgKHMuaGFzT3duUHJvcGVydHkodikpIHJlc1t2XSA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59XG5cbi8vIEdvb2Qgc291cmNlIG9mIGluZm8gYWJvdXQgZWxlbWVudHMgYW5kIGF0dHJpYnV0ZXNcbi8vIGh0dHA6Ly9kZXYudzMub3JnL2h0bWw1L3NwZWMvT3ZlcnZpZXcuaHRtbCNzZW1hbnRpY3Ncbi8vIGh0dHA6Ly9zaW1vbi5odG1sNS5vcmcvaHRtbC1lbGVtZW50c1xuXG4vLyBTYWZlIFZvaWQgRWxlbWVudHMgLSBIVE1MNVxuLy8gaHR0cDovL2Rldi53My5vcmcvaHRtbDUvc3BlYy9PdmVydmlldy5odG1sI3ZvaWQtZWxlbWVudHNcbmNvbnN0IFZPSURfRUxFTUVOVFMgPSB0YWdTZXQoJ2FyZWEsYnIsY29sLGhyLGltZyx3YnInKTtcblxuLy8gRWxlbWVudHMgdGhhdCB5b3UgY2FuLCBpbnRlbnRpb25hbGx5LCBsZWF2ZSBvcGVuIChhbmQgd2hpY2ggY2xvc2UgdGhlbXNlbHZlcylcbi8vIGh0dHA6Ly9kZXYudzMub3JnL2h0bWw1L3NwZWMvT3ZlcnZpZXcuaHRtbCNvcHRpb25hbC10YWdzXG5jb25zdCBPUFRJT05BTF9FTkRfVEFHX0JMT0NLX0VMRU1FTlRTID0gdGFnU2V0KCdjb2xncm91cCxkZCxkdCxsaSxwLHRib2R5LHRkLHRmb290LHRoLHRoZWFkLHRyJyk7XG5jb25zdCBPUFRJT05BTF9FTkRfVEFHX0lOTElORV9FTEVNRU5UUyA9IHRhZ1NldCgncnAscnQnKTtcbmNvbnN0IE9QVElPTkFMX0VORF9UQUdfRUxFTUVOVFMgPVxuICAgIG1lcmdlKE9QVElPTkFMX0VORF9UQUdfSU5MSU5FX0VMRU1FTlRTLCBPUFRJT05BTF9FTkRfVEFHX0JMT0NLX0VMRU1FTlRTKTtcblxuLy8gU2FmZSBCbG9jayBFbGVtZW50cyAtIEhUTUw1XG5jb25zdCBCTE9DS19FTEVNRU5UUyA9IG1lcmdlKFxuICAgIE9QVElPTkFMX0VORF9UQUdfQkxPQ0tfRUxFTUVOVFMsXG4gICAgdGFnU2V0KFxuICAgICAgICAnYWRkcmVzcyxhcnRpY2xlLCcgK1xuICAgICAgICAnYXNpZGUsYmxvY2txdW90ZSxjYXB0aW9uLGNlbnRlcixkZWwsZGV0YWlscyxkaWFsb2csZGlyLGRpdixkbCxmaWd1cmUsZmlnY2FwdGlvbixmb290ZXIsaDEsaDIsaDMsaDQsaDUsJyArXG4gICAgICAgICdoNixoZWFkZXIsaGdyb3VwLGhyLGlucyxtYWluLG1hcCxtZW51LG5hdixvbCxwcmUsc2VjdGlvbixzdW1tYXJ5LHRhYmxlLHVsJykpO1xuXG4vLyBJbmxpbmUgRWxlbWVudHMgLSBIVE1MNVxuY29uc3QgSU5MSU5FX0VMRU1FTlRTID0gbWVyZ2UoXG4gICAgT1BUSU9OQUxfRU5EX1RBR19JTkxJTkVfRUxFTUVOVFMsXG4gICAgdGFnU2V0KFxuICAgICAgICAnYSxhYmJyLGFjcm9ueW0sYXVkaW8sYiwnICtcbiAgICAgICAgJ2JkaSxiZG8sYmlnLGJyLGNpdGUsY29kZSxkZWwsZGZuLGVtLGZvbnQsaSxpbWcsaW5zLGtiZCxsYWJlbCxtYXAsbWFyayxwaWN0dXJlLHEscnVieSxycCxydCxzLCcgK1xuICAgICAgICAnc2FtcCxzbWFsbCxzb3VyY2Usc3BhbixzdHJpa2Usc3Ryb25nLHN1YixzdXAsdGltZSx0cmFjayx0dCx1LHZhcix2aWRlbycpKTtcblxuZXhwb3J0IGNvbnN0IFZBTElEX0VMRU1FTlRTID1cbiAgICBtZXJnZShWT0lEX0VMRU1FTlRTLCBCTE9DS19FTEVNRU5UUywgSU5MSU5FX0VMRU1FTlRTLCBPUFRJT05BTF9FTkRfVEFHX0VMRU1FTlRTKTtcblxuLy8gQXR0cmlidXRlcyB0aGF0IGhhdmUgaHJlZiBhbmQgaGVuY2UgbmVlZCB0byBiZSBzYW5pdGl6ZWRcbmV4cG9ydCBjb25zdCBVUklfQVRUUlMgPSB0YWdTZXQoJ2JhY2tncm91bmQsY2l0ZSxocmVmLGl0ZW10eXBlLGxvbmdkZXNjLHBvc3RlcixzcmMseGxpbms6aHJlZicpO1xuXG4vLyBBdHRyaWJ1dGVzIHRoYXQgaGF2ZSBzcGVjaWFsIGhyZWYgc2V0IGhlbmNlIG5lZWQgdG8gYmUgc2FuaXRpemVkXG5leHBvcnQgY29uc3QgU1JDU0VUX0FUVFJTID0gdGFnU2V0KCdzcmNzZXQnKTtcblxuY29uc3QgSFRNTF9BVFRSUyA9IHRhZ1NldChcbiAgICAnYWJicixhY2Nlc3NrZXksYWxpZ24sYWx0LGF1dG9wbGF5LGF4aXMsYmdjb2xvcixib3JkZXIsY2VsbHBhZGRpbmcsY2VsbHNwYWNpbmcsY2xhc3MsY2xlYXIsY29sb3IsY29scyxjb2xzcGFuLCcgK1xuICAgICdjb21wYWN0LGNvbnRyb2xzLGNvb3JkcyxkYXRldGltZSxkZWZhdWx0LGRpcixkb3dubG9hZCxmYWNlLGhlYWRlcnMsaGVpZ2h0LGhpZGRlbixocmVmbGFuZyxoc3BhY2UsJyArXG4gICAgJ2lzbWFwLGl0ZW1zY29wZSxpdGVtcHJvcCxraW5kLGxhYmVsLGxhbmcsbGFuZ3VhZ2UsbG9vcCxtZWRpYSxtdXRlZCxub2hyZWYsbm93cmFwLG9wZW4scHJlbG9hZCxyZWwscmV2LHJvbGUscm93cyxyb3dzcGFuLHJ1bGVzLCcgK1xuICAgICdzY29wZSxzY3JvbGxpbmcsc2hhcGUsc2l6ZSxzaXplcyxzcGFuLHNyY2xhbmcsc3RhcnQsc3VtbWFyeSx0YWJpbmRleCx0YXJnZXQsdGl0bGUsdHJhbnNsYXRlLHR5cGUsdXNlbWFwLCcgK1xuICAgICd2YWxpZ24sdmFsdWUsdnNwYWNlLHdpZHRoJyk7XG5cbi8vIE5COiBUaGlzIGN1cnJlbnRseSBjb25zY2lvdXNseSBkb2Vzbid0IHN1cHBvcnQgU1ZHLiBTVkcgc2FuaXRpemF0aW9uIGhhcyBoYWQgc2V2ZXJhbCBzZWN1cml0eVxuLy8gaXNzdWVzIGluIHRoZSBwYXN0LCBzbyBpdCBzZWVtcyBzYWZlciB0byBsZWF2ZSBpdCBvdXQgaWYgcG9zc2libGUuIElmIHN1cHBvcnQgZm9yIGJpbmRpbmcgU1ZHIHZpYVxuLy8gaW5uZXJIVE1MIGlzIHJlcXVpcmVkLCBTVkcgYXR0cmlidXRlcyBzaG91bGQgYmUgYWRkZWQgaGVyZS5cblxuLy8gTkI6IFNhbml0aXphdGlvbiBkb2VzIG5vdCBhbGxvdyA8Zm9ybT4gZWxlbWVudHMgb3Igb3RoZXIgYWN0aXZlIGVsZW1lbnRzICg8YnV0dG9uPiBldGMpLiBUaG9zZVxuLy8gY2FuIGJlIHNhbml0aXplZCwgYnV0IHRoZXkgaW5jcmVhc2Ugc2VjdXJpdHkgc3VyZmFjZSBhcmVhIHdpdGhvdXQgYSBsZWdpdGltYXRlIHVzZSBjYXNlLCBzbyB0aGV5XG4vLyBhcmUgbGVmdCBvdXQgaGVyZS5cblxuZXhwb3J0IGNvbnN0IFZBTElEX0FUVFJTID0gbWVyZ2UoVVJJX0FUVFJTLCBTUkNTRVRfQVRUUlMsIEhUTUxfQVRUUlMpO1xuXG4vLyBFbGVtZW50cyB3aG9zZSBjb250ZW50IHNob3VsZCBub3QgYmUgdHJhdmVyc2VkL3ByZXNlcnZlZCwgaWYgdGhlIGVsZW1lbnRzIHRoZW1zZWx2ZXMgYXJlIGludmFsaWQuXG4vL1xuLy8gVHlwaWNhbGx5LCBgPGludmFsaWQ+U29tZSBjb250ZW50PC9pbnZhbGlkPmAgd291bGQgdHJhdmVyc2UgKGFuZCBpbiB0aGlzIGNhc2UgcHJlc2VydmUpXG4vLyBgU29tZSBjb250ZW50YCwgYnV0IHN0cmlwIGBpbnZhbGlkLWVsZW1lbnRgIG9wZW5pbmcvY2xvc2luZyB0YWdzLiBGb3Igc29tZSBlbGVtZW50cywgdGhvdWdoLCB3ZVxuLy8gZG9uJ3Qgd2FudCB0byBwcmVzZXJ2ZSB0aGUgY29udGVudCwgaWYgdGhlIGVsZW1lbnRzIHRoZW1zZWx2ZXMgYXJlIGdvaW5nIHRvIGJlIHJlbW92ZWQuXG5jb25zdCBTS0lQX1RSQVZFUlNJTkdfQ09OVEVOVF9JRl9JTlZBTElEX0VMRU1FTlRTID0gdGFnU2V0KCdzY3JpcHQsc3R5bGUsdGVtcGxhdGUnKTtcblxuLyoqXG4gKiBTYW5pdGl6aW5nSHRtbFNlcmlhbGl6ZXIgc2VyaWFsaXplcyBhIERPTSBmcmFnbWVudCwgc3RyaXBwaW5nIG91dCBhbnkgdW5zYWZlIGVsZW1lbnRzIGFuZCB1bnNhZmVcbiAqIGF0dHJpYnV0ZXMuXG4gKi9cbmNsYXNzIFNhbml0aXppbmdIdG1sU2VyaWFsaXplciB7XG4gIC8vIEV4cGxpY2l0bHkgdHJhY2sgaWYgc29tZXRoaW5nIHdhcyBzdHJpcHBlZCwgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHdhcm5pbmcgb2Ygc2FuaXRpemF0aW9uIGp1c3RcbiAgLy8gYmVjYXVzZSBjaGFyYWN0ZXJzIHdlcmUgcmUtZW5jb2RlZC5cbiAgcHVibGljIHNhbml0aXplZFNvbWV0aGluZyA9IGZhbHNlO1xuICBwcml2YXRlIGJ1Zjogc3RyaW5nW10gPSBbXTtcblxuICBzYW5pdGl6ZUNoaWxkcmVuKGVsOiBFbGVtZW50KTogc3RyaW5nIHtcbiAgICAvLyBUaGlzIGNhbm5vdCB1c2UgYSBUcmVlV2Fsa2VyLCBhcyBpdCBoYXMgdG8gcnVuIG9uIEFuZ3VsYXIncyB2YXJpb3VzIERPTSBhZGFwdGVycy5cbiAgICAvLyBIb3dldmVyIHRoaXMgY29kZSBuZXZlciBhY2Nlc3NlcyBwcm9wZXJ0aWVzIG9mZiBvZiBgZG9jdW1lbnRgIGJlZm9yZSBkZWxldGluZyBpdHMgY29udGVudHNcbiAgICAvLyBhZ2Fpbiwgc28gaXQgc2hvdWxkbid0IGJlIHZ1bG5lcmFibGUgdG8gRE9NIGNsb2JiZXJpbmcuXG4gICAgbGV0IGN1cnJlbnQ6IE5vZGUgPSBlbC5maXJzdENoaWxkICE7XG4gICAgbGV0IHRyYXZlcnNlQ29udGVudCA9IHRydWU7XG4gICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgIGlmIChjdXJyZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICB0cmF2ZXJzZUNvbnRlbnQgPSB0aGlzLnN0YXJ0RWxlbWVudChjdXJyZW50IGFzIEVsZW1lbnQpO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50Lm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICB0aGlzLmNoYXJzKGN1cnJlbnQubm9kZVZhbHVlICEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU3RyaXAgbm9uLWVsZW1lbnQsIG5vbi10ZXh0IG5vZGVzLlxuICAgICAgICB0aGlzLnNhbml0aXplZFNvbWV0aGluZyA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodHJhdmVyc2VDb250ZW50ICYmIGN1cnJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5maXJzdENoaWxkICE7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgLy8gTGVhdmluZyB0aGUgZWxlbWVudC4gV2FsayB1cCBhbmQgdG8gdGhlIHJpZ2h0LCBjbG9zaW5nIHRhZ3MgYXMgd2UgZ28uXG4gICAgICAgIGlmIChjdXJyZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIHRoaXMuZW5kRWxlbWVudChjdXJyZW50IGFzIEVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5leHQgPSB0aGlzLmNoZWNrQ2xvYmJlcmVkRWxlbWVudChjdXJyZW50LCBjdXJyZW50Lm5leHRTaWJsaW5nICEpO1xuXG4gICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgY3VycmVudCA9IG5leHQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50ID0gdGhpcy5jaGVja0Nsb2JiZXJlZEVsZW1lbnQoY3VycmVudCwgY3VycmVudC5wYXJlbnROb2RlICEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5idWYuam9pbignJyk7XG4gIH1cblxuICAvKipcbiAgICogU2FuaXRpemVzIGFuIG9wZW5pbmcgZWxlbWVudCB0YWcgKGlmIHZhbGlkKSBhbmQgcmV0dXJucyB3aGV0aGVyIHRoZSBlbGVtZW50J3MgY29udGVudHMgc2hvdWxkXG4gICAqIGJlIHRyYXZlcnNlZC4gRWxlbWVudCBjb250ZW50IG11c3QgYWx3YXlzIGJlIHRyYXZlcnNlZCAoZXZlbiBpZiB0aGUgZWxlbWVudCBpdHNlbGYgaXMgbm90XG4gICAqIHZhbGlkL3NhZmUpLCB1bmxlc3MgdGhlIGVsZW1lbnQgaXMgb25lIG9mIGBTS0lQX1RSQVZFUlNJTkdfQ09OVEVOVF9JRl9JTlZBTElEX0VMRU1FTlRTYC5cbiAgICpcbiAgICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gc2FuaXRpemUuXG4gICAqIEByZXR1cm4gVHJ1ZSBpZiB0aGUgZWxlbWVudCdzIGNvbnRlbnRzIHNob3VsZCBiZSB0cmF2ZXJzZWQuXG4gICAqL1xuICBwcml2YXRlIHN0YXJ0RWxlbWVudChlbGVtZW50OiBFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgY29uc3QgdGFnTmFtZSA9IGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoIVZBTElEX0VMRU1FTlRTLmhhc093blByb3BlcnR5KHRhZ05hbWUpKSB7XG4gICAgICB0aGlzLnNhbml0aXplZFNvbWV0aGluZyA9IHRydWU7XG4gICAgICByZXR1cm4gIVNLSVBfVFJBVkVSU0lOR19DT05URU5UX0lGX0lOVkFMSURfRUxFTUVOVFMuaGFzT3duUHJvcGVydHkodGFnTmFtZSk7XG4gICAgfVxuICAgIHRoaXMuYnVmLnB1c2goJzwnKTtcbiAgICB0aGlzLmJ1Zi5wdXNoKHRhZ05hbWUpO1xuICAgIGNvbnN0IGVsQXR0cnMgPSBlbGVtZW50LmF0dHJpYnV0ZXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbEF0dHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbEF0dHIgPSBlbEF0dHJzLml0ZW0oaSk7XG4gICAgICBjb25zdCBhdHRyTmFtZSA9IGVsQXR0ciAhLm5hbWU7XG4gICAgICBjb25zdCBsb3dlciA9IGF0dHJOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoIVZBTElEX0FUVFJTLmhhc093blByb3BlcnR5KGxvd2VyKSkge1xuICAgICAgICB0aGlzLnNhbml0aXplZFNvbWV0aGluZyA9IHRydWU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbGV0IHZhbHVlID0gZWxBdHRyICEudmFsdWU7XG4gICAgICAvLyBUT0RPKG1hcnRpbnByb2JzdCk6IFNwZWNpYWwgY2FzZSBpbWFnZSBVUklzIGZvciBkYXRhOmltYWdlLy4uLlxuICAgICAgaWYgKFVSSV9BVFRSU1tsb3dlcl0pIHZhbHVlID0gX3Nhbml0aXplVXJsKHZhbHVlKTtcbiAgICAgIGlmIChTUkNTRVRfQVRUUlNbbG93ZXJdKSB2YWx1ZSA9IHNhbml0aXplU3Jjc2V0KHZhbHVlKTtcbiAgICAgIHRoaXMuYnVmLnB1c2goJyAnLCBhdHRyTmFtZSwgJz1cIicsIGVuY29kZUVudGl0aWVzKHZhbHVlKSwgJ1wiJyk7XG4gICAgfVxuICAgIHRoaXMuYnVmLnB1c2goJz4nKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZW5kRWxlbWVudChjdXJyZW50OiBFbGVtZW50KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IGN1cnJlbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoVkFMSURfRUxFTUVOVFMuaGFzT3duUHJvcGVydHkodGFnTmFtZSkgJiYgIVZPSURfRUxFTUVOVFMuaGFzT3duUHJvcGVydHkodGFnTmFtZSkpIHtcbiAgICAgIHRoaXMuYnVmLnB1c2goJzwvJyk7XG4gICAgICB0aGlzLmJ1Zi5wdXNoKHRhZ05hbWUpO1xuICAgICAgdGhpcy5idWYucHVzaCgnPicpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hhcnMoY2hhcnM6IHN0cmluZykgeyB0aGlzLmJ1Zi5wdXNoKGVuY29kZUVudGl0aWVzKGNoYXJzKSk7IH1cblxuICBjaGVja0Nsb2JiZXJlZEVsZW1lbnQobm9kZTogTm9kZSwgbmV4dE5vZGU6IE5vZGUpOiBOb2RlIHtcbiAgICBpZiAobmV4dE5vZGUgJiZcbiAgICAgICAgKG5vZGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24obmV4dE5vZGUpICZcbiAgICAgICAgIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fQ09OVEFJTkVEX0JZKSA9PT3CoE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fQ09OVEFJTkVEX0JZKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBzYW5pdGl6ZSBodG1sIGJlY2F1c2UgdGhlIGVsZW1lbnQgaXMgY2xvYmJlcmVkOiAkeyhub2RlIGFzIEVsZW1lbnQpLm91dGVySFRNTH1gKTtcbiAgICB9XG4gICAgcmV0dXJuIG5leHROb2RlO1xuICB9XG59XG5cbi8vIFJlZ3VsYXIgRXhwcmVzc2lvbnMgZm9yIHBhcnNpbmcgdGFncyBhbmQgYXR0cmlidXRlc1xuY29uc3QgU1VSUk9HQVRFX1BBSVJfUkVHRVhQID0gL1tcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl0vZztcbi8vICEgdG8gfiBpcyB0aGUgQVNDSUkgcmFuZ2UuXG5jb25zdCBOT05fQUxQSEFOVU1FUklDX1JFR0VYUCA9IC8oW15cXCMtfiB8IV0pL2c7XG5cbi8qKlxuICogRXNjYXBlcyBhbGwgcG90ZW50aWFsbHkgZGFuZ2Vyb3VzIGNoYXJhY3RlcnMsIHNvIHRoYXQgdGhlXG4gKiByZXN1bHRpbmcgc3RyaW5nIGNhbiBiZSBzYWZlbHkgaW5zZXJ0ZWQgaW50byBhdHRyaWJ1dGUgb3JcbiAqIGVsZW1lbnQgdGV4dC5cbiAqIEBwYXJhbSB2YWx1ZVxuICovXG5mdW5jdGlvbiBlbmNvZGVFbnRpdGllcyh2YWx1ZTogc3RyaW5nKSB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgICAucmVwbGFjZShcbiAgICAgICAgICBTVVJST0dBVEVfUEFJUl9SRUdFWFAsXG4gICAgICAgICAgZnVuY3Rpb24obWF0Y2g6IHN0cmluZykge1xuICAgICAgICAgICAgY29uc3QgaGkgPSBtYXRjaC5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgY29uc3QgbG93ID0gbWF0Y2guY2hhckNvZGVBdCgxKTtcbiAgICAgICAgICAgIHJldHVybiAnJiMnICsgKCgoaGkgLSAweEQ4MDApICogMHg0MDApICsgKGxvdyAtIDB4REMwMCkgKyAweDEwMDAwKSArICc7JztcbiAgICAgICAgICB9KVxuICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgTk9OX0FMUEhBTlVNRVJJQ19SRUdFWFAsXG4gICAgICAgICAgZnVuY3Rpb24obWF0Y2g6IHN0cmluZykgeyByZXR1cm4gJyYjJyArIG1hdGNoLmNoYXJDb2RlQXQoMCkgKyAnOyc7IH0pXG4gICAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xufVxuXG5sZXQgaW5lcnRCb2R5SGVscGVyOiBJbmVydEJvZHlIZWxwZXI7XG5cbi8qKlxuICogU2FuaXRpemVzIHRoZSBnaXZlbiB1bnNhZmUsIHVudHJ1c3RlZCBIVE1MIGZyYWdtZW50LCBhbmQgcmV0dXJucyBIVE1MIHRleHQgdGhhdCBpcyBzYWZlIHRvIGFkZCB0b1xuICogdGhlIERPTSBpbiBhIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfc2FuaXRpemVIdG1sKGRlZmF1bHREb2M6IGFueSwgdW5zYWZlSHRtbElucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgaW5lcnRCb2R5RWxlbWVudDogSFRNTEVsZW1lbnR8bnVsbCA9IG51bGw7XG4gIHRyeSB7XG4gICAgaW5lcnRCb2R5SGVscGVyID0gaW5lcnRCb2R5SGVscGVyIHx8IG5ldyBJbmVydEJvZHlIZWxwZXIoZGVmYXVsdERvYyk7XG4gICAgLy8gTWFrZSBzdXJlIHVuc2FmZUh0bWwgaXMgYWN0dWFsbHkgYSBzdHJpbmcgKFR5cGVTY3JpcHQgdHlwZXMgYXJlIG5vdCBlbmZvcmNlZCBhdCBydW50aW1lKS5cbiAgICBsZXQgdW5zYWZlSHRtbCA9IHVuc2FmZUh0bWxJbnB1dCA/IFN0cmluZyh1bnNhZmVIdG1sSW5wdXQpIDogJyc7XG4gICAgaW5lcnRCb2R5RWxlbWVudCA9IGluZXJ0Qm9keUhlbHBlci5nZXRJbmVydEJvZHlFbGVtZW50KHVuc2FmZUh0bWwpO1xuXG4gICAgLy8gbVhTUyBwcm90ZWN0aW9uLiBSZXBlYXRlZGx5IHBhcnNlIHRoZSBkb2N1bWVudCB0byBtYWtlIHN1cmUgaXQgc3RhYmlsaXplcywgc28gdGhhdCBhIGJyb3dzZXJcbiAgICAvLyB0cnlpbmcgdG8gYXV0by1jb3JyZWN0IGluY29ycmVjdCBIVE1MIGNhbm5vdCBjYXVzZSBmb3JtZXJseSBpbmVydCBIVE1MIHRvIGJlY29tZSBkYW5nZXJvdXMuXG4gICAgbGV0IG1YU1NBdHRlbXB0cyA9IDU7XG4gICAgbGV0IHBhcnNlZEh0bWwgPSB1bnNhZmVIdG1sO1xuXG4gICAgZG8ge1xuICAgICAgaWYgKG1YU1NBdHRlbXB0cyA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBzYW5pdGl6ZSBodG1sIGJlY2F1c2UgdGhlIGlucHV0IGlzIHVuc3RhYmxlJyk7XG4gICAgICB9XG4gICAgICBtWFNTQXR0ZW1wdHMtLTtcblxuICAgICAgdW5zYWZlSHRtbCA9IHBhcnNlZEh0bWw7XG4gICAgICBwYXJzZWRIdG1sID0gaW5lcnRCb2R5RWxlbWVudCAhLmlubmVySFRNTDtcbiAgICAgIGluZXJ0Qm9keUVsZW1lbnQgPSBpbmVydEJvZHlIZWxwZXIuZ2V0SW5lcnRCb2R5RWxlbWVudCh1bnNhZmVIdG1sKTtcbiAgICB9IHdoaWxlICh1bnNhZmVIdG1sICE9PSBwYXJzZWRIdG1sKTtcblxuICAgIGNvbnN0IHNhbml0aXplciA9IG5ldyBTYW5pdGl6aW5nSHRtbFNlcmlhbGl6ZXIoKTtcbiAgICBjb25zdCBzYWZlSHRtbCA9IHNhbml0aXplci5zYW5pdGl6ZUNoaWxkcmVuKFxuICAgICAgICBnZXRUZW1wbGF0ZUNvbnRlbnQoaW5lcnRCb2R5RWxlbWVudCAhKSBhcyBFbGVtZW50IHx8IGluZXJ0Qm9keUVsZW1lbnQpO1xuICAgIGlmIChpc0Rldk1vZGUoKSAmJiBzYW5pdGl6ZXIuc2FuaXRpemVkU29tZXRoaW5nKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1dBUk5JTkc6IHNhbml0aXppbmcgSFRNTCBzdHJpcHBlZCBzb21lIGNvbnRlbnQsIHNlZSBodHRwOi8vZy5jby9uZy9zZWN1cml0eSN4c3MnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2FmZUh0bWw7XG4gIH0gZmluYWxseSB7XG4gICAgLy8gSW4gY2FzZSBhbnl0aGluZyBnb2VzIHdyb25nLCBjbGVhciBvdXQgaW5lcnRFbGVtZW50IHRvIHJlc2V0IHRoZSBlbnRpcmUgRE9NIHN0cnVjdHVyZS5cbiAgICBpZiAoaW5lcnRCb2R5RWxlbWVudCkge1xuICAgICAgY29uc3QgcGFyZW50ID0gZ2V0VGVtcGxhdGVDb250ZW50KGluZXJ0Qm9keUVsZW1lbnQpIHx8IGluZXJ0Qm9keUVsZW1lbnQ7XG4gICAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlbXBsYXRlQ29udGVudChlbDogTm9kZSk6IE5vZGV8bnVsbCB7XG4gIHJldHVybiAnY29udGVudCcgaW4gKGVsIGFzIGFueSAvKiogTWljcm9zb2Z0L1R5cGVTY3JpcHQjMjE1MTcgKi8pICYmIGlzVGVtcGxhdGVFbGVtZW50KGVsKSA/XG4gICAgICBlbC5jb250ZW50IDpcbiAgICAgIG51bGw7XG59XG5mdW5jdGlvbiBpc1RlbXBsYXRlRWxlbWVudChlbDogTm9kZSk6IGVsIGlzIEhUTUxUZW1wbGF0ZUVsZW1lbnQge1xuICByZXR1cm4gZWwubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmIGVsLm5vZGVOYW1lID09PSAnVEVNUExBVEUnO1xufVxuIl19