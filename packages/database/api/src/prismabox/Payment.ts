import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const PaymentPlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    amount: t.Number({ additionalProperties: true }),
    currency: t.String({ additionalProperties: true }),
    status: t.Union(
      [
        t.Literal("PAID"),
        t.Literal("REFUNDED"),
        t.Literal("PENDING"),
        t.Literal("FAILED"),
      ],
      { additionalProperties: true },
    ),
    transactionDate: t.Date({ additionalProperties: true }),
    subscriptionId: t.String({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const PaymentRelations = t.Object(
  {
    subscription: __nullable__(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          plan: __nullable__(
            t.Union(
              [
                t.Literal("MONTHLY"),
                t.Literal("YEARLY"),
                t.Literal("WEEKLY"),
                t.Literal("CUSTOM"),
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
          userId: t.String({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
  },
  { additionalProperties: true },
);

export const PaymentPlainInput = t.Object(
  {
    amount: t.Number({ additionalProperties: true }),
    currency: t.String({ additionalProperties: true }),
    status: t.Union(
      [
        t.Literal("PAID"),
        t.Literal("REFUNDED"),
        t.Literal("PENDING"),
        t.Literal("FAILED"),
      ],
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
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          OR: t.Array(Self, { additionalProperties: true }),
          id: t.String({ additionalProperties: true }),
          amount: t.Number({ additionalProperties: true }),
          currency: t.String({ additionalProperties: true }),
          status: t.Union(
            [
              t.Literal("PAID"),
              t.Literal("REFUNDED"),
              t.Literal("PENDING"),
              t.Literal("FAILED"),
            ],
            { additionalProperties: true },
          ),
          transactionDate: t.Date({ additionalProperties: true }),
          subscriptionId: t.String({ additionalProperties: true }),
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
            status: t.Union(
              [
                t.Literal("PAID"),
                t.Literal("REFUNDED"),
                t.Literal("PENDING"),
                t.Literal("FAILED"),
              ],
              { additionalProperties: true },
            ),
            transactionDate: t.Date({ additionalProperties: true }),
            subscriptionId: t.String({ additionalProperties: true }),
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
