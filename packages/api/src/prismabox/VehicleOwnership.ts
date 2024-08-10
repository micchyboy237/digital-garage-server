import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const VehicleOwnershipPlain = t.Object(
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
);

export const VehicleOwnershipRelations = t.Object(
  {
    displayPicture: __nullable__(
      t.Object(
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
          vehicleOwnershipId: __nullable__(
            t.String({ additionalProperties: true }),
          ),
        },
        { additionalProperties: true },
      ),
    ),
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
    vehicle: t.Object(
      {
        id: t.String({ additionalProperties: true }),
        make: t.String({ additionalProperties: true }),
        model: t.String({ additionalProperties: true }),
        registrationNumber: t.String({ additionalProperties: true }),
        createdAt: t.Date({ additionalProperties: true }),
        updatedAt: t.Date({ additionalProperties: true }),
      },
      { additionalProperties: true },
    ),
    events: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          type: t.Union(
            [
              t.Literal("post"),
              t.Literal("reminder"),
              t.Literal("invoice"),
              t.Literal("document"),
            ],
            { additionalProperties: true },
          ),
          header: t.String({ additionalProperties: true }),
          description: __nullable__(t.String({ additionalProperties: true })),
          date: t.Date({ additionalProperties: true }),
          price: __nullable__(t.Number({ additionalProperties: true })),
          vehicleId: __nullable__(t.String({ additionalProperties: true })),
          createdById: __nullable__(t.String({ additionalProperties: true })),
          vehicleOwnershipId: __nullable__(
            t.String({ additionalProperties: true }),
          ),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
      { additionalProperties: true },
    ),
  },
  { additionalProperties: true },
);

export const VehicleOwnershipPlainInput = t.Object(
  {
    description: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    startDate: t.Optional(__nullable__(t.Date({ additionalProperties: true }))),
    endDate: t.Optional(__nullable__(t.Date({ additionalProperties: true }))),
    isCurrentOwner: t.Boolean({ additionalProperties: true }),
    isTemporaryOwner: t.Boolean({ additionalProperties: true }),
    canEditDocuments: t.Boolean({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const VehicleOwnershipRelationsInputCreate = t.Object(
  {
    displayPicture: t.Optional(
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
    vehicle: t.Object(
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
    events: t.Optional(
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

export const VehicleOwnershipRelationsInputUpdate = t.Partial(
  t.Object(
    {
      displayPicture: t.Partial(
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
      vehicle: t.Object(
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
      events: t.Partial(
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

export const VehicleOwnershipWhere = t.Partial(
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
          description: t.String({ additionalProperties: true }),
          startDate: t.Date({ additionalProperties: true }),
          endDate: t.Date({ additionalProperties: true }),
          isCurrentOwner: t.Boolean({ additionalProperties: true }),
          isTemporaryOwner: t.Boolean({ additionalProperties: true }),
          canEditDocuments: t.Boolean({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    { $id: "VehicleOwnership" },
  ),
  { additionalProperties: true },
);

export const VehicleOwnershipWhereUnique = t.Recursive(
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
            userId: t.String({ additionalProperties: true }),
            vehicleId: t.String({ additionalProperties: true }),
            description: t.String({ additionalProperties: true }),
            startDate: t.Date({ additionalProperties: true }),
            endDate: t.Date({ additionalProperties: true }),
            isCurrentOwner: t.Boolean({ additionalProperties: true }),
            isTemporaryOwner: t.Boolean({ additionalProperties: true }),
            canEditDocuments: t.Boolean({ additionalProperties: true }),
            createdAt: t.Date({ additionalProperties: true }),
            updatedAt: t.Date({ additionalProperties: true }),
          }),
          { additionalProperties: true },
        ),
      ],
      { additionalProperties: true },
    ),
  { $id: "VehicleOwnership" },
);

export const VehicleOwnership = t.Composite(
  [VehicleOwnershipPlain, VehicleOwnershipRelations],
  { additionalProperties: true },
);

export const VehicleOwnershipInputCreate = t.Composite(
  [VehicleOwnershipPlainInput, VehicleOwnershipRelationsInputCreate],
  { additionalProperties: true },
);

export const VehicleOwnershipInputUpdate = t.Composite(
  [VehicleOwnershipPlainInput, VehicleOwnershipRelationsInputUpdate],
  { additionalProperties: true },
);
