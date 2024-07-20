import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const PaymentPlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    amount: t.Number({ additionalProperties: true }),
    currency: t.String({ additionalProperties: true }),
    paymentDate: t.Date({ additionalProperties: true }),
    userSubscriptionId: t.String({ additionalProperties: true }),
    stripePaymentId: __nullable__(t.String({ additionalProperties: true })),
    iapPaymentId: __nullable__(t.String({ additionalProperties: true })),
  },
  { additionalProperties: true },
);

export const PaymentRelations = t.Object(
  {
    userSubscription: t.Object(
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
  },
  { additionalProperties: true },
);

export const PaymentPlainInput = t.Object(
  {
    amount: t.Number({ additionalProperties: true }),
    currency: t.String({ additionalProperties: true }),
    paymentDate: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const PaymentRelationsInputCreate = t.Object(
  {
    userSubscription: t.Object(
      {
        connect: t.Object(
          {
            id: t.String({ additionalProperties: true }),
          },
          { additionalProperties: true },
        ),
      },
      { additionalProperties: true },
    ),
  },
  { additionalProperties: true },
);

export const PaymentRelationsInputUpdate = t.Partial(
  t.Object(
    {
      userSubscription: t.Object(
        {
          connect: t.Object(
            {
              id: t.String({ additionalProperties: true }),
            },
            { additionalProperties: true },
          ),
        },
        { additionalProperties: true },
      ),
    },
    { additionalProperties: true },
  ),
  { additionalProperties: true },
);

export const PaymentWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          OR: t.Array(Self, { additionalProperties: true }),
          id: t.String({ additionalProperties: true }),
          amount: t.Number({ additionalProperties: true }),
          currency: t.String({ additionalProperties: true }),
          paymentDate: t.Date({ additionalProperties: true }),
          userSubscriptionId: t.String({ additionalProperties: true }),
          stripePaymentId: t.String({ additionalProperties: true }),
          iapPaymentId: t.String({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    { $id: "Payment" },
  ),
  { additionalProperties: true },
);

export const PaymentWhereUnique = t.Recursive(
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
            amount: t.Number({ additionalProperties: true }),
            currency: t.String({ additionalProperties: true }),
            paymentDate: t.Date({ additionalProperties: true }),
            userSubscriptionId: t.String({ additionalProperties: true }),
            stripePaymentId: t.String({ additionalProperties: true }),
            iapPaymentId: t.String({ additionalProperties: true }),
          }),
          { additionalProperties: true },
        ),
      ],
      { additionalProperties: true },
    ),
  { $id: "Payment" },
);

export const Payment = t.Composite([PaymentPlain, PaymentRelations], {
  additionalProperties: true,
});

export const PaymentInputCreate = t.Composite(
  [PaymentPlainInput, PaymentRelationsInputCreate],
  { additionalProperties: true },
);

export const PaymentInputUpdate = t.Composite(
  [PaymentPlainInput, PaymentRelationsInputUpdate],
  { additionalProperties: true },
);
