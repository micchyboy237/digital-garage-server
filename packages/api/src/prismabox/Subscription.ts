import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const SubscriptionPlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    name: t.String({ additionalProperties: true }),
    freeTrialDuration: __nullable__(t.Integer({ additionalProperties: true })),
    price: __nullable__(t.Number({ additionalProperties: true })),
    currency: t.String({ additionalProperties: true }),
    paymentInterval: t.Union([t.Literal("monthly")], {
      additionalProperties: true,
    }),
    createdAt: t.Date({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const SubscriptionRelations = t.Object(
  {
    userSubscriptions: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          subscriptionId: t.String({ additionalProperties: true }),
          userId: t.String({ additionalProperties: true }),
          status: t.Union(
            [t.Literal("active"), t.Literal("cancelled"), t.Literal("paused")],
            { additionalProperties: true },
          ),
          trialStartDate: __nullable__(t.Date({ additionalProperties: true })),
          trialEndDate: __nullable__(t.Date({ additionalProperties: true })),
          startDate: __nullable__(t.Date({ additionalProperties: true })),
          endDate: __nullable__(t.Date({ additionalProperties: true })),
          stripeSubscriptionId: __nullable__(
            t.String({ additionalProperties: true }),
          ),
          iapSubscriptionId: __nullable__(
            t.String({ additionalProperties: true }),
          ),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
      { additionalProperties: true },
    ),
  },
  { additionalProperties: true },
);

export const SubscriptionPlainInput = t.Object(
  {
    name: t.String({ additionalProperties: true }),
    freeTrialDuration: t.Optional(
      __nullable__(t.Integer({ additionalProperties: true })),
    ),
    price: t.Optional(__nullable__(t.Number({ additionalProperties: true }))),
    currency: t.String({ additionalProperties: true }),
    paymentInterval: t.Union([t.Literal("monthly")], {
      additionalProperties: true,
    }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const SubscriptionRelationsInputCreate = t.Object(
  {
    userSubscriptions: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: true }),
              },
              { additionalProperties: true },
            ),
            { additionalProperties: true },
          ),
        },
        { additionalProperties: true },
      ),
    ),
  },
  { additionalProperties: true },
);

export const SubscriptionRelationsInputUpdate = t.Partial(
  t.Object(
    {
      userSubscriptions: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: true }),
                },
                { additionalProperties: true },
              ),
              { additionalProperties: true },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: true }),
                },
                { additionalProperties: true },
              ),
              { additionalProperties: true },
            ),
          },
          { additionalProperties: true },
        ),
        { additionalProperties: true },
      ),
    },
    { additionalProperties: true },
  ),
  { additionalProperties: true },
);

export const SubscriptionWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          OR: t.Array(Self, { additionalProperties: true }),
          id: t.String({ additionalProperties: true }),
          name: t.String({ additionalProperties: true }),
          freeTrialDuration: t.Integer({ additionalProperties: true }),
          price: t.Number({ additionalProperties: true }),
          currency: t.String({ additionalProperties: true }),
          paymentInterval: t.Union([t.Literal("monthly")], {
            additionalProperties: true,
          }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    { $id: "Subscription" },
  ),
  { additionalProperties: true },
);

export const SubscriptionWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String({ additionalProperties: true }) },
            { additionalProperties: true },
          ),
          { additionalProperties: true },
        ),
        t.Union([t.Object({ id: t.String({ additionalProperties: true }) })], {
          additionalProperties: true,
        }),
        t.Partial(
          t.Object({
            AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
            NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
            OR: t.Array(Self, { additionalProperties: true }),
          }),
          { additionalProperties: true },
        ),
        t.Partial(
          t.Object({
            name: t.String({ additionalProperties: true }),
            freeTrialDuration: t.Integer({ additionalProperties: true }),
            price: t.Number({ additionalProperties: true }),
            currency: t.String({ additionalProperties: true }),
            paymentInterval: t.Union([t.Literal("monthly")], {
              additionalProperties: true,
            }),
            createdAt: t.Date({ additionalProperties: true }),
            updatedAt: t.Date({ additionalProperties: true }),
          }),
          { additionalProperties: true },
        ),
      ],
      { additionalProperties: true },
    ),
  { $id: "Subscription" },
);

export const Subscription = t.Composite(
  [SubscriptionPlain, SubscriptionRelations],
  { additionalProperties: true },
);

export const SubscriptionInputCreate = t.Composite(
  [SubscriptionPlainInput, SubscriptionRelationsInputCreate],
  { additionalProperties: true },
);

export const SubscriptionInputUpdate = t.Composite(
  [SubscriptionPlainInput, SubscriptionRelationsInputUpdate],
  { additionalProperties: true },
);
