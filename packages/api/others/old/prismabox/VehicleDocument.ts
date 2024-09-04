import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const VehicleDocumentPlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    fileId: t.String({ additionalProperties: true }),
    postId: __nullable__(t.String({ additionalProperties: true })),
    ownershipId: t.String({ additionalProperties: true }),
    createdAt: t.Date({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const VehicleDocumentRelations = t.Object(
  {
    file: t.Object(
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
    post: __nullable__(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          title: t.String({ additionalProperties: true }),
          category: t.Union([t.Literal("GALLERY"), t.Literal("HISTORY")], {
            additionalProperties: true,
          }),
          description: __nullable__(t.String({ additionalProperties: true })),
          type: __nullable__(
            t.Union(
              [
                t.Literal("REMINDER"),
                t.Literal("INVOICE"),
                t.Literal("DOCUMENT"),
              ],
              { additionalProperties: true },
            ),
          ),
          createdById: t.String({ additionalProperties: true }),
          ownershipId: t.String({ additionalProperties: true }),
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
          excludedPhotos: t.Array(t.String({ additionalProperties: true })),
          excludedVideos: t.Array(t.String({ additionalProperties: true })),
          excludedDocs: t.Array(t.String({ additionalProperties: true })),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
  },
  { additionalProperties: true },
);

export const VehicleDocumentPlainInputCreate = t.Object(
  {},
  { additionalProperties: true },
);

export const VehicleDocumentPlainInputUpdate = t.Object(
  {},
  { additionalProperties: true },
);

export const VehicleDocumentRelationsInputCreate = t.Object(
  {
    file: t.Object(
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
    post: t.Optional(
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

export const VehicleDocumentRelationsInputUpdate = t.Partial(
  t.Object(
    {
      file: t.Object(
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
      post: t.Partial(
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

export const VehicleDocumentWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object({
        AND: t.Union([Self, t.Array(Self)]),
        NOT: t.Union([Self, t.Array(Self)]),
        OR: t.Array(Self),
        id: t.String(),
        fileId: t.String(),
        postId: t.String(),
        ownershipId: t.String(),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      }),
    { $id: "VehicleDocument" },
  ),
  { additionalProperties: true },
);

export const VehicleDocumentWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect([
      t.Partial(t.Object({ id: t.String(), fileId: t.String() })),
      t.Union([t.Object({ id: t.String() }), t.Object({ fileId: t.String() })]),
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
            fileId: t.String(),
            postId: t.String(),
            ownershipId: t.String(),
            createdAt: t.Date(),
            updatedAt: t.Date(),
          },
          { additionalProperties: true },
        ),
        { additionalProperties: true },
      ),
    ]),
  { $id: "VehicleDocument" },
);

export const VehicleDocument = t.Composite(
  [VehicleDocumentPlain, VehicleDocumentRelations],
  { additionalProperties: true },
);

export const VehicleDocumentInputCreate = t.Composite(
  [VehicleDocumentPlainInputCreate, VehicleDocumentRelationsInputCreate],
  { additionalProperties: true },
);

export const VehicleDocumentInputUpdate = t.Composite(
  [VehicleDocumentPlainInputUpdate, VehicleDocumentRelationsInputUpdate],
  { additionalProperties: true },
);
