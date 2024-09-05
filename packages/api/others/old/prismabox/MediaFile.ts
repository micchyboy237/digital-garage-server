import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const MediaFilePlain = t.Object(
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
);

export const MediaFileRelations = t.Object(
  {
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
    displayPhotoOwnership: __nullable__(
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

export const MediaFilePlainInputCreate = t.Object(
  {
    type: t.Union(
      [t.Literal("IMAGE"), t.Literal("VIDEO"), t.Literal("DOCUMENT")],
      { additionalProperties: true },
    ),
    mimeType: t.String({ additionalProperties: true }),
    fileName: t.String({ additionalProperties: true }),
    url: t.String({ additionalProperties: true }),
    thumbnailUrl: t.String({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const MediaFilePlainInputUpdate = t.Object(
  {
    type: t.Union(
      [t.Literal("IMAGE"), t.Literal("VIDEO"), t.Literal("DOCUMENT")],
      { additionalProperties: true },
    ),
    mimeType: t.String({ additionalProperties: true }),
    fileName: t.String({ additionalProperties: true }),
    url: t.String({ additionalProperties: true }),
    thumbnailUrl: t.String({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const MediaFileRelationsInputCreate = t.Object(
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
    displayPhotoOwnership: t.Optional(
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

export const MediaFileRelationsInputUpdate = t.Partial(
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
      displayPhotoOwnership: t.Partial(
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

export const MediaFileWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object({
        AND: t.Union([Self, t.Array(Self)]),
        NOT: t.Union([Self, t.Array(Self)]),
        OR: t.Array(Self),
        id: t.String(),
        type: t.Union(
          [t.Literal("IMAGE"), t.Literal("VIDEO"), t.Literal("DOCUMENT")],
          { additionalProperties: true },
        ),
        mimeType: t.String(),
        fileName: t.String(),
        url: t.String(),
        thumbnailUrl: t.String(),
        postId: t.String(),
        ownershipId: t.String(),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      }),
    { $id: "MediaFile" },
  ),
  { additionalProperties: true },
);

export const MediaFileWhereUnique = t.Recursive(
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
            type: t.Union(
              [t.Literal("IMAGE"), t.Literal("VIDEO"), t.Literal("DOCUMENT")],
              { additionalProperties: true },
            ),
            mimeType: t.String(),
            fileName: t.String(),
            url: t.String(),
            thumbnailUrl: t.String(),
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
  { $id: "MediaFile" },
);

export const MediaFile = t.Composite([MediaFilePlain, MediaFileRelations], {
  additionalProperties: true,
});

export const MediaFileInputCreate = t.Composite(
  [MediaFilePlainInputCreate, MediaFileRelationsInputCreate],
  { additionalProperties: true },
);

export const MediaFileInputUpdate = t.Composite(
  [MediaFilePlainInputUpdate, MediaFileRelationsInputUpdate],
  { additionalProperties: true },
);
