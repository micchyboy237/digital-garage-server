import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const VehicleEventPlain = t.Object(
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
    vehicleOwnershipId: __nullable__(t.String({ additionalProperties: true })),
    createdAt: t.Date({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const VehicleEventRelations = t.Object(
  {
    documents: t.Array(
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
      { additionalProperties: true },
    ),
    vehicle: __nullable__(
      t.Object(
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
    ),
    createdBy: __nullable__(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          role: t.Union([t.Literal("admin"), t.Literal("user")], {
            additionalProperties: true,
          }),
          firstName: __nullable__(t.String({ additionalProperties: true })),
          lastName: __nullable__(t.String({ additionalProperties: true })),
          email: t.String({ additionalProperties: true }),
          profilePicture: __nullable__(
            t.String({ additionalProperties: true }),
          ),
          location: __nullable__(t.String({ additionalProperties: true })),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
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

export const VehicleEventPlainInput = t.Object(
  {
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
    description: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    date: t.Date({ additionalProperties: true }),
    price: t.Optional(__nullable__(t.Number({ additionalProperties: true }))),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const VehicleEventRelationsInputCreate = t.Object(
  {
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

export const VehicleEventRelationsInputUpdate = t.Partial(
  t.Object(
    {
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

export const VehicleEventWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          OR: t.Array(Self, { additionalProperties: true }),
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
          description: t.String({ additionalProperties: true }),
          date: t.Date({ additionalProperties: true }),
          price: t.Number({ additionalProperties: true }),
          vehicleId: t.String({ additionalProperties: true }),
          createdById: t.String({ additionalProperties: true }),
          vehicleOwnershipId: t.String({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    { $id: "VehicleEvent" },
  ),
  { additionalProperties: true },
);

export const VehicleEventWhereUnique = t.Recursive(
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
            description: t.String({ additionalProperties: true }),
            date: t.Date({ additionalProperties: true }),
            price: t.Number({ additionalProperties: true }),
            vehicleId: t.String({ additionalProperties: true }),
            createdById: t.String({ additionalProperties: true }),
            vehicleOwnershipId: t.String({ additionalProperties: true }),
            createdAt: t.Date({ additionalProperties: true }),
            updatedAt: t.Date({ additionalProperties: true }),
          }),
          { additionalProperties: true },
        ),
      ],
      { additionalProperties: true },
    ),
  { $id: "VehicleEvent" },
);

export const VehicleEvent = t.Composite(
  [VehicleEventPlain, VehicleEventRelations],
  { additionalProperties: true },
);

export const VehicleEventInputCreate = t.Composite(
  [VehicleEventPlainInput, VehicleEventRelationsInputCreate],
  { additionalProperties: true },
);

export const VehicleEventInputUpdate = t.Composite(
  [VehicleEventPlainInput, VehicleEventRelationsInputUpdate],
  { additionalProperties: true },
);
