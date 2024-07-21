import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const AuthPlain = t.Object(
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
    passwordResetToken: __nullable__(t.String({ additionalProperties: true })),
    passwordResetExpiry: __nullable__(t.Date({ additionalProperties: true })),
  },
  { additionalProperties: true },
);

export const AuthRelations = t.Object(
  {
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
  },
  { additionalProperties: true },
);

export const AuthPlainInput = t.Object(
  {
    password: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    emailVerificationCode: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    emailVerificationExpiry: t.Optional(
      __nullable__(t.Date({ additionalProperties: true })),
    ),
    isEmailVerified: t.Boolean({ additionalProperties: true }),
    passwordResetToken: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    passwordResetExpiry: t.Optional(
      __nullable__(t.Date({ additionalProperties: true })),
    ),
  },
  { additionalProperties: true },
);

export const AuthRelationsInputCreate = t.Object(
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
  },
  { additionalProperties: true },
);

export const AuthRelationsInputUpdate = t.Partial(
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
    },
    { additionalProperties: true },
  ),
  { additionalProperties: true },
);

export const AuthWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          OR: t.Array(Self, { additionalProperties: true }),
          id: t.String({ additionalProperties: true }),
          password: t.String({ additionalProperties: true }),
          googleId: t.String({ additionalProperties: true }),
          emailVerificationCode: t.String({ additionalProperties: true }),
          emailVerificationExpiry: t.Date({ additionalProperties: true }),
          isEmailVerified: t.Boolean({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
          userId: t.String({ additionalProperties: true }),
          passwordResetToken: t.String({ additionalProperties: true }),
          passwordResetExpiry: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    { $id: "Auth" },
  ),
  { additionalProperties: true },
);

export const AuthWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String({ additionalProperties: true }),
              googleId: t.String({ additionalProperties: true }),
              userId: t.String({ additionalProperties: true }),
            },
            { additionalProperties: true },
          ),
          { additionalProperties: true },
        ),
        t.Union(
          [
            t.Object({ id: t.String({ additionalProperties: true }) }),
            t.Object({ googleId: t.String({ additionalProperties: true }) }),
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
            password: t.String({ additionalProperties: true }),
            emailVerificationCode: t.String({ additionalProperties: true }),
            emailVerificationExpiry: t.Date({ additionalProperties: true }),
            isEmailVerified: t.Boolean({ additionalProperties: true }),
            createdAt: t.Date({ additionalProperties: true }),
            updatedAt: t.Date({ additionalProperties: true }),
            passwordResetToken: t.String({ additionalProperties: true }),
            passwordResetExpiry: t.Date({ additionalProperties: true }),
          }),
          { additionalProperties: true },
        ),
      ],
      { additionalProperties: true },
    ),
  { $id: "Auth" },
);

export const Auth = t.Composite([AuthPlain, AuthRelations], {
  additionalProperties: true,
});

export const AuthInputCreate = t.Composite(
  [AuthPlainInput, AuthRelationsInputCreate],
  { additionalProperties: true },
);

export const AuthInputUpdate = t.Composite(
  [AuthPlainInput, AuthRelationsInputUpdate],
  { additionalProperties: true },
);
