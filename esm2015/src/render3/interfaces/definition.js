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
/** @enum {number} */
const RenderFlags = {
    /* Whether to run the creation block (e.g. create elements and directives) */
    Create: 1,
    /* Whether to run the update block (e.g. refresh bindings) */
    Update: 2,
};
export { RenderFlags };
/**
 * A subclass of `Type` which has a static `ngComponentDef`:`ComponentDef` field making it
 * consumable for rendering.
 * @record
 * @template T
 */
export function ComponentType() { }
if (false) {
    /** @type {?} */
    ComponentType.prototype.ngComponentDef;
}
/**
 * A subclass of `Type` which has a static `ngDirectiveDef`:`DirectiveDef` field making it
 * consumable for rendering.
 * @record
 * @template T
 */
export function DirectiveType() { }
if (false) {
    /** @type {?} */
    DirectiveType.prototype.ngDirectiveDef;
}
/** @enum {number} */
const DirectiveDefFlags = {
    ContentQuery: 2,
};
export { DirectiveDefFlags };
/**
 * A subclass of `Type` which has a static `ngPipeDef`:`PipeDef` field making it
 * consumable for rendering.
 * @record
 * @template T
 */
export function PipeType() { }
if (false) {
    /** @type {?} */
    PipeType.prototype.ngPipeDef;
}
/**
 * Runtime information for classes that are inherited by components or directives
 * that aren't defined as components or directives.
 *
 * This is an internal data structure used by the render to determine what inputs
 * and outputs should be inherited.
 *
 * See: {\@link defineBase}
 * @record
 * @template T
 */
export function BaseDef() { }
if (false) {
    /**
     * A dictionary mapping the inputs' minified property names to their public API names, which
     * are their aliases if any, or their original unminified property names
     * (as in `\@Input('alias') propertyName: any;`).
     * @type {?}
     */
    BaseDef.prototype.inputs;
    /**
     * @deprecated This is only here because `NgOnChanges` incorrectly uses declared name instead of
     * public or minified name.
     * @type {?}
     */
    BaseDef.prototype.declaredInputs;
    /**
     * A dictionary mapping the outputs' minified property names to their public API names, which
     * are their aliases if any, or their original unminified property names
     * (as in `\@Output('alias') propertyName: any;`).
     * @type {?}
     */
    BaseDef.prototype.outputs;
}
/**
 * Runtime link information for Directives.
 *
 * This is internal data structure used by the render to link
 * directives into templates.
 *
 * NOTE: Always use `defineDirective` function to create this object,
 * never create the object directly since the shape of this object
 * can change between versions.
 *
 * @param Selector type metadata specifying the selector of the directive or component
 *
 * See: {\@link defineDirective}
 * @record
 * @template T
 */
export function DirectiveDef() { }
if (false) {
    /**
     * Token representing the directive. Used by DI.
     * @type {?}
     */
    DirectiveDef.prototype.type;
    /**
     * Function that resolves providers and publishes them into the DI system.
     * @type {?}
     */
    DirectiveDef.prototype.providersResolver;
    /**
     * The selectors that will be used to match nodes to this directive.
     * @type {?}
     */
    DirectiveDef.prototype.selectors;
    /**
     * Name under which the directive is exported (for use with local references in template)
     * @type {?}
     */
    DirectiveDef.prototype.exportAs;
    /**
     * Factory function used to create a new directive instance.
     * @type {?}
     */
    DirectiveDef.prototype.factory;
    /**
     * Function to create and refresh content queries associated with a given directive.
     * @type {?}
     */
    DirectiveDef.prototype.contentQueries;
    /**
     * Query-related instructions for a directive. Note that while directives don't have a
     * view and as such view queries won't necessarily do anything, there might be
     * components that extend the directive.
     * @type {?}
     */
    DirectiveDef.prototype.viewQuery;
    /**
     * Refreshes host bindings on the associated directive.
     * @type {?}
     */
    DirectiveDef.prototype.hostBindings;
    /** @type {?} */
    DirectiveDef.prototype.onChanges;
    /** @type {?} */
    DirectiveDef.prototype.onInit;
    /** @type {?} */
    DirectiveDef.prototype.doCheck;
    /** @type {?} */
    DirectiveDef.prototype.afterContentInit;
    /** @type {?} */
    DirectiveDef.prototype.afterContentChecked;
    /** @type {?} */
    DirectiveDef.prototype.afterViewInit;
    /** @type {?} */
    DirectiveDef.prototype.afterViewChecked;
    /** @type {?} */
    DirectiveDef.prototype.onDestroy;
    /**
     * The features applied to this directive
     * @type {?}
     */
    DirectiveDef.prototype.features;
    /** @type {?} */
    DirectiveDef.prototype.setInput;
}
/**
 * Runtime link information for Components.
 *
 * This is internal data structure used by the render to link
 * components into templates.
 *
 * NOTE: Always use `defineComponent` function to create this object,
 * never create the object directly since the shape of this object
 * can change between versions.
 *
 * See: {\@link defineComponent}
 * @record
 * @template T
 */
