---
title: "VendureEntity"
weight: 10
showtoc: true
generated: true
---
<!-- This file was generated from the Vendure source. Do not modify. Instead, re-run the "docs:build" script -->
import MemberInfo from '@site/src/components/MemberInfo';
import GenerationInfo from '@site/src/components/GenerationInfo';
import MemberDescription from '@site/src/components/MemberDescription';


## VendureEntity

<GenerationInfo sourceFile="packages/core/src/entity/base/base.entity.ts" sourceLine="13" packageName="@vendure/core" />

This is the base class from which all entities inherit. The type of
the `id` property is defined by the <a href='/reference/typescript-api/configuration/entity-id-strategy#entityidstrategy'>EntityIdStrategy</a>.

```ts title="Signature"
class VendureEntity {
  constructor(input?: DeepPartial<VendureEntity>)
  @PrimaryGeneratedId() @PrimaryGeneratedId()
    id: ID;
  @CreateDateColumn() @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() @UpdateDateColumn() updatedAt: Date;
}
```

<div className="members-wrapper">

### constructor

<MemberInfo kind="method" type={`(input?: DeepPartial&#60;<a href='/reference/typescript-api/entities/vendure-entity#vendureentity'>VendureEntity</a>&#62;) => VendureEntity`}   />


### id

<MemberInfo kind="property" type={`<a href='/reference/typescript-api/common/id#id'>ID</a>`}   />


### createdAt

<MemberInfo kind="property" type={`Date`}   />


### updatedAt

<MemberInfo kind="property" type={`Date`}   />




</div>