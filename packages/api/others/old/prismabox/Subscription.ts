import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const SubscriptionPlain = t.Object(
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
);

export const SubscriptionRelations = t.Object(
  {
    user: __nullable__(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          email: t.String({ additionalProperties: true }),
          firebaseUid: t.String({ additionalProperties: true }),
          isEmailVerified: t.Boolean({ additionalProperties: true }),
          firstName: __nullable__(t.String({ additionalProperties: true })),
          lastName: __nullable__(t.String({ additionalProperties: true })),
          displayPicture: __nullable__(
            t.String({ additionalProperties: true }),
          ),
          location: __nullable__(t.String({ additionalProperties: true })),
          accountStatus: t.Union(
            [
              t.Literal("ONBOARDING"),
              t.Literal("SELECT_SUBSCRIPTION"),
              t.Literal("ACTIVE"),
            ],
            { additionalProperties: true },
          ),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
    payments: t.Array(
      t.Object(
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
      ),
    ),
  },
  { additionalProperties: true },
);

export const SubscriptionPlainInputCreate = t.Object(
  {
    plan: t.Optional(
      __nullable__(
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
    ),
    status: t.Union(
      [t.Literal("ACTIVE"), t.Literal("CANCELED"), t.Literal("EXPIRED")],
      { additionalProperties: true },
    ),
    startDate: t.Optional(__nullable__(t.Date({ additionalProperties: true }))),
    endDate: t.Optional(__nullable__(t.Date({ additionalProperties: true }))),
    expiresAt: t.Optional(__nullable__(t.Date({ additionalProperties: true }))),
  },
  { additionalProperties: true },
);

export const SubscriptionPlainInputUpdate = t.Object(
  {
    plan: t.Optional(
      __nullable__(
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
    ),
    status: t.Union(
      [t.Literal("ACTIVE"), t.Literal("CANCELED"), t.Literal("EXPIRED")],
      { additionalProperties: true },
    ),
    startDate: t.Optional(__nullable__(t.Date({ additionalProperties: true }))),
    endDate: t.Optional(__nullable__(t.Date({ additionalProperties: true }))),
    expiresAt: t.Optional(__nullable__(t.Date({ additionalProperties: true }))),
  },
  { additionalProperties: true },
);

export const SubscriptionRelationsInputCreate = t.Object(
  {
    user: t.Optional(
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
    payments: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: true }),
              },
              { additionalProperties: true },
            ),
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
      user: t.Partial(
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
      payments: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: true }),
                },
                { additionalProperties: true },
              ),
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: true }),
                },
                { additionalProperties: true },
              ),
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
      t.Object({
        AND: t.Union([Self, t.Array(Self)]),
        NOT: t.Union([Self, t.Array(Self)]),
        OR: t.Array(Self),
        id: t.String(),
        productId: t.String(),
        plan: t.Union(
          [
            t.Literal("DAY"),
            t.Literal("WEEK"),
            t.Literal("MONTH"),
            t.Literal("YEAR"),
          ],
          { additionalProperties: true },
        ),
        status: t.Union(
          [t.Literal("ACTIVE"), t.Literal("CANCELED"), t.Literal("EXPIRED")],
          { additionalProperties: true },
        ),
        startDate: t.Date(),
        endDate: t.Date(),
        expiresAt: t.Date(),
        userId: t.String(),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      }),
    { $id: "Subscription" },
  ),
  { additionalProperties: true },
);

export const SubscriptionWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect([
      t.Partial(t.Object({ id: t.String(), userId: t.String() })),
      t.Union([t.Object({ id: t.String() }), t.Object({ userId: t.String() })]),
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
            productId: t.String(),
            plan: t.Union(
              [
                t.Literal("DAY"),
                t.Literal("WEEK"),
                t.Literal("MONTH"),
                t.Literal("YEAR"),
              ],
              { additionalProperties: true },
            ),
            status: t.Union(
              [
                t.Literal("ACTIVE"),
                t.Literal("CANCELED"),
                t.Literal("EXPIRED"),
              ],
              { additionalProperties: true },
            ),
            startDate: t.Date(),
            endDate: t.Date(),
            expiresAt: t.Date(),
            userId: t.String(),
            createdAt: t.Date(),
            updatedAt: t.Date(),
          },
          { additionalProperties: true },
        ),
        { additionalProperties: true },
      ),
    ]),
  { $id: "Subscription" },
);

export const Subscription = t.Composite(
  [SubscriptionPlain, SubscriptionRelations],
  { additionalProperties: true },
);

export const SubscriptionInputCreate = t.Composite(
  [SubscriptionPlainInputCreate, SubscriptionRelationsInputCreate],
  { additionalProperties: true },
);

export const SubscriptionInputUpdate = t.Composite(
  [SubscriptionPlainInputUpdate, SubscriptionRelationsInputUpdate],
  { additionalProperties: true },
);