export function ComponentDef() { }
if (false) {
    /**
     * Runtime unique component ID.
     * @type {?}
     */
    ComponentDef.prototype.id;
    /**
     * The View template of the component.
     * @type {?}
     */
    ComponentDef.prototype.template;
    /**
     * An array of `ngContent[selector]` values that were found in the template.
     * @type {?|undefined}
     */
    ComponentDef.prototype.ngContentSelectors;
    /**
     * A set of styles that the component needs to be present for component to render correctly.
     * @type {?}
     */
    ComponentDef.prototype.styles;
    /**
     * The number of nodes, local refs, and pipes in this component template.
     *
     * Used to calculate the length of the component's LView array, so we
     * can pre-fill the array and set the binding start index.
     * @type {?}
     */
    ComponentDef.prototype.consts;
    /**
     * The number of bindings in this component template (including pure fn bindings).
     *
     * Used to calculate the length of the component's LView array, so we
     * can pre-fill the array and set the host binding start index.
     * @type {?}
     */
    ComponentDef.prototype.vars;
    /**
     * Query-related instructions for a component.
     * @type {?}
     */
    ComponentDef.prototype.viewQuery;
    /**
     * The view encapsulation type, which determines how styles are applied to
     * DOM elements. One of
     * - `Emulated` (default): Emulate native scoping of styles.
     * - `Native`: Use the native encapsulation mechanism of the renderer.
     * - `ShadowDom`: Use modern [ShadowDOM](https://w3c.github.io/webcomponents/spec/shadow/) and
     *   create a ShadowRoot for component's host element.
     * - `None`: Do not provide any template or style encapsulation.
     * @type {?}
     */
    ComponentDef.prototype.encapsulation;
    /**
     * Defines arbitrary developer-defined data to be stored on a renderer instance.
     * This is useful for renderers that delegate to other renderers.
     * @type {?}
     */
    ComponentDef.prototype.data;
    /**
     * Whether or not this component's ChangeDetectionStrategy is OnPush
     * @type {?}
     */
    ComponentDef.prototype.onPush;
    /**
     * Registry of directives and components that may be found in this view.
     *
     * The property is either an array of `DirectiveDef`s or a function which returns the array of
     * `DirectiveDef`s. The function is necessary to be able to support forward declarations.
     * @type {?}
     */
    ComponentDef.prototype.directiveDefs;
    /**
     * Registry of pipes that may be found in this view.
     *
     * The property is either an array of `PipeDefs`s or a function which returns the array of
     * `PipeDefs`s. The function is necessary to be able to support forward declarations.
     * @type {?}
     */
    ComponentDef.prototype.pipeDefs;
    /**
     * The set of schemas that declare elements to be allowed in the component's template.
     * @type {?}
     */
    ComponentDef.prototype.schemas;
    /**
     * Used to store the result of `noSideEffects` function so that it is not removed by closure
     * compiler. The property should never be read.
     * @type {?|undefined}
     */
    ComponentDef.prototype._;
}
/**
 * Runtime link information for Pipes.
 *
 * This is internal data structure used by the renderer to link
 * pipes into templates.
 *
 * NOTE: Always use `definePipe` function to create this object,
 * never create the object directly since the shape of this object
 * can change between versions.
 *
 * See: {\@link definePipe}
 * @record
 * @template T
 */
export function PipeDef() { }
if (false) {
    /**
     * Pipe name.
     *
     * Used to resolve pipe in templates.
     * @type {?}
     */
    PipeDef.prototype.name;
    /**
     * Factory function used to create a new pipe instance.
     * @type {?}
     */
    PipeDef.prototype.factory;
    /**
     * Whether or not the pipe is pure.
     *
     * Pure pipes result only depends on the pipe input and not on internal
     * state of the pipe.
     * @type {?}
     */
    PipeDef.prototype.pure;
    /** @type {?} */
    PipeDef.prototype.onDestroy;
}
/**
 * @record
 */
export function DirectiveDefFeature() { }
if (false) {
    /**
     * Marks a feature as something that {\@link InheritDefinitionFeature} will execute
     * during inheritance.
     *
     * NOTE: DO NOT SET IN ROOT OF MODULE! Doing so will result in tree-shakers/bundlers
     * identifying the change as a side effect, and the feature will be included in
     * every bundle.
     * @type {?|undefined}
     */
    DirectiveDefFeature.prototype.ngInherit;
    /* Skipping unhandled member: <T>(directiveDef: DirectiveDef<T>): void;*/
}
/**
 * @record
 */
