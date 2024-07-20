import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const VehicleDetailsPlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    registrationNumber: t.String({ additionalProperties: true }),
    taxStatus: t.String({ additionalProperties: true }),
    taxDueDate: t.Date({ additionalProperties: true }),
    motStatus: t.String({ additionalProperties: true }),
    yearOfManufacture: t.Integer({ additionalProperties: true }),
    engineCapacity: t.Integer({ additionalProperties: true }),
    co2Emissions: t.Integer({ additionalProperties: true }),
    fuelType: t.String({ additionalProperties: true }),
    markedForExport: t.Boolean({ additionalProperties: true }),
    colour: t.String({ additionalProperties: true }),
    typeApproval: t.String({ additionalProperties: true }),
    euroStatus: t.String({ additionalProperties: true }),
    dateOfLastV5CIssued: t.Date({ additionalProperties: true }),
    motExpiryDate: t.Date({ additionalProperties: true }),
    wheelplan: t.String({ additionalProperties: true }),
    monthOfFirstRegistration: t.Date({ additionalProperties: true }),
    createdAt: t.Date({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const VehicleDetailsRelations = t.Object(
  {
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
  },
  { additionalProperties: true },
);

export const VehicleDetailsPlainInput = t.Object(
  {
    registrationNumber: t.String({ additionalProperties: true }),
    taxStatus: t.String({ additionalProperties: true }),
    taxDueDate: t.Date({ additionalProperties: true }),
    motStatus: t.String({ additionalProperties: true }),
    yearOfManufacture: t.Integer({ additionalProperties: true }),
    engineCapacity: t.Integer({ additionalProperties: true }),
    co2Emissions: t.Integer({ additionalProperties: true }),
    fuelType: t.String({ additionalProperties: true }),
    markedForExport: t.Boolean({ additionalProperties: true }),
    colour: t.String({ additionalProperties: true }),
    typeApproval: t.String({ additionalProperties: true }),
    euroStatus: t.String({ additionalProperties: true }),
    dateOfLastV5CIssued: t.Date({ additionalProperties: true }),
    motExpiryDate: t.Date({ additionalProperties: true }),
    wheelplan: t.String({ additionalProperties: true }),
    monthOfFirstRegistration: t.Date({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const VehicleDetailsRelationsInputCreate = t.Object(
  {
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
  },
  { additionalProperties: true },
);

export const VehicleDetailsRelationsInputUpdate = t.Partial(
  t.Object(
    {
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
    },
    { additionalProperties: true },
  ),
  { additionalProperties: true },
);

export const VehicleDetailsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: true })]),
          OR: t.Array(Self, { additionalProperties: true }),
          id: t.String({ additionalProperties: true }),
          registrationNumber: t.String({ additionalProperties: true }),
          taxStatus: t.String({ additionalProperties: true }),
          taxDueDate: t.Date({ additionalProperties: true }),
          motStatus: t.String({ additionalProperties: true }),
          yearOfManufacture: t.Integer({ additionalProperties: true }),
          engineCapacity: t.Integer({ additionalProperties: true }),
          co2Emissions: t.Integer({ additionalProperties: true }),
          fuelType: t.String({ additionalProperties: true }),
          markedForExport: t.Boolean({ additionalProperties: true }),
          colour: t.String({ additionalProperties: true }),
          typeApproval: t.String({ additionalProperties: true }),
          euroStatus: t.String({ additionalProperties: true }),
          dateOfLastV5CIssued: t.Date({ additionalProperties: true }),
          motExpiryDate: t.Date({ additionalProperties: true }),
          wheelplan: t.String({ additionalProperties: true }),
          monthOfFirstRegistration: t.Date({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
    { $id: "VehicleDetails" },
  ),
  { additionalProperties: true },
);

export const VehicleDetailsWhereUnique = t.Recursive(
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
            taxStatus: t.String({ additionalProperties: true }),
            taxDueDate: t.Date({ additionalProperties: true }),
            motStatus: t.String({ additionalProperties: true }),
            yearOfManufacture: t.Integer({ additionalProperties: true }),
            engineCapacity: t.Integer({ additionalProperties: true }),
            co2Emissions: t.Integer({ additionalProperties: true }),
            fuelType: t.String({ additionalProperties: true }),
            markedForExport: t.Boolean({ additionalProperties: true }),
            colour: t.String({ additionalProperties: true }),
            typeApproval: t.String({ additionalProperties: true }),
            euroStatus: t.String({ additionalProperties: true }),
            dateOfLastV5CIssued: t.Date({ additionalProperties: true }),
            motExpiryDate: t.Date({ additionalProperties: true }),
            wheelplan: t.String({ additionalProperties: true }),
            monthOfFirstRegistration: t.Date({ additionalProperties: true }),
            createdAt: t.Date({ additionalProperties: true }),
            updatedAt: t.Date({ additionalProperties: true }),
          }),
          { additionalProperties: true },
        ),
      ],
      { additionalProperties: true },
    ),
  { $id: "VehicleDetails" },
);

export const VehicleDetails = t.Composite(
  [VehicleDetailsPlain, VehicleDetailsRelations],
  { additionalProperties: true },
);

export const VehicleDetailsInputCreate = t.Composite(
  [VehicleDetailsPlainInput, VehicleDetailsRelationsInputCreate],
  { additionalProperties: true },
);

export const VehicleDetailsInputUpdate = t.Composite(
  [VehicleDetailsPlainInput, VehicleDetailsRelationsInputUpdate],
  { additionalProperties: true },
);
