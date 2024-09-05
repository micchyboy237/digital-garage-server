import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const VehiclePostPlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    title: t.String({ additionalProperties: true }),
    category: t.Union([t.Literal("GALLERY"), t.Literal("HISTORY")], {
      additionalProperties: true,
    }),
    description: __nullable__(t.String({ additionalProperties: true })),
    type: __nullable__(
      t.Union(
        [t.Literal("REMINDER"), t.Literal("INVOICE"), t.Literal("DOCUMENT")],
        { additionalProperties: true },
      ),
    ),
    createdById: t.String({ additionalProperties: true }),
    ownershipId: t.String({ additionalProperties: true }),
    createdAt: t.Date({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const VehiclePostRelations = t.Object(
  {
    files: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          type: t.Union(
            [t.Literal("IMAGE"), t.Literal("VIDEO"), t.Literal("DOCUMENT")],
            { additionalProperties: true },
          ),
          mimeType: t.String({ additionalProperties: true }),
          fileName: t.String({ additionalProperties: true }),
          url: t.String({ additionalProperties: true }),
          thumbnailUrl: t.String({ additionalProperties: true }),
          postId: __nullable__(t.String({ additionalProperties: true })),
          ownershipId: __nullable__(t.String({ additionalProperties: true })),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
    createdBy: __nullable__(
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
    ownership: __nullable__(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          userId: t.String({ additionalProperties: true }),
          vehicleId: t.String({ additionalProperties: true }),
          isCurrentOwner: t.Boolean({ additionalProperties: true }),
          vehicleDisplayPhotoId: __nullable__(
            t.String({ additionalProperties: true }),
          ),
          startDate: t.Date({ additionalProperties: true }),
          endDate: __nullable__(t.Date({ additionalProperties: true })),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
  },
  { additionalProperties: true },
);

export const VehiclePostPlainInputCreate = t.Object(
  {
    title: t.String({ additionalProperties: true }),
    category: t.Union([t.Literal("GALLERY"), t.Literal("HISTORY")], {
      additionalProperties: true,
    }),
    description: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    type: t.Optional(
      __nullable__(
        t.Union(
          [t.Literal("REMINDER"), t.Literal("INVOICE"), t.Literal("DOCUMENT")],
          { additionalProperties: true },
        ),
      ),
    ),
  },
  { additionalProperties: true },
);

export const VehiclePostPlainInputUpdate = t.Object(
  {
    title: t.String({ additionalProperties: true }),
    category: t.Union([t.Literal("GALLERY"), t.Literal("HISTORY")], {
      additionalProperties: true,
    }),
    description: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    type: t.Optional(
      __nullable__(
        t.Union(
          [t.Literal("REMINDER"), t.Literal("INVOICE"), t.Literal("DOCUMENT")],
          { additionalProperties: true },
        ),
      ),
    ),
  },
  { additionalProperties: true },
);

export const VehiclePostRelationsInputCreate = t.Object(
  {
    files: t.Optional(
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
    createdBy: t.Optional(
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
    ownership: t.Optional(
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

export const VehiclePostRelationsInputUpdate = t.Partial(
  t.Object(
    {
      files: t.Partial(
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
      createdBy: t.Partial(
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
      ownership: t.Partial(
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

export const VehiclePostWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object({
        AND: t.Union([Self, t.Array(Self)]),
        NOT: t.Union([Self, t.Array(Self)]),
        OR: t.Array(Self),
        id: t.String(),
        title: t.String(),
        category: t.Union([t.Literal("GALLERY"), t.Literal("HISTORY")], {
          additionalProperties: true,
        }),
        description: t.String(),
        type: t.Union(
          [t.Literal("REMINDER"), t.Literal("INVOICE"), t.Literal("DOCUMENT")],
          { additionalProperties: true },
        ),
        createdById: t.String(),
        ownershipId: t.String(),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      }),
    { $id: "VehiclePost" },
  ),
  { additionalProperties: true },
);

export const VehiclePostWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect([
      t.Partial(t.Object({ id: t.String() })),
      t.Union([t.Object({ id: t.String() })]),
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
            title: t.String(),
            category: t.Union([t.Literal("GALLERY"), t.Literal("HISTORY")], {
              additionalProperties: true,
            }),
            description: t.String(),
            type: t.Union(
              [
                t.Literal("REMINDER"),
                t.Literal("INVOICE"),
                t.Literal("DOCUMENT"),
              ],
              { additionalProperties: true },
            ),
            createdById: t.String(),
            ownershipId: t.String(),
            createdAt: t.Date(),
            updatedAt: t.Date(),
          },
          { additionalProperties: true },
        ),
        { additionalProperties: true },
      ),
    ]),
  { $id: "VehiclePost" },
);

export const VehiclePost = t.Composite(
  [VehiclePostPlain, VehiclePostRelations],
  { additionalProperties: true },
);

export const VehiclePostInputCreate = t.Composite(
  [VehiclePostPlainInputCreate, VehiclePostRelationsInputCreate],
  { additionalProperties: true },
);

export const VehiclePostInputUpdate = t.Composite(
  [VehiclePostPlainInputUpdate, VehiclePostRelationsInputUpdate],
  { additionalProperties: true },
);
