import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const OwnershipPlain = t.Object(
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
);

export const OwnershipRelations = t.Object(
  {
    vehicleDisplayPhoto: __nullable__(
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
    ),
    user: __nullable__(
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
    vehicle: __nullable__(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          make: t.String({ additionalProperties: true }),
          model: t.String({ additionalProperties: true }),
          registrationNumber: t.String({ additionalProperties: true }),
          ownerId: t.String({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
    posts: t.Array(
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
  },
  { additionalProperties: true },
);

export const OwnershipPlainInput = t.Object(
  {
    isCurrentOwner: t.Boolean({ additionalProperties: true }),
    startDate: t.Date({ additionalProperties: true }),
    endDate: t.Optional(__nullable__(t.Date({ additionalProperties: true }))),
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
);

export const OwnershipRelationsInputCreate = t.Object(
  {
    vehicleDisplayPhoto: t.Optional(
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
    vehicle: t.Optional(
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
    posts: t.Optional(
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
  },
  { additionalProperties: true },
);

export const OwnershipRelationsInputUpdate = t.Partial(
  t.Object(
    {
      vehicleDisplayPhoto: t.Partial(
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
      vehicle: t.Partial(
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
      posts: t.Partial(
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
    },
    { additionalProperties: true },
  ),
  { additionalProperties: true },
);

export const OwnershipWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          OR: t.Array(Self, { additionalProperties: true }),
          id: t.String({ additionalProperties: true }),
          userId: t.String({ additionalProperties: true }),
          vehicleId: t.String({ additionalProperties: true }),
          isCurrentOwner: t.Boolean({ additionalProperties: true }),
          startDate: t.Date({ additionalProperties: true }),
          endDate: t.Date({ additionalProperties: true }),
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
    { $id: "Ownership" },
  ),
  { additionalProperties: true },
);

export const OwnershipWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String({ additionalProperties: true }),
              userId_vehicleId: t.Object(
                {
                  userId: t.String({ additionalProperties: true }),
                  vehicleId: t.String({ additionalProperties: true }),
                },
                { additionalProperties: true },
              ),
            },
            { additionalProperties: true },
          ),
          { additionalProperties: true },
        ),
        t.Union(
          [
            t.Object({ id: t.String({ additionalProperties: true }) }),
            t.Object({
              userId_vehicleId: t.Object(
                {
                  userId: t.String({ additionalProperties: true }),
                  vehicleId: t.String({ additionalProperties: true }),
                },
                { additionalProperties: true },
              ),
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
            userId: t.String({ additionalProperties: true }),
            vehicleId: t.String({ additionalProperties: true }),
            isCurrentOwner: t.Boolean({ additionalProperties: true }),
            startDate: t.Date({ additionalProperties: true }),
            endDate: t.Date({ additionalProperties: true }),
            excludedPosts: t.Array(t.String({ additionalProperties: true }), {
              additionalProperties: true,
            }),
            excludedPhotos: t.Array(t.String({ additionalProperties: true }), {
              additionalProperties: true,
            }),
            excludedDocs: t.Array(t.String({ additionalProperties: true }), {
              additionalProperties: true,
            }),
          }),
          { additionalProperties: true },
        ),
      ],
      { additionalProperties: true },
    ),
  { $id: "Ownership" },
);

export const Ownership = t.Composite([OwnershipPlain, OwnershipRelations], {
  additionalProperties: true,
});

export const OwnershipInputCreate = t.Composite(
  [OwnershipPlainInput, OwnershipRelationsInputCreate],
  { additionalProperties: true },
);

export const OwnershipInputUpdate = t.Composite(
  [OwnershipPlainInput, OwnershipRelationsInputUpdate],
  { additionalProperties: true },
);
