import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const ProfilePlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    firstName: __nullable__(t.String({ additionalProperties: true })),
    lastName: __nullable__(t.String({ additionalProperties: true })),
    profilePicture: __nullable__(t.String({ additionalProperties: true })),
    location: __nullable__(t.String({ additionalProperties: true })),
    userId: t.String({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const ProfileRelations = t.Object(
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

export const ProfilePlainInput = t.Object(
  {
    firstName: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    lastName: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    profilePicture: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    location: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
  },
  { additionalProperties: true },
);

export const ProfileRelationsInputCreate = t.Object(
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

export const ProfileRelationsInputUpdate = t.Partial(
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

export const ProfileWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          OR: t.Array(Self, { additionalProperties: true }),
          id: t.String({ additionalProperties: true }),
          firstName: t.String({ additionalProperties: true }),
          lastName: t.String({ additionalProperties: true }),
          profilePicture: t.String({ additionalProperties: true }),
          location: t.String({ additionalProperties: true }),
          userId: t.String({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    { $id: "Profile" },
  ),
  { additionalProperties: true },
);

export const ProfileWhereUnique = t.Recursive(
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
            firstName: t.String({ additionalProperties: true }),
            lastName: t.String({ additionalProperties: true }),
            profilePicture: t.String({ additionalProperties: true }),
            location: t.String({ additionalProperties: true }),
          }),
          { additionalProperties: true },
        ),
      ],
      { additionalProperties: true },
    ),
  { $id: "Profile" },
);

export const Profile = t.Composite([ProfilePlain, ProfileRelations], {
  additionalProperties: true,
});

export const ProfileInputCreate = t.Composite(
  [ProfilePlainInput, ProfileRelationsInputCreate],
  { additionalProperties: true },
);

export const ProfileInputUpdate = t.Composite(
  [ProfilePlainInput, ProfileRelationsInputUpdate],
  { additionalProperties: true },
);