export function ComponentDefFeature() { }
if (false) {
    /**
     * Marks a feature as something that {\@link InheritDefinitionFeature} will execute
     * during inheritance.
     *
     * NOTE: DO NOT SET IN ROOT OF MODULE! Doing so will result in tree-shakers/bundlers
     * identifying the change as a side effect, and the feature will be included in
     * every bundle.
     * @type {?|undefined}
     */
    ComponentDefFeature.prototype.ngInherit;
    /* Skipping unhandled member: <T>(componentDef: ComponentDef<T>): void;*/
}
// Note: This hack is necessary so we don't erroneously get a circular dependency
// failure based on types.
/** @type {?} */
export const unusedValueExportToPlacateAjd = 1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvaW50ZXJmYWNlcy9kZWZpbml0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUEyREUsNkVBQTZFO0lBQzdFLFNBQWE7SUFFYiw2REFBNkQ7SUFDN0QsU0FBYTs7Ozs7Ozs7O0FBT2YsbUNBQTRFOzs7SUFBeEIsdUNBQXNCOzs7Ozs7OztBQU0xRSxtQ0FBNEU7OztJQUF4Qix1Q0FBc0I7Ozs7SUFFckMsZUFBbUI7Ozs7Ozs7OztBQU14RCw4QkFBa0U7OztJQUFuQiw2QkFBaUI7Ozs7Ozs7Ozs7Ozs7QUFlaEUsNkJBb0JDOzs7Ozs7OztJQWRDLHlCQUEwQzs7Ozs7O0lBTTFDLGlDQUFrRDs7Ozs7OztJQU9sRCwwQkFBMkM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCN0Msa0NBd0RDOzs7Ozs7SUF0REMsNEJBQWM7Ozs7O0lBR2QseUNBQXNFOzs7OztJQUd0RSxpQ0FBb0M7Ozs7O0lBS3BDLGdDQUFpQzs7Ozs7SUFLakMsK0JBQXNCOzs7OztJQUt0QixzQ0FBK0M7Ozs7Ozs7SUFPL0MsaUNBQXVDOzs7OztJQUt2QyxvQ0FBMkM7O0lBRzNDLGlDQUE2Qjs7SUFDN0IsOEJBQTBCOztJQUMxQiwrQkFBMkI7O0lBQzNCLHdDQUFvQzs7SUFDcEMsMkNBQXVDOztJQUN2QyxxQ0FBaUM7O0lBQ2pDLHdDQUFvQzs7SUFDcEMsaUNBQTZCOzs7OztJQUs3QixnQ0FBOEM7O0lBRTlDLGdDQUc0Qzs7Ozs7Ozs7Ozs7Ozs7OztBQW1COUMsa0NBeUZDOzs7Ozs7SUFyRkMsMEJBQW9COzs7OztJQUtwQixnQ0FBd0M7Ozs7O0lBS3hDLDBDQUF1Qzs7Ozs7SUFLdkMsOEJBQTBCOzs7Ozs7OztJQVMxQiw4QkFBd0I7Ozs7Ozs7O0lBUXhCLDRCQUFzQjs7Ozs7SUFLdEIsaUNBQXVDOzs7Ozs7Ozs7OztJQVd2QyxxQ0FBMEM7Ozs7OztJQU0xQyw0QkFBcUM7Ozs7O0lBR3JDLDhCQUF5Qjs7Ozs7Ozs7SUFRekIscUNBQThDOzs7Ozs7OztJQVE5QyxnQ0FBb0M7Ozs7O0lBS3BDLCtCQUErQjs7Ozs7O0lBTS9CLHlCQUFtQjs7Ozs7Ozs7Ozs7Ozs7OztBQWVyQiw2QkF1QkM7Ozs7Ozs7O0lBakJDLHVCQUFzQjs7Ozs7SUFLdEIsMEJBQXNCOzs7Ozs7OztJQVF0Qix1QkFBdUI7O0lBR3ZCLDRCQUE2Qjs7Ozs7QUFLL0IseUNBV0M7Ozs7Ozs7Ozs7O0lBREMsd0NBQWlCOzs7Ozs7QUFHbkIseUNBV0M7Ozs7Ozs7Ozs7O0lBREMsd0NBQWlCOzs7Ozs7QUF1Q25CLE1BQU0sT0FBTyw2QkFBNkIsR0FBRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1NjaGVtYU1ldGFkYXRhLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQge1R5cGV9IGZyb20gJy4uLy4uL2ludGVyZmFjZS90eXBlJztcbmltcG9ydCB7Q3NzU2VsZWN0b3JMaXN0fSBmcm9tICcuL3Byb2plY3Rpb24nO1xuXG5cbi8qKlxuICogRGVmaW5pdGlvbiBvZiB3aGF0IGEgdGVtcGxhdGUgcmVuZGVyaW5nIGZ1bmN0aW9uIHNob3VsZCBsb29rIGxpa2UgZm9yIGEgY29tcG9uZW50LlxuICovXG5leHBvcnQgdHlwZSBDb21wb25lbnRUZW1wbGF0ZTxUPiA9IHtcbiAgLy8gTm90ZTogdGhlIGN0eCBwYXJhbWV0ZXIgaXMgdHlwZWQgYXMgVHxVLCBhcyB1c2luZyBvbmx5IFUgd291bGQgcHJldmVudCBhIHRlbXBsYXRlIHdpdGhcbiAgLy8gZS5nLiBjdHg6IHt9IGZyb20gYmVpbmcgYXNzaWduZWQgdG8gQ29tcG9uZW50VGVtcGxhdGU8YW55PiBhcyBUeXBlU2NyaXB0IHdvbid0IGluZmVyIFUgPSBhbnlcbiAgLy8gaW4gdGhhdCBzY2VuYXJpby4gQnkgaW5jbHVkaW5nIFQgdGhpcyBpbmNvbXBhdGliaWxpdHkgaXMgcmVzb2x2ZWQuXG4gIDxVIGV4dGVuZHMgVD4ocmY6IFJlbmRlckZsYWdzLCBjdHg6IFQgfCBVKTogdm9pZDsgbmdQcml2YXRlRGF0YT86IG5ldmVyO1xufTtcblxuLyoqXG4gKiBEZWZpbml0aW9uIG9mIHdoYXQgYSB2aWV3IHF1ZXJpZXMgZnVuY3Rpb24gc2hvdWxkIGxvb2sgbGlrZS5cbiAqL1xuZXhwb3J0IHR5cGUgVmlld1F1ZXJpZXNGdW5jdGlvbjxUPiA9IDxVIGV4dGVuZHMgVD4ocmY6IFJlbmRlckZsYWdzLCBjdHg6IFUpID0+IHZvaWQ7XG5cbi8qKlxuICogRGVmaW5pdGlvbiBvZiB3aGF0IGEgY29udGVudCBxdWVyaWVzIGZ1bmN0aW9uIHNob3VsZCBsb29rIGxpa2UuXG4gKi9cbmV4cG9ydCB0eXBlIENvbnRlbnRRdWVyaWVzRnVuY3Rpb248VD4gPVxuICAgIDxVIGV4dGVuZHMgVD4ocmY6IFJlbmRlckZsYWdzLCBjdHg6IFUsIGRpcmVjdGl2ZUluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG5cbi8qKlxuICogRGVmaW5pdGlvbiBvZiB3aGF0IGEgZmFjdG9yeSBmdW5jdGlvbiBzaG91bGQgbG9vayBsaWtlLlxuICovXG5leHBvcnQgdHlwZSBGYWN0b3J5Rm48VD4gPSB7XG4gIC8qKlxuICAgKiBTdWJjbGFzc2VzIHdpdGhvdXQgYW4gZXhwbGljaXQgY29uc3RydWN0b3IgY2FsbCB0aHJvdWdoIHRvIHRoZSBmYWN0b3J5IG9mIHRoZWlyIGJhc2VcbiAgICogZGVmaW5pdGlvbiwgcHJvdmlkaW5nIGl0IHdpdGggdGhlaXIgb3duIGNvbnN0cnVjdG9yIHRvIGluc3RhbnRpYXRlLlxuICAgKi9cbiAgPFUgZXh0ZW5kcyBUPih0OiBUeXBlPFU+KTogVTtcblxuICAvKipcbiAgICogSWYgbm8gY29uc3RydWN0b3IgdG8gaW5zdGFudGlhdGUgaXMgcHJvdmlkZWQsIGFuIGluc3RhbmNlIG9mIHR5cGUgVCBpdHNlbGYgaXMgY3JlYXRlZC5cbiAgICovXG4gICh0OiBudWxsKTogVDtcbn07XG5cbi8qKlxuICogRmxhZ3MgcGFzc2VkIGludG8gdGVtcGxhdGUgZnVuY3Rpb25zIHRvIGRldGVybWluZSB3aGljaCBibG9ja3MgKGkuZS4gY3JlYXRpb24sIHVwZGF0ZSlcbiAqIHNob3VsZCBiZSBleGVjdXRlZC5cbiAqXG4gKiBUeXBpY2FsbHksIGEgdGVtcGxhdGUgcnVucyBib3RoIHRoZSBjcmVhdGlvbiBibG9jayBhbmQgdGhlIHVwZGF0ZSBibG9jayBvbiBpbml0aWFsaXphdGlvbiBhbmRcbiAqIHN1YnNlcXVlbnQgcnVucyBvbmx5IGV4ZWN1dGUgdGhlIHVwZGF0ZSBibG9jay4gSG93ZXZlciwgZHluYW1pY2FsbHkgY3JlYXRlZCB2aWV3cyByZXF1aXJlIHRoYXRcbiAqIHRoZSBjcmVhdGlvbiBibG9jayBiZSBleGVjdXRlZCBzZXBhcmF0ZWx5IGZyb20gdGhlIHVwZGF0ZSBibG9jayAoZm9yIGJhY2t3YXJkcyBjb21wYXQpLlxuICovXG5leHBvcnQgY29uc3QgZW51bSBSZW5kZXJGbGFncyB7XG4gIC8qIFdoZXRoZXIgdG8gcnVuIHRoZSBjcmVhdGlvbiBibG9jayAoZS5nLiBjcmVhdGUgZWxlbWVudHMgYW5kIGRpcmVjdGl2ZXMpICovXG4gIENyZWF0ZSA9IDBiMDEsXG5cbiAgLyogV2hldGhlciB0byBydW4gdGhlIHVwZGF0ZSBibG9jayAoZS5nLiByZWZyZXNoIGJpbmRpbmdzKSAqL1xuICBVcGRhdGUgPSAwYjEwXG59XG5cbi8qKlxuICogQSBzdWJjbGFzcyBvZiBgVHlwZWAgd2hpY2ggaGFzIGEgc3RhdGljIGBuZ0NvbXBvbmVudERlZmA6YENvbXBvbmVudERlZmAgZmllbGQgbWFraW5nIGl0XG4gKiBjb25zdW1hYmxlIGZvciByZW5kZXJpbmcuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50VHlwZTxUPiBleHRlbmRzIFR5cGU8VD4geyBuZ0NvbXBvbmVudERlZjogbmV2ZXI7IH1cblxuLyoqXG4gKiBBIHN1YmNsYXNzIG9mIGBUeXBlYCB3aGljaCBoYXMgYSBzdGF0aWMgYG5nRGlyZWN0aXZlRGVmYDpgRGlyZWN0aXZlRGVmYCBmaWVsZCBtYWtpbmcgaXRcbiAqIGNvbnN1bWFibGUgZm9yIHJlbmRlcmluZy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEaXJlY3RpdmVUeXBlPFQ+IGV4dGVuZHMgVHlwZTxUPiB7IG5nRGlyZWN0aXZlRGVmOiBuZXZlcjsgfVxuXG5leHBvcnQgY29uc3QgZW51bSBEaXJlY3RpdmVEZWZGbGFncyB7Q29udGVudFF1ZXJ5ID0gMGIxMH1cblxuLyoqXG4gKiBBIHN1YmNsYXNzIG9mIGBUeXBlYCB3aGljaCBoYXMgYSBzdGF0aWMgYG5nUGlwZURlZmA6YFBpcGVEZWZgIGZpZWxkIG1ha2luZyBpdFxuICogY29uc3VtYWJsZSBmb3IgcmVuZGVyaW5nLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBpcGVUeXBlPFQ+IGV4dGVuZHMgVHlwZTxUPiB7IG5nUGlwZURlZjogbmV2ZXI7IH1cblxuZXhwb3J0IHR5cGUgRGlyZWN0aXZlRGVmV2l0aE1ldGE8XG4gICAgVCwgU2VsZWN0b3IgZXh0ZW5kcyBzdHJpbmcsIEV4cG9ydEFzIGV4dGVuZHMgc3RyaW5nW10sIElucHV0TWFwIGV4dGVuZHN7W2tleTogc3RyaW5nXTogc3RyaW5nfSxcbiAgICBPdXRwdXRNYXAgZXh0ZW5kc3tba2V5OiBzdHJpbmddOiBzdHJpbmd9LCBRdWVyeUZpZWxkcyBleHRlbmRzIHN0cmluZ1tdPiA9IERpcmVjdGl2ZURlZjxUPjtcblxuLyoqXG4gKiBSdW50aW1lIGluZm9ybWF0aW9uIGZvciBjbGFzc2VzIHRoYXQgYXJlIGluaGVyaXRlZCBieSBjb21wb25lbnRzIG9yIGRpcmVjdGl2ZXNcbiAqIHRoYXQgYXJlbid0IGRlZmluZWQgYXMgY29tcG9uZW50cyBvciBkaXJlY3RpdmVzLlxuICpcbiAqIFRoaXMgaXMgYW4gaW50ZXJuYWwgZGF0YSBzdHJ1Y3R1cmUgdXNlZCBieSB0aGUgcmVuZGVyIHRvIGRldGVybWluZSB3aGF0IGlucHV0c1xuICogYW5kIG91dHB1dHMgc2hvdWxkIGJlIGluaGVyaXRlZC5cbiAqXG4gKiBTZWU6IHtAbGluayBkZWZpbmVCYXNlfVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VEZWY8VD4ge1xuICAvKipcbiAgICogQSBkaWN0aW9uYXJ5IG1hcHBpbmcgdGhlIGlucHV0cycgbWluaWZpZWQgcHJvcGVydHkgbmFtZXMgdG8gdGhlaXIgcHVibGljIEFQSSBuYW1lcywgd2hpY2hcbiAgICogYXJlIHRoZWlyIGFsaWFzZXMgaWYgYW55LCBvciB0aGVpciBvcmlnaW5hbCB1bm1pbmlmaWVkIHByb3BlcnR5IG5hbWVzXG4gICAqIChhcyBpbiBgQElucHV0KCdhbGlhcycpIHByb3BlcnR5TmFtZTogYW55O2ApLlxuICAgKi9cbiAgcmVhZG9ubHkgaW5wdXRzOiB7W1AgaW4ga2V5b2YgVF06IHN0cmluZ307XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFRoaXMgaXMgb25seSBoZXJlIGJlY2F1c2UgYE5nT25DaGFuZ2VzYCBpbmNvcnJlY3RseSB1c2VzIGRlY2xhcmVkIG5hbWUgaW5zdGVhZCBvZlxuICAgKiBwdWJsaWMgb3IgbWluaWZpZWQgbmFtZS5cbiAgICovXG4gIHJlYWRvbmx5IGRlY2xhcmVkSW5wdXRzOiB7W1AgaW4ga2V5b2YgVF06IHN0cmluZ307XG5cbiAgLyoqXG4gICAqIEEgZGljdGlvbmFyeSBtYXBwaW5nIHRoZSBvdXRwdXRzJyBtaW5pZmllZCBwcm9wZXJ0eSBuYW1lcyB0byB0aGVpciBwdWJsaWMgQVBJIG5hbWVzLCB3aGljaFxuICAgKiBhcmUgdGhlaXIgYWxpYXNlcyBpZiBhbnksIG9yIHRoZWlyIG9yaWdpbmFsIHVubWluaWZpZWQgcHJvcGVydHkgbmFtZXNcbiAgICogKGFzIGluIGBAT3V0cHV0KCdhbGlhcycpIHByb3BlcnR5TmFtZTogYW55O2ApLlxuICAgKi9cbiAgcmVhZG9ubHkgb3V0cHV0czoge1tQIGluIGtleW9mIFRdOiBzdHJpbmd9O1xufVxuXG4vKipcbiAqIFJ1bnRpbWUgbGluayBpbmZvcm1hdGlvbiBmb3IgRGlyZWN0aXZlcy5cbiAqXG4gKiBUaGlzIGlzIGludGVybmFsIGRhdGEgc3RydWN0dXJlIHVzZWQgYnkgdGhlIHJlbmRlciB0byBsaW5rXG4gKiBkaXJlY3RpdmVzIGludG8gdGVtcGxhdGVzLlxuICpcbiAqIE5PVEU6IEFsd2F5cyB1c2UgYGRlZmluZURpcmVjdGl2ZWAgZnVuY3Rpb24gdG8gY3JlYXRlIHRoaXMgb2JqZWN0LFxuICogbmV2ZXIgY3JlYXRlIHRoZSBvYmplY3QgZGlyZWN0bHkgc2luY2UgdGhlIHNoYXBlIG9mIHRoaXMgb2JqZWN0XG4gKiBjYW4gY2hhbmdlIGJldHdlZW4gdmVyc2lvbnMuXG4gKlxuICogQHBhcmFtIFNlbGVjdG9yIHR5cGUgbWV0YWRhdGEgc3BlY2lmeWluZyB0aGUgc2VsZWN0b3Igb2YgdGhlIGRpcmVjdGl2ZSBvciBjb21wb25lbnRcbiAqXG4gKiBTZWU6IHtAbGluayBkZWZpbmVEaXJlY3RpdmV9XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0aXZlRGVmPFQ+IGV4dGVuZHMgQmFzZURlZjxUPiB7XG4gIC8qKiBUb2tlbiByZXByZXNlbnRpbmcgdGhlIGRpcmVjdGl2ZS4gVXNlZCBieSBESS4gKi9cbiAgdHlwZTogVHlwZTxUPjtcblxuICAvKiogRnVuY3Rpb24gdGhhdCByZXNvbHZlcyBwcm92aWRlcnMgYW5kIHB1Ymxpc2hlcyB0aGVtIGludG8gdGhlIERJIHN5c3RlbS4gKi9cbiAgcHJvdmlkZXJzUmVzb2x2ZXI6ICg8VSBleHRlbmRzIFQ+KGRlZjogRGlyZWN0aXZlRGVmPFU+KSA9PiB2b2lkKXxudWxsO1xuXG4gIC8qKiBUaGUgc2VsZWN0b3JzIHRoYXQgd2lsbCBiZSB1c2VkIHRvIG1hdGNoIG5vZGVzIHRvIHRoaXMgZGlyZWN0aXZlLiAqL1xuICByZWFkb25seSBzZWxlY3RvcnM6IENzc1NlbGVjdG9yTGlzdDtcblxuICAvKipcbiAgICogTmFtZSB1bmRlciB3aGljaCB0aGUgZGlyZWN0aXZlIGlzIGV4cG9ydGVkIChmb3IgdXNlIHdpdGggbG9jYWwgcmVmZXJlbmNlcyBpbiB0ZW1wbGF0ZSlcbiAgICovXG4gIHJlYWRvbmx5IGV4cG9ydEFzOiBzdHJpbmdbXXxudWxsO1xuXG4gIC8qKlxuICAgKiBGYWN0b3J5IGZ1bmN0aW9uIHVzZWQgdG8gY3JlYXRlIGEgbmV3IGRpcmVjdGl2ZSBpbnN0YW5jZS5cbiAgICovXG4gIGZhY3Rvcnk6IEZhY3RvcnlGbjxUPjtcblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gY3JlYXRlIGFuZCByZWZyZXNoIGNvbnRlbnQgcXVlcmllcyBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiBkaXJlY3RpdmUuXG4gICAqL1xuICBjb250ZW50UXVlcmllczogQ29udGVudFF1ZXJpZXNGdW5jdGlvbjxUPnxudWxsO1xuXG4gIC8qKlxuICAgKiBRdWVyeS1yZWxhdGVkIGluc3RydWN0aW9ucyBmb3IgYSBkaXJlY3RpdmUuIE5vdGUgdGhhdCB3aGlsZSBkaXJlY3RpdmVzIGRvbid0IGhhdmUgYVxuICAgKiB2aWV3IGFuZCBhcyBzdWNoIHZpZXcgcXVlcmllcyB3b24ndCBuZWNlc3NhcmlseSBkbyBhbnl0aGluZywgdGhlcmUgbWlnaHQgYmVcbiAgICogY29tcG9uZW50cyB0aGF0IGV4dGVuZCB0aGUgZGlyZWN0aXZlLlxuICAgKi9cbiAgdmlld1F1ZXJ5OiBWaWV3UXVlcmllc0Z1bmN0aW9uPFQ+fG51bGw7XG5cbiAgLyoqXG4gICAqIFJlZnJlc2hlcyBob3N0IGJpbmRpbmdzIG9uIHRoZSBhc3NvY2lhdGVkIGRpcmVjdGl2ZS5cbiAgICovXG4gIGhvc3RCaW5kaW5nczogSG9zdEJpbmRpbmdzRnVuY3Rpb248VD58bnVsbDtcblxuICAvKiBUaGUgZm9sbG93aW5nIGFyZSBsaWZlY3ljbGUgaG9va3MgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIG9uQ2hhbmdlczogKCgpID0+IHZvaWQpfG51bGw7XG4gIG9uSW5pdDogKCgpID0+IHZvaWQpfG51bGw7XG4gIGRvQ2hlY2s6ICgoKSA9PiB2b2lkKXxudWxsO1xuICBhZnRlckNvbnRlbnRJbml0OiAoKCkgPT4gdm9pZCl8bnVsbDtcbiAgYWZ0ZXJDb250ZW50Q2hlY2tlZDogKCgpID0+IHZvaWQpfG51bGw7XG4gIGFmdGVyVmlld0luaXQ6ICgoKSA9PiB2b2lkKXxudWxsO1xuICBhZnRlclZpZXdDaGVja2VkOiAoKCkgPT4gdm9pZCl8bnVsbDtcbiAgb25EZXN0cm95OiAoKCkgPT4gdm9pZCl8bnVsbDtcblxuICAvKipcbiAgICogVGhlIGZlYXR1cmVzIGFwcGxpZWQgdG8gdGhpcyBkaXJlY3RpdmVcbiAgICovXG4gIHJlYWRvbmx5IGZlYXR1cmVzOiBEaXJlY3RpdmVEZWZGZWF0dXJlW118bnVsbDtcblxuICBzZXRJbnB1dDpcbiAgICAgICg8VSBleHRlbmRzIFQ+KFxuICAgICAgICAgICB0aGlzOiBEaXJlY3RpdmVEZWY8VT4sIGluc3RhbmNlOiBVLCB2YWx1ZTogYW55LCBwdWJsaWNOYW1lOiBzdHJpbmcsXG4gICAgICAgICAgIHByaXZhdGVOYW1lOiBzdHJpbmcpID0+IHZvaWQpfG51bGw7XG59XG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudERlZldpdGhNZXRhPFxuICAgIFQsIFNlbGVjdG9yIGV4dGVuZHMgU3RyaW5nLCBFeHBvcnRBcyBleHRlbmRzIHN0cmluZ1tdLCBJbnB1dE1hcCBleHRlbmRze1trZXk6IHN0cmluZ106IHN0cmluZ30sXG4gICAgT3V0cHV0TWFwIGV4dGVuZHN7W2tleTogc3RyaW5nXTogc3RyaW5nfSwgUXVlcnlGaWVsZHMgZXh0ZW5kcyBzdHJpbmdbXT4gPSBDb21wb25lbnREZWY8VD47XG5cbi8qKlxuICogUnVudGltZSBsaW5rIGluZm9ybWF0aW9uIGZvciBDb21wb25lbnRzLlxuICpcbiAqIFRoaXMgaXMgaW50ZXJuYWwgZGF0YSBzdHJ1Y3R1cmUgdXNlZCBieSB0aGUgcmVuZGVyIHRvIGxpbmtcbiAqIGNvbXBvbmVudHMgaW50byB0ZW1wbGF0ZXMuXG4gKlxuICogTk9URTogQWx3YXlzIHVzZSBgZGVmaW5lQ29tcG9uZW50YCBmdW5jdGlvbiB0byBjcmVhdGUgdGhpcyBvYmplY3QsXG4gKiBuZXZlciBjcmVhdGUgdGhlIG9iamVjdCBkaXJlY3RseSBzaW5jZSB0aGUgc2hhcGUgb2YgdGhpcyBvYmplY3RcbiAqIGNhbiBjaGFuZ2UgYmV0d2VlbiB2ZXJzaW9ucy5cbiAqXG4gKiBTZWU6IHtAbGluayBkZWZpbmVDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50RGVmPFQ+IGV4dGVuZHMgRGlyZWN0aXZlRGVmPFQ+IHtcbiAgLyoqXG4gICAqIFJ1bnRpbWUgdW5pcXVlIGNvbXBvbmVudCBJRC5cbiAgICovXG4gIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBWaWV3IHRlbXBsYXRlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICByZWFkb25seSB0ZW1wbGF0ZTogQ29tcG9uZW50VGVtcGxhdGU8VD47XG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGBuZ0NvbnRlbnRbc2VsZWN0b3JdYCB2YWx1ZXMgdGhhdCB3ZXJlIGZvdW5kIGluIHRoZSB0ZW1wbGF0ZS5cbiAgICovXG4gIHJlYWRvbmx5IG5nQ29udGVudFNlbGVjdG9ycz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBBIHNldCBvZiBzdHlsZXMgdGhhdCB0aGUgY29tcG9uZW50IG5lZWRzIHRvIGJlIHByZXNlbnQgZm9yIGNvbXBvbmVudCB0byByZW5kZXIgY29ycmVjdGx5LlxuICAgKi9cbiAgcmVhZG9ubHkgc3R5bGVzOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBub2RlcywgbG9jYWwgcmVmcywgYW5kIHBpcGVzIGluIHRoaXMgY29tcG9uZW50IHRlbXBsYXRlLlxuICAgKlxuICAgKiBVc2VkIHRvIGNhbGN1bGF0ZSB0aGUgbGVuZ3RoIG9mIHRoZSBjb21wb25lbnQncyBMVmlldyBhcnJheSwgc28gd2VcbiAgICogY2FuIHByZS1maWxsIHRoZSBhcnJheSBhbmQgc2V0IHRoZSBiaW5kaW5nIHN0YXJ0IGluZGV4LlxuICAgKi9cbiAgLy8gVE9ETyhrYXJhKTogcmVtb3ZlIHF1ZXJpZXMgZnJvbSB0aGlzIGNvdW50XG4gIHJlYWRvbmx5IGNvbnN0czogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGJpbmRpbmdzIGluIHRoaXMgY29tcG9uZW50IHRlbXBsYXRlIChpbmNsdWRpbmcgcHVyZSBmbiBiaW5kaW5ncykuXG4gICAqXG4gICAqIFVzZWQgdG8gY2FsY3VsYXRlIHRoZSBsZW5ndGggb2YgdGhlIGNvbXBvbmVudCdzIExWaWV3IGFycmF5LCBzbyB3ZVxuICAgKiBjYW4gcHJlLWZpbGwgdGhlIGFycmF5IGFuZCBzZXQgdGhlIGhvc3QgYmluZGluZyBzdGFydCBpbmRleC5cbiAgICovXG4gIHJlYWRvbmx5IHZhcnM6IG51bWJlcjtcblxuICAvKipcbiAgICogUXVlcnktcmVsYXRlZCBpbnN0cnVjdGlvbnMgZm9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgdmlld1F1ZXJ5OiBWaWV3UXVlcmllc0Z1bmN0aW9uPFQ+fG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSB2aWV3IGVuY2Fwc3VsYXRpb24gdHlwZSwgd2hpY2ggZGV0ZXJtaW5lcyBob3cgc3R5bGVzIGFyZSBhcHBsaWVkIHRvXG4gICAqIERPTSBlbGVtZW50cy4gT25lIG9mXG4gICAqIC0gYEVtdWxhdGVkYCAoZGVmYXVsdCk6IEVtdWxhdGUgbmF0aXZlIHNjb3Bpbmcgb2Ygc3R5bGVzLlxuICAgKiAtIGBOYXRpdmVgOiBVc2UgdGhlIG5hdGl2ZSBlbmNhcHN1bGF0aW9uIG1lY2hhbmlzbSBvZiB0aGUgcmVuZGVyZXIuXG4gICAqIC0gYFNoYWRvd0RvbWA6IFVzZSBtb2Rlcm4gW1NoYWRvd0RPTV0oaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmNvbXBvbmVudHMvc3BlYy9zaGFkb3cvKSBhbmRcbiAgICogICBjcmVhdGUgYSBTaGFkb3dSb290IGZvciBjb21wb25lbnQncyBob3N0IGVsZW1lbnQuXG4gICAqIC0gYE5vbmVgOiBEbyBub3QgcHJvdmlkZSBhbnkgdGVtcGxhdGUgb3Igc3R5bGUgZW5jYXBzdWxhdGlvbi5cbiAgICovXG4gIHJlYWRvbmx5IGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uO1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIGFyYml0cmFyeSBkZXZlbG9wZXItZGVmaW5lZCBkYXRhIHRvIGJlIHN0b3JlZCBvbiBhIHJlbmRlcmVyIGluc3RhbmNlLlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3IgcmVuZGVyZXJzIHRoYXQgZGVsZWdhdGUgdG8gb3RoZXIgcmVuZGVyZXJzLlxuICAgKi9cbiAgcmVhZG9ubHkgZGF0YToge1traW5kOiBzdHJpbmddOiBhbnl9O1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvbmVudCdzIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IGlzIE9uUHVzaCAqL1xuICByZWFkb25seSBvblB1c2g6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFJlZ2lzdHJ5IG9mIGRpcmVjdGl2ZXMgYW5kIGNvbXBvbmVudHMgdGhhdCBtYXkgYmUgZm91bmQgaW4gdGhpcyB2aWV3LlxuICAgKlxuICAgKiBUaGUgcHJvcGVydHkgaXMgZWl0aGVyIGFuIGFycmF5IG9mIGBEaXJlY3RpdmVEZWZgcyBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgdGhlIGFycmF5IG9mXG4gICAqIGBEaXJlY3RpdmVEZWZgcy4gVGhlIGZ1bmN0aW9uIGlzIG5lY2Vzc2FyeSB0byBiZSBhYmxlIHRvIHN1cHBvcnQgZm9yd2FyZCBkZWNsYXJhdGlvbnMuXG4gICAqL1xuICBkaXJlY3RpdmVEZWZzOiBEaXJlY3RpdmVEZWZMaXN0T3JGYWN0b3J5fG51bGw7XG5cbiAgLyoqXG4gICAqIFJlZ2lzdHJ5IG9mIHBpcGVzIHRoYXQgbWF5IGJlIGZvdW5kIGluIHRoaXMgdmlldy5cbiAgICpcbiAgICogVGhlIHByb3BlcnR5IGlzIGVpdGhlciBhbiBhcnJheSBvZiBgUGlwZURlZnNgcyBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgdGhlIGFycmF5IG9mXG4gICAqIGBQaXBlRGVmc2BzLiBUaGUgZnVuY3Rpb24gaXMgbmVjZXNzYXJ5IHRvIGJlIGFibGUgdG8gc3VwcG9ydCBmb3J3YXJkIGRlY2xhcmF0aW9ucy5cbiAgICovXG4gIHBpcGVEZWZzOiBQaXBlRGVmTGlzdE9yRmFjdG9yeXxudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgc2V0IG9mIHNjaGVtYXMgdGhhdCBkZWNsYXJlIGVsZW1lbnRzIHRvIGJlIGFsbG93ZWQgaW4gdGhlIGNvbXBvbmVudCdzIHRlbXBsYXRlLlxuICAgKi9cbiAgc2NoZW1hczogU2NoZW1hTWV0YWRhdGFbXXxudWxsO1xuXG4gIC8qKlxuICAgKiBVc2VkIHRvIHN0b3JlIHRoZSByZXN1bHQgb2YgYG5vU2lkZUVmZmVjdHNgIGZ1bmN0aW9uIHNvIHRoYXQgaXQgaXMgbm90IHJlbW92ZWQgYnkgY2xvc3VyZVxuICAgKiBjb21waWxlci4gVGhlIHByb3BlcnR5IHNob3VsZCBuZXZlciBiZSByZWFkLlxuICAgKi9cbiAgcmVhZG9ubHkgXz86IG5ldmVyO1xufVxuXG4vKipcbiAqIFJ1bnRpbWUgbGluayBpbmZvcm1hdGlvbiBmb3IgUGlwZXMuXG4gKlxuICogVGhpcyBpcyBpbnRlcm5hbCBkYXRhIHN0cnVjdHVyZSB1c2VkIGJ5IHRoZSByZW5kZXJlciB0byBsaW5rXG4gKiBwaXBlcyBpbnRvIHRlbXBsYXRlcy5cbiAqXG4gKiBOT1RFOiBBbHdheXMgdXNlIGBkZWZpbmVQaXBlYCBmdW5jdGlvbiB0byBjcmVhdGUgdGhpcyBvYmplY3QsXG4gKiBuZXZlciBjcmVhdGUgdGhlIG9iamVjdCBkaXJlY3RseSBzaW5jZSB0aGUgc2hhcGUgb2YgdGhpcyBvYmplY3RcbiAqIGNhbiBjaGFuZ2UgYmV0d2VlbiB2ZXJzaW9ucy5cbiAqXG4gKiBTZWU6IHtAbGluayBkZWZpbmVQaXBlfVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBpcGVEZWY8VD4ge1xuICAvKipcbiAgICogUGlwZSBuYW1lLlxuICAgKlxuICAgKiBVc2VkIHRvIHJlc29sdmUgcGlwZSBpbiB0ZW1wbGF0ZXMuXG4gICAqL1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEZhY3RvcnkgZnVuY3Rpb24gdXNlZCB0byBjcmVhdGUgYSBuZXcgcGlwZSBpbnN0YW5jZS5cbiAgICovXG4gIGZhY3Rvcnk6IEZhY3RvcnlGbjxUPjtcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdGhlIHBpcGUgaXMgcHVyZS5cbiAgICpcbiAgICogUHVyZSBwaXBlcyByZXN1bHQgb25seSBkZXBlbmRzIG9uIHRoZSBwaXBlIGlucHV0IGFuZCBub3Qgb24gaW50ZXJuYWxcbiAgICogc3RhdGUgb2YgdGhlIHBpcGUuXG4gICAqL1xuICByZWFkb25seSBwdXJlOiBib29sZWFuO1xuXG4gIC8qIFRoZSBmb2xsb3dpbmcgYXJlIGxpZmVjeWNsZSBob29rcyBmb3IgdGhpcyBwaXBlICovXG4gIG9uRGVzdHJveTogKCgpID0+IHZvaWQpfG51bGw7XG59XG5cbmV4cG9ydCB0eXBlIFBpcGVEZWZXaXRoTWV0YTxULCBOYW1lIGV4dGVuZHMgc3RyaW5nPiA9IFBpcGVEZWY8VD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0aXZlRGVmRmVhdHVyZSB7XG4gIDxUPihkaXJlY3RpdmVEZWY6IERpcmVjdGl2ZURlZjxUPik6IHZvaWQ7XG4gIC8qKlxuICAgKiBNYXJrcyBhIGZlYXR1cmUgYXMgc29tZXRoaW5nIHRoYXQge0BsaW5rIEluaGVyaXREZWZpbml0aW9uRmVhdHVyZX0gd2lsbCBleGVjdXRlXG4gICAqIGR1cmluZyBpbmhlcml0YW5jZS5cbiAgICpcbiAgICogTk9URTogRE8gTk9UIFNFVCBJTiBST09UIE9GIE1PRFVMRSEgRG9pbmcgc28gd2lsbCByZXN1bHQgaW4gdHJlZS1zaGFrZXJzL2J1bmRsZXJzXG4gICAqIGlkZW50aWZ5aW5nIHRoZSBjaGFuZ2UgYXMgYSBzaWRlIGVmZmVjdCwgYW5kIHRoZSBmZWF0dXJlIHdpbGwgYmUgaW5jbHVkZWQgaW5cbiAgICogZXZlcnkgYnVuZGxlLlxuICAgKi9cbiAgbmdJbmhlcml0PzogdHJ1ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnREZWZGZWF0dXJlIHtcbiAgPFQ+KGNvbXBvbmVudERlZjogQ29tcG9uZW50RGVmPFQ+KTogdm9pZDtcbiAgLyoqXG4gICAqIE1hcmtzIGEgZmVhdHVyZSBhcyBzb21ldGhpbmcgdGhhdCB7QGxpbmsgSW5oZXJpdERlZmluaXRpb25GZWF0dXJlfSB3aWxsIGV4ZWN1dGVcbiAgICogZHVyaW5nIGluaGVyaXRhbmNlLlxuICAgKlxuICAgKiBOT1RFOiBETyBOT1QgU0VUIElOIFJPT1QgT0YgTU9EVUxFISBEb2luZyBzbyB3aWxsIHJlc3VsdCBpbiB0cmVlLXNoYWtlcnMvYnVuZGxlcnNcbiAgICogaWRlbnRpZnlpbmcgdGhlIGNoYW5nZSBhcyBhIHNpZGUgZWZmZWN0LCBhbmQgdGhlIGZlYXR1cmUgd2lsbCBiZSBpbmNsdWRlZCBpblxuICAgKiBldmVyeSBidW5kbGUuXG4gICAqL1xuICBuZ0luaGVyaXQ/OiB0cnVlO1xufVxuXG5cbi8qKlxuICogVHlwZSB1c2VkIGZvciBkaXJlY3RpdmVEZWZzIG9uIGNvbXBvbmVudCBkZWZpbml0aW9uLlxuICpcbiAqIFRoZSBmdW5jdGlvbiBpcyBuZWNlc3NhcnkgdG8gYmUgYWJsZSB0byBzdXBwb3J0IGZvcndhcmQgZGVjbGFyYXRpb25zLlxuICovXG5leHBvcnQgdHlwZSBEaXJlY3RpdmVEZWZMaXN0T3JGYWN0b3J5ID0gKCgpID0+IERpcmVjdGl2ZURlZkxpc3QpIHwgRGlyZWN0aXZlRGVmTGlzdDtcblxuZXhwb3J0IHR5cGUgRGlyZWN0aXZlRGVmTGlzdCA9IChEaXJlY3RpdmVEZWY8YW55PnwgQ29tcG9uZW50RGVmPGFueT4pW107XG5cbmV4cG9ydCB0eXBlIERpcmVjdGl2ZVR5cGVzT3JGYWN0b3J5ID0gKCgpID0+IERpcmVjdGl2ZVR5cGVMaXN0KSB8IERpcmVjdGl2ZVR5cGVMaXN0O1xuXG5leHBvcnQgdHlwZSBEaXJlY3RpdmVUeXBlTGlzdCA9XG4gICAgKERpcmVjdGl2ZURlZjxhbnk+fCBDb21wb25lbnREZWY8YW55PnxcbiAgICAgVHlwZTxhbnk+LyogVHlwZSBhcyB3b3JrYXJvdW5kIGZvcjogTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzQ4ODEgKi8pW107XG5cbmV4cG9ydCB0eXBlIEhvc3RCaW5kaW5nc0Z1bmN0aW9uPFQ+ID1cbiAgICA8VSBleHRlbmRzIFQ+KHJmOiBSZW5kZXJGbGFncywgY3R4OiBVLCBlbGVtZW50SW5kZXg6IG51bWJlcikgPT4gdm9pZDtcblxuLyoqXG4gKiBUeXBlIHVzZWQgZm9yIFBpcGVEZWZzIG9uIGNvbXBvbmVudCBkZWZpbml0aW9uLlxuICpcbiAqIFRoZSBmdW5jdGlvbiBpcyBuZWNlc3NhcnkgdG8gYmUgYWJsZSB0byBzdXBwb3J0IGZvcndhcmQgZGVjbGFyYXRpb25zLlxuICovXG5leHBvcnQgdHlwZSBQaXBlRGVmTGlzdE9yRmFjdG9yeSA9ICgoKSA9PiBQaXBlRGVmTGlzdCkgfCBQaXBlRGVmTGlzdDtcblxuZXhwb3J0IHR5cGUgUGlwZURlZkxpc3QgPSBQaXBlRGVmPGFueT5bXTtcblxuZXhwb3J0IHR5cGUgUGlwZVR5cGVzT3JGYWN0b3J5ID0gKCgpID0+IERpcmVjdGl2ZVR5cGVMaXN0KSB8IERpcmVjdGl2ZVR5cGVMaXN0O1xuXG5leHBvcnQgdHlwZSBQaXBlVHlwZUxpc3QgPVxuICAgIChQaXBlRGVmPGFueT58IFR5cGU8YW55Pi8qIFR5cGUgYXMgd29ya2Fyb3VuZCBmb3I6IE1pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy80ODgxICovKVtdO1xuXG5cbi8vIE5vdGU6IFRoaXMgaGFjayBpcyBuZWNlc3Nhcnkgc28gd2UgZG9uJ3QgZXJyb25lb3VzbHkgZ2V0IGEgY2lyY3VsYXIgZGVwZW5kZW5jeVxuLy8gZmFpbHVyZSBiYXNlZCBvbiB0eXBlcy5cbmV4cG9ydCBjb25zdCB1bnVzZWRWYWx1ZUV4cG9ydFRvUGxhY2F0ZUFqZCA9IDE7XG4iXX0=