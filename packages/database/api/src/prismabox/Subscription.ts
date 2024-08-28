import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const SubscriptionPlain = t.Object(
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
);

export const SubscriptionRelations = t.Object(
  {
    user: __nullable__(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          email: t.String({ additionalProperties: true }),
          password: __nullable__(t.String({ additionalProperties: true })),
          firebaseUid: t.String({ additionalProperties: true }),
          provider: t.Union(
            [
              t.Literal("EMAIL_PASSWORD"),
              t.Literal("GOOGLE"),
              t.Literal("APPLE"),
            ],
            { additionalProperties: true },
          ),
          accountStatus: t.Union(
            [
              t.Literal("ONBOARDING"),
              t.Literal("SELECT_SUBSCRIPTION"),
              t.Literal("ACTIVE"),
            ],
            { additionalProperties: true },
          ),
        },
        { additionalProperties: true },
      ),
    ),
    payments: t.Array(
      t.Object(
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
      ),
      { additionalProperties: true },
    ),
  },
  { additionalProperties: true },
);

export const SubscriptionPlainInput = t.Object(
  {
    plan: t.Optional(
      __nullable__(
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
    ),
    status: t.Union(
      [t.Literal("ACTIVE"), t.Literal("CANCELED"), t.Literal("EXPIRED")],
      { additionalProperties: true },
    ),
    startDate: t.Optional(__nullable__(t.Date({ additionalProperties: true }))),
    endDate: t.Optional(__nullable__(t.Date({ additionalProperties: true }))),
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
          plan: t.Union(
            [
              t.Literal("MONTHLY"),
              t.Literal("YEARLY"),
              t.Literal("WEEKLY"),
              t.Literal("CUSTOM"),
            ],
            { additionalProperties: true },
          ),
          status: t.Union(
            [t.Literal("ACTIVE"), t.Literal("CANCELED"), t.Literal("EXPIRED")],
            { additionalProperties: true },
          ),
          startDate: t.Date({ additionalProperties: true }),
          endDate: t.Date({ additionalProperties: true }),
          userId: t.String({ additionalProperties: true }),
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
            {
              id: t.String({ additionalProperties: true }),
              userId: t.String({ additionalProperties: true }),
            },
            { additionalProperties: true },
          ),
          { additionalProperties: true },
        ),
        t.Union(
          [
            t.Object({ id: t.String({ additionalProperties: true }) }),
            t.Object({ userId: t.String({ additionalProperties: true }) }),
          ],
          { additionalProperties: true },
        ),
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
            plan: t.Union(
              [
                t.Literal("MONTHLY"),
                t.Literal("YEARLY"),
                t.Literal("WEEKLY"),
                t.Literal("CUSTOM"),
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
            startDate: t.Date({ additionalProperties: true }),
            endDate: t.Date({ additionalProperties: true }),
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
