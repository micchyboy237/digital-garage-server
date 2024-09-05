import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const AccountPlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    provider: t.Union(
      [t.Literal("EMAIL_PASSWORD"), t.Literal("GOOGLE"), t.Literal("APPLE")],
      { additionalProperties: true },
    ),
    userId: t.String({ additionalProperties: true }),
    firebaseUid: t.String({ additionalProperties: true }),
    isEmailVerified: t.Boolean({ additionalProperties: true }),
    lastLogin: __nullable__(t.Date({ additionalProperties: true })),
    createdAt: t.Date({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const AccountRelations = t.Object(
  {
    user: t.Object(
      {
        id: t.String({ additionalProperties: true }),
        email: t.String({ additionalProperties: true }),
        firstName: __nullable__(t.String({ additionalProperties: true })),
        lastName: __nullable__(t.String({ additionalProperties: true })),
        displayPictureId: __nullable__(
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
    sessions: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          token: t.String({ additionalProperties: true }),
          expiresAt: t.Date({ additionalProperties: true }),
          accountId: t.String({ additionalProperties: true }),
          deviceFingerprint: t.String({ additionalProperties: true }),
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

export const AccountPlainInputCreate = t.Object(
  {
    provider: t.Union(
      [t.Literal("EMAIL_PASSWORD"), t.Literal("GOOGLE"), t.Literal("APPLE")],
      { additionalProperties: true },
    ),
    isEmailVerified: t.Boolean({ additionalProperties: true }),
    lastLogin: t.Optional(__nullable__(t.Date({ additionalProperties: true }))),
  },
  { additionalProperties: true },
);

export const AccountPlainInputUpdate = t.Object(
  {
    provider: t.Union(
      [t.Literal("EMAIL_PASSWORD"), t.Literal("GOOGLE"), t.Literal("APPLE")],
      { additionalProperties: true },
    ),
    isEmailVerified: t.Boolean({ additionalProperties: true }),
    lastLogin: t.Optional(__nullable__(t.Date({ additionalProperties: true }))),
  },
  { additionalProperties: true },
);

export const AccountRelationsInputCreate = t.Object(
  {
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
          ),
        },
        { additionalProperties: true },
      ),
    ),
  },
  { additionalProperties: true },
);

export const AccountRelationsInputUpdate = t.Partial(
  t.Object(
    {
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

export const AccountWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object({
        AND: t.Union([Self, t.Array(Self)]),
        NOT: t.Union([Self, t.Array(Self)]),
        OR: t.Array(Self),
        id: t.String(),
        provider: t.Union(
          [
            t.Literal("EMAIL_PASSWORD"),
            t.Literal("GOOGLE"),
            t.Literal("APPLE"),
          ],
          { additionalProperties: true },
        ),
        userId: t.String(),
        firebaseUid: t.String(),
        isEmailVerified: t.Boolean(),
        lastLogin: t.Date(),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      }),
    { $id: "Account" },
  ),
  { additionalProperties: true },
);

export const AccountWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect([
      t.Partial(
        t.Object({
          id: t.String(),
          provider_userId: t.Object({
            provider: t.Union(
              [
                t.Literal("EMAIL_PASSWORD"),
                t.Literal("GOOGLE"),
                t.Literal("APPLE"),
              ],
              { additionalProperties: true },
            ),
            userId: t.String(),
          }),
        }),
      ),
      t.Union([
        t.Object({ id: t.String() }),
        t.Object({
          provider_userId: t.Object({
            provider: t.Union(
              [
                t.Literal("EMAIL_PASSWORD"),
                t.Literal("GOOGLE"),
                t.Literal("APPLE"),
              ],
              { additionalProperties: true },
            ),
            userId: t.String(),
          }),
        }),
      ]),
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
            provider: t.Union(
              [
                t.Literal("EMAIL_PASSWORD"),
                t.Literal("GOOGLE"),
                t.Literal("APPLE"),
              ],
              { additionalProperties: true },
            ),
            userId: t.String(),
            firebaseUid: t.String(),
            isEmailVerified: t.Boolean(),
            lastLogin: t.Date(),
            createdAt: t.Date(),
            updatedAt: t.Date(),
          },
          { additionalProperties: true },
        ),
        { additionalProperties: true },
      ),
    ]),
  { $id: "Account" },
);

export const Account = t.Composite([AccountPlain, AccountRelations], {
  additionalProperties: true,
});

export const AccountInputCreate = t.Composite(
  [AccountPlainInputCreate, AccountRelationsInputCreate],
  { additionalProperties: true },
);

export const AccountInputUpdate = t.Composite(
  [AccountPlainInputUpdate, AccountRelationsInputUpdate],
  { additionalProperties: true },
);
