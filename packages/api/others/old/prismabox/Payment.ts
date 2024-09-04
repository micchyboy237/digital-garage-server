import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const PaymentPlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    price: t.Number({ additionalProperties: true }),
    currencyCode: t.String({ additionalProperties: true }),
    status: t.Union(
      [t.Literal("PAID"), t.Literal("REFUNDED"), t.Literal("FAILED")],
      { additionalProperties: true },
    ),
    transactionId: t.String({ additionalProperties: true }),
    transactionDate: t.Date({ additionalProperties: true }),
    subscriptionId: t.String({ additionalProperties: true }),
    createdAt: t.Date({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const PaymentRelations = t.Object(
  {
    subscription: __nullable__(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          productId: t.String({ additionalProperties: true }),
          plan: __nullable__(
            t.Union(
              [
                t.Literal("DAY"),
                t.Literal("WEEK"),
                t.Literal("MONTH"),
                t.Literal("YEAR"),
              ],
              { additionalProperties: true },
            ),
          ),
          status: t.Union(
            [t.Literal("ACTIVE"), t.Literal("CANCELED"), t.Literal("EXPIRED")],
            { additionalProperties: true },
          ),
          startDate: __nullable__(t.Date({ additionalProperties: true })),
          endDate: __nullable__(t.Date({ additionalProperties: true })),
          expiresAt: __nullable__(t.Date({ additionalProperties: true })),
          userId: t.String({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
  },
  { additionalProperties: true },
);

export const PaymentPlainInputCreate = t.Object(
  {
    price: t.Number({ additionalProperties: true }),
    currencyCode: t.String({ additionalProperties: true }),
    status: t.Union(
      [t.Literal("PAID"), t.Literal("REFUNDED"), t.Literal("FAILED")],
      { additionalProperties: true },
    ),
    transactionDate: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const PaymentPlainInputUpdate = t.Object(
  {
    price: t.Number({ additionalProperties: true }),
    currencyCode: t.String({ additionalProperties: true }),
    status: t.Union(
      [t.Literal("PAID"), t.Literal("REFUNDED"), t.Literal("FAILED")],
      { additionalProperties: true },
    ),
    transactionDate: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const PaymentRelationsInputCreate = t.Object(
  {
    subscription: t.Optional(
      t.Object(
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
    ),
  },
  { additionalProperties: true },
);

export const PaymentRelationsInputUpdate = t.Partial(
  t.Object(
    {
      subscription: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.String({ additionalProperties: true }),
              },
              { additionalProperties: true },
            ),
            disconnect: t.Boolean(),
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

export const PaymentWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object({
        AND: t.Union([Self, t.Array(Self)]),
        NOT: t.Union([Self, t.Array(Self)]),
        OR: t.Array(Self),
        id: t.String(),
        price: t.Number(),
        currencyCode: t.String(),
        status: t.Union(
          [t.Literal("PAID"), t.Literal("REFUNDED"), t.Literal("FAILED")],
          { additionalProperties: true },
        ),
        transactionId: t.String(),
        transactionDate: t.Date(),
        subscriptionId: t.String(),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      }),
    { $id: "Payment" },
  ),
  { additionalProperties: true },
);

export const PaymentWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect([
      t.Partial(t.Object({ id: t.String() })),
      t.Union([t.Object({ id: t.String() })]),
      t.Partial(
        t.Object({
          AND: t.Union([Self, t.Array(Self)]),
          NOT: t.Union([Self, t.Array(Self)]),
          OR: t.Array(Self),
        }),
      ),
      t.Partial(
        t.Object(
          {
            id: t.String(),
            price: t.Number(),
            currencyCode: t.String(),
            status: t.Union(
              [t.Literal("PAID"), t.Literal("REFUNDED"), t.Literal("FAILED")],
              { additionalProperties: true },
            ),
            transactionId: t.String(),
            transactionDate: t.Date(),
            subscriptionId: t.String(),
            createdAt: t.Date(),
            updatedAt: t.Date(),
          },
          { additionalProperties: true },
        ),
        { additionalProperties: true },
      ),
    ]),
  { $id: "Payment" },
);

export const Payment = t.Composite([PaymentPlain, PaymentRelations], {
  additionalProperties: true,
});

export const PaymentInputCreate = t.Composite(
  [PaymentPlainInputCreate, PaymentRelationsInputCreate],
  { additionalProperties: true },
);

export const PaymentInputUpdate = t.Composite(
  [PaymentPlainInputUpdate, PaymentRelationsInputUpdate],
  { additionalProperties: true },
);
