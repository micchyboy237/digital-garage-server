import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const VehicleDocumentPlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    fileUrl: t.String({ additionalProperties: true }),
    mimeType: t.String({ additionalProperties: true }),
    postId: __nullable__(t.String({ additionalProperties: true })),
    ownershipId: __nullable__(t.String({ additionalProperties: true })),
  },
  { additionalProperties: true },
);

export const VehicleDocumentRelations = t.Object(
  {
    post: __nullable__(
      t.Object(
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
              [
                t.Literal("REMINDER"),
                t.Literal("INVOICE"),
                t.Literal("DOCUMENT"),
              ],
              { additionalProperties: true },
            ),
          ),
          createdById: t.String({ additionalProperties: true }),
          ownershipId: __nullable__(t.String({ additionalProperties: true })),
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

export const VehicleDocumentPlainInput = t.Object(
  {
    fileUrl: t.String({ additionalProperties: true }),
    mimeType: t.String({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const VehicleDocumentRelationsInputCreate = t.Object(
  {
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
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          OR: t.Array(Self, { additionalProperties: true }),
          id: t.String({ additionalProperties: true }),
          fileUrl: t.String({ additionalProperties: true }),
          mimeType: t.String({ additionalProperties: true }),
          postId: t.String({ additionalProperties: true }),
          ownershipId: t.String({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    { $id: "VehicleDocument" },
  ),
  { additionalProperties: true },
);

export const VehicleDocumentWhereUnique = t.Recursive(
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
            fileUrl: t.String({ additionalProperties: true }),
            mimeType: t.String({ additionalProperties: true }),
            postId: t.String({ additionalProperties: true }),
            ownershipId: t.String({ additionalProperties: true }),
          }),
          { additionalProperties: true },
        ),
      ],
      { additionalProperties: true },
    ),
  { $id: "VehicleDocument" },
);

export const VehicleDocument = t.Composite(
  [VehicleDocumentPlain, VehicleDocumentRelations],
  { additionalProperties: true },
);

export const VehicleDocumentInputCreate = t.Composite(
  [VehicleDocumentPlainInput, VehicleDocumentRelationsInputCreate],
  { additionalProperties: true },
);

export const VehicleDocumentInputUpdate = t.Composite(
  [VehicleDocumentPlainInput, VehicleDocumentRelationsInputUpdate],
  { additionalProperties: true },
);
