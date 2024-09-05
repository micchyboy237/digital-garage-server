import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const VehiclePlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    make: t.String({ additionalProperties: true }),
    model: t.String({ additionalProperties: true }),
    registrationNumber: t.String({ additionalProperties: true }),
    ownerId: t.String({ additionalProperties: true }),
    createdAt: t.Date({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const VehicleRelations = t.Object(
  {
    owner: __nullable__(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          email: t.String({ additionalProperties: true }),
          firstName: __nullable__(t.String({ additionalProperties: true })),
          lastName: __nullable__(t.String({ additionalProperties: true })),
          displayPictureId: __nullable__(
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
    ownerships: t.Array(
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
    transfers: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          vehicleId: t.String({ additionalProperties: true }),
          senderId: t.String({ additionalProperties: true }),
          recipientId: t.String({ additionalProperties: true }),
          status: t.Union(
            [
              t.Literal("REQUESTED"),
              t.Literal("ACCEPTED"),
              t.Literal("REJECTED"),
            ],
            { additionalProperties: true },
          ),
          transferDate: t.Date({ additionalProperties: true }),
          responseDate: __nullable__(t.Date({ additionalProperties: true })),
          reason: __nullable__(t.String({ additionalProperties: true })),
          excludedMediaFileTypes: t.Array(
            t.Union(
              [t.Literal("IMAGE"), t.Literal("VIDEO"), t.Literal("DOCUMENT")],
              { additionalProperties: true },
            ),
          ),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    ),
  },
  { additionalProperties: true },
);

export const VehiclePlainInputCreate = t.Object(
  {
    make: t.String({ additionalProperties: true }),
    model: t.String({ additionalProperties: true }),
    registrationNumber: t.String({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const VehiclePlainInputUpdate = t.Object(
  {
    make: t.String({ additionalProperties: true }),
    model: t.String({ additionalProperties: true }),
    registrationNumber: t.String({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const VehicleRelationsInputCreate = t.Object(
  {
    owner: t.Optional(
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
    ownerships: t.Optional(
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
    transfers: t.Optional(
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
  },
  { additionalProperties: true },
);

export const VehicleRelationsInputUpdate = t.Partial(
  t.Object(
    {
      owner: t.Partial(
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
      ownerships: t.Partial(
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
      transfers: t.Partial(
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
    },
    { additionalProperties: true },
  ),
  { additionalProperties: true },
);

export const VehicleWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object({
        AND: t.Union([Self, t.Array(Self)]),
        NOT: t.Union([Self, t.Array(Self)]),
        OR: t.Array(Self),
        id: t.String(),
        make: t.String(),
        model: t.String(),
        registrationNumber: t.String(),
        ownerId: t.String(),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      }),
    { $id: "Vehicle" },
  ),
  { additionalProperties: true },
);

export const VehicleWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect([
      t.Partial(
        t.Object({
          id: t.String(),
          registrationNumber: t.String(),
          ownerId: t.String(),
        }),
      ),
      t.Union([
        t.Object({ id: t.String() }),
        t.Object({ registrationNumber: t.String() }),
        t.Object({ ownerId: t.String() }),
      ]),
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
            make: t.String(),
            model: t.String(),
            registrationNumber: t.String(),
            ownerId: t.String(),
            createdAt: t.Date(),
            updatedAt: t.Date(),
          },
          { additionalProperties: true },
        ),
        { additionalProperties: true },
      ),
    ]),
  { $id: "Vehicle" },
);

export const Vehicle = t.Composite([VehiclePlain, VehicleRelations], {
  additionalProperties: true,
});

export const VehicleInputCreate = t.Composite(
  [VehiclePlainInputCreate, VehicleRelationsInputCreate],
  { additionalProperties: true },
);

export const VehicleInputUpdate = t.Composite(
  [VehiclePlainInputUpdate, VehicleRelationsInputUpdate],
  { additionalProperties: true },
);
