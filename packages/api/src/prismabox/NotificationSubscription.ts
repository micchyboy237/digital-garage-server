import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const NotificationSubscriptionPlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    category: t.String({ additionalProperties: true }),
    userId: __nullable__(t.String({ additionalProperties: true })),
    createdAt: t.Date({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const NotificationSubscriptionRelations = t.Object(
  {
    user: __nullable__(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          role: t.Union([t.Literal("admin"), t.Literal("user")], {
            additionalProperties: true,
          }),
          firstName: __nullable__(t.String({ additionalProperties: true })),
          lastName: __nullable__(t.String({ additionalProperties: true })),
          email: t.String({ additionalProperties: true }),
          location: __nullable__(t.String({ additionalProperties: true })),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
  },
  { additionalProperties: true },
);

export const NotificationSubscriptionPlainInput = t.Object(
  {
    category: t.String({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const NotificationSubscriptionRelationsInputCreate = t.Object(
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
  },
  { additionalProperties: true },
);

export const NotificationSubscriptionRelationsInputUpdate = t.Partial(
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
    },
    { additionalProperties: true },
  ),
  { additionalProperties: true },
);

export const NotificationSubscriptionWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          OR: t.Array(Self, { additionalProperties: true }),
          id: t.String({ additionalProperties: true }),
          category: t.String({ additionalProperties: true }),
          userId: t.String({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    { $id: "NotificationSubscription" },
  ),
  { additionalProperties: true },
);

export const NotificationSubscriptionWhereUnique = t.Recursive(
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
            category: t.String({ additionalProperties: true }),
            userId: t.String({ additionalProperties: true }),
            createdAt: t.Date({ additionalProperties: true }),
            updatedAt: t.Date({ additionalProperties: true }),
          }),
          { additionalProperties: true },
        ),
      ],
      { additionalProperties: true },
    ),
  { $id: "NotificationSubscription" },
);

export const NotificationSubscription = t.Composite(
  [NotificationSubscriptionPlain, NotificationSubscriptionRelations],
  { additionalProperties: true },
);

export const NotificationSubscriptionInputCreate = t.Composite(
  [
    NotificationSubscriptionPlainInput,
    NotificationSubscriptionRelationsInputCreate,
  ],
  { additionalProperties: true },
);

export const NotificationSubscriptionInputUpdate = t.Composite(
  [
    NotificationSubscriptionPlainInput,
    NotificationSubscriptionRelationsInputUpdate,
  ],
  { additionalProperties: true },
);
