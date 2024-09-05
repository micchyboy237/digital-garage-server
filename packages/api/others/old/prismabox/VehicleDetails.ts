import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const VehicleDetailsPlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    fromApi: t.Boolean({ additionalProperties: true }),
    registrationNumber: t.String({ additionalProperties: true }),
    make: t.String({ additionalProperties: true }),
    model: t.String({ additionalProperties: true }),
    colour: t.String({ additionalProperties: true }),
    yearOfManufacture: t.Integer({ additionalProperties: true }),
    taxStatus: t.String({ additionalProperties: true }),
    taxDueDate: t.Date({ additionalProperties: true }),
    motStatus: t.String({ additionalProperties: true }),
    motExpiryDate: __nullable__(t.Date({ additionalProperties: true })),
    engineCapacity: __nullable__(t.Integer({ additionalProperties: true })),
    co2Emissions: __nullable__(t.Integer({ additionalProperties: true })),
    fuelType: __nullable__(t.String({ additionalProperties: true })),
    markedForExport: __nullable__(t.Boolean({ additionalProperties: true })),
    typeApproval: __nullable__(t.String({ additionalProperties: true })),
    wheelplan: __nullable__(t.String({ additionalProperties: true })),
    artEndDate: __nullable__(t.Date({ additionalProperties: true })),
    monthOfFirstRegistration: __nullable__(
      t.Date({ additionalProperties: true }),
    ),
    euroStatus: __nullable__(t.String({ additionalProperties: true })),
    dateOfLastV5CIssued: __nullable__(t.Date({ additionalProperties: true })),
    realDrivingEmissions: __nullable__(
      t.String({ additionalProperties: true }),
    ),
    revenueWeight: __nullable__(t.Integer({ additionalProperties: true })),
    ownershipId: t.String({ additionalProperties: true }),
    createdAt: t.Date({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const VehicleDetailsRelations = t.Object(
  {
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

export const VehicleDetailsPlainInputCreate = t.Object(
  {
    fromApi: t.Boolean({ additionalProperties: true }),
    registrationNumber: t.String({ additionalProperties: true }),
    make: t.String({ additionalProperties: true }),
    model: t.String({ additionalProperties: true }),
    colour: t.String({ additionalProperties: true }),
    yearOfManufacture: t.Integer({ additionalProperties: true }),
    taxStatus: t.String({ additionalProperties: true }),
    taxDueDate: t.Date({ additionalProperties: true }),
    motStatus: t.String({ additionalProperties: true }),
    motExpiryDate: t.Optional(
      __nullable__(t.Date({ additionalProperties: true })),
    ),
    engineCapacity: t.Optional(
      __nullable__(t.Integer({ additionalProperties: true })),
    ),
    co2Emissions: t.Optional(
      __nullable__(t.Integer({ additionalProperties: true })),
    ),
    fuelType: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    markedForExport: t.Optional(
      __nullable__(t.Boolean({ additionalProperties: true })),
    ),
    typeApproval: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    wheelplan: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    artEndDate: t.Optional(
      __nullable__(t.Date({ additionalProperties: true })),
    ),
    monthOfFirstRegistration: t.Optional(
      __nullable__(t.Date({ additionalProperties: true })),
    ),
    euroStatus: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    dateOfLastV5CIssued: t.Optional(
      __nullable__(t.Date({ additionalProperties: true })),
    ),
    realDrivingEmissions: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    revenueWeight: t.Optional(
      __nullable__(t.Integer({ additionalProperties: true })),
    ),
  },
  { additionalProperties: true },
);

export const VehicleDetailsPlainInputUpdate = t.Object(
  {
    fromApi: t.Boolean({ additionalProperties: true }),
    registrationNumber: t.String({ additionalProperties: true }),
    make: t.String({ additionalProperties: true }),
    model: t.String({ additionalProperties: true }),
    colour: t.String({ additionalProperties: true }),
    yearOfManufacture: t.Integer({ additionalProperties: true }),
    taxStatus: t.String({ additionalProperties: true }),
    taxDueDate: t.Date({ additionalProperties: true }),
    motStatus: t.String({ additionalProperties: true }),
    motExpiryDate: t.Optional(
      __nullable__(t.Date({ additionalProperties: true })),
    ),
    engineCapacity: t.Optional(
      __nullable__(t.Integer({ additionalProperties: true })),
    ),
    co2Emissions: t.Optional(
      __nullable__(t.Integer({ additionalProperties: true })),
    ),
    fuelType: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    markedForExport: t.Optional(
      __nullable__(t.Boolean({ additionalProperties: true })),
    ),
    typeApproval: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    wheelplan: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    artEndDate: t.Optional(
      __nullable__(t.Date({ additionalProperties: true })),
    ),
    monthOfFirstRegistration: t.Optional(
      __nullable__(t.Date({ additionalProperties: true })),
    ),
    euroStatus: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    dateOfLastV5CIssued: t.Optional(
      __nullable__(t.Date({ additionalProperties: true })),
    ),
    realDrivingEmissions: t.Optional(
      __nullable__(t.String({ additionalProperties: true })),
    ),
    revenueWeight: t.Optional(
      __nullable__(t.Integer({ additionalProperties: true })),
    ),
  },
  { additionalProperties: true },
);

export const VehicleDetailsRelationsInputCreate = t.Object(
  {
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

export const VehicleDetailsRelationsInputUpdate = t.Partial(
  t.Object(
    {
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

export const VehicleDetailsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object({
        AND: t.Union([Self, t.Array(Self)]),
        NOT: t.Union([Self, t.Array(Self)]),
        OR: t.Array(Self),
        id: t.String(),
        fromApi: t.Boolean(),
        registrationNumber: t.String(),
        make: t.String(),
        model: t.String(),
        colour: t.String(),
        yearOfManufacture: t.Integer(),
        taxStatus: t.String(),
        taxDueDate: t.Date(),
        motStatus: t.String(),
        motExpiryDate: t.Date(),
        engineCapacity: t.Integer(),
        co2Emissions: t.Integer(),
        fuelType: t.String(),
        markedForExport: t.Boolean(),
        typeApproval: t.String(),
        wheelplan: t.String(),
        artEndDate: t.Date(),
        monthOfFirstRegistration: t.Date(),
        euroStatus: t.String(),
        dateOfLastV5CIssued: t.Date(),
        realDrivingEmissions: t.String(),
        revenueWeight: t.Integer(),
        ownershipId: t.String(),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      }),
    { $id: "VehicleDetails" },
  ),
  { additionalProperties: true },
);

export const VehicleDetailsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect([
      t.Partial(t.Object({ id: t.String(), ownershipId: t.String() })),
      t.Union([
        t.Object({ id: t.String() }),
        t.Object({ ownershipId: t.String() }),
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
            fromApi: t.Boolean(),
            registrationNumber: t.String(),
            make: t.String(),
            model: t.String(),
            colour: t.String(),
            yearOfManufacture: t.Integer(),
            taxStatus: t.String(),
            taxDueDate: t.Date(),
            motStatus: t.String(),
            motExpiryDate: t.Date(),
            engineCapacity: t.Integer(),
            co2Emissions: t.Integer(),
            fuelType: t.String(),
            markedForExport: t.Boolean(),
            typeApproval: t.String(),
            wheelplan: t.String(),
            artEndDate: t.Date(),
            monthOfFirstRegistration: t.Date(),
            euroStatus: t.String(),
            dateOfLastV5CIssued: t.Date(),
            realDrivingEmissions: t.String(),
            revenueWeight: t.Integer(),
            ownershipId: t.String(),
            createdAt: t.Date(),
            updatedAt: t.Date(),
          },
          { additionalProperties: true },
        ),
        { additionalProperties: true },
      ),
    ]),
  { $id: "VehicleDetails" },
);

export const VehicleDetails = t.Composite(
  [VehicleDetailsPlain, VehicleDetailsRelations],
  { additionalProperties: true },
);

export const VehicleDetailsInputCreate = t.Composite(
  [VehicleDetailsPlainInputCreate, VehicleDetailsRelationsInputCreate],
  { additionalProperties: true },
);

export const VehicleDetailsInputUpdate = t.Composite(
  [VehicleDetailsPlainInputUpdate, VehicleDetailsRelationsInputUpdate],
  { additionalProperties: true },
);
