/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventEmitter } from '../event_emitter';
import { getSymbolIterator } from '../util/symbol';
/**
 * An unmodifiable list of items that Angular keeps up to date when the state
 * of the application changes.
 *
 * The type of object that {@link ViewChildren}, {@link ContentChildren}, and {@link QueryList}
 * provide.
 *
 * Implements an iterable interface, therefore it can be used in both ES6
 * javascript `for (var i of items)` loops as well as in Angular templates with
 * `*ngFor="let i of myList"`.
 *
 * Changes can be observed by subscribing to the changes `Observable`.
 *
 * NOTE: In the future this class will implement an `Observable` interface.
 *
 * @usageNotes
 * ### Example
 * ```typescript
 * @Component({...})
 * class Container {
 *   @ViewChildren(Item) items:QueryList<Item>;
 * }
 * ```
 *
 * @publicApi
 */
var QueryList = /** @class */ (function () {
    function QueryList() {
        this.dirty = true;
        this._results = [];
        this.changes = new EventEmitter();
        this.length = 0;
    }
    /**
     * See
     * [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
     */
    QueryList.prototype.map = function (fn) { return this._results.map(fn); };
    /**
     * See
     * [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
     */
    QueryList.prototype.filter = function (fn) {
        return this._results.filter(fn);
    };
    /**
     * See
     * [Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
     */
    QueryList.prototype.find = function (fn) {
        return this._results.find(fn);
    };
    /**
     * See
     * [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
     */
    QueryList.prototype.reduce = function (fn, init) {
        return this._results.reduce(fn, init);
    };
    /**
     * See
     * [Array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
     */
    QueryList.prototype.forEach = function (fn) { this._results.forEach(fn); };
    /**
     * See
     * [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
     */
    QueryList.prototype.some = function (fn) {
        return this._results.some(fn);
    };
    QueryList.prototype.toArray = function () { return this._results.slice(); };
    QueryList.prototype[getSymbolIterator()] = function () { return this._results[getSymbolIterator()](); };
    QueryList.prototype.toString = function () { return this._results.toString(); };
    QueryList.prototype.reset = function (res) {
        this._results = flatten(res);
        this.dirty = false;
        this.length = this._results.length;
        this.last = this._results[this.length - 1];
        this.first = this._results[0];
    };
    QueryList.prototype.notifyOnChanges = function () { this.changes.emit(this); };
    /** internal */
    QueryList.prototype.setDirty = function () { this.dirty = true; };
    /** internal */
    QueryList.prototype.destroy = function () {
        this.changes.complete();
        this.changes.unsubscribe();
    };
    return QueryList;
}());
export { QueryList };
function flatten(list) {
    return list.reduce(function (flat, item) {
        var flatItem = Array.isArray(item) ? flatten(item) : item;
        return flat.concat(flatItem);
    }, []);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnlfbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpbmtlci9xdWVyeV9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUlILE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUdqRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRztBQUNIO0lBQUE7UUFDa0IsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNyQixhQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ2hCLFlBQU8sR0FBb0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyRCxXQUFNLEdBQVcsQ0FBQyxDQUFDO0lBMEU5QixDQUFDO0lBcEVDOzs7T0FHRztJQUNILHVCQUFHLEdBQUgsVUFBTyxFQUE2QyxJQUFTLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTVGOzs7T0FHRztJQUNILDBCQUFNLEdBQU4sVUFBTyxFQUFtRDtRQUN4RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7O09BR0c7SUFDSCx3QkFBSSxHQUFKLFVBQUssRUFBbUQ7UUFDdEQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMEJBQU0sR0FBTixVQUFVLEVBQWtFLEVBQUUsSUFBTztRQUNuRixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMkJBQU8sR0FBUCxVQUFRLEVBQWdELElBQVUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTlGOzs7T0FHRztJQUNILHdCQUFJLEdBQUosVUFBSyxFQUFvRDtRQUN2RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCwyQkFBTyxHQUFQLGNBQWlCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFaEQsb0JBQUMsaUJBQWlCLEVBQUUsQ0FBQyxHQUFyQixjQUF1QyxPQUFRLElBQUksQ0FBQyxRQUFnQixDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUU5Riw0QkFBUSxHQUFSLGNBQXFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFdkQseUJBQUssR0FBTCxVQUFNLEdBQW1CO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQXdCLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QyxJQUF3QixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUN2RCxJQUFpQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEQsSUFBa0IsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsbUNBQWUsR0FBZixjQUEyQixJQUFJLENBQUMsT0FBNkIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTNFLGVBQWU7SUFDZiw0QkFBUSxHQUFSLGNBQWMsSUFBd0IsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUV0RCxlQUFlO0lBQ2YsMkJBQU8sR0FBUDtRQUNHLElBQUksQ0FBQyxPQUE2QixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxPQUE2QixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUEvRUQsSUErRUM7O0FBRUQsU0FBUyxPQUFPLENBQUksSUFBa0I7SUFDcEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBVyxFQUFFLElBQWE7UUFDNUMsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDNUQsT0FBYSxJQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNULENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICcuLi9ldmVudF9lbWl0dGVyJztcbmltcG9ydCB7Z2V0U3ltYm9sSXRlcmF0b3J9IGZyb20gJy4uL3V0aWwvc3ltYm9sJztcblxuXG4vKipcbiAqIEFuIHVubW9kaWZpYWJsZSBsaXN0IG9mIGl0ZW1zIHRoYXQgQW5ndWxhciBrZWVwcyB1cCB0byBkYXRlIHdoZW4gdGhlIHN0YXRlXG4gKiBvZiB0aGUgYXBwbGljYXRpb24gY2hhbmdlcy5cbiAqXG4gKiBUaGUgdHlwZSBvZiBvYmplY3QgdGhhdCB7QGxpbmsgVmlld0NoaWxkcmVufSwge0BsaW5rIENvbnRlbnRDaGlsZHJlbn0sIGFuZCB7QGxpbmsgUXVlcnlMaXN0fVxuICogcHJvdmlkZS5cbiAqXG4gKiBJbXBsZW1lbnRzIGFuIGl0ZXJhYmxlIGludGVyZmFjZSwgdGhlcmVmb3JlIGl0IGNhbiBiZSB1c2VkIGluIGJvdGggRVM2XG4gKiBqYXZhc2NyaXB0IGBmb3IgKHZhciBpIG9mIGl0ZW1zKWAgbG9vcHMgYXMgd2VsbCBhcyBpbiBBbmd1bGFyIHRlbXBsYXRlcyB3aXRoXG4gKiBgKm5nRm9yPVwibGV0IGkgb2YgbXlMaXN0XCJgLlxuICpcbiAqIENoYW5nZXMgY2FuIGJlIG9ic2VydmVkIGJ5IHN1YnNjcmliaW5nIHRvIHRoZSBjaGFuZ2VzIGBPYnNlcnZhYmxlYC5cbiAqXG4gKiBOT1RFOiBJbiB0aGUgZnV0dXJlIHRoaXMgY2xhc3Mgd2lsbCBpbXBsZW1lbnQgYW4gYE9ic2VydmFibGVgIGludGVyZmFjZS5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogIyMjIEV4YW1wbGVcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIEBDb21wb25lbnQoey4uLn0pXG4gKiBjbGFzcyBDb250YWluZXIge1xuICogICBAVmlld0NoaWxkcmVuKEl0ZW0pIGl0ZW1zOlF1ZXJ5TGlzdDxJdGVtPjtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIFF1ZXJ5TGlzdDxUPi8qIGltcGxlbWVudHMgSXRlcmFibGU8VD4gKi8ge1xuICBwdWJsaWMgcmVhZG9ubHkgZGlydHkgPSB0cnVlO1xuICBwcml2YXRlIF9yZXN1bHRzOiBBcnJheTxUPiA9IFtdO1xuICBwdWJsaWMgcmVhZG9ubHkgY2hhbmdlczogT2JzZXJ2YWJsZTxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHJlYWRvbmx5IGxlbmd0aDogbnVtYmVyID0gMDtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHJlYWRvbmx5IGZpcnN0ICE6IFQ7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICByZWFkb25seSBsYXN0ICE6IFQ7XG5cbiAgLyoqXG4gICAqIFNlZVxuICAgKiBbQXJyYXkubWFwXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9tYXApXG4gICAqL1xuICBtYXA8VT4oZm46IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogVFtdKSA9PiBVKTogVVtdIHsgcmV0dXJuIHRoaXMuX3Jlc3VsdHMubWFwKGZuKTsgfVxuXG4gIC8qKlxuICAgKiBTZWVcbiAgICogW0FycmF5LmZpbHRlcl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZmlsdGVyKVxuICAgKi9cbiAgZmlsdGVyKGZuOiAoaXRlbTogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IFRbXSkgPT4gYm9vbGVhbik6IFRbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdHMuZmlsdGVyKGZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWVcbiAgICogW0FycmF5LmZpbmRdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZpbmQpXG4gICAqL1xuICBmaW5kKGZuOiAoaXRlbTogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IFRbXSkgPT4gYm9vbGVhbik6IFR8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0cy5maW5kKGZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWVcbiAgICogW0FycmF5LnJlZHVjZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvcmVkdWNlKVxuICAgKi9cbiAgcmVkdWNlPFU+KGZuOiAocHJldlZhbHVlOiBVLCBjdXJWYWx1ZTogVCwgY3VySW5kZXg6IG51bWJlciwgYXJyYXk6IFRbXSkgPT4gVSwgaW5pdDogVSk6IFUge1xuICAgIHJldHVybiB0aGlzLl9yZXN1bHRzLnJlZHVjZShmbiwgaW5pdCk7XG4gIH1cblxuICAvKipcbiAgICogU2VlXG4gICAqIFtBcnJheS5mb3JFYWNoXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9mb3JFYWNoKVxuICAgKi9cbiAgZm9yRWFjaChmbjogKGl0ZW06IFQsIGluZGV4OiBudW1iZXIsIGFycmF5OiBUW10pID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fcmVzdWx0cy5mb3JFYWNoKGZuKTsgfVxuXG4gIC8qKlxuICAgKiBTZWVcbiAgICogW0FycmF5LnNvbWVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3NvbWUpXG4gICAqL1xuICBzb21lKGZuOiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIsIGFycmF5OiBUW10pID0+IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0cy5zb21lKGZuKTtcbiAgfVxuXG4gIHRvQXJyYXkoKTogVFtdIHsgcmV0dXJuIHRoaXMuX3Jlc3VsdHMuc2xpY2UoKTsgfVxuXG4gIFtnZXRTeW1ib2xJdGVyYXRvcigpXSgpOiBJdGVyYXRvcjxUPiB7IHJldHVybiAodGhpcy5fcmVzdWx0cyBhcyBhbnkpW2dldFN5bWJvbEl0ZXJhdG9yKCldKCk7IH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fcmVzdWx0cy50b1N0cmluZygpOyB9XG5cbiAgcmVzZXQocmVzOiBBcnJheTxUfGFueVtdPik6IHZvaWQge1xuICAgIHRoaXMuX3Jlc3VsdHMgPSBmbGF0dGVuKHJlcyk7XG4gICAgKHRoaXMgYXN7ZGlydHk6IGJvb2xlYW59KS5kaXJ0eSA9IGZhbHNlO1xuICAgICh0aGlzIGFze2xlbmd0aDogbnVtYmVyfSkubGVuZ3RoID0gdGhpcy5fcmVzdWx0cy5sZW5ndGg7XG4gICAgKHRoaXMgYXN7bGFzdDogVH0pLmxhc3QgPSB0aGlzLl9yZXN1bHRzW3RoaXMubGVuZ3RoIC0gMV07XG4gICAgKHRoaXMgYXN7Zmlyc3Q6IFR9KS5maXJzdCA9IHRoaXMuX3Jlc3VsdHNbMF07XG4gIH1cblxuICBub3RpZnlPbkNoYW5nZXMoKTogdm9pZCB7ICh0aGlzLmNoYW5nZXMgYXMgRXZlbnRFbWl0dGVyPGFueT4pLmVtaXQodGhpcyk7IH1cblxuICAvKiogaW50ZXJuYWwgKi9cbiAgc2V0RGlydHkoKSB7ICh0aGlzIGFze2RpcnR5OiBib29sZWFufSkuZGlydHkgPSB0cnVlOyB9XG5cbiAgLyoqIGludGVybmFsICovXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgKHRoaXMuY2hhbmdlcyBhcyBFdmVudEVtaXR0ZXI8YW55PikuY29tcGxldGUoKTtcbiAgICAodGhpcy5jaGFuZ2VzIGFzIEV2ZW50RW1pdHRlcjxhbnk+KS51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW48VD4obGlzdDogQXJyYXk8VHxUW10+KTogVFtdIHtcbiAgcmV0dXJuIGxpc3QucmVkdWNlKChmbGF0OiBhbnlbXSwgaXRlbTogVCB8IFRbXSk6IFRbXSA9PiB7XG4gICAgY29uc3QgZmxhdEl0ZW0gPSBBcnJheS5pc0FycmF5KGl0ZW0pID8gZmxhdHRlbihpdGVtKSA6IGl0ZW07XG4gICAgcmV0dXJuICg8VFtdPmZsYXQpLmNvbmNhdChmbGF0SXRlbSk7XG4gIH0sIFtdKTtcbn1cbiJdfQ==