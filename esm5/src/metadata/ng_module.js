/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
import { defineInjector } from '../di/interface/defs';
import { convertInjectableProviderToFactory } from '../di/util';
import { compileNgModule as render3CompileNgModule } from '../render3/jit/module';
import { makeDecorator } from '../util/decorators';
/**
 * @Annotation
 * @publicApi
 */
export var NgModule = makeDecorator('NgModule', function (ngModule) { return ngModule; }, undefined, undefined, 
/**
 * Decorator that marks the following class as an NgModule, and supplies
 * configuration metadata for it.
 *
 * * The `declarations` and `entryComponents` options configure the compiler
 * with information about what belongs to the NgModule.
 * * The `providers` options configures the NgModule's injector to provide
 * dependencies the NgModule members.
 * * The `imports` and `exports` options bring in members from other modules, and make
 * this module's members available to others.
 */
function (type, meta) { return SWITCH_COMPILE_NGMODULE(type, meta); });
function preR3NgModuleCompile(moduleType, metadata) {
    var imports = (metadata && metadata.imports) || [];
    if (metadata && metadata.exports) {
        imports = tslib_1.__spread(imports, [metadata.exports]);
    }
    moduleType.ngInjectorDef = defineInjector({
        factory: convertInjectableProviderToFactory(moduleType, { useClass: moduleType }),
        providers: metadata && metadata.providers,
        imports: imports,
    });
}
export var SWITCH_COMPILE_NGMODULE__POST_R3__ = render3CompileNgModule;
var SWITCH_COMPILE_NGMODULE__PRE_R3__ = preR3NgModuleCompile;
var SWITCH_COMPILE_NGMODULE = SWITCH_COMPILE_NGMODULE__PRE_R3__;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbWV0YWRhdGEvbmdfbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFHSCxPQUFPLEVBQWUsY0FBYyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFbEUsT0FBTyxFQUFDLGtDQUFrQyxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBSTlELE9BQU8sRUFBQyxlQUFlLElBQUksc0JBQXNCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRixPQUFPLEVBQWdCLGFBQWEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBMlJoRTs7O0dBR0c7QUFDSCxNQUFNLENBQUMsSUFBTSxRQUFRLEdBQXNCLGFBQWEsQ0FDcEQsVUFBVSxFQUFFLFVBQUMsUUFBa0IsSUFBSyxPQUFBLFFBQVEsRUFBUixDQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVM7QUFDbEU7Ozs7Ozs7Ozs7R0FVRztBQUNILFVBQUMsSUFBa0IsRUFBRSxJQUFjLElBQUssT0FBQSx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQztBQXdCakYsU0FBUyxvQkFBb0IsQ0FBQyxVQUE2QixFQUFFLFFBQWtCO0lBQzdFLElBQUksT0FBTyxHQUFHLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkQsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRTtRQUNoQyxPQUFPLG9CQUFPLE9BQU8sR0FBRSxRQUFRLENBQUMsT0FBTyxFQUFDLENBQUM7S0FDMUM7SUFFRCxVQUFVLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQztRQUN4QyxPQUFPLEVBQUUsa0NBQWtDLENBQUMsVUFBVSxFQUFFLEVBQUMsUUFBUSxFQUFFLFVBQVUsRUFBQyxDQUFDO1FBQy9FLFNBQVMsRUFBRSxRQUFRLElBQUksUUFBUSxDQUFDLFNBQVM7UUFDekMsT0FBTyxFQUFFLE9BQU87S0FDakIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUdELE1BQU0sQ0FBQyxJQUFNLGtDQUFrQyxHQUFHLHNCQUFzQixDQUFDO0FBQ3pFLElBQU0saUNBQWlDLEdBQUcsb0JBQW9CLENBQUM7QUFDL0QsSUFBTSx1QkFBdUIsR0FBa0MsaUNBQWlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QXBwbGljYXRpb25SZWZ9IGZyb20gJy4uL2FwcGxpY2F0aW9uX3JlZic7XG5pbXBvcnQge0luamVjdG9yVHlwZSwgZGVmaW5lSW5qZWN0b3J9IGZyb20gJy4uL2RpL2ludGVyZmFjZS9kZWZzJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJy4uL2RpL2ludGVyZmFjZS9wcm92aWRlcic7XG5pbXBvcnQge2NvbnZlcnRJbmplY3RhYmxlUHJvdmlkZXJUb0ZhY3Rvcnl9IGZyb20gJy4uL2RpL3V0aWwnO1xuaW1wb3J0IHtUeXBlfSBmcm9tICcuLi9pbnRlcmZhY2UvdHlwZSc7XG5pbXBvcnQge1NjaGVtYU1ldGFkYXRhfSBmcm9tICcuLi9tZXRhZGF0YS9zY2hlbWEnO1xuaW1wb3J0IHtOZ01vZHVsZVR5cGV9IGZyb20gJy4uL3JlbmRlcjMnO1xuaW1wb3J0IHtjb21waWxlTmdNb2R1bGUgYXMgcmVuZGVyM0NvbXBpbGVOZ01vZHVsZX0gZnJvbSAnLi4vcmVuZGVyMy9qaXQvbW9kdWxlJztcbmltcG9ydCB7VHlwZURlY29yYXRvciwgbWFrZURlY29yYXRvcn0gZnJvbSAnLi4vdXRpbC9kZWNvcmF0b3JzJztcblxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGV4cGFuc2lvbiBvZiBhbiBgTmdNb2R1bGVgIGludG8gaXRzIHNjb3Blcy5cbiAqXG4gKiBBIHNjb3BlIGlzIGEgc2V0IG9mIGRpcmVjdGl2ZXMgYW5kIHBpcGVzIHRoYXQgYXJlIHZpc2libGUgaW4gYSBwYXJ0aWN1bGFyIGNvbnRleHQuIEVhY2hcbiAqIGBOZ01vZHVsZWAgaGFzIHR3byBzY29wZXMuIFRoZSBgY29tcGlsYXRpb25gIHNjb3BlIGlzIHRoZSBzZXQgb2YgZGlyZWN0aXZlcyBhbmQgcGlwZXMgdGhhdCB3aWxsXG4gKiBiZSByZWNvZ25pemVkIGluIHRoZSB0ZW1wbGF0ZXMgb2YgY29tcG9uZW50cyBkZWNsYXJlZCBieSB0aGUgbW9kdWxlLiBUaGUgYGV4cG9ydGVkYCBzY29wZSBpcyB0aGVcbiAqIHNldCBvZiBkaXJlY3RpdmVzIGFuZCBwaXBlcyBleHBvcnRlZCBieSBhIG1vZHVsZSAodGhhdCBpcywgbW9kdWxlIEIncyBleHBvcnRlZCBzY29wZSBnZXRzIGFkZGVkXG4gKiB0byBtb2R1bGUgQSdzIGNvbXBpbGF0aW9uIHNjb3BlIHdoZW4gbW9kdWxlIEEgaW1wb3J0cyBCKS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ01vZHVsZVRyYW5zaXRpdmVTY29wZXMge1xuICBjb21waWxhdGlvbjoge2RpcmVjdGl2ZXM6IFNldDxhbnk+OyBwaXBlczogU2V0PGFueT47fTtcbiAgZXhwb3J0ZWQ6IHtkaXJlY3RpdmVzOiBTZXQ8YW55PjsgcGlwZXM6IFNldDxhbnk+O307XG4gIHNjaGVtYXM6IFNjaGVtYU1ldGFkYXRhW118bnVsbDtcbn1cblxuZXhwb3J0IHR5cGUgTmdNb2R1bGVEZWZXaXRoTWV0YTxULCBEZWNsYXJhdGlvbnMsIEltcG9ydHMsIEV4cG9ydHM+ID0gTmdNb2R1bGVEZWY8VD47XG5cbi8qKlxuICogUnVudGltZSBsaW5rIGluZm9ybWF0aW9uIGZvciBOZ01vZHVsZXMuXG4gKlxuICogVGhpcyBpcyB0aGUgaW50ZXJuYWwgZGF0YSBzdHJ1Y3R1cmUgdXNlZCBieSB0aGUgcnVudGltZSB0byBhc3NlbWJsZSBjb21wb25lbnRzLCBkaXJlY3RpdmVzLFxuICogcGlwZXMsIGFuZCBpbmplY3RvcnMuXG4gKlxuICogTk9URTogQWx3YXlzIHVzZSBgZGVmaW5lTmdNb2R1bGVgIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGlzIG9iamVjdCxcbiAqIG5ldmVyIGNyZWF0ZSB0aGUgb2JqZWN0IGRpcmVjdGx5IHNpbmNlIHRoZSBzaGFwZSBvZiB0aGlzIG9iamVjdFxuICogY2FuIGNoYW5nZSBiZXR3ZWVuIHZlcnNpb25zLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5nTW9kdWxlRGVmPFQ+IHtcbiAgLyoqIFRva2VuIHJlcHJlc2VudGluZyB0aGUgbW9kdWxlLiBVc2VkIGJ5IERJLiAqL1xuICB0eXBlOiBUO1xuXG4gIC8qKiBMaXN0IG9mIGNvbXBvbmVudHMgdG8gYm9vdHN0cmFwLiAqL1xuICBib290c3RyYXA6IFR5cGU8YW55PltdfCgoKSA9PiBUeXBlPGFueT5bXSk7XG5cbiAgLyoqIExpc3Qgb2YgY29tcG9uZW50cywgZGlyZWN0aXZlcywgYW5kIHBpcGVzIGRlY2xhcmVkIGJ5IHRoaXMgbW9kdWxlLiAqL1xuICBkZWNsYXJhdGlvbnM6IFR5cGU8YW55PltdfCgoKSA9PiBUeXBlPGFueT5bXSk7XG5cbiAgLyoqIExpc3Qgb2YgbW9kdWxlcyBvciBgTW9kdWxlV2l0aFByb3ZpZGVyc2AgaW1wb3J0ZWQgYnkgdGhpcyBtb2R1bGUuICovXG4gIGltcG9ydHM6IFR5cGU8YW55PltdfCgoKSA9PiBUeXBlPGFueT5bXSk7XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgbW9kdWxlcywgYE1vZHVsZVdpdGhQcm92aWRlcnNgLCBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCBvciBwaXBlcyBleHBvcnRlZCBieSB0aGlzXG4gICAqIG1vZHVsZS5cbiAgICovXG4gIGV4cG9ydHM6IFR5cGU8YW55PltdfCgoKSA9PiBUeXBlPGFueT5bXSk7XG5cbiAgLyoqXG4gICAqIENhY2hlZCB2YWx1ZSBvZiBjb21wdXRlZCBgdHJhbnNpdGl2ZUNvbXBpbGVTY29wZXNgIGZvciB0aGlzIG1vZHVsZS5cbiAgICpcbiAgICogVGhpcyBzaG91bGQgbmV2ZXIgYmUgcmVhZCBkaXJlY3RseSwgYnV0IGFjY2Vzc2VkIHZpYSBgdHJhbnNpdGl2ZVNjb3Blc0ZvcmAuXG4gICAqL1xuICB0cmFuc2l0aXZlQ29tcGlsZVNjb3BlczogTmdNb2R1bGVUcmFuc2l0aXZlU2NvcGVzfG51bGw7XG5cbiAgLyoqIFRoZSBzZXQgb2Ygc2NoZW1hcyB0aGF0IGRlY2xhcmUgZWxlbWVudHMgdG8gYmUgYWxsb3dlZCBpbiB0aGUgTmdNb2R1bGUuICovXG4gIHNjaGVtYXM6IFNjaGVtYU1ldGFkYXRhW118bnVsbDtcbn1cblxuLyoqXG4gKiBBIHdyYXBwZXIgYXJvdW5kIGFuIE5nTW9kdWxlIHRoYXQgYXNzb2NpYXRlcyBpdCB3aXRoIHRoZSBwcm92aWRlcnMuXG4gKlxuICogQHBhcmFtIFQgdGhlIG1vZHVsZSB0eXBlLiBJbiBJdnkgYXBwbGljYXRpb25zLCB0aGlzIG11c3QgYmUgZXhwbGljaXRseVxuICogcHJvdmlkZWQuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1vZHVsZVdpdGhQcm92aWRlcnM8XG4gICAgVCA9IGFueSAvKiogVE9ETyhhbHhodWIpOiByZW1vdmUgZGVmYXVsdCB3aGVuIGNhbGxlcnMgcGFzcyBleHBsaWNpdCB0eXBlIHBhcmFtICovPiB7XG4gIG5nTW9kdWxlOiBUeXBlPFQ+O1xuICBwcm92aWRlcnM/OiBQcm92aWRlcltdO1xufVxuXG5cbi8qKlxuICogVHlwZSBvZiB0aGUgTmdNb2R1bGUgZGVjb3JhdG9yIC8gY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5nTW9kdWxlRGVjb3JhdG9yIHtcbiAgLyoqXG4gICAqIERlY29yYXRvciB0aGF0IG1hcmtzIGEgY2xhc3MgYXMgYW4gTmdNb2R1bGUgYW5kIHN1cHBsaWVzIGNvbmZpZ3VyYXRpb24gbWV0YWRhdGEuXG4gICAqL1xuICAob2JqPzogTmdNb2R1bGUpOiBUeXBlRGVjb3JhdG9yO1xuICBuZXcgKG9iaj86IE5nTW9kdWxlKTogTmdNb2R1bGU7XG59XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgTmdNb2R1bGUgbWV0YWRhdGEuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5nTW9kdWxlIHtcbiAgLyoqXG4gICAqIFRoZSBzZXQgb2YgaW5qZWN0YWJsZSBvYmplY3RzIHRoYXQgYXJlIGF2YWlsYWJsZSBpbiB0aGUgaW5qZWN0b3JcbiAgICogb2YgdGhpcyBtb2R1bGUuXG4gICAqXG4gICAqIEBzZWUgW0RlcGVuZGVuY3kgSW5qZWN0aW9uIGd1aWRlXShndWlkZS9kZXBlbmRlbmN5LWluamVjdGlvbilcbiAgICogQHNlZSBbTmdNb2R1bGUgZ3VpZGVdKGd1aWRlL3Byb3ZpZGVycylcbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICpcbiAgICogRGVwZW5kZW5jaWVzIHdob3NlIHByb3ZpZGVycyBhcmUgbGlzdGVkIGhlcmUgYmVjb21lIGF2YWlsYWJsZSBmb3IgaW5qZWN0aW9uXG4gICAqIGludG8gYW55IGNvbXBvbmVudCwgZGlyZWN0aXZlLCBwaXBlIG9yIHNlcnZpY2UgdGhhdCBpcyBhIGNoaWxkIG9mIHRoaXMgaW5qZWN0b3IuXG4gICAqIFRoZSBOZ01vZHVsZSB1c2VkIGZvciBib290c3RyYXBwaW5nIHVzZXMgdGhlIHJvb3QgaW5qZWN0b3IsIGFuZCBjYW4gcHJvdmlkZSBkZXBlbmRlbmNpZXNcbiAgICogdG8gYW55IHBhcnQgb2YgdGhlIGFwcC5cbiAgICpcbiAgICogQSBsYXp5LWxvYWRlZCBtb2R1bGUgaGFzIGl0cyBvd24gaW5qZWN0b3IsIHR5cGljYWxseSBhIGNoaWxkIG9mIHRoZSBhcHAgcm9vdCBpbmplY3Rvci5cbiAgICogTGF6eS1sb2FkZWQgc2VydmljZXMgYXJlIHNjb3BlZCB0byB0aGUgbGF6eS1sb2FkZWQgbW9kdWxlJ3MgaW5qZWN0b3IuXG4gICAqIElmIGEgbGF6eS1sb2FkZWQgbW9kdWxlIGFsc28gcHJvdmlkZXMgdGhlIGBVc2VyU2VydmljZWAsIGFueSBjb21wb25lbnQgY3JlYXRlZFxuICAgKiB3aXRoaW4gdGhhdCBtb2R1bGUncyBjb250ZXh0IChzdWNoIGFzIGJ5IHJvdXRlciBuYXZpZ2F0aW9uKSBnZXRzIHRoZSBsb2NhbCBpbnN0YW5jZVxuICAgKiBvZiB0aGUgc2VydmljZSwgbm90IHRoZSBpbnN0YW5jZSBpbiB0aGUgcm9vdCBpbmplY3Rvci5cbiAgICogQ29tcG9uZW50cyBpbiBleHRlcm5hbCBtb2R1bGVzIGNvbnRpbnVlIHRvIHJlY2VpdmUgdGhlIGluc3RhbmNlIHByb3ZpZGVkIGJ5IHRoZWlyIGluamVjdG9ycy5cbiAgICpcbiAgICogIyMjIEV4YW1wbGVcbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGRlZmluZXMgYSBjbGFzcyB0aGF0IGlzIGluamVjdGVkIGluXG4gICAqIHRoZSBIZWxsb1dvcmxkIE5nTW9kdWxlOlxuICAgKlxuICAgKiBgYGBcbiAgICogY2xhc3MgR3JlZXRlciB7XG4gICAqICAgIGdyZWV0KG5hbWU6c3RyaW5nKSB7XG4gICAqICAgICAgcmV0dXJuICdIZWxsbyAnICsgbmFtZSArICchJztcbiAgICogICAgfVxuICAgKiB9XG4gICAqXG4gICAqIEBOZ01vZHVsZSh7XG4gICAqICAgcHJvdmlkZXJzOiBbXG4gICAqICAgICBHcmVldGVyXG4gICAqICAgXVxuICAgKiB9KVxuICAgKiBjbGFzcyBIZWxsb1dvcmxkIHtcbiAgICogICBncmVldGVyOkdyZWV0ZXI7XG4gICAqXG4gICAqICAgY29uc3RydWN0b3IoZ3JlZXRlcjpHcmVldGVyKSB7XG4gICAqICAgICB0aGlzLmdyZWV0ZXIgPSBncmVldGVyO1xuICAgKiAgIH1cbiAgICogfVxuICAgKiBgYGBcbiAgICovXG4gIHByb3ZpZGVycz86IFByb3ZpZGVyW107XG5cbiAgLyoqXG4gICAqIFRoZSBzZXQgb2YgY29tcG9uZW50cywgZGlyZWN0aXZlcywgYW5kIHBpcGVzIChbZGVjbGFyYWJsZXNdKGd1aWRlL2dsb3NzYXJ5I2RlY2xhcmFibGUpKVxuICAgKiB0aGF0IGJlbG9uZyB0byB0aGlzIG1vZHVsZS5cbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICpcbiAgICogVGhlIHNldCBvZiBzZWxlY3RvcnMgdGhhdCBhcmUgYXZhaWxhYmxlIHRvIGEgdGVtcGxhdGUgaW5jbHVkZSB0aG9zZSBkZWNsYXJlZCBoZXJlLCBhbmRcbiAgICogdGhvc2UgdGhhdCBhcmUgZXhwb3J0ZWQgZnJvbSBpbXBvcnRlZCBOZ01vZHVsZXMuXG4gICAqXG4gICAqIERlY2xhcmFibGVzIG11c3QgYmVsb25nIHRvIGV4YWN0bHkgb25lIG1vZHVsZS5cbiAgICogVGhlIGNvbXBpbGVyIGVtaXRzIGFuIGVycm9yIGlmIHlvdSB0cnkgdG8gZGVjbGFyZSB0aGUgc2FtZSBjbGFzcyBpbiBtb3JlIHRoYW4gb25lIG1vZHVsZS5cbiAgICogQmUgY2FyZWZ1bCBub3QgdG8gZGVjbGFyZSBhIGNsYXNzIHRoYXQgaXMgaW1wb3J0ZWQgZnJvbSBhbm90aGVyIG1vZHVsZS5cbiAgICpcbiAgICogIyMjIEV4YW1wbGVcbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGFsbG93cyB0aGUgQ29tbW9uTW9kdWxlIHRvIHVzZSB0aGUgYE5nRm9yYFxuICAgKiBkaXJlY3RpdmUuXG4gICAqXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogQE5nTW9kdWxlKHtcbiAgICogICBkZWNsYXJhdGlvbnM6IFtOZ0Zvcl1cbiAgICogfSlcbiAgICogY2xhc3MgQ29tbW9uTW9kdWxlIHtcbiAgICogfVxuICAgKiBgYGBcbiAgICovXG4gIGRlY2xhcmF0aW9ucz86IEFycmF5PFR5cGU8YW55PnxhbnlbXT47XG5cbiAgLyoqXG4gICAqIFRoZSBzZXQgb2YgTmdNb2R1bGVzIHdob3NlIGV4cG9ydGVkIFtkZWNsYXJhYmxlc10oZ3VpZGUvZ2xvc3NhcnkjZGVjbGFyYWJsZSlcbiAgICogYXJlIGF2YWlsYWJsZSB0byB0ZW1wbGF0ZXMgaW4gdGhpcyBtb2R1bGUuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqXG4gICAqIEEgdGVtcGxhdGUgY2FuIHVzZSBleHBvcnRlZCBkZWNsYXJhYmxlcyBmcm9tIGFueVxuICAgKiBpbXBvcnRlZCBtb2R1bGUsIGluY2x1ZGluZyB0aG9zZSBmcm9tIG1vZHVsZXMgdGhhdCBhcmUgaW1wb3J0ZWQgaW5kaXJlY3RseVxuICAgKiBhbmQgcmUtZXhwb3J0ZWQuXG4gICAqIEZvciBleGFtcGxlLCBgTW9kdWxlQWAgaW1wb3J0cyBgTW9kdWxlQmAsIGFuZCBhbHNvIGV4cG9ydHNcbiAgICogaXQsIHdoaWNoIG1ha2VzIHRoZSBkZWNsYXJhYmxlcyBmcm9tIGBNb2R1bGVCYCBhdmFpbGFibGVcbiAgICogd2hlcmV2ZXIgYE1vZHVsZUFgIGlzIGltcG9ydGVkLlxuICAgKlxuICAgKiAjIyMgRXhhbXBsZVxuICAgKlxuICAgKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgYWxsb3dzIE1haW5Nb2R1bGUgdG8gdXNlIGFudGhpbmcgZXhwb3J0ZWQgYnlcbiAgICogYENvbW1vbk1vZHVsZWA6XG4gICAqXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogQE5nTW9kdWxlKHtcbiAgICogICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXVxuICAgKiB9KVxuICAgKiBjbGFzcyBNYWluTW9kdWxlIHtcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICovXG4gIGltcG9ydHM/OiBBcnJheTxUeXBlPGFueT58TW9kdWxlV2l0aFByb3ZpZGVyczx7fT58YW55W10+O1xuXG4gIC8qKlxuICAgKiBUaGUgc2V0IG9mIGNvbXBvbmVudHMsIGRpcmVjdGl2ZXMsIGFuZCBwaXBlcyBkZWNsYXJlZCBpbiB0aGlzXG4gICAqIE5nTW9kdWxlIHRoYXQgY2FuIGJlIHVzZWQgaW4gdGhlIHRlbXBsYXRlIG9mIGFueSBjb21wb25lbnQgdGhhdCBpcyBwYXJ0IG9mIGFuXG4gICAqIE5nTW9kdWxlIHRoYXQgaW1wb3J0cyB0aGlzIE5nTW9kdWxlLiBFeHBvcnRlZCBkZWNsYXJhdGlvbnMgYXJlIHRoZSBtb2R1bGUncyBwdWJsaWMgQVBJLlxuICAgKlxuICAgKiBBIGRlY2xhcmFibGUgYmVsb25ncyB0byBvbmUgYW5kIG9ubHkgb25lIE5nTW9kdWxlLlxuICAgKiBBIG1vZHVsZSBjYW4gbGlzdCBhbm90aGVyIG1vZHVsZSBhbW9uZyBpdHMgZXhwb3J0cywgaW4gd2hpY2ggY2FzZSBhbGwgb2YgdGhhdCBtb2R1bGUnc1xuICAgKiBwdWJsaWMgZGVjbGFyYXRpb24gYXJlIGV4cG9ydGVkLlxuICAgKlxuICAgKiBAdXNhZ2VOb3Rlc1xuICAgKlxuICAgKiBEZWNsYXJhdGlvbnMgYXJlIHByaXZhdGUgYnkgZGVmYXVsdC5cbiAgICogSWYgdGhpcyBNb2R1bGVBIGRvZXMgbm90IGV4cG9ydCBVc2VyQ29tcG9uZW50LCB0aGVuIG9ubHkgdGhlIGNvbXBvbmVudHMgd2l0aGluIHRoaXNcbiAgICogTW9kdWxlQSBjYW4gdXNlIFVzZXJDb21wb25lbnQuXG4gICAqXG4gICAqIE1vZHVsZUEgY2FuIGltcG9ydCBNb2R1bGVCIGFuZCBhbHNvIGV4cG9ydCBpdCwgbWFraW5nIGV4cG9ydHMgZnJvbSBNb2R1bGVCXG4gICAqIGF2YWlsYWJsZSB0byBhbiBOZ01vZHVsZSB0aGF0IGltcG9ydHMgTW9kdWxlQS5cbiAgICpcbiAgICogIyMjIEV4YW1wbGVcbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGV4cG9ydHMgdGhlIGBOZ0ZvcmAgZGlyZWN0aXZlIGZyb20gQ29tbW9uTW9kdWxlLlxuICAgKlxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIEBOZ01vZHVsZSh7XG4gICAqICAgZXhwb3J0czogW05nRm9yXVxuICAgKiB9KVxuICAgKiBjbGFzcyBDb21tb25Nb2R1bGUge1xuICAgKiB9XG4gICAqIGBgYFxuICAgKi9cbiAgZXhwb3J0cz86IEFycmF5PFR5cGU8YW55PnxhbnlbXT47XG5cbiAgLyoqXG4gICAqIFRoZSBzZXQgb2YgY29tcG9uZW50cyB0byBjb21waWxlIHdoZW4gdGhpcyBOZ01vZHVsZSBpcyBkZWZpbmVkLFxuICAgKiBzbyB0aGF0IHRoZXkgY2FuIGJlIGR5bmFtaWNhbGx5IGxvYWRlZCBpbnRvIHRoZSB2aWV3LlxuICAgKlxuICAgKiBGb3IgZWFjaCBjb21wb25lbnQgbGlzdGVkIGhlcmUsIEFuZ3VsYXIgY3JlYXRlcyBhIGBDb21wb25lbnRGYWN0b3J5YFxuICAgKiBhbmQgc3RvcmVzIGl0IGluIHRoZSBgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyYC5cbiAgICpcbiAgICogQW5ndWxhciBhdXRvbWF0aWNhbGx5IGFkZHMgY29tcG9uZW50cyBpbiB0aGUgbW9kdWxlJ3MgYm9vdHN0cmFwXG4gICAqIGFuZCByb3V0ZSBkZWZpbml0aW9ucyBpbnRvIHRoZSBgZW50cnlDb21wb25lbnRzYCBsaXN0LiBVc2UgdGhpc1xuICAgKiBvcHRpb24gdG8gYWRkIGNvbXBvbmVudHMgdGhhdCBhcmUgYm9vdHN0cmFwcGVkXG4gICAqIHVzaW5nIG9uZSBvZiB0aGUgaW1wZXJhdGl2ZSB0ZWNobmlxdWVzLCBzdWNoIGFzIGBWaWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudCgpYC5cbiAgICpcbiAgICogQHNlZSBbRW50cnkgQ29tcG9uZW50c10oZ3VpZGUvZW50cnktY29tcG9uZW50cylcbiAgICovXG4gIGVudHJ5Q29tcG9uZW50cz86IEFycmF5PFR5cGU8YW55PnxhbnlbXT47XG5cbiAgLyoqXG4gICAqIFRoZSBzZXQgb2YgY29tcG9uZW50cyB0aGF0IGFyZSBib290c3RyYXBwZWQgd2hlblxuICAgKiB0aGlzIG1vZHVsZSBpcyBib290c3RyYXBwZWQuIFRoZSBjb21wb25lbnRzIGxpc3RlZCBoZXJlXG4gICAqIGFyZSBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGBlbnRyeUNvbXBvbmVudHNgLlxuICAgKi9cbiAgYm9vdHN0cmFwPzogQXJyYXk8VHlwZTxhbnk+fGFueVtdPjtcblxuICAvKipcbiAgICogVGhlIHNldCBvZiBzY2hlbWFzIHRoYXQgZGVjbGFyZSBlbGVtZW50cyB0byBiZSBhbGxvd2VkIGluIHRoZSBOZ01vZHVsZS5cbiAgICogRWxlbWVudHMgYW5kIHByb3BlcnRpZXMgdGhhdCBhcmUgbmVpdGhlciBBbmd1bGFyIGNvbXBvbmVudHMgbm9yIGRpcmVjdGl2ZXNcbiAgICogbXVzdCBiZSBkZWNsYXJlZCBpbiBhIHNjaGVtYS5cbiAgICpcbiAgICogQWxsb3dlZCB2YWx1ZSBhcmUgYE5PX0VSUk9SU19TQ0hFTUFgIGFuZCBgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQWAuXG4gICAqXG4gICAqIEBzZWN1cml0eSBXaGVuIHVzaW5nIG9uZSBvZiBgTk9fRVJST1JTX1NDSEVNQWAgb3IgYENVU1RPTV9FTEVNRU5UU19TQ0hFTUFgXG4gICAqIHlvdSBtdXN0IGVuc3VyZSB0aGF0IGFsbG93ZWQgZWxlbWVudHMgYW5kIHByb3BlcnRpZXMgc2VjdXJlbHkgZXNjYXBlIGlucHV0cy5cbiAgICovXG4gIHNjaGVtYXM/OiBBcnJheTxTY2hlbWFNZXRhZGF0YXxhbnlbXT47XG5cbiAgLyoqXG4gICAqIEEgbmFtZSBvciBwYXRoIHRoYXQgdW5pcXVlbHkgaWRlbnRpZmllcyB0aGlzIE5nTW9kdWxlIGluIGBnZXRNb2R1bGVGYWN0b3J5YC5cbiAgICogSWYgbGVmdCBgdW5kZWZpbmVkYCwgdGhlIE5nTW9kdWxlIGlzIG5vdCByZWdpc3RlcmVkIHdpdGhcbiAgICogYGdldE1vZHVsZUZhY3RvcnlgLlxuICAgKi9cbiAgaWQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIElmIHRydWUsIHRoaXMgbW9kdWxlIHdpbGwgYmUgc2tpcHBlZCBieSB0aGUgQU9UIGNvbXBpbGVyIGFuZCBzbyB3aWxsIGFsd2F5cyBiZSBjb21waWxlZFxuICAgKiB1c2luZyBKSVQuXG4gICAqXG4gICAqIFRoaXMgZXhpc3RzIHRvIHN1cHBvcnQgZnV0dXJlIEl2eSB3b3JrIGFuZCBoYXMgbm8gZWZmZWN0IGN1cnJlbnRseS5cbiAgICovXG4gIGppdD86IHRydWU7XG59XG5cbi8qKlxuICogQEFubm90YXRpb25cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IE5nTW9kdWxlOiBOZ01vZHVsZURlY29yYXRvciA9IG1ha2VEZWNvcmF0b3IoXG4gICAgJ05nTW9kdWxlJywgKG5nTW9kdWxlOiBOZ01vZHVsZSkgPT4gbmdNb2R1bGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLFxuICAgIC8qKlxuICAgICAqIERlY29yYXRvciB0aGF0IG1hcmtzIHRoZSBmb2xsb3dpbmcgY2xhc3MgYXMgYW4gTmdNb2R1bGUsIGFuZCBzdXBwbGllc1xuICAgICAqIGNvbmZpZ3VyYXRpb24gbWV0YWRhdGEgZm9yIGl0LlxuICAgICAqXG4gICAgICogKiBUaGUgYGRlY2xhcmF0aW9uc2AgYW5kIGBlbnRyeUNvbXBvbmVudHNgIG9wdGlvbnMgY29uZmlndXJlIHRoZSBjb21waWxlclxuICAgICAqIHdpdGggaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBiZWxvbmdzIHRvIHRoZSBOZ01vZHVsZS5cbiAgICAgKiAqIFRoZSBgcHJvdmlkZXJzYCBvcHRpb25zIGNvbmZpZ3VyZXMgdGhlIE5nTW9kdWxlJ3MgaW5qZWN0b3IgdG8gcHJvdmlkZVxuICAgICAqIGRlcGVuZGVuY2llcyB0aGUgTmdNb2R1bGUgbWVtYmVycy5cbiAgICAgKiAqIFRoZSBgaW1wb3J0c2AgYW5kIGBleHBvcnRzYCBvcHRpb25zIGJyaW5nIGluIG1lbWJlcnMgZnJvbSBvdGhlciBtb2R1bGVzLCBhbmQgbWFrZVxuICAgICAqIHRoaXMgbW9kdWxlJ3MgbWVtYmVycyBhdmFpbGFibGUgdG8gb3RoZXJzLlxuICAgICAqL1xuICAgICh0eXBlOiBOZ01vZHVsZVR5cGUsIG1ldGE6IE5nTW9kdWxlKSA9PiBTV0lUQ0hfQ09NUElMRV9OR01PRFVMRSh0eXBlLCBtZXRhKSk7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiBIb29rIGZvciBtYW51YWwgYm9vdHN0cmFwcGluZyBvZiB0aGUgYXBwbGljYXRpb24gaW5zdGVhZCBvZiB1c2luZyBib290c3RyYXAgYXJyYXkgaW4gQE5nTW9kdWxlXG4gKiBhbm5vdGF0aW9uLlxuICpcbiAqIFJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBhcHBsaWNhdGlvbiBpcyBwcm92aWRlZCBhcyBhIHBhcmFtZXRlci5cbiAqXG4gKiBTZWUgW1wiQm9vdHN0cmFwcGluZ1wiXShndWlkZS9ib290c3RyYXBwaW5nKSBhbmQgW1wiRW50cnkgY29tcG9uZW50c1wiXShndWlkZS9lbnRyeS1jb21wb25lbnRzKS5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogYGBgdHlwZXNjcmlwdFxuICogY2xhc3MgQXBwTW9kdWxlIGltcGxlbWVudHMgRG9Cb290c3RyYXAge1xuICogICBuZ0RvQm9vdHN0cmFwKGFwcFJlZjogQXBwbGljYXRpb25SZWYpIHtcbiAqICAgICBhcHBSZWYuYm9vdHN0cmFwKEFwcENvbXBvbmVudCk7IC8vIE9yIHNvbWUgb3RoZXIgY29tcG9uZW50XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEb0Jvb3RzdHJhcCB7IG5nRG9Cb290c3RyYXAoYXBwUmVmOiBBcHBsaWNhdGlvblJlZik6IHZvaWQ7IH1cblxuZnVuY3Rpb24gcHJlUjNOZ01vZHVsZUNvbXBpbGUobW9kdWxlVHlwZTogSW5qZWN0b3JUeXBlPGFueT4sIG1ldGFkYXRhOiBOZ01vZHVsZSk6IHZvaWQge1xuICBsZXQgaW1wb3J0cyA9IChtZXRhZGF0YSAmJiBtZXRhZGF0YS5pbXBvcnRzKSB8fCBbXTtcbiAgaWYgKG1ldGFkYXRhICYmIG1ldGFkYXRhLmV4cG9ydHMpIHtcbiAgICBpbXBvcnRzID0gWy4uLmltcG9ydHMsIG1ldGFkYXRhLmV4cG9ydHNdO1xuICB9XG5cbiAgbW9kdWxlVHlwZS5uZ0luamVjdG9yRGVmID0gZGVmaW5lSW5qZWN0b3Ioe1xuICAgIGZhY3Rvcnk6IGNvbnZlcnRJbmplY3RhYmxlUHJvdmlkZXJUb0ZhY3RvcnkobW9kdWxlVHlwZSwge3VzZUNsYXNzOiBtb2R1bGVUeXBlfSksXG4gICAgcHJvdmlkZXJzOiBtZXRhZGF0YSAmJiBtZXRhZGF0YS5wcm92aWRlcnMsXG4gICAgaW1wb3J0czogaW1wb3J0cyxcbiAgfSk7XG59XG5cblxuZXhwb3J0IGNvbnN0IFNXSVRDSF9DT01QSUxFX05HTU9EVUxFX19QT1NUX1IzX18gPSByZW5kZXIzQ29tcGlsZU5nTW9kdWxlO1xuY29uc3QgU1dJVENIX0NPTVBJTEVfTkdNT0RVTEVfX1BSRV9SM19fID0gcHJlUjNOZ01vZHVsZUNvbXBpbGU7XG5jb25zdCBTV0lUQ0hfQ09NUElMRV9OR01PRFVMRTogdHlwZW9mIHJlbmRlcjNDb21waWxlTmdNb2R1bGUgPSBTV0lUQ0hfQ09NUElMRV9OR01PRFVMRV9fUFJFX1IzX187XG4iXX0=