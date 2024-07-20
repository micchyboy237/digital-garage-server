import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const UserSubscriptionPlain = t.Object(
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
    iapSubscriptionId: __nullable__(t.String({ additionalProperties: true })),
    createdAt: t.Date({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const UserSubscriptionRelations = t.Object(
  {
    subscription: t.Object(
      {
        id: t.String({ additionalProperties: true }),
        name: t.String({ additionalProperties: true }),
        freeTrialDuration: __nullable__(
          t.Integer({ additionalProperties: true }),
        ),
        price: __nullable__(t.Number({ additionalProperties: true })),
        currency: t.String({ additionalProperties: true }),
        paymentInterval: t.Union([t.Literal("monthly")], {
          additionalProperties: true,
        }),
        createdAt: t.Date({ additionalProperties: true }),
        updatedAt: t.Date({ additionalProperties: true }),
      },
      { additionalProperties: true },
    ),
    user: t.Object(
      {
        id: t.String({ additionalProperties: true }),
        role: t.Union([t.Literal("admin"), t.Literal("user")], {
          additionalProperties: true,
        }),
        firstName: __nullable__(t.String({ additionalProperties: true })),
        lastName: __nullable__(t.String({ additionalProperties: true })),
        email: t.String({ additionalProperties: true }),
        profilePicture: __nullable__(t.String({ additionalProperties: true })),
        location: __nullable__(t.String({ additionalProperties: true })),
        createdAt: t.Date({ additionalProperties: true }),
        updatedAt: t.Date({ additionalProperties: true }),
      },
      { additionalProperties: true },
    ),
    payments: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          amount: t.Number({ additionalProperties: true }),
          currency: t.String({ additionalProperties: true }),
          paymentDate: t.Date({ additionalProperties: true }),
          userSubscriptionId: t.String({ additionalProperties: true }),
          stripePaymentId: __nullable__(
            t.String({ additionalProperties: true }),
          ),
          iapPaymentId: __nullable__(t.String({ additionalProperties: true })),
        },
        { additionalProperties: true },
      ),
      { additionalProperties: true },
    ),
  },
  { additionalProperties: true },
);

export const UserSubscriptionPlainInput = t.Object(
  {
    status: t.Union(
      [t.Literal("active"), t.Literal("cancelled"), t.Literal("paused")],
      { additionalProperties: true },
    ),
    trialStartDate: t.Optional(
      __nullable__(t.Date({ additionalProperties: true })),
    ),
    trialEndDate: t.Optional(
      __nullable__(t.Date({ additionalProperties: true })),
    ),
    startDate: t.Optional(__nullable__(t.Date({ additionalProperties: true }))),
    endDate: t.Optional(__nullable__(t.Date({ additionalProperties: true }))),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const UserSubscriptionRelationsInputCreate = t.Object(
  {
    subscription: t.Object(
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
    user: t.Object(
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

export const UserSubscriptionRelationsInputUpdate = t.Partial(
  t.Object(
    {
      subscription: t.Object(
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
      user: t.Object(
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

export const UserSubscriptionWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          OR: t.Array(Self, { additionalProperties: true }),
          id: t.String({ additionalProperties: true }),
          subscriptionId: t.String({ additionalProperties: true }),
          userId: t.String({ additionalProperties: true }),
          status: t.Union(
            [t.Literal("active"), t.Literal("cancelled"), t.Literal("paused")],
            { additionalProperties: true },
          ),
          trialStartDate: t.Date({ additionalProperties: true }),
          trialEndDate: t.Date({ additionalProperties: true }),
          startDate: t.Date({ additionalProperties: true }),
          endDate: t.Date({ additionalProperties: true }),
          stripeSubscriptionId: t.String({ additionalProperties: true }),
          iapSubscriptionId: t.String({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    { $id: "UserSubscription" },
  ),
  { additionalProperties: true },
);

export const UserSubscriptionWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String({ additionalProperties: true }),
              subscriptionId: t.String({ additionalProperties: true }),
              userId: t.String({ additionalProperties: true }),
            },
            { additionalProperties: true },
          ),
          { additionalProperties: true },
        ),
        t.Union(
          [
            t.Object({ id: t.String({ additionalProperties: true }) }),
            t.Object({
              subscriptionId: t.String({ additionalProperties: true }),
            }),
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
            status: t.Union(
              [
                t.Literal("active"),
                t.Literal("cancelled"),
                t.Literal("paused"),
              ],
              { additionalProperties: true },
            ),
            trialStartDate: t.Date({ additionalProperties: true }),
            trialEndDate: t.Date({ additionalProperties: true }),
            startDate: t.Date({ additionalProperties: true }),
            endDate: t.Date({ additionalProperties: true }),
            stripeSubscriptionId: t.String({ additionalProperties: true }),
            iapSubscriptionId: t.String({ additionalProperties: true }),
            createdAt: t.Date({ additionalProperties: true }),
            updatedAt: t.Date({ additionalProperties: true }),
          }),
          { additionalProperties: true },
        ),
      ],
      { additionalProperties: true },
    ),
  { $id: "UserSubscription" },
);

export const UserSubscription = t.Composite(
  [UserSubscriptionPlain, UserSubscriptionRelations],
  { additionalProperties: true },
);

export const UserSubscriptionInputCreate = t.Composite(
  [UserSubscriptionPlainInput, UserSubscriptionRelationsInputCreate],
  { additionalProperties: true },
);

export const UserSubscriptionInputUpdate = t.Composite(
  [UserSubscriptionPlainInput, UserSubscriptionRelationsInputUpdate],
  { additionalProperties: true },
);
