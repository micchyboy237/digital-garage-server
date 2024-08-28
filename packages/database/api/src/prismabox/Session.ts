import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const SessionPlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    token: t.String({ additionalProperties: true }),
    expiresAt: t.Date({ additionalProperties: true }),
    userId: t.String({ additionalProperties: true }),
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
  },
  { additionalProperties: true },
);

export const SessionPlainInput = t.Object(
  {
    token: t.String({ additionalProperties: true }),
    expiresAt: t.Date({ additionalProperties: true }),
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
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          OR: t.Array(Self, { additionalProperties: true }),
          id: t.String({ additionalProperties: true }),
          token: t.String({ additionalProperties: true }),
          expiresAt: t.Date({ additionalProperties: true }),
          userId: t.String({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    { $id: "Session" },
  ),
  { additionalProperties: true },
);

export const SessionWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String({ additionalProperties: true }),
              token: t.String({ additionalProperties: true }),
            },
            { additionalProperties: true },
          ),
          { additionalProperties: true },
        ),
        t.Union(
          [
            t.Object({ id: t.String({ additionalProperties: true }) }),
            t.Object({ token: t.String({ additionalProperties: true }) }),
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
            expiresAt: t.Date({ additionalProperties: true }),
            userId: t.String({ additionalProperties: true }),
          }),
          { additionalProperties: true },
        ),
      ],
      { additionalProperties: true },
    ),
  { $id: "Session" },
);

export const Session = t.Composite([SessionPlain, SessionRelations], {
  additionalProperties: true,
});

export const SessionInputCreate = t.Composite(
  [SessionPlainInput, SessionRelationsInputCreate],
  { additionalProperties: true },
);

export const SessionInputUpdate = t.Composite(
  [SessionPlainInput, SessionRelationsInputUpdate],
  { additionalProperties: true },
);
