import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const SessionPlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    token: t.String({ additionalProperties: true }),
    expiresAt: t.Date({ additionalProperties: true }),
    provider: t.Union(
      [t.Literal("EMAIL_PASSWORD"), t.Literal("GOOGLE"), t.Literal("APPLE")],
      { additionalProperties: true },
    ),
    deviceFingerprint: t.String({ additionalProperties: true }),
    userId: t.String({ additionalProperties: true }),
    createdAt: t.Date({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const SessionRelations = t.Object(
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
  },
  { additionalProperties: true },
);

export const SessionPlainInputCreate = t.Object(
  {
    token: t.String({ additionalProperties: true }),
    expiresAt: t.Date({ additionalProperties: true }),
    provider: t.Union(
      [t.Literal("EMAIL_PASSWORD"), t.Literal("GOOGLE"), t.Literal("APPLE")],
      { additionalProperties: true },
    ),
    deviceFingerprint: t.String({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const SessionPlainInputUpdate = t.Object(
  {
    token: t.String({ additionalProperties: true }),
    expiresAt: t.Date({ additionalProperties: true }),
    provider: t.Union(
      [t.Literal("EMAIL_PASSWORD"), t.Literal("GOOGLE"), t.Literal("APPLE")],
      { additionalProperties: true },
    ),
    deviceFingerprint: t.String({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const SessionRelationsInputCreate = t.Object(
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

export const SessionRelationsInputUpdate = t.Partial(
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

export const SessionWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object({
        AND: t.Union([Self, t.Array(Self)]),
        NOT: t.Union([Self, t.Array(Self)]),
        OR: t.Array(Self),
        id: t.String(),
        token: t.String(),
        expiresAt: t.Date(),
        provider: t.Union(
          [
            t.Literal("EMAIL_PASSWORD"),
            t.Literal("GOOGLE"),
            t.Literal("APPLE"),
          ],
          { additionalProperties: true },
        ),
        deviceFingerprint: t.String(),
        userId: t.String(),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      }),
    { $id: "Session" },
  ),
  { additionalProperties: true },
);

export const SessionWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect([
      t.Partial(
        t.Object({
          id: t.String(),
          token: t.String(),
          deviceFingerprint: t.String(),
          deviceFingerprint_userId: t.Object({
            deviceFingerprint: t.String(),
            userId: t.String(),
          }),
        }),
      ),
      t.Union([
        t.Object({ id: t.String() }),
        t.Object({ token: t.String() }),
        t.Object({ deviceFingerprint: t.String() }),
        t.Object({
          deviceFingerprint_userId: t.Object({
            deviceFingerprint: t.String(),
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
            token: t.String(),
            expiresAt: t.Date(),
            provider: t.Union(
              [
                t.Literal("EMAIL_PASSWORD"),
                t.Literal("GOOGLE"),
                t.Literal("APPLE"),
              ],
              { additionalProperties: true },
            ),
            deviceFingerprint: t.String(),
            userId: t.String(),
            createdAt: t.Date(),
            updatedAt: t.Date(),
          },
          { additionalProperties: true },
        ),
        { additionalProperties: true },
      ),
    ]),
  { $id: "Session" },
);

export const Session = t.Composite([SessionPlain, SessionRelations], {
  additionalProperties: true,
});

export const SessionInputCreate = t.Composite(
  [SessionPlainInputCreate, SessionRelationsInputCreate],
  { additionalProperties: true },
);

export const SessionInputUpdate = t.Composite(
  [SessionPlainInputUpdate, SessionRelationsInputUpdate],
  { additionalProperties: true },
);
