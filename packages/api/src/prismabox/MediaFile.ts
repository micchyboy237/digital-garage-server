import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const MediaFilePlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    type: t.Union(
      [t.Literal("photo"), t.Literal("video"), t.Literal("document")],
      { additionalProperties: true },
    ),
    mimeType: t.String({ additionalProperties: true }),
    url: t.String({ additionalProperties: true }),
    createdAt: t.Date({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
    documentId: __nullable__(t.String({ additionalProperties: true })),
    vehicleOwnershipId: __nullable__(t.String({ additionalProperties: true })),
  },
  { additionalProperties: true },
);

export const MediaFileRelations = t.Object(
  {
    document: __nullable__(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          type: t.Union([t.Literal("general"), t.Literal("photo")], {
            additionalProperties: true,
          }),
          date: t.Date({ additionalProperties: true }),
          title: __nullable__(t.String({ additionalProperties: true })),
          description: __nullable__(t.String({ additionalProperties: true })),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
          vehicleId: __nullable__(t.String({ additionalProperties: true })),
          createdById: t.String({ additionalProperties: true }),
          vehicleEventId: __nullable__(
            t.String({ additionalProperties: true }),
          ),
        },
        { additionalProperties: true },
      ),
    ),
    vehicleOwnership: __nullable__(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          userId: t.String({ additionalProperties: true }),
          vehicleId: t.String({ additionalProperties: true }),
          description: __nullable__(t.String({ additionalProperties: true })),
          startDate: __nullable__(t.Date({ additionalProperties: true })),
          endDate: __nullable__(t.Date({ additionalProperties: true })),
          isCurrentOwner: t.Boolean({ additionalProperties: true }),
          isTemporaryOwner: t.Boolean({ additionalProperties: true }),
          canEditDocuments: t.Boolean({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
  },
  { additionalProperties: true },
);

export const MediaFilePlainInput = t.Object(
  {
    type: t.Union(
      [t.Literal("photo"), t.Literal("video"), t.Literal("document")],
      { additionalProperties: true },
    ),
    mimeType: t.String({ additionalProperties: true }),
    url: t.String({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const MediaFileRelationsInputCreate = t.Object(
  {
    document: t.Optional(
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
    vehicleOwnership: t.Optional(
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

export const MediaFileRelationsInputUpdate = t.Partial(
  t.Object(
    {
      document: t.Partial(
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
      vehicleOwnership: t.Partial(
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

export const MediaFileWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          OR: t.Array(Self, { additionalProperties: true }),
          id: t.String({ additionalProperties: true }),
          type: t.Union(
            [t.Literal("photo"), t.Literal("video"), t.Literal("document")],
            { additionalProperties: true },
          ),
          mimeType: t.String({ additionalProperties: true }),
          url: t.String({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
          documentId: t.String({ additionalProperties: true }),
          vehicleOwnershipId: t.String({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    { $id: "MediaFile" },
  ),
  { additionalProperties: true },
);

export const MediaFileWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String({ additionalProperties: true }),
              vehicleOwnershipId: t.String({ additionalProperties: true }),
            },
            { additionalProperties: true },
          ),
          { additionalProperties: true },
        ),
        t.Union(
          [
            t.Object({ id: t.String({ additionalProperties: true }) }),
            t.Object({
              vehicleOwnershipId: t.String({ additionalProperties: true }),
            }),
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
            type: t.Union(
              [t.Literal("photo"), t.Literal("video"), t.Literal("document")],
              { additionalProperties: true },
            ),
            mimeType: t.String({ additionalProperties: true }),
            url: t.String({ additionalProperties: true }),
            createdAt: t.Date({ additionalProperties: true }),
            updatedAt: t.Date({ additionalProperties: true }),
            documentId: t.String({ additionalProperties: true }),
          }),
          { additionalProperties: true },
        ),
      ],
      { additionalProperties: true },
    ),
  { $id: "MediaFile" },
);

export const MediaFile = t.Composite([MediaFilePlain, MediaFileRelations], {
  additionalProperties: true,
});

export const MediaFileInputCreate = t.Composite(
  [MediaFilePlainInput, MediaFileRelationsInputCreate],
  { additionalProperties: true },
);

export const MediaFileInputUpdate = t.Composite(
  [MediaFilePlainInput, MediaFileRelationsInputUpdate],
  { additionalProperties: true },
);
