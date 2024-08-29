import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const VehiclePostPlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    date: t.Date({ additionalProperties: true }),
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
    ownershipId: __nullable__(t.String({ additionalProperties: true })),
  },
  { additionalProperties: true },
);

export const VehiclePostRelations = t.Object(
  {
    photos: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          url: t.String({ additionalProperties: true }),
          thumbnailUrl: t.String({ additionalProperties: true }),
          postId: __nullable__(t.String({ additionalProperties: true })),
          ownershipId: __nullable__(t.String({ additionalProperties: true })),
        },
        { additionalProperties: true },
      ),
      { additionalProperties: true },
    ),
    documents: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          fileUrl: t.String({ additionalProperties: true }),
          mimeType: t.String({ additionalProperties: true }),
          postId: __nullable__(t.String({ additionalProperties: true })),
          ownershipId: __nullable__(t.String({ additionalProperties: true })),
        },
        { additionalProperties: true },
      ),
      { additionalProperties: true },
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
          startDate: t.Date({ additionalProperties: true }),
          endDate: __nullable__(t.Date({ additionalProperties: true })),
          excludedPosts: t.Array(t.String({ additionalProperties: true }), {
            additionalProperties: true,
          }),
          excludedPhotos: t.Array(t.String({ additionalProperties: true }), {
            additionalProperties: true,
          }),
          excludedDocs: t.Array(t.String({ additionalProperties: true }), {
            additionalProperties: true,
          }),
        },
        { additionalProperties: true },
      ),
    ),
  },
  { additionalProperties: true },
);

export const VehiclePostPlainInput = t.Object(
  {
    date: t.Date({ additionalProperties: true }),
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
    photos: t.Optional(
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
      photos: t.Partial(
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
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          OR: t.Array(Self, { additionalProperties: true }),
          id: t.String({ additionalProperties: true }),
          date: t.Date({ additionalProperties: true }),
          title: t.String({ additionalProperties: true }),
          category: t.Union([t.Literal("GALLERY"), t.Literal("HISTORY")], {
            additionalProperties: true,
          }),
          description: t.String({ additionalProperties: true }),
          type: t.Union(
            [
              t.Literal("REMINDER"),
              t.Literal("INVOICE"),
              t.Literal("DOCUMENT"),
            ],
            { additionalProperties: true },
          ),
          createdById: t.String({ additionalProperties: true }),
          ownershipId: t.String({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    { $id: "VehiclePost" },
  ),
  { additionalProperties: true },
);

export const VehiclePostWhereUnique = t.Recursive(
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
            date: t.Date({ additionalProperties: true }),
            title: t.String({ additionalProperties: true }),
            category: t.Union([t.Literal("GALLERY"), t.Literal("HISTORY")], {
              additionalProperties: true,
            }),
            description: t.String({ additionalProperties: true }),
            type: t.Union(
              [
                t.Literal("REMINDER"),
                t.Literal("INVOICE"),
                t.Literal("DOCUMENT"),
              ],
              { additionalProperties: true },
            ),
            createdById: t.String({ additionalProperties: true }),
            ownershipId: t.String({ additionalProperties: true }),
          }),
          { additionalProperties: true },
        ),
      ],
      { additionalProperties: true },
    ),
  { $id: "VehiclePost" },
);

export const VehiclePost = t.Composite(
  [VehiclePostPlain, VehiclePostRelations],
  { additionalProperties: true },
);

export const VehiclePostInputCreate = t.Composite(
  [VehiclePostPlainInput, VehiclePostRelationsInputCreate],
  { additionalProperties: true },
);

export const VehiclePostInputUpdate = t.Composite(
  [VehiclePostPlainInput, VehiclePostRelationsInputUpdate],
  { additionalProperties: true },
);
