import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const VehiclePlain = t.Object(
  {
    id: t.String({ additionalProperties: true }),
    make: t.String({ additionalProperties: true }),
    model: t.String({ additionalProperties: true }),
    registrationNumber: t.String({ additionalProperties: true }),
    createdAt: t.Date({ additionalProperties: true }),
    updatedAt: t.Date({ additionalProperties: true }),
  },
  { additionalProperties: true },
);

export const VehicleRelations = t.Object(
  {
    details: t.Object(
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
    ),
    ownershipHistory: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          userId: t.String({ additionalProperties: true }),
          vehicleId: t.String({ additionalProperties: true }),
          startDate: __nullable__(t.Date({ additionalProperties: true })),
          endDate: __nullable__(t.Date({ additionalProperties: true })),
          isCurrentOwner: t.Boolean({ additionalProperties: true }),
          isTemporaryOwner: t.Boolean({ additionalProperties: true }),
          canEditDocuments: t.Boolean({ additionalProperties: true }),
        },
        { additionalProperties: true },
      ),
      { additionalProperties: true },
    ),
    documents: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: true }),
          type: t.Union(
            [
              t.Literal("post"),
              t.Literal("invoice"),
              t.Literal("reminder"),
              t.Literal("document"),
            ],
            { additionalProperties: true },
          ),
          displayDate: t.Date({ additionalProperties: true }),
          header: t.String({ additionalProperties: true }),
          description: t.String({ additionalProperties: true }),
          invoiceValue: t.Number({ additionalProperties: true }),
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
          vehicleId: t.String({ additionalProperties: true }),
          createdById: t.String({ additionalProperties: true }),
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
    updatedAt: t.Date({ additionalProperties: true }),
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
    ownershipHistory: t.Optional(
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
      ownershipHistory: t.Partial(
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
          createdAt: t.Date({ additionalProperties: true }),
          updatedAt: t.Date({ additionalProperties: true }),
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
            createdAt: t.Date({ additionalProperties: true }),
            updatedAt: t.Date({ additionalProperties: true }),
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
