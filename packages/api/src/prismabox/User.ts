import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const UserPlain = t.Object(
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
);

export const UserRelations = t.Object(
  {
    auth: __nullable__(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          password: __nullable__(t.String({ additionalProperties: true })),
          googleId: __nullable__(t.String({ additionalProperties: true })),
          emailVerificationCode: __nullable__(
            t.String({ additionalProperties: true }),
          ),
          emailVerificationExpiry: __nullable__(
            t.Date({ additionalProperties: true }),
          ),
          isEmailVerified: t.Boolean({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
          userId: t.String({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
    session: __nullable__(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          token: t.String({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          expiresAt: t.Date({ additionalProperties: true }),
          userId: t.String({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
    subscription: __nullable__(
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
    ),
    vehicles: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          userId: t.String({ additionalProperties: true }),
          vehicleId: t.String({ additionalProperties: true }),
          startDate: __nullable__(t.Date({ additionalProperties: true })),
          endDate: __nullable__(t.Date({ additionalProperties: true })),
          isCurrentOwner: t.Boolean({ additionalProperties: true }),
          isTemporaryOwner: t.Boolean({ additionalProperties: true }),
          canEditDocuments: t.Boolean({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
      { additionalProperties: true },
    ),
    documents: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          type: t.Union(
            [
              t.Literal("post"),
              t.Literal("invoice"),
              t.Literal("reminder"),
              t.Literal("document"),
            ],
            { additionalProperties: true },
          ),
          displayDate: t.Date({ additionalProperties: true }),
          header: t.String({ additionalProperties: true }),
          description: t.String({ additionalProperties: true }),
          invoiceValue: t.Number({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
          vehicleId: t.String({ additionalProperties: true }),
          createdById: t.String({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
      { additionalProperties: true },
    ),
    notificationSubs: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          category: t.String({ additionalProperties: true }),
          userId: __nullable__(t.String({ additionalProperties: true })),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
      { additionalProperties: true },
    ),
    notifications: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          message: t.String({ additionalProperties: true }),
          userId: t.String({ additionalProperties: true }),
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

export const UserPlainInput = t.Object(
  {
    role: t.Union([t.Literal("admin"), t.Literal("user")], {
      additionalProperties: true,
    }),
    firstName: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    lastName: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    email: t.String({ additionalProperties: true }),
    profilePicture: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    location: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const UserRelationsInputCreate = t.Object(
  {
    auth: t.Optional(
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
    session: t.Optional(
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
    vehicles: t.Optional(
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
    documents: t.Optional(
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
    notificationSubs: t.Optional(
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
    notifications: t.Optional(
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

export const UserRelationsInputUpdate = t.Partial(
  t.Object(
    {
      auth: t.Partial(
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
      session: t.Partial(
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
      vehicles: t.Partial(
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
      documents: t.Partial(
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
      notificationSubs: t.Partial(
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
      notifications: t.Partial(
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

export const UserWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          OR: t.Array(Self, { additionalProperties: true }),
          id: t.String({ additionalProperties: true }),
          role: t.Union([t.Literal("admin"), t.Literal("user")], {
            additionalProperties: true,
          }),
          firstName: t.String({ additionalProperties: true }),
          lastName: t.String({ additionalProperties: true }),
          email: t.String({ additionalProperties: true }),
          profilePicture: t.String({ additionalProperties: true }),
          location: t.String({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    { $id: "User" },
  ),
  { additionalProperties: true },
);

export const UserWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String({ additionalProperties: true }),
              email: t.String({ additionalProperties: true }),
            },
            { additionalProperties: true },
          ),
          { additionalProperties: true },
        ),
        t.Union(
          [
            t.Object({ id: t.String({ additionalProperties: true }) }),
            t.Object({ email: t.String({ additionalProperties: true }) }),
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
            role: t.Union([t.Literal("admin"), t.Literal("user")], {
              additionalProperties: true,
            }),
            firstName: t.String({ additionalProperties: true }),
            lastName: t.String({ additionalProperties: true }),
            profilePicture: t.String({ additionalProperties: true }),
            location: t.String({ additionalProperties: true }),
            createdAt: t.Date({ additionalProperties: true }),
            updatedAt: t.Date({ additionalProperties: true }),
          }),
          { additionalProperties: true },
        ),
      ],
      { additionalProperties: true },
    ),
  { $id: "User" },
);

export const User = t.Composite([UserPlain, UserRelations], {
  additionalProperties: true,
});

export const UserInputCreate = t.Composite(
  [UserPlainInput, UserRelationsInputCreate],
  { additionalProperties: true },
);

export const UserInputUpdate = t.Composite(
  [UserPlainInput, UserRelationsInputUpdate],
  { additionalProperties: true },
);
