import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const VehiclePlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    make: t.String({ additionalProperties: true }),
    model: t.String({ additionalProperties: true }),
    registrationNumber: t.String({ additionalProperties: true }),
    ownerId: t.String({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const VehicleRelations = t.Object(
  {
    details: t.Object(
      {
        id: t.String({ additionalProperties: true }),
        make: t.String({ additionalProperties: true }),
        registrationNumber: t.String({ additionalProperties: true }),
        colour: t.String({ additionalProperties: true }),
        yearOfManufacture: t.Integer({ additionalProperties: true }),
        taxStatus: t.String({ additionalProperties: true }),
        taxDueDate: t.Date({ additionalProperties: true }),
        motStatus: t.String({ additionalProperties: true }),
        engineCapacity: t.Integer({ additionalProperties: true }),
        co2Emissions: t.Integer({ additionalProperties: true }),
        fuelType: t.String({ additionalProperties: true }),
        markedForExport: t.Boolean({ additionalProperties: true }),
        typeApproval: t.String({ additionalProperties: true }),
        wheelplan: t.String({ additionalProperties: true }),
        artEndDate: __nullable__(t.Date({ additionalProperties: true })),
        motExpiryDate: __nullable__(t.Date({ additionalProperties: true })),
        monthOfFirstRegistration: __nullable__(
          t.Date({ additionalProperties: true }),
        ),
        euroStatus: __nullable__(t.String({ additionalProperties: true })),
        dateOfLastV5CIssued: __nullable__(
          t.Date({ additionalProperties: true }),
        ),
        realDrivingEmissions: __nullable__(
          t.String({ additionalProperties: true }),
        ),
        revenueWeight: __nullable__(t.Integer({ additionalProperties: true })),
      },
      { additionalProperties: true },
    ),
    owner: __nullable__(
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
    ownerships: t.Array(
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
      { additionalProperties: true },
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
        },
        { additionalProperties: true },
      ),
      { additionalProperties: true },
    ),
  },
  { additionalProperties: true },
);

export const VehiclePlainInput = t.Object(
  {
    make: t.String({ additionalProperties: true }),
    model: t.String({ additionalProperties: true }),
    registrationNumber: t.String({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const VehicleRelationsInputCreate = t.Object(
  {
    details: t.Object(
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
            { additionalProperties: true },
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
            { additionalProperties: true },
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
      details: t.Object(
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

export const VehicleWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          OR: t.Array(Self, { additionalProperties: true }),
          id: t.String({ additionalProperties: true }),
          make: t.String({ additionalProperties: true }),
          model: t.String({ additionalProperties: true }),
          registrationNumber: t.String({ additionalProperties: true }),
          ownerId: t.String({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    { $id: "Vehicle" },
  ),
  { additionalProperties: true },
);

export const VehicleWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String({ additionalProperties: true }),
              registrationNumber: t.String({ additionalProperties: true }),
            },
            { additionalProperties: true },
          ),
          { additionalProperties: true },
        ),
        t.Union(
          [
            t.Object({ id: t.String({ additionalProperties: true }) }),
            t.Object({
              registrationNumber: t.String({ additionalProperties: true }),
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
            make: t.String({ additionalProperties: true }),
            model: t.String({ additionalProperties: true }),
            ownerId: t.String({ additionalProperties: true }),
          }),
          { additionalProperties: true },
        ),
      ],
      { additionalProperties: true },
    ),
  { $id: "Vehicle" },
);

export const Vehicle = t.Composite([VehiclePlain, VehicleRelations], {
  additionalProperties: true,
});

export const VehicleInputCreate = t.Composite(
  [VehiclePlainInput, VehicleRelationsInputCreate],
  { additionalProperties: true },
);

export const VehicleInputUpdate = t.Composite(
  [VehiclePlainInput, VehicleRelationsInputUpdate],
  { additionalProperties: true },
);
