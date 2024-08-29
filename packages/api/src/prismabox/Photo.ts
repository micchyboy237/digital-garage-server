import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const PhotoPlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    url: t.String({ additionalProperties: true }),
    thumbnailUrl: t.String({ additionalProperties: true }),
    postId: __nullable__(t.String({ additionalProperties: true })),
    ownershipId: __nullable__(t.String({ additionalProperties: true })),
  },
  { additionalProperties: true },
);

export const PhotoRelations = t.Object(
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

export const PhotoPlainInput = t.Object(
  {
    url: t.String({ additionalProperties: true }),
    thumbnailUrl: t.String({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const PhotoRelationsInputCreate = t.Object(
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

export const PhotoRelationsInputUpdate = t.Partial(
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

export const PhotoWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          OR: t.Array(Self, { additionalProperties: true }),
          id: t.String({ additionalProperties: true }),
          url: t.String({ additionalProperties: true }),
          thumbnailUrl: t.String({ additionalProperties: true }),
          postId: t.String({ additionalProperties: true }),
          ownershipId: t.String({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    { $id: "Photo" },
  ),
  { additionalProperties: true },
);

export const PhotoWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String({ additionalProperties: true }),
              ownershipId: t.String({ additionalProperties: true }),
            },
            { additionalProperties: true },
          ),
          { additionalProperties: true },
        ),
        t.Union(
          [
            t.Object({ id: t.String({ additionalProperties: true }) }),
            t.Object({ ownershipId: t.String({ additionalProperties: true }) }),
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
            url: t.String({ additionalProperties: true }),
            thumbnailUrl: t.String({ additionalProperties: true }),
            postId: t.String({ additionalProperties: true }),
          }),
          { additionalProperties: true },
        ),
      ],
      { additionalProperties: true },
    ),
  { $id: "Photo" },
);

export const Photo = t.Composite([PhotoPlain, PhotoRelations], {
  additionalProperties: true,
});

export const PhotoInputCreate = t.Composite(
  [PhotoPlainInput, PhotoRelationsInputCreate],
  { additionalProperties: true },
);

export const PhotoInputUpdate = t.Composite(
  [PhotoPlainInput, PhotoRelationsInputUpdate],
  { additionalProperties: true },
);
