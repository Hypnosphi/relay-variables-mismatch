/**
 * @generated SignedSource<<0addafc80de66ca7b884cd4f0c31521e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "parameter"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "parameter",
        "variableName": "parameter"
      }
    ],
    "kind": "ScalarField",
    "name": "field",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "testQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "testQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "608768d2ebd577fda62fa4c11e2a1cd7",
    "id": null,
    "metadata": {},
    "name": "testQuery",
    "operationKind": "query",
    "text": "query testQuery(\n  $parameter: String\n) {\n  field(parameter: $parameter)\n}\n"
  }
};
})();

node.hash = "d10ffa15213c1ff89ab5320ef5266c2b";

module.exports = node;
