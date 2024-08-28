import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const UserPlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    email: t.String({ additionalProperties: true }),
    password: __nullable__(t.String({ additionalProperties: true })),
    firebaseUid: t.String({ additionalProperties: true }),
    provider: t.Union(
      [t.Literal("EMAIL_PASSWORD"), t.Literal("GOOGLE"), t.Literal("APPLE")],
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
);

export const UserRelations = t.Object(
  {
    profile: __nullable__(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          firstName: __nullable__(t.String({ additionalProperties: true })),
          lastName: __nullable__(t.String({ additionalProperties: true })),
          profilePicture: __nullable__(
            t.String({ additionalProperties: true }),
          ),
          location: __nullable__(t.String({ additionalProperties: true })),
          userId: t.String({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
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
    sessions: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          token: t.String({ additionalProperties: true }),
          expiresAt: t.Date({ additionalProperties: true }),
          userId: t.String({ additionalProperties: true }),
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
    email: t.String({ additionalProperties: true }),
    password: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    provider: t.Union(
      [t.Literal("EMAIL_PASSWORD"), t.Literal("GOOGLE"), t.Literal("APPLE")],
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
);

export const UserRelationsInputCreate = t.Object(
  {
    profile: t.Optional(
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
    sessions: t.Optional(
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
      profile: t.Partial(
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
      sessions: t.Partial(
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
          email: t.String({ additionalProperties: true }),
          password: t.String({ additionalProperties: true }),
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
              firebaseUid: t.String({ additionalProperties: true }),
            },
            { additionalProperties: true },
          ),
          { additionalProperties: true },
        ),
        t.Union(
          [
            t.Object({ id: t.String({ additionalProperties: true }) }),
            t.Object({ email: t.String({ additionalProperties: true }) }),
            t.Object({ firebaseUid: t.String({ additionalProperties: true }) }),
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
            password: t.String({ additionalProperties: true }),
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
